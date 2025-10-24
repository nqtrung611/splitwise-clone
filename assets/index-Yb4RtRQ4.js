(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var xd=Object.defineProperty,Sd=(r,e,t)=>e in r?xd(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,G=(r,e,t)=>Sd(r,typeof e!="symbol"?e+"":e,t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();function ri(r,e){const t={};return e.forEach(n=>{t[n.id]={userId:n.id,owes:{},owedBy:{},totalOwes:0,totalOwed:0}}),r.forEach(n=>{const s=n.paidBy;n.splitBetween.forEach(a=>{const o=a.userId;let l;n.splitType==="equal"?l=n.amount/n.splitBetween.length:l=a.amount||0,o!==s&&(t[o].owes[s]||(t[o].owes[s]=0),t[s].owedBy[o]||(t[s].owedBy[o]=0),t[o].owes[s]+=l,t[s].owedBy[o]+=l)})}),Object.values(t).forEach(n=>{n.totalOwes=Object.values(n.owes).reduce((s,a)=>s+a,0),n.totalOwed=Object.values(n.owedBy).reduce((s,a)=>s+a,0)}),e.forEach(n=>{e.forEach(s=>{if(n.id!==s.id){const a=t[n.id].owes[s.id]||0,o=t[s.id].owes[n.id]||0;if(a>0&&o>0){const l=a-o;l>0?(t[n.id].owes[s.id]=l,t[s.id].owedBy[n.id]=l,delete t[s.id].owes[n.id],delete t[n.id].owedBy[s.id]):l<0?(t[s.id].owes[n.id]=Math.abs(l),t[n.id].owedBy[s.id]=Math.abs(l),delete t[n.id].owes[s.id],delete t[s.id].owedBy[n.id]):(delete t[n.id].owes[s.id],delete t[s.id].owes[n.id],delete t[n.id].owedBy[s.id],delete t[s.id].owedBy[n.id])}}})}),Object.values(t).forEach(n=>{n.totalOwes=Object.values(n.owes).reduce((s,a)=>s+a,0),n.totalOwed=Object.values(n.owedBy).reduce((s,a)=>s+a,0)}),t}function se(r){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0,maximumFractionDigits:0}).format(r)}function _d(){return Math.random().toString(36).substr(2,9)}function Cd(r){const e=[];if((!r.description||r.description.trim().length===0)&&e.push("Mô tả chi phí không được để trống"),(!r.amount||r.amount<=0)&&e.push("Số tiền phải lớn hơn 0"),r.paidBy||e.push("Vui lòng chọn người trả tiền"),(!r.splitBetween||r.splitBetween.length===0)&&e.push("Vui lòng chọn ít nhất một người để chia chi phí"),r.category||e.push("Vui lòng chọn danh mục chi phí"),r.splitType==="custom"&&r.splitBetween){const t=r.splitBetween.reduce((n,s)=>n+(s.amount||0),0);Math.abs(t-(r.amount||0))>1&&e.push("Tổng số tiền chia phải bằng tổng chi phí")}return e}function bl(r){const e=[],t=Object.values(r).map(l=>({userId:l.userId,netAmount:l.totalOwed-l.totalOwes})),n=t.filter(l=>l.netAmount>0).sort((l,u)=>u.netAmount-l.netAmount),s=t.filter(l=>l.netAmount<0).sort((l,u)=>l.netAmount-u.netAmount);let a=0,o=0;for(;a<n.length&&o<s.length;){const l=n[a],u=s[o],d=Math.min(l.netAmount,Math.abs(u.netAmount));d>0&&e.push({from:u.userId,to:l.userId,amount:d}),l.netAmount-=d,u.netAmount+=d,l.netAmount===0&&a++,u.netAmount===0&&o++}return e}class Ad{constructor(e,t,n,s){G(this,"expense"),G(this,"users"),G(this,"currentUser"),G(this,"onDelete"),this.expense=e,this.users=t,this.currentUser=n,this.onDelete=s}render(){var e,t,n;const s=this.users.find(l=>l.id===this.expense.paidBy),a=((e=this.currentUser)==null?void 0:e.id)||"",o=this.expense.splitBetween.some(l=>l.userId===a)||this.expense.paidBy===a;return`
      <div class="card mb-4 hover:shadow-md transition-shadow">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center space-x-2 mb-2">
              <h3 class="font-medium text-gray-900 text-lg">${this.expense.description}</h3>
              <span class="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                ${this.getCategoryName(this.expense.category)}
              </span>
              ${this.expense.splitType==="custom"?`
                <span class="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
                  🧮 Tùy chỉnh
                </span>
              `:""}
              ${this.expense.notes?`
                <span class="text-gray-400 cursor-help" title="${this.expense.notes}">💬</span>
              `:""}
            </div>
            
            <div class="space-y-1">
              <p class="text-sm text-gray-600">
                <span class="font-medium">${s==null?void 0:s.name}</span> đã trả 
                <span class="font-semibold text-gray-900">${se(this.expense.amount)}</span>
              </p>
              
              <p class="text-xs text-gray-500">
                📅 ${this.expense.date.toLocaleDateString("vi-VN",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}
              </p>
              
              <div class="flex items-center space-x-2 text-xs text-gray-500">
                <span>👥 Chia cho ${this.expense.splitBetween.length} người</span>
                ${this.expense.splitType==="equal"?`
                  <span>•</span>
                  <span>${se(this.expense.amount/this.expense.splitBetween.length)}/người</span>
                `:""}
              </div>
              
              <div class="mt-2">
                <details class="text-xs text-gray-500">
                  <summary class="cursor-pointer hover:text-gray-700">Chi tiết chia tiền</summary>
                  <div class="mt-2 pl-4 space-y-1">
                    ${this.expense.splitBetween.map(l=>{const u=this.users.find(d=>d.id===l.userId);return`
                        <div class="flex justify-between">
                          <span>${u==null?void 0:u.name}</span>
                          <span>${se(l.amount||0)}</span>
                        </div>
                      `}).join("")}
                  </div>
                </details>
              </div>
            </div>
          </div>
          
          <div class="text-right ml-4">
            <div class="font-bold text-xl text-gray-900 mb-1">
              ${se(this.expense.amount)}
            </div>
            ${o?this.renderUserInvolvement():""}
            
            ${this.onDelete&&((t=this.currentUser)==null?void 0:t.role)==="admin"?`
              <button 
                class="mt-2 text-red-500 hover:text-red-700 text-xs font-medium flex items-center space-x-1"
                onclick="window.deleteExpense('${this.expense.id}')"
                title="Chỉ admin mới có thể xóa chi phí"
              >
                <span>🗑️</span>
                <span>Xóa</span>
                <span class="text-xs bg-red-100 text-red-600 px-1 rounded">👑</span>
              </button>
            `:((n=this.currentUser)==null?void 0:n.role)!=="admin"&&this.onDelete?`
              <div class="mt-2 text-gray-400 text-xs">
                🔒 Chỉ admin mới có thể xóa
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}renderUserInvolvement(){var e;const t=((e=this.currentUser)==null?void 0:e.id)||"",n=this.expense.splitBetween.find(l=>l.userId===t),s=(n==null?void 0:n.amount)||0,a=this.expense.paidBy===t,o=!!n;if(a&&o){const l=this.expense.amount-s;return`
        <div class="text-sm space-y-1">
          <div class="text-splitwise-green font-medium">
            💰 Bạn được nợ ${se(l)}
          </div>
          <div class="text-xs text-gray-500">
            (Trả ${se(this.expense.amount)} - Nợ ${se(s)})
          </div>
        </div>
      `}else{if(a)return`
        <div class="text-sm text-splitwise-green font-medium">
          💰 Bạn được nợ ${se(this.expense.amount)}
        </div>
      `;if(o)return`
        <div class="text-sm text-splitwise-red font-medium">
          💳 Bạn nợ ${se(s)}
        </div>
      `}return""}getCategoryName(e){return{food:"🍽️ Ăn uống",transportation:"🚗 Di chuyển",accommodation:"🏠 Lưu trú",entertainment:"🎉 Giải trí",shopping:"🛍️ Mua sắm",utilities:"⚡ Tiện ích",other:"📦 Khác"}[e]||"📦 Khác"}}class kd{constructor(e,t,n){G(this,"balance"),G(this,"users"),G(this,"allBalances"),this.balance=e,this.users=t,this.allBalances=n}render(){const e=this.balance.totalOwed,t=this.balance.totalOwes,n=e-t;return`
      <div class="card">
        <h2 class="text-lg font-semibold mb-4 flex items-center">
          💰 Tổng quan số dư
        </h2>
        
        ${this.renderBalanceSummary(e,t,n)}
        
        ${Object.keys(this.balance.owedBy).length>0||Object.keys(this.balance.owes).length>0?this.renderDetailedBalances():'<p class="text-gray-500 text-center py-4">🎉 Bạn đã thanh toán hết!</p>'}
        
        ${this.renderSettlementSuggestions()}
      </div>
    `}renderBalanceSummary(e,t,n){return`
      <div class="space-y-3 mb-6">
        <div class="flex justify-between items-center p-3 bg-green-50 rounded-lg">
          <span class="text-green-700 font-medium">💚 Được nợ:</span>
          <span class="font-bold text-green-700 text-lg">+${se(e)}</span>
        </div>
        
        <div class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
          <span class="text-red-700 font-medium">💔 Bạn nợ:</span>
          <span class="font-bold text-red-700 text-lg">-${se(t)}</span>
        </div>
        
        <div class="flex justify-between items-center p-4 ${n>=0?"bg-green-100":"bg-red-100"} rounded-lg border-2 ${n>=0?"border-green-300":"border-red-300"}">
          <span class="font-bold ${n>=0?"text-green-800":"text-red-800"}">
            ${n>=0?"🎯":"⚠️"} Tổng cộng:
          </span>
          <span class="font-bold text-xl ${n>=0?"text-green-800":"text-red-800"}">
            ${n>=0?"+":""}${se(n)}
          </span>
        </div>
      </div>
    `}renderDetailedBalances(){let e='<div class="space-y-3 mb-6">';const t=Object.entries(this.balance.owedBy).filter(([s,a])=>a>0);t.length>0&&(e+='<h3 class="font-semibold text-green-700 text-sm mb-2">💚 Ai nợ bạn:</h3>',t.forEach(([s,a])=>{const o=this.users.find(l=>l.id===s);e+=`
          <div class="flex justify-between items-center p-2 bg-green-50 rounded text-sm">
            <div class="flex items-center space-x-2">
              <span class="text-green-700">${o==null?void 0:o.name}</span>
              <button 
                onclick="window.showUserQRCode('${s}')" 
                class="text-blue-600 hover:text-blue-800 text-xs"
                title="Xem mã QR thanh toán"
              >
                📱
              </button>
            </div>
            <span class="font-semibold text-green-700">+${se(a)}</span>
          </div>
        `}));const n=Object.entries(this.balance.owes).filter(([s,a])=>a>0);return n.length>0&&(e+='<h3 class="font-semibold text-red-700 text-sm mb-2 mt-4">💔 Bạn nợ ai:</h3>',n.forEach(([s,a])=>{const o=this.users.find(l=>l.id===s);e+=`
          <div class="flex justify-between items-center p-2 bg-red-50 rounded text-sm">
            <div class="flex items-center space-x-2">
              <span class="text-red-700">${o==null?void 0:o.name}</span>
              <button 
                onclick="window.showUserQRCode('${s}')" 
                class="text-blue-600 hover:text-blue-800 text-xs"
                title="Xem mã QR thanh toán"
              >
                📱
              </button>
            </div>
            <span class="font-semibold text-red-700">-${se(a)}</span>
          </div>
        `})),e+="</div>",e}renderSettlementSuggestions(){const e=bl(this.allBalances).filter(n=>n.from===this.balance.userId||n.to===this.balance.userId);if(e.length===0)return"";let t=`
      <div class="border-t pt-4">
        <h3 class="font-semibold text-gray-700 text-sm mb-3 flex items-center">
          🔄 Gợi ý thanh toán
        </h3>
        <div class="space-y-2">
    `;return e.forEach(n=>{const s=this.users.find(o=>o.id===n.from),a=this.users.find(o=>o.id===n.to);n.from===this.balance.userId?t+=`
          <div class="flex items-center justify-between p-3 bg-orange-50 rounded-lg text-sm">
            <span class="text-orange-700">
              💸 Chuyển cho <strong>${a==null?void 0:a.name}</strong>
            </span>
            <span class="font-bold text-orange-700">${se(n.amount)}</span>
          </div>
        `:t+=`
          <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg text-sm">
            <span class="text-blue-700">
              💰 Nhận từ <strong>${s==null?void 0:s.name}</strong>
            </span>
            <span class="font-bold text-blue-700">${se(n.amount)}</span>
          </div>
        `}),t+=`
        </div>
        <p class="text-xs text-gray-500 mt-2">
          💡 Đây là cách tối ưu để thanh toán tất cả các khoản nợ
        </p>
      </div>
    `,t}}class si{constructor(e,t,n){G(this,"users"),G(this,"currentUser"),G(this,"onAddExpense"),this.users=e,this.currentUser=t,this.onAddExpense=n}show(){this.render();const e=document.getElementById("addExpenseModal");if(e){e.classList.remove("hidden"),e.classList.add("flex");const t=e.querySelector('input[type="text"]');t&&t.focus()}}hide(){const e=document.getElementById("addExpenseModal");e&&(e.classList.add("hidden"),e.classList.remove("flex")),this.resetForm()}render(){return`
      <div id="addExpenseModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50">
        <div class="bg-white rounded-xl p-6 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-bold text-gray-800 flex items-center">
              💰 Thêm chi phí mới
            </h3>
            <button id="closeModal" class="text-gray-400 hover:text-gray-600 text-2xl">×</button>
          </div>
          
          <form id="addExpenseForm" class="space-y-5">
            <!-- Description -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                📝 Mô tả chi phí *
              </label>
              <input 
                type="text" 
                id="expenseDescription" 
                class="input-field" 
                placeholder="Ví dụ: Ăn tối tại nhà hàng Sushi"
                autocomplete="off"
                required
              >
            </div>

            <!-- Amount -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                💵 Số tiền (VND) *
              </label>
              <input 
                type="number" 
                id="expenseAmount" 
                class="input-field" 
                placeholder="500000"
                min="1"
                step="1000"
                autocomplete="off"
                required
              >
            </div>

            <!-- Paid by -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                👤 Ai đã trả? *
              </label>
              ${this.currentUser?`
                <div class="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border">
                  <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    ${this.currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <span class="font-medium text-blue-800">${this.currentUser.name} (Bạn)</span>
                  <input type="hidden" id="expensePaidBy" value="${this.currentUser.id}">
                </div>
              `:`
                <select id="expensePaidBy" class="input-field" required>
                  ${this.users.map(e=>`
                    <option value="${e.id}">${e.name}</option>
                  `).join("")}
                </select>
              `}
            </div>

            <!-- Split between -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">
                👥 Chia cho những ai? *
              </label>
              
              <!-- Split Type Selection -->
              <div class="mb-3">
                <label class="block text-sm font-medium text-gray-600 mb-2">
                  🧮 Cách chia tiền:
                </label>
                <div class="flex space-x-4">
                  <label class="flex items-center">
                    <input type="radio" name="splitType" value="equal" class="mr-2" checked>
                    <span class="text-sm">Chia đều</span>
                  </label>
                  <label class="flex items-center">
                    <input type="radio" name="splitType" value="custom" class="mr-2">
                    <span class="text-sm">Tùy chỉnh</span>
                  </label>
                </div>
              </div>

              <!-- Equal Split -->
              <div id="equalSplitContainer" class="space-y-2 max-h-32 overflow-y-auto border border-gray-200 rounded-lg p-3">
                ${this.users.map(e=>`
                  <label class="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded cursor-pointer">
                    <input 
                      type="checkbox" 
                      value="${e.id}" 
                      class="splitBetween w-4 h-4 text-splitwise-green border-gray-300 rounded focus:ring-splitwise-green" 
                      checked
                    >
                    <span class="text-sm">${e.name}</span>
                  </label>
                `).join("")}
              </div>

              <!-- Custom Split -->
              <div id="customSplitContainer" class="hidden space-y-2 max-h-40 overflow-y-auto border border-gray-200 rounded-lg p-3">
                ${this.users.map(e=>`
                  <div class="flex items-center space-x-3 p-2 border-b border-gray-100 last:border-b-0">
                    <input 
                      type="checkbox" 
                      value="${e.id}" 
                      class="customSplitUser w-4 h-4 text-splitwise-green border-gray-300 rounded focus:ring-splitwise-green" 
                    >
                    <span class="text-sm w-20">${e.name}</span>
                    <input 
                      type="number" 
                      placeholder="0" 
                      class="customSplitAmount flex-1 input-field text-sm py-1 px-2" 
                      data-user-id="${e.id}"
                      min="0"
                      step="1000"
                      autocomplete="off"
                    >
                    <span class="text-xs text-gray-500">VND</span>
                  </div>
                `).join("")}
                <div id="customSplitTotal" class="text-sm text-gray-600 pt-2 border-t">
                  Tổng: 0 VND
                </div>
              </div>

              <p class="text-xs text-gray-500 mt-1">
                💡 Mặc định tất cả mọi người đều chia tiền. Bỏ tick để loại trừ.
              </p>
            </div>

            <!-- Category -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                🏷️ Danh mục *
              </label>
              <select id="expenseCategory" class="input-field" required>
                <option value="food">🍽️ Ăn uống</option>
                <option value="transportation">🚗 Di chuyển</option>
                <option value="accommodation">🏠 Lưu trú</option>
                <option value="entertainment">🎉 Giải trí</option>
                <option value="shopping">🛍️ Mua sắm</option>
                <option value="utilities">⚡ Tiện ích</option>
                <option value="other">📦 Khác</option>
              </select>
            </div>

            <!-- Notes -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                📄 Ghi chú (tùy chọn)
              </label>
              <textarea 
                id="expenseNotes" 
                class="input-field" 
                rows="3" 
                placeholder="Thêm ghi chú về chi phí này..."
              ></textarea>
            </div>

            <!-- Split preview -->
            <div id="splitPreview" class="bg-gray-50 p-3 rounded-lg">
              <h4 class="text-sm font-medium text-gray-700 mb-2">🧮 Xem trước chia tiền:</h4>
              <div id="splitPreviewContent" class="text-sm text-gray-600">
                Nhập số tiền để xem chi tiết chia tiền
              </div>
            </div>

            <!-- Action buttons -->
            <div class="flex justify-end space-x-3 pt-4 border-t">
              <button type="button" id="cancelBtn" class="btn-secondary">
                ❌ Hủy
              </button>
              <button type="submit" class="btn-primary">
                ✅ Thêm chi phí
              </button>
            </div>
          </form>
        </div>
      </div>
    `}setupEventListeners(){var e,t,n;(e=document.getElementById("closeModal"))==null||e.addEventListener("click",()=>this.hide()),(t=document.getElementById("cancelBtn"))==null||t.addEventListener("click",()=>this.hide()),(n=document.getElementById("addExpenseForm"))==null||n.addEventListener("submit",p=>{p.preventDefault(),this.handleSubmit()}),document.querySelectorAll('input[name="splitType"]').forEach(p=>{p.addEventListener("change",m=>{const x=m.target.value;this.toggleSplitMode(x),this.updatePreview()})});const s=document.getElementById("expenseAmount"),a=document.querySelectorAll(".splitBetween"),o=document.querySelectorAll(".customSplitAmount"),l=document.querySelectorAll(".customSplitUser"),u=()=>this.updatePreview();s==null||s.addEventListener("input",u),a.forEach(p=>p.addEventListener("change",u)),o.forEach(p=>p.addEventListener("input",u)),l.forEach(p=>p.addEventListener("change",u));const d=p=>{p.key==="Escape"&&(this.hide(),document.removeEventListener("keydown",d))};document.addEventListener("keydown",d),this.addSelectAllControls()}toggleSplitMode(e){const t=document.getElementById("equalSplitContainer"),n=document.getElementById("customSplitContainer");e==="equal"?(t==null||t.classList.remove("hidden"),n==null||n.classList.add("hidden")):(t==null||t.classList.add("hidden"),n==null||n.classList.remove("hidden"))}addSelectAllControls(){var e,t,n;const s=document.querySelector(".space-y-2.max-h-32");if(s){const a=document.createElement("div");a.className="flex space-x-2 text-xs mb-2",a.innerHTML=`
        <button type="button" id="selectAll" class="text-blue-600 hover:text-blue-800">Chọn tất cả</button>
        <span class="text-gray-400">•</span>
        <button type="button" id="selectNone" class="text-blue-600 hover:text-blue-800">Bỏ chọn tất cả</button>
      `,(e=s.parentNode)==null||e.insertBefore(a,s),(t=document.getElementById("selectAll"))==null||t.addEventListener("click",()=>{document.querySelectorAll(".splitBetween").forEach(o=>{o.checked=!0}),this.updatePreview()}),(n=document.getElementById("selectNone"))==null||n.addEventListener("click",()=>{document.querySelectorAll(".splitBetween").forEach(o=>{o.checked=!1}),this.updatePreview()})}}updatePreview(){var e;const t=document.getElementById("expenseAmount"),n=parseFloat((t==null?void 0:t.value)||"0"),s=(e=document.querySelector('input[name="splitType"]:checked'))==null?void 0:e.value,a=document.getElementById("splitPreviewContent");if(a){if(n<=0){a.innerHTML="Nhập số tiền để xem chi tiết chia tiền";return}if(s==="equal"){const o=document.querySelectorAll(".splitBetween:checked");if(o.length===0){a.innerHTML="Chọn ít nhất một người để chia tiền";return}const l=n/o.length;let u='<div class="space-y-1">';u+=`<div class="font-medium">Tổng: ${this.formatCurrency(n)} ÷ ${o.length} người = ${this.formatCurrency(l)}/người</div>`,o.forEach(d=>{const p=d.value,m=this.users.find(x=>x.id===p);u+=`<div class="flex justify-between"><span>${m==null?void 0:m.name}</span><span>${this.formatCurrency(l)}</span></div>`}),u+="</div>",a.innerHTML=u}else{const o=document.querySelectorAll(".customSplitUser:checked");if(o.length===0){a.innerHTML="Chọn ít nhất một người để chia tiền";return}let l='<div class="space-y-1">',u=0;o.forEach(m=>{const x=m.value,A=this.users.find(R=>R.id===x),N=document.querySelector(`input[data-user-id="${x}"]`),L=parseFloat((N==null?void 0:N.value)||"0");u+=L,l+=`<div class="flex justify-between"><span>${A==null?void 0:A.name}</span><span>${this.formatCurrency(L)}</span></div>`});const d=n-u;l+='<div class="border-t pt-1 mt-1">',l+=`<div class="flex justify-between font-medium"><span>Tổng đã chia:</span><span>${this.formatCurrency(u)}</span></div>`,l+=`<div class="flex justify-between ${d===0?"text-green-600":d>0?"text-orange-600":"text-red-600"}">`,l+=`<span>Còn lại:</span><span>${this.formatCurrency(d)}</span></div>`,l+="</div></div>",a.innerHTML=l;const p=document.getElementById("customSplitTotal");p&&(p.innerHTML=`Tổng: ${this.formatCurrency(u)} (Còn lại: ${this.formatCurrency(d)})`,p.className=`text-sm pt-2 border-t ${d===0?"text-green-600":"text-orange-600"}`)}}}handleSubmit(){var e;const t=document.getElementById("expenseDescription").value,n=parseFloat(document.getElementById("expenseAmount").value),s=document.getElementById("expensePaidBy").value,a=document.getElementById("expenseCategory").value,o=document.getElementById("expenseNotes").value,l=(e=document.querySelector('input[name="splitType"]:checked'))==null?void 0:e.value;let u=[];if(l==="equal"){const x=document.querySelectorAll(".splitBetween:checked");if(x.length===0){alert("Vui lòng chọn ít nhất một người để chia chi phí!");return}const A=n/x.length;x.forEach(N=>{u.push({userId:N.value,amount:A})})}else{const x=document.querySelectorAll(".customSplitUser:checked");if(x.length===0){alert("Vui lòng chọn ít nhất một người để chia chi phí!");return}let A=0;if(x.forEach(N=>{var L;const R=N.value,B=document.querySelector(`input[data-user-id="${R}"]`),H=parseFloat((B==null?void 0:B.value)||"0");if(H<=0){alert(`Vui lòng nhập số tiền cho ${(L=this.users.find(J=>J.id===R))==null?void 0:L.name}!`);return}u.push({userId:R,amount:H}),A+=H}),Math.abs(A-n)>1){alert(`Tổng số tiền chia (${this.formatCurrency(A)}) phải bằng tổng chi phí (${this.formatCurrency(n)})!`);return}}const d={description:t.trim(),amount:n,paidBy:s,category:a,splitBetween:u,splitType:l,notes:o.trim()||void 0},p=Cd(d);if(p.length>0){alert(p.join(`
`));return}const m={id:_d(),description:d.description,amount:d.amount,currency:"VND",paidBy:d.paidBy,splitBetween:d.splitBetween,splitType:d.splitType,category:d.category,date:new Date,notes:d.notes};this.onAddExpense(m),this.hide()}resetForm(){const e=document.getElementById("addExpenseForm");e&&(e.reset(),document.querySelectorAll(".splitBetween").forEach(t=>{t.checked=!0}))}formatCurrency(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0,maximumFractionDigits:0}).format(e)}}class Nd{constructor(e,t,n,s=[]){G(this,"users"),G(this,"allBalances"),G(this,"currentUser"),G(this,"completedSettlements"),this.users=e,this.allBalances=t,this.currentUser=n,this.completedSettlements=s}render(){const e=bl(this.allBalances);return e.length===0?`
        <div class="card">
          <h2 class="text-lg font-semibold mb-4 flex items-center">
            🎯 Gợi ý thanh toán
          </h2>
          <div class="text-center py-8">
            <div class="text-4xl mb-4">🎉</div>
            <h3 class="text-lg font-medium text-gray-800 mb-2">Tất cả đã thanh toán!</h3>
            <p class="text-gray-500">Không có khoản nợ nào cần thanh toán</p>
          </div>
        </div>
      `:`
      <div class="card">
        <h2 class="text-lg font-semibold mb-4 flex items-center">
          🎯 Gợi ý thanh toán
        </h2>
        
        <div class="space-y-3 mb-4">
          ${e.map((t,n)=>{const s=this.users.find(u=>u.id===t.from),a=this.users.find(u=>u.id===t.to),o=this.completedSettlements.some(u=>u.from===t.from&&u.to===t.to&&u.amount===t.amount),l=this.currentUser&&this.currentUser.id===t.to;return`
              <div class="p-3 ${o?"bg-gradient-to-r from-green-50 to-green-100 border-green-300":"bg-gradient-to-r from-blue-50 to-green-50"} rounded-lg border ${o?"border-green-300":"border-blue-200"}">
                ${o?`
                  <div class="flex items-center justify-center mb-2">
                    <span class="text-green-600 font-bold text-sm">✅ Đã thanh toán</span>
                  </div>
                `:""}
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ${s==null?void 0:s.name.charAt(0).toUpperCase()}
                    </div>
                    <span class="text-xl">${o?"✅":"💸"}</span>
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ${a==null?void 0:a.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div class="font-bold text-lg ${o?"text-green-600":"text-blue-600"}">
                    ${se(t.amount)}
                  </div>
                </div>
                <div class="text-xs text-gray-600 mb-2">
                  <strong>${s==null?void 0:s.name}</strong> chuyển cho <strong>${a==null?void 0:a.name}</strong>
                </div>
                ${o?`
                  <div class="text-center">
                    <span class="text-xs text-green-600">
                      💚 Giao dịch đã hoàn tất
                    </span>
                  </div>
                `:`
                  <div class="flex items-center justify-between">
                    <button 
                      onclick="window.showUserQRCode('${t.to}')"
                      class="text-xs text-blue-600 hover:text-blue-800 bg-blue-100 px-2 py-1 rounded"
                      title="Xem mã QR thanh toán"
                    >
                      📱 QR ${a==null?void 0:a.name}
                    </button>
                    ${l?`
                      <button 
                        onclick="window.markSettlementComplete('${t.from}', '${t.to}', ${t.amount}, ${n})"
                        class="text-xs text-green-600 hover:text-green-800 bg-green-100 px-2 py-1 rounded"
                        title="Đánh dấu đã nhận tiền"
                      >
                        ✅ Đã nhận
                      </button>
                    `:`
                      <span class="text-xs text-gray-400">
                        🔒 Chỉ ${a==null?void 0:a.name} mới có thể xác nhận
                      </span>
                    `}
                  </div>
                `}
              </div>
            `}).join("")}
        </div>

        <div class="bg-gray-50 p-3 rounded-lg">
          <h3 class="font-semibold text-gray-700 mb-2 text-sm flex items-center">
            💡 Tại sao thanh toán theo cách này?
          </h3>
          <div class="text-xs text-gray-600 space-y-1">
            <p>• <strong>Tối ưu:</strong> Chỉ ${e.length} giao dịch</p>
            <p>• <strong>Công bằng:</strong> Không ai nợ ai</p>
            <p>• <strong>Đơn giản:</strong> Ít giao dịch nhất</p>
          </div>
        </div>

        <div class="mt-3 text-xs text-gray-500">
          💡 <strong>Mẹo:</strong> Banking, ví điện tử hoặc tiền mặt
        </div>
      </div>
    `}}class Dd{constructor(e,t){G(this,"onLogin"),G(this,"onClose"),this.onLogin=e,this.onClose=t}render(){return`
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
    `}setupEventListeners(){const e=document.getElementById("login-form"),t=document.getElementById("close-login-modal"),n=document.getElementById("cancel-login"),s=document.getElementById("login-error"),a=document.getElementById("login-submit"),o=document.getElementById("login-submit-text"),l=document.getElementById("login-submit-loading");t==null||t.addEventListener("click",this.onClose),n==null||n.addEventListener("click",this.onClose);const u=d=>{d.key==="Escape"&&(this.onClose(),document.removeEventListener("keydown",u))};document.addEventListener("keydown",u),e==null||e.addEventListener("submit",async d=>{d.preventDefault();const p=new FormData(e),m={username:p.get("username"),password:p.get("password")};a.disabled=!0,o.classList.add("hidden"),l.classList.remove("hidden"),s.classList.add("hidden");try{await this.onLogin(m)}catch(x){s.textContent=x instanceof Error?x.message:"Đã có lỗi xảy ra",s.classList.remove("hidden")}finally{a.disabled=!1,o.classList.remove("hidden"),l.classList.add("hidden")}}),setTimeout(()=>{var d;(d=document.getElementById("email"))==null||d.focus()},100)}}class Bo{constructor(e,t,n,s,a){G(this,"users"),G(this,"onCreateUser"),G(this,"onUpdateUserStatus"),G(this,"onClose"),G(this,"authService"),G(this,"editUser",o=>{var l,u;const d=this.users.find(L=>L.id===o);if(!d){alert("Không tìm thấy người dùng!");return}const p=d.role==="admin",m=document.createElement("div");m.className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",m.id="edit-user-modal",m.innerHTML=`
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">
              ${p?"🔑 Đổi mật khẩu Admin":"✏️ Chỉnh sửa thông tin"}
            </h3>
            <button id="close-edit-modal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <form id="edit-user-form" class="space-y-4">
            ${p?`
              <div class="bg-blue-50 p-3 rounded-lg mb-4">
                <p class="text-blue-800 text-sm">
                  <strong>👑 Admin:</strong> ${d.name} (@${d.username})
                </p>
                <p class="text-blue-600 text-xs mt-1">Chỉ có thể đổi mật khẩu</p>
              </div>
            `:`
              <div>
                <label for="edit-user-name" class="block text-sm font-medium text-gray-700 mb-1">Tên</label>
                <input 
                  type="text" 
                  id="edit-user-name" 
                  name="name"
                  value="${d.name}"
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
                  value="${d.username}"
                  required
                  autocomplete="off"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="username"
                >
              </div>
            `}
            
            <div>
              <label for="edit-user-password" class="block text-sm font-medium text-gray-700 mb-1">
                Mật khẩu mới
              </label>
              <input 
                type="password" 
                id="edit-user-password" 
                name="password"
                ${p?"required":""}
                autocomplete="off"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="${p?"Nhập mật khẩu mới cho admin":"Để trống nếu không đổi mật khẩu"}"
              >
            </div>

            <div id="edit-user-error" class="text-red-600 text-sm hidden"></div>

            <div class="flex space-x-3">
              <button 
                type="submit" 
                class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <span id="edit-user-text">${p?"🔑 Đổi mật khẩu":"💾 Lưu thay đổi"}</span>
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
    `,document.body.appendChild(m);const x=()=>{document.body.removeChild(m),document.removeEventListener("keydown",A)},A=L=>{L.key==="Escape"&&x()};(l=document.getElementById("close-edit-modal"))==null||l.addEventListener("click",x),(u=document.getElementById("cancel-edit-user"))==null||u.addEventListener("click",x),document.addEventListener("keydown",A);const N=document.getElementById("edit-user-form");N.addEventListener("submit",async L=>{L.preventDefault();const R=new FormData(N),B=R.get("name"),H=R.get("username"),J=R.get("password"),ne=document.getElementById("edit-user-error"),ue=document.getElementById("edit-user-text"),ee=document.getElementById("edit-user-loading");try{if(ue==null||ue.classList.add("hidden"),ee==null||ee.classList.remove("hidden"),ne==null||ne.classList.add("hidden"),p){if(!J.trim())throw new Error("Vui lòng nhập mật khẩu mới");await this.authService.updateUser(o,{password:J.trim()})}else{await this.authService.updateUser(o,{name:B.trim(),username:H.trim(),...J.trim()&&{password:J.trim()}});const g=this.users.findIndex(v=>v.id===o);g!==-1&&(this.users[g].name=B.trim(),this.users[g].username=H.trim())}const b=document.getElementById("users-list");b&&(b.innerHTML=this.renderUsersList()),alert("✅ Cập nhật thông tin thành công!"),x()}catch(b){ue==null||ue.classList.remove("hidden"),ee==null||ee.classList.add("hidden"),ne&&(ne.textContent=b instanceof Error?b.message:"Có lỗi xảy ra",ne.classList.remove("hidden"))}})}),this.users=e,this.onCreateUser=t,this.onUpdateUserStatus=n,this.onClose=s,this.authService=a}render(){return`
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
    `}renderUsersList(){return this.users.map(e=>`
      <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg ${e.isActive?"bg-white":"bg-gray-50"}">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            ${e.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div class="flex items-center space-x-2">
              <h4 class="font-medium ${e.isActive?"text-gray-900":"text-gray-500"}">${e.name}</h4>
              ${e.role==="admin"?'<span class="px-2 py-1 text-xs bg-red-100 text-red-700 rounded-full">👑 Admin</span>':""}
              ${e.isActive?"":'<span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">❌ Vô hiệu hóa</span>'}
            </div>
            <p class="text-sm text-gray-600">@${e.username}</p>
            <p class="text-xs text-gray-500">Tạo: ${new Date(e.createdAt).toLocaleDateString("vi-VN")}</p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button 
            class="px-2 py-1 text-sm bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-md transition-colors"
            onclick="window.showUserQRCode('${e.id}')"
            title="Xem/Chỉnh sửa mã QR"
          >
            ${e.qrCode?"📱 QR":"📱➕"}
          </button>
          <button 
            class="px-2 py-1 text-sm bg-yellow-100 text-yellow-700 hover:bg-yellow-200 rounded-md transition-colors"
            onclick="window.editUser('${e.id}')"
            title="${e.role==="admin"?"Đổi mật khẩu Admin":"Chỉnh sửa thông tin"}"
          >
            ${e.role==="admin"?"🔑 Đổi MK":"✏️ Sửa"}
          </button>
          ${e.role!=="admin"?`
            <button 
              class="px-3 py-1 text-sm rounded-md transition-colors ${e.isActive?"bg-red-100 text-red-700 hover:bg-red-200":"bg-green-100 text-green-700 hover:bg-green-200"}"
              onclick="window.toggleUserStatus('${e.id}', ${!e.isActive})"
            >
              ${e.isActive?"❌ Vô hiệu hóa":"✅ Kích hoạt"}
            </button>
          `:'<span class="text-gray-400 text-sm">Admin account</span>'}
        </div>
      </div>
    `).join("")}setupEventListeners(){const e=document.getElementById("close-user-management"),t=document.getElementById("close-user-management-btn"),n=document.getElementById("create-user-form"),s=document.getElementById("create-user-error"),a=document.getElementById("create-user-success");e==null||e.addEventListener("click",this.onClose),t==null||t.addEventListener("click",this.onClose);const o=l=>{l.key==="Escape"&&(this.onClose(),document.removeEventListener("keydown",o))};document.addEventListener("keydown",o),n==null||n.addEventListener("submit",async l=>{l.preventDefault();const u=new FormData(n),d={name:u.get("name"),username:u.get("username"),password:u.get("password"),qrCode:u.get("qrCode")||void 0},p=document.getElementById("create-user-text"),m=document.getElementById("create-user-loading");p.classList.add("hidden"),m.classList.remove("hidden"),s.classList.add("hidden"),a.classList.add("hidden");try{const x=await this.onCreateUser(d);this.users.push(x);const A=document.getElementById("users-list");A&&(A.innerHTML=this.renderUsersList()),n.reset(),a.textContent=`Tạo thành công người dùng: ${x.name}`,a.classList.remove("hidden")}catch(x){s.textContent=x instanceof Error?x.message:"Đã có lỗi xảy ra",s.classList.remove("hidden")}finally{p.classList.remove("hidden"),m.classList.add("hidden")}}),window.toggleUserStatus=async(l,u)=>{try{await this.onUpdateUserStatus(l,u);const d=this.users.findIndex(m=>m.id===l);d!==-1&&(this.users[d].isActive=u);const p=document.getElementById("users-list");p&&(p.innerHTML=this.renderUsersList())}catch(d){alert("Lỗi: "+(d instanceof Error?d.message:"Không thể cập nhật trạng thái"))}}}}class Rd{constructor(e,t){G(this,"user"),G(this,"onClose"),G(this,"tempQRImage",null),this.user=e,this.onClose=t}render(){return`
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
              ${this.user.qrCode?this.renderQRCode():this.renderNoQRCode()}
            </div>

            <!-- Actions -->
            <div class="flex space-x-3">
              ${this.user.qrCode?`
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
              `:`
                <button 
                  id="add-qr-code-btn"
                  class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  ➕ Thêm mã QR
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
    `}renderQRCode(){try{const e=JSON.parse(this.user.qrCode);return e.type==="image"&&e.image?`
          <div class="bg-gray-50 p-4 rounded-lg text-center">
            <img src="${e.image}" alt="QR Code" class="max-w-full h-64 object-contain mx-auto mb-2">
            <p class="text-sm text-gray-600">${e.description||"QR Code thanh toán"}</p>
          </div>
        `:`
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <div class="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
            <span class="text-gray-500">📱 QR Code</span>
          </div>
          <p class="text-sm text-gray-600">QR Code thanh toán</p>
        </div>
      `}catch{return this.renderNoQRCode()}}renderNoQRCode(){return`
      <div class="bg-gray-50 p-8 rounded-lg text-center">
        <div class="w-24 h-24 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </div>
        <h3 class="font-medium text-gray-700 mb-2">Chưa có mã QR</h3>
        <p class="text-sm text-gray-500">Thêm mã QR để bạn bè có thể thanh toán dễ dàng</p>
      </div>
    `}setupEventListeners(){const e=document.getElementById("close-qr-modal"),t=document.getElementById("close-qr-modal-btn"),n=document.getElementById("add-qr-code-btn"),s=document.getElementById("edit-qr-code-btn"),a=document.getElementById("copy-qr-code-btn"),o=document.getElementById("qr-form"),l=document.getElementById("qr-edit-form"),u=document.getElementById("cancel-qr-edit");e==null||e.addEventListener("click",this.onClose),t==null||t.addEventListener("click",this.onClose);const d=m=>{m.key==="Escape"&&(this.onClose(),document.removeEventListener("keydown",d))};document.addEventListener("keydown",d),n==null||n.addEventListener("click",()=>{l==null||l.classList.remove("hidden")}),s==null||s.addEventListener("click",()=>{l==null||l.classList.remove("hidden")}),u==null||u.addEventListener("click",()=>{l==null||l.classList.add("hidden"),this.tempQRImage=null;const m=document.getElementById("qr-form");m==null||m.reset();const x=document.getElementById("qr-preview");x==null||x.classList.add("hidden")}),a==null||a.addEventListener("click",()=>{try{const m=JSON.parse(this.user.qrCode);m.image&&(navigator.clipboard.writeText(m.description||"QR Code thanh toán"),alert("Đã copy mô tả QR code!"))}catch{alert("Không thể copy QR code")}}),o==null||o.addEventListener("submit",m=>{m.preventDefault(),this.handleQRFormSubmit()});const p=document.getElementById("qr-file-input");p==null||p.addEventListener("change",m=>{var x;const A=(x=m.target.files)==null?void 0:x[0];A&&this.handleFileUpload(A)})}handleFileUpload(e){if(!e.type.startsWith("image/")){alert("Vui lòng chọn file ảnh!");return}if(e.size>5*1024*1024){alert("File quá lớn! Vui lòng chọn file nhỏ hơn 5MB.");return}const t=new FileReader;t.onload=n=>{var s;const a=(s=n.target)==null?void 0:s.result,o=document.getElementById("qr-preview"),l=document.getElementById("qr-preview-image");o&&l&&(l.src=a,o.classList.remove("hidden")),this.tempQRImage=a},t.readAsDataURL(e)}handleQRFormSubmit(){if(!this.tempQRImage){alert("Vui lòng chọn ảnh QR code!");return}const e=document.getElementById("qr-description").value.trim(),t={type:"image",image:this.tempQRImage,description:e||"QR Code thanh toán"},n=JSON.stringify(t);this.user.qrCode=n;const s=new CustomEvent("qr-code-updated",{detail:{userId:this.user.id,qrCode:n}});window.dispatchEvent(s),alert("✅ Đã lưu mã QR thành công!"),this.onClose()}}const Ld="http://localhost:3001/api";class Od{async request(e,t={}){const n=`${Ld}${e}`,s=await fetch(n,{headers:{"Content-Type":"application/json"},...t});if(!s.ok){const a=await s.json().catch(()=>({}));throw new Error(a.message||`HTTP error! status: ${s.status}`)}return s.json()}async login(e,t){return this.request("/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})})}async getUsers(){return this.request("/users")}async createUser(e){return this.request("/users",{method:"POST",body:JSON.stringify(e)})}async updateUser(e,t){return this.request(`/users/${e}`,{method:"PUT",body:JSON.stringify(t)})}async deleteUser(e){return this.request(`/users/${e}`,{method:"DELETE"})}async getExpenses(){return this.request("/expenses")}async createExpense(e){return this.request("/expenses",{method:"POST",body:JSON.stringify(e)})}async deleteExpense(e){return this.request(`/expenses/${e}`,{method:"DELETE"})}async healthCheck(){return this.request("/health")}}const $o=new Od,Pd=()=>{};var jo={};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const El=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Md=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const a=r[t++];e[n++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=r[t++],o=r[t++],l=r[t++],u=((s&7)<<18|(a&63)<<12|(o&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const a=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(a&63)<<6|o&63)}}return e.join("")},Tl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const a=r[s],o=s+1<r.length,l=o?r[s+1]:0,u=s+2<r.length,d=u?r[s+2]:0,p=a>>2,m=(a&3)<<4|l>>4;let x=(l&15)<<2|d>>6,A=d&63;u||(A=64,o||(x=64)),n.push(t[p],t[m],t[x],t[A])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(El(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Md(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const a=t[r.charAt(s++)],o=s<r.length?t[r.charAt(s)]:0;++s;const l=s<r.length?t[r.charAt(s)]:64;++s;const u=s<r.length?t[r.charAt(s)]:64;if(++s,a==null||o==null||l==null||u==null)throw new Ud;const d=a<<2|o>>4;if(n.push(d),l!==64){const p=o<<4&240|l>>2;if(n.push(p),u!==64){const m=l<<6&192|u;n.push(m)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Ud extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vd=function(r){const e=El(r);return Tl.encodeByteArray(e,!0)},Qr=function(r){return Vd(r).replace(/\./g,"")},Il=function(r){try{return Tl.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Fd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Bd=()=>Fd().__FIREBASE_DEFAULTS__,$d=()=>{if(typeof process>"u"||typeof jo>"u")return;const r=jo.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},jd=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Il(r[1]);return e&&JSON.parse(e)},fs=()=>{try{return Pd()||Bd()||$d()||jd()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},xl=r=>{var e,t;return(t=(e=fs())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},qd=r=>{const e=xl(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Sl=()=>{var r;return(r=fs())==null?void 0:r.config},_l=r=>{var e;return(e=fs())==null?void 0:e[`_${r}`]};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function pn(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cl(r){return(await fetch(r,{credentials:"include"})).ok}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Hd(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Qr(JSON.stringify(t)),Qr(JSON.stringify(o)),""].join(".")}const zn={};function Gd(){const r={prod:[],emulator:[]};for(const e of Object.keys(zn))zn[e]?r.emulator.push(e):r.prod.push(e);return r}function Kd(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let qo=!1;function Al(r,e){if(typeof window>"u"||typeof document>"u"||!pn(window.location.host)||zn[r]===e||zn[r]||qo)return;zn[r]=e;function t(m){return`__firebase__banner__${m}`}const n="__firebase__banner",s=Gd().prod.length>0;function a(){const m=document.getElementById(n);m&&m.remove()}function o(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,x){m.setAttribute("width","24"),m.setAttribute("id",x),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{qo=!0,a()},m}function d(m,x){m.setAttribute("id",x),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Kd(n),x=t("text"),A=document.getElementById(x)||document.createElement("span"),N=t("learnmore"),L=document.getElementById(N)||document.createElement("a"),R=t("preprendIcon"),B=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const H=m.element;o(H),d(L,N);const J=u();l(B,R),H.append(B,A,L,J),document.body.appendChild(H)}s?(A.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function Wd(){var r;const e=(r=fs())==null?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xd(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Yd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zd(){const r=Te();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function ef(){return!Wd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tf(){try{return typeof indexedDB=="object"}catch{return!1}}function nf(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)==null?void 0:a.message)||"")}}catch(t){e(t)}})}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const rf="FirebaseError";class tt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=rf,Object.setPrototypeOf(this,tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ir.prototype.create)}}class ir{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],o=a?sf(a,n):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new tt(s,l,n)}}function sf(r,e){return r.replace(af,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const af=/\{\$([^}]+)}/g;function of(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Mt(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const a=r[s],o=e[s];if(zo(a)&&zo(o)){if(!Mt(a,o))return!1}else if(a!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function zo(r){return r!==null&&typeof r=="object"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ar(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function cf(r,e){const t=new lf(r,e);return t.subscribe.bind(t)}class lf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");uf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=ii),s.error===void 0&&(s.error=ii),s.complete===void 0&&(s.complete=ii);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uf(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ii(){}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Se(r){return r&&r._delegate?r._delegate:r}class Ut{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Rt="[DEFAULT]";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class hf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new zd;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ff(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});n.resolve(a)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[a,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(a);n===l&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const a=this.instances.get(n);return a&&e(a,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:df(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function df(r){return r===Rt?void 0:r}function ff(r){return r.instantiationMode==="EAGER"}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(j||(j={}));const mf={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},gf=j.INFO,yf={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},vf=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=yf[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zi{constructor(e){this.name=e,this._logLevel=gf,this._logHandler=vf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const wf=(r,e)=>e.some(t=>r instanceof t);let Ho,Go;function bf(){return Ho||(Ho=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ef(){return Go||(Go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kl=new WeakMap,vi=new WeakMap,Nl=new WeakMap,ai=new WeakMap,Hi=new WeakMap;function Tf(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",a),r.removeEventListener("error",o)},a=()=>{t(pt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",a),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&kl.set(t,r)}).catch(()=>{}),Hi.set(e,r),e}function If(r){if(vi.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",o),r.removeEventListener("abort",o)},a=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",a),r.addEventListener("error",o),r.addEventListener("abort",o)});vi.set(r,e)}let wi={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return vi.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Nl.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function xf(r){wi=r(wi)}function Sf(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(oi(this),e,...t);return Nl.set(n,e.sort?e.sort():[e]),pt(n)}:Ef().includes(r)?function(...e){return r.apply(oi(this),e),pt(kl.get(this))}:function(...e){return pt(r.apply(oi(this),e))}}function _f(r){return typeof r=="function"?Sf(r):(r instanceof IDBTransaction&&If(r),wf(r,bf())?new Proxy(r,wi):r)}function pt(r){if(r instanceof IDBRequest)return Tf(r);if(ai.has(r))return ai.get(r);const e=_f(r);return e!==r&&(ai.set(r,e),Hi.set(e,r)),e}const oi=r=>Hi.get(r);function Cf(r,e,{blocked:t,upgrade:n,blocking:s,terminated:a}={}){const o=indexedDB.open(r,e),l=pt(o);return n&&o.addEventListener("upgradeneeded",u=>{n(pt(o.result),u.oldVersion,u.newVersion,pt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{a&&u.addEventListener("close",()=>a()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Af=["get","getKey","getAll","getAllKeys","count"],kf=["put","add","delete","clear"],ci=new Map;function Ko(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ci.get(e))return ci.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=kf.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Af.includes(t)))return;const a=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return ci.set(e,a),a}xf(r=>({...r,get:(e,t,n)=>Ko(e,t)||r.get(e,t,n),has:(e,t)=>!!Ko(e,t)||r.has(e,t)}));/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Df(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(" ")}}function Df(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bi="@firebase/app",Qo="0.14.4";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const We=new zi("@firebase/app"),Rf="@firebase/app-compat",Lf="@firebase/analytics-compat",Of="@firebase/analytics",Pf="@firebase/app-check-compat",Mf="@firebase/app-check",Uf="@firebase/auth",Vf="@firebase/auth-compat",Ff="@firebase/database",Bf="@firebase/data-connect",$f="@firebase/database-compat",jf="@firebase/functions",qf="@firebase/functions-compat",zf="@firebase/installations",Hf="@firebase/installations-compat",Gf="@firebase/messaging",Kf="@firebase/messaging-compat",Qf="@firebase/performance",Wf="@firebase/performance-compat",Jf="@firebase/remote-config",Xf="@firebase/remote-config-compat",Yf="@firebase/storage",Zf="@firebase/storage-compat",ep="@firebase/firestore",tp="@firebase/ai",np="@firebase/firestore-compat",rp="firebase",sp="12.4.0";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ei="[DEFAULT]",ip={[bi]:"fire-core",[Rf]:"fire-core-compat",[Of]:"fire-analytics",[Lf]:"fire-analytics-compat",[Mf]:"fire-app-check",[Pf]:"fire-app-check-compat",[Uf]:"fire-auth",[Vf]:"fire-auth-compat",[Ff]:"fire-rtdb",[Bf]:"fire-data-connect",[$f]:"fire-rtdb-compat",[jf]:"fire-fn",[qf]:"fire-fn-compat",[zf]:"fire-iid",[Hf]:"fire-iid-compat",[Gf]:"fire-fcm",[Kf]:"fire-fcm-compat",[Qf]:"fire-perf",[Wf]:"fire-perf-compat",[Jf]:"fire-rc",[Xf]:"fire-rc-compat",[Yf]:"fire-gcs",[Zf]:"fire-gcs-compat",[ep]:"fire-fst",[np]:"fire-fst-compat",[tp]:"fire-vertex","fire-js":"fire-js",[rp]:"fire-js-all"};/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Wr=new Map,ap=new Map,Ti=new Map;function Wo(r,e){try{r.container.addComponent(e)}catch(t){We.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function an(r){const e=r.name;if(Ti.has(e))return We.debug(`There were multiple attempts to register component ${e}.`),!1;Ti.set(e,r);for(const t of Wr.values())Wo(t,r);for(const t of ap.values())Wo(t,r);return!0}function Gi(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Ve(r){return r==null?!1:r.settings!==void 0}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const op={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mt=new ir("app","Firebase",op);/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class cp{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const mn=sp;function Dl(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Ei,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw mt.create("bad-app-name",{appName:String(s)});if(t||(t=Sl()),!t)throw mt.create("no-options");const a=Wr.get(s);if(a){if(Mt(t,a.options)&&Mt(n,a.config))return a;throw mt.create("duplicate-app",{appName:s})}const o=new pf(s);for(const u of Ti.values())o.addComponent(u);const l=new cp(t,n,o);return Wr.set(s,l),l}function Rl(r=Ei){const e=Wr.get(r);if(!e&&r===Ei&&Sl())return Dl();if(!e)throw mt.create("no-app",{appName:r});return e}function gt(r,e,t){let n=ip[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),We.warn(o.join(" "));return}an(new Ut(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const lp="firebase-heartbeat-database",up=1,Jn="firebase-heartbeat-store";let li=null;function Ll(){return li||(li=Cf(lp,up,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Jn)}catch(t){console.warn(t)}}}}).catch(r=>{throw mt.create("idb-open",{originalErrorMessage:r.message})})),li}async function hp(r){try{const e=(await Ll()).transaction(Jn),t=await e.objectStore(Jn).get(Ol(r));return await e.done,t}catch(e){if(e instanceof tt)We.warn(e.message);else{const t=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});We.warn(t.message)}}}async function Jo(r,e){try{const t=(await Ll()).transaction(Jn,"readwrite");await t.objectStore(Jn).put(e,Ol(r)),await t.done}catch(t){if(t instanceof tt)We.warn(t.message);else{const n=mt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});We.warn(n.message)}}}function Ol(r){return`${r.name}!${r.options.appId}`}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const dp=1024,fp=30;class pp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gp(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xo();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>fp){const a=yp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){We.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xo(),{heartbeatsToSend:n,unsentEntries:s}=mp(this._heartbeatsCache.heartbeats),a=Qr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return We.warn(t),""}}}function Xo(){return new Date().toISOString().substring(0,10)}function mp(r,e=dp){const t=[];let n=r.slice();for(const s of r){const a=t.find(o=>o.agent===s.agent);if(a){if(a.dates.push(s.date),Yo(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Yo(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class gp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tf()?nf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await hp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Jo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Jo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}}function Yo(r){return Qr(JSON.stringify({version:2,heartbeats:r})).length}function yp(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vp(r){an(new Ut("platform-logger",e=>new Nf(e),"PRIVATE")),an(new Ut("heartbeat",e=>new pp(e),"PRIVATE")),gt(bi,Qo,r),gt(bi,Qo,"esm2020"),gt("fire-js","")}vp("");var Zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yt,Pl;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function v(){}v.prototype=g.prototype,b.F=g.prototype,b.prototype=new v,b.prototype.constructor=b,b.D=function(E,w,I){for(var y=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)y[_e-2]=arguments[_e];return g.prototype[w].apply(E,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,g,v){v||(v=0);const E=Array(16);if(typeof g=="string")for(var w=0;w<16;++w)E[w]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(w=0;w<16;++w)E[w]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=b.g[0],v=b.g[1],w=b.g[2];let I=b.g[3],y;y=g+(I^v&(w^I))+E[0]+3614090360&4294967295,g=v+(y<<7&4294967295|y>>>25),y=I+(w^g&(v^w))+E[1]+3905402710&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(v^I&(g^v))+E[2]+606105819&4294967295,w=I+(y<<17&4294967295|y>>>15),y=v+(g^w&(I^g))+E[3]+3250441966&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(I^v&(w^I))+E[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=I+(w^g&(v^w))+E[5]+1200080426&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(v^I&(g^v))+E[6]+2821735955&4294967295,w=I+(y<<17&4294967295|y>>>15),y=v+(g^w&(I^g))+E[7]+4249261313&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(I^v&(w^I))+E[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=I+(w^g&(v^w))+E[9]+2336552879&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(v^I&(g^v))+E[10]+4294925233&4294967295,w=I+(y<<17&4294967295|y>>>15),y=v+(g^w&(I^g))+E[11]+2304563134&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(I^v&(w^I))+E[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=I+(w^g&(v^w))+E[13]+4254626195&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(v^I&(g^v))+E[14]+2792965006&4294967295,w=I+(y<<17&4294967295|y>>>15),y=v+(g^w&(I^g))+E[15]+1236535329&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(w^I&(v^w))+E[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=I+(v^w&(g^v))+E[6]+3225465664&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(I^g))+E[11]+643717713&4294967295,w=I+(y<<14&4294967295|y>>>18),y=v+(I^g&(w^I))+E[0]+3921069994&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(v^w))+E[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=I+(v^w&(g^v))+E[10]+38016083&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(I^g))+E[15]+3634488961&4294967295,w=I+(y<<14&4294967295|y>>>18),y=v+(I^g&(w^I))+E[4]+3889429448&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(v^w))+E[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=I+(v^w&(g^v))+E[14]+3275163606&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(I^g))+E[3]+4107603335&4294967295,w=I+(y<<14&4294967295|y>>>18),y=v+(I^g&(w^I))+E[8]+1163531501&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(v^w))+E[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=I+(v^w&(g^v))+E[2]+4243563512&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(I^g))+E[7]+1735328473&4294967295,w=I+(y<<14&4294967295|y>>>18),y=v+(I^g&(w^I))+E[12]+2368359562&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(v^w^I)+E[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=I+(g^v^w)+E[8]+2272392833&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^v)+E[11]+1839030562&4294967295,w=I+(y<<16&4294967295|y>>>16),y=v+(w^I^g)+E[14]+4259657740&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^I)+E[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=I+(g^v^w)+E[4]+1272893353&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^v)+E[7]+4139469664&4294967295,w=I+(y<<16&4294967295|y>>>16),y=v+(w^I^g)+E[10]+3200236656&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^I)+E[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=I+(g^v^w)+E[0]+3936430074&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^v)+E[3]+3572445317&4294967295,w=I+(y<<16&4294967295|y>>>16),y=v+(w^I^g)+E[6]+76029189&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^I)+E[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=I+(g^v^w)+E[12]+3873151461&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^v)+E[15]+530742520&4294967295,w=I+(y<<16&4294967295|y>>>16),y=v+(w^I^g)+E[2]+3299628645&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(w^(v|~I))+E[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=I+(v^(g|~w))+E[7]+1126891415&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~v))+E[14]+2878612391&4294967295,w=I+(y<<15&4294967295|y>>>17),y=v+(I^(w|~g))+E[5]+4237533241&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~I))+E[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=I+(v^(g|~w))+E[3]+2399980690&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~v))+E[10]+4293915773&4294967295,w=I+(y<<15&4294967295|y>>>17),y=v+(I^(w|~g))+E[1]+2240044497&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~I))+E[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=I+(v^(g|~w))+E[15]+4264355552&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~v))+E[6]+2734768916&4294967295,w=I+(y<<15&4294967295|y>>>17),y=v+(I^(w|~g))+E[13]+1309151649&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~I))+E[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=I+(v^(g|~w))+E[11]+3174756917&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~v))+E[2]+718787259&4294967295,w=I+(y<<15&4294967295|y>>>17),y=v+(I^(w|~g))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+I&4294967295}n.prototype.v=function(b,g){g===void 0&&(g=b.length);const v=g-this.blockSize,E=this.C;let w=this.h,I=0;for(;I<g;){if(w==0)for(;I<=v;)s(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<g;)if(E[w++]=b.charCodeAt(I++),w==this.blockSize){s(this,E),w=0;break}}else for(;I<g;)if(E[w++]=b[I++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=g},n.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;g=this.o*8;for(var v=b.length-8;v<b.length;++v)b[v]=g&255,g/=256;for(this.v(b),b=Array(16),g=0,v=0;v<4;++v)for(let E=0;E<32;E+=8)b[g++]=this.g[v]>>>E&255;return b};function a(b,g){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=g(b)}function o(b,g){this.h=g;const v=[];let E=!0;for(let w=b.length-1;w>=0;w--){const I=b[w]|0;E&&I==g||(v[w]=I,E=!1)}this.g=v}var l={};function u(b){return-128<=b&&b<128?a(b,function(g){return new o([g|0],g<0?-1:0)}):new o([b|0],b<0?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return m;if(b<0)return R(d(-b));const g=[];let v=1;for(let E=0;b>=v;E++)g[E]=b/v|0,v*=4294967296;return new o(g,0)}function p(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return R(p(b.substring(1),g));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=d(Math.pow(g,8));let E=m;for(let I=0;I<b.length;I+=8){var w=Math.min(8,b.length-I);const y=parseInt(b.substring(I,I+w),g);w<8?(w=d(Math.pow(g,w)),E=E.j(w).add(d(y))):(E=E.j(v),E=E.add(d(y)))}return E}var m=u(0),x=u(1),A=u(16777216);r=o.prototype,r.m=function(){if(L(this))return-R(this).m();let b=0,g=1;for(let v=0;v<this.g.length;v++){const E=this.i(v);b+=(E>=0?E:4294967296+E)*g,g*=4294967296}return b},r.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(N(this))return"0";if(L(this))return"-"+R(this).toString(b);const g=d(Math.pow(b,6));var v=this;let E="";for(;;){const w=ne(v,g).g;v=B(v,w.j(g));let I=((v.g.length>0?v.g[0]:v.h)>>>0).toString(b);if(v=w,N(v))return I+E;for(;I.length<6;)I="0"+I;E=I+E}},r.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function N(b){if(b.h!=0)return!1;for(let g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function L(b){return b.h==-1}r.l=function(b){return b=B(this,b),L(b)?-1:N(b)?0:1};function R(b){const g=b.g.length,v=[];for(let E=0;E<g;E++)v[E]=~b.g[E];return new o(v,~b.h).add(x)}r.abs=function(){return L(this)?R(this):this},r.add=function(b){const g=Math.max(this.g.length,b.g.length),v=[];let E=0;for(let w=0;w<=g;w++){let I=E+(this.i(w)&65535)+(b.i(w)&65535),y=(I>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);E=y>>>16,I&=65535,y&=65535,v[w]=y<<16|I}return new o(v,v[v.length-1]&-2147483648?-1:0)};function B(b,g){return b.add(R(g))}r.j=function(b){if(N(this)||N(b))return m;if(L(this))return L(b)?R(this).j(R(b)):R(R(this).j(b));if(L(b))return R(this.j(R(b)));if(this.l(A)<0&&b.l(A)<0)return d(this.m()*b.m());const g=this.g.length+b.g.length,v=[];for(var E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(let w=0;w<b.g.length;w++){const I=this.i(E)>>>16,y=this.i(E)&65535,_e=b.i(w)>>>16,Ct=b.i(w)&65535;v[2*E+2*w]+=y*Ct,H(v,2*E+2*w),v[2*E+2*w+1]+=I*Ct,H(v,2*E+2*w+1),v[2*E+2*w+1]+=y*_e,H(v,2*E+2*w+1),v[2*E+2*w+2]+=I*_e,H(v,2*E+2*w+2)}for(b=0;b<g;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=g;b<2*g;b++)v[b]=0;return new o(v,0)};function H(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function J(b,g){this.g=b,this.h=g}function ne(b,g){if(N(g))throw Error("division by zero");if(N(b))return new J(m,m);if(L(b))return g=ne(R(b),g),new J(R(g.g),R(g.h));if(L(g))return g=ne(b,R(g)),new J(R(g.g),g.h);if(b.g.length>30){if(L(b)||L(g))throw Error("slowDivide_ only works with positive integers.");for(var v=x,E=g;E.l(b)<=0;)v=ue(v),E=ue(E);var w=ee(v,1),I=ee(E,1);for(E=ee(E,2),v=ee(v,2);!N(E);){var y=I.add(E);y.l(b)<=0&&(w=w.add(v),I=y),E=ee(E,1),v=ee(v,1)}return g=B(b,w.j(g)),new J(w,g)}for(w=m;b.l(g)>=0;){for(v=Math.max(1,Math.floor(b.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),I=d(v),y=I.j(g);L(y)||y.l(b)>0;)v-=E,I=d(v),y=I.j(g);N(I)&&(I=x),w=w.add(I),b=B(b,y)}return new J(w,b)}r.B=function(b){return ne(this,b).h},r.and=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)&b.i(E);return new o(v,this.h&b.h)},r.or=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)|b.i(E);return new o(v,this.h|b.h)},r.xor=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)^b.i(E);return new o(v,this.h^b.h)};function ue(b){const g=b.g.length+1,v=[];for(let E=0;E<g;E++)v[E]=b.i(E)<<1|b.i(E-1)>>>31;return new o(v,b.h)}function ee(b,g){const v=g>>5;g%=32;const E=b.g.length-v,w=[];for(let I=0;I<E;I++)w[I]=g>0?b.i(I+v)>>>g|b.i(I+v+1)<<32-g:b.i(I+v);return new o(w,b.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Pl=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,yt=o}).apply(typeof Zo<"u"?Zo:typeof self<"u"?self:typeof window<"u"?window:{});var Dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ml,Fn,Ul,Ur,Ii,Vl,Fl,Bl;(function(){var r,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Dr=="object"&&Dr];for(var c=0;c<i.length;++c){var h=i[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function s(i,c){if(c)e:{var h=n;i=i.split(".");for(var f=0;f<i.length-1;f++){var T=i[f];if(!(T in h))break e;h=h[T]}i=i[i.length-1],f=h[i],c=c(f),c!=f&&c!=null&&e(h,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},o=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function u(i,c,h){return i.call.apply(i.bind,arguments)}function d(i,c,h){return d=u,d.apply(null,arguments)}function p(i,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function m(i,c){function h(){}h.prototype=c.prototype,i.Z=c.prototype,i.prototype=new h,i.prototype.constructor=i,i.Ob=function(f,T,S){for(var k=Array(arguments.length-2),$=2;$<arguments.length;$++)k[$-2]=arguments[$];return c.prototype[T].apply(f,k)}}var x=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function A(i){const c=i.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=i[f];return h}return[]}function N(i,c){for(let f=1;f<arguments.length;f++){const T=arguments[f];var h=typeof T;if(h=h!="object"?h:T?Array.isArray(T)?"array":h:"null",h=="array"||h=="object"&&typeof T.length=="number"){h=i.length||0;const S=T.length||0;i.length=h+S;for(let k=0;k<S;k++)i[h+k]=T[k]}else i.push(T)}}class L{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function R(i){o.setTimeout(()=>{throw i},0)}function B(){var i=b;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class H{constructor(){this.h=this.g=null}add(c,h){const f=J.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var J=new L(()=>new ne,i=>i.reset());class ne{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ee=!1,b=new H,g=()=>{const i=Promise.resolve(void 0);ue=()=>{i.then(v)}};function v(){for(var i;i=B();){try{i.h.call(i.g)}catch(h){R(h)}var c=J;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}ee=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};o.addEventListener("test",h,c),o.removeEventListener("test",h,c)}catch{}return i}();function y(i){return/^[\s\xa0]*$/.test(i)}function _e(i,c){w.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}m(_e,w),_e.prototype.init=function(i,c){const h=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(h=="mouseover"?c=i.fromElement:h=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&_e.Z.h.call(this)},_e.prototype.h=function(){_e.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Ct="closure_listenable_"+(Math.random()*1e6|0),Gh=0;function Kh(i,c,h,f,T){this.listener=i,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=T,this.key=++Gh,this.da=this.fa=!1}function gr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function yr(i,c,h){for(const f in i)c.call(h,i[f],f,i)}function Qh(i,c){for(const h in i)c.call(void 0,i[h],h,i)}function Va(i){const c={};for(const h in i)c[h]=i[h];return c}const Fa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ba(i,c){let h,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(h in f)i[h]=f[h];for(let S=0;S<Fa.length;S++)h=Fa[S],Object.prototype.hasOwnProperty.call(f,h)&&(i[h]=f[h])}}function vr(i){this.src=i,this.g={},this.h=0}vr.prototype.add=function(i,c,h,f,T){const S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);const k=Os(i,c,f,T);return k>-1?(c=i[k],h||(c.fa=!1)):(c=new Kh(c,this.src,S,!!f,T),c.fa=h,i.push(c)),c};function Ls(i,c){const h=c.type;if(h in i.g){var f=i.g[h],T=Array.prototype.indexOf.call(f,c,void 0),S;(S=T>=0)&&Array.prototype.splice.call(f,T,1),S&&(gr(c),i.g[h].length==0&&(delete i.g[h],i.h--))}}function Os(i,c,h,f){for(let T=0;T<i.length;++T){const S=i[T];if(!S.da&&S.listener==c&&S.capture==!!h&&S.ha==f)return T}return-1}var Ps="closure_lm_"+(Math.random()*1e6|0),Ms={};function $a(i,c,h,f,T){if(Array.isArray(c)){for(let S=0;S<c.length;S++)$a(i,c[S],h,f,T);return null}return h=za(h),i&&i[Ct]?i.J(c,h,l(f)?!!f.capture:!1,T):Wh(i,c,h,!1,f,T)}function Wh(i,c,h,f,T,S){if(!c)throw Error("Invalid event type");const k=l(T)?!!T.capture:!!T;let $=Vs(i);if($||(i[Ps]=$=new vr(i)),h=$.add(c,h,f,k,S),h.proxy)return h;if(f=Jh(),h.proxy=f,f.src=i,f.listener=h,i.addEventListener)I||(T=k),T===void 0&&(T=!1),i.addEventListener(c.toString(),f,T);else if(i.attachEvent)i.attachEvent(qa(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Jh(){function i(h){return c.call(i.src,i.listener,h)}const c=Xh;return i}function ja(i,c,h,f,T){if(Array.isArray(c))for(var S=0;S<c.length;S++)ja(i,c[S],h,f,T);else f=l(f)?!!f.capture:!!f,h=za(h),i&&i[Ct]?(i=i.i,S=String(c).toString(),S in i.g&&(c=i.g[S],h=Os(c,h,f,T),h>-1&&(gr(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete i.g[S],i.h--)))):i&&(i=Vs(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Os(c,h,f,T)),(h=i>-1?c[i]:null)&&Us(h))}function Us(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Ct])Ls(c.i,i);else{var h=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(h,f,i.capture):c.detachEvent?c.detachEvent(qa(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Vs(c))?(Ls(h,i),h.h==0&&(h.src=null,c[Ps]=null)):gr(i)}}}function qa(i){return i in Ms?Ms[i]:Ms[i]="on"+i}function Xh(i,c){if(i.da)i=!0;else{c=new _e(c,this);const h=i.listener,f=i.ha||i.src;i.fa&&Us(i),i=h.call(f,c)}return i}function Vs(i){return i=i[Ps],i instanceof vr?i:null}var Fs="__closure_events_fn_"+(Math.random()*1e9>>>0);function za(i){return typeof i=="function"?i:(i[Fs]||(i[Fs]=function(c){return i.handleEvent(c)}),i[Fs])}function ve(){E.call(this),this.i=new vr(this),this.M=this,this.G=null}m(ve,E),ve.prototype[Ct]=!0,ve.prototype.removeEventListener=function(i,c,h,f){ja(this,i,c,h,f)};function Ie(i,c){var h,f=i.G;if(f)for(h=[];f;f=f.G)h.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new w(c,i);else if(c instanceof w)c.target=c.target||i;else{var T=c;c=new w(f,i),Ba(c,T)}T=!0;let S,k;if(h)for(k=h.length-1;k>=0;k--)S=c.g=h[k],T=wr(S,f,!0,c)&&T;if(S=c.g=i,T=wr(S,f,!0,c)&&T,T=wr(S,f,!1,c)&&T,h)for(k=0;k<h.length;k++)S=c.g=h[k],T=wr(S,f,!1,c)&&T}ve.prototype.N=function(){if(ve.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const h=i.g[c];for(let f=0;f<h.length;f++)gr(h[f]);delete i.g[c],i.h--}}this.G=null},ve.prototype.J=function(i,c,h,f){return this.i.add(String(i),c,!1,h,f)},ve.prototype.K=function(i,c,h,f){return this.i.add(String(i),c,!0,h,f)};function wr(i,c,h,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let T=!0;for(let S=0;S<c.length;++S){const k=c[S];if(k&&!k.da&&k.capture==h){const $=k.listener,he=k.ha||k.src;k.fa&&Ls(i.i,k),T=$.call(he,f)!==!1&&T}}return T&&!f.defaultPrevented}function Yh(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(i,c||0)}function Ha(i){i.g=Yh(()=>{i.g=null,i.i&&(i.i=!1,Ha(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Zh extends E{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ha(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function In(i){E.call(this),this.h=i,this.g={}}m(In,E);var Ga=[];function Ka(i){yr(i.g,function(c,h){this.g.hasOwnProperty(h)&&Us(c)},i),i.g={}}In.prototype.N=function(){In.Z.N.call(this),Ka(this)},In.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bs=o.JSON.stringify,ed=o.JSON.parse,td=class{stringify(i){return o.JSON.stringify(i,void 0)}parse(i){return o.JSON.parse(i,void 0)}};function Qa(){}function Wa(){}var xn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $s(){w.call(this,"d")}m($s,w);function js(){w.call(this,"c")}m(js,w);var At={},Ja=null;function br(){return Ja=Ja||new ve}At.Ia="serverreachability";function Xa(i){w.call(this,At.Ia,i)}m(Xa,w);function Sn(i){const c=br();Ie(c,new Xa(c))}At.STAT_EVENT="statevent";function Ya(i,c){w.call(this,At.STAT_EVENT,i),this.stat=c}m(Ya,w);function xe(i){const c=br();Ie(c,new Ya(c,i))}At.Ja="timingevent";function Za(i,c){w.call(this,At.Ja,i),this.size=c}m(Za,w);function _n(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){i()},c)}function Cn(){this.g=!0}Cn.prototype.ua=function(){this.g=!1};function nd(i,c,h,f,T,S){i.info(function(){if(i.g)if(S){var k="",$=S.split("&");for(let Y=0;Y<$.length;Y++){var he=$[Y].split("=");if(he.length>1){const fe=he[0];he=he[1];const Me=fe.split("_");k=Me.length>=2&&Me[1]=="type"?k+(fe+"="+he+"&"):k+(fe+"=redacted&")}}}else k=null;else k=S;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+c+`
`+h+`
`+k})}function rd(i,c,h,f,T,S,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+c+`
`+h+`
`+S+" "+k})}function zt(i,c,h,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+id(i,h)+(f?" "+f:"")})}function sd(i,c){i.info(function(){return"TIMEOUT: "+c})}Cn.prototype.info=function(){};function id(i,c){if(!i.g)return c;if(!c)return null;try{const S=JSON.parse(c);if(S){for(i=0;i<S.length;i++)if(Array.isArray(S[i])){var h=S[i];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var T=f[0];if(T!="noop"&&T!="stop"&&T!="close")for(let k=1;k<f.length;k++)f[k]=""}}}}return Bs(S)}catch{return c}}var Er={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},eo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},to;function qs(){}m(qs,Qa),qs.prototype.g=function(){return new XMLHttpRequest},to=new qs;function An(i){return encodeURIComponent(String(i))}function ad(i){var c=1;i=i.split(":");const h=[];for(;c>0&&i.length;)h.push(i.shift()),c--;return i.length&&h.push(i.join(":")),h}function nt(i,c,h,f){this.j=i,this.i=c,this.l=h,this.S=f||1,this.V=new In(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new no}function no(){this.i=null,this.g="",this.h=!1}var ro={},zs={};function Hs(i,c,h){i.M=1,i.A=Ir(Pe(c)),i.u=h,i.R=!0,so(i,null)}function so(i,c){i.F=Date.now(),Tr(i),i.B=Pe(i.A);var h=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),vo(h.i,"t",f),i.C=0,h=i.j.L,i.h=new no,i.g=Mo(i.j,h?c:null,!i.u),i.P>0&&(i.O=new Zh(d(i.Y,i,i.g),i.P)),c=i.V,h=i.g,f=i.ba;var T="readystatechange";Array.isArray(T)||(T&&(Ga[0]=T.toString()),T=Ga);for(let S=0;S<T.length;S++){const k=$a(h,T[S],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=i.J?Va(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Sn(),nd(i.i,i.v,i.B,i.l,i.S,i.u)}nt.prototype.ba=function(i){i=i.target;const c=this.O;c&&it(i)==3?c.j():this.Y(i)},nt.prototype.Y=function(i){try{if(i==this.g)e:{const $=it(this.g),he=this.g.ya(),Y=this.g.ca();if(!($<3)&&($!=3||this.g&&(this.h.h||this.g.la()||So(this.g)))){this.K||$!=4||he==7||(he==8||Y<=0?Sn(3):Sn(2)),Gs(this);var c=this.g.ca();this.X=c;var h=od(this);if(this.o=c==200,rd(this.i,this.v,this.B,this.l,this.S,$,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,T=this.g;if((f=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(f)){var S=f;break t}}S=null}if(i=S)zt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ks(this,i);else{this.o=!1,this.m=3,xe(12),kt(this),kn(this);break e}}if(this.R){i=!0;let fe;for(;!this.K&&this.C<h.length;)if(fe=cd(this,h),fe==zs){$==4&&(this.m=4,xe(14),i=!1),zt(this.i,this.l,null,"[Incomplete Response]");break}else if(fe==ro){this.m=4,xe(15),zt(this.i,this.l,h,"[Invalid Chunk]"),i=!1;break}else zt(this.i,this.l,fe,null),Ks(this,fe);if(io(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||h.length!=0||this.h.h||(this.m=1,xe(16),i=!1),this.o=this.o&&i,!i)zt(this.i,this.l,h,"[Invalid Chunked Response]"),kt(this),kn(this);else if(h.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),ti(k),k.P=!0,xe(11))}}else zt(this.i,this.l,h,null),Ks(this,h);$==4&&kt(this),this.o&&!this.K&&($==4?Ro(this.j,this):(this.o=!1,Tr(this)))}else Td(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,xe(12)):(this.m=0,xe(13)),kt(this),kn(this)}}}catch{}finally{}};function od(i){if(!io(i))return i.g.la();const c=So(i.g);if(c==="")return"";let h="";const f=c.length,T=it(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return kt(i),kn(i),"";i.h.i=new o.TextDecoder}for(let S=0;S<f;S++)i.h.h=!0,h+=i.h.i.decode(c[S],{stream:!(T&&S==f-1)});return c.length=0,i.h.g+=h,i.C=0,i.h.g}function io(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function cd(i,c){var h=i.C,f=c.indexOf(`
`,h);return f==-1?zs:(h=Number(c.substring(h,f)),isNaN(h)?ro:(f+=1,f+h>c.length?zs:(c=c.slice(f,f+h),i.C=f+h,c)))}nt.prototype.cancel=function(){this.K=!0,kt(this)};function Tr(i){i.T=Date.now()+i.H,ao(i,i.H)}function ao(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=_n(d(i.aa,i),c)}function Gs(i){i.D&&(o.clearTimeout(i.D),i.D=null)}nt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(sd(this.i,this.B),this.M!=2&&(Sn(),xe(17)),kt(this),this.m=2,kn(this)):ao(this,this.T-i)};function kn(i){i.j.I==0||i.K||Ro(i.j,i)}function kt(i){Gs(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Ka(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function Ks(i,c){try{var h=i.j;if(h.I!=0&&(h.g==i||Qs(h.h,i))){if(!i.L&&Qs(h.h,i)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<i.F)Ar(h),_r(h);else break e;ei(h),xe(18)}}else h.xa=T[1],0<h.xa-h.K&&T[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=_n(d(h.Va,h),6e3));lo(h.h)<=1&&h.ta&&(h.ta=void 0)}else Dt(h,11)}else if((i.L||h.g==i)&&Ar(h),!y(c))for(T=h.Ba.g.parse(c),c=0;c<T.length;c++){let Y=T[c];const fe=Y[0];if(!(fe<=h.K))if(h.K=fe,Y=Y[1],h.I==2)if(Y[0]=="c"){h.M=Y[1],h.ba=Y[2];const Me=Y[3];Me!=null&&(h.ka=Me,h.j.info("VER="+h.ka));const Kt=Y[4];Kt!=null&&(h.za=Kt,h.j.info("SVER="+h.za));const at=Y[5];at!=null&&typeof at=="number"&&at>0&&(f=1.5*at,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const ot=i.g;if(ot){const Nr=ot.g?ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nr){var S=f.h;S.g||Nr.indexOf("spdy")==-1&&Nr.indexOf("quic")==-1&&Nr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Ws(S,S.h),S.h=null))}if(f.G){const ni=ot.g?ot.g.getResponseHeader("X-HTTP-Session-Id"):null;ni&&(f.wa=ni,X(f.J,f.G,ni))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-i.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var k=i;if(f.na=Po(f,f.L?f.ba:null,f.W),k.L){uo(f.h,k);var $=k,he=f.O;he&&($.H=he),$.D&&(Gs($),Tr($)),f.g=k}else No(f);h.i.length>0&&Cr(h)}else Y[0]!="stop"&&Y[0]!="close"||Dt(h,7);else h.I==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Dt(h,7):Zs(h):Y[0]!="noop"&&h.l&&h.l.qa(Y),h.A=0)}}Sn(4)}catch{}}var ld=class{constructor(i,c){this.g=i,this.map=c}};function oo(i){this.l=i||10,o.PerformanceNavigationTiming?(i=o.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function co(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function lo(i){return i.h?1:i.g?i.g.size:0}function Qs(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Ws(i,c){i.g?i.g.add(c):i.h=c}function uo(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}oo.prototype.cancel=function(){if(this.i=ho(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ho(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const h of i.g.values())c=c.concat(h.G);return c}return A(i.i)}var fo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ud(i,c){if(i){i=i.split("&");for(let h=0;h<i.length;h++){const f=i[h].indexOf("=");let T,S=null;f>=0?(T=i[h].substring(0,f),S=i[h].substring(f+1)):T=i[h],c(T,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function rt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof rt?(this.l=i.l,Nn(this,i.j),this.o=i.o,this.g=i.g,Dn(this,i.u),this.h=i.h,Js(this,wo(i.i)),this.m=i.m):i&&(c=String(i).match(fo))?(this.l=!1,Nn(this,c[1]||"",!0),this.o=Rn(c[2]||""),this.g=Rn(c[3]||"",!0),Dn(this,c[4]),this.h=Rn(c[5]||"",!0),Js(this,c[6]||"",!0),this.m=Rn(c[7]||"")):(this.l=!1,this.i=new On(null,this.l))}rt.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(Ln(c,po,!0),":");var h=this.g;return(h||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Ln(c,po,!0),"@"),i.push(An(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&i.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Ln(h,h.charAt(0)=="/"?fd:dd,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Ln(h,md)),i.join("")},rt.prototype.resolve=function(i){const c=Pe(this);let h=!!i.j;h?Nn(c,i.j):h=!!i.o,h?c.o=i.o:h=!!i.g,h?c.g=i.g:h=i.u!=null;var f=i.h;if(h)Dn(c,i.u);else if(h=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var T=c.h.lastIndexOf("/");T!=-1&&(f=c.h.slice(0,T+1)+f)}if(T=f,T==".."||T==".")f="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){f=T.lastIndexOf("/",0)==0,T=T.split("/");const S=[];for(let k=0;k<T.length;){const $=T[k++];$=="."?f&&k==T.length&&S.push(""):$==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),f&&k==T.length&&S.push("")):(S.push($),f=!0)}f=S.join("/")}else f=T}return h?c.h=f:h=i.i.toString()!=="",h?Js(c,wo(i.i)):h=!!i.m,h&&(c.m=i.m),c};function Pe(i){return new rt(i)}function Nn(i,c,h){i.j=h?Rn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Dn(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function Js(i,c,h){c instanceof On?(i.i=c,gd(i.i,i.l)):(h||(c=Ln(c,pd)),i.i=new On(c,i.l))}function X(i,c,h){i.i.set(c,h)}function Ir(i){return X(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Rn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ln(i,c,h){return typeof i=="string"?(i=encodeURI(i).replace(c,hd),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function hd(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var po=/[#\/\?@]/g,dd=/[#\?:]/g,fd=/[#\?]/g,pd=/[#\?@]/g,md=/#/g;function On(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Nt(i){i.g||(i.g=new Map,i.h=0,i.i&&ud(i.i,function(c,h){i.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=On.prototype,r.add=function(i,c){Nt(this),this.i=null,i=Ht(this,i);let h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(c),this.h+=1,this};function mo(i,c){Nt(i),c=Ht(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function go(i,c){return Nt(i),c=Ht(i,c),i.g.has(c)}r.forEach=function(i,c){Nt(this),this.g.forEach(function(h,f){h.forEach(function(T){i.call(c,T,f,this)},this)},this)};function yo(i,c){Nt(i);let h=[];if(typeof c=="string")go(i,c)&&(h=h.concat(i.g.get(Ht(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)h=h.concat(i[c]);return h}r.set=function(i,c){return Nt(this),this.i=null,i=Ht(this,i),go(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},r.get=function(i,c){return i?(i=yo(this,i),i.length>0?String(i[0]):c):c};function vo(i,c,h){mo(i,c),h.length>0&&(i.i=null,i.g.set(Ht(i,c),A(h)),i.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const T=An(h);h=yo(this,h);for(let S=0;S<h.length;S++){let k=T;h[S]!==""&&(k+="="+An(h[S])),i.push(k)}}return this.i=i.join("&")};function wo(i){const c=new On;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function Ht(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function gd(i,c){c&&!i.j&&(Nt(i),i.i=null,i.g.forEach(function(h,f){const T=f.toLowerCase();f!=T&&(mo(this,f),vo(this,T,h))},i)),i.j=c}function yd(i,c){const h=new Cn;if(o.Image){const f=new Image;f.onload=p(st,h,"TestLoadImage: loaded",!0,c,f),f.onerror=p(st,h,"TestLoadImage: error",!1,c,f),f.onabort=p(st,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(st,h,"TestLoadImage: timeout",!1,c,f),o.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function vd(i,c){const h=new Cn,f=new AbortController,T=setTimeout(()=>{f.abort(),st(h,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(T),S.ok?st(h,"TestPingServer: ok",!0,c):st(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),st(h,"TestPingServer: error",!1,c)})}function st(i,c,h,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(h)}catch{}}function wd(){this.g=new td}function Xs(i){this.i=i.Sb||null,this.h=i.ab||!1}m(Xs,Qa),Xs.prototype.g=function(){return new xr(this.i,this.h)};function xr(i,c){ve.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(xr,ve),r=xr.prototype,r.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Mn(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=0},r.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;bo(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function bo(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}r.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Pn(this):Mn(this),this.readyState==3&&bo(this)}},r.Oa=function(i){this.g&&(this.response=this.responseText=i,Pn(this))},r.Na=function(i){this.g&&(this.response=i,Pn(this))},r.ga=function(){this.g&&Pn(this)};function Pn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Mn(i)}r.setRequestHeader=function(i,c){this.A.append(i,c)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=c.next();return i.join(`\r
`)};function Mn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Eo(i){let c="";return yr(i,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Ys(i,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Eo(h),typeof i=="string"?h!=null&&An(h):X(i,c,h))}function re(i){ve.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(re,ve);var bd=/^https?$/i,Ed=["POST","PUT"];r=re.prototype,r.Fa=function(i){this.H=i},r.ea=function(i,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():to.g(),this.g.onreadystatechange=x(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(S){To(this,S);return}if(i=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)h.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())h.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),T=o.FormData&&i instanceof o.FormData,!(Array.prototype.indexOf.call(Ed,c,void 0)>=0)||f||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of h)this.g.setRequestHeader(S,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(S){To(this,S)}};function To(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Io(i),Sr(i)}function Io(i){i.A||(i.A=!0,Ie(i,"complete"),Ie(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Ie(this,"complete"),Ie(this,"abort"),Sr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sr(this,!0)),re.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?xo(this):this.Xa())},r.Xa=function(){xo(this)};function xo(i){if(i.h&&typeof a<"u"){if(i.v&&it(i)==4)setTimeout(i.Ca.bind(i),0);else if(Ie(i,"readystatechange"),it(i)==4){i.h=!1;try{const S=i.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=S===0){let k=String(i.D).match(fo)[1]||null;!k&&o.self&&o.self.location&&(k=o.self.location.protocol.slice(0,-1)),f=!bd.test(k?k.toLowerCase():"")}h=f}if(h)Ie(i,"complete"),Ie(i,"success");else{i.o=6;try{var T=it(i)>2?i.g.statusText:""}catch{T=""}i.l=T+" ["+i.ca()+"]",Io(i)}}finally{Sr(i)}}}}function Sr(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const h=i.g;i.g=null,c||Ie(i,"ready");try{h.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function it(i){return i.g?i.g.readyState:0}r.ca=function(){try{return it(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),ed(c)}};function So(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Td(i){const c={};i=(i.g&&it(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(y(i[f]))continue;var h=ad(i[f]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=c[T]||[];c[T]=S,S.push(h)}Qh(c,function(f){return f.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(i,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||c}function _o(i){this.za=0,this.i=[],this.j=new Cn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Un("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Un("baseRetryDelayMs",5e3,i),this.Za=Un("retryDelaySeedMs",1e4,i),this.Ta=Un("forwardChannelMaxRetries",2,i),this.va=Un("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new oo(i&&i.concurrentRequestLimit),this.Ba=new wd,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=_o.prototype,r.ka=8,r.I=1,r.connect=function(i,c,h,f){xe(0),this.W=i,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=Po(this,null,this.W),Cr(this)};function Zs(i){if(Co(i),i.I==3){var c=i.V++,h=Pe(i.J);if(X(h,"SID",i.M),X(h,"RID",c),X(h,"TYPE","terminate"),Vn(i,h),c=new nt(i,i.j,c),c.M=2,c.A=Ir(Pe(h)),h=!1,o.navigator&&o.navigator.sendBeacon)try{h=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&o.Image&&(new Image().src=c.A,h=!0),h||(c.g=Mo(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Tr(c)}Oo(i)}function _r(i){i.g&&(ti(i),i.g.cancel(),i.g=null)}function Co(i){_r(i),i.v&&(o.clearTimeout(i.v),i.v=null),Ar(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&o.clearTimeout(i.m),i.m=null)}function Cr(i){if(!co(i.h)&&!i.m){i.m=!0;var c=i.Ea;ue||g(),ee||(ue(),ee=!0),b.add(c,i),i.D=0}}function Id(i,c){return lo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=_n(d(i.Ea,i,c),Lo(i,i.D)),i.D++,!0)}r.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const T=new nt(this,this.j,i);let S=this.o;if(this.U&&(S?(S=Va(S),Ba(S,this.U)):S=this.U),this.u!==null||this.R||(T.J=S,S=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=ko(this,T,c),h=Pe(this.J),X(h,"RID",i),X(h,"CVER",22),this.G&&X(h,"X-HTTP-Session-Id",this.G),Vn(this,h),S&&(this.R?c="headers="+An(Eo(S))+"&"+c:this.u&&Ys(h,this.u,S)),Ws(this.h,T),this.Ra&&X(h,"TYPE","init"),this.S?(X(h,"$req",c),X(h,"SID","null"),T.U=!0,Hs(T,h,null)):Hs(T,h,c),this.I=2}}else this.I==3&&(i?Ao(this,i):this.i.length==0||co(this.h)||Ao(this))};function Ao(i,c){var h;c?h=c.l:h=i.V++;const f=Pe(i.J);X(f,"SID",i.M),X(f,"RID",h),X(f,"AID",i.K),Vn(i,f),i.u&&i.o&&Ys(f,i.u,i.o),h=new nt(i,i.j,h,i.D+1),i.u===null&&(h.J=i.o),c&&(i.i=c.G.concat(i.i)),c=ko(i,h,1e3),h.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Ws(i.h,h),Hs(h,f,c)}function Vn(i,c){i.H&&yr(i.H,function(h,f){X(c,f,h)}),i.l&&yr({},function(h,f){X(c,f,h)})}function ko(i,c,h){h=Math.min(i.i.length,h);const f=i.l?d(i.l.Ka,i.l,i):null;e:{var T=i.i;let $=-1;for(;;){const he=["count="+h];$==-1?h>0?($=T[0].g,he.push("ofs="+$)):$=0:he.push("ofs="+$);let Y=!0;for(let fe=0;fe<h;fe++){var S=T[fe].g;const Me=T[fe].map;if(S-=$,S<0)$=Math.max(0,T[fe].g-100),Y=!1;else try{S="req"+S+"_"||"";try{var k=Me instanceof Map?Me:Object.entries(Me);for(const[Kt,at]of k){let ot=at;l(at)&&(ot=Bs(at)),he.push(S+Kt+"="+encodeURIComponent(ot))}}catch(Kt){throw he.push(S+"type="+encodeURIComponent("_badmap")),Kt}}catch{f&&f(Me)}}if(Y){k=he.join("&");break e}}k=void 0}return i=i.i.splice(0,h),c.G=i,k}function No(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;ue||g(),ee||(ue(),ee=!0),b.add(c,i),i.A=0}}function ei(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=_n(d(i.Da,i),Lo(i,i.A)),i.A++,!0)}r.Da=function(){if(this.v=null,Do(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=_n(d(this.Wa,this),i)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,xe(10),_r(this),Do(this))};function ti(i){i.B!=null&&(o.clearTimeout(i.B),i.B=null)}function Do(i){i.g=new nt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Pe(i.na);X(c,"RID","rpc"),X(c,"SID",i.M),X(c,"AID",i.K),X(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&X(c,"TO",i.ia),X(c,"TYPE","xmlhttp"),Vn(i,c),i.u&&i.o&&Ys(c,i.u,i.o),i.O&&(i.g.H=i.O);var h=i.g;i=i.ba,h.M=1,h.A=Ir(Pe(c)),h.u=null,h.R=!0,so(h,i)}r.Va=function(){this.C!=null&&(this.C=null,_r(this),ei(this),xe(19))};function Ar(i){i.C!=null&&(o.clearTimeout(i.C),i.C=null)}function Ro(i,c){var h=null;if(i.g==c){Ar(i),ti(i),i.g=null;var f=2}else if(Qs(i.h,c))h=c.G,uo(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var T=i.D;f=br(),Ie(f,new Za(f,h)),Cr(i)}else No(i);else if(T=c.m,T==3||T==0&&c.X>0||!(f==1&&Id(i,c)||f==2&&ei(i)))switch(h&&h.length>0&&(c=i.h,c.i=c.i.concat(h)),T){case 1:Dt(i,5);break;case 4:Dt(i,10);break;case 3:Dt(i,6);break;default:Dt(i,2)}}}function Lo(i,c){let h=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(h*=2),h*c}function Dt(i,c){if(i.j.info("Error code "+c),c==2){var h=d(i.bb,i),f=i.Ua;const T=!f;f=new rt(f||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Nn(f,"https"),Ir(f),T?yd(f.toString(),h):vd(f.toString(),h)}else xe(2);i.I=0,i.l&&i.l.pa(c),Oo(i),Co(i)}r.bb=function(i){i?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function Oo(i){if(i.I=0,i.ja=[],i.l){const c=ho(i.h);(c.length!=0||i.i.length!=0)&&(N(i.ja,c),N(i.ja,i.i),i.h.i.length=0,A(i.i),i.i.length=0),i.l.oa()}}function Po(i,c,h){var f=h instanceof rt?Pe(h):new rt(h);if(f.g!="")c&&(f.g=c+"."+f.g),Dn(f,f.u);else{var T=o.location;f=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;const S=new rt(null);f&&Nn(S,f),c&&(S.g=c),T&&Dn(S,T),h&&(S.h=h),f=S}return h=i.G,c=i.wa,h&&c&&X(f,h,c),X(f,"VER",i.ka),Vn(i,f),f}function Mo(i,c,h){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new re(new Xs({ab:h})):new re(i.ma),c.Fa(i.L),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uo(){}r=Uo.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function kr(){}kr.prototype.g=function(i,c){return new ke(i,c)};function ke(i,c){ve.call(this),this.g=new _o(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!y(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Gt(this)}m(ke,ve),ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ke.prototype.close=function(){Zs(this.g)},ke.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.v&&(h={},h.__data__=Bs(i),i=h);c.i.push(new ld(c.Ya++,i)),c.I==3&&Cr(c)},ke.prototype.N=function(){this.g.l=null,delete this.j,Zs(this.g),delete this.g,ke.Z.N.call(this)};function Vo(i){$s.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const h in c){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}m(Vo,$s);function Fo(){js.call(this),this.status=1}m(Fo,js);function Gt(i){this.g=i}m(Gt,Uo),Gt.prototype.ra=function(){Ie(this.g,"a")},Gt.prototype.qa=function(i){Ie(this.g,new Vo(i))},Gt.prototype.pa=function(i){Ie(this.g,new Fo)},Gt.prototype.oa=function(){Ie(this.g,"b")},kr.prototype.createWebChannel=kr.prototype.g,ke.prototype.send=ke.prototype.o,ke.prototype.open=ke.prototype.m,ke.prototype.close=ke.prototype.close,Bl=function(){return new kr},Fl=function(){return br()},Vl=At,Ii={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Er.NO_ERROR=0,Er.TIMEOUT=8,Er.HTTP_ERROR=6,Ur=Er,eo.COMPLETE="complete",Ul=eo,Wa.EventType=xn,xn.OPEN="a",xn.CLOSE="b",xn.ERROR="c",xn.MESSAGE="d",ve.prototype.listen=ve.prototype.J,Fn=Wa,re.prototype.listenOnce=re.prototype.K,re.prototype.getLastError=re.prototype.Ha,re.prototype.getLastErrorCode=re.prototype.ya,re.prototype.getStatus=re.prototype.ca,re.prototype.getResponseJson=re.prototype.La,re.prototype.getResponseText=re.prototype.la,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Fa,Ml=re}).apply(typeof Dr<"u"?Dr:typeof self<"u"?self:typeof window<"u"?window:{});const ec="@firebase/firestore",tc="4.9.2";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let gn="12.3.0";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Vt=new zi("@firebase/firestore");function Qt(){return Vt.logLevel}function O(r,...e){if(Vt.logLevel<=j.DEBUG){const t=e.map(Ki);Vt.debug(`Firestore (${gn}): ${r}`,...t)}}function Je(r,...e){if(Vt.logLevel<=j.ERROR){const t=e.map(Ki);Vt.error(`Firestore (${gn}): ${r}`,...t)}}function on(r,...e){if(Vt.logLevel<=j.WARN){const t=e.map(Ki);Vt.warn(`Firestore (${gn}): ${r}`,...t)}}function Ki(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function M(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,$l(r,n,t)}function $l(r,e,t){let n=`FIRESTORE (${gn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Je(n),new Error(n)}function Q(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||$l(e,s,n)}function F(r,e){return r}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends tt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Qe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class jl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(be.UNAUTHENTICATED))}shutdown(){}}class bp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ep{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0,42304);let n=this.i;const s=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let a=new Qe;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Qe,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=a;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Qe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Q(typeof n.accessToken=="string",31837,{l:n}),new jl(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{h:e}),new be(e)}}class Tp{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=be.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ip{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Tp(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xp{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ve(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Q(this.o===void 0,3512);const n=a=>{a.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const o=a.token!==this.m;return this.m=a.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>n(a))};const s=a=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new nc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new nc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Sp(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Qi{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Sp(40);for(let a=0;a<s.length;++a)n.length<20&&s[a]<t&&(n+=e.charAt(s[a]%62))}return n}}function q(r,e){return r<e?-1:r>e?1:0}function xi(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),a=e.charAt(n);if(s!==a)return ui(s)===ui(a)?q(s,a):ui(s)?1:-1}return q(r.length,e.length)}const _p=55296,Cp=57343;function ui(r){const e=r.charCodeAt(0);return e>=_p&&e<=Cp}function cn(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const rc="__name__";class Ue{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&M(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ue.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ue?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const a=Ue.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return q(e.length,t.length)}static compareSegments(e,t){const n=Ue.isNumericId(e),s=Ue.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Ue.extractNumericId(e).compare(Ue.extractNumericId(t)):xi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yt.fromString(e.substring(4,e.length-2))}}class W extends Ue{construct(e,t,n){return new W(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new D(_.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new W(t)}static emptyPath(){return new W([])}}const Ap=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends Ue{construct(e,t,n){return new ge(e,t,n)}static isValidIdentifier(e){return Ap.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rc}static keyField(){return new ge([rc])}static fromServerFormat(e){const t=[];let n="",s=0;const a=()=>{if(n.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new D(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new D(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(n+=l,s++):(a(),s++)}if(a(),o)throw new D(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class P{constructor(e){this.path=e}static fromPath(e){return new P(W.fromString(e))}static fromName(e){return new P(W.fromString(e).popFirst(5))}static empty(){return new P(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&W.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return W.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new W(e.slice()))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ql(r,e,t){if(!t)throw new D(_.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function kp(r,e,t,n){if(e===!0&&n===!0)throw new D(_.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function sc(r){if(!P.isDocumentKey(r))throw new D(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ic(r){if(P.isDocumentKey(r))throw new D(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function zl(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function ps(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function Xe(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new D(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ps(r);throw new D(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
* @license
* Copyright 2025 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ce(r,e){const t={typeString:r};return e&&(t.value=e),t}function or(r,e){if(!zl(r))throw new D(_.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,a="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(a!==void 0&&o!==a.value){t=`Expected '${n}' field to equal '${a.value}'`;break}}if(t)throw new D(_.INVALID_ARGUMENT,t);return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ac=-62135596800,oc=1e6;class Z{static now(){return Z.fromMillis(Date.now())}static fromDate(e){return Z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*oc);return new Z(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ac)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/oc}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Z._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(or(e,Z._jsonSchema))return new Z(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ac;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Z._jsonSchemaVersion="firestore/timestamp/1.0",Z._jsonSchema={type:ce("string",Z._jsonSchemaVersion),seconds:ce("number"),nanoseconds:ce("number")};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class V{static fromTimestamp(e){return new V(e)}static min(){return new V(new Z(0,0))}static max(){return new V(new Z(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Xn=-1;function Np(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=V.fromTimestamp(n===1e9?new Z(t+1,0):new Z(t,n));return new wt(s,P.empty(),e)}function Dp(r){return new wt(r.readTime,r.key,Xn)}class wt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new wt(V.min(),P.empty(),Xn)}static max(){return new wt(V.max(),P.empty(),Xn)}}function Rp(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=P.comparator(r.documentKey,e.documentKey),t!==0?t:q(r.largestBatchId,e.largestBatchId))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Lp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Op{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function yn(r){if(r.code!==_.FAILED_PRECONDITION||r.message!==Lp)throw r;O("LocalStore","Unexpectedly lost primary lease")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((n,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(n,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,n)=>{t(e)})}static reject(e){return new C((t,n)=>{n(e)})}static waitFor(e){return new C((t,n)=>{let s=0,a=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++a,o&&a===s&&t()},u=>n(u))}),o=!0,a===s&&t()})}static or(e){let t=C.resolve(!1);for(const n of e)t=t.next(s=>s?C.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,a)=>{n.push(t.call(this,s,a))}),this.waitFor(n)}static mapArray(e,t){return new C((n,s)=>{const a=e.length,o=new Array(a);let l=0;for(let u=0;u<a;u++){const d=u;t(e[d]).next(p=>{o[d]=p,++l,l===a&&n(o)},p=>s(p))}})}static doWhile(e,t){return new C((n,s)=>{const a=()=>{e()===!0?t().next(()=>{a()},s):n()};a()})}}function Pp(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function vn(r){return r.name==="IndexedDbTransactionError"}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ms{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ms.ce=-1;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Wi=-1;function gs(r){return r==null}function Jr(r){return r===0&&1/r==-1/0}function Mp(r){return typeof r=="number"&&Number.isInteger(r)&&!Jr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Hl="";function Up(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=cc(e)),e=Vp(r.get(t),e);return cc(e)}function Vp(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const a=r.charAt(s);switch(a){case"\0":t+="";break;case Hl:t+="";break;default:t+=a}}return t}function cc(r){return r+Hl+""}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function lc(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function St(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Gl(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class te{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rr(this.root,e,this.comparator,!0)}}class Rr{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?n(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,n,s,a){this.key=e,this.value=t,this.color=n??me.RED,this.left=s??me.EMPTY,this.right=a??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,a){return new me(e??this.key,t??this.value,n??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const a=n(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,n),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return me.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(r,e,t,n,s){return this}insert(r,e,t){return new me(r,e)}remove(r,e){return this}isEmpty(){return!0}inorderTraversal(r){return!1}reverseTraversal(r){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class de{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uc(this.data.getIterator())}getIteratorFrom(e){return new uc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=n.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class uc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ne{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new Ne([])}unionWith(e){let t=new de(ge.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ne(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return cn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Kl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(n){try{return atob(n)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Kl("Invalid base64 string: "+s):s}}(e);return new ye(t)}static fromUint8Array(e){const t=function(n){let s="";for(let a=0;a<n.length;++a)s+=String.fromCharCode(n[a]);return s}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const Fp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(r){if(Q(!!r,39018),typeof r=="string"){let e=0;const t=Fp.exec(r);if(Q(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ie(r.seconds),nanos:ie(r.nanos)}}function ie(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Et(r){return typeof r=="string"?ye.fromBase64String(r):ye.fromUint8Array(r)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ql="server_timestamp",Wl="__type__",Jl="__previous_value__",Xl="__local_write_time__";function Ji(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Wl])==null?void 0:t.stringValue)===Ql}function ys(r){const e=r.mapValue.fields[Jl];return Ji(e)?ys(e):e}function Yn(r){const e=bt(r.mapValue.fields[Xl].timestampValue);return new Z(e.seconds,e.nanos)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Bp{constructor(e,t,n,s,a,o,l,u,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=a,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=p}}const Xr="(default)";class Zn{constructor(e,t){this.projectId=e,this.database=t||Xr}static empty(){return new Zn("","")}get isDefaultDatabase(){return this.database===Xr}isEqual(e){return e instanceof Zn&&e.projectId===this.projectId&&e.database===this.database}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Yl="__type__",$p="__max__",Lr={mapValue:{}},Zl="__vector__",Yr="value";function Tt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ji(r)?4:qp(r)?9007199254740991:jp(r)?10:11:M(28295,{value:r})}function He(r,e){if(r===e)return!0;const t=Tt(r);if(t!==Tt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Yn(r).isEqual(Yn(e));case 3:return function(n,s){if(typeof n.timestampValue=="string"&&typeof s.timestampValue=="string"&&n.timestampValue.length===s.timestampValue.length)return n.timestampValue===s.timestampValue;const a=bt(n.timestampValue),o=bt(s.timestampValue);return a.seconds===o.seconds&&a.nanos===o.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(n,s){return Et(n.bytesValue).isEqual(Et(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(n,s){return ie(n.geoPointValue.latitude)===ie(s.geoPointValue.latitude)&&ie(n.geoPointValue.longitude)===ie(s.geoPointValue.longitude)}(r,e);case 2:return function(n,s){if("integerValue"in n&&"integerValue"in s)return ie(n.integerValue)===ie(s.integerValue);if("doubleValue"in n&&"doubleValue"in s){const a=ie(n.doubleValue),o=ie(s.doubleValue);return a===o?Jr(a)===Jr(o):isNaN(a)&&isNaN(o)}return!1}(r,e);case 9:return cn(r.arrayValue.values||[],e.arrayValue.values||[],He);case 10:case 11:return function(n,s){const a=n.mapValue.fields||{},o=s.mapValue.fields||{};if(lc(a)!==lc(o))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(o[l]===void 0||!He(a[l],o[l])))return!1;return!0}(r,e);default:return M(52216,{left:r})}}function er(r,e){return(r.values||[]).find(t=>He(t,e))!==void 0}function ln(r,e){if(r===e)return 0;const t=Tt(r),n=Tt(e);if(t!==n)return q(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,e.booleanValue);case 2:return function(s,a){const o=ie(s.integerValue||s.doubleValue),l=ie(a.integerValue||a.doubleValue);return o<l?-1:o>l?1:o===l?0:isNaN(o)?isNaN(l)?0:-1:1}(r,e);case 3:return hc(r.timestampValue,e.timestampValue);case 4:return hc(Yn(r),Yn(e));case 5:return xi(r.stringValue,e.stringValue);case 6:return function(s,a){const o=Et(s),l=Et(a);return o.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(s,a){const o=s.split("/"),l=a.split("/");for(let u=0;u<o.length&&u<l.length;u++){const d=q(o[u],l[u]);if(d!==0)return d}return q(o.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,a){const o=q(ie(s.latitude),ie(a.latitude));return o!==0?o:q(ie(s.longitude),ie(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return dc(r.arrayValue,e.arrayValue);case 10:return function(s,a){var o,l,u,d;const p=s.fields||{},m=a.fields||{},x=(o=p[Yr])==null?void 0:o.arrayValue,A=(l=m[Yr])==null?void 0:l.arrayValue,N=q(((u=x==null?void 0:x.values)==null?void 0:u.length)||0,((d=A==null?void 0:A.values)==null?void 0:d.length)||0);return N!==0?N:dc(x,A)}(r.mapValue,e.mapValue);case 11:return function(s,a){if(s===Lr.mapValue&&a===Lr.mapValue)return 0;if(s===Lr.mapValue)return 1;if(a===Lr.mapValue)return-1;const o=s.fields||{},l=Object.keys(o),u=a.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=xi(l[p],d[p]);if(m!==0)return m;const x=ln(o[l[p]],u[d[p]]);if(x!==0)return x}return q(l.length,d.length)}(r.mapValue,e.mapValue);default:throw M(23264,{he:t})}}function hc(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return q(r,e);const t=bt(r),n=bt(e),s=q(t.seconds,n.seconds);return s!==0?s:q(t.nanos,n.nanos)}function dc(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const a=ln(t[s],n[s]);if(a)return a}return q(t.length,n.length)}function un(r){return Si(r)}function Si(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const t=bt(e);return`time(${t.seconds},${t.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Et(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return P.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let t="[",n=!0;for(const s of e.values||[])n?n=!1:t+=",",t+=Si(s);return t+"]"}(r.arrayValue):"mapValue"in r?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",s=!0;for(const a of t)s?s=!1:n+=",",n+=`${a}:${Si(e.fields[a])}`;return n+"}"}(r.mapValue):M(61005,{value:r})}function Vr(r){switch(Tt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ys(r);return e?16+Vr(e):16;case 5:return 2*r.stringValue.length;case 6:return Et(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce((n,s)=>n+Vr(s),0)}(r.arrayValue);case 10:case 11:return function(t){let n=0;return St(t.fields,(s,a)=>{n+=s.length+Vr(a)}),n}(r.mapValue);default:throw M(13486,{value:r})}}function fc(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function _i(r){return!!r&&"integerValue"in r}function Xi(r){return!!r&&"arrayValue"in r}function pc(r){return!!r&&"nullValue"in r}function mc(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Fr(r){return!!r&&"mapValue"in r}function jp(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Yl])==null?void 0:t.stringValue)===Zl}function Hn(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return St(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Hn(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Hn(r.arrayValue.values[t]);return e}return{...r}}function qp(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===$p}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ae{constructor(e){this.value=e}static empty(){return new Ae({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Fr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hn(t)}setAll(e){let t=ge.emptyPath(),n={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=l.popLast()}o?n[l.lastSegment()]=Hn(o):s.push(l.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,n,s)}delete(e){const t=this.field(e.popLast());Fr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return He(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Fr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){St(t,(s,a)=>e[s]=a);for(const s of n)delete e[s]}clone(){return new Ae(Hn(this.value))}}function eu(r){const e=[];return St(r.fields,(t,n)=>{const s=new ge([t]);if(Fr(n)){const a=eu(n.mapValue).fields;if(a.length===0)e.push(s);else for(const o of a)e.push(s.child(o))}else e.push(s)}),new Ne(e)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ee{constructor(e,t,n,s,a,o,l){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=a,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ee(e,0,V.min(),V.min(),V.min(),Ae.empty(),0)}static newFoundDocument(e,t,n,s){return new Ee(e,1,t,V.min(),n,s,0)}static newNoDocument(e,t){return new Ee(e,2,t,V.min(),V.min(),Ae.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,V.min(),V.min(),Ae.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zr{constructor(e,t){this.position=e,this.inclusive=t}}function gc(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const a=e[s],o=r.position[s];if(a.field.isKeyField()?n=P.comparator(P.fromName(o.referenceValue),t.key):n=ln(o,t.data.field(a.field)),a.dir==="desc"&&(n*=-1),n!==0)break}return n}function yc(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!He(r.position[t],e.position[t]))return!1;return!0}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tr{constructor(e,t="asc"){this.field=e,this.dir=t}}function zp(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tu{}class oe extends tu{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Gp(e,t,n):t==="array-contains"?new Wp(e,n):t==="in"?new Jp(e,n):t==="not-in"?new Xp(e,n):t==="array-contains-any"?new Yp(e,n):new oe(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Kp(e,n):new Qp(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ln(t,this.value)):t!==null&&Tt(this.value)===Tt(t)&&this.matchesComparison(ln(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Oe extends tu{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Oe(e,t)}matches(e){return nu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function nu(r){return r.op==="and"}function ru(r){return Hp(r)&&nu(r)}function Hp(r){for(const e of r.filters)if(e instanceof Oe)return!1;return!0}function Ci(r){if(r instanceof oe)return r.field.canonicalString()+r.op.toString()+un(r.value);if(ru(r))return r.filters.map(e=>Ci(e)).join(",");{const e=r.filters.map(t=>Ci(t)).join(",");return`${r.op}(${e})`}}function su(r,e){return r instanceof oe?function(t,n){return n instanceof oe&&t.op===n.op&&t.field.isEqual(n.field)&&He(t.value,n.value)}(r,e):r instanceof Oe?function(t,n){return n instanceof Oe&&t.op===n.op&&t.filters.length===n.filters.length?t.filters.reduce((s,a,o)=>s&&su(a,n.filters[o]),!0):!1}(r,e):void M(19439)}function iu(r){return r instanceof oe?function(e){return`${e.field.canonicalString()} ${e.op} ${un(e.value)}`}(r):r instanceof Oe?function(e){return e.op.toString()+" {"+e.getFilters().map(iu).join(" ,")+"}"}(r):"Filter"}class Gp extends oe{constructor(e,t,n){super(e,t,n),this.key=P.fromName(n.referenceValue)}matches(e){const t=P.comparator(e.key,this.key);return this.matchesComparison(t)}}class Kp extends oe{constructor(e,t){super(e,"in",t),this.keys=au("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Qp extends oe{constructor(e,t){super(e,"not-in",t),this.keys=au("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function au(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>P.fromName(n.referenceValue))}class Wp extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xi(t)&&er(t.arrayValue,this.value)}}class Jp extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&er(this.value.arrayValue,t)}}class Xp extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!er(this.value.arrayValue,t)}}class Yp extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>er(this.value.arrayValue,n))}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zp{constructor(e,t=null,n=[],s=[],a=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=a,this.startAt=o,this.endAt=l,this.Te=null}}function vc(r,e=null,t=[],n=[],s=null,a=null,o=null){return new Zp(r,e,t,n,s,a,o)}function Yi(r){const e=F(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Ci(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),gs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>un(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>un(n)).join(",")),e.Te=t}return e.Te}function Zi(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!zp(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!su(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!yc(r.startAt,e.startAt)&&yc(r.endAt,e.endAt)}function Ai(r){return P.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wn{constructor(e,t=null,n=[],s=[],a=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=a,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function em(r,e,t,n,s,a,o,l){return new wn(r,e,t,n,s,a,o,l)}function ea(r){return new wn(r)}function wc(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ou(r){return r.collectionGroup!==null}function Gn(r){const e=F(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new de(ge.comparator);return s.filters.forEach(o=>{o.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new tr(s,n))}),t.has(ge.keyField().canonicalString())||e.Ie.push(new tr(ge.keyField(),n))}return e.Ie}function Fe(r){const e=F(r);return e.Ee||(e.Ee=tm(e,Gn(r))),e.Ee}function tm(r,e){if(r.limitType==="F")return vc(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new tr(s.field,a)});const t=r.endAt?new Zr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Zr(r.startAt.position,r.startAt.inclusive):null;return vc(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function ki(r,e){const t=r.filters.concat([e]);return new wn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Ni(r,e,t){return new wn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function vs(r,e){return Zi(Fe(r),Fe(e))&&r.limitType===e.limitType}function cu(r){return`${Yi(Fe(r))}|lt:${r.limitType}`}function Wt(r){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>iu(n)).join(", ")}]`),gs(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>un(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>un(n)).join(",")),`Target(${t})`}(Fe(r))}; limitType=${r.limitType})`}function ws(r,e){return e.isFoundDocument()&&function(t,n){const s=n.key.path;return t.collectionGroup!==null?n.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):P.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(r,e)&&function(t,n){for(const s of Gn(t))if(!s.field.isKeyField()&&n.data.field(s.field)===null)return!1;return!0}(r,e)&&function(t,n){for(const s of t.filters)if(!s.matches(n))return!1;return!0}(r,e)&&function(t,n){return!(t.startAt&&!function(s,a,o){const l=gc(s,a,o);return s.inclusive?l<=0:l<0}(t.startAt,Gn(t),n)||t.endAt&&!function(s,a,o){const l=gc(s,a,o);return s.inclusive?l>=0:l>0}(t.endAt,Gn(t),n))}(r,e)}function nm(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function lu(r){return(e,t)=>{let n=!1;for(const s of Gn(r)){const a=rm(s,e,t);if(a!==0)return a;n=n||s.field.isKeyField()}return 0}}function rm(r,e,t){const n=r.field.isKeyField()?P.comparator(e.key,t.key):function(s,a,o){const l=a.data.field(s),u=o.data.field(s);return l!==null&&u!==null?ln(l,u):M(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,a]of n)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){St(this.inner,(t,n)=>{for(const[s,a]of n)e(s,a)})}isEmpty(){return Gl(this.inner)}size(){return this.innerSize}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const sm=new te(P.comparator);function Ye(){return sm}const uu=new te(P.comparator);function Bn(...r){let e=uu;for(const t of r)e=e.insert(t.key,t);return e}function hu(r){let e=uu;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Lt(){return Kn()}function du(){return Kn()}function Kn(){return new $t(r=>r.toString(),(r,e)=>r.isEqual(e))}const im=new te(P.comparator),am=new de(P.comparator);function z(...r){let e=am;for(const t of r)e=e.add(t);return e}const om=new de(q);function cm(){return om}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ta(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jr(e)?"-0":e}}function fu(r){return{integerValue:""+r}}function lm(r,e){return Mp(e)?fu(e):ta(r,e)}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bs{constructor(){this._=void 0}}function um(r,e,t){return r instanceof es?function(n,s){const a={fields:{[Wl]:{stringValue:Ql},[Xl]:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return s&&Ji(s)&&(s=ys(s)),s&&(a.fields[Jl]=s),{mapValue:a}}(t,e):r instanceof nr?mu(r,e):r instanceof rr?gu(r,e):function(n,s){const a=pu(n,s),o=bc(a)+bc(n.Ae);return _i(a)&&_i(n.Ae)?fu(o):ta(n.serializer,o)}(r,e)}function hm(r,e,t){return r instanceof nr?mu(r,e):r instanceof rr?gu(r,e):t}function pu(r,e){return r instanceof ts?function(t){return _i(t)||function(n){return!!n&&"doubleValue"in n}(t)}(e)?e:{integerValue:0}:null}class es extends bs{}class nr extends bs{constructor(e){super(),this.elements=e}}function mu(r,e){const t=yu(e);for(const n of r.elements)t.some(s=>He(s,n))||t.push(n);return{arrayValue:{values:t}}}class rr extends bs{constructor(e){super(),this.elements=e}}function gu(r,e){let t=yu(e);for(const n of r.elements)t=t.filter(s=>!He(s,n));return{arrayValue:{values:t}}}class ts extends bs{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function bc(r){return ie(r.integerValue||r.doubleValue)}function yu(r){return Xi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function dm(r,e){return r.field.isEqual(e.field)&&function(t,n){return t instanceof nr&&n instanceof nr||t instanceof rr&&n instanceof rr?cn(t.elements,n.elements,He):t instanceof ts&&n instanceof ts?He(t.Ae,n.Ae):t instanceof es&&n instanceof es}(r.transform,e.transform)}class fm{constructor(e,t){this.version=e,this.transformResults=t}}class Le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Br(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Es{}function vu(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new na(r.key,Le.none()):new cr(r.key,r.data,Le.none());{const t=r.data,n=Ae.empty();let s=new de(ge.comparator);for(let a of e.fields)if(!s.has(a)){let o=t.field(a);o===null&&a.length>1&&(a=a.popLast(),o=t.field(a)),o===null?n.delete(a):n.set(a,o),s=s.add(a)}return new _t(r.key,n,new Ne(s.toArray()),Le.none())}}function pm(r,e,t){r instanceof cr?function(n,s,a){const o=n.value.clone(),l=Tc(n.fieldTransforms,s,a.transformResults);o.setAll(l),s.convertToFoundDocument(a.version,o).setHasCommittedMutations()}(r,e,t):r instanceof _t?function(n,s,a){if(!Br(n.precondition,s))return void s.convertToUnknownDocument(a.version);const o=Tc(n.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(wu(n)),l.setAll(o),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,e,t):function(n,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Qn(r,e,t,n){return r instanceof cr?function(s,a,o,l){if(!Br(s.precondition,a))return o;const u=s.value.clone(),d=Ic(s.fieldTransforms,l,a);return u.setAll(d),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(r,e,t,n):r instanceof _t?function(s,a,o,l){if(!Br(s.precondition,a))return o;const u=Ic(s.fieldTransforms,l,a),d=a.data;return d.setAll(wu(s)),d.setAll(u),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(s,a,o){return Br(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):o}(r,e,t)}function mm(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),a=pu(n.transform,s||null);a!=null&&(t===null&&(t=Ae.empty()),t.set(n.field,a))}return t||null}function Ec(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(t,n){return t===void 0&&n===void 0||!(!t||!n)&&cn(t,n,(s,a)=>dm(s,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class cr extends Es{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _t extends Es{constructor(e,t,n,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function wu(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Tc(r,e,t){const n=new Map;Q(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let s=0;s<t.length;s++){const a=r[s],o=a.transform,l=e.data.field(a.field);n.set(a.field,hm(o,l,t[s]))}return n}function Ic(r,e,t){const n=new Map;for(const s of r){const a=s.transform,o=t.data.field(s.field);n.set(s.field,um(a,o,e))}return n}class na extends Es{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gm extends Es{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ym{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&pm(a,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Qn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Qn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=du();return this.mutations.forEach(s=>{const a=e.get(s.key),o=a.overlayedDocument;let l=this.applyToLocalView(o,a.mutatedFields);l=t.has(s.key)?null:l;const u=vu(o,l);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(V.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&cn(this.mutations,e.mutations,(t,n)=>Ec(t,n))&&cn(this.baseMutations,e.baseMutations,(t,n)=>Ec(t,n))}}class ra{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){Q(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=function(){return im}();const a=e.mutations;for(let o=0;o<a.length;o++)s=s.insert(a[o].key,n[o].version);return new ra(e,t,n,s)}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ae,K;function bm(r){switch(r){case _.OK:return M(64938);case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function bu(r){if(r===void 0)return Je("GRPC error has no .code"),_.UNKNOWN;switch(r){case ae.OK:return _.OK;case ae.CANCELLED:return _.CANCELLED;case ae.UNKNOWN:return _.UNKNOWN;case ae.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case ae.INTERNAL:return _.INTERNAL;case ae.UNAVAILABLE:return _.UNAVAILABLE;case ae.UNAUTHENTICATED:return _.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case ae.NOT_FOUND:return _.NOT_FOUND;case ae.ALREADY_EXISTS:return _.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return _.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case ae.ABORTED:return _.ABORTED;case ae.OUT_OF_RANGE:return _.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return _.UNIMPLEMENTED;case ae.DATA_LOSS:return _.DATA_LOSS;default:return M(39323,{code:r})}}(K=ae||(ae={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Em(){return new TextEncoder}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Tm=new yt([4294967295,4294967295],0);function xc(r){const e=Em().encode(r),t=new Pl;return t.update(e),new Uint8Array(t.digest())}function Sc(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new yt([t,n],0),new yt([s,a],0)]}class sa{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new $n(`Invalid padding: ${t}`);if(n<0)throw new $n(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new $n(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new $n(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=yt.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(yt.fromNumber(n)));return s.compare(Tm)===1&&(s=new yt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=xc(e),[n,s]=Sc(t);for(let a=0;a<this.hashCount;a++){const o=this.ye(n,s,a);if(!this.we(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),o=new sa(a,s,t);return n.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const t=xc(e),[n,s]=Sc(t);for(let a=0;a<this.hashCount;a++){const o=this.ye(n,s,a);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class $n extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ts{constructor(e,t,n,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,lr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ts(V.min(),s,new te(q),Ye(),z())}}class lr{constructor(e,t,n,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new lr(n,t,z(),z(),z())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $r{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class Eu{constructor(e,t){this.targetId=e,this.Ce=t}}class Tu{constructor(e,t,n=ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class _c{constructor(){this.ve=0,this.Fe=Cc(),this.Me=ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=z(),t=z(),n=z();return this.Fe.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:M(38017,{changeType:a})}}),new lr(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Cc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Q(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Im{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ye(),this.Je=Or(),this.He=Or(),this.Ye=new te(q)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:M(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const a=s.target;if(Ai(a))if(n===0){const o=new P(a.path);this.et(t,o,Ee.newNoDocument(o,V.min()))}else Q(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:a=0}=t;let o,l;try{o=Et(n).toUint8Array()}catch(u){if(u instanceof Kl)return on("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sa(o,s,a)}catch(u){return on(u instanceof $n?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach(a=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${a.path.canonicalString()}`;e.mightContain(l)||(this.et(t,a,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((a,o)=>{const l=this.ot(o);if(l){if(a.current&&Ai(l.target)){const u=new P(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Ee.newNoDocument(u,e))}a.Be&&(t.set(o,a.ke()),a.qe())}});let n=z();this.He.forEach((a,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(a))}),this.je.forEach((a,o)=>o.setReadTime(e));const s=new Ts(e,t,this.Ye,this.je,n);return this.je=Ye(),this.Je=Or(),this.He=Or(),this.Ye=new te(q),s}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new _c,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new de(q),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new de(q),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _c),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Or(){return new te(P.comparator)}function Cc(){return new te(P.comparator)}const xm={asc:"ASCENDING",desc:"DESCENDING"},Sm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_m={and:"AND",or:"OR"};class Cm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Di(r,e){return r.useProto3Json||gs(e)?e:{value:e}}function ns(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Iu(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Am(r,e){return ns(r,e.toTimestamp())}function Be(r){return Q(!!r,49232),V.fromTimestamp(function(e){const t=bt(e);return new Z(t.seconds,t.nanos)}(r))}function ia(r,e){return Ri(r,e).canonicalString()}function Ri(r,e){const t=function(n){return new W(["projects",n.projectId,"databases",n.database])}(r).child("documents");return e===void 0?t:t.child(e)}function xu(r){const e=W.fromString(r);return Q(ku(e),10190,{key:e.toString()}),e}function Li(r,e){return ia(r.databaseId,e.path)}function hi(r,e){const t=xu(e);if(t.get(1)!==r.databaseId.projectId)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new P(_u(t))}function Su(r,e){return ia(r.databaseId,e)}function km(r){const e=xu(r);return e.length===4?W.emptyPath():_u(e)}function Oi(r){return new W(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function _u(r){return Q(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Ac(r,e,t){return{name:Li(r,e),fields:t.value.mapValue.fields}}function Nm(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:M(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(u,d){return u.useProto3Json?(Q(d===void 0||typeof d=="string",58123),ye.fromBase64String(d||"")):(Q(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ye.fromUint8Array(d||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?_.UNKNOWN:bu(u.code);return new D(d,u.message||"")}(o);t=new Tu(n,s,a,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=hi(r,n.document.name),a=Be(n.document.updateTime),o=n.document.createTime?Be(n.document.createTime):V.min(),l=new Ae({mapValue:{fields:n.document.fields}}),u=Ee.newFoundDocument(s,a,o,l),d=n.targetIds||[],p=n.removedTargetIds||[];t=new $r(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=hi(r,n.document),a=n.readTime?Be(n.readTime):V.min(),o=Ee.newNoDocument(s,a),l=n.removedTargetIds||[];t=new $r([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=hi(r,n.document),a=n.removedTargetIds||[];t=new $r([],a,s,null)}else{if(!("filter"in e))return M(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:a}=n,o=new wm(s,a),l=n.targetId;t=new Eu(l,o)}}return t}function Dm(r,e){let t;if(e instanceof cr)t={update:Ac(r,e.key,e.value)};else if(e instanceof na)t={delete:Li(r,e.key)};else if(e instanceof _t)t={update:Ac(r,e.key,e.data),updateMask:Bm(e.fieldMask)};else{if(!(e instanceof gm))return M(16599,{Vt:e.type});t={verify:Li(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,a){const o=a.transform;if(o instanceof es)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof nr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof rr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ts)return{fieldPath:a.field.canonicalString(),increment:o.Ae};throw M(20930,{transform:a.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(n,s){return s.updateTime!==void 0?{updateTime:Am(n,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M(27497)}(r,e.precondition)),t}function Rm(r,e){return r&&r.length>0?(Q(e!==void 0,14353),r.map(t=>function(n,s){let a=n.updateTime?Be(n.updateTime):Be(s);return a.isEqual(V.min())&&(a=Be(s)),new fm(a,n.transformResults||[])}(t,e))):[]}function Lm(r,e){return{documents:[Su(r,e.path)]}}function Om(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Su(r,s);const a=function(u){if(u.length!==0)return Au(Oe.create(u,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const o=function(u){if(u.length!==0)return u.map(d=>function(p){return{field:Jt(p.field),direction:Um(p.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Di(r,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:t,parent:s}}function Pm(r){let e=km(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){Q(n===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let a=[];t.where&&(a=function(p){const m=Cu(p);return m instanceof Oe&&ru(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(x){return new tr(Xt(x.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,gs(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(p){const m=!!p.before,x=p.values||[];return new Zr(x,m)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const m=!p.before,x=p.values||[];return new Zr(x,m)}(t.endAt)),em(e,s,o,a,l,"F",u,d)}function Mm(r,e){const t=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:n})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Cu(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Xt(e.unaryFilter.field);return oe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Xt(e.unaryFilter.field);return oe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xt(e.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Xt(e.unaryFilter.field);return oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(r):r.fieldFilter!==void 0?function(e){return oe.create(Xt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Oe.create(e.compositeFilter.filters.map(t=>Cu(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(r):M(30097,{filter:r})}function Um(r){return xm[r]}function Vm(r){return Sm[r]}function Fm(r){return _m[r]}function Jt(r){return{fieldPath:r.canonicalString()}}function Xt(r){return ge.fromServerFormat(r.fieldPath)}function Au(r){return r instanceof oe?function(e){if(e.op==="=="){if(mc(e.value))return{unaryFilter:{field:Jt(e.field),op:"IS_NAN"}};if(pc(e.value))return{unaryFilter:{field:Jt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(mc(e.value))return{unaryFilter:{field:Jt(e.field),op:"IS_NOT_NAN"}};if(pc(e.value))return{unaryFilter:{field:Jt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jt(e.field),op:Vm(e.op),value:e.value}}}(r):r instanceof Oe?function(e){const t=e.getFilters().map(n=>Au(n));return t.length===1?t[0]:{compositeFilter:{op:Fm(e.op),filters:t}}}(r):M(54877,{filter:r})}function Bm(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ku(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ft{constructor(e,t,n,s,a=V.min(),o=V.min(),l=ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $m{constructor(e){this.yt=e}}function jm(r){const e=Pm({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ni(e,e.limit,"L"):e}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qm{constructor(){this.Cn=new zm}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(wt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(wt.min())}updateCollectionGroup(e,t,n){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class zm{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new de(W.comparator),a=!s.has(n);return this.index[t]=s.add(n),a}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new de(W.comparator)).toArray()}}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const kc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nu=41943040;class Ce{static withCacheSize(e){return new Ce(e,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/Ce.DEFAULT_COLLECTION_PERCENTILE=10,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ce.DEFAULT=new Ce(Nu,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ce.DISABLED=new Ce(-1,0,0);/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class hn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new hn(0)}static cr(){return new hn(-1)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Nc="LruGarbageCollector",Hm=1048576;function Dc([r,e],[t,n]){const s=q(r,t);return s===0?q(e,n):s}class Gm{constructor(e){this.Ir=e,this.buffer=new de(Dc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Dc(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Km{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){O(Nc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){vn(t)?O(Nc,"Ignoring IndexedDB error during garbage collection: ",t):await yn(t)}await this.Vr(3e5)})}}class Qm{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return C.resolve(ms.ce);const n=new Gm(t);return this.mr.forEachTarget(e,s=>n.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>n.Ar(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(kc)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kc):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,s,a,o,l,u,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(n=m,l=Date.now(),this.removeTargets(e,n,t))).next(m=>(a=m,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(m=>(d=Date.now(),Qt()<=j.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${a} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:m})))}}function Wm(r,e){return new Qm(r,e)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jm{constructor(){this.changes=new $t(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?C.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Xm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ym{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Qn(n.mutation,s,Ne.empty(),Z.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,z()).next(()=>n))}getLocalViewOfDocuments(e,t,n=z()){const s=Lt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(a=>{let o=Bn();return a.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=Lt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,z()))}populateOverlays(e,t,n){const s=[];return n.forEach(a=>{t.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,n,s){let a=Ye();const o=Kn(),l=function(){return Kn()}();return t.forEach((u,d)=>{const p=n.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof _t)?a=a.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),Qn(p.mutation,d,p.mutation.getFieldMask(),Z.now())):o.set(d.key,Ne.empty())}),this.recalculateAndSaveOverlays(e,a).next(u=>(u.forEach((d,p)=>o.set(d,p)),t.forEach((d,p)=>l.set(d,new Xm(p,o.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const n=Kn();let s=new te((o,l)=>o-l),a=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=n.get(u)||Ne.empty();p=l.applyToLocalView(d,p),n.set(u,p);const m=(s.get(l.batchId)||z()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,m=du();p.forEach(x=>{if(!a.has(x)){const A=vu(t.get(x),n.get(x));A!==null&&m.set(x,A),a=a.add(x)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return C.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(a){return P.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ou(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(a=>{const o=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-a.size):C.resolve(Lt());let l=Xn,u=a;return o.next(d=>C.forEach(d,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),a.get(p)?C.resolve():this.remoteDocumentCache.getEntry(e,p).next(x=>{u=u.insert(p,x)}))).next(()=>this.populateOverlays(e,d,a)).next(()=>this.computeViews(e,u,d,z())).next(p=>({batchId:l,changes:hu(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new P(t)).next(n=>{let s=Bn();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const a=t.collectionGroup;let o=Bn();return this.indexManager.getCollectionParents(e,a).next(l=>C.forEach(l,u=>{const d=function(p,m){return new wn(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(a));return this.getDocumentsMatchingCollectionQuery(e,d,n,s).next(p=>{p.forEach((m,x)=>{o=o.insert(m,x)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(a=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,a,s))).next(o=>{a.forEach((u,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,Ee.newInvalidDocument(p)))});let l=Bn();return o.forEach((u,d)=>{const p=a.get(u);p!==void 0&&Qn(p.mutation,d,Ne.empty(),Z.now()),ws(t,d)&&(l=l.insert(u,d))}),l})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zm{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return C.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(n){return{id:n.id,version:n.version,createTime:Be(n.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(n){return{name:n.name,query:jm(n.bundledQuery),readTime:Be(n.readTime)}}(t)),C.resolve()}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class eg{constructor(){this.overlays=new te(P.comparator),this.qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Lt();return C.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&n.set(s,a)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,a)=>{this.St(e,t,a)}),C.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.qr.delete(n)),C.resolve()}getOverlaysForCollection(e,t,n){const s=Lt(),a=t.length+1,o=new P(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===a&&u.largestBatchId>n&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let a=new te((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let p=a.get(d.largestBatchId);p===null&&(p=Lt(),a=a.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Lt(),u=a.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return C.resolve(l)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new vm(t,n));let a=this.qr.get(t);a===void 0&&(a=z(),this.qr.set(t,a)),this.qr.set(t,a.add(n.key))}}/**
* @license
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tg{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class aa{constructor(){this.Qr=new de(pe.$r),this.Ur=new de(pe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new pe(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Gr(new pe(e,t))}zr(e,t){e.forEach(n=>this.removeReference(n,t))}jr(e){const t=new P(new W([])),n=new pe(t,e),s=new pe(t,e+1),a=[];return this.Ur.forEachInRange([n,s],o=>{this.Gr(o),a.push(o.key)}),a}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new P(new W([])),n=new pe(t,e),s=new pe(t,e+1);let a=z();return this.Ur.forEachInRange([n,s],o=>{a=a.add(o.key)}),a}containsKey(e){const t=new pe(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class pe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return P.comparator(e.key,t.key)||q(e.Yr,t.Yr)}static Kr(e,t){return q(e.Yr,t.Yr)||P.comparator(e.key,t.key)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ng{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new de(pe.$r)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ym(a,t,n,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new pe(l.key,a)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,t){return C.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.ei(n),a=s<0?0:s;return C.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Wi:this.tr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new pe(t,0),s=new pe(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([n,s],o=>{const l=this.Xr(o.Yr);a.push(l)}),C.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new de(q);return t.forEach(s=>{const a=new pe(s,0),o=new pe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,o],l=>{n=n.add(l.Yr)})}),C.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let a=n;P.isDocumentKey(a)||(a=a.child(""));const o=new pe(new P(a),0);let l=new de(q);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Yr)),!0)},o),C.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(n=>{const s=this.Xr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Q(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return C.forEach(t.mutations,s=>{const a=new pe(s.key,t.batchId);return n=n.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new pe(t,0),s=this.Zr.firstAfterOrEqual(n);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rg{constructor(e){this.ri=e,this.docs=function(){return new te(P.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),a=s?s.size:0,o=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-a,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return C.resolve(n?n.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let n=Ye();return t.forEach(s=>{const a=this.docs.get(s);n=n.insert(s,a?a.document.mutableCopy():Ee.newInvalidDocument(s))}),C.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let a=Ye();const o=t.path,l=new P(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Rp(Dp(p),n)<=0||(s.has(p.key)||ws(t,p))&&(a=a.insert(p.key,p.mutableCopy()))}return C.resolve(a)}getAllFromCollectionGroup(e,t,n,s){M(9500)}ii(e,t){return C.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new sg(this)}getSize(e){return C.resolve(this.size)}}class sg extends Jm{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(n)}),C.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ig{constructor(e){this.persistence=e,this.si=new $t(t=>Yi(t),Zi),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.oi=0,this._i=new aa,this.targetCount=0,this.ai=hn.ur()}forEachTarget(e,t){return this.si.forEach((n,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),C.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new hn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Pr(t),C.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,n){let s=0;const a=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.si.delete(o),a.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),C.waitFor(a).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return C.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),C.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach(o=>{a.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return C.resolve(n)}containsKey(e,t){return C.resolve(this._i.containsKey(t))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Du{constructor(e,t){this.ui={},this.overlays={},this.ci=new ms(0),this.li=!1,this.li=!0,this.hi=new tg,this.referenceDelegate=e(this),this.Pi=new ig(this),this.indexManager=new qm,this.remoteDocumentCache=function(n){return new rg(n)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new $m(t),this.Ii=new Zm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new ng(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){O("MemoryPersistence","Starting transaction:",e);const s=new ag(this.ci.next());return this.referenceDelegate.Ei(),n(s).next(a=>this.referenceDelegate.di(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Ai(e,t){return C.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class ag extends Op{constructor(e){super(),this.currentSequenceNumber=e}}class oa{constructor(e){this.persistence=e,this.Ri=new aa,this.Vi=null}static mi(e){return new oa(e)}get fi(){if(this.Vi)return this.Vi;throw M(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),C.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(a=>this.fi.add(a.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,n=>{const s=P.fromPath(n);return this.gi(e,s).next(a=>{a||t.removeEntry(s,V.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class rs{constructor(e,t){this.persistence=e,this.pi=new $t(n=>Up(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Wm(this,t)}static mi(e,t){return new rs(e,t)}Ei(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}wr(e){let t=0;return this.pr(e,n=>{t++}).next(()=>t)}pr(e,t){return C.forEach(this.pi,(n,s)=>this.br(e,n,s).next(a=>a?C.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,t).next(l=>{l||(n++,a.removeEntry(o,V.min()))})).next(()=>a.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),C.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vr(e.data.value)),t}br(e,t,n){return C.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return C.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ca{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=s}static As(e,t){let n=z(),s=z();for(const a of t.docChanges)switch(a.type){case 0:n=n.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new ca(e,t.fromCache,n,s)}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class og{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class cg{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return ef()?8:Pp(Te())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const a={result:null};return this.ys(e,t).next(o=>{a.result=o}).next(()=>{if(!a.result)return this.ws(e,t,s,n).next(o=>{a.result=o})}).next(()=>{if(a.result)return;const o=new og;return this.Ss(e,t,o).next(l=>{if(a.result=l,this.Vs)return this.bs(e,t,o,l.size)})}).next(()=>a.result)}bs(e,t,n,s){return n.documentReadCount<this.fs?(Qt()<=j.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Wt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(Qt()<=j.DEBUG&&O("QueryEngine","Query:",Wt(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(Qt()<=j.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Wt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fe(t))):C.resolve())}ys(e,t){if(wc(t))return C.resolve(null);let n=Fe(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ni(t,null,"F"),n=Fe(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(a=>{const o=z(...a);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,n).next(u=>{const d=this.Ds(t,l);return this.Cs(t,d,o,u.readTime)?this.ys(e,Ni(t,null,"F")):this.vs(e,d,t,u)}))})))}ws(e,t,n,s){return wc(t)||s.isEqual(V.min())?C.resolve(null):this.ps.getDocuments(e,n).next(a=>{const o=this.Ds(t,a);return this.Cs(t,o,n,s)?C.resolve(null):(Qt()<=j.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Wt(t)),this.vs(e,o,t,Np(s,Xn)).next(l=>l))})}Ds(e,t){let n=new de(lu(e));return t.forEach((s,a)=>{ws(e,a)&&(n=n.add(a))}),n}Cs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}Ss(e,t,n){return Qt()<=j.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Wt(t)),this.ps.getDocumentsMatchingQuery(e,t,wt.min(),n)}vs(e,t,n,s){return this.ps.getDocumentsMatchingQuery(e,n,s).next(a=>(t.forEach(o=>{a=a.insert(o.key,o)}),a))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const la="LocalStore",lg=3e8;class ug{constructor(e,t,n,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new te(q),this.xs=new $t(a=>Yi(a),Zi),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ym(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function hg(r,e,t,n){return new ug(r,e,t,n)}async function Ru(r,e){const t=F(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(a=>(s=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(n))).next(a=>{const o=[],l=[];let u=z();for(const d of s){o.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of a){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(n,u).next(d=>({Ls:d,removedBatchIds:o,addedBatchIds:l}))})})}function dg(r,e){const t=F(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return function(o,l,u,d){const p=u.batch,m=p.keys();let x=C.resolve();return m.forEach(A=>{x=x.next(()=>d.getEntry(l,A)).next(N=>{const L=u.docVersions.get(A);Q(L!==null,48541),N.version.compareTo(L)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),d.addEntry(N)))})}),x.next(()=>o.mutationQueue.removeMutationBatch(l,p))}(t,n,e,a).next(()=>a.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(o){let l=z();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(l=l.add(o.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Lu(r){const e=F(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function fg(r,e){const t=F(r),n=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach((p,m)=>{const x=s.get(m);if(!x)return;l.push(t.Pi.removeMatchingKeys(a,p.removedDocuments,m).next(()=>t.Pi.addMatchingKeys(a,p.addedDocuments,m)));let A=x.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(ye.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,n)),s=s.insert(m,A),function(N,L,R){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=lg?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(x,A,p)&&l.push(t.Pi.updateTargetData(a,A))});let u=Ye(),d=z();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(a,p))}),l.push(pg(a,o,e.documentUpdates).next(p=>{u=p.ks,d=p.qs})),!n.isEqual(V.min())){const p=t.Pi.getLastRemoteSnapshotVersion(a).next(m=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,n));l.push(p)}return C.waitFor(l).next(()=>o.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,u,d)).next(()=>u)}).then(a=>(t.Ms=s,a))}function pg(r,e,t){let n=z(),s=z();return t.forEach(a=>n=n.add(a)),e.getEntries(r,n).next(a=>{let o=Ye();return t.forEach((l,u)=>{const d=a.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(V.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):O(la,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{ks:o,qs:s}})}function mg(r,e){const t=F(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Wi),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function gg(r,e){const t=F(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Pi.getTargetData(n,e).next(a=>a?(s=a,C.resolve(s)):t.Pi.allocateTargetId(n).next(o=>(s=new ft(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n})}async function Pi(r,e,t){const n=F(r),s=n.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",a,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!vn(o))throw o;O(la,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ms=n.Ms.remove(e),n.xs.delete(s.target)}function Rc(r,e,t){const n=F(r);let s=V.min(),a=z();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const p=F(l),m=p.xs.get(d);return m!==void 0?C.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,d)}(n,o,Fe(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{a=u})}).next(()=>n.Fs.getDocumentsMatchingQuery(o,e,t?s:V.min(),t?a:z())).next(l=>(yg(n,nm(e),l),{documents:l,Qs:a})))}function yg(r,e,t){let n=r.Os.get(e)||V.min();t.forEach((s,a)=>{a.readTime.compareTo(n)>0&&(n=a.readTime)}),r.Os.set(e,n)}class Lc{constructor(){this.activeTargetIds=cm()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vg{constructor(){this.Mo=new Lc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Lc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wg{Oo(e){}shutdown(){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Oc="ConnectivityMonitor";class Pc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){O(Oc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){O(Oc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Pr=null;function Mi(){return Pr===null?Pr=function(){return 268435456+Math.round(2147483648*Math.random())}():Pr++,"0x"+Pr.toString(16)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const di="RestConnection",bg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Eg{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===Xr?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(e,t,n,s,a){const o=Mi(),l=this.zo(e,t.toUriEncodedString());O(di,`Sending RPC '${e}' ${o}:`,l,n);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,a);const{host:d}=new URL(l),p=pn(d);return this.Jo(e,l,u,n,p).then(m=>(O(di,`Received RPC '${e}' ${o}: `,m),m),m=>{throw on(di,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",n),m})}Ho(e,t,n,s,a,o){return this.Go(e,t,n,s,a)}jo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,a)=>e[a]=s),n&&n.headers.forEach((s,a)=>e[a]=s)}zo(e,t){const n=bg[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Tg{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const we="WebChannelConnection";class Ig extends Eg{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,s,a){const o=Mi();return new Promise((l,u)=>{const d=new Ml;d.setWithCredentials(!0),d.listenOnce(Ul.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ur.NO_ERROR:const m=d.getResponseJson();O(we,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Ur.TIMEOUT:O(we,`RPC '${e}' ${o} timed out`),u(new D(_.DEADLINE_EXCEEDED,"Request time out"));break;case Ur.HTTP_ERROR:const x=d.getStatus();if(O(we,`RPC '${e}' ${o} failed with status:`,x,"response text:",d.getResponseText()),x>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const N=A==null?void 0:A.error;if(N&&N.status&&N.message){const L=function(R){const B=R.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(B)>=0?B:_.UNKNOWN}(N.status);u(new D(L,N.message))}else u(new D(_.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new D(_.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{O(we,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(s);O(we,`RPC '${e}' ${o} sending request:`,s),d.send(t,"POST",p,n,15)})}T_(e,t,n){const s=Mi(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Bl(),l=Fl(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const p=a.join("");O(we,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=o.createWebChannel(p,u);this.I_(m);let x=!1,A=!1;const N=new Tg({Yo:R=>{A?O(we,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(x||(O(we,`Opening RPC '${e}' stream ${s} transport.`),m.open(),x=!0),O(we,`RPC '${e}' stream ${s} sending:`,R),m.send(R))},Zo:()=>m.close()}),L=(R,B,H)=>{R.listen(B,J=>{try{H(J)}catch(ne){setTimeout(()=>{throw ne},0)}})};return L(m,Fn.EventType.OPEN,()=>{A||(O(we,`RPC '${e}' stream ${s} transport opened.`),N.o_())}),L(m,Fn.EventType.CLOSE,()=>{A||(A=!0,O(we,`RPC '${e}' stream ${s} transport closed`),N.a_(),this.E_(m))}),L(m,Fn.EventType.ERROR,R=>{A||(A=!0,on(we,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),N.a_(new D(_.UNAVAILABLE,"The operation could not be completed")))}),L(m,Fn.EventType.MESSAGE,R=>{var B;if(!A){const H=R.data[0];Q(!!H,16349);const J=H,ne=(J==null?void 0:J.error)||((B=J[0])==null?void 0:B.error);if(ne){O(we,`RPC '${e}' stream ${s} received error:`,ne);const ue=ne.status;let ee=function(g){const v=ae[g];if(v!==void 0)return bu(v)}(ue),b=ne.message;ee===void 0&&(ee=_.INTERNAL,b="Unknown error status: "+ue+" with message "+ne.message),A=!0,N.a_(new D(ee,b)),m.close()}else O(we,`RPC '${e}' stream ${s} received:`,H),N.u_(H)}}),L(l,Vl.STAT_EVENT,R=>{R.stat===Ii.PROXY?O(we,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===Ii.NOPROXY&&O(we,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function fi(){return typeof document<"u"?document:null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Is(r){return new Cm(r,!0)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ou{constructor(e,t,n=1e3,s=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=s,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Mc="PersistentStream";class Pu{constructor(e,t,n,s,a,o,l,u){this.Mi=e,this.S_=n,this.b_=s,this.connection=a,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ou(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(Je(t.toString()),Je("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===t&&this.G_(n,s)},n=>{e(()=>{const s=new D(_.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return O(Mc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(O(Mc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xg extends Pu{constructor(e,t,n,s,a,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Nm(this.serializer,e),n=function(s){if(!("targetChange"in s))return V.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?V.min():a.readTime?Be(a.readTime):V.min()}(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=Oi(this.serializer),t.addTarget=function(s,a){let o;const l=a.target;if(o=Ai(l)?{documents:Lm(s,l)}:{query:Om(s,l).ft},o.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){o.resumeToken=Iu(s,a.resumeToken);const u=Di(s,a.expectedCount);u!==null&&(o.expectedCount=u)}else if(a.snapshotVersion.compareTo(V.min())>0){o.readTime=ns(s,a.snapshotVersion.toTimestamp());const u=Di(s,a.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,e);const n=Mm(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=Oi(this.serializer),t.removeTarget=e,this.q_(t)}}class Sg extends Pu{constructor(e,t,n,s,a,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Rm(e.writeResults,e.commitTime),n=Be(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Oi(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Dm(this.serializer,n))};this.q_(t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _g{}class Cg extends _g{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,o])=>this.connection.Go(e,Ri(t,n),s,a,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(_.UNKNOWN,a.toString())})}Ho(e,t,n,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Ri(t,n),s,o,l,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(_.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Ag{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Je(t),this.aa=!1):O("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ft="RemoteStore";class kg{constructor(e,t,n,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo(o=>{n.enqueueAndForget(async()=>{jt(this)&&(O(Ft,"Restarting streams for network reachability change."),await async function(l){const u=F(l);u.Ea.add(4),await ur(u),u.Ra.set("Unknown"),u.Ea.delete(4),await xs(u)}(this))})}),this.Ra=new Ag(n,s)}}async function xs(r){if(jt(r))for(const e of r.da)await e(!0)}async function ur(r){for(const e of r.da)await e(!1)}function Mu(r,e){const t=F(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),fa(t)?da(t):bn(t).O_()&&ha(t,e))}function ua(r,e){const t=F(r),n=bn(t);t.Ia.delete(e),n.O_()&&Uu(t,e),t.Ia.size===0&&(n.O_()?n.L_():jt(t)&&t.Ra.set("Unknown"))}function ha(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(V.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}bn(r).Y_(e)}function Uu(r,e){r.Va.Ue(e),bn(r).Z_(e)}function da(r){r.Va=new Im({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),bn(r).start(),r.Ra.ua()}function fa(r){return jt(r)&&!bn(r).x_()&&r.Ia.size>0}function jt(r){return F(r).Ea.size===0}function Vu(r){r.Va=void 0}async function Ng(r){r.Ra.set("Online")}async function Dg(r){r.Ia.forEach((e,t)=>{ha(r,e)})}async function Rg(r,e){Vu(r),fa(r)?(r.Ra.ha(e),da(r)):r.Ra.set("Unknown")}async function Lg(r,e,t){if(r.Ra.set("Online"),e instanceof Tu&&e.state===2&&e.cause)try{await async function(n,s){const a=s.cause;for(const o of s.targetIds)n.Ia.has(o)&&(await n.remoteSyncer.rejectListen(o,a),n.Ia.delete(o),n.Va.removeTarget(o))}(r,e)}catch(n){O(Ft,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ss(r,n)}else if(e instanceof $r?r.Va.Ze(e):e instanceof Eu?r.Va.st(e):r.Va.tt(e),!t.isEqual(V.min()))try{const n=await Lu(r.localStore);t.compareTo(n)>=0&&await function(s,a){const o=s.Va.Tt(a);return o.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.Ia.get(u);d&&s.Ia.set(u,d.withResumeToken(l.resumeToken,a))}}),o.targetMismatches.forEach((l,u)=>{const d=s.Ia.get(l);if(!d)return;s.Ia.set(l,d.withResumeToken(ye.EMPTY_BYTE_STRING,d.snapshotVersion)),Uu(s,l);const p=new ft(d.target,l,u,d.sequenceNumber);ha(s,p)}),s.remoteSyncer.applyRemoteEvent(o)}(r,t)}catch(n){O(Ft,"Failed to raise snapshot:",n),await ss(r,n)}}async function ss(r,e,t){if(!vn(e))throw e;r.Ea.add(1),await ur(r),r.Ra.set("Offline"),t||(t=()=>Lu(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{O(Ft,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await xs(r)})}function Fu(r,e){return e().catch(t=>ss(r,t,e))}async function Ss(r){const e=F(r),t=It(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Wi;for(;Og(e);)try{const s=await mg(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,Pg(e,s)}catch(s){await ss(e,s)}Bu(e)&&$u(e)}function Og(r){return jt(r)&&r.Ta.length<10}function Pg(r,e){r.Ta.push(e);const t=It(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Bu(r){return jt(r)&&!It(r).x_()&&r.Ta.length>0}function $u(r){It(r).start()}async function Mg(r){It(r).ra()}async function Ug(r){const e=It(r);for(const t of r.Ta)e.ea(t.mutations)}async function Vg(r,e,t){const n=r.Ta.shift(),s=ra.from(n,e,t);await Fu(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Ss(r)}async function Fg(r,e){e&&It(r).X_&&await async function(t,n){if(function(s){return bm(s)&&s!==_.ABORTED}(n.code)){const s=t.Ta.shift();It(t).B_(),await Fu(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,n)),await Ss(t)}}(r,e),Bu(r)&&$u(r)}async function Uc(r,e){const t=F(r);t.asyncQueue.verifyOperationInProgress(),O(Ft,"RemoteStore received new credentials");const n=jt(t);t.Ea.add(3),await ur(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await xs(t)}async function Bg(r,e){const t=F(r);e?(t.Ea.delete(2),await xs(t)):e||(t.Ea.add(2),await ur(t),t.Ra.set("Unknown"))}function bn(r){return r.ma||(r.ma=function(e,t,n){const s=F(e);return s.sa(),new xg(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(r.datastore,r.asyncQueue,{Xo:Ng.bind(null,r),t_:Dg.bind(null,r),r_:Rg.bind(null,r),H_:Lg.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),fa(r)?da(r):r.Ra.set("Unknown")):(await r.ma.stop(),Vu(r))})),r.ma}function It(r){return r.fa||(r.fa=function(e,t,n){const s=F(e);return s.sa(),new Sg(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:Mg.bind(null,r),r_:Fg.bind(null,r),ta:Ug.bind(null,r),na:Vg.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await Ss(r)):(await r.fa.stop(),r.Ta.length>0&&(O(Ft,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pa{constructor(e,t,n,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=a,this.deferred=new Qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,a){const o=Date.now()+n,l=new pa(e,t,o,s,a);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ma(r,e){if(Je("AsyncQueue",`${e}: ${r}`),vn(r))return new D(_.UNAVAILABLE,`${e}: ${r}`);throw r}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zt{static emptySet(e){return new Zt(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||P.comparator(t.key,n.key):(t,n)=>P.comparator(t.key,n.key),this.keyedMap=Bn(),this.sortedSet=new te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=n.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Zt;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Vc{constructor(){this.ga=new te(P.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):M(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class dn{constructor(e,t,n,s,a,o,l,u,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=a,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,s,a){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new dn(e,t,Zt.emptySet(t),o,n,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $g{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class jg{constructor(){this.queries=Fc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,t){const n=F(e),s=n.queries;n.queries=Fc(),s.forEach((a,o)=>{for(const l of o.Sa)l.onError(t)})})(this,new D(_.ABORTED,"Firestore shutting down"))}}function Fc(){return new $t(r=>cu(r),vs)}async function ju(r,e){const t=F(r);let n=3;const s=e.query;let a=t.queries.get(s);a?!a.ba()&&e.Da()&&(n=2):(a=new $g,n=e.Da()?0:1);try{switch(n){case 0:a.wa=await t.onListen(s,!0);break;case 1:a.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=ma(o,`Initialization of query '${Wt(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&ga(t)}async function qu(r,e){const t=F(r),n=e.query;let s=3;const a=t.queries.get(n);if(a){const o=a.Sa.indexOf(e);o>=0&&(a.Sa.splice(o,1),a.Sa.length===0?s=e.Da()?0:1:!a.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function qg(r,e){const t=F(r);let n=!1;for(const s of e){const a=s.query,o=t.queries.get(a);if(o){for(const l of o.Sa)l.Fa(s)&&(n=!0);o.wa=s}}n&&ga(t)}function zg(r,e,t){const n=F(r),s=n.queries.get(e);if(s)for(const a of s.Sa)a.onError(t);n.queries.delete(e)}function ga(r){r.Ca.forEach(e=>{e.next()})}var Ui,Bc;(Bc=Ui||(Ui={})).Ma="default",Bc.Cache="cache";class zu{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new dn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=dn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ui.Cache}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Hu{constructor(e){this.key=e}}class Gu{constructor(e){this.key=e}}class Hg{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=z(),this.mutatedKeys=z(),this.eu=lu(e),this.tu=new Zt(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new Vc,s=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const x=s.get(p),A=ws(this.query,m)?m:null,N=!!x&&this.mutatedKeys.has(x.key),L=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let R=!1;x&&A?x.data.isEqual(A.data)?N!==L&&(n.track({type:3,doc:A}),R=!0):this.su(x,A)||(n.track({type:2,doc:A}),R=!0,(u&&this.eu(A,u)>0||d&&this.eu(A,d)<0)&&(l=!0)):!x&&A?(n.track({type:0,doc:A}),R=!0):x&&!A&&(n.track({type:1,doc:x}),R=!0,(u||d)&&(l=!0)),R&&(A?(o=o.add(A),a=L?a.add(p):a.delete(p)):(o=o.delete(p),a=a.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),a=a.delete(p.key),n.track({type:1,doc:p})}return{tu:o,iu:n,Cs:l,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((p,m)=>function(x,A){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Rt:L})}};return N(x)-N(A)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(n),s=s??!1;const l=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,o.length!==0||d?{snapshot:new dn(this.query,e.tu,a,o,e.mutatedKeys,u===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Vc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=z(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const t=[];return e.forEach(n=>{this.Xa.has(n)||t.push(new Gu(n))}),this.Xa.forEach(n=>{e.has(n)||t.push(new Hu(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return dn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ya="SyncEngine";class Gg{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Kg{constructor(e){this.key=e,this.hu=!1}}class Qg{constructor(e,t,n,s,a,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new $t(l=>cu(l),vs),this.Iu=new Map,this.Eu=new Set,this.du=new te(P.comparator),this.Au=new Map,this.Ru=new aa,this.Vu={},this.mu=new Map,this.fu=hn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Wg(r,e,t=!0){const n=Yu(r);let s;const a=n.Tu.get(e);return a?(n.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.lu()):s=await Ku(n,e,t,!0),s}async function Jg(r,e){const t=Yu(r);await Ku(t,e,!0,!1)}async function Ku(r,e,t,n){const s=await gg(r.localStore,Fe(e)),a=s.targetId,o=r.sharedClientState.addLocalQueryTarget(a,t);let l;return n&&(l=await Xg(r,e,a,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Mu(r.remoteStore,s),l}async function Xg(r,e,t,n,s){r.pu=(m,x,A)=>async function(N,L,R,B){let H=L.view.ru(R);H.Cs&&(H=await Rc(N.localStore,L.query,!1).then(({documents:ee})=>L.view.ru(ee,H)));const J=B&&B.targetChanges.get(L.targetId),ne=B&&B.targetMismatches.get(L.targetId)!=null,ue=L.view.applyChanges(H,N.isPrimaryClient,J,ne);return jc(N,L.targetId,ue.au),ue.snapshot}(r,m,x,A);const a=await Rc(r.localStore,e,!0),o=new Hg(e,a.Qs),l=o.ru(a.documents),u=lr.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),d=o.applyChanges(l,r.isPrimaryClient,u);jc(r,t,d.au);const p=new Gg(e,t,o);return r.Tu.set(e,p),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),d.snapshot}async function Yg(r,e,t){const n=F(r),s=n.Tu.get(e),a=n.Iu.get(s.targetId);if(a.length>1)return n.Iu.set(s.targetId,a.filter(o=>!vs(o,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Pi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&ua(n.remoteStore,s.targetId),Vi(n,s.targetId)}).catch(yn)):(Vi(n,s.targetId),await Pi(n.localStore,s.targetId,!0))}async function Zg(r,e){const t=F(r),n=t.Tu.get(e),s=t.Iu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ua(t.remoteStore,n.targetId))}async function ey(r,e,t){const n=oy(r);try{const s=await function(a,o){const l=F(a),u=Z.now(),d=o.reduce((x,A)=>x.add(A.key),z());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",x=>{let A=Ye(),N=z();return l.Ns.getEntries(x,d).next(L=>{A=L,A.forEach((R,B)=>{B.isValidDocument()||(N=N.add(R))})}).next(()=>l.localDocuments.getOverlayedDocuments(x,A)).next(L=>{p=L;const R=[];for(const B of o){const H=mm(B,p.get(B.key).overlayedDocument);H!=null&&R.push(new _t(B.key,H,eu(H.value.mapValue),Le.exists(!0)))}return l.mutationQueue.addMutationBatch(x,u,R,o)}).next(L=>{m=L;const R=L.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(x,L.batchId,R)})}).then(()=>({batchId:m.batchId,changes:hu(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(a,o,l){let u=a.Vu[a.currentUser.toKey()];u||(u=new te(q)),u=u.insert(o,l),a.Vu[a.currentUser.toKey()]=u}(n,s.batchId,t),await hr(n,s.changes),await Ss(n.remoteStore)}catch(s){const a=ma(s,"Failed to persist write");t.reject(a)}}async function Qu(r,e){const t=F(r);try{const n=await fg(t.localStore,e);e.targetChanges.forEach((s,a)=>{const o=t.Au.get(a);o&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Q(o.hu,14607):s.removedDocuments.size>0&&(Q(o.hu,42227),o.hu=!1))}),await hr(t,n,e)}catch(n){await yn(n)}}function $c(r,e,t){const n=F(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach((a,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,o){const l=F(a);l.onlineState=o;let u=!1;l.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(o)&&(u=!0)}),u&&ga(l)}(n.eventManager,e),s.length&&n.Pu.H_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function ty(r,e,t){const n=F(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),a=s&&s.key;if(a){let o=new te(P.comparator);o=o.insert(a,Ee.newNoDocument(a,V.min()));const l=z().add(a),u=new Ts(V.min(),new Map,new te(q),o,l);await Qu(n,u),n.du=n.du.remove(a),n.Au.delete(e),va(n)}else await Pi(n.localStore,e,!1).then(()=>Vi(n,e,t)).catch(yn)}async function ny(r,e){const t=F(r),n=e.batch.batchId;try{const s=await dg(t.localStore,e);Ju(t,n,null),Wu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await hr(t,s)}catch(s){await yn(s)}}async function ry(r,e,t){const n=F(r);try{const s=await function(a,o){const l=F(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,o).next(p=>(Q(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,o)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(n.localStore,e);Ju(n,e,t),Wu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await hr(n,s)}catch(s){await yn(s)}}function Wu(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function Ju(r,e,t){const n=F(r);let s=n.Vu[n.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),n.Vu[n.currentUser.toKey()]=s}}function Vi(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Iu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(n=>{r.Ru.containsKey(n)||Xu(r,n)})}function Xu(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(ua(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),va(r))}function jc(r,e,t){for(const n of t)n instanceof Hu?(r.Ru.addReference(n.key,e),sy(r,n)):n instanceof Gu?(O(ya,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,e),r.Ru.containsKey(n.key)||Xu(r,n.key)):M(19791,{wu:n})}function sy(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Eu.has(n)||(O(ya,"New document in limbo: "+t),r.Eu.add(n),va(r))}function va(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new P(W.fromString(e)),n=r.fu.next();r.Au.set(n,new Kg(t)),r.du=r.du.insert(t,n),Mu(r.remoteStore,new ft(Fe(ea(t.path)),n,"TargetPurposeLimboResolution",ms.ce))}}async function hr(r,e,t){const n=F(r),s=[],a=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach((l,u)=>{o.push(n.pu(u,e,t).then(d=>{var p;if((d||t)&&n.isPrimaryClient){const m=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:p.current;n.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=ca.As(u.targetId,d);a.push(m)}}))}),await Promise.all(o),n.Pu.H_(s),await async function(l,u){const d=F(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>C.forEach(u,m=>C.forEach(m.Es,x=>d.persistence.referenceDelegate.addReference(p,m.targetId,x)).next(()=>C.forEach(m.ds,x=>d.persistence.referenceDelegate.removeReference(p,m.targetId,x)))))}catch(p){if(!vn(p))throw p;O(la,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const x=d.Ms.get(m),A=x.snapshotVersion,N=x.withLastLimboFreeSnapshotVersion(A);d.Ms=d.Ms.insert(m,N)}}}(n.localStore,a))}async function iy(r,e){const t=F(r);if(!t.currentUser.isEqual(e)){O(ya,"User change. New user:",e.toKey());const n=await Ru(t.localStore,e);t.currentUser=e,function(s,a){s.mu.forEach(o=>{o.forEach(l=>{l.reject(new D(_.CANCELLED,a))})}),s.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await hr(t,n.Ls)}}function ay(r,e){const t=F(r),n=t.Au.get(e);if(n&&n.hu)return z().add(n.key);{let s=z();const a=t.Iu.get(e);if(!a)return s;for(const o of a){const l=t.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Yu(r){const e=F(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ay.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ty.bind(null,e),e.Pu.H_=qg.bind(null,e.eventManager),e.Pu.yu=zg.bind(null,e.eventManager),e}function oy(r){const e=F(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ny.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ry.bind(null,e),e}class is{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Is(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return hg(this.persistence,new cg,e.initialUser,this.serializer)}Cu(e){return new Du(oa.mi,this.serializer)}Du(e){return new vg}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}is.provider={build:()=>new is};class cy extends is{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Q(this.persistence.referenceDelegate instanceof rs,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Km(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new Du(n=>rs.mi(n,t),this.serializer)}}class Fi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>$c(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=iy.bind(null,this.syncEngine),await Bg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jg}()}createDatastore(e){const t=Is(e.databaseInfo.databaseId),n=function(s){return new Ig(s)}(e.databaseInfo);return function(s,a,o,l){return new Cg(s,a,o,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(t,n,s,a,o){return new kg(t,n,s,a,o)}(this.localStore,this.datastore,e.asyncQueue,t=>$c(this.syncEngine,t,0),function(){return Pc.v()?new Pc:new wg}())}createSyncEngine(e,t){return function(n,s,a,o,l,u,d){const p=new Qg(n,s,a,o,l,u);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(n){const s=F(n);O(Ft,"RemoteStore shutting down."),s.Ea.add(5),await ur(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Fi.provider={build:()=>new Fi};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Je("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const xt="FirestoreClient";class ly{constructor(e,t,n,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=be.UNAUTHENTICATED,this.clientId=Qi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(n,async o=>{O(xt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(O(xt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ma(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function pi(r,e){r.asyncQueue.verifyOperationInProgress(),O(xt,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Ru(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function qc(r,e){r.asyncQueue.verifyOperationInProgress();const t=await uy(r);O(xt,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Uc(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Uc(e.remoteStore,s)),r._onlineComponents=e}async function uy(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){O(xt,"Using user provided OfflineComponentProvider");try{await pi(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(n){return n.name==="FirebaseError"?n.code===_.FAILED_PRECONDITION||n.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}(t))throw t;on("Error using user provided cache. Falling back to memory cache: "+t),await pi(r,new is)}}else O(xt,"Using default OfflineComponentProvider"),await pi(r,new cy(void 0));return r._offlineComponents}async function eh(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(O(xt,"Using user provided OnlineComponentProvider"),await qc(r,r._uninitializedComponentsProvider._online)):(O(xt,"Using default OnlineComponentProvider"),await qc(r,new Fi))),r._onlineComponents}function hy(r){return eh(r).then(e=>e.syncEngine)}async function th(r){const e=await eh(r),t=e.eventManager;return t.onListen=Wg.bind(null,e.syncEngine),t.onUnlisten=Yg.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Jg.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Zg.bind(null,e.syncEngine),t}function dy(r,e,t={}){const n=new Qe;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,o,l,u){const d=new Zu({next:m=>{d.Nu(),a.enqueueAndForget(()=>qu(s,p));const x=m.docs.has(o);!x&&m.fromCache?u.reject(new D(_.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&m.fromCache&&l&&l.source==="server"?u.reject(new D(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new zu(ea(o.path),d,{includeMetadataChanges:!0,qa:!0});return ju(s,p)}(await th(r),r.asyncQueue,e,t,n)),n.promise}function fy(r,e,t={}){const n=new Qe;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,o,l,u){const d=new Zu({next:m=>{d.Nu(),a.enqueueAndForget(()=>qu(s,p)),m.fromCache&&l.source==="server"?u.reject(new D(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new zu(o,d,{includeMetadataChanges:!0,qa:!0});return ju(s,p)}(await th(r),r.asyncQueue,e,t,n)),n.promise}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function nh(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const zc=new Map;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const rh="firestore.googleapis.com",Hc=!0;class Gc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rh,this.ssl=Hc}else this.host=e.host,this.ssl=e.ssl??Hc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Hm)throw new D(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nh(e.experimentalLongPollingOptions??{}),function(t){if(t.timeoutSeconds!==void 0){if(isNaN(t.timeoutSeconds))throw new D(_.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new D(_.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new D(_.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(t,n){return t.timeoutSeconds===n.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _s{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new wp;switch(t.type){case"firstParty":return new Ip(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new D(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=zc.get(e);t&&(O("ComponentProvider","Removing Datastore"),zc.delete(e),t.terminate())}(this),Promise.resolve()}}function py(r,e,t,n={}){var s;r=Xe(r,_s);const a=pn(e),o=r._getSettings(),l={...o,emulatorOptions:r._getEmulatorOptions()},u=`${e}:${t}`;a&&(Cl(`https://${u}`),Al("Firestore",!0)),o.host!==rh&&o.host!==u&&on("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:u,ssl:a,emulatorOptions:n};if(!Mt(d,l)&&(r._setSettings(d),n.mockUserToken)){let p,m;if(typeof n.mockUserToken=="string")p=n.mockUserToken,m=be.MOCK_USER;else{p=Hd(n.mockUserToken,(s=r._app)==null?void 0:s.options.projectId);const x=n.mockUserToken.sub||n.mockUserToken.user_id;if(!x)throw new D(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new be(x)}r._authCredentials=new bp(new jl(p,m))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new qt(this.firestore,e,this._query)}}class le{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}toJSON(){return{type:le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(or(t,le._jsonSchema))return new le(e,n||null,new P(W.fromString(t.referencePath)))}}le._jsonSchemaVersion="firestore/documentReference/1.0",le._jsonSchema={type:ce("string",le._jsonSchemaVersion),referencePath:ce("string")};class vt extends qt{constructor(e,t,n){super(e,t,ea(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new P(e))}withConverter(e){return new vt(this.firestore,e,this._path)}}function Kc(r,e,...t){if(r=Se(r),ql("collection","path",e),r instanceof _s){const n=W.fromString(e,...t);return ic(n),new vt(r,null,n)}{if(!(r instanceof le||r instanceof vt))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(e,...t));return ic(n),new vt(r.firestore,null,n)}}function jr(r,e,...t){if(r=Se(r),arguments.length===1&&(e=Qi.newId()),ql("doc","path",e),r instanceof _s){const n=W.fromString(e,...t);return sc(n),new le(r,null,new P(n))}{if(!(r instanceof le||r instanceof vt))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(e,...t));return sc(n),new le(r.firestore,r instanceof vt?r.converter:null,new P(n))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Qc="AsyncQueue";class Wc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ou(this,"async_queue_retry"),this._c=()=>{const n=fi();n&&O(Qc,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=fi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=fi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Qe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!vn(e))throw e;O(Qc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,Je("INTERNAL UNHANDLED ERROR: ",Jc(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=pa.createAndSchedule(this,e,t,n,a=>this.hc(a));return this.tc.push(s),s}uc(){this.nc&&M(47125,{Pc:Jc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Jc(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class En extends _s{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Wc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wc(e),this._firestoreClient=void 0,await e}}}function my(r,e){const t=typeof r=="object"?r:Rl(),n=typeof r=="string"?r:Xr,s=Gi(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const a=qd("firestore");a&&py(s,...a)}return s}function wa(r){if(r._terminated)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||gy(r),r._firestoreClient}function gy(r){var e,t,n;const s=r._freezeSettings(),a=function(o,l,u,d){return new Bp(o,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,nh(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(r._databaseId,((e=r._app)==null?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||(t=s.localCache)!=null&&t._offlineComponentProvider&&(n=s.localCache)!=null&&n._onlineComponentProvider&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new ly(r._authCredentials,r._appCheckCredentials,r._queue,a,r._componentsProvider&&function(o){const l=o==null?void 0:o._online.build();return{_offline:o==null?void 0:o._offline.build(l),_online:l}}(r._componentsProvider))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class De{constructor(e){this._byteString=e}static fromBase64String(e){try{return new De(ye.fromBase64String(e))}catch(t){throw new D(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new De(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:De._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(or(e,De._jsonSchema))return De.fromBase64String(e.bytes)}}De._jsonSchemaVersion="firestore/bytes/1.0",De._jsonSchema={type:ce("string",De._jsonSchemaVersion),bytes:ce("string")};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ba{constructor(e){this._methodName=e}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $e{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$e._jsonSchemaVersion}}static fromJSON(e){if(or(e,$e._jsonSchema))return new $e(e.latitude,e.longitude)}}$e._jsonSchemaVersion="firestore/geoPoint/1.0",$e._jsonSchema={type:ce("string",$e._jsonSchemaVersion),latitude:ce("number"),longitude:ce("number")};/**
* @license
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class je{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(t,n){if(t.length!==n.length)return!1;for(let s=0;s<t.length;++s)if(t[s]!==n[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:je._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(or(e,je._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new je(e.vectorValues);throw new D(_.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}je._jsonSchemaVersion="firestore/vectorValue/1.0",je._jsonSchema={type:ce("string",je._jsonSchemaVersion),vectorValues:ce("object")};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const yy=/^__.*__$/;class vy{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new _t(e,this.data,this.fieldMask,t,this.fieldTransforms):new cr(e,this.data,t,this.fieldTransforms)}}class sh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new _t(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ih(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ac:r})}}class Ea{constructor(e,t,n,s,a,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ea({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var t;const n=(t=this.path)==null?void 0:t.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){var t;const n=(t=this.path)==null?void 0:t.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return as(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(ih(this.Ac)&&yy.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class wy{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Is(e)}Cc(e,t,n,s=!1){return new Ea({Ac:e,methodName:t,Dc:n,path:ge.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ta(r){const e=r._freezeSettings(),t=Is(r._databaseId);return new wy(r._databaseId,!!e.ignoreUndefinedProperties,t)}function by(r,e,t,n,s,a={}){const o=r.Cc(a.merge||a.mergeFields?2:0,e,t,s);Ia("Data must be an object, but it was:",o,n);const l=ah(n,o);let u,d;if(a.merge)u=new Ne(o.fieldMask),d=o.fieldTransforms;else if(a.mergeFields){const p=[];for(const m of a.mergeFields){const x=Bi(e,m,t);if(!o.contains(x))throw new D(_.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);ch(p,x)||p.push(x)}u=new Ne(p),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new vy(new Ae(l),u,d)}class As extends ba{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof As}}function Ey(r,e,t,n){const s=r.Cc(1,e,t);Ia("Data must be an object, but it was:",s,n);const a=[],o=Ae.empty();St(n,(u,d)=>{const p=xa(e,u,t);d=Se(d);const m=s.yc(p);if(d instanceof As)a.push(p);else{const x=dr(d,m);x!=null&&(a.push(p),o.set(p,x))}});const l=new Ne(a);return new sh(o,l,s.fieldTransforms)}function Ty(r,e,t,n,s,a){const o=r.Cc(1,e,t),l=[Bi(e,n,t)],u=[s];if(a.length%2!=0)throw new D(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let x=0;x<a.length;x+=2)l.push(Bi(e,a[x])),u.push(a[x+1]);const d=[],p=Ae.empty();for(let x=l.length-1;x>=0;--x)if(!ch(d,l[x])){const A=l[x];let N=u[x];N=Se(N);const L=o.yc(A);if(N instanceof As)d.push(A);else{const R=dr(N,L);R!=null&&(d.push(A),p.set(A,R))}}const m=new Ne(d);return new sh(p,m,o.fieldTransforms)}function Iy(r,e,t,n=!1){return dr(t,r.Cc(n?4:3,e))}function dr(r,e){if(oh(r=Se(r)))return Ia("Unsupported field value:",e,r),ah(r,e);if(r instanceof ba)return function(t,n){if(!ih(n.Ac))throw n.Sc(`${t._methodName}() can only be used with update() and set()`);if(!n.path)throw n.Sc(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(n);s&&n.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(t,n){const s=[];let a=0;for(const o of t){let l=dr(o,n.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(r,e)}return function(t,n){if((t=Se(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return lm(n.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=Z.fromDate(t);return{timestampValue:ns(n.serializer,s)}}if(t instanceof Z){const s=new Z(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ns(n.serializer,s)}}if(t instanceof $e)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof De)return{bytesValue:Iu(n.serializer,t._byteString)};if(t instanceof le){const s=n.databaseId,a=t.firestore._databaseId;if(!a.isEqual(s))throw n.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ia(t.firestore._databaseId||n.databaseId,t._key.path)}}if(t instanceof je)return function(s,a){return{mapValue:{fields:{[Yl]:{stringValue:Zl},[Yr]:{arrayValue:{values:s.toArray().map(o=>{if(typeof o!="number")throw a.Sc("VectorValues must only contain numeric values.");return ta(a.serializer,o)})}}}}}}(t,n);throw n.Sc(`Unsupported field value: ${ps(t)}`)}(r,e)}function ah(r,e){const t={};return Gl(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):St(r,(n,s)=>{const a=dr(s,e.mc(n));a!=null&&(t[n]=a)}),{mapValue:{fields:t}}}function oh(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Z||r instanceof $e||r instanceof De||r instanceof le||r instanceof ba||r instanceof je)}function Ia(r,e,t){if(!oh(t)||!zl(t)){const n=ps(t);throw n==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+n)}}function Bi(r,e,t){if((e=Se(e))instanceof Cs)return e._internalPath;if(typeof e=="string")return xa(r,e);throw as("Field path arguments must be of type string or ",r,!1,void 0,t)}const xy=new RegExp("[~\\*/\\[\\]]");function xa(r,e,t){if(e.search(xy)>=0)throw as(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Cs(...e.split("."))._internalPath}catch{throw as(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function as(r,e,t,n,s){const a=n&&!n.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(a||o)&&(u+=" (found",a&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new D(_.INVALID_ARGUMENT,l+r+u)}function ch(r,e){return r.some(t=>t.isEqual(e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class lh{constructor(e,t,n,s,a){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ks("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Sy extends lh{data(){return super.data()}}function ks(r,e){return typeof e=="string"?xa(r,e):e instanceof Cs?e._internalPath:e._delegate._internalPath}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _y(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new D(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sa{}class uh extends Sa{}function Xc(r,e,...t){let n=[];e instanceof Sa&&n.push(e),n=n.concat(t),function(s){const a=s.filter(l=>l instanceof _a).length,o=s.filter(l=>l instanceof Ns).length;if(a>1||a>0&&o>0)throw new D(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Ns extends uh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ns(e,t,n)}_apply(e){const t=this._parse(e);return hh(e._query,t),new qt(e.firestore,e.converter,ki(e._query,t))}_parse(e){const t=Ta(e.firestore);return function(n,s,a,o,l,u,d){let p;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new D(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Zc(d,u);const m=[];for(const x of d)m.push(Yc(o,n,x));p={arrayValue:{values:m}}}else p=Yc(o,n,d)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Zc(d,u),p=Iy(a,s,d,u==="in"||u==="not-in");return oe.create(l,u,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Cy(r,e,t){const n=e,s=ks("where",r);return Ns._create(s,n,t)}class _a extends Sa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _a(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Oe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(n,s){let a=n;const o=s.getFlattenedFilters();for(const l of o)hh(a,l),a=ki(a,l)}(e._query,t),new qt(e.firestore,e.converter,ki(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ca extends uh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ca(e,t)}_apply(e){const t=function(n,s,a){if(n.startAt!==null)throw new D(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(n.endAt!==null)throw new D(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tr(s,a)}(e._query,this._field,this._direction);return new qt(e.firestore,e.converter,function(n,s){const a=n.explicitOrderBy.concat([s]);return new wn(n.path,n.collectionGroup,a,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}(e._query,t))}}function Ay(r,e="asc"){const t=e,n=ks("orderBy",r);return Ca._create(n,t)}function Yc(r,e,t){if(typeof(t=Se(t))=="string"){if(t==="")throw new D(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ou(e)&&t.indexOf("/")!==-1)throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(W.fromString(t));if(!P.isDocumentKey(n))throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return fc(r,new P(n))}if(t instanceof le)return fc(r,t._key);throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ps(t)}.`)}function Zc(r,e){if(!Array.isArray(r)||r.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hh(r,e){const t=function(n,s){for(const a of n)for(const o of a.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(r.filters,function(n){switch(n){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new D(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ky{convertValue(e,t="none"){switch(Tt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Et(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return St(e,(s,a)=>{n[s]=this.convertValue(a,t)}),n}convertVectorValue(e){var t,n,s;const a=(s=(n=(t=e.fields)==null?void 0:t[Yr].arrayValue)==null?void 0:n.values)==null?void 0:s.map(o=>ie(o.doubleValue));return new je(a)}convertGeoPoint(e){return new $e(ie(e.latitude),ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ys(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Yn(e));default:return null}}convertTimestamp(e){const t=bt(e);return new Z(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=W.fromString(e);Q(ku(n),9688,{name:e});const s=new Zn(n.get(1),n.get(3)),a=new P(n.popFirst(5));return s.isEqual(t)||Je(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ny(r,e,t){let n;return n=r?r.toFirestore(e):e,n}class jn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ot extends lh{constructor(e,t,n,s,a,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ks("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(_.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ot._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()||(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),t}}Ot._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ot._jsonSchema={type:ce("string",Ot._jsonSchemaVersion),bundleSource:ce("string","DocumentSnapshot"),bundleName:ce("string"),bundle:ce("string")};class qr extends Ot{data(e={}){return super.data(e)}}class en{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new jn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new qr(this._firestore,this._userDataWriter,n.key,n,new jn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(n,s){if(n._snapshot.oldDocs.isEmpty()){let a=0;return n._snapshot.docChanges.map(o=>{const l=new qr(n._firestore,n._userDataWriter,o.doc.key,o.doc,new jn(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);return o.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const l=new qr(n._firestore,n._userDataWriter,o.doc.key,o.doc,new jn(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);let u=-1,d=-1;return o.type!==0&&(u=a.indexOf(o.doc.key),a=a.delete(o.doc.key)),o.type!==1&&(a=a.add(o.doc),d=a.indexOf(o.doc.key)),{type:Dy(o.type),doc:l,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(_.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=en._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(a=>{a._document!==null&&(t.push(a._document),n.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Dy(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ry(r){r=Xe(r,le);const e=Xe(r.firestore,En);return dy(wa(e),r._key).then(t=>Oy(e,r,t))}en._jsonSchemaVersion="firestore/querySnapshot/1.0",en._jsonSchema={type:ce("string",en._jsonSchemaVersion),bundleSource:ce("string","QuerySnapshot"),bundleName:ce("string"),bundle:ce("string")};class dh extends ky{constructor(e){super(),this.firestore=e}convertBytes(e){return new De(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function mi(r){r=Xe(r,qt);const e=Xe(r.firestore,En),t=wa(e),n=new dh(e);return _y(r._query),fy(t,r._query).then(s=>new en(e,n,r,s))}function Ly(r,e,t,...n){r=Xe(r,le);const s=Xe(r.firestore,En),a=Ta(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof Cs?Ty(a,"updateDoc",r._key,e,t,n):Ey(a,"updateDoc",r._key,e),Aa(s,[o.toMutation(r._key,Le.exists(!0))])}function el(r){return Aa(Xe(r.firestore,En),[new na(r._key,Le.none())])}function tl(r,e){const t=Xe(r.firestore,En),n=jr(r),s=Ny(r.converter,e);return Aa(t,[by(Ta(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Le.exists(!1))]).then(()=>n)}function Aa(r,e){return function(t,n){const s=new Qe;return t.asyncQueue.enqueueAndForget(async()=>ey(await hy(t),n,s)),s.promise}(wa(r),e)}function Oy(r,e,t){const n=t.docs.get(e._key),s=new dh(r);return new Ot(r,s,e._key,n,new jn(t.hasPendingWrites,t.fromCache),e.converter)}(function(r,e=!0){(function(t){gn=t})(mn),an(new Ut("firestore",(t,{instanceIdentifier:n,options:s})=>{const a=t.getProvider("app").getImmediate(),o=new En(new Ep(t.getProvider("auth-internal")),new xp(a,t.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new D(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zn(l.options.projectId,u)}(a,n),a);return s={useFetchStreams:e,...s},o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),gt(ec,tc,r),gt(ec,tc,"esm2020")})();var Py="firebase",My="12.4.0";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/gt(Py,My,"app");function fh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uy=fh,ph=new ir("auth","Firebase",fh());/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const os=new zi("@firebase/auth");function Vy(r,...e){os.logLevel<=j.WARN&&os.warn(`Auth (${mn}): ${r}`,...e)}function zr(r,...e){os.logLevel<=j.ERROR&&os.error(`Auth (${mn}): ${r}`,...e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ze(r,...e){throw ka(r,...e)}function qe(r,...e){return ka(r,...e)}function mh(r,e,t){const n={...Uy(),[e]:t};return new ir("auth","Firebase",n).create(e,{appName:r.name})}function Pt(r){return mh(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ka(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return ph.create(r,...e)}function U(r,e,...t){if(!r)throw ka(e,...t)}function Ge(r){const e="INTERNAL ASSERTION FAILED: "+r;throw zr(e),new Error(e)}function et(r,e){r||Ge(e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $i(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function Fy(){return nl()==="http:"||nl()==="https:"}function nl(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function By(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fy()||Xd()||"connection"in navigator)?navigator.onLine:!0}function $y(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fr{constructor(e,t){this.shortDelay=e,this.longDelay=t,et(t>e,"Short delay should be less than long delay!"),this.isMobile=Qd()||Yd()}get(){return By()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Na(r,e){et(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class gh{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const jy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const qy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zy=new fr(3e4,6e4);function Da(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Tn(r,e,t,n,s={}){return yh(r,s,async()=>{let a={},o={};n&&(e==="GET"?o=n:a={body:JSON.stringify(n)});const l=ar({key:r.config.apiKey,...o}).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const d={method:e,headers:u,...a};return Jd()||(d.referrerPolicy="no-referrer"),r.emulatorConfig&&pn(r.emulatorConfig.host)&&(d.credentials="include"),gh.fetch()(await vh(r,r.config.apiHost,t,l),d)})}async function yh(r,e,t){r._canInitEmulator=!1;const n={...jy,...e};try{const s=new Gy(r),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw Mr(r,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const l=a.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mr(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Mr(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw Mr(r,"user-disabled",o);const p=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw mh(r,p,d);Ze(r,p)}}catch(s){if(s instanceof tt)throw s;Ze(r,"network-request-failed",{message:String(s)})}}async function Hy(r,e,t,n,s={}){const a=await Tn(r,e,t,n,s);return"mfaPendingCredential"in a&&Ze(r,"multi-factor-auth-required",{_serverResponse:a}),a}async function vh(r,e,t,n){const s=`${e}${t}?${n}`,a=r,o=a.config.emulator?Na(r.config,s):`${r.config.apiScheme}://${s}`;return qy.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(o).toString():o}class Gy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(qe(this.auth,"network-request-failed")),zy.get())})}}function Mr(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=qe(r,e,n);return s.customData._tokenResponse=t,s}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Ky(r,e){return Tn(r,"POST","/v1/accounts:delete",e)}async function cs(r,e){return Tn(r,"POST","/v1/accounts:lookup",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Wn(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qy(r,e=!1){const t=Se(r),n=await t.getIdToken(e),s=Ra(n);U(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:s,token:n,authTime:Wn(gi(s.auth_time)),issuedAtTime:Wn(gi(s.iat)),expirationTime:Wn(gi(s.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function gi(r){return Number(r)*1e3}function Ra(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return zr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Il(t);return s?JSON.parse(s):(zr("Failed to decode base64 JWT payload"),null)}catch(s){return zr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rl(r){const e=Ra(r);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function sr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof tt&&Wy(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Wy({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const t=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ji{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function ls(r){var e;const t=r.auth,n=await r.getIdToken(),s=await sr(r,cs(t,{idToken:n}));U(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];r._notifyReloadListener(a);const o=(e=a.providerUserInfo)!=null&&e.length?wh(a.providerUserInfo):[],l=Yy(r.providerData,o),u=r.isAnonymous,d=!(r.email&&a.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new ji(a.createdAt,a.lastLoginAt),isAnonymous:p};Object.assign(r,m)}async function Xy(r){const e=Se(r);await ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yy(r,e){return[...r.filter(t=>!e.some(n=>n.providerId===t.providerId)),...e]}function wh(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Zy(r,e){const t=await yh(r,{},async()=>{const n=ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=r.config,o=await vh(r,s,"/v1/token",`key=${a}`),l=await r._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:n};return r.emulatorConfig&&pn(r.emulatorConfig.host)&&(u.credentials="include"),gh.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ev(r,e){return Tn(r,"POST","/v2/accounts:revokeToken",Da(r,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=rl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:a}=await Zy(e,t);this.updateTokensAndExpiration(n,s,Number(a))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:a}=t,o=new tn;return n&&(U(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),a&&(U(typeof a=="number","internal-error",{appName:e}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tn,this.toJSON())}_performRefresh(){return Ge("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ct(r,e){U(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Re{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new Jy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ji(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await sr(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qy(this,e)}reload(){return Xy(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Re({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ls(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(Pt(this.auth));const e=await this.getIdToken();return await sr(this,Ky(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,a=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:x,isAnonymous:A,providerData:N,stsTokenManager:L}=t;U(m&&L,e,"internal-error");const R=tn.fromJSON(this.name,L);U(typeof m=="string",e,"internal-error"),ct(n,e.name),ct(s,e.name),U(typeof x=="boolean",e,"internal-error"),U(typeof A=="boolean",e,"internal-error"),ct(a,e.name),ct(o,e.name),ct(l,e.name),ct(u,e.name),ct(d,e.name),ct(p,e.name);const B=new Re({uid:m,auth:e,email:s,emailVerified:x,displayName:n,isAnonymous:A,photoURL:o,phoneNumber:a,tenantId:l,stsTokenManager:R,createdAt:d,lastLoginAt:p});return N&&Array.isArray(N)&&(B.providerData=N.map(H=>({...H}))),u&&(B._redirectEventId=u),B}static async _fromIdTokenResponse(e,t,n=!1){const s=new tn;s.updateFromServerResponse(t);const a=new Re({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await ls(a),a}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];U(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?wh(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),l=new tn;l.updateFromIdToken(n);const u=new Re({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ji(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(u,d),u}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const sl=new Map;function Ke(r){et(r instanceof Function,"Expected a class definition");let e=sl.get(r);return e?(et(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,sl.set(r,e),e)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bh.type="NONE";const il=bh;/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Hr(r,e,t){return`firebase:${r}:${e}:${t}`}class nn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:a}=this.auth;this.fullUserKey=Hr(this.userKey,s.apiKey,a),this.fullPersistenceKey=Hr("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await cs(this.auth,{idToken:e}).catch(()=>{});return t?Re._fromGetAccountInfoResponse(this.auth,t,e):null}return Re._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new nn(Ke(il),e,n);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let a=s[0]||Ke(il);const o=Hr(n,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(o);if(p){let m;if(typeof p=="string"){const x=await cs(e,{idToken:p}).catch(()=>{});if(!x)break;m=await Re._fromGetAccountInfoResponse(e,x,p)}else m=Re._fromJSON(e,p);d!==a&&(l=m),a=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!u.length?new nn(a,e,n):(a=u[0],l&&await a._set(o,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==a)try{await d._remove(o)}catch{}})),new nn(a,e,n))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function al(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_h(e))return"Blackberry";if(Ch(e))return"Webos";if(Th(e))return"Safari";if((e.includes("chrome/")||Ih(e))&&!e.includes("edge/"))return"Chrome";if(Sh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Eh(r=Te()){return/firefox\//i.test(r)}function Th(r=Te()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ih(r=Te()){return/crios\//i.test(r)}function xh(r=Te()){return/iemobile/i.test(r)}function Sh(r=Te()){return/android/i.test(r)}function _h(r=Te()){return/blackberry/i.test(r)}function Ch(r=Te()){return/webos/i.test(r)}function La(r=Te()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function tv(r=Te()){var e;return La(r)&&!!((e=window.navigator)!=null&&e.standalone)}function nv(){return Zd()&&document.documentMode===10}function Ah(r=Te()){return La(r)||Sh(r)||Ch(r)||_h(r)||/windows phone/i.test(r)||xh(r)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kh(r,e=[]){let t;switch(r){case"Browser":t=al(Te());break;case"Worker":t=`${al(Te())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mn}/${n}`}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=a=>new Promise((o,l)=>{try{const u=e(a);o(u)}catch(u){l(u)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function sv(r,e={}){return Tn(r,"GET","/v2/passwordPolicy",Da(r,e))}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const iv=6;class av{constructor(e){var t;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??iv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((t=e.allowedNonAlphanumericCharacters)==null?void 0:t.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ov{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ol(this),this.idTokenSubscription=new ol(this),this.beforeStateQueue=new rv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ph,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ke(t)),this._initializationPromise=this.queue(async()=>{var n,s,a;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await cs(this,{idToken:e}),n=await Re._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ve(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)==null?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&u!=null&&u.user&&(s=u.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ls(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$y()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(Pt(this));const t=e?Se(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(Pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(Pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ke(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sv(this),t=new av(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ir("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await ev(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ke(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[Ke(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(()=>{o||a(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&Vy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Oa(r){return Se(r)}class ol{constructor(e){this.auth=e,this.observer=null,this.addObserver=cf(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cv(r){Pa=r}function lv(r){return Pa.loadJS(r)}function uv(){return Pa.gapiScript}function hv(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function dv(r,e){const t=Gi(r,"auth");if(t.isInitialized()){const n=t.getImmediate(),s=t.getOptions();if(Mt(s,e??{}))return n;Ze(n,"already-initialized")}return t.initialize({options:e})}function fv(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Ke);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function pv(r,e,t){const n=Oa(r);U(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,a=Nh(e),{host:o,port:l}=mv(e),u=l===null?"":`:${l}`,d={url:`${a}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){U(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),U(Mt(d,n.config.emulator)&&Mt(p,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=p,n.settings.appVerificationDisabledForTesting=!0,pn(o)?(Cl(`${a}//${o}${u}`),Al("Auth",!0)):gv()}function Nh(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function mv(r){const e=Nh(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const a=s[1];return{host:a,port:cl(n.substr(a.length+1))}}else{const[a,o]=n.split(":");return{host:a,port:cl(o)}}}function cl(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function gv(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Dh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ge("not implemented")}_getIdTokenResponse(e){return Ge("not implemented")}_linkToIdToken(e,t){return Ge("not implemented")}_getReauthenticationResolver(e){return Ge("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function rn(r,e){return Hy(r,"POST","/v1/accounts:signInWithIdp",Da(r,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const yv="http://localhost";class Bt extends Dh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Bt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...a}=t;if(!n||!s)return null;const o=new Bt(n,s);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return rn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,rn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rn(e,t)}buildRequest(){const e={requestUri:yv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ar(t)}return e}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Rh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pr extends Rh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class lt extends pr{constructor(){super("facebook.com")}static credential(e){return Bt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ut extends pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Bt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ut.credential(t,n)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ht extends pr{constructor(){super("github.com")}static credential(e){return Bt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.GITHUB_SIGN_IN_METHOD="github.com";ht.PROVIDER_ID="github.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class dt extends pr{constructor(){super("twitter.com")}static credential(e,t){return Bt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return dt.credential(t,n)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const a=await Re._fromIdTokenResponse(e,n,s),o=ll(n);return new fn({user:a,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=ll(n);return new fn({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function ll(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class us extends tt{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,us.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new us(e,t,n,s)}}function Lh(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?us._fromErrorAndOperation(r,s,e,n):s})}async function vv(r,e,t=!1){const n=await sr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return fn._forOperation(r,"link",n)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function wv(r,e,t=!1){const{auth:n}=r;if(Ve(n.app))return Promise.reject(Pt(n));const s="reauthenticate";try{const a=await sr(r,Lh(n,s,e,r),t);U(a.idToken,n,"internal-error");const o=Ra(a.idToken);U(o,n,"internal-error");const{sub:l}=o;return U(r.uid===l,n,"user-mismatch"),fn._forOperation(r,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Ze(n,"user-mismatch"),a}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function bv(r,e,t=!1){if(Ve(r.app))return Promise.reject(Pt(r));const n="signIn",s=await Lh(r,n,e),a=await fn._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(a.user),a}function Ev(r,e,t,n){return Se(r).onIdTokenChanged(e,t,n)}function Tv(r,e,t){return Se(r).beforeAuthStateChanged(e,t)}const hs="__sak";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Oh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hs,"1"),this.storage.removeItem(hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Iv=1e3,xv=10;class Ph extends Oh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ah(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},a=this.storage.getItem(n);nv()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xv):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Iv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ph.type="LOCAL";const Sv=Ph;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Mh extends Oh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Mh.type="SESSION";const Uh=Mh;/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _v(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ds{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Ds(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:a}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const l=Array.from(o).map(async d=>d(t.origin,a)),u=await _v(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ds.receivers=[];/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ma(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,o;return new Promise((l,u)=>{const d=Ma("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(m){const x=m;if(x.data.eventId===d)switch(x.data.status){case"ack":clearTimeout(p),a=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),l(x.data.response);break;default:clearTimeout(p),clearTimeout(a),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ze(){return window}function Av(r){ze().location.href=r}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Vh(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function kv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nv(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function Dv(){return Vh()?self:null}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Fh="firebaseLocalStorageDb",Rv=1,ds="firebaseLocalStorage",Bh="fbase_key";class mr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Rs(r,e){return r.transaction([ds],e?"readwrite":"readonly").objectStore(ds)}function Lv(){const r=indexedDB.deleteDatabase(Fh);return new mr(r).toPromise()}function qi(){const r=indexedDB.open(Fh,Rv);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(ds,{keyPath:Bh})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(ds)?e(n):(n.close(),await Lv(),e(await qi()))})})}async function ul(r,e,t){const n=Rs(r,!0).put({[Bh]:e,value:t});return new mr(n).toPromise()}async function Ov(r,e){const t=Rs(r,!1).get(e),n=await new mr(t).toPromise();return n===void 0?null:n.value}function hl(r,e){const t=Rs(r,!0).delete(e);return new mr(t).toPromise()}const Pv=800,Mv=3;class $h{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Mv)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ds._getInstance(Dv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await kv(),!this.activeServiceWorker)return;this.sender=new Cv(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(e=n[0])!=null&&e.fulfilled&&(t=n[0])!=null&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qi();return await ul(e,hs,"1"),await hl(e,hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ul(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Ov(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Rs(s,!1).getAll();return new mr(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$h.type="LOCAL";const Uv=$h;new fr(3e4,6e4);/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Vv(r,e){return e?Ke(e):(U(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ua extends Dh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fv(r){return bv(r.auth,new Ua(r),r.bypassAuthState)}function Bv(r){const{auth:e,user:t}=r;return U(t,e,"internal-error"),wv(t,new Ua(r),r.bypassAuthState)}async function $v(r){const{auth:e,user:t}=r;return U(t,e,"internal-error"),vv(t,new Ua(r),r.bypassAuthState)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class jh{constructor(e,t,n,s,a=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:a,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fv;case"linkViaPopup":case"linkViaRedirect":return $v;case"reauthViaPopup":case"reauthViaRedirect":return Bv;default:Ze(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const jv=new fr(2e3,1e4);class Yt extends jh{constructor(e,t,n,s,a){super(e,t,s,a),this.provider=n,this.authWindow=null,this.pollId=null,Yt.currentPopupAction&&Yt.currentPopupAction.cancel(),Yt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=Ma();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jv.get())};e()}}Yt.currentPopupAction=null;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const qv="pendingRedirect",Gr=new Map;class zv extends jh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Gr.get(this.auth._key());if(!e){try{const t=await Hv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Gr.set(this.auth._key(),e)}return this.bypassAuthState||Gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hv(r,e){const t=Qv(e),n=Kv(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Gv(r,e){Gr.set(r._key(),e)}function Kv(r){return Ke(r._redirectPersistence)}function Qv(r){return Hr(qv,r.config.apiKey,r.name)}async function Wv(r,e,t=!1){if(Ve(r.app))return Promise.reject(Pt(r));const n=Oa(r),s=Vv(n,e),a=await new zv(n,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Jv=10*60*1e3;class Xv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!qh(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(qe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jv&&this.cachedEventUids.clear(),this.cachedEventUids.has(dl(e))}saveEventToCache(e){this.cachedEventUids.add(dl(e)),this.lastProcessedEventTime=Date.now()}}function dl(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function qh({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yv(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qh(r);default:return!1}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Zv(r,e={}){return Tn(r,"GET","/v1/projects",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ew=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tw=/^https?/;async function nw(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Zv(r);for(const t of e)try{if(rw(t))return}catch{}Ze(r,"unauthorized-domain")}function rw(r){const e=$i(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!tw.test(t))return!1;if(ew.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const sw=new fr(3e4,6e4);function fl(){const r=ze().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function iw(r){return new Promise((e,t)=>{var n,s,a;function o(){fl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fl(),t(qe(r,"network-request-failed"))},timeout:sw.get()})}if((s=(n=ze().gapi)==null?void 0:n.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((a=ze().gapi)!=null&&a.load)o();else{const l=hv("iframefcb");return ze()[l]=()=>{gapi.load?o():t(qe(r,"network-request-failed"))},lv(`${uv()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Kr=null,e})}let Kr=null;function aw(r){return Kr=Kr||iw(r),Kr}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ow=new fr(5e3,15e3),cw="__/auth/iframe",lw="emulator/auth/iframe",uw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dw(r){const e=r.config;U(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Na(e,lw):`https://${r.config.authDomain}/${cw}`,n={apiKey:e.apiKey,appName:r.name,v:mn},s=hw.get(r.config.apiHost);s&&(n.eid=s);const a=r._getFrameworks();return a.length&&(n.fw=a.join(",")),`${t}?${ar(n).slice(1)}`}async function fw(r){const e=await aw(r),t=ze().gapi;return U(t,r,"internal-error"),e.open({where:document.body,url:dw(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uw,dontclear:!0},n=>new Promise(async(s,a)=>{await n.restyle({setHideOnLeave:!1});const o=qe(r,"network-request-failed"),l=ze().setTimeout(()=>{a(o)},ow.get());function u(){ze().clearTimeout(l),s(n)}n.ping(u).then(u,()=>{a(o)})}))}/**
* @license
* Copyright 2020 Google LLC.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const pw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mw=500,gw=600,yw="_blank",vw="http://localhost";class pl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ww(r,e,t,n=mw,s=gw){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const u={...pw,width:n.toString(),height:s.toString(),top:a,left:o},d=Te().toLowerCase();t&&(l=Ih(d)?yw:t),Eh(d)&&(e=e||vw,u.scrollbars="yes");const p=Object.entries(u).reduce((x,[A,N])=>`${x}${A}=${N},`,"");if(tv(d)&&l!=="_self")return bw(e||"",l),new pl(null);const m=window.open(e||"",l,p);U(m,r,"popup-blocked");try{m.focus()}catch{}return new pl(m)}function bw(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ew="__/auth/handler",Tw="emulator/auth/handler",Iw=encodeURIComponent("fac");async function ml(r,e,t,n,s,a){U(r.config.authDomain,r,"auth-domain-config-required"),U(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:mn,eventId:s};if(e instanceof Rh){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",of(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof pr){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}r.tenantId&&(o.tid=r.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await r._getAppCheckToken(),d=u?`#${Iw}=${encodeURIComponent(u)}`:"";return`${xw(r)}?${ar(l).slice(1)}${d}`}function xw({config:r}){return r.emulator?Na(r,Tw):`https://${r.authDomain}/${Ew}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const yi="webStorageSupport";class Sw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uh,this._completeRedirectFn=Wv,this._overrideRedirectResult=Gv}async _openPopup(e,t,n,s){var a;et((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await ml(e,t,n,$i(),s);return ww(e,o,Ma())}async _openRedirect(e,t,n,s){await this._originValidation(e);const a=await ml(e,t,n,$i(),s);return Av(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(et(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await fw(e),n=new Xv(e);return t.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yi,{type:yi},n=>{var s;const a=(s=n==null?void 0:n[0])==null?void 0:s[yi];a!==void 0&&t(!!a),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ah()||Th()||La()}}const _w=Sw;var gl="@firebase/auth",yl="1.11.0";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Aw(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kw(r){an(new Ut("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=n.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:l,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kh(r)},d=new ov(n,s,a,u);return fv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),an(new Ut("auth-internal",e=>{const t=Oa(e.getProvider("auth").getImmediate());return(n=>new Cw(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(gl,yl,Aw(r)),gt(gl,yl,"esm2020")}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Nw=5*60,Dw=_l("authIdTokenMaxAge")||Nw;let vl=null;const Rw=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Dw)return;const s=t==null?void 0:t.token;vl!==s&&(vl=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Lw(r=Rl()){const e=Gi(r,"auth");if(e.isInitialized())return e.getImmediate();const t=dv(r,{popupRedirectResolver:_w,persistence:[Uv,Sv,Uh]}),n=_l("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(n,location.origin);if(location.origin===a.origin){const o=Rw(a.toString());Tv(t,o,()=>o(t.currentUser)),Ev(t,l=>o(l))}}const s=xl("auth");return s&&pv(t,`http://${s}`),t}function Ow(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}cv({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const a=qe("internal-error");a.customData=s,t(a)},n.type="text/javascript",n.charset="UTF-8",Ow().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kw("Browser");const Pw={apiKey:"AIzaSyAYy5QZzuXAoTGu2NVO6wAx1Q3tXMqO8SI",authDomain:"splitwiseclone-d9135.firebaseapp.com",projectId:"splitwiseclone-d9135",storageBucket:"splitwiseclone-d9135.firebasestorage.app",messagingSenderId:"1067457595825",appId:"1:1067457595825:web:54d33ba82260f11ef39590"},zh=Dl(Pw),wl=my(zh);Lw(zh);const sn=!1;console.log("Firebase env:","true");console.log("Using Firebase:",sn);class Mw{constructor(){G(this,"usersCollection",Kc(wl,"users")),G(this,"expensesCollection",Kc(wl,"expenses"))}async getUsers(){try{return(await mi(this.usersCollection)).docs.map(e=>{var t;return{id:e.id,...e.data(),createdAt:((t=e.data().createdAt)==null?void 0:t.toDate())||new Date}})}catch(e){throw console.error("Error getting users:",e),e}}async getUserByUsername(e){var t;try{const n=Xc(this.usersCollection,Cy("username","==",e)),s=await mi(n);if(s.empty)return null;const a=s.docs[0];return{id:a.id,...a.data(),createdAt:((t=a.data().createdAt)==null?void 0:t.toDate())||new Date}}catch(n){throw console.error("Error getting user by username:",n),n}}async createUser(e){try{return{id:(await tl(this.usersCollection,{...e,createdAt:new Date})).id,...e,createdAt:new Date}}catch(t){throw console.error("Error creating user:",t),t}}async updateUser(e,t){var n,s;try{const a=jr(this.usersCollection,e);await Ly(a,t);const o=await Ry(a);return{id:o.id,...o.data(),createdAt:((s=(n=o.data())==null?void 0:n.createdAt)==null?void 0:s.toDate())||new Date}}catch(a){throw console.error("Error updating user:",a),a}}async deleteUser(e){try{const t=jr(this.usersCollection,e);await el(t)}catch(t){throw console.error("Error deleting user:",t),t}}async getExpenses(){try{const e=Xc(this.expensesCollection,Ay("date","desc"));return(await mi(e)).docs.map(t=>{var n;return{id:t.id,...t.data(),date:((n=t.data().date)==null?void 0:n.toDate())||new Date}})}catch(e){throw console.error("Error getting expenses:",e),e}}async createExpense(e){try{return{id:(await tl(this.expensesCollection,{...e,date:new Date(e.date)})).id,...e}}catch(t){throw console.error("Error creating expense:",t),t}}async deleteExpense(e){try{const t=jr(this.expensesCollection,e);await el(t)}catch(t){throw console.error("Error deleting expense:",t),t}}async authenticateUser(e,t){try{const n=await this.getUserByUsername(e);if(n&&n.password===t){const{password:s,...a}=n;return a}return null}catch(n){throw console.error("Error authenticating user:",n),n}}}new Mw;const Hh=class qn{constructor(){}async login(e){try{let t=null;if(!sn&&(t=this.authenticateWithLocalStorage(e),!t))throw new Error("Invalid username or password");if(!t)throw new Error("User not found");const n={isAuthenticated:!0,currentUser:{id:t.id,name:t.name,username:t.username,role:t.isAdmin?"admin":"user",createdAt:new Date(t.createdAt||Date.now()),isActive:!0,avatar:t.avatar,qrCode:t.qrCode},token:this.generateToken()};return localStorage.setItem(qn.STORAGE_KEY,JSON.stringify(n)),n}catch(t){throw new Error(t instanceof Error?t.message:"Login failed")}}logout(){localStorage.removeItem(qn.STORAGE_KEY)}getCurrentAuth(){const e=localStorage.getItem(qn.STORAGE_KEY);return e?JSON.parse(e):{isAuthenticated:!1,currentUser:null}}async createUser(e){try{if(!sn){const t=this.getLocalUsers();if(t.some(o=>o.username===e.username))throw new Error("Username already exists");const n={id:`user-${Date.now()}`,name:e.name,username:e.username,role:"user",createdAt:new Date,isActive:!0,password:e.password};t.push(n),this.saveLocalUsers(t);const{password:s,...a}=n;return a}}catch(t){throw new Error(t instanceof Error?t.message:"Failed to create user")}}async getAllUsers(){try{if(!sn)return this.getLocalUsers()}catch(e){return console.error("Failed to fetch users:",e),this.getLocalUsers()}}async updateUser(e,t){var n;try{const s={...t,isAdmin:t.role==="admin"};delete s.role;const a=await $o.updateUser(e,s);if(a.success){const o={...a.user,role:a.user.isAdmin?"admin":"user",createdAt:new Date(a.user.createdAt||Date.now()),isActive:!0},l=this.getCurrentAuth();if(((n=l.currentUser)==null?void 0:n.id)===e){const u={...l,currentUser:o};localStorage.setItem(qn.STORAGE_KEY,JSON.stringify(u))}return o}else throw new Error(a.message||"Failed to update user")}catch(s){throw new Error(s instanceof Error?s.message:"Failed to update user")}}async deleteUser(e){try{await $o.deleteUser(e)}catch(t){throw new Error(t instanceof Error?t.message:"Failed to delete user")}}async updateQRCode(e,t){try{await this.updateUser(e,{qrCode:t||void 0})}catch(n){throw new Error(n instanceof Error?n.message:"Failed to update QR code")}}generateToken(){return`token_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}isAdmin(e){return(e==null?void 0:e.role)==="admin"}authenticateWithLocalStorage(e){if(console.log("Authenticating with localStorage:",e),e.username==="admin"&&e.password==="admin123")return console.log("Admin login successful"),{id:"admin-1",name:"Administrator",username:"admin",role:"admin",createdAt:new Date,isActive:!0};const t=this.getLocalUsers();console.log("Stored users:",t);const n=t.find(s=>s.username===e.username&&s.password===e.password);return console.log("Found user:",n),n||null}getLocalUsers(){const e=localStorage.getItem("splitwise_users");return e?JSON.parse(e).map(t=>({...t,createdAt:new Date(t.createdAt),role:t.isAdmin?"admin":"user"})):[]}saveLocalUsers(e){const t=e.map(n=>({...n,isAdmin:n.role==="admin",password:n.password}));localStorage.setItem("splitwise_users",JSON.stringify(t))}};G(Hh,"STORAGE_KEY","splitwise_auth");let Uw=Hh;class Vw{constructor(){G(this,"users",[]),G(this,"expenses",[]),G(this,"completedSettlements",[]),G(this,"currentUser",null),G(this,"addExpenseModal"),G(this,"authService"),G(this,"currentFilter",""),this.authService=new Uw;const e=this.authService.getCurrentAuth();e.isAuthenticated&&e.currentUser&&(this.currentUser=e.currentUser,this.initializeData()),this.addExpenseModal=new si(this.users,this.currentUser,t=>this.addExpense(t)),this.render(),this.setupEventListeners(),window.deleteExpense=t=>this.deleteExpense(t),window.showUserQRCode=t=>this.showUserQRCode(t),window.markSettlementComplete=(t,n,s)=>this.markSettlementComplete(t,n,s),window.editUser=t=>this.editUser(t),window.addEventListener("qr-code-updated",t=>{this.handleQRCodeUpdate(t.detail.userId,t.detail.qrCode)})}async initializeData(){try{this.users=await this.authService.getAllUsers(),this.users=this.users.filter(e=>e.isActive),this.expenses=await this.loadExpenses(),this.completedSettlements=this.loadCompletedSettlements()}catch(e){console.error("Failed to initialize data:",e),this.users=[],this.expenses=[],this.completedSettlements=this.loadCompletedSettlements()}}async loadExpenses(){try{if(!sn){const e=localStorage.getItem("splitwise_expenses");return e?JSON.parse(e).map(t=>({...t,date:new Date(t.date)})):[]}}catch(e){console.error("Failed to load expenses:",e);const t=localStorage.getItem("splitwise_expenses");return t?JSON.parse(t).map(n=>({...n,date:new Date(n.date)})):[]}}async saveExpenses(){localStorage.setItem("splitwise_expenses",JSON.stringify(this.expenses))}loadCompletedSettlements(){const e=localStorage.getItem("splitwise_completed_settlements");return e?JSON.parse(e).map(t=>({...t,createdAt:new Date(t.createdAt),settledAt:t.settledAt?new Date(t.settledAt):void 0})):[]}saveCompletedSettlements(){localStorage.setItem("splitwise_completed_settlements",JSON.stringify(this.completedSettlements))}render(){const e=document.getElementById("app");if(!this.currentUser){e.innerHTML=this.renderLoginScreen();return}e.innerHTML=`
      <div class="min-h-screen bg-gray-50">
        <!-- Header -->
        <header class="bg-white shadow-sm border-b sticky top-0 z-40">
          <div class="max-w-6xl mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <h1 class="text-3xl font-bold text-splitwise-green">💰 Splitwise Clone</h1>
                <span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                  Beta v1.0
                </span>
              </div>
              <div class="flex items-center space-x-4">
                ${this.currentUser.role==="admin"?`
                  <button id="userManagementBtn" class="btn-secondary flex items-center space-x-2">
                    <span>👥</span>
                    <span>Quản lý User</span>
                  </button>
                `:""}
                <div class="text-right">
                  <div class="text-sm text-gray-500">Xin chào,</div>
                  <div class="font-semibold text-gray-800">${this.currentUser.name}</div>
                  ${this.currentUser.role==="admin"?'<div class="text-xs text-red-600">👑 Admin</div>':""}
                </div>
                <button id="addExpenseBtn" class="btn-primary flex items-center space-x-2">
                  <span>➕</span>
                  <span>Thêm chi phí</span>
                </button>
                <button id="logoutBtn" class="btn-secondary flex items-center space-x-2">
                  <span>🚪</span>
                  <span>Đăng xuất</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div class="max-w-6xl mx-auto px-4 py-8">
          <!-- Stats Overview -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            ${this.renderStatsCards()}
          </div>

          <div class="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 gap-6">
            <!-- Balance Summary -->
            <div class="lg:col-span-1">
              <div id="balanceSection">
                ${this.renderBalanceSection()}
              </div>
            </div>

            <!-- Settlement Suggestions -->
            <div class="lg:col-span-1">
              <div id="settlementSection">
                ${this.renderSettlementSection()}
              </div>
            </div>

            <!-- Expenses List - Takes full width on smaller screens -->
            <div class="xl:col-span-2 lg:col-span-2 col-span-1">
              <div class="card">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h2 class="text-xl font-semibold flex items-center">
                    📋 Danh sách chi phí
                    <span class="ml-2 text-sm font-normal text-gray-500">
                      (${this.getFilteredExpenses().length} chi phí)
                    </span>
                  </h2>
                  <div class="flex items-center space-x-3">
                    <select id="filterCategory" class="input-field w-auto text-sm">
                      <option value="">🏷️ Tất cả danh mục</option>
                      <option value="food">🍽️ Ăn uống</option>
                      <option value="transportation">🚗 Di chuyển</option>
                      <option value="accommodation">🏠 Lưu trú</option>
                      <option value="entertainment">🎉 Giải trí</option>
                      <option value="shopping">🛍️ Mua sắm</option>
                      <option value="utilities">⚡ Tiện ích</option>
                      <option value="other">📦 Khác</option>
                    </select>
                    <button id="clearFilter" class="text-sm text-gray-500 hover:text-gray-700 ${this.currentFilter?"":"hidden"}">
                      ❌ Xóa bộ lọc
                    </button>
                  </div>
                </div>
                <div id="expensesList">
                  ${this.renderExpensesList()}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Add Expense Modal -->
        ${this.addExpenseModal.render()}
      </div>
    `,this.addExpenseModal.setupEventListeners()}renderLoginScreen(){return`
      <div class="min-h-screen bg-gray-50 flex items-center justify-center">
        <div class="max-w-md w-full mx-4">
          <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-splitwise-green mb-2">💰 Splitwise Clone</h1>
            <p class="text-gray-600">Ứng dụng chia sẻ chi phí thông minh</p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold text-center mb-6">🔐 Đăng nhập để tiếp tục</h2>
            
            <div class="space-y-4">
              <button id="showLoginBtn" class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Đăng nhập
              </button>
            </div>
          </div>
          
          <div class="mt-6 text-center text-sm text-gray-500">
            <p>✨ Chia sẻ chi phí dễ dàng cùng bạn bè</p>
            <p>📊 Theo dõi số dư và thanh toán thông minh</p>
          </div>
        </div>
      </div>
    `}renderStatsCards(){if(!this.currentUser)return"";const e=this.expenses.reduce((a,o)=>a+o.amount,0),t=this.expenses.filter(a=>a.paidBy===this.currentUser.id).reduce((a,o)=>a+o.amount,0),n=ri(this.expenses,this.users)[this.currentUser.id],s=n?n.totalOwed-n.totalOwes:0;return`
      <div class="card text-center">
        <div class="text-2xl mb-2">💰</div>
        <div class="text-2xl font-bold text-gray-800">${se(e)}</div>
        <div class="text-sm text-gray-600">Tổng chi phí</div>
      </div>
      
      <div class="card text-center">
        <div class="text-2xl mb-2">🎯</div>
        <div class="text-2xl font-bold text-gray-800">${se(t)}</div>
        <div class="text-sm text-gray-600">Bạn đã trả</div>
      </div>
      
      <div class="card text-center">
        <div class="text-2xl mb-2">${s>=0?"💚":"💔"}</div>
        <div class="text-2xl font-bold ${s>=0?"text-green-600":"text-red-600"}">
          ${s>=0?"+":""}${se(s)}
        </div>
        <div class="text-sm text-gray-600">Số dư của bạn</div>
      </div>
    `}renderBalanceSection(){if(!this.currentUser)return"";const e=ri(this.expenses,this.users),t=e[this.currentUser.id];return t?new kd(t,this.users,e).render():`
        <div class="card text-center py-8">
          <div class="text-4xl mb-4">🎉</div>
          <h2 class="text-xl font-semibold mb-2">Chưa có giao dịch nào</h2>
          <p class="text-gray-500">Thêm chi phí đầu tiên để bắt đầu!</p>
        </div>
      `}renderSettlementSection(){const e=ri(this.expenses,this.users);return new Nd(this.users,e,this.currentUser,this.completedSettlements).render()}renderExpensesList(){const e=this.getFilteredExpenses();return e.length===0?`
        <div class="text-center py-12">
          <div class="text-4xl mb-4">📝</div>
          <h3 class="text-lg font-medium text-gray-800 mb-2">
            ${this.currentFilter?"Không có chi phí nào trong danh mục này":"Chưa có chi phí nào"}
          </h3>
          <p class="text-gray-500 mb-4">
            ${this.currentFilter?"Thử chọn danh mục khác hoặc thêm chi phí mới":"Bắt đầu bằng cách thêm chi phí đầu tiên"}
          </p>
          <button onclick="document.getElementById('addExpenseBtn').click()" class="btn-primary">
            ➕ Thêm chi phí ngay
          </button>
        </div>
      `:e.map(t=>new Ad(t,this.users,this.currentUser,()=>this.deleteExpense(t.id)).render()).join("")}getFilteredExpenses(){return this.currentFilter?this.expenses.filter(e=>e.category===this.currentFilter):this.expenses}setupEventListeners(){var e,t,n,s,a,o;(e=document.getElementById("showLoginBtn"))==null||e.addEventListener("click",()=>{this.showLoginModal()}),(t=document.getElementById("logoutBtn"))==null||t.addEventListener("click",()=>{this.logout()}),(n=document.getElementById("userManagementBtn"))==null||n.addEventListener("click",()=>{this.showUserManagementModal()}),(s=document.getElementById("addExpenseBtn"))==null||s.addEventListener("click",()=>{this.addExpenseModal.show()}),(a=document.getElementById("filterCategory"))==null||a.addEventListener("change",l=>{this.currentFilter=l.target.value,this.updateExpensesList(),this.updateFilterControls()}),(o=document.getElementById("clearFilter"))==null||o.addEventListener("click",()=>{this.currentFilter="";const l=document.getElementById("filterCategory");l&&(l.value=""),this.updateExpensesList(),this.updateFilterControls()})}async addExpense(e){try{sn||this.expenses.unshift(e),await this.saveExpenses(),this.updateAll()}catch(t){console.error("Failed to add expense:",t),this.expenses.unshift(e),await this.saveExpenses(),this.updateAll()}}async deleteExpense(e){if(!this.currentUser||this.currentUser.role!=="admin"){alert("⚠️ Chỉ admin mới có thể xóa chi phí!");return}if(confirm("🗑️ Bạn có chắc chắn muốn xóa chi phí này không?"))try{this.expenses=this.expenses.filter(t=>t.id!==e),await this.saveExpenses(),this.updateAll()}catch(t){console.error("Failed to delete expense:",t),this.expenses=this.expenses.filter(n=>n.id!==e),await this.saveExpenses(),this.updateAll()}}showLoginModal(){const e=new Dd(async t=>{var n;try{const s=await this.authService.login(t);this.currentUser=s.currentUser,await this.initializeData(),this.addExpenseModal=new si(this.users,this.currentUser,a=>this.addExpense(a)),this.render(),this.setupEventListeners(),(n=document.getElementById("login-modal"))==null||n.remove()}catch(s){throw s}},()=>{var t;(t=document.getElementById("login-modal"))==null||t.remove()});document.body.insertAdjacentHTML("beforeend",e.render()),e.setupEventListeners()}logout(){confirm("🚪 Bạn có chắc chắn muốn đăng xuất không?")&&(this.authService.logout(),this.currentUser=null,this.users=[],this.expenses=[],this.render(),this.setupEventListeners())}async showUserManagementModal(){const e=await this.authService.getAllUsers(),t=new Bo(e,async n=>await this.authService.createUser(n),async(n,s)=>{await this.authService.updateUser(n,{isActive:s}),await this.initializeData(),this.addExpenseModal=new si(this.users,this.currentUser,a=>this.addExpense(a))},()=>{var n;(n=document.getElementById("user-management-modal"))==null||n.remove()},this.authService);document.body.insertAdjacentHTML("beforeend",t.render()),t.setupEventListeners()}async editUser(e){if(document.querySelector("#user-management-modal")){const t=await this.authService.getAllUsers();new Bo(t,async n=>await this.authService.createUser(n),async(n,s)=>{await this.authService.updateUser(n,{isActive:s})},()=>{},this.authService).editUser(e)}}updateAll(){this.updateBalanceSection(),this.updateSettlementSection(),this.updateExpensesList(),this.updateStatsCards()}updateBalanceSection(){const e=document.getElementById("balanceSection");e&&(e.innerHTML=this.renderBalanceSection())}updateSettlementSection(){const e=document.getElementById("settlementSection");e&&(e.innerHTML=this.renderSettlementSection())}updateExpensesList(){const e=document.getElementById("expensesList");e&&(e.innerHTML=this.renderExpensesList())}updateStatsCards(){const e=document.querySelector(".grid.grid-cols-1.md\\:grid-cols-3");e&&(e.innerHTML=this.renderStatsCards())}updateFilterControls(){const e=document.getElementById("clearFilter");e&&(this.currentFilter?e.classList.remove("hidden"):e.classList.add("hidden"))}showUserQRCode(e){const t=this.users.find(s=>s.id===e);if(!t){alert("Không tìm thấy người dùng");return}const n=new Rd(t,()=>{var s;(s=document.getElementById("qr-code-modal"))==null||s.remove()});document.body.insertAdjacentHTML("beforeend",n.render()),n.setupEventListeners()}markSettlementComplete(e,t,n){if(!this.currentUser||this.currentUser.id!==t){alert("Chỉ người nhận tiền mới có thể xác nhận thanh toán!");return}const s={id:`settlement_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,from:e,to:t,amount:n,isSettled:!0,createdAt:new Date,settledAt:new Date};this.completedSettlements.push(s),this.saveCompletedSettlements(),this.render();const a=this.users.find(l=>l.id===e),o=this.users.find(l=>l.id===t);alert(`✅ Đã xác nhận nhận tiền từ ${a==null?void 0:a.name} cho ${o==null?void 0:o.name}: ${se(n)}`)}async handleQRCodeUpdate(e,t){try{await this.authService.updateQRCode(e,t);const n=this.users.findIndex(s=>s.id===e);n!==-1&&(this.users[n].qrCode=t),this.currentUser&&this.currentUser.id===e&&(this.currentUser.qrCode=t),console.log("QR code updated successfully")}catch(n){console.error("Failed to update QR code:",n),alert("Lỗi cập nhật mã QR: "+(n instanceof Error?n.message:"Không xác định"))}}}new Vw;
