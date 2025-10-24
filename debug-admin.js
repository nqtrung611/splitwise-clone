// Debug script để sửa role admin
// Chạy trong Developer Console

console.log('=== Debug Admin Role ===');

// Xóa tất cả localStorage
localStorage.clear();
console.log('✅ Cleared localStorage');

// Tạo admin user mới
const adminUser = {
  id: 'admin-1',
  name: 'Administrator',
  username: 'admin',
  password: 'admin123',
  isAdmin: true,
  role: 'admin',
  isActive: true,
  createdAt: new Date().toISOString()
};

// Lưu admin user
localStorage.setItem('splitwise_users', JSON.stringify([adminUser]));
console.log('✅ Created admin user:', adminUser);

// Tạo auth state admin
const authState = {
  isAuthenticated: true,
  currentUser: {
    id: 'admin-1',
    name: 'Administrator',
    username: 'admin',
    role: 'admin',
    createdAt: new Date(),
    isActive: true
  },
  token: 'admin-token-' + Date.now()
};

localStorage.setItem('splitwise_auth', JSON.stringify(authState));
console.log('✅ Created admin auth state:', authState);

console.log('✅ Admin setup complete! Refreshing page...');
setTimeout(() => location.reload(), 1000);