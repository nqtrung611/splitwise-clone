// Script để tạo lại admin user đúng format
// Chạy trong Developer Console

console.log('🔥 Creating proper admin user...');

// Import Firebase functions
import('./src/services/FirebaseService.js').then(async ({ firebaseService }) => {
  try {
    // Create admin with correct fields
    const adminData = {
      name: 'Administrator',
      username: 'admin',
      password: 'admin123',
      role: 'admin',
      isAdmin: true,
      isActive: true,
      createdAt: new Date()
    };

    const newAdmin = await firebaseService.createUser(adminData);
    console.log('✅ Admin created successfully:', newAdmin);
  } catch (error) {
    console.error('❌ Failed to create admin:', error);
  }
});