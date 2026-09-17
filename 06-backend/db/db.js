const Database = require('better-sqlite3');
const path = require('path');

// The .db file lives at the project root, alongside schema.sql
const dbPath = path.join(__dirname, '..', '..', 'care_to_cure.db');
const db = new Database(dbPath);

db.pragma('foreign_keys = ON');

module.exports = db;