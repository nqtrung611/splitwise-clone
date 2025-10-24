import { User } from '../types';

export class QRCodeModal {
  private user: User;
  private onClose: () => void;
  private tempQRImage: string | null = null;

  constructor(user: User, onClose: () => void) {
    this.user = user;
    this.onClose = onClose;
  }

  render(): string {
    return `
      <div id="qr-code-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-bold text-gray-900">📱 QR Code Thanh Toán</h2>
              <button id="close-qr-modal" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- User Info -->
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                ${this.user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">${this.user.name}</h3>
                <p class="text-sm text-gray-600">@${this.user.username}</p>
              </div>
            </div>

            <!-- QR Code Area -->
            <div class="mb-6">
              ${this.user.qrCode ? this.renderQRCode() : this.renderNoQRCode()}
            </div>

            <!-- Actions -->
            <div class="flex space-x-3">
              ${!this.user.qrCode ? `
                <button 
                  id="add-qr-code-btn"
                  class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  ➕ Thêm mã QR
                </button>
              ` : `
                <button 
                  id="edit-qr-code-btn"
                  class="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                >
                  ✏️ Sửa
                </button>
                <button 
                  id="copy-qr-code-btn"
                  class="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                >
                  📋 Copy
                </button>
              `}
            </div>
          </div>

          <!-- QR Code Upload Form (Hidden by default) -->
          <div id="qr-edit-form" class="hidden mt-6 border-t pt-6 px-6 pb-6">
            <h4 class="font-medium text-gray-800 mb-3">📱 Upload mã QR thanh toán</h4>
            <form id="qr-form" class="space-y-4">
              <div>
                <label for="qr-file-input" class="block text-sm font-medium text-gray-700 mb-2">Chọn ảnh QR code</label>
                <div class="flex flex-col space-y-3">
                  <input 
                    type="file" 
                    id="qr-file-input" 
                    accept="image/*"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  >
                  <div id="qr-preview" class="hidden">
                    <p class="text-sm text-gray-600 mb-2">Preview:</p>
                    <img id="qr-preview-image" class="max-w-full h-48 object-contain border rounded-md" alt="QR Preview">
                  </div>
                </div>
              </div>

              <div>
                <label for="qr-description" class="block text-sm font-medium text-gray-700 mb-1">Mô tả (tùy chọn)</label>
                <input 
                  type="text" 
                  id="qr-description" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="VD: Tài khoản Vietcombank, Ví MoMo..."
                  autocomplete="off"
                >
              </div>

              <div class="flex space-x-3">
                <button 
                  type="submit" 
                  class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  💾 Lưu mã QR
                </button>
                <button 
                  type="button" 
                  id="cancel-qr-edit"
                  class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>

          <div class="px-6 pb-6">
            <button 
              id="close-qr-modal-btn"
              class="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private renderQRCode(): string {
    try {
      const qrData = JSON.parse(this.user.qrCode!);
      
      if (qrData.type === 'image' && qrData.image) {
        return `
          <div class="bg-gray-50 p-4 rounded-lg text-center">
            <img src="${qrData.image}" alt="QR Code" class="max-w-full h-64 object-contain mx-auto mb-2">
            <p class="text-sm text-gray-600">${qrData.description || 'QR Code thanh toán'}</p>
          </div>
        `;
      }
      
      // Fallback for old format
      return `
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <div class="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
            <span class="text-gray-500">📱 QR Code</span>
          </div>
          <p class="text-sm text-gray-600">QR Code thanh toán</p>
        </div>
      `;
    } catch (error) {
      return this.renderNoQRCode();
    }
  }

  private renderNoQRCode(): string {
    return `
      <div class="bg-gray-50 p-8 rounded-lg text-center">
        <div class="w-24 h-24 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </div>
        <h3 class="font-medium text-gray-700 mb-2">Chưa có mã QR</h3>
        <p class="text-sm text-gray-500">Thêm mã QR để bạn bè có thể thanh toán dễ dàng</p>
      </div>
    `;
  }

  setupEventListeners(): void {
    const closeBtn = document.getElementById('close-qr-modal');
    const closeBtnBottom = document.getElementById('close-qr-modal-btn');
    const addQRBtn = document.getElementById('add-qr-code-btn');
    const editQRBtn = document.getElementById('edit-qr-code-btn');
    const copyQRBtn = document.getElementById('copy-qr-code-btn');
    const qrForm = document.getElementById('qr-form') as HTMLFormElement;
    const qrEditForm = document.getElementById('qr-edit-form');
    const cancelEditBtn = document.getElementById('cancel-qr-edit');

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

    // Add/Edit QR code
    addQRBtn?.addEventListener('click', () => {
      qrEditForm?.classList.remove('hidden');
    });

    editQRBtn?.addEventListener('click', () => {
      qrEditForm?.classList.remove('hidden');
    });

    // Cancel edit
    cancelEditBtn?.addEventListener('click', () => {
      qrEditForm?.classList.add('hidden');
      this.tempQRImage = null;
      // Reset form
      const form = document.getElementById('qr-form') as HTMLFormElement;
      form?.reset();
      const preview = document.getElementById('qr-preview');
      preview?.classList.add('hidden');
    });

    // Copy QR code
    copyQRBtn?.addEventListener('click', () => {
      try {
        const qrData = JSON.parse(this.user.qrCode!);
        if (qrData.image) {
          // For images, copy the description
          navigator.clipboard.writeText(qrData.description || 'QR Code thanh toán');
          alert('Đã copy mô tả QR code!');
        }
      } catch (error) {
        alert('Không thể copy QR code');
      }
    });

    // Form submission
    qrForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleQRFormSubmit();
    });

    // File upload handler
    const fileInput = document.getElementById('qr-file-input') as HTMLInputElement;
    fileInput?.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        this.handleFileUpload(file);
      }
    });
  }

  private handleFileUpload(file: File): void {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn file ảnh!');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File quá lớn! Vui lòng chọn file nhỏ hơn 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target?.result as string;
      
      // Show preview
      const preview = document.getElementById('qr-preview');
      const previewImage = document.getElementById('qr-preview-image') as HTMLImageElement;
      
      if (preview && previewImage) {
        previewImage.src = imageDataUrl;
        preview.classList.remove('hidden');
      }
      
      // Store image data for saving
      this.tempQRImage = imageDataUrl;
    };
    
    reader.readAsDataURL(file);
  }

  private handleQRFormSubmit(): void {
    if (!this.tempQRImage) {
      alert('Vui lòng chọn ảnh QR code!');
      return;
    }

    const description = (document.getElementById('qr-description') as HTMLInputElement).value.trim();
    
    // Create QR data with image and description
    const qrData = {
      type: 'image',
      image: this.tempQRImage,
      description: description || 'QR Code thanh toán'
    };

    const qrCodeString = JSON.stringify(qrData);
    this.user.qrCode = qrCodeString;
    
    // Trigger update event
    const event = new CustomEvent('qr-code-updated', { 
      detail: { userId: this.user.id, qrCode: qrCodeString } 
    });
    window.dispatchEvent(event);
    
    // Show success message
    alert('✅ Đã lưu mã QR thành công!');
    
    // Close modal completely
    this.onClose();
  }
}