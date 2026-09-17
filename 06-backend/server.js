const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/uploads', express.static(require('path').join(__dirname, 'uploads')));
app.use(express.json());

app.use('/api/patients', require('./routes/patientRoutes'));
app.use('/api/doctors', require('./routes/doctorRoutes'));
app.use('/api/departments', require('./routes/departmentRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));
app.use('/api/consultations', require('./routes/consultationRoutes'));
app.use('/api/procedures', require('./routes/procedureRoutes'));
app.use('/api/follow-ups', require('./routes/followUpRoutes'));
app.use('/api/feedback', require('./routes/feedbackRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));
app.use('/api/availability', require('./routes/availabilityRoutes'));
app.use('/api/prescriptions', require('./routes/prescriptionRoutes'));

app.get('/', (req, res) => {
  res.json({ message: 'Care to Cure API is running', docs: '/api/analytics/overview' });
});

app.listen(PORT, () => {
  console.log(`Care to Cure API running on http://localhost:${PORT}`);
});
