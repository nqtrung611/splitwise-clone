import { LoginCredentials } from '../types';

export class LoginModal {
  private onLogin: (credentials: LoginCredentials) => void;
  private onClose: () => void;

  constructor(onLogin: (credentials: LoginCredentials) => void, onClose: () => void) {
    this.onLogin = onLogin;
    this.onClose = onClose;
  }

  render(): string {
    return `
      <div id="login-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-gray-900">🔐 Đăng nhập</h2>
            <button id="close-login-modal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <form id="login-form" class="space-y-4">
            <div>
              <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input 
                type="text" 
                id="username" 
                name="username"
                required
                autocomplete="off"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập username"
              >
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                required
                autocomplete="off"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập mật khẩu"
              >
            </div>

            <div id="login-error" class="text-red-600 text-sm hidden"></div>

            <div class="flex space-x-3">
              <button 
                type="submit" 
                id="login-submit"
                class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <span id="login-submit-text">Đăng nhập</span>
                <span id="login-submit-loading" class="hidden">⏳ Đang xử lý...</span>
              </button>
              <button 
                type="button" 
                id="cancel-login"
                class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  setupEventListeners(): void {
    const form = document.getElementById('login-form') as HTMLFormElement;
    const closeBtn = document.getElementById('close-login-modal');
    const cancelBtn = document.getElementById('cancel-login');
    const errorDiv = document.getElementById('login-error');
    const submitBtn = document.getElementById('login-submit');
    const submitText = document.getElementById('login-submit-text');
    const submitLoading = document.getElementById('login-submit-loading');

    // Close modal handlers
    closeBtn?.addEventListener('click', this.onClose);
    cancelBtn?.addEventListener('click', this.onClose);
    
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
      const credentials: LoginCredentials = {
        username: formData.get('username') as string,
        password: formData.get('password') as string
      };

      // Show loading state
      (submitBtn as HTMLButtonElement)!.disabled = true;
      submitText!.classList.add('hidden');
      submitLoading!.classList.remove('hidden');
      errorDiv!.classList.add('hidden');

      try {
        await this.onLogin(credentials);
      } catch (error) {
        errorDiv!.textContent = error instanceof Error ? error.message : 'Đã có lỗi xảy ra';
        errorDiv!.classList.remove('hidden');
      } finally {
        // Reset loading state
        (submitBtn as HTMLButtonElement)!.disabled = false;
        submitText!.classList.remove('hidden');
        submitLoading!.classList.add('hidden');
      }
    });

    // Focus on email field
    setTimeout(() => {
      document.getElementById('email')?.focus();
    }, 100);
  }
}