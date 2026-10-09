/**
 * Case Study Interactive Tabs Controller
 * Manages 5 architecture deep-dive views:
 * - overview: Tổng quan bài toán 10k/ngày & giải pháp
 * - infra: Triển khai On-Premise vs AWS ECS/RDS
 * - litellm: Dựng AI Gateway LiteLLM Proxy & tối ưu chi phí
 * - session: Keycloak SSO & Quản lý Session 24 giờ
 * - ops: Giám sát Prometheus/Grafana & SLA 99.9%
 */

function switchTab(tabId) {
  // Ẩn tất cả panes
  const panes = document.querySelectorAll('.tab-pane');
  panes.forEach(pane => pane.classList.add('hidden'));

  // Bỏ active của tất cả buttons
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.classList.remove('text-cyan-400', 'bg-cyan-500/10', 'border-cyan-500/30');
    btn.classList.add('text-slate-400');
  });

  // Hiện pane được chọn
  const activePane = document.getElementById('pane-' + tabId);
  if (activePane) {
    activePane.classList.remove('hidden');
  }

  // Kích hoạt button được chọn
  const activeBtn = document.getElementById('btn-' + tabId);
  if (activeBtn) {
    activeBtn.classList.remove('text-slate-400');
    activeBtn.classList.add('text-cyan-400', 'bg-cyan-500/10', 'border-cyan-500/30');
  }
}

// Export for module systems if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { switchTab };
}
