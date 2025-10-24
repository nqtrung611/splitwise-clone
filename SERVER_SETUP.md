# Splitwise Clone - Server Setup

## 🚀 Hoàn tất chuyển đổi sang Server-based Storage!

Ứng dụng đã được cập nhật để lưu trữ dữ liệu trên server thay vì localStorage. Giờ mọi người có thể chia sẻ dữ liệu thật sự!

## 📋 Yêu cầu hệ thống

- **Node.js**: v16 trở lên
- **npm**: v8 trở lên
- **2 terminal/port**: 3001 (server) và 5173 (frontend)

## 🛠️ Cài đặt và chạy

### 1. Cài đặt dependencies

```bash
# Cài đặt frontend dependencies
cd d:\work\test-money
npm install

# Cài đặt server dependencies  
cd d:\work\test-money\server
npm install
```

### 2. Chạy ứng dụng

**Terminal 1 - Backend Server:**
```bash
cd d:\work\test-money\server
npm start
```
Server sẽ chạy tại: `http://localhost:3001`

**Terminal 2 - Frontend:**
```bash
cd d:\work\test-money
npm run dev
```
Frontend sẽ chạy tại: `http://localhost:5173`

## 🔐 Đăng nhập mặc định

- **Username**: `admin`
- **Password**: `admin123`

## 🗄️ Lưu trữ dữ liệu

### Server Backend
- **Vị trí**: `d:\work\test-money\server\data\`
- **Users**: `users.json`
- **Expenses**: `expenses.json`
- **Tự động tạo**: Các file sẽ được tạo tự động khi chạy lần đầu

### Local Backup
- **localStorage** vẫn được sử dụng như backup trong trường hợp server offline

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/login` - Đăng nhập

### Users  
- `GET /api/users` - Lấy danh sách users
- `POST /api/users` - Tạo user mới
- `PUT /api/users/:id` - Cập nhật user
- `DELETE /api/users/:id` - Xóa user

### Expenses
- `GET /api/expenses` - Lấy danh sách chi phí
- `POST /api/expenses` - Tạo chi phí mới  
- `DELETE /api/expenses/:id` - Xóa chi phí

### Health Check
- `GET /api/health` - Kiểm tra server status

## ✅ Tính năng đã hoàn thành

- ✅ **Server backend** với Express.js
- ✅ **API integration** cho tất cả operations
- ✅ **File-based storage** (JSON files)
- ✅ **CORS support** cho cross-origin requests  
- ✅ **Error handling** và fallback to localStorage
- ✅ **Admin account** tự động tạo
- ✅ **QR code upload** với base64 storage
- ✅ **Username-based authentication**
- ✅ **Real-time data sharing** giữa các client

## 🔧 Troubleshooting

### Server không chạy được
```bash
# Kiểm tra port 3001 có bị chiếm không
netstat -ano | findstr :3001

# Nếu bị chiếm, kill process
taskkill /PID <PID_NUMBER> /F
```

### Frontend không kết nối được server
1. Đảm bảo server đang chạy tại port 3001
2. Kiểm tra CORS settings trong `server/server.js`
3. Kiểm tra API_BASE_URL trong `src/services/ApiService.ts`

### Dữ liệu bị mất
- Server data nằm trong `server/data/` directory
- Backup vẫn có trong localStorage của browser
- Có thể restore từ localStorage nếu cần

## 🎯 Kết quả

Giờ bạn có thể:
- **Chia sẻ dữ liệu** giữa nhiều máy/người dùng
- **Persistent storage** không bị mất khi đóng browser
- **Scalable architecture** có thể mở rộng dễ dàng
- **Backup mechanisms** với cả server và localStorage

Thử mở ứng dụng từ nhiều tab/browser để xem dữ liệu được đồng bộ real-time! 🎉