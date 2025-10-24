# 💰 Splitwise Clone - Ứng Dụng Chia Sẻ Chi Phí

Một ứng dụng web hiện đại giống Splitwise được xây dựng bằng **TypeScript**, **Vite**, và **Tailwind CSS** để giúp bạn chia sẻ chi phí với bạn bè một cách dễ dàng.

## ✨ Tính Năng

### 🎯 Tính Năng Chính
- **Quản lý chi phí**: Thêm, xóa và theo dõi các chi phí hàng ngày
- **Chia tiền thông minh**: Tự động tính toán số tiền mỗi người cần trả
- **Theo dõi số dư**: Xem ai nợ ai bao nhiều tiền
- **Phân loại chi phí**: Tổ chức chi phí theo danh mục (ăn uống, di chuyển, v.v.)
- **Tính toán tối ưu**: Gợi ý cách thanh toán ít giao dịch nhất

### 💎 Tính Năng Nâng Cao
- **Giao diện thân thiện**: Thiết kế đẹp mắt với Tailwind CSS
- **Responsive**: Hoạt động mượt mà trên mọi thiết bị
- **Xem trước chia tiền**: Hiển thị chi tiết trước khi thêm chi phí
- **Lọc theo danh mục**: Tìm kiếm chi phí theo loại
- **Thống kê tổng quan**: Dashboard hiển thị tình hình tài chính

## 🚀 Hướng Dẫn Sử Dụng

### Yêu Cầu Hệ Thống
- **Node.js** 16.x hoặc mới hơn
- **npm** hoặc **yarn**
- Trình duyệt web hiện đại

### Cài Đặt

1. **Clone repository** (nếu có)
   ```bash
   git clone <repository-url>
   cd test-money
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Chạy development server**
   ```bash
   npm run dev
   ```

4. **Mở trình duyệt** và truy cập `http://localhost:5173`

### Các Lệnh Có Sẵn

```bash
# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview build production
npm run preview
```

## 📖 Hướng Dẫn Sử Dụng Ứng Dụng

### 1. Thêm Chi Phí Mới
- Nhấn nút **"+ Thêm chi phí"** ở góc trên bên phải
- Điền thông tin chi phí:
  - **Mô tả**: Tên chi phí (ví dụ: "Ăn tối tại nhà hàng")
  - **Số tiền**: Nhập số tiền bằng VND
  - **Người trả**: Chọn ai đã trả tiền
  - **Chia cho ai**: Chọn những người tham gia chia tiền
  - **Danh mục**: Chọn loại chi phí
  - **Ghi chú**: Thêm chi tiết (tùy chọn)

### 2. Xem Số Dư
- **Tổng quan số dư** hiển thị:
  - Số tiền bạn được nợ (màu xanh)
  - Số tiền bạn nợ (màu đỏ)
  - Tổng số dư ròng
- **Chi tiết**: Xem ai nợ bạn bao nhiều và bạn nợ ai bao nhiều

### 3. Gợi Ý Thanh Toán
- Ứng dụng tự động tính toán cách thanh toán tối ưu
- Hiển thị giao dịch ít nhất để thanh toán hết nợ
- Màu sắc rõ ràng: xanh cho "nhận tiền", cam cho "chuyển tiền"

### 4. Lọc Chi Phí
- Sử dụng dropdown **"Tất cả danh mục"** để lọc theo loại chi phí
- Nhấn **"❌ Xóa bộ lọc"** để hiển thị tất cả

### 5. Quản Lý Chi Phí
- Nhấn **"🗑️ Xóa"** để xóa chi phí (có xác nhận)
- Xem chi tiết chia tiền trong từng chi phí

## 🛠️ Công Nghệ Sử Dụng

### Frontend Framework
- **TypeScript**: Ngôn ngữ lập trình chính với type safety
- **Vite**: Build tool nhanh và hiệu quả
- **Tailwind CSS**: Framework CSS utility-first cho styling

### Kiến Trúc Ứng Dụng
- **Component-based**: Tổ chức code theo components tái sử dụng
- **Type-safe**: Đảm bảo an toàn kiểu dữ liệu với TypeScript
- **Responsive Design**: Tự động thích ứng mọi kích thước màn hình

### Cấu Trúc Thư Mục
```
src/
├── components/          # Các component UI
│   ├── ExpenseCard.ts   # Component hiển thị chi phí
│   ├── BalanceCard.ts   # Component hiển thị số dư
│   └── AddExpenseModal.ts # Modal thêm chi phí
├── types.ts            # Định nghĩa TypeScript types
├── utils.ts            # Các hàm tiện ích
├── style.css          # Styles chính
└── main.ts            # Entry point của ứng dụng
```

## 🎨 Giao Diện Người Dùng

### Màu Sắc Chủ Đạo
- **Xanh lá**: `#5CB85C` - Cho số dư dương, nút chính
- **Đỏ**: `#EF4444` - Cho số dư âm, cảnh báo  
- **Cam**: `#F97316` - Cho gợi ý thanh toán
- **Xám**: Các màu xám khác nhau cho text và background

### Responsive Design
- **Mobile First**: Thiết kế ưu tiên thiết bị di động
- **Tablet Friendly**: Tối ưu cho máy tính bảng
- **Desktop Ready**: Hoạt động tốt trên màn hình lớn

## 🔮 Tính Năng Tương Lai

### Phiên Bản Tiếp Theo
- [ ] **Đồng bộ dữ liệu**: Lưu trữ trên cloud
- [ ] **Nhiều người dùng**: Chia sẻ nhóm chi phí
- [ ] **Thông báo**: Nhắc nhở thanh toán
- [ ] **Xuất báo cáo**: Export dữ liệu Excel/PDF
- [ ] **Đa tiền tệ**: Hỗ trợ nhiều loại tiền
- [ ] **Ảnh hóa đơn**: Upload và lưu trữ hóa đơn
- [ ] **Tích hợp thanh toán**: Liên kết với ví điện tử

### Cải Thiện UX/UI
- [ ] **Dark mode**: Chế độ tối
- [ ] **Animations**: Hiệu ứng chuyển động mượt mà
- [ ] **PWA**: Progressive Web App
- [ ] **Offline mode**: Hoạt động không cần internet

## 🤝 Đóng Góp

Dự án này được tạo ra như một demo cho ứng dụng chia sẻ chi phí. Nếu bạn muốn đóng góp:

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/TinhNangMoi`)
3. Commit changes (`git commit -m 'Thêm tính năng mới'`)
4. Push to branch (`git push origin feature/TinhNangMoi`)
5. Tạo Pull Request

## 📄 Giấy Phép

Dự án này được phát hành dưới giấy phép MIT - xem file `LICENSE` để biết thêm chi tiết.

## 🆘 Hỗ Trợ

Nếu bạn gặp vấn đề hoặc có câu hỏi:

1. **Kiểm tra Issues**: Xem các vấn đề đã được báo cáo
2. **Tạo Issue mới**: Mô tả chi tiết vấn đề gặp phải
3. **Kiểm tra Console**: Mở Developer Tools để xem lỗi

## 🙏 Cảm Ơn

Cảm ơn bạn đã sử dụng Splitwise Clone! Ứng dụng này được tạo ra với mục đích học tập và thực hành các công nghệ web hiện đại.

---

**Phát triển bởi**: [Tên của bạn]  
**Phiên bản**: 1.0.0  
**Cập nhật**: Tháng 10, 2024