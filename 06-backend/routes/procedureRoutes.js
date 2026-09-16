const express = require('express');
const router = express.Router();
const controller = require('../controllers/procedureController');

router.post('/:id/decision', controller.recordDecision);           // FR-023
router.post('/:id/non-completion', controller.recordNonCompletion); // FR-026
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;