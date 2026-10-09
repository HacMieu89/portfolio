/**
 * Business Intake Form (Non-Tech) Handler
 * Collects 7 non-tech questionnaire answers, custom "other" write-ins,
 * formats structured email text, and triggers mailto: client & clipboard copy.
 */

const TARGET_EMAIL = 'chientrantrong89@gmail.com';

function sendIntakeMail() {
  const clientNameEl = document.getElementById('client_name');
  const projectNameEl = document.getElementById('project_name');
  const clientContactEl = document.getElementById('client_contact');
  const clientNotesEl = document.getElementById('client_notes');

  const clientName = (clientNameEl ? clientNameEl.value.trim() : '') || 'Khách hàng';
  const projectName = (projectNameEl ? projectNameEl.value.trim() : '') || 'Dự án mới';
  const clientContact = (clientContactEl ? clientContactEl.value.trim() : '') || 'Chưa cung cấp';
  const clientNotes = (clientNotesEl ? clientNotesEl.value.trim() : '') || 'Không có ghi chú thêm.';

  function getAnswer(name, otherRadioId, otherTextId) {
    const el = document.querySelector(`input[name="${name}"]:checked`);
    if (!el) return 'Chưa chọn';
    if (el.id === otherRadioId) {
      const otherInput = document.getElementById(otherTextId);
      const customText = otherInput ? otherInput.value.trim() : '';
      return customText ? `[Lựa chọn khác] ${customText}` : '[Lựa chọn khác] (Chưa điền cụ thể)';
    }
    return el.value;
  }

  const q1 = getAnswer('scale', 'q1_other_radio', 'q1_other_text');
  const q2 = getAnswer('sla', 'q2_other_radio', 'q2_other_text');
  const q3 = getAnswer('data_sec', 'q3_other_radio', 'q3_other_text');
  const q4 = getAnswer('ai_need', 'q4_other_radio', 'q4_other_text');
  const q5 = getAnswer('auth', 'q5_other_radio', 'q5_other_text');
  const q6 = getAnswer('budget', 'q6_other_radio', 'q6_other_text');
  const q7 = getAnswer('timeline', 'q7_other_radio', 'q7_other_text');

  const subject = `[Khảo sát Kiến trúc] Yêu cầu từ ${clientName} - Dự án ${projectName}`;

  const body = `Kính gửi Chuyên gia DevOps & AI Automation (${TARGET_EMAIL}),

Tôi gửi thông tin khảo sát nhu cầu kiến trúc hệ thống như sau:

==================================================
1. THÔNG TIN KHÁCH HÀNG & DỰ ÁN:
• Người đại diện: ${clientName}
• Dự án / Doanh nghiệp: ${projectName}
• Email / SĐT liên hệ: ${clientContact}

==================================================
2. KẾT QUẢ KHẢO SÁT NHU CẦU (FORM 1 - NON-TECH):
1. Số lượng người dùng & Giao dịch hàng ngày:
   → ${q1}

2. Kỳ vọng Độ ổn định & Gián đoạn bảo trì (SLA):
   → ${q2}

3. Dữ liệu của Doanh nghiệp & Mức độ an toàn:
   → ${q3}

4. Nhu cầu Ứng dụng Trí tuệ Nhân tạo (AI):
   → ${q4}

5. Đăng nhập & Quản lý Phân quyền:
   → ${q5}

6. Ngân sách Máy chủ hàng tháng:
   → ${q6}

7. Thời hạn mong muốn Ra mắt (Timeline):
   → ${q7}

==================================================
3. GHI CHÚ BỔ SUNG / BÀI TOÁN ĐẶC THÙ:
${clientNotes}

==================================================
(Bản khảo sát gửi từ website portfolio: devops.ai)`;

  const mailtoUrl = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Hiển thị khung sao chép dự phòng
  const statusBox = document.getElementById('intake-status');
  const copyTextarea = document.getElementById('intake-copy-content');
  if (statusBox && copyTextarea) {
    copyTextarea.value = body;
    statusBox.classList.remove('hidden');
    statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Kích hoạt mở email client
  window.location.href = mailtoUrl;
}

function copyIntakeContent() {
  const copyTextarea = document.getElementById('intake-copy-content');
  if (!copyTextarea) return;
  navigator.clipboard.writeText(copyTextarea.value).then(() => {
    const copyBtn = document.getElementById('btn-copy-intake');
    if (copyBtn) {
      const originalText = copyBtn.innerText;
      copyBtn.innerText = '✓ Đã sao chép thành công!';
      copyBtn.classList.remove('bg-cyan-500/20', 'text-cyan-300');
      copyBtn.classList.add('bg-emerald-500/20', 'text-emerald-300');
      setTimeout(() => {
        copyBtn.innerText = originalText;
        copyBtn.classList.add('bg-cyan-500/20', 'text-cyan-300');
        copyBtn.classList.remove('bg-emerald-500/20', 'text-emerald-300');
      }, 3000);
    }
  });
}

function resetIntakeForm() {
  const form = document.getElementById('intake-form');
  if (form) form.reset();
  const statusBox = document.getElementById('intake-status');
  if (statusBox) statusBox.classList.add('hidden');
}

// Export for module systems if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sendIntakeMail, copyIntakeContent, resetIntakeForm };
}
