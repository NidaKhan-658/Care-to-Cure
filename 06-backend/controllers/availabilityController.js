const db = require('../db/db');

exports.getByDoctor = (req, res) => {
  const rows = db.prepare(`SELECT * FROM doctor_availability WHERE doctor_id = ? ORDER BY
    CASE day_of_week
      WHEN 'Monday' THEN 1 WHEN 'Tuesday' THEN 2 WHEN 'Wednesday' THEN 3
      WHEN 'Thursday' THEN 4 WHEN 'Friday' THEN 5 WHEN 'Saturday' THEN 6 ELSE 7
    END`).all(req.params.doctorId);
  res.json(rows);
};

exports.getByDepartment = (req, res) => {
  const rows = db.prepare(`
    SELECT doc.doctor_id, doc.name AS doctor_name, av.day_of_week, av.start_time, av.end_time
    FROM doctors doc
    LEFT JOIN doctor_availability av ON av.doctor_id = doc.doctor_id
    WHERE doc.department_id = ?
    ORDER BY doc.name,
      CASE av.day_of_week
        WHEN 'Monday' THEN 1 WHEN 'Tuesday' THEN 2 WHEN 'Wednesday' THEN 3
        WHEN 'Thursday' THEN 4 WHEN 'Friday' THEN 5 WHEN 'Saturday' THEN 6 ELSE 7
      END
  `).all(req.params.departmentId);
  res.json(rows);
};