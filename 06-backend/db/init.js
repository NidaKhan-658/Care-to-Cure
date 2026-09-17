const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');
const Database = require('better-sqlite3');

const ROOT = path.join(__dirname, '..', '..');
const dbPath = path.join(ROOT, 'care_to_cure.db');
const schemaPath = path.join(ROOT, '05-database', 'schema.sql');
const dataDir = path.join(ROOT, '04-data');

// Start fresh each time this is run
if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);

const db = new Database(dbPath);
db.pragma('foreign_keys = OFF'); // off during bulk load, on after

console.log('Creating schema...');
const schemaSql = fs.readFileSync(schemaPath, 'utf8');
db.exec(schemaSql);

// Order matters: parents before children (FK dependencies)
const loadOrder = [
  { file: 'departments.csv', table: 'departments' },
  { file: 'doctors.csv', table: 'doctors' },
  { file: 'patients.csv', table: 'patients' },
  { file: 'appointments.csv', table: 'appointments' },
  { file: 'consultations.csv', table: 'consultations' },
  { file: 'procedures.csv', table: 'procedures' },
  { file: 'follow_ups.csv', table: 'follow_ups' },
  { file: 'feedback.csv', table: 'feedback' },
  { file: 'reason_codes.csv', table: 'reason_codes' },
];

for (const { file, table } of loadOrder) {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${file} (not found)`);
    continue;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const rows = parse(raw, { columns: true, skip_empty_lines: true });

  if (rows.length === 0) continue;

  const columns = Object.keys(rows[0]);
  const placeholders = columns.map(() => '?').join(', ');
  const insert = db.prepare(
    `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`
  );

  const insertMany = db.transaction((records) => {
    for (const record of records) {
      const values = columns.map((col) => (record[col] === '' ? null : record[col]));
      insert.run(...values);
    }
  });

  insertMany(rows);
  console.log(`Loaded ${rows.length} rows into ${table}`);
}

db.pragma('foreign_keys = ON');
console.log('Database ready at', dbPath);
db.close();
