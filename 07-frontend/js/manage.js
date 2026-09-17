// ---------- Tab switching ----------
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
  });
});

// ---------- API write helpers (api.js only has GET) ----------
async function apiPost(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error((await res.json()).error || `API error: ${res.status}`);
  return res.json();
}

async function apiPut(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error((await res.json()).error || `API error: ${res.status}`);
  return res.json();
}

async function apiDelete(path) {
  const res = await fetch(`${API_BASE}${path}`, { method: 'DELETE' });
  if (!res.ok && res.status !== 204) throw new Error(`API error: ${res.status}`);
}

function setApiError() {
  document.getElementById('api-error').style.display = 'block';
}

// ===================================================================
// PATIENTS
// ===================================================================

const patientForm = document.getElementById('patientForm');
const patientsBody = document.getElementById('patients-body');

async function loadPatients() {
  try {
    const patients = await apiGet('/patients');
    if (patients.length === 0) {
      patientsBody.innerHTML = `<tr><td colspan="6">No patients yet. Add one above.</td></tr>`;
      return;
    }
    patientsBody.innerHTML = patients.map(p => `
      <tr>
        <td>${p.patient_id}</td>
        <td>${p.name}</td>
        <td>${fmtDate(p.date_of_birth)}</td>
        <td>${p.gender || '—'}</td>
        <td>${p.contact_info || '—'}</td>
        <td class="row-actions">
          <button class="btn btn-secondary btn-small" onclick="editPatient(${p.patient_id})">Edit</button>
          <button class="btn btn-danger btn-small" onclick="deletePatient(${p.patient_id})">Delete</button>
        </td>
      </tr>
    `).join('');
  } catch (e) {
    setApiError();
  }
}

patientForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('patient_id').value;
  const payload = {
    name: document.getElementById('p_name').value,
    date_of_birth: document.getElementById('p_dob').value || null,
    gender: document.getElementById('p_gender').value || null,
    contact_info: document.getElementById('p_contact').value || null,
    preferred_communication_method: document.getElementById('p_comm').value || null,
    medical_history: document.getElementById('p_history').value || null,
  };

  try {
    if (id) {
      await apiPut(`/patients/${id}`, payload);
    } else {
      await apiPost('/patients', payload);
    }
    resetPatientForm();
    loadPatients();
    loadPatientDropdown(); // keep appointment form's patient list current
  } catch (err) {
    alert(`Could not save patient: ${err.message}`);
  }
});

async function editPatient(id) {
  const p = await apiGet(`/patients/${id}`);
  document.getElementById('patient_id').value = p.patient_id;
  document.getElementById('p_name').value = p.name || '';
  document.getElementById('p_dob').value = p.date_of_birth || '';
  document.getElementById('p_gender').value = p.gender || '';
  document.getElementById('p_contact').value = p.contact_info || '';
  document.getElementById('p_comm').value = p.preferred_communication_method || '';
  document.getElementById('p_history').value = p.medical_history || '';
  document.getElementById('patientFormTitle').textContent = `Edit Patient #${id}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function deletePatient(id) {
  if (!confirm(`Delete patient #${id}? This cannot be undone.`)) return;
  try {
    await apiDelete(`/patients/${id}`);
    loadPatients();
  } catch (err) {
    alert(`Could not delete: ${err.message}. They may have linked appointments.`);
  }
}

function resetPatientForm() {
  patientForm.reset();
  document.getElementById('patient_id').value = '';
  document.getElementById('patientFormTitle').textContent = 'Add New Patient';
}

document.getElementById('patientCancelBtn').addEventListener('click', resetPatientForm);

// ===================================================================
// APPOINTMENTS
// ===================================================================

const appointmentForm = document.getElementById('appointmentForm');
const appointmentsBody = document.getElementById('appointments-body');

let patientsCache = [];
let doctorsCache = [];
let departmentsCache = [];

async function loadPatientDropdown() {
  patientsCache = await apiGet('/patients');
  const select = document.getElementById('a_patient');
  select.innerHTML = patientsCache.map(p => `<option value="${p.patient_id}">${p.name} (#${p.patient_id})</option>`).join('');
}

// Doctors are cached only — the actual dropdown is populated once a
// department is chosen (see the change listener below), so the list
// stays filtered to doctors in that department.
async function loadDoctorDropdown() {
  doctorsCache = await apiGet('/doctors');
}

async function loadDepartmentDropdown() {
  departmentsCache = await apiGet('/departments');
  const select = document.getElementById('a_department');
  select.innerHTML = `<option value="">Select department</option>` +
    departmentsCache.map(d => `<option value="${d.department_id}">${d.name}</option>`).join('');
}

// Doctor dropdown filters by selected department
document.getElementById('a_department').addEventListener('change', async (e) => {
  const deptId = e.target.value;
  const doctorSelect = document.getElementById('a_doctor');

  if (!deptId) {
    doctorSelect.innerHTML = `<option value="">Select department first</option>`;
    document.getElementById('availabilityDisplay').textContent = 'Select a doctor to see their schedule.';
    return;
  }

  const filtered = doctorsCache.filter(d => String(d.department_id) === String(deptId));
  doctorSelect.innerHTML = filtered.length
    ? filtered.map(d => `<option value="${d.doctor_id}">${d.name}</option>`).join('')
    : `<option value="">No doctors in this department</option>`;

  document.getElementById('availabilityDisplay').textContent = 'Select a doctor to see their schedule.';
});

// Show doctor's weekly availability when chosen
document.getElementById('a_doctor').addEventListener('change', async (e) => {
  const doctorId = e.target.value;
  const display = document.getElementById('availabilityDisplay');
  if (!doctorId) {
    display.textContent = 'Select a doctor to see their schedule.';
    return;
  }

  try {
    const slots = await apiGet(`/availability/doctor/${doctorId}`);
    display.innerHTML = slots.length
      ? slots.map(s => `${s.day_of_week}: ${s.start_time}–${s.end_time}`).join(' &nbsp;|&nbsp; ')
      : 'No availability schedule on file for this doctor.';
  } catch (err) {
    display.textContent = 'Could not load availability.';
  }
});

async function loadAppointments() {
  try {
    const appts = await apiGet('/appointments');
    if (appts.length === 0) {
      appointmentsBody.innerHTML = `<tr><td colspan="7">No appointments yet. Add one above.</td></tr>`;
      return;
    }
    appointmentsBody.innerHTML = appts.map(a => {
      const patient = patientsCache.find(p => p.patient_id === a.patient_id);
      const doctor = doctorsCache.find(d => d.doctor_id === a.doctor_id);
      return `
        <tr>
          <td>${a.appointment_id}</td>
          <td>${patient ? patient.name : `#${a.patient_id}`}</td>
          <td>${doctor ? doctor.name : `#${a.doctor_id}`}</td>
          <td>${fmtDate(a.appointment_date)}</td>
          <td>${a.appointment_type || '—'}</td>
          <td><span class="status ${statusClass(a.status)}">${a.status}</span></td>
          <td class="row-actions">
            <button class="btn btn-secondary btn-small" onclick="editAppointment(${a.appointment_id})">Edit</button>
            <button class="btn btn-danger btn-small" onclick="deleteAppointment(${a.appointment_id})">Delete</button>
          </td>
        </tr>
      `;
    }).join('');
  } catch (e) {
    setApiError();
  }
}

appointmentForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('appointment_id').value;
  const payload = {
    patient_id: Number(document.getElementById('a_patient').value),
    doctor_id: Number(document.getElementById('a_doctor').value),
    department_id: Number(document.getElementById('a_department').value),
    appointment_date: document.getElementById('a_date').value,
    appointment_time: document.getElementById('a_time').value || null,
    appointment_type: document.getElementById('a_type').value || null,
    booking_channel: document.getElementById('a_channel').value || null,
    status: document.getElementById('a_status').value,
  };

  try {
    let savedAppointment;
    if (id) {
      savedAppointment = await apiPut(`/appointments/${id}`, payload);
    } else {
      savedAppointment = await apiPost('/appointments', payload);
    }

    // If a prescription file was selected, upload it linked to this appointment
    const fileInput = document.getElementById('a_prescription');
    if (fileInput.files.length > 0) {
      const formData = new FormData();
      formData.append('prescriptionFile', fileInput.files[0]);
      formData.append('patient_id', payload.patient_id);
      formData.append('appointment_id', savedAppointment.appointment_id);

      const res = await fetch(`${API_BASE}/prescriptions`, { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Appointment saved, but the prescription upload failed');
    }

    resetAppointmentForm();
    loadAppointments();
  } catch (err) {
    alert(`Could not save appointment: ${err.message}`);
  }
});

async function editAppointment(id) {
  const a = await apiGet(`/appointments/${id}`);
  document.getElementById('appointment_id').value = a.appointment_id;
  document.getElementById('a_department').value = a.department_id;

  // Re-populate the doctor dropdown for this department before setting the value
  const filtered = doctorsCache.filter(d => String(d.department_id) === String(a.department_id));
  document.getElementById('a_doctor').innerHTML = filtered.length
    ? filtered.map(d => `<option value="${d.doctor_id}">${d.name}</option>`).join('')
    : `<option value="">No doctors in this department</option>`;
  document.getElementById('a_doctor').value = a.doctor_id;

  document.getElementById('a_patient').value = a.patient_id;
  document.getElementById('a_date').value = a.appointment_date || '';
  document.getElementById('a_time').value = a.appointment_time || '';
  document.getElementById('a_type').value = a.appointment_type || '';
  document.getElementById('a_channel').value = a.booking_channel || '';
  document.getElementById('a_status').value = a.status || 'Requested';
  document.getElementById('appointmentFormTitle').textContent = `Edit Appointment #${id}`;

  // Load availability for the pre-selected doctor
  try {
    const slots = await apiGet(`/availability/doctor/${a.doctor_id}`);
    document.getElementById('availabilityDisplay').innerHTML = slots.length
      ? slots.map(s => `${s.day_of_week}: ${s.start_time}–${s.end_time}`).join(' &nbsp;|&nbsp; ')
      : 'No availability schedule on file for this doctor.';
  } catch (err) {
    document.getElementById('availabilityDisplay').textContent = 'Could not load availability.';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function deleteAppointment(id) {
  if (!confirm(`Delete appointment #${id}? This cannot be undone.`)) return;
  try {
    await apiDelete(`/appointments/${id}`);
    loadAppointments();
  } catch (err) {
    alert(`Could not delete: ${err.message}`);
  }
}

function resetAppointmentForm() {
  appointmentForm.reset();
  document.getElementById('appointment_id').value = '';
  document.getElementById('appointmentFormTitle').textContent = 'Add New Appointment';
  document.getElementById('a_doctor').innerHTML = `<option value="">Select department first</option>`;
  document.getElementById('availabilityDisplay').textContent = 'Select a doctor to see their schedule.';
}

document.getElementById('appointmentCancelBtn').addEventListener('click', resetAppointmentForm);

// ---------- Init ----------
(async function init() {
  await loadPatientDropdown();
  await loadDoctorDropdown();
  await loadDepartmentDropdown();
  await loadPatients();
  await loadAppointments();
})();