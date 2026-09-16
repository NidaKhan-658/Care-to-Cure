const express = require('express');
const router = express.Router();
const controller = require('../controllers/followUpController');

router.post('/:id/attendance', controller.recordAttendance); // FR-030/031
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;