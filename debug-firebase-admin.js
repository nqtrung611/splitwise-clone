// Debug script để tạo admin user trong Firebase
// Chạy trong Developer Console khi Firebase đã được kích hoạt

console.log('=== Creating Admin User in Firebase ===');

// Kiểm tra Firebase có hoạt động không
console.log('Using Firebase:', window.app?.useFirebase);

// Thêm admin user vào Firestore
async function createAdminUser() {
  try {
    const { firebaseService } = await import('./src/services/FirebaseService.js');
    
    const adminData = {
      name: 'Administrator',
      username: 'admin',
      password: 'admin123', // Trong thực tế nên hash password
      role: 'admin',
      isAdmin: true,
      isActive: true,
      createdAt: new Date()
    };

    const newAdmin = await firebaseService.createUser(adminData);
    console.log('✅ Admin user created in Firebase:', newAdmin);
    
    return newAdmin;
  } catch (error) {
    console.error('❌ Failed to create admin user:', error);
  }
}

// Chạy function
createAdminUser();