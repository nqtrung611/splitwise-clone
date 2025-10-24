# 🔧 GitHub Pages Setup Instructions

## Vấn đề hiện tại:
GitHub Pages đang serve files từ root directory thay vì `docs/` folder, dẫn đến lỗi 404.

## ✅ Cách sửa:

### Bước 1: Vào GitHub Pages Settings
1. Truy cập: https://github.com/nqtrung611/splitwise-clone/settings/pages
2. Hoặc: Repository → Settings → Pages (ở sidebar bên trái)

### Bước 2: Thay đổi Source
- **Hiện tại**: "Deploy from a branch" + "main" + "/ (root)"
- **Thay đổi thành**: "Deploy from a branch" + "main" + "/docs"

### Bước 3: Save Changes
- Click **"Save"**
- GitHub sẽ rebuild và deploy từ `/docs` folder

## 🎯 Kết quả:

Sau 2-3 phút, app sẽ hoạt động tại:
```
https://nqtrung611.github.io/splitwise-clone/
```

## 🔍 Tại sao cần thay đổi:

- **GitHub Actions** đang upload vào artifact nhưng GitHub Pages settings vẫn point to root
- **Docs folder** chứa built files với đúng base path `/splitwise-clone/`
- **Root directory** chứa source code (main.ts, vite.svg) không phải built app

## 📋 Checklist:

- [x] ✅ Built files vào `/docs` folder
- [x] ✅ Push docs folder lên GitHub  
- [ ] ⏳ **Thay đổi GitHub Pages settings** (cần user làm)
- [ ] ⏳ Chờ GitHub Pages deploy (2-3 phút)

## 🎮 Sau khi hoạt động:

**Đăng nhập:**
- Username: `admin`
- Password: `admin123`

**Features:**
- ✅ Tạo/quản lý người dùng
- ✅ Thêm/xóa chi phí  
- ✅ Tính toán balances
- ✅ Upload QR codes
- ✅ Lưu trữ localStorage

App sẽ hoạt động hoàn toàn offline với localStorage! 🚀