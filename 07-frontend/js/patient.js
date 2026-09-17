const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultList = document.getElementById('resultList');
const journeyPanel = document.getElementById('journeyPanel');

searchBtn.addEventListener('click', runSearch);
searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') runSearch(); });

async function runSearch() {
  const q = searchInput.value.trim();
  if (!q) return;

  try {
    const patients = await apiGet(`/patients/search?q=${encodeURIComponent(q)}`);
    renderResults(patients);
  } catch (err) {
    resultList.innerHTML = `<div class="result-row">Could not reach the API. Is the backend running on localhost:3000?</div>`;
  }
}

function renderResults(patients) {
  if (patients.length === 0) {
    resultList.innerHTML = `<div class="result-row">No matching patients found.</div>`;
    return;
  }

  resultList.innerHTML = patients.map(p => `
    <div class="result-row" data-id="${p.patient_id}">
      <span><strong>${p.name}</strong> — Patient #${p.patient_id}</span>
      <span>${p.contact_info || ''}</span>
    </div>
  `).join('');

  resultList.querySelectorAll('.result-row').forEach(row => {
    row.addEventListener('click', () => loadJourney(row.dataset.id));
  });
}

async function loadJourney(patientId) {
  try {
    const data = await apiGet(`/patients/${patientId}/journey`);
    renderJourney(data);
  } catch (err) {
    journeyPanel.innerHTML = `<div class="empty-state">Could not load this patient's journey.</div>`;
  }
}

function renderJourney(data) {
  const { patient, appointments, consultations, procedures, followUps, feedback } = data;

  // Merge all events into one chronological timeline
  const events = [];

  appointments.forEach(a => events.push({
    date: a.appointment_date,
    type: 'Appointment',
    title: `${a.appointment_type || 'Appointment'} with Doctor #${a.doctor_id}`,
    status: a.status,
    meta: a.cancellation_reason || a.no_show_reason || `Booked via ${a.booking_channel || 'unknown channel'}`,
  }));

  consultations.forEach(c => events.push({
    date: c.consultation_date,
    type: 'Consultation',
    title: c.outcome || 'Consultation recorded',
    status: 'Completed',
    meta: `Department #${c.department_id}`,
  }));

  procedures.forEach(p => events.push({
    date: p.scheduled_date || p.recommendation_date,
    type: 'Procedure',
    title: p.procedure_type,
    status: p.status,
    meta: p.non_completion_reason || `Decision: ${p.patient_decision}`,
  }));

  followUps.forEach(f => events.push({
    date: f.scheduled_date || f.required_date,
    type: 'Follow-up',
    title: `Follow-up (${f.source_type})`,
    status: f.status,
    meta: f.non_attendance_reason || f.attendance_status || 'Pending',
  }));

  feedback.forEach(fb => events.push({
    date: fb.submitted_date,
    type: 'Feedback',
    title: `Satisfaction: ${fb.satisfaction_score ?? '—'}/5`,
    status: 'Completed',
    meta: fb.comments || '',
  }));

  events.sort((a, b) => new Date(a.date) - new Date(b.date));

  const alertStatuses = ['Cancelled', 'No-show', 'Declined'];
  const cautionStatuses = ['Scheduled', 'Confirmed', 'Rescheduled', 'Required'];

  const timelineHtml = events.map((e, i) => {
    const cls = alertStatuses.includes(e.status) ? 'is-alert'
      : cautionStatuses.includes(e.status) ? 'is-caution' : '';
    return `
      <div class="timeline-item ${cls}" data-index="${i + 1}">
        <div class="t-type">${e.type} · ${fmtDate(e.date)}</div>
        <div class="t-title">${e.title}</div>
        <div class="t-meta"><span class="status ${statusClass(e.status)}">${e.status}</span> &nbsp; ${e.meta}</div>
      </div>
    `;
  }).join('');

  journeyPanel.innerHTML = `
    <h2>${patient.name} <span style="color:var(--ink-soft); font-weight:400; font-size:0.9rem;">— Patient #${patient.patient_id}</span></h2>
    <p style="color:var(--ink-soft); margin-bottom:20px;">
      ${patient.gender || ''} · DOB ${fmtDate(patient.date_of_birth)} · ${patient.contact_info || 'No contact on file'}
    </p>
    ${events.length ? `<div class="timeline">${timelineHtml}</div>` : '<div class="empty-state">No journey events recorded yet for this patient.</div>'}
  `;
}