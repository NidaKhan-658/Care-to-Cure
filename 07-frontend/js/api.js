// Adjust if your backend runs on a different host/port
const API_BASE = 'http://localhost:3000/api';

async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

function statusClass(status) {
  const map = {
    'Completed': 'status-completed',
    'Scheduled': 'status-scheduled',
    'Confirmed': 'status-confirmed',
    'Rescheduled': 'status-rescheduled',
    'Required': 'status-pending',
    'Cancelled': 'status-cancelled',
    'No-show': 'status-noshow',
    'Declined': 'status-declined',
  };
  return map[status] || 'status-pending';
}

function fmtDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-PH', { year: 'numeric', month: 'short', day: 'numeric' });
}