const db = require('../db/db');

/**
 * Factory that builds standard GET/POST/PUT/DELETE handlers for a table.
 * Used for entities without special business rules (patients, doctors,
 * departments, consultations, feedback). Appointments/procedures/follow-ups
 * have their own controllers because their status transitions carry rules.
 */
function createCrudController(tableName, primaryKey) {
  return {
    getAll: (req, res) => {
      const rows = db.prepare(`SELECT * FROM ${tableName}`).all();
      res.json(rows);
    },

    getById: (req, res) => {
      const row = db
        .prepare(`SELECT * FROM ${tableName} WHERE ${primaryKey} = ?`)
        .get(req.params.id);
      if (!row) return res.status(404).json({ error: `${tableName} not found` });
      res.json(row);
    },

    create: (req, res) => {
      const columns = Object.keys(req.body);
      const placeholders = columns.map(() => '?').join(', ');
      const values = columns.map((c) => req.body[c]);

      try {
        const result = db
          .prepare(`INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${placeholders})`)
          .run(...values);
        const created = db
          .prepare(`SELECT * FROM ${tableName} WHERE ${primaryKey} = ?`)
          .get(result.lastInsertRowid);
        res.status(201).json(created);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    },

    update: (req, res) => {
      const columns = Object.keys(req.body);
      if (columns.length === 0) return res.status(400).json({ error: 'No fields to update' });

      const setClause = columns.map((c) => `${c} = ?`).join(', ');
      const values = columns.map((c) => req.body[c]);

      try {
        const result = db
          .prepare(`UPDATE ${tableName} SET ${setClause} WHERE ${primaryKey} = ?`)
          .run(...values, req.params.id);
        if (result.changes === 0) return res.status(404).json({ error: `${tableName} not found` });

        const updated = db
          .prepare(`SELECT * FROM ${tableName} WHERE ${primaryKey} = ?`)
          .get(req.params.id);
        res.json(updated);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    },

    remove: (req, res) => {
      const result = db
        .prepare(`DELETE FROM ${tableName} WHERE ${primaryKey} = ?`)
        .run(req.params.id);
      if (result.changes === 0) return res.status(404).json({ error: `${tableName} not found` });
      res.status(204).send();
    },
  };
}

module.exports = createCrudController;