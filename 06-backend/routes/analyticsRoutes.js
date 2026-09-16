const express = require('express');
const router = express.Router();
const controller = require('../controllers/analyticsController');

router.get('/overview', controller.getOverviewKPIs);                  // FR-038 to FR-040
router.get('/cancellation-reasons', controller.getCancellationReasons);
router.get('/procedure-completion', controller.getProcedureCompletion); // FR-041
router.get('/follow-up-compliance', controller.getFollowUpCompliance);  // FR-042
router.get('/retention', controller.getRetentionRate);                  // FR-043
router.get('/doctor-performance', controller.getDoctorPerformance);     // FR-044
router.get('/department-performance', controller.getDepartmentPerformance); // FR-045
router.get('/drop-offs', controller.getDropOffs);                       // FR-034 to FR-037

module.exports = router;