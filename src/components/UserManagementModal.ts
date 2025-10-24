import { User, CreateUserData } from '../types';
import { AuthService } from '../services/AuthService';

export class UserManagementModal {
  private users: User[];
  private onCreateUser: (userData: CreateUserData) => Promise<User>;
  private onUpdateUserStatus: (userId: string, isActive: boolean) => Promise<void>;
  private onClose: () => void;
  private authService: AuthService;

  constructor(
    users: User[], 
    onCreateUser: (userData: CreateUserData) => Promise<User>,
    onUpdateUserStatus: (userId: string, isActive: boolean) => Promise<void>,
    onClose: () => void,
    authService: AuthService
  ) {
    this.users = users;
    this.onCreateUser = onCreateUser;
    this.onUpdateUserStatus = onUpdateUserStatus;
    this.onClose = onClose;
    this.authService = authService;
  }

  render(): string {
    return `
      <div id="user-management-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-gray-900">👥 Quản lý người dùng</h2>
            <button id="close-user-management" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Create User Form -->
          <div class="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 class="font-semibold text-blue-800 mb-3">➕ Tạo người dùng mới</h3>
            <form id="create-user-form" class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label for="user-name" class="block text-sm font-medium text-gray-700 mb-1">Tên</label>
                <input 
                  type="text" 
                  id="user-name" 
                  name="name"
                  required
                  autocomplete="off"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập tên người dùng"
                >
              </div>
              <div>
                <label for="user-username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input 
                  type="text" 
                  id="user-username" 
                  name="username"
                  required
                  autocomplete="off"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="username"
                >
              </div>
              <div>
                <label for="user-password" class="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
                <input 
                  type="password" 
                  id="user-password" 
                  name="password"
                  required
                  autocomplete="off"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tạo mật khẩu"
                >
              </div>
              <div>
                <label for="user-qr-code" class="block text-sm font-medium text-gray-700 mb-1">
                  Mã QR thanh toán (tùy chọn)
                </label>
                <textarea 
                  id="user-qr-code" 
                  name="qrCode"
                  rows="2"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập thông tin QR code hoặc để trống để thêm sau"
                ></textarea>
                <p class="text-xs text-gray-500 mt-1">Có thể thêm sau qua việc click vào icon QR</p>
              </div>
              <div class="md:col-span-3">
                <button 
                  type="submit" 
                  class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  <span id="create-user-text">Tạo người dùng</span>
                  <span id="create-user-loading" class="hidden">⏳ Đang tạo...</span>
                </button>
              </div>
            </form>
            <div id="create-user-error" class="text-red-600 text-sm mt-2 hidden"></div>
            <div id="create-user-success" class="text-green-600 text-sm mt-2 hidden"></div>
          </div>

          <!-- Users List -->
          <div>
            <h3 class="font-semibold text-gray-800 mb-4">📋 Danh sách người dùng</h3>
            <div id="users-list" class="space-y-3">
              ${this.renderUsersList()}
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button 
              id="close-user-management-btn"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private renderUsersList(): string {
    return this.users.map(user => `
      <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg ${user.isActive ? 'bg-white' : 'bg-gray-50'}">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            ${user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div class="flex items-center space-x-2">
              <h4 class="font-medium ${user.isActive ? 'text-gray-900' : 'text-gray-500'}">${user.name}</h4>
              ${user.role === 'admin' ? '<span class="px-2 py-1 text-xs bg-red-100 text-red-700 rounded-full">👑 Admin</span>' : ''}
              ${!user.isActive ? '<span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">❌ Vô hiệu hóa</span>' : ''}
            </div>
            <p class="text-sm text-gray-600">@${user.username}</p>
            <p class="text-xs text-gray-500">Tạo: ${new Date(user.createdAt).toLocaleDateString('vi-VN')}</p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button 
            class="px-2 py-1 text-sm bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-md transition-colors"
            onclick="window.showUserQRCode('${user.id}')"
            title="Xem/Chỉnh sửa mã QR"
          >
            ${user.qrCode ? '📱 QR' : '📱➕'}
          </button>
          <button 
            class="px-2 py-1 text-sm bg-yellow-100 text-yellow-700 hover:bg-yellow-200 rounded-md transition-colors"
            onclick="window.editUser('${user.id}')"
            title="${user.role === 'admin' ? 'Đổi mật khẩu Admin' : 'Chỉnh sửa thông tin'}"
          >
            ${user.role === 'admin' ? '🔑 Đổi MK' : '✏️ Sửa'}
          </button>
          ${user.role !== 'admin' ? `
            <button 
              class="px-3 py-1 text-sm rounded-md transition-colors ${
                user.isActive 
                  ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }"
              onclick="window.toggleUserStatus('${user.id}', ${!user.isActive})"
            >
              ${user.isActive ? '❌ Vô hiệu hóa' : '✅ Kích hoạt'}
            </button>
          ` : '<span class="text-gray-400 text-sm">Admin account</span>'}
        </div>
      </div>
    `).join('');
  }

  setupEventListeners(): void {
    const closeBtn = document.getElementById('close-user-management');
    const closeBtnBottom = document.getElementById('close-user-management-btn');
    const form = document.getElementById('create-user-form') as HTMLFormElement;
    const errorDiv = document.getElementById('create-user-error');
    const successDiv = document.getElementById('create-user-success');

    // Close modal handlers
    closeBtn?.addEventListener('click', this.onClose);
    closeBtnBottom?.addEventListener('click', this.onClose);
    
    // ESC key to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.onClose();
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Form submission
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const userData: CreateUserData = {
        name: formData.get('name') as string,
        username: formData.get('username') as string,
        password: formData.get('password') as string,
        qrCode: (formData.get('qrCode') as string) || undefined
      };

      const createText = document.getElementById('create-user-text');
      const createLoading = document.getElementById('create-user-loading');

      // Show loading state
      createText!.classList.add('hidden');
      createLoading!.classList.remove('hidden');
      errorDiv!.classList.add('hidden');
      successDiv!.classList.add('hidden');

      try {
        const newUser = await this.onCreateUser(userData);
        this.users.push(newUser);
        
        // Update users list
        const usersList = document.getElementById('users-list');
        if (usersList) {
          usersList.innerHTML = this.renderUsersList();
        }
        
        // Reset form and show success
        form.reset();
        successDiv!.textContent = `Tạo thành công người dùng: ${newUser.name}`;
        successDiv!.classList.remove('hidden');
        
      } catch (error) {
        errorDiv!.textContent = error instanceof Error ? error.message : 'Đã có lỗi xảy ra';
        errorDiv!.classList.remove('hidden');
      } finally {
        // Reset loading state
        createText!.classList.remove('hidden');
        createLoading!.classList.add('hidden');
      }
    });

    // Setup global function for toggle user status
    (window as any).toggleUserStatus = async (userId: string, isActive: boolean) => {
      try {
        await this.onUpdateUserStatus(userId, isActive);
        
        // Update local users array
        const userIndex = this.users.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
          this.users[userIndex].isActive = isActive;
        }
        
        // Update users list
        const usersList = document.getElementById('users-list');
        if (usersList) {
          usersList.innerHTML = this.renderUsersList();
        }
        
      } catch (error) {
        alert('Lỗi: ' + (error instanceof Error ? error.message : 'Không thể cập nhật trạng thái'));
      }
    };
  }

  editUser = (userId: string) => {
    const user = this.users.find(u => u.id === userId);
    if (!user) {
      alert('Không tìm thấy người dùng!');
      return;
    }

    const isAdmin = user.role === 'admin';
    
    // Tạo modal edit user
    const editModal = document.createElement('div');
    editModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    editModal.id = 'edit-user-modal';
    
    editModal.innerHTML = `
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">
              ${isAdmin ? '🔑 Đổi mật khẩu Admin' : '✏️ Chỉnh sửa thông tin'}
            </h3>
            <button id="close-edit-modal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <form id="edit-user-form" class="space-y-4">
            ${!isAdmin ? `
              <div>
                <label for="edit-user-name" class="block text-sm font-medium text-gray-700 mb-1">Tên</label>
                <input 
                  type="text" 
                  id="edit-user-name" 
                  name="name"
                  value="${user.name}"
                  required
                  autocomplete="off"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập tên người dùng"
                >
              </div>
              <div>
                <label for="edit-user-username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input 
                  type="text" 
                  id="edit-user-username" 
                  name="username"
                  value="${user.username}"
                  required
                  autocomplete="off"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="username"
                >
              </div>
            ` : `
              <div class="bg-blue-50 p-3 rounded-lg mb-4">
                <p class="text-blue-800 text-sm">
                  <strong>👑 Admin:</strong> ${user.name} (@${user.username})
                </p>
                <p class="text-blue-600 text-xs mt-1">Chỉ có thể đổi mật khẩu</p>
              </div>
            `}
            
            <div>
              <label for="edit-user-password" class="block text-sm font-medium text-gray-700 mb-1">
                ${isAdmin ? 'Mật khẩu mới' : 'Mật khẩu mới'}
              </label>
              <input 
                type="password" 
                id="edit-user-password" 
                name="password"
                ${isAdmin ? 'required' : ''}
                autocomplete="off"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="${isAdmin ? 'Nhập mật khẩu mới cho admin' : 'Để trống nếu không đổi mật khẩu'}"
              >
            </div>

            <div id="edit-user-error" class="text-red-600 text-sm hidden"></div>

            <div class="flex space-x-3">
              <button 
                type="submit" 
                class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <span id="edit-user-text">${isAdmin ? '🔑 Đổi mật khẩu' : '💾 Lưu thay đổi'}</span>
                <span id="edit-user-loading" class="hidden">⏳ Đang lưu...</span>
              </button>
              <button 
                type="button" 
                id="cancel-edit-user"
                class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    document.body.appendChild(editModal);

    // Event listeners cho edit modal
    const closeEditModal = () => {
      document.body.removeChild(editModal);
      document.removeEventListener('keydown', handleEditKeyDown);
    };

    const handleEditKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeEditModal();
      }
    };

    document.getElementById('close-edit-modal')?.addEventListener('click', closeEditModal);
    document.getElementById('cancel-edit-user')?.addEventListener('click', closeEditModal);
    document.addEventListener('keydown', handleEditKeyDown);

    // Handle form submit
    const editForm = document.getElementById('edit-user-form') as HTMLFormElement;
    editForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(editForm);
      const name = formData.get('name') as string;
      const username = formData.get('username') as string;
      const password = formData.get('password') as string;
      
      const errorDiv = document.getElementById('edit-user-error');
      const textSpan = document.getElementById('edit-user-text');
      const loadingSpan = document.getElementById('edit-user-loading');
      
      try {
        // Show loading
        textSpan?.classList.add('hidden');
        loadingSpan?.classList.remove('hidden');
        errorDiv?.classList.add('hidden');
        
        // Update user info
        if (isAdmin) {
          // Admin chỉ đổi mật khẩu
          if (!password.trim()) {
            throw new Error('Vui lòng nhập mật khẩu mới');
          }
          await this.authService.updateUser(userId, { password: password.trim() });
        } else {
          // User thường update tất cả thông tin
          await this.authService.updateUser(userId, {
            name: name.trim(),
            username: username.trim(),
            ...(password.trim() && { password: password.trim() })
          });
          
          // Update local user data for non-admin
          const userIndex = this.users.findIndex(u => u.id === userId);
          if (userIndex !== -1) {
            this.users[userIndex].name = name.trim();
            this.users[userIndex].username = username.trim();
          }
        }
        
        // Update users list
        const usersList = document.getElementById('users-list');
        if (usersList) {
          usersList.innerHTML = this.renderUsersList();
        }
        
        // Show success and close modal
        alert('✅ Cập nhật thông tin thành công!');
        closeEditModal();
        
      } catch (error) {
        // Show error
        textSpan?.classList.remove('hidden');
        loadingSpan?.classList.add('hidden');
        
        if (errorDiv) {
          errorDiv.textContent = error instanceof Error ? error.message : 'Có lỗi xảy ra';
          errorDiv.classList.remove('hidden');
        }
      }
    });
  };
}