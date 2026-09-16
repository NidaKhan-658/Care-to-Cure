const express = require('express');
const router = express.Router();
const controller = require('../controllers/appointmentController');

router.post('/:id/cancel', controller.cancel);          // FR-013/014
router.post('/:id/no-show', controller.markNoShow);      // FR-015/016
router.post('/:id/reschedule', controller.reschedule);   // FR-018/019
router.patch('/:id/status', controller.updateStatus);    // FR-009
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;