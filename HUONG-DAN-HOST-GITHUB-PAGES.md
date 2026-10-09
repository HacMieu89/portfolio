# HƯỚNG DẪN 3 BƯỚC ĐƯA PORTFOLIO LÊN GITHUB PAGES MIỄN PHÍ

Bạn có thể host trang web này hoàn toàn miễn phí trên GitHub với tên miền dạng:
`https://<ten-user-github>.github.io/portfolio/` (hoặc `https://<ten-user-github>.github.io`)

---

## CÁCH 1: DÙNG DÒNG LỆNH (GIT BASH / POWERSHELL) - NHANH NHẤT (2 PHÚT)

### Bước 1: Tạo Repository mới trên GitHub
1. Đăng nhập vào [GitHub.com](https://github.com).
2. Bấm vào dấu **`+`** ở góc trên bên phải $\rightarrow$ Chọn **New repository**.
3. Đặt tên repository: ví dụ `portfolio` (hoặc `<ten-user-github>.github.io` nếu muốn trang web hiển thị ở domain gốc).
4. Để chế độ **Public** (Bắt buộc để dùng GitHub Pages miễn phí).
5. **Không** tích chọn "Add a README file" $\rightarrow$ Bấm nút xanh **Create repository**.

### Bước 2: Đẩy thư mục portfolio lên GitHub
Mở PowerShell hoặc Git Bash tại máy của bạn và chạy các lệnh sau:

```powershell
# 1. Di chuyển vào thư mục portfolio
cd d:\Bussiness\portfolio

# 2. Khởi tạo git và commit
git init
git add .
git commit -m "Initial portfolio commit with AI architecture case study"

# 3. Đổi tên nhánh sang main
git branch -M main

# 4. Gắn link repo GitHub của bạn (thay bằng link repo bạn vừa tạo ở Bước 1)
git remote add origin https://github.com/<ten-user-github>/portfolio.git

# 5. Đẩy code lên GitHub
git push -u origin main
```

---

## CÁCH 2: KÉO THẢ TRỰC TIẾP TRÊN TRÌNH DUYỆT (KHÔNG CẦN GÕ LỆNH)

Nếu bạn không muốn gõ lệnh:
1. Tạo Repo mới trên GitHub tên `portfolio` (chọn Public).
2. Ở màn hình repo mới, bấm vào link **"uploading an existing file"**.
3. Kéo thả file `index.html` trong thư mục `d:\Bussiness\portfolio\` vào trình duyệt.
4. Bấm nút xanh **Commit changes**.

---

## BƯỚC 3: BẬT TÍNH NĂNG GITHUB PAGES (1 CLICK)

1. Trong trang Repository trên GitHub, vào mục **Settings** (tab bánh răng ở trên cùng).
2. Ở thanh menu bên trái, tìm và bấm vào mục **Pages** (trong phần *Code and automation*).
3. Tại phần **Build and deployment**:
   - **Source:** Chọn `Deploy from a branch`.
   - **Branch:** Chọn nhánh `main` và thư mục `/(root)` $\rightarrow$ Bấm **Save**.
4. Chờ khoảng 1–2 phút, F5 tải lại trang. Bạn sẽ thấy một thông báo màu xanh lá cây:
   > *"Your site is live at `https://<ten-user-github>.github.io/portfolio/`"*

---

## BƯỚC 4: TÙY CHỈNH THÔNG TIN CÁ NHÂN CỦA BẠN
Mở file `d:\Bussiness\portfolio\index.html` bằng bất kỳ editor nào:
- Tìm `mailto:chientrantrong89@gmail.com` (đã được cấu hình mặc định).
- Tìm link Telegram `https://t.me/` và điền username Telegram của bạn (ví dụ: `https://t.me/your_username`).
- Nếu muốn chỉnh sửa tiêu đề hoặc tên của bạn, chỉ cần sửa các thẻ văn bản trong file `index.html`.
