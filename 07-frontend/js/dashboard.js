document.addEventListener('DOMContentLoaded', loadDashboard);

async function loadDashboard() {
  await Promise.all([
    loadOverview(),
    loadRetention(),
    loadProcedureAndFollowUp(),
    loadDropOffReasons(),
    loadDepartmentPerformance(),
    loadDoctorPerformance(),
  ]);
}

async function loadOverview() {
  try {
    const o = await apiGet('/analytics/overview');
    document.getElementById('kpi-attendance').textContent = `${o.attendance_rate_pct ?? '—'}%`;
    document.getElementById('kpi-noshow').textContent = `${o.no_show_rate_pct ?? '—'}%`;
    document.getElementById('kpi-cancellation').textContent = `${o.cancellation_rate_pct ?? '—'}%`;
    document.getElementById('kpi-total').textContent = o.total_scheduled_appointments ?? '—';
  } catch (e) {
    setApiError();
  }
}

async function loadRetention() {
  try {
    const r = await apiGet('/analytics/retention?windowDays=90');
    document.getElementById('kpi-retention').textContent = `${r.retention_rate_pct ?? '—'}%`;
    document.getElementById('retention-detail').textContent =
      `${r.returning_patient_count ?? 0} of ${r.eligible_patient_count ?? 0} eligible patients returned within ${r.window_days} days`;
  } catch (e) { /* overview already surfaces the connection error */ }
}

async function loadProcedureAndFollowUp() {
  try {
    const proc = await apiGet('/analytics/procedure-completion');
    document.getElementById('kpi-procedure').textContent = `${proc.procedure_completion_rate_pct ?? '—'}%`;

    const fu = await apiGet('/analytics/follow-up-compliance');
    document.getElementById('kpi-followup').textContent = `${fu.follow_up_compliance_pct ?? '—'}%`;
  } catch (e) { /* handled by overview */ }
}

async function loadDropOffReasons() {
  try {
    const reasons = await apiGet('/analytics/cancellation-reasons');
    const tbody = document.getElementById('reasons-body');
    if (reasons.length === 0) {
      tbody.innerHTML = `<tr><td colspan="3">No cancellation or no-show data yet.</td></tr>`;
      return;
    }
    tbody.innerHTML = reasons.map(r => `
      <tr>
        <td>${r.reason}</td>
        <td><span class="status ${r.reason_type === 'No-show' ? 'status-noshow' : 'status-cancelled'}">${r.reason_type}</span></td>
        <td>${r.occurrence_count}</td>
      </tr>
    `).join('');
  } catch (e) { /* handled by overview */ }
}

async function loadDepartmentPerformance() {
  try {
    const depts = await apiGet('/analytics/department-performance');
    const tbody = document.getElementById('dept-body');
    tbody.innerHTML = depts.map(d => `
      <tr>
        <td>${d.department_name}</td>
        <td>${d.total_appointments}</td>
        <td>${d.attendance_rate_pct ?? '—'}%</td>
        <td>${d.no_show_rate_pct ?? '—'}%</td>
        <td>${d.cancellation_rate_pct ?? '—'}%</td>
      </tr>
    `).join('');
  } catch (e) { /* handled by overview */ }
}

async function loadDoctorPerformance() {
  try {
    const doctors = await apiGet('/analytics/doctor-performance');
    const tbody = document.getElementById('doctor-body');
    tbody.innerHTML = doctors.map(d => `
      <tr>
        <td>${d.doctor_name}</td>
        <td>${d.total_appointments}</td>
        <td>${d.attendance_rate_pct ?? '—'}%</td>
        <td>${d.avg_satisfaction_score ?? '—'}</td>
      </tr>
    `).join('');
  } catch (e) { /* handled by overview */ }
}

function setApiError() {
  document.getElementById('api-error').style.display = 'block';
}