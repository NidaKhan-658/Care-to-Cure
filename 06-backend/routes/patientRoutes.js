const express = require('express');
const router = express.Router();
const controller = require('../controllers/patientController');

router.get('/search', controller.search);          // FR-002
router.get('/:id/journey', controller.getJourney);  // FR-003
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;