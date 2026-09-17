const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');
const db = require('./db');

const dataDir = path.join(__dirname, '..', '..', '04-data');

function upsertCsv(file, table, conflictCol) {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${file} (not found)`);
    return;
  }
  const rows = parse(fs.readFileSync(filePath, 'utf8'), { columns: true, skip_empty_lines: true });
  let inserted = 0;

  for (const row of rows) {
    const exists = db.prepare(`SELECT 1 FROM ${table} WHERE ${conflictCol} = ?`).get(row[conflictCol]);
    if (exists) continue;

    const columns = Object.keys(row);
    const placeholders = columns.map(() => '?').join(', ');
    const values = columns.map((c) => (row[c] === '' ? null : row[c]));
    db.prepare(`INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`).run(...values);
    inserted++;
  }
  console.log(`Inserted ${inserted} new rows into ${table} (${rows.length - inserted} already existed, skipped)`);
}

upsertCsv('departments.csv', 'departments', 'department_id');
upsertCsv('doctors.csv', 'doctors', 'doctor_id');
upsertCsv('doctor_availability.csv', 'doctor_availability', 'availability_id');

console.log('Seed complete.');