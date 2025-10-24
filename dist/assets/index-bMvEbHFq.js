var Ad=Object.defineProperty;var Sd=(s,e,t)=>e in s?Ad(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var j=(s,e,t)=>Sd(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function ri(s,e){const t={};return e.forEach(n=>{t[n.id]={userId:n.id,owes:{},owedBy:{},totalOwes:0,totalOwed:0}}),s.forEach(n=>{const r=n.paidBy;n.splitBetween.forEach(i=>{const a=i.userId;let l;n.splitType==="equal"?l=n.amount/n.splitBetween.length:l=i.amount||0,a!==r&&(t[a].owes[r]||(t[a].owes[r]=0),t[r].owedBy[a]||(t[r].owedBy[a]=0),t[a].owes[r]+=l,t[r].owedBy[a]+=l)})}),Object.values(t).forEach(n=>{n.totalOwes=Object.values(n.owes).reduce((r,i)=>r+i,0),n.totalOwed=Object.values(n.owedBy).reduce((r,i)=>r+i,0)}),e.forEach(n=>{e.forEach(r=>{if(n.id!==r.id){const i=t[n.id].owes[r.id]||0,a=t[r.id].owes[n.id]||0;if(i>0&&a>0){const l=i-a;l>0?(t[n.id].owes[r.id]=l,t[r.id].owedBy[n.id]=l,delete t[r.id].owes[n.id],delete t[n.id].owedBy[r.id]):l<0?(t[r.id].owes[n.id]=Math.abs(l),t[n.id].owedBy[r.id]=Math.abs(l),delete t[n.id].owes[r.id],delete t[r.id].owedBy[n.id]):(delete t[n.id].owes[r.id],delete t[r.id].owes[n.id],delete t[n.id].owedBy[r.id],delete t[r.id].owedBy[n.id])}}})}),Object.values(t).forEach(n=>{n.totalOwes=Object.values(n.owes).reduce((r,i)=>r+i,0),n.totalOwed=Object.values(n.owedBy).reduce((r,i)=>r+i,0)}),t}function ne(s){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0,maximumFractionDigits:0}).format(s)}function Rd(){return Math.random().toString(36).substr(2,9)}function Cd(s){const e=[];if((!s.description||s.description.trim().length===0)&&e.push("Mô tả chi phí không được để trống"),(!s.amount||s.amount<=0)&&e.push("Số tiền phải lớn hơn 0"),s.paidBy||e.push("Vui lòng chọn người trả tiền"),(!s.splitBetween||s.splitBetween.length===0)&&e.push("Vui lòng chọn ít nhất một người để chia chi phí"),s.category||e.push("Vui lòng chọn danh mục chi phí"),s.splitType==="custom"&&s.splitBetween){const t=s.splitBetween.reduce((n,r)=>n+(r.amount||0),0);Math.abs(t-(s.amount||0))>1&&e.push("Tổng số tiền chia phải bằng tổng chi phí")}return e}function Tl(s){const e=[],t=Object.values(s).map(l=>({userId:l.userId,netAmount:l.totalOwed-l.totalOwes})),n=t.filter(l=>l.netAmount>0).sort((l,u)=>u.netAmount-l.netAmount),r=t.filter(l=>l.netAmount<0).sort((l,u)=>l.netAmount-u.netAmount);let i=0,a=0;for(;i<n.length&&a<r.length;){const l=n[i],u=r[a],d=Math.min(l.netAmount,Math.abs(u.netAmount));d>0&&e.push({from:u.userId,to:l.userId,amount:d}),l.netAmount-=d,u.netAmount+=d,l.netAmount===0&&i++,u.netAmount===0&&a++}return e}class xd{constructor(e,t,n,r){j(this,"expense");j(this,"users");j(this,"currentUser");j(this,"onDelete");this.expense=e,this.users=t,this.currentUser=n,this.onDelete=r}render(){var r,i,a;const e=this.users.find(l=>l.id===this.expense.paidBy),t=((r=this.currentUser)==null?void 0:r.id)||"",n=this.expense.splitBetween.some(l=>l.userId===t)||this.expense.paidBy===t;return`
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
                <span class="font-medium">${e==null?void 0:e.name}</span> đã trả 
                <span class="font-semibold text-gray-900">${ne(this.expense.amount)}</span>
              </p>
              
              <p class="text-xs text-gray-500">
                📅 ${this.expense.date.toLocaleDateString("vi-VN",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}
              </p>
              
              <div class="flex items-center space-x-2 text-xs text-gray-500">
                <span>👥 Chia cho ${this.expense.splitBetween.length} người</span>
                ${this.expense.splitType==="equal"?`
                  <span>•</span>
                  <span>${ne(this.expense.amount/this.expense.splitBetween.length)}/người</span>
                `:""}
              </div>
              
              <div class="mt-2">
                <details class="text-xs text-gray-500">
                  <summary class="cursor-pointer hover:text-gray-700">Chi tiết chia tiền</summary>
                  <div class="mt-2 pl-4 space-y-1">
                    ${this.expense.splitBetween.map(l=>{const u=this.users.find(d=>d.id===l.userId);return`
                        <div class="flex justify-between">
                          <span>${u==null?void 0:u.name}</span>
                          <span>${ne(l.amount||0)}</span>
                        </div>
                      `}).join("")}
                  </div>
                </details>
              </div>
            </div>
          </div>
          
          <div class="text-right ml-4">
            <div class="font-bold text-xl text-gray-900 mb-1">
              ${ne(this.expense.amount)}
            </div>
            ${n?this.renderUserInvolvement():""}
            
            ${this.onDelete&&((i=this.currentUser)==null?void 0:i.role)==="admin"?`
              <button 
                class="mt-2 text-red-500 hover:text-red-700 text-xs font-medium flex items-center space-x-1"
                onclick="window.deleteExpense('${this.expense.id}')"
                title="Chỉ admin mới có thể xóa chi phí"
              >
                <span>🗑️</span>
                <span>Xóa</span>
                <span class="text-xs bg-red-100 text-red-600 px-1 rounded">👑</span>
              </button>
            `:((a=this.currentUser)==null?void 0:a.role)!=="admin"&&this.onDelete?`
              <div class="mt-2 text-gray-400 text-xs">
                🔒 Chỉ admin mới có thể xóa
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}renderUserInvolvement(){var a;const e=((a=this.currentUser)==null?void 0:a.id)||"",t=this.expense.splitBetween.find(l=>l.userId===e),n=(t==null?void 0:t.amount)||0,r=this.expense.paidBy===e,i=!!t;if(r&&i){const l=this.expense.amount-n;return`
        <div class="text-sm space-y-1">
          <div class="text-splitwise-green font-medium">
            💰 Bạn được nợ ${ne(l)}
          </div>
          <div class="text-xs text-gray-500">
            (Trả ${ne(this.expense.amount)} - Nợ ${ne(n)})
          </div>
        </div>
      `}else{if(r)return`
        <div class="text-sm text-splitwise-green font-medium">
          💰 Bạn được nợ ${ne(this.expense.amount)}
        </div>
      `;if(i)return`
        <div class="text-sm text-splitwise-red font-medium">
          💳 Bạn nợ ${ne(n)}
        </div>
      `}return""}getCategoryName(e){return{food:"🍽️ Ăn uống",transportation:"🚗 Di chuyển",accommodation:"🏠 Lưu trú",entertainment:"🎉 Giải trí",shopping:"🛍️ Mua sắm",utilities:"⚡ Tiện ích",other:"📦 Khác"}[e]||"📦 Khác"}}class Pd{constructor(e,t,n){j(this,"balance");j(this,"users");j(this,"allBalances");this.balance=e,this.users=t,this.allBalances=n}render(){const e=this.balance.totalOwed,t=this.balance.totalOwes,n=e-t;return`
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
          <span class="font-bold text-green-700 text-lg">+${ne(e)}</span>
        </div>
        
        <div class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
          <span class="text-red-700 font-medium">💔 Bạn nợ:</span>
          <span class="font-bold text-red-700 text-lg">-${ne(t)}</span>
        </div>
        
        <div class="flex justify-between items-center p-4 ${n>=0?"bg-green-100":"bg-red-100"} rounded-lg border-2 ${n>=0?"border-green-300":"border-red-300"}">
          <span class="font-bold ${n>=0?"text-green-800":"text-red-800"}">
            ${n>=0?"🎯":"⚠️"} Tổng cộng:
          </span>
          <span class="font-bold text-xl ${n>=0?"text-green-800":"text-red-800"}">
            ${n>=0?"+":""}${ne(n)}
          </span>
        </div>
      </div>
    `}renderDetailedBalances(){let e='<div class="space-y-3 mb-6">';const t=Object.entries(this.balance.owedBy).filter(([r,i])=>i>0);t.length>0&&(e+='<h3 class="font-semibold text-green-700 text-sm mb-2">💚 Ai nợ bạn:</h3>',t.forEach(([r,i])=>{const a=this.users.find(l=>l.id===r);e+=`
          <div class="flex justify-between items-center p-2 bg-green-50 rounded text-sm">
            <div class="flex items-center space-x-2">
              <span class="text-green-700">${a==null?void 0:a.name}</span>
              <button 
                onclick="window.showUserQRCode('${r}')" 
                class="text-blue-600 hover:text-blue-800 text-xs"
                title="Xem mã QR thanh toán"
              >
                📱
              </button>
            </div>
            <span class="font-semibold text-green-700">+${ne(i)}</span>
          </div>
        `}));const n=Object.entries(this.balance.owes).filter(([r,i])=>i>0);return n.length>0&&(e+='<h3 class="font-semibold text-red-700 text-sm mb-2 mt-4">💔 Bạn nợ ai:</h3>',n.forEach(([r,i])=>{const a=this.users.find(l=>l.id===r);e+=`
          <div class="flex justify-between items-center p-2 bg-red-50 rounded text-sm">
            <div class="flex items-center space-x-2">
              <span class="text-red-700">${a==null?void 0:a.name}</span>
              <button 
                onclick="window.showUserQRCode('${r}')" 
                class="text-blue-600 hover:text-blue-800 text-xs"
                title="Xem mã QR thanh toán"
              >
                📱
              </button>
            </div>
            <span class="font-semibold text-red-700">-${ne(i)}</span>
          </div>
        `})),e+="</div>",e}renderSettlementSuggestions(){const t=Tl(this.allBalances).filter(r=>r.from===this.balance.userId||r.to===this.balance.userId);if(t.length===0)return"";let n=`
      <div class="border-t pt-4">
        <h3 class="font-semibold text-gray-700 text-sm mb-3 flex items-center">
          🔄 Gợi ý thanh toán
        </h3>
        <div class="space-y-2">
    `;return t.forEach(r=>{const i=this.users.find(l=>l.id===r.from),a=this.users.find(l=>l.id===r.to);r.from===this.balance.userId?n+=`
          <div class="flex items-center justify-between p-3 bg-orange-50 rounded-lg text-sm">
            <span class="text-orange-700">
              💸 Chuyển cho <strong>${a==null?void 0:a.name}</strong>
            </span>
            <span class="font-bold text-orange-700">${ne(r.amount)}</span>
          </div>
        `:n+=`
          <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg text-sm">
            <span class="text-blue-700">
              💰 Nhận từ <strong>${i==null?void 0:i.name}</strong>
            </span>
            <span class="font-bold text-blue-700">${ne(r.amount)}</span>
          </div>
        `}),n+=`
        </div>
        <p class="text-xs text-gray-500 mt-2">
          💡 Đây là cách tối ưu để thanh toán tất cả các khoản nợ
        </p>
      </div>
    `,n}}class ii{constructor(e,t,n){j(this,"users");j(this,"currentUser");j(this,"onAddExpense");this.users=e,this.currentUser=t,this.onAddExpense=n}show(){this.render();const e=document.getElementById("addExpenseModal");if(e){e.classList.remove("hidden"),e.classList.add("flex");const t=e.querySelector('input[type="text"]');t&&t.focus()}}hide(){const e=document.getElementById("addExpenseModal");e&&(e.classList.add("hidden"),e.classList.remove("flex")),this.resetForm()}render(){return`
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
    `}setupEventListeners(){var l,u,d;(l=document.getElementById("closeModal"))==null||l.addEventListener("click",()=>this.hide()),(u=document.getElementById("cancelBtn"))==null||u.addEventListener("click",()=>this.hide()),(d=document.getElementById("addExpenseForm"))==null||d.addEventListener("submit",m=>{m.preventDefault(),this.handleSubmit()}),document.querySelectorAll('input[name="splitType"]').forEach(m=>{m.addEventListener("change",p=>{const v=p.target.value;this.toggleSplitMode(v),this.updatePreview()})});const e=document.getElementById("expenseAmount"),t=document.querySelectorAll(".splitBetween"),n=document.querySelectorAll(".customSplitAmount"),r=document.querySelectorAll(".customSplitUser"),i=()=>this.updatePreview();e==null||e.addEventListener("input",i),t.forEach(m=>m.addEventListener("change",i)),n.forEach(m=>m.addEventListener("input",i)),r.forEach(m=>m.addEventListener("change",i));const a=m=>{m.key==="Escape"&&(this.hide(),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a),this.addSelectAllControls()}toggleSplitMode(e){const t=document.getElementById("equalSplitContainer"),n=document.getElementById("customSplitContainer");e==="equal"?(t==null||t.classList.remove("hidden"),n==null||n.classList.add("hidden")):(t==null||t.classList.add("hidden"),n==null||n.classList.remove("hidden"))}addSelectAllControls(){var t,n,r;const e=document.querySelector(".space-y-2.max-h-32");if(e){const i=document.createElement("div");i.className="flex space-x-2 text-xs mb-2",i.innerHTML=`
        <button type="button" id="selectAll" class="text-blue-600 hover:text-blue-800">Chọn tất cả</button>
        <span class="text-gray-400">•</span>
        <button type="button" id="selectNone" class="text-blue-600 hover:text-blue-800">Bỏ chọn tất cả</button>
      `,(t=e.parentNode)==null||t.insertBefore(i,e),(n=document.getElementById("selectAll"))==null||n.addEventListener("click",()=>{document.querySelectorAll(".splitBetween").forEach(a=>{a.checked=!0}),this.updatePreview()}),(r=document.getElementById("selectNone"))==null||r.addEventListener("click",()=>{document.querySelectorAll(".splitBetween").forEach(a=>{a.checked=!1}),this.updatePreview()})}}updatePreview(){var i;const e=document.getElementById("expenseAmount"),t=parseFloat((e==null?void 0:e.value)||"0"),n=(i=document.querySelector('input[name="splitType"]:checked'))==null?void 0:i.value,r=document.getElementById("splitPreviewContent");if(r){if(t<=0){r.innerHTML="Nhập số tiền để xem chi tiết chia tiền";return}if(n==="equal"){const a=document.querySelectorAll(".splitBetween:checked");if(a.length===0){r.innerHTML="Chọn ít nhất một người để chia tiền";return}const l=t/a.length;let u='<div class="space-y-1">';u+=`<div class="font-medium">Tổng: ${this.formatCurrency(t)} ÷ ${a.length} người = ${this.formatCurrency(l)}/người</div>`,a.forEach(d=>{const m=d.value,p=this.users.find(v=>v.id===m);u+=`<div class="flex justify-between"><span>${p==null?void 0:p.name}</span><span>${this.formatCurrency(l)}</span></div>`}),u+="</div>",r.innerHTML=u}else{const a=document.querySelectorAll(".customSplitUser:checked");if(a.length===0){r.innerHTML="Chọn ít nhất một người để chia tiền";return}let l='<div class="space-y-1">',u=0;a.forEach(p=>{const v=p.value,S=this.users.find(x=>x.id===v),P=document.querySelector(`input[data-user-id="${v}"]`),V=parseFloat((P==null?void 0:P.value)||"0");u+=V,l+=`<div class="flex justify-between"><span>${S==null?void 0:S.name}</span><span>${this.formatCurrency(V)}</span></div>`});const d=t-u;l+='<div class="border-t pt-1 mt-1">',l+=`<div class="flex justify-between font-medium"><span>Tổng đã chia:</span><span>${this.formatCurrency(u)}</span></div>`,l+=`<div class="flex justify-between ${d===0?"text-green-600":d>0?"text-orange-600":"text-red-600"}">`,l+=`<span>Còn lại:</span><span>${this.formatCurrency(d)}</span></div>`,l+="</div></div>",r.innerHTML=l;const m=document.getElementById("customSplitTotal");m&&(m.innerHTML=`Tổng: ${this.formatCurrency(u)} (Còn lại: ${this.formatCurrency(d)})`,m.className=`text-sm pt-2 border-t ${d===0?"text-green-600":"text-orange-600"}`)}}}handleSubmit(){var p;const e=document.getElementById("expenseDescription").value,t=parseFloat(document.getElementById("expenseAmount").value),n=document.getElementById("expensePaidBy").value,r=document.getElementById("expenseCategory").value,i=document.getElementById("expenseNotes").value,a=(p=document.querySelector('input[name="splitType"]:checked'))==null?void 0:p.value;let l=[];if(a==="equal"){const v=document.querySelectorAll(".splitBetween:checked");if(v.length===0){alert("Vui lòng chọn ít nhất một người để chia chi phí!");return}const S=t/v.length;v.forEach(P=>{l.push({userId:P.value,amount:S})})}else{const v=document.querySelectorAll(".customSplitUser:checked");if(v.length===0){alert("Vui lòng chọn ít nhất một người để chia chi phí!");return}let S=0;if(v.forEach(P=>{var B;const V=P.value,x=document.querySelector(`input[data-user-id="${V}"]`),F=parseFloat((x==null?void 0:x.value)||"0");if(F<=0){alert(`Vui lòng nhập số tiền cho ${(B=this.users.find(W=>W.id===V))==null?void 0:B.name}!`);return}l.push({userId:V,amount:F}),S+=F}),Math.abs(S-t)>1){alert(`Tổng số tiền chia (${this.formatCurrency(S)}) phải bằng tổng chi phí (${this.formatCurrency(t)})!`);return}}const u={description:e.trim(),amount:t,paidBy:n,category:r,splitBetween:l,splitType:a,notes:i.trim()||void 0},d=Cd(u);if(d.length>0){alert(d.join(`
`));return}const m={id:Rd(),description:u.description,amount:u.amount,currency:"VND",paidBy:u.paidBy,splitBetween:u.splitBetween,splitType:u.splitType,category:u.category,date:new Date,notes:u.notes};this.onAddExpense(m),this.hide()}resetForm(){const e=document.getElementById("addExpenseForm");e&&(e.reset(),document.querySelectorAll(".splitBetween").forEach(t=>{t.checked=!0}))}formatCurrency(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0,maximumFractionDigits:0}).format(e)}}class kd{constructor(e,t,n,r=[]){j(this,"users");j(this,"allBalances");j(this,"currentUser");j(this,"completedSettlements");this.users=e,this.allBalances=t,this.currentUser=n,this.completedSettlements=r}render(){const e=Tl(this.allBalances);return e.length===0?`
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
          ${e.map((t,n)=>{const r=this.users.find(u=>u.id===t.from),i=this.users.find(u=>u.id===t.to),a=this.completedSettlements.some(u=>u.from===t.from&&u.to===t.to&&u.amount===t.amount),l=this.currentUser&&this.currentUser.id===t.to;return`
              <div class="p-3 ${a?"bg-gradient-to-r from-green-50 to-green-100 border-green-300":"bg-gradient-to-r from-blue-50 to-green-50"} rounded-lg border ${a?"border-green-300":"border-blue-200"}">
                ${a?`
                  <div class="flex items-center justify-center mb-2">
                    <span class="text-green-600 font-bold text-sm">✅ Đã thanh toán</span>
                  </div>
                `:""}
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ${r==null?void 0:r.name.charAt(0).toUpperCase()}
                    </div>
                    <span class="text-xl">${a?"✅":"💸"}</span>
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ${i==null?void 0:i.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div class="font-bold text-lg ${a?"text-green-600":"text-blue-600"}">
                    ${ne(t.amount)}
                  </div>
                </div>
                <div class="text-xs text-gray-600 mb-2">
                  <strong>${r==null?void 0:r.name}</strong> chuyển cho <strong>${i==null?void 0:i.name}</strong>
                </div>
                ${a?`
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
                      📱 QR ${i==null?void 0:i.name}
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
                        🔒 Chỉ ${i==null?void 0:i.name} mới có thể xác nhận
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
    `}}class Vd{constructor(e,t){j(this,"onLogin");j(this,"onClose");this.onLogin=e,this.onClose=t}render(){return`
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
    `}setupEventListeners(){const e=document.getElementById("login-form"),t=document.getElementById("close-login-modal"),n=document.getElementById("cancel-login"),r=document.getElementById("login-error"),i=document.getElementById("login-submit"),a=document.getElementById("login-submit-text"),l=document.getElementById("login-submit-loading");t==null||t.addEventListener("click",this.onClose),n==null||n.addEventListener("click",this.onClose);const u=d=>{d.key==="Escape"&&(this.onClose(),document.removeEventListener("keydown",u))};document.addEventListener("keydown",u),e==null||e.addEventListener("submit",async d=>{d.preventDefault();const m=new FormData(e),p={username:m.get("username"),password:m.get("password")};i.disabled=!0,a.classList.add("hidden"),l.classList.remove("hidden"),r.classList.add("hidden");try{await this.onLogin(p)}catch(v){r.textContent=v instanceof Error?v.message:"Đã có lỗi xảy ra",r.classList.remove("hidden")}finally{i.disabled=!1,a.classList.remove("hidden"),l.classList.add("hidden")}}),setTimeout(()=>{var d;(d=document.getElementById("email"))==null||d.focus()},100)}}class qa{constructor(e,t,n,r,i){j(this,"users");j(this,"onCreateUser");j(this,"onUpdateUserStatus");j(this,"onClose");j(this,"authService");j(this,"editUser",e=>{var u,d;const t=this.users.find(m=>m.id===e);if(!t){alert("Không tìm thấy người dùng!");return}const n=t.role==="admin",r=document.createElement("div");r.className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",r.id="edit-user-modal",r.innerHTML=`
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">
              ${n?"🔑 Đổi mật khẩu Admin":"✏️ Chỉnh sửa thông tin"}
            </h3>
            <button id="close-edit-modal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <form id="edit-user-form" class="space-y-4">
            ${n?`
              <div class="bg-blue-50 p-3 rounded-lg mb-4">
                <p class="text-blue-800 text-sm">
                  <strong>👑 Admin:</strong> ${t.name} (@${t.username})
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
                  value="${t.name}"
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
                  value="${t.username}"
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
                ${n?"required":""}
                autocomplete="off"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="${n?"Nhập mật khẩu mới cho admin":"Để trống nếu không đổi mật khẩu"}"
              >
            </div>

            <div id="edit-user-error" class="text-red-600 text-sm hidden"></div>

            <div class="flex space-x-3">
              <button 
                type="submit" 
                class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <span id="edit-user-text">${n?"🔑 Đổi mật khẩu":"💾 Lưu thay đổi"}</span>
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
    `,document.body.appendChild(r);const i=()=>{document.body.removeChild(r),document.removeEventListener("keydown",a)},a=m=>{m.key==="Escape"&&i()};(u=document.getElementById("close-edit-modal"))==null||u.addEventListener("click",i),(d=document.getElementById("cancel-edit-user"))==null||d.addEventListener("click",i),document.addEventListener("keydown",a);const l=document.getElementById("edit-user-form");l.addEventListener("submit",async m=>{m.preventDefault();const p=new FormData(l),v=p.get("name"),S=p.get("username"),P=p.get("password"),V=document.getElementById("edit-user-error"),x=document.getElementById("edit-user-text"),F=document.getElementById("edit-user-loading");try{if(x==null||x.classList.add("hidden"),F==null||F.classList.remove("hidden"),V==null||V.classList.add("hidden"),n){if(!P.trim())throw new Error("Vui lòng nhập mật khẩu mới");await this.authService.updateUser(e,{password:P.trim()})}else{await this.authService.updateUser(e,{name:v.trim(),username:S.trim(),...P.trim()&&{password:P.trim()}});const W=this.users.findIndex(re=>re.id===e);W!==-1&&(this.users[W].name=v.trim(),this.users[W].username=S.trim())}const B=document.getElementById("users-list");B&&(B.innerHTML=this.renderUsersList()),alert("✅ Cập nhật thông tin thành công!"),i()}catch(B){x==null||x.classList.remove("hidden"),F==null||F.classList.add("hidden"),V&&(V.textContent=B instanceof Error?B.message:"Có lỗi xảy ra",V.classList.remove("hidden"))}})});this.users=e,this.onCreateUser=t,this.onUpdateUserStatus=n,this.onClose=r,this.authService=i}render(){return`
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
    `).join("")}setupEventListeners(){const e=document.getElementById("close-user-management"),t=document.getElementById("close-user-management-btn"),n=document.getElementById("create-user-form"),r=document.getElementById("create-user-error"),i=document.getElementById("create-user-success");e==null||e.addEventListener("click",this.onClose),t==null||t.addEventListener("click",this.onClose);const a=l=>{l.key==="Escape"&&(this.onClose(),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a),n==null||n.addEventListener("submit",async l=>{l.preventDefault();const u=new FormData(n),d={name:u.get("name"),username:u.get("username"),password:u.get("password"),qrCode:u.get("qrCode")||void 0},m=document.getElementById("create-user-text"),p=document.getElementById("create-user-loading");m.classList.add("hidden"),p.classList.remove("hidden"),r.classList.add("hidden"),i.classList.add("hidden");try{const v=await this.onCreateUser(d);this.users.push(v);const S=document.getElementById("users-list");S&&(S.innerHTML=this.renderUsersList()),n.reset(),i.textContent=`Tạo thành công người dùng: ${v.name}`,i.classList.remove("hidden")}catch(v){r.textContent=v instanceof Error?v.message:"Đã có lỗi xảy ra",r.classList.remove("hidden")}finally{m.classList.remove("hidden"),p.classList.add("hidden")}}),window.toggleUserStatus=async(l,u)=>{try{await this.onUpdateUserStatus(l,u);const d=this.users.findIndex(p=>p.id===l);d!==-1&&(this.users[d].isActive=u);const m=document.getElementById("users-list");m&&(m.innerHTML=this.renderUsersList())}catch(d){alert("Lỗi: "+(d instanceof Error?d.message:"Không thể cập nhật trạng thái"))}}}}class Dd{constructor(e,t){j(this,"user");j(this,"onClose");j(this,"tempQRImage",null);this.user=e,this.onClose=t}render(){return`
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
    `}setupEventListeners(){const e=document.getElementById("close-qr-modal"),t=document.getElementById("close-qr-modal-btn"),n=document.getElementById("add-qr-code-btn"),r=document.getElementById("edit-qr-code-btn"),i=document.getElementById("copy-qr-code-btn"),a=document.getElementById("qr-form"),l=document.getElementById("qr-edit-form"),u=document.getElementById("cancel-qr-edit");e==null||e.addEventListener("click",this.onClose),t==null||t.addEventListener("click",this.onClose);const d=p=>{p.key==="Escape"&&(this.onClose(),document.removeEventListener("keydown",d))};document.addEventListener("keydown",d),n==null||n.addEventListener("click",()=>{l==null||l.classList.remove("hidden")}),r==null||r.addEventListener("click",()=>{l==null||l.classList.remove("hidden")}),u==null||u.addEventListener("click",()=>{l==null||l.classList.add("hidden"),this.tempQRImage=null;const p=document.getElementById("qr-form");p==null||p.reset();const v=document.getElementById("qr-preview");v==null||v.classList.add("hidden")}),i==null||i.addEventListener("click",()=>{try{const p=JSON.parse(this.user.qrCode);p.image&&(navigator.clipboard.writeText(p.description||"QR Code thanh toán"),alert("Đã copy mô tả QR code!"))}catch{alert("Không thể copy QR code")}}),a==null||a.addEventListener("submit",p=>{p.preventDefault(),this.handleQRFormSubmit()});const m=document.getElementById("qr-file-input");m==null||m.addEventListener("change",p=>{var S;const v=(S=p.target.files)==null?void 0:S[0];v&&this.handleFileUpload(v)})}handleFileUpload(e){if(!e.type.startsWith("image/")){alert("Vui lòng chọn file ảnh!");return}if(e.size>5*1024*1024){alert("File quá lớn! Vui lòng chọn file nhỏ hơn 5MB.");return}const t=new FileReader;t.onload=n=>{var l;const r=(l=n.target)==null?void 0:l.result,i=document.getElementById("qr-preview"),a=document.getElementById("qr-preview-image");i&&a&&(a.src=r,i.classList.remove("hidden")),this.tempQRImage=r},t.readAsDataURL(e)}handleQRFormSubmit(){if(!this.tempQRImage){alert("Vui lòng chọn ảnh QR code!");return}const e=document.getElementById("qr-description").value.trim(),t={type:"image",image:this.tempQRImage,description:e||"QR Code thanh toán"},n=JSON.stringify(t);this.user.qrCode=n;const r=new CustomEvent("qr-code-updated",{detail:{userId:this.user.id,qrCode:n}});window.dispatchEvent(r),alert("✅ Đã lưu mã QR thành công!"),this.onClose()}}const Nd="http://localhost:3001/api";class Ld{async request(e,t={}){const n=`${Nd}${e}`,i=await fetch(n,{...{headers:{"Content-Type":"application/json"}},...t});if(!i.ok){const a=await i.json().catch(()=>({}));throw new Error(a.message||`HTTP error! status: ${i.status}`)}return i.json()}async login(e,t){return this.request("/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})})}async getUsers(){return this.request("/users")}async createUser(e){return this.request("/users",{method:"POST",body:JSON.stringify(e)})}async updateUser(e,t){return this.request(`/users/${e}`,{method:"PUT",body:JSON.stringify(t)})}async deleteUser(e){return this.request(`/users/${e}`,{method:"DELETE"})}async getExpenses(){return this.request("/expenses")}async createExpense(e){return this.request("/expenses",{method:"POST",body:JSON.stringify(e)})}async deleteExpense(e){return this.request(`/expenses/${e}`,{method:"DELETE"})}async healthCheck(){return this.request("/health")}}const ja=new Ld,Od=()=>{};var za={};/**
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
 */const Il=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Md=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=s[t++];e[n++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=s[t++],a=s[t++],l=s[t++],u=((r&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const i=s[t++],a=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const i=s[r],a=r+1<s.length,l=a?s[r+1]:0,u=r+2<s.length,d=u?s[r+2]:0,m=i>>2,p=(i&3)<<4|l>>4;let v=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(v=64)),n.push(t[m],t[p],t[v],t[S])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Il(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Md(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const i=t[s.charAt(r++)],l=r<s.length?t[s.charAt(r)]:0;++r;const d=r<s.length?t[s.charAt(r)]:64;++r;const p=r<s.length?t[s.charAt(r)]:64;if(++r,i==null||l==null||d==null||p==null)throw new Ud;const v=i<<2|l>>4;if(n.push(v),d!==64){const S=l<<4&240|d>>2;if(n.push(S),p!==64){const P=d<<6&192|p;n.push(P)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Ud extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fd=function(s){const e=Il(s);return bl.encodeByteArray(e,!0)},Qs=function(s){return Fd(s).replace(/\./g,"")},Al=function(s){try{return bl.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $d=()=>Bd().__FIREBASE_DEFAULTS__,qd=()=>{if(typeof process>"u"||typeof za>"u")return;const s=za.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},jd=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Al(s[1]);return e&&JSON.parse(e)},mr=()=>{try{return Od()||$d()||qd()||jd()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Sl=s=>{var e,t;return(t=(e=mr())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},zd=s=>{const e=Sl(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Rl=()=>{var s;return(s=mr())==null?void 0:s.config},Cl=s=>{var e;return(e=mr())==null?void 0:e[`_${s}`]};/**
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
 */class Hd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function gn(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xl(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
 */function Gd(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=s.iat||0,i=s.sub||s.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Qs(JSON.stringify(t)),Qs(JSON.stringify(a)),""].join(".")}const Hn={};function Wd(){const s={prod:[],emulator:[]};for(const e of Object.keys(Hn))Hn[e]?s.emulator.push(e):s.prod.push(e);return s}function Kd(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let Ha=!1;function Pl(s,e){if(typeof window>"u"||typeof document>"u"||!gn(window.location.host)||Hn[s]===e||Hn[s]||Ha)return;Hn[s]=e;function t(v){return`__firebase__banner__${v}`}const n="__firebase__banner",i=Wd().prod.length>0;function a(){const v=document.getElementById(n);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function u(v,S){v.setAttribute("width","24"),v.setAttribute("id",S),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Ha=!0,a()},v}function m(v,S){v.setAttribute("id",S),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function p(){const v=Kd(n),S=t("text"),P=document.getElementById(S)||document.createElement("span"),V=t("learnmore"),x=document.getElementById(V)||document.createElement("a"),F=t("preprendIcon"),B=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const W=v.element;l(W),m(x,V);const re=d();u(B,F),W.append(B,P,x,re),document.body.appendChild(W)}i?(P.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Jd(){var e;const s=(e=mr())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yd(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Zd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ef(){const s=we();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function tf(){return!Jd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nf(){try{return typeof indexedDB=="object"}catch{return!1}}function sf(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const rf="FirebaseError";class tt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=rf,Object.setPrototypeOf(this,tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,os.prototype.create)}}class os{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?of(i,n):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new tt(r,l,n)}}function of(s,e){return s.replace(af,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const af=/\{\$([^}]+)}/g;function cf(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Ut(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const i=s[r],a=e[r];if(Ga(i)&&Ga(a)){if(!Ut(i,a))return!1}else if(i!==a)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function Ga(s){return s!==null&&typeof s=="object"}/**
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
 */function as(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function lf(s,e){const t=new uf(s,e);return t.subscribe.bind(t)}class uf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");hf(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=oi),r.error===void 0&&(r.error=oi),r.complete===void 0&&(r.complete=oi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hf(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function oi(){}/**
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
 */function be(s){return s&&s._delegate?s._delegate:s}class Ft{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dt="[DEFAULT]";/**
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
 */class df{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Hd;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mf(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});n.resolve(i)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);n===l&&a.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ff(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ff(s){return s===Dt?void 0:s}function mf(s){return s.instantiationMode==="EAGER"}/**
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
 */class pf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new df(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(z||(z={}));const gf={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},yf=z.INFO,_f={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},vf=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=_f[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gi{constructor(e){this.name=e,this._logLevel=yf,this._logHandler=vf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const Ef=(s,e)=>e.some(t=>s instanceof t);let Wa,Ka;function wf(){return Wa||(Wa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tf(){return Ka||(Ka=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kl=new WeakMap,vi=new WeakMap,Vl=new WeakMap,ai=new WeakMap,Wi=new WeakMap;function If(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",i),s.removeEventListener("error",a)},i=()=>{t(mt(s.result)),r()},a=()=>{n(s.error),r()};s.addEventListener("success",i),s.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&kl.set(t,s)}).catch(()=>{}),Wi.set(e,s),e}function bf(s){if(vi.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",a),s.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",i),s.addEventListener("error",a),s.addEventListener("abort",a)});vi.set(s,e)}let Ei={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return vi.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Vl.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function Af(s){Ei=s(Ei)}function Sf(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(ci(this),e,...t);return Vl.set(n,e.sort?e.sort():[e]),mt(n)}:Tf().includes(s)?function(...e){return s.apply(ci(this),e),mt(kl.get(this))}:function(...e){return mt(s.apply(ci(this),e))}}function Rf(s){return typeof s=="function"?Sf(s):(s instanceof IDBTransaction&&bf(s),Ef(s,wf())?new Proxy(s,Ei):s)}function mt(s){if(s instanceof IDBRequest)return If(s);if(ai.has(s))return ai.get(s);const e=Rf(s);return e!==s&&(ai.set(s,e),Wi.set(e,s)),e}const ci=s=>Wi.get(s);function Cf(s,e,{blocked:t,upgrade:n,blocking:r,terminated:i}={}){const a=indexedDB.open(s,e),l=mt(a);return n&&a.addEventListener("upgradeneeded",u=>{n(mt(a.result),u.oldVersion,u.newVersion,mt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const xf=["get","getKey","getAll","getAllKeys","count"],Pf=["put","add","delete","clear"],li=new Map;function Qa(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(li.get(e))return li.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=Pf.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||xf.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,r?"readwrite":"readonly");let d=u.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),r&&u.done]))[0]};return li.set(e,i),i}Af(s=>({...s,get:(e,t,n)=>Qa(e,t)||s.get(e,t,n),has:(e,t)=>!!Qa(e,t)||s.has(e,t)}));/**
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
 */class kf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Vf(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Vf(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wi="@firebase/app",Ja="0.14.4";/**
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
 */const Qe=new Gi("@firebase/app"),Df="@firebase/app-compat",Nf="@firebase/analytics-compat",Lf="@firebase/analytics",Of="@firebase/app-check-compat",Mf="@firebase/app-check",Uf="@firebase/auth",Ff="@firebase/auth-compat",Bf="@firebase/database",$f="@firebase/data-connect",qf="@firebase/database-compat",jf="@firebase/functions",zf="@firebase/functions-compat",Hf="@firebase/installations",Gf="@firebase/installations-compat",Wf="@firebase/messaging",Kf="@firebase/messaging-compat",Qf="@firebase/performance",Jf="@firebase/performance-compat",Xf="@firebase/remote-config",Yf="@firebase/remote-config-compat",Zf="@firebase/storage",em="@firebase/storage-compat",tm="@firebase/firestore",nm="@firebase/ai",sm="@firebase/firestore-compat",rm="firebase",im="12.4.0";/**
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
 */const Ti="[DEFAULT]",om={[wi]:"fire-core",[Df]:"fire-core-compat",[Lf]:"fire-analytics",[Nf]:"fire-analytics-compat",[Mf]:"fire-app-check",[Of]:"fire-app-check-compat",[Uf]:"fire-auth",[Ff]:"fire-auth-compat",[Bf]:"fire-rtdb",[$f]:"fire-data-connect",[qf]:"fire-rtdb-compat",[jf]:"fire-fn",[zf]:"fire-fn-compat",[Hf]:"fire-iid",[Gf]:"fire-iid-compat",[Wf]:"fire-fcm",[Kf]:"fire-fcm-compat",[Qf]:"fire-perf",[Jf]:"fire-perf-compat",[Xf]:"fire-rc",[Yf]:"fire-rc-compat",[Zf]:"fire-gcs",[em]:"fire-gcs-compat",[tm]:"fire-fst",[sm]:"fire-fst-compat",[nm]:"fire-vertex","fire-js":"fire-js",[rm]:"fire-js-all"};/**
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
 */const Js=new Map,am=new Map,Ii=new Map;function Xa(s,e){try{s.container.addComponent(e)}catch(t){Qe.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function cn(s){const e=s.name;if(Ii.has(e))return Qe.debug(`There were multiple attempts to register component ${e}.`),!1;Ii.set(e,s);for(const t of Js.values())Xa(t,s);for(const t of am.values())Xa(t,s);return!0}function Ki(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Ue(s){return s==null?!1:s.settings!==void 0}/**
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
 */const cm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pt=new os("app","Firebase",cm);/**
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
 */class lm{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}/**
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
 */const yn=im;function Dl(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:Ti,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw pt.create("bad-app-name",{appName:String(r)});if(t||(t=Rl()),!t)throw pt.create("no-options");const i=Js.get(r);if(i){if(Ut(t,i.options)&&Ut(n,i.config))return i;throw pt.create("duplicate-app",{appName:r})}const a=new pf(r);for(const u of Ii.values())a.addComponent(u);const l=new lm(t,n,a);return Js.set(r,l),l}function Nl(s=Ti){const e=Js.get(s);if(!e&&s===Ti&&Rl())return Dl();if(!e)throw pt.create("no-app",{appName:s});return e}function gt(s,e,t){let n=om[s]??s;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${n}" with version "${e}":`];r&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qe.warn(a.join(" "));return}cn(new Ft(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const um="firebase-heartbeat-database",hm=1,Xn="firebase-heartbeat-store";let ui=null;function Ll(){return ui||(ui=Cf(um,hm,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Xn)}catch(t){console.warn(t)}}}}).catch(s=>{throw pt.create("idb-open",{originalErrorMessage:s.message})})),ui}async function dm(s){try{const t=(await Ll()).transaction(Xn),n=await t.objectStore(Xn).get(Ol(s));return await t.done,n}catch(e){if(e instanceof tt)Qe.warn(e.message);else{const t=pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qe.warn(t.message)}}}async function Ya(s,e){try{const n=(await Ll()).transaction(Xn,"readwrite");await n.objectStore(Xn).put(e,Ol(s)),await n.done}catch(t){if(t instanceof tt)Qe.warn(t.message);else{const n=pt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qe.warn(n.message)}}}function Ol(s){return`${s.name}!${s.options.appId}`}/**
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
 */const fm=1024,mm=30;class pm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ym(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Za();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>mm){const a=_m(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Qe.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Za(),{heartbeatsToSend:n,unsentEntries:r}=gm(this._heartbeatsCache.heartbeats),i=Qs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Qe.warn(t),""}}}function Za(){return new Date().toISOString().substring(0,10)}function gm(s,e=fm){const t=[];let n=s.slice();for(const r of s){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),ec(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),ec(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class ym{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nf()?sf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Ya(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Ya(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function ec(s){return Qs(JSON.stringify({version:2,heartbeats:s})).length}function _m(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
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
 */function vm(s){cn(new Ft("platform-logger",e=>new kf(e),"PRIVATE")),cn(new Ft("heartbeat",e=>new pm(e),"PRIVATE")),gt(wi,Ja,s),gt(wi,Ja,"esm2020"),gt("fire-js","")}vm("");var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yt,Ml;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function _(){}_.prototype=g.prototype,w.F=g.prototype,w.prototype=new _,w.prototype.constructor=w,w.D=function(T,E,b){for(var y=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)y[Ae-2]=arguments[Ae];return g.prototype[E].apply(T,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,g,_){_||(_=0);const T=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)T[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;E<16;++E)T[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=w.g[0],_=w.g[1],E=w.g[2];let b=w.g[3],y;y=g+(b^_&(E^b))+T[0]+3614090360&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+T[1]+3905402710&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+T[2]+606105819&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+T[3]+3250441966&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(b^_&(E^b))+T[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+T[5]+1200080426&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+T[6]+2821735955&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+T[7]+4249261313&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(b^_&(E^b))+T[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+T[9]+2336552879&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+T[10]+4294925233&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+T[11]+2304563134&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(b^_&(E^b))+T[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=b+(E^g&(_^E))+T[13]+4254626195&4294967295,b=g+(y<<12&4294967295|y>>>20),y=E+(_^b&(g^_))+T[14]+2792965006&4294967295,E=b+(y<<17&4294967295|y>>>15),y=_+(g^E&(b^g))+T[15]+1236535329&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(E^b&(_^E))+T[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+T[6]+3225465664&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+T[11]+643717713&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+T[0]+3921069994&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(_^E))+T[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+T[10]+38016083&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+T[15]+3634488961&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+T[4]+3889429448&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(_^E))+T[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+T[14]+3275163606&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+T[3]+4107603335&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+T[8]+1163531501&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^b&(_^E))+T[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=b+(_^E&(g^_))+T[2]+4243563512&4294967295,b=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(b^g))+T[7]+1735328473&4294967295,E=b+(y<<14&4294967295|y>>>18),y=_+(b^g&(E^b))+T[12]+2368359562&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(_^E^b)+T[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+T[8]+2272392833&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+T[11]+1839030562&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+T[14]+4259657740&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^b)+T[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+T[4]+1272893353&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+T[7]+4139469664&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+T[10]+3200236656&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^b)+T[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+T[0]+3936430074&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+T[3]+3572445317&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+T[6]+76029189&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^b)+T[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=b+(g^_^E)+T[12]+3873151461&4294967295,b=g+(y<<11&4294967295|y>>>21),y=E+(b^g^_)+T[15]+530742520&4294967295,E=b+(y<<16&4294967295|y>>>16),y=_+(E^b^g)+T[2]+3299628645&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(E^(_|~b))+T[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+T[7]+1126891415&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+T[14]+2878612391&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+T[5]+4237533241&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~b))+T[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+T[3]+2399980690&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+T[10]+4293915773&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+T[1]+2240044497&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~b))+T[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+T[15]+4264355552&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+T[6]+2734768916&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+T[13]+1309151649&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~b))+T[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=b+(_^(g|~E))+T[11]+3174756917&4294967295,b=g+(y<<10&4294967295|y>>>22),y=E+(g^(b|~_))+T[2]+718787259&4294967295,E=b+(y<<15&4294967295|y>>>17),y=_+(b^(E|~g))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+b&4294967295}n.prototype.v=function(w,g){g===void 0&&(g=w.length);const _=g-this.blockSize,T=this.C;let E=this.h,b=0;for(;b<g;){if(E==0)for(;b<=_;)r(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<g;)if(T[E++]=w.charCodeAt(b++),E==this.blockSize){r(this,T),E=0;break}}else for(;b<g;)if(T[E++]=w[b++],E==this.blockSize){r(this,T),E=0;break}}this.h=E,this.o+=g},n.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;g=this.o*8;for(var _=w.length-8;_<w.length;++_)w[_]=g&255,g/=256;for(this.v(w),w=Array(16),g=0,_=0;_<4;++_)for(let T=0;T<32;T+=8)w[g++]=this.g[_]>>>T&255;return w};function i(w,g){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=g(w)}function a(w,g){this.h=g;const _=[];let T=!0;for(let E=w.length-1;E>=0;E--){const b=w[E]|0;T&&b==g||(_[E]=b,T=!1)}this.g=_}var l={};function u(w){return-128<=w&&w<128?i(w,function(g){return new a([g|0],g<0?-1:0)}):new a([w|0],w<0?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return x(d(-w));const g=[];let _=1;for(let T=0;w>=_;T++)g[T]=w/_|0,_*=4294967296;return new a(g,0)}function m(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return x(m(w.substring(1),g));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(g,8));let T=p;for(let b=0;b<w.length;b+=8){var E=Math.min(8,w.length-b);const y=parseInt(w.substring(b,b+E),g);E<8?(E=d(Math.pow(g,E)),T=T.j(E).add(d(y))):(T=T.j(_),T=T.add(d(y)))}return T}var p=u(0),v=u(1),S=u(16777216);s=a.prototype,s.m=function(){if(V(this))return-x(this).m();let w=0,g=1;for(let _=0;_<this.g.length;_++){const T=this.i(_);w+=(T>=0?T:4294967296+T)*g,g*=4294967296}return w},s.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(V(this))return"-"+x(this).toString(w);const g=d(Math.pow(w,6));var _=this;let T="";for(;;){const E=re(_,g).g;_=F(_,E.j(g));let b=((_.g.length>0?_.g[0]:_.h)>>>0).toString(w);if(_=E,P(_))return b+T;for(;b.length<6;)b="0"+b;T=b+T}},s.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(let g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function V(w){return w.h==-1}s.l=function(w){return w=F(this,w),V(w)?-1:P(w)?0:1};function x(w){const g=w.g.length,_=[];for(let T=0;T<g;T++)_[T]=~w.g[T];return new a(_,~w.h).add(v)}s.abs=function(){return V(this)?x(this):this},s.add=function(w){const g=Math.max(this.g.length,w.g.length),_=[];let T=0;for(let E=0;E<=g;E++){let b=T+(this.i(E)&65535)+(w.i(E)&65535),y=(b>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);T=y>>>16,b&=65535,y&=65535,_[E]=y<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function F(w,g){return w.add(x(g))}s.j=function(w){if(P(this)||P(w))return p;if(V(this))return V(w)?x(this).j(x(w)):x(x(this).j(w));if(V(w))return x(this.j(x(w)));if(this.l(S)<0&&w.l(S)<0)return d(this.m()*w.m());const g=this.g.length+w.g.length,_=[];for(var T=0;T<2*g;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(let E=0;E<w.g.length;E++){const b=this.i(T)>>>16,y=this.i(T)&65535,Ae=w.i(E)>>>16,Rt=w.i(E)&65535;_[2*T+2*E]+=y*Rt,B(_,2*T+2*E),_[2*T+2*E+1]+=b*Rt,B(_,2*T+2*E+1),_[2*T+2*E+1]+=y*Ae,B(_,2*T+2*E+1),_[2*T+2*E+2]+=b*Ae,B(_,2*T+2*E+2)}for(w=0;w<g;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=g;w<2*g;w++)_[w]=0;return new a(_,0)};function B(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function W(w,g){this.g=w,this.h=g}function re(w,g){if(P(g))throw Error("division by zero");if(P(w))return new W(p,p);if(V(w))return g=re(x(w),g),new W(x(g.g),x(g.h));if(V(g))return g=re(w,x(g)),new W(x(g.g),g.h);if(w.g.length>30){if(V(w)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var _=v,T=g;T.l(w)<=0;)_=Ce(_),T=Ce(T);var E=le(_,1),b=le(T,1);for(T=le(T,2),_=le(_,2);!P(T);){var y=b.add(T);y.l(w)<=0&&(E=E.add(_),b=y),T=le(T,1),_=le(_,1)}return g=F(w,E.j(g)),new W(E,g)}for(E=p;w.l(g)>=0;){for(_=Math.max(1,Math.floor(w.m()/g.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),b=d(_),y=b.j(g);V(y)||y.l(w)>0;)_-=T,b=d(_),y=b.j(g);P(b)&&(b=v),E=E.add(b),w=F(w,y)}return new W(E,w)}s.B=function(w){return re(this,w).h},s.and=function(w){const g=Math.max(this.g.length,w.g.length),_=[];for(let T=0;T<g;T++)_[T]=this.i(T)&w.i(T);return new a(_,this.h&w.h)},s.or=function(w){const g=Math.max(this.g.length,w.g.length),_=[];for(let T=0;T<g;T++)_[T]=this.i(T)|w.i(T);return new a(_,this.h|w.h)},s.xor=function(w){const g=Math.max(this.g.length,w.g.length),_=[];for(let T=0;T<g;T++)_[T]=this.i(T)^w.i(T);return new a(_,this.h^w.h)};function Ce(w){const g=w.g.length+1,_=[];for(let T=0;T<g;T++)_[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(_,w.h)}function le(w,g){const _=g>>5;g%=32;const T=w.g.length-_,E=[];for(let b=0;b<T;b++)E[b]=g>0?w.i(b+_)>>>g|w.i(b+_+1)<<32-g:w.i(b+_);return new a(E,w.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Ml=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,yt=a}).apply(typeof tc<"u"?tc:typeof self<"u"?self:typeof window<"u"?window:{});var Vs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ul,$n,Fl,Us,bi,Bl,$l,ql;(function(){var s,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vs=="object"&&Vs];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function r(o,c){if(c)e:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var I=o[f];if(!(I in h))break e;h=h[I]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=u,d.apply(null,arguments)}function m(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function p(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(f,I,A){for(var k=Array(arguments.length-2),q=2;q<arguments.length;q++)k[q-2]=arguments[q];return c.prototype[I].apply(f,k)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const c=o.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function P(o,c){for(let f=1;f<arguments.length;f++){const I=arguments[f];var h=typeof I;if(h=h!="object"?h:I?Array.isArray(I)?"array":h:"null",h=="array"||h=="object"&&typeof I.length=="number"){h=o.length||0;const A=I.length||0;o.length=h+A;for(let k=0;k<A;k++)o[h+k]=I[k]}else o.push(I)}}class V{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function x(o){a.setTimeout(()=>{throw o},0)}function F(){var o=w;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class B{constructor(){this.h=this.g=null}add(c,h){const f=W.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var W=new V(()=>new re,o=>o.reset());class re{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,le=!1,w=new B,g=()=>{const o=Promise.resolve(void 0);Ce=()=>{o.then(_)}};function _(){for(var o;o=F();){try{o.h.call(o.g)}catch(h){x(h)}var c=W;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}le=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function Ae(o,c){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}p(Ae,E),Ae.prototype.init=function(o,c){const h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ae.Z.h.call(this)},Ae.prototype.h=function(){Ae.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Rt="closure_listenable_"+(Math.random()*1e6|0),Wh=0;function Kh(o,c,h,f,I){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=I,this.key=++Wh,this.da=this.fa=!1}function ys(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _s(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function Qh(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function $o(o){const c={};for(const h in o)c[h]=o[h];return c}const qo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jo(o,c){let h,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(h in f)o[h]=f[h];for(let A=0;A<qo.length;A++)h=qo[A],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function vs(o){this.src=o,this.g={},this.h=0}vs.prototype.add=function(o,c,h,f,I){const A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);const k=Lr(o,c,f,I);return k>-1?(c=o[k],h||(c.fa=!1)):(c=new Kh(c,this.src,A,!!f,I),c.fa=h,o.push(c)),c};function Nr(o,c){const h=c.type;if(h in o.g){var f=o.g[h],I=Array.prototype.indexOf.call(f,c,void 0),A;(A=I>=0)&&Array.prototype.splice.call(f,I,1),A&&(ys(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Lr(o,c,h,f){for(let I=0;I<o.length;++I){const A=o[I];if(!A.da&&A.listener==c&&A.capture==!!h&&A.ha==f)return I}return-1}var Or="closure_lm_"+(Math.random()*1e6|0),Mr={};function zo(o,c,h,f,I){if(Array.isArray(c)){for(let A=0;A<c.length;A++)zo(o,c[A],h,f,I);return null}return h=Wo(h),o&&o[Rt]?o.J(c,h,l(f)?!!f.capture:!1,I):Jh(o,c,h,!1,f,I)}function Jh(o,c,h,f,I,A){if(!c)throw Error("Invalid event type");const k=l(I)?!!I.capture:!!I;let q=Fr(o);if(q||(o[Or]=q=new vs(o)),h=q.add(c,h,f,k,A),h.proxy)return h;if(f=Xh(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)b||(I=k),I===void 0&&(I=!1),o.addEventListener(c.toString(),f,I);else if(o.attachEvent)o.attachEvent(Go(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Xh(){function o(h){return c.call(o.src,o.listener,h)}const c=Yh;return o}function Ho(o,c,h,f,I){if(Array.isArray(c))for(var A=0;A<c.length;A++)Ho(o,c[A],h,f,I);else f=l(f)?!!f.capture:!!f,h=Wo(h),o&&o[Rt]?(o=o.i,A=String(c).toString(),A in o.g&&(c=o.g[A],h=Lr(c,h,f,I),h>-1&&(ys(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[A],o.h--)))):o&&(o=Fr(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Lr(c,h,f,I)),(h=o>-1?c[o]:null)&&Ur(h))}function Ur(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Rt])Nr(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Go(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Fr(c))?(Nr(h,o),h.h==0&&(h.src=null,c[Or]=null)):ys(o)}}}function Go(o){return o in Mr?Mr[o]:Mr[o]="on"+o}function Yh(o,c){if(o.da)o=!0;else{c=new Ae(c,this);const h=o.listener,f=o.ha||o.src;o.fa&&Ur(o),o=h.call(f,c)}return o}function Fr(o){return o=o[Or],o instanceof vs?o:null}var Br="__closure_events_fn_"+(Math.random()*1e9>>>0);function Wo(o){return typeof o=="function"?o:(o[Br]||(o[Br]=function(c){return o.handleEvent(c)}),o[Br])}function ye(){T.call(this),this.i=new vs(this),this.M=this,this.G=null}p(ye,T),ye.prototype[Rt]=!0,ye.prototype.removeEventListener=function(o,c,h,f){Ho(this,o,c,h,f)};function Te(o,c){var h,f=o.G;if(f)for(h=[];f;f=f.G)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new E(c,o);else if(c instanceof E)c.target=c.target||o;else{var I=c;c=new E(f,o),jo(c,I)}I=!0;let A,k;if(h)for(k=h.length-1;k>=0;k--)A=c.g=h[k],I=Es(A,f,!0,c)&&I;if(A=c.g=o,I=Es(A,f,!0,c)&&I,I=Es(A,f,!1,c)&&I,h)for(k=0;k<h.length;k++)A=c.g=h[k],I=Es(A,f,!1,c)&&I}ye.prototype.N=function(){if(ye.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let f=0;f<h.length;f++)ys(h[f]);delete o.g[c],o.h--}}this.G=null},ye.prototype.J=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},ye.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Es(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let I=!0;for(let A=0;A<c.length;++A){const k=c[A];if(k&&!k.da&&k.capture==h){const q=k.listener,ue=k.ha||k.src;k.fa&&Nr(o.i,k),I=q.call(ue,f)!==!1&&I}}return I&&!f.defaultPrevented}function Zh(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function Ko(o){o.g=Zh(()=>{o.g=null,o.i&&(o.i=!1,Ko(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class ed extends T{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ko(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function An(o){T.call(this),this.h=o,this.g={}}p(An,T);var Qo=[];function Jo(o){_s(o.g,function(c,h){this.g.hasOwnProperty(h)&&Ur(c)},o),o.g={}}An.prototype.N=function(){An.Z.N.call(this),Jo(this)},An.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $r=a.JSON.stringify,td=a.JSON.parse,nd=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Xo(){}function Yo(){}var Sn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qr(){E.call(this,"d")}p(qr,E);function jr(){E.call(this,"c")}p(jr,E);var Ct={},Zo=null;function ws(){return Zo=Zo||new ye}Ct.Ia="serverreachability";function ea(o){E.call(this,Ct.Ia,o)}p(ea,E);function Rn(o){const c=ws();Te(c,new ea(c))}Ct.STAT_EVENT="statevent";function ta(o,c){E.call(this,Ct.STAT_EVENT,o),this.stat=c}p(ta,E);function Ie(o){const c=ws();Te(c,new ta(c,o))}Ct.Ja="timingevent";function na(o,c){E.call(this,Ct.Ja,o),this.size=c}p(na,E);function Cn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function xn(){this.g=!0}xn.prototype.ua=function(){this.g=!1};function sd(o,c,h,f,I,A){o.info(function(){if(o.g)if(A){var k="",q=A.split("&");for(let J=0;J<q.length;J++){var ue=q[J].split("=");if(ue.length>1){const de=ue[0];ue=ue[1];const Oe=de.split("_");k=Oe.length>=2&&Oe[1]=="type"?k+(de+"="+ue+"&"):k+(de+"=redacted&")}}}else k=null;else k=A;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+c+`
`+h+`
`+k})}function rd(o,c,h,f,I,A,k){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+c+`
`+h+`
`+A+" "+k})}function Gt(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+od(o,h)+(f?" "+f:"")})}function id(o,c){o.info(function(){return"TIMEOUT: "+c})}xn.prototype.info=function(){};function od(o,c){if(!o.g)return c;if(!c)return null;try{const A=JSON.parse(c);if(A){for(o=0;o<A.length;o++)if(Array.isArray(A[o])){var h=A[o];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var I=f[0];if(I!="noop"&&I!="stop"&&I!="close")for(let k=1;k<f.length;k++)f[k]=""}}}}return $r(A)}catch{return c}}var Ts={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},sa={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ra;function zr(){}p(zr,Xo),zr.prototype.g=function(){return new XMLHttpRequest},ra=new zr;function Pn(o){return encodeURIComponent(String(o))}function ad(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function nt(o,c,h,f){this.j=o,this.i=c,this.l=h,this.S=f||1,this.V=new An(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ia}function ia(){this.i=null,this.g="",this.h=!1}var oa={},Hr={};function Gr(o,c,h){o.M=1,o.A=bs(Le(c)),o.u=h,o.R=!0,aa(o,null)}function aa(o,c){o.F=Date.now(),Is(o),o.B=Le(o.A);var h=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),Ea(h.i,"t",f),o.C=0,h=o.j.L,o.h=new ia,o.g=Ua(o.j,h?c:null,!o.u),o.P>0&&(o.O=new ed(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,f=o.ba;var I="readystatechange";Array.isArray(I)||(I&&(Qo[0]=I.toString()),I=Qo);for(let A=0;A<I.length;A++){const k=zo(h,I[A],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=o.J?$o(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Rn(),sd(o.i,o.v,o.B,o.l,o.S,o.u)}nt.prototype.ba=function(o){o=o.target;const c=this.O;c&&it(o)==3?c.j():this.Y(o)},nt.prototype.Y=function(o){try{if(o==this.g)e:{const q=it(this.g),ue=this.g.ya(),J=this.g.ca();if(!(q<3)&&(q!=3||this.g&&(this.h.h||this.g.la()||Ra(this.g)))){this.K||q!=4||ue==7||(ue==8||J<=0?Rn(3):Rn(2)),Wr(this);var c=this.g.ca();this.X=c;var h=cd(this);if(this.o=c==200,rd(this.i,this.v,this.B,this.l,this.S,q,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,I=this.g;if((f=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(f)){var A=f;break t}}A=null}if(o=A)Gt(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Kr(this,o);else{this.o=!1,this.m=3,Ie(12),xt(this),kn(this);break e}}if(this.R){o=!0;let de;for(;!this.K&&this.C<h.length;)if(de=ld(this,h),de==Hr){q==4&&(this.m=4,Ie(14),o=!1),Gt(this.i,this.l,null,"[Incomplete Response]");break}else if(de==oa){this.m=4,Ie(15),Gt(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Gt(this.i,this.l,de,null),Kr(this,de);if(ca(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||h.length!=0||this.h.h||(this.m=1,Ie(16),o=!1),this.o=this.o&&o,!o)Gt(this.i,this.l,h,"[Invalid Chunked Response]"),xt(this),kn(this);else if(h.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),ni(k),k.P=!0,Ie(11))}}else Gt(this.i,this.l,h,null),Kr(this,h);q==4&&xt(this),this.o&&!this.K&&(q==4?Na(this.j,this):(this.o=!1,Is(this)))}else Id(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ie(12)):(this.m=0,Ie(13)),xt(this),kn(this)}}}catch{}finally{}};function cd(o){if(!ca(o))return o.g.la();const c=Ra(o.g);if(c==="")return"";let h="";const f=c.length,I=it(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return xt(o),kn(o),"";o.h.i=new a.TextDecoder}for(let A=0;A<f;A++)o.h.h=!0,h+=o.h.i.decode(c[A],{stream:!(I&&A==f-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function ca(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function ld(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?Hr:(h=Number(c.substring(h,f)),isNaN(h)?oa:(f+=1,f+h>c.length?Hr:(c=c.slice(f,f+h),o.C=f+h,c)))}nt.prototype.cancel=function(){this.K=!0,xt(this)};function Is(o){o.T=Date.now()+o.H,la(o,o.H)}function la(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Cn(d(o.aa,o),c)}function Wr(o){o.D&&(a.clearTimeout(o.D),o.D=null)}nt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(id(this.i,this.B),this.M!=2&&(Rn(),Ie(17)),xt(this),this.m=2,kn(this)):la(this,this.T-o)};function kn(o){o.j.I==0||o.K||Na(o.j,o)}function xt(o){Wr(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,Jo(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Kr(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||Qr(h.h,o))){if(!o.L&&Qr(h.h,o)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)xs(h),Rs(h);else break e;ti(h),Ie(18)}}else h.xa=I[1],0<h.xa-h.K&&I[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Cn(d(h.Va,h),6e3));da(h.h)<=1&&h.ta&&(h.ta=void 0)}else kt(h,11)}else if((o.L||h.g==o)&&xs(h),!y(c))for(I=h.Ba.g.parse(c),c=0;c<I.length;c++){let J=I[c];const de=J[0];if(!(de<=h.K))if(h.K=de,J=J[1],h.I==2)if(J[0]=="c"){h.M=J[1],h.ba=J[2];const Oe=J[3];Oe!=null&&(h.ka=Oe,h.j.info("VER="+h.ka));const Vt=J[4];Vt!=null&&(h.za=Vt,h.j.info("SVER="+h.za));const ot=J[5];ot!=null&&typeof ot=="number"&&ot>0&&(f=1.5*ot,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const at=o.g;if(at){const ks=at.g?at.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ks){var A=f.h;A.g||ks.indexOf("spdy")==-1&&ks.indexOf("quic")==-1&&ks.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Jr(A,A.h),A.h=null))}if(f.G){const si=at.g?at.g.getResponseHeader("X-HTTP-Session-Id"):null;si&&(f.wa=si,Y(f.J,f.G,si))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var k=o;if(f.na=Ma(f,f.L?f.ba:null,f.W),k.L){fa(f.h,k);var q=k,ue=f.O;ue&&(q.H=ue),q.D&&(Wr(q),Is(q)),f.g=k}else Va(f);h.i.length>0&&Cs(h)}else J[0]!="stop"&&J[0]!="close"||kt(h,7);else h.I==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?kt(h,7):ei(h):J[0]!="noop"&&h.l&&h.l.qa(J),h.A=0)}}Rn(4)}catch{}}var ud=class{constructor(o,c){this.g=o,this.map=c}};function ua(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ha(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function da(o){return o.h?1:o.g?o.g.size:0}function Qr(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Jr(o,c){o.g?o.g.add(c):o.h=c}function fa(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}ua.prototype.cancel=function(){if(this.i=ma(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ma(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return S(o.i)}var pa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hd(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const f=o[h].indexOf("=");let I,A=null;f>=0?(I=o[h].substring(0,f),A=o[h].substring(f+1)):I=o[h],c(I,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function st(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof st?(this.l=o.l,Vn(this,o.j),this.o=o.o,this.g=o.g,Dn(this,o.u),this.h=o.h,Xr(this,wa(o.i)),this.m=o.m):o&&(c=String(o).match(pa))?(this.l=!1,Vn(this,c[1]||"",!0),this.o=Nn(c[2]||""),this.g=Nn(c[3]||"",!0),Dn(this,c[4]),this.h=Nn(c[5]||"",!0),Xr(this,c[6]||"",!0),this.m=Nn(c[7]||"")):(this.l=!1,this.i=new On(null,this.l))}st.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Ln(c,ga,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Ln(c,ga,!0),"@"),o.push(Pn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Ln(h,h.charAt(0)=="/"?md:fd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Ln(h,gd)),o.join("")},st.prototype.resolve=function(o){const c=Le(this);let h=!!o.j;h?Vn(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var f=o.h;if(h)Dn(c,o.u);else if(h=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var I=c.h.lastIndexOf("/");I!=-1&&(f=c.h.slice(0,I+1)+f)}if(I=f,I==".."||I==".")f="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){f=I.lastIndexOf("/",0)==0,I=I.split("/");const A=[];for(let k=0;k<I.length;){const q=I[k++];q=="."?f&&k==I.length&&A.push(""):q==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),f&&k==I.length&&A.push("")):(A.push(q),f=!0)}f=A.join("/")}else f=I}return h?c.h=f:h=o.i.toString()!=="",h?Xr(c,wa(o.i)):h=!!o.m,h&&(c.m=o.m),c};function Le(o){return new st(o)}function Vn(o,c,h){o.j=h?Nn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Dn(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function Xr(o,c,h){c instanceof On?(o.i=c,yd(o.i,o.l)):(h||(c=Ln(c,pd)),o.i=new On(c,o.l))}function Y(o,c,h){o.i.set(c,h)}function bs(o){return Y(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Nn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ln(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,dd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function dd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ga=/[#\/\?@]/g,fd=/[#\?:]/g,md=/[#\?]/g,pd=/[#\?@]/g,gd=/#/g;function On(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Pt(o){o.g||(o.g=new Map,o.h=0,o.i&&hd(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}s=On.prototype,s.add=function(o,c){Pt(this),this.i=null,o=Wt(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function ya(o,c){Pt(o),c=Wt(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function _a(o,c){return Pt(o),c=Wt(o,c),o.g.has(c)}s.forEach=function(o,c){Pt(this),this.g.forEach(function(h,f){h.forEach(function(I){o.call(c,I,f,this)},this)},this)};function va(o,c){Pt(o);let h=[];if(typeof c=="string")_a(o,c)&&(h=h.concat(o.g.get(Wt(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}s.set=function(o,c){return Pt(this),this.i=null,o=Wt(this,o),_a(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},s.get=function(o,c){return o?(o=va(this,o),o.length>0?String(o[0]):c):c};function Ea(o,c,h){ya(o,c),h.length>0&&(o.i=null,o.g.set(Wt(o,c),S(h)),o.h+=h.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const I=Pn(h);h=va(this,h);for(let A=0;A<h.length;A++){let k=I;h[A]!==""&&(k+="="+Pn(h[A])),o.push(k)}}return this.i=o.join("&")};function wa(o){const c=new On;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Wt(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function yd(o,c){c&&!o.j&&(Pt(o),o.i=null,o.g.forEach(function(h,f){const I=f.toLowerCase();f!=I&&(ya(this,f),Ea(this,I,h))},o)),o.j=c}function _d(o,c){const h=new xn;if(a.Image){const f=new Image;f.onload=m(rt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=m(rt,h,"TestLoadImage: error",!1,c,f),f.onabort=m(rt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(rt,h,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function vd(o,c){const h=new xn,f=new AbortController,I=setTimeout(()=>{f.abort(),rt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(A=>{clearTimeout(I),A.ok?rt(h,"TestPingServer: ok",!0,c):rt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(I),rt(h,"TestPingServer: error",!1,c)})}function rt(o,c,h,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(h)}catch{}}function Ed(){this.g=new nd}function Yr(o){this.i=o.Sb||null,this.h=o.ab||!1}p(Yr,Xo),Yr.prototype.g=function(){return new As(this.i,this.h)};function As(o,c){ye.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(As,ye),s=As.prototype,s.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,Un(this)},s.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=0},s.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ta(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ta(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}s.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Mn(this):Un(this),this.readyState==3&&Ta(this)}},s.Oa=function(o){this.g&&(this.response=this.responseText=o,Mn(this))},s.Na=function(o){this.g&&(this.response=o,Mn(this))},s.ga=function(){this.g&&Mn(this)};function Mn(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Un(o)}s.setRequestHeader=function(o,c){this.A.append(o,c)},s.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Un(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(As.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ia(o){let c="";return _s(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Zr(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Ia(h),typeof o=="string"?h!=null&&Pn(h):Y(o,c,h))}function te(o){ye.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(te,ye);var wd=/^https?$/i,Td=["POST","PUT"];s=te.prototype,s.Fa=function(o){this.H=o},s.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ra.g(),this.g.onreadystatechange=v(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(A){ba(this,A);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)h.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())h.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),I=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Td,c,void 0)>=0)||f||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,k]of h)this.g.setRequestHeader(A,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(A){ba(this,A)}};function ba(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Aa(o),Ss(o)}function Aa(o){o.A||(o.A=!0,Te(o,"complete"),Te(o,"error"))}s.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Te(this,"complete"),Te(this,"abort"),Ss(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ss(this,!0)),te.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Sa(this):this.Xa())},s.Xa=function(){Sa(this)};function Sa(o){if(o.h&&typeof i<"u"){if(o.v&&it(o)==4)setTimeout(o.Ca.bind(o),0);else if(Te(o,"readystatechange"),it(o)==4){o.h=!1;try{const A=o.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=A===0){let k=String(o.D).match(pa)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),f=!wd.test(k?k.toLowerCase():"")}h=f}if(h)Te(o,"complete"),Te(o,"success");else{o.o=6;try{var I=it(o)>2?o.g.statusText:""}catch{I=""}o.l=I+" ["+o.ca()+"]",Aa(o)}}finally{Ss(o)}}}}function Ss(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||Te(o,"ready");try{h.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function it(o){return o.g?o.g.readyState:0}s.ca=function(){try{return it(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),td(c)}};function Ra(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Id(o){const c={};o=(o.g&&it(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(y(o[f]))continue;var h=ad(o[f]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=c[I]||[];c[I]=A,A.push(h)}Qh(c,function(f){return f.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Ca(o){this.za=0,this.i=[],this.j=new xn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Fn("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Fn("baseRetryDelayMs",5e3,o),this.Za=Fn("retryDelaySeedMs",1e4,o),this.Ta=Fn("forwardChannelMaxRetries",2,o),this.va=Fn("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new ua(o&&o.concurrentRequestLimit),this.Ba=new Ed,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Ca.prototype,s.ka=8,s.I=1,s.connect=function(o,c,h,f){Ie(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=Ma(this,null,this.W),Cs(this)};function ei(o){if(xa(o),o.I==3){var c=o.V++,h=Le(o.J);if(Y(h,"SID",o.M),Y(h,"RID",c),Y(h,"TYPE","terminate"),Bn(o,h),c=new nt(o,o.j,c),c.M=2,c.A=bs(Le(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=Ua(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Is(c)}Oa(o)}function Rs(o){o.g&&(ni(o),o.g.cancel(),o.g=null)}function xa(o){Rs(o),o.v&&(a.clearTimeout(o.v),o.v=null),xs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Cs(o){if(!ha(o.h)&&!o.m){o.m=!0;var c=o.Ea;Ce||g(),le||(Ce(),le=!0),w.add(c,o),o.D=0}}function bd(o,c){return da(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Cn(d(o.Ea,o,c),La(o,o.D)),o.D++,!0)}s.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const I=new nt(this,this.j,o);let A=this.o;if(this.U&&(A?(A=$o(A),jo(A,this.U)):A=this.U),this.u!==null||this.R||(I.J=A,A=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=ka(this,I,c),h=Le(this.J),Y(h,"RID",o),Y(h,"CVER",22),this.G&&Y(h,"X-HTTP-Session-Id",this.G),Bn(this,h),A&&(this.R?c="headers="+Pn(Ia(A))+"&"+c:this.u&&Zr(h,this.u,A)),Jr(this.h,I),this.Ra&&Y(h,"TYPE","init"),this.S?(Y(h,"$req",c),Y(h,"SID","null"),I.U=!0,Gr(I,h,null)):Gr(I,h,c),this.I=2}}else this.I==3&&(o?Pa(this,o):this.i.length==0||ha(this.h)||Pa(this))};function Pa(o,c){var h;c?h=c.l:h=o.V++;const f=Le(o.J);Y(f,"SID",o.M),Y(f,"RID",h),Y(f,"AID",o.K),Bn(o,f),o.u&&o.o&&Zr(f,o.u,o.o),h=new nt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=ka(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Jr(o.h,h),Gr(h,f,c)}function Bn(o,c){o.H&&_s(o.H,function(h,f){Y(c,f,h)}),o.l&&_s({},function(h,f){Y(c,f,h)})}function ka(o,c,h){h=Math.min(o.i.length,h);const f=o.l?d(o.l.Ka,o.l,o):null;e:{var I=o.i;let q=-1;for(;;){const ue=["count="+h];q==-1?h>0?(q=I[0].g,ue.push("ofs="+q)):q=0:ue.push("ofs="+q);let J=!0;for(let de=0;de<h;de++){var A=I[de].g;const Oe=I[de].map;if(A-=q,A<0)q=Math.max(0,I[de].g-100),J=!1;else try{A="req"+A+"_"||"";try{var k=Oe instanceof Map?Oe:Object.entries(Oe);for(const[Vt,ot]of k){let at=ot;l(ot)&&(at=$r(ot)),ue.push(A+Vt+"="+encodeURIComponent(at))}}catch(Vt){throw ue.push(A+"type="+encodeURIComponent("_badmap")),Vt}}catch{f&&f(Oe)}}if(J){k=ue.join("&");break e}}k=void 0}return o=o.i.splice(0,h),c.G=o,k}function Va(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;Ce||g(),le||(Ce(),le=!0),w.add(c,o),o.A=0}}function ti(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Cn(d(o.Da,o),La(o,o.A)),o.A++,!0)}s.Da=function(){if(this.v=null,Da(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Cn(d(this.Wa,this),o)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ie(10),Rs(this),Da(this))};function ni(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Da(o){o.g=new nt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=Le(o.na);Y(c,"RID","rpc"),Y(c,"SID",o.M),Y(c,"AID",o.K),Y(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&Y(c,"TO",o.ia),Y(c,"TYPE","xmlhttp"),Bn(o,c),o.u&&o.o&&Zr(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=bs(Le(c)),h.u=null,h.R=!0,aa(h,o)}s.Va=function(){this.C!=null&&(this.C=null,Rs(this),ti(this),Ie(19))};function xs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Na(o,c){var h=null;if(o.g==c){xs(o),ni(o),o.g=null;var f=2}else if(Qr(o.h,c))h=c.G,fa(o.h,c),f=1;else return;if(o.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var I=o.D;f=ws(),Te(f,new na(f,h)),Cs(o)}else Va(o);else if(I=c.m,I==3||I==0&&c.X>0||!(f==1&&bd(o,c)||f==2&&ti(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),I){case 1:kt(o,5);break;case 4:kt(o,10);break;case 3:kt(o,6);break;default:kt(o,2)}}}function La(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function kt(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),f=o.Ua;const I=!f;f=new st(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Vn(f,"https"),bs(f),I?_d(f.toString(),h):vd(f.toString(),h)}else Ie(2);o.I=0,o.l&&o.l.pa(c),Oa(o),xa(o)}s.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))};function Oa(o){if(o.I=0,o.ja=[],o.l){const c=ma(o.h);(c.length!=0||o.i.length!=0)&&(P(o.ja,c),P(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function Ma(o,c,h){var f=h instanceof st?Le(h):new st(h);if(f.g!="")c&&(f.g=c+"."+f.g),Dn(f,f.u);else{var I=a.location;f=I.protocol,c=c?c+"."+I.hostname:I.hostname,I=+I.port;const A=new st(null);f&&Vn(A,f),c&&(A.g=c),I&&Dn(A,I),h&&(A.h=h),f=A}return h=o.G,c=o.wa,h&&c&&Y(f,h,c),Y(f,"VER",o.ka),Bn(o,f),f}function Ua(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new te(new Yr({ab:h})):new te(o.ma),c.Fa(o.L),c}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fa(){}s=Fa.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function Ps(){}Ps.prototype.g=function(o,c){return new xe(o,c)};function xe(o,c){ye.call(this),this.g=new Ca(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!y(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Kt(this)}p(xe,ye),xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xe.prototype.close=function(){ei(this.g)},xe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=$r(o),o=h);c.i.push(new ud(c.Ya++,o)),c.I==3&&Cs(c)},xe.prototype.N=function(){this.g.l=null,delete this.j,ei(this.g),delete this.g,xe.Z.N.call(this)};function Ba(o){qr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}p(Ba,qr);function $a(){jr.call(this),this.status=1}p($a,jr);function Kt(o){this.g=o}p(Kt,Fa),Kt.prototype.ra=function(){Te(this.g,"a")},Kt.prototype.qa=function(o){Te(this.g,new Ba(o))},Kt.prototype.pa=function(o){Te(this.g,new $a)},Kt.prototype.oa=function(){Te(this.g,"b")},Ps.prototype.createWebChannel=Ps.prototype.g,xe.prototype.send=xe.prototype.o,xe.prototype.open=xe.prototype.m,xe.prototype.close=xe.prototype.close,ql=function(){return new Ps},$l=function(){return ws()},Bl=Ct,bi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ts.NO_ERROR=0,Ts.TIMEOUT=8,Ts.HTTP_ERROR=6,Us=Ts,sa.COMPLETE="complete",Fl=sa,Yo.EventType=Sn,Sn.OPEN="a",Sn.CLOSE="b",Sn.ERROR="c",Sn.MESSAGE="d",ye.prototype.listen=ye.prototype.J,$n=Yo,te.prototype.listenOnce=te.prototype.K,te.prototype.getLastError=te.prototype.Ha,te.prototype.getLastErrorCode=te.prototype.ya,te.prototype.getStatus=te.prototype.ca,te.prototype.getResponseJson=te.prototype.La,te.prototype.getResponseText=te.prototype.la,te.prototype.send=te.prototype.ea,te.prototype.setWithCredentials=te.prototype.Fa,Ul=te}).apply(typeof Vs<"u"?Vs:typeof self<"u"?self:typeof window<"u"?window:{});const nc="@firebase/firestore",sc="4.9.2";/**
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
 */class ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ve.UNAUTHENTICATED=new ve(null),ve.GOOGLE_CREDENTIALS=new ve("google-credentials-uid"),ve.FIRST_PARTY=new ve("first-party-uid"),ve.MOCK_USER=new ve("mock-user");/**
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
 */let _n="12.3.0";/**
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
 */const Bt=new Gi("@firebase/firestore");function Qt(){return Bt.logLevel}function N(s,...e){if(Bt.logLevel<=z.DEBUG){const t=e.map(Qi);Bt.debug(`Firestore (${_n}): ${s}`,...t)}}function Je(s,...e){if(Bt.logLevel<=z.ERROR){const t=e.map(Qi);Bt.error(`Firestore (${_n}): ${s}`,...t)}}function ln(s,...e){if(Bt.logLevel<=z.WARN){const t=e.map(Qi);Bt.warn(`Firestore (${_n}): ${s}`,...t)}}function Qi(s){if(typeof s=="string")return s;try{/**
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
*/return function(t){return JSON.stringify(t)}(s)}catch{return s}}/**
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
 */function O(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,jl(s,n,t)}function jl(s,e,t){let n=`FIRESTORE (${_n}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Je(n),new Error(n)}function Q(s,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,s||jl(e,r,n)}function $(s,e){return s}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends tt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ke{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class zl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Em{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ve.UNAUTHENTICATED))}shutdown(){}}class wm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Tm{constructor(e){this.t=e,this.currentUser=ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0,42304);let n=this.i;const r=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let i=new Ke;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ke,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},l=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ke)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Q(typeof n.accessToken=="string",31837,{l:n}),new zl(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{h:e}),new ve(e)}}class Im{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=ve.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class bm{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Im(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Am{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Q(this.o===void 0,3512);const n=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const r=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new rc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new rc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Sm(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Ji{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=Sm(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function H(s,e){return s<e?-1:s>e?1:0}function Ai(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const r=s.charAt(n),i=e.charAt(n);if(r!==i)return hi(r)===hi(i)?H(r,i):hi(r)?1:-1}return H(s.length,e.length)}const Rm=55296,Cm=57343;function hi(s){const e=s.charCodeAt(0);return e>=Rm&&e<=Cm}function un(s,e,t){return s.length===e.length&&s.every((n,r)=>t(n,e[r]))}/**
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
 */const ic="__name__";class Me{constructor(e,t,n){t===void 0?t=0:t>e.length&&O(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&O(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Me.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Me?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=Me.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return H(e.length,t.length)}static compareSegments(e,t){const n=Me.isNumericId(e),r=Me.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Me.extractNumericId(e).compare(Me.extractNumericId(t)):Ai(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yt.fromString(e.substring(4,e.length-2))}}class X extends Me{construct(e,t,n){return new X(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new D(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(r=>r.length>0))}return new X(t)}static emptyPath(){return new X([])}}const xm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends Me{construct(e,t,n){return new pe(e,t,n)}static isValidIdentifier(e){return xm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ic}static keyField(){return new pe([ic])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(n.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new D(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new D(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(n+=l,r++):(i(),r++)}if(i(),a)throw new D(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(X.fromString(e))}static fromName(e){return new L(X.fromString(e).popFirst(5))}static empty(){return new L(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new X(e.slice()))}}/**
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
 */function Hl(s,e,t){if(!t)throw new D(R.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function Pm(s,e,t,n){if(e===!0&&n===!0)throw new D(R.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function oc(s){if(!L.isDocumentKey(s))throw new D(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function ac(s){if(L.isDocumentKey(s))throw new D(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function Gl(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function pr(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":O(12329,{type:typeof s})}function Xe(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new D(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pr(s);throw new D(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
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
 */function ae(s,e){const t={typeString:s};return e&&(t.value=e),t}function cs(s,e){if(!Gl(s))throw new D(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const a=s[n];if(r&&typeof a!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new D(R.INVALID_ARGUMENT,t);return!0}/**
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
 */const cc=-62135596800,lc=1e6;class Z{static now(){return Z.fromMillis(Date.now())}static fromDate(e){return Z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*lc);return new Z(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<cc)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lc}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Z._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cs(e,Z._jsonSchema))return new Z(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Z._jsonSchemaVersion="firestore/timestamp/1.0",Z._jsonSchema={type:ae("string",Z._jsonSchemaVersion),seconds:ae("number"),nanoseconds:ae("number")};/**
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
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new Z(0,0))}static max(){return new U(new Z(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Yn=-1;function km(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=U.fromTimestamp(n===1e9?new Z(t+1,0):new Z(t,n));return new vt(r,L.empty(),e)}function Vm(s){return new vt(s.readTime,s.key,Yn)}class vt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new vt(U.min(),L.empty(),Yn)}static max(){return new vt(U.max(),L.empty(),Yn)}}function Dm(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(s.documentKey,e.documentKey),t!==0?t:H(s.largestBatchId,e.largestBatchId))}/**
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
 */const Nm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vn(s){if(s.code!==R.FAILED_PRECONDITION||s.message!==Nm)throw s;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((n,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,n)=>{t(e)})}static reject(e){return new C((t,n)=>{n(e)})}static waitFor(e){return new C((t,n)=>{let r=0,i=0,a=!1;e.forEach(l=>{++r,l.next(()=>{++i,a&&i===r&&t()},u=>n(u))}),a=!0,i===r&&t()})}static or(e){let t=C.resolve(!1);for(const n of e)t=t.next(r=>r?C.resolve(r):n());return t}static forEach(e,t){const n=[];return e.forEach((r,i)=>{n.push(t.call(this,r,i))}),this.waitFor(n)}static mapArray(e,t){return new C((n,r)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(m=>{a[d]=m,++l,l===i&&n(a)},m=>r(m))}})}static doWhile(e,t){return new C((n,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):n()};i()})}}function Om(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function En(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class gr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}gr.ce=-1;/**
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
 */const Xi=-1;function yr(s){return s==null}function Xs(s){return s===0&&1/s==-1/0}function Mm(s){return typeof s=="number"&&Number.isInteger(s)&&!Xs(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
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
 */const Wl="";function Um(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=uc(e)),e=Fm(s.get(t),e);return uc(e)}function Fm(s,e){let t=e;const n=s.length;for(let r=0;r<n;r++){const i=s.charAt(r);switch(i){case"\0":t+="";break;case Wl:t+="";break;default:t+=i}}return t}function uc(s){return s+Wl+""}/**
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
 */function hc(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function At(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function Kl(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
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
 */class ee{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ds(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ds(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ds(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ds(this.root,e,this.comparator,!0)}}class Ds{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??me.RED,this.left=r??me.EMPTY,this.right=i??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new me(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return me.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw O(27949);return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class he{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new dc(this.data.getIterator())}getIteratorFrom(e){return new dc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class dc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pe{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new Pe([])}unionWith(e){let t=new he(pe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Pe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return un(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class Ql extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ql("Invalid base64 string: "+i):i}}(e);return new ge(t)}static fromUint8Array(e){const t=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const Bm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(s){if(Q(!!s,39018),typeof s=="string"){let e=0;const t=Bm.exec(s);if(Q(!!t,46558,{timestamp:s}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:se(s.seconds),nanos:se(s.nanos)}}function se(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function wt(s){return typeof s=="string"?ge.fromBase64String(s):ge.fromUint8Array(s)}/**
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
 */const Jl="server_timestamp",Xl="__type__",Yl="__previous_value__",Zl="__local_write_time__";function Yi(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[Xl])==null?void 0:n.stringValue)===Jl}function _r(s){const e=s.mapValue.fields[Yl];return Yi(e)?_r(e):e}function Zn(s){const e=Et(s.mapValue.fields[Zl].timestampValue);return new Z(e.seconds,e.nanos)}/**
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
 */class $m{constructor(e,t,n,r,i,a,l,u,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m}}const Ys="(default)";class es{constructor(e,t){this.projectId=e,this.database=t||Ys}static empty(){return new es("","")}get isDefaultDatabase(){return this.database===Ys}isEqual(e){return e instanceof es&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const eu="__type__",qm="__max__",Ns={mapValue:{}},tu="__vector__",Zs="value";function Tt(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Yi(s)?4:zm(s)?9007199254740991:jm(s)?10:11:O(28295,{value:s})}function He(s,e){if(s===e)return!0;const t=Tt(s);if(t!==Tt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return Zn(s).isEqual(Zn(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Et(r.timestampValue),l=Et(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(s,e);case 5:return s.stringValue===e.stringValue;case 6:return function(r,i){return wt(r.bytesValue).isEqual(wt(i.bytesValue))}(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return function(r,i){return se(r.geoPointValue.latitude)===se(i.geoPointValue.latitude)&&se(r.geoPointValue.longitude)===se(i.geoPointValue.longitude)}(s,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return se(r.integerValue)===se(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=se(r.doubleValue),l=se(i.doubleValue);return a===l?Xs(a)===Xs(l):isNaN(a)&&isNaN(l)}return!1}(s,e);case 9:return un(s.arrayValue.values||[],e.arrayValue.values||[],He);case 10:case 11:return function(r,i){const a=r.mapValue.fields||{},l=i.mapValue.fields||{};if(hc(a)!==hc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!He(a[u],l[u])))return!1;return!0}(s,e);default:return O(52216,{left:s})}}function ts(s,e){return(s.values||[]).find(t=>He(t,e))!==void 0}function hn(s,e){if(s===e)return 0;const t=Tt(s),n=Tt(e);if(t!==n)return H(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(s.booleanValue,e.booleanValue);case 2:return function(i,a){const l=se(i.integerValue||i.doubleValue),u=se(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(s,e);case 3:return fc(s.timestampValue,e.timestampValue);case 4:return fc(Zn(s),Zn(e));case 5:return Ai(s.stringValue,e.stringValue);case 6:return function(i,a){const l=wt(i),u=wt(a);return l.compareTo(u)}(s.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const m=H(l[d],u[d]);if(m!==0)return m}return H(l.length,u.length)}(s.referenceValue,e.referenceValue);case 8:return function(i,a){const l=H(se(i.latitude),se(a.latitude));return l!==0?l:H(se(i.longitude),se(a.longitude))}(s.geoPointValue,e.geoPointValue);case 9:return mc(s.arrayValue,e.arrayValue);case 10:return function(i,a){var v,S,P,V;const l=i.fields||{},u=a.fields||{},d=(v=l[Zs])==null?void 0:v.arrayValue,m=(S=u[Zs])==null?void 0:S.arrayValue,p=H(((P=d==null?void 0:d.values)==null?void 0:P.length)||0,((V=m==null?void 0:m.values)==null?void 0:V.length)||0);return p!==0?p:mc(d,m)}(s.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ns.mapValue&&a===Ns.mapValue)return 0;if(i===Ns.mapValue)return 1;if(a===Ns.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let p=0;p<u.length&&p<m.length;++p){const v=Ai(u[p],m[p]);if(v!==0)return v;const S=hn(l[u[p]],d[m[p]]);if(S!==0)return S}return H(u.length,m.length)}(s.mapValue,e.mapValue);default:throw O(23264,{he:t})}}function fc(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return H(s,e);const t=Et(s),n=Et(e),r=H(t.seconds,n.seconds);return r!==0?r:H(t.nanos,n.nanos)}function mc(s,e){const t=s.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const i=hn(t[r],n[r]);if(i)return i}return H(t.length,n.length)}function dn(s){return Si(s)}function Si(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(t){const n=Et(t);return`time(${n.seconds},${n.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(t){return wt(t).toBase64()}(s.bytesValue):"referenceValue"in s?function(t){return L.fromName(t).toString()}(s.referenceValue):"geoPointValue"in s?function(t){return`geo(${t.latitude},${t.longitude})`}(s.geoPointValue):"arrayValue"in s?function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=Si(i);return n+"]"}(s.arrayValue):"mapValue"in s?function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of n)i?i=!1:r+=",",r+=`${a}:${Si(t.fields[a])}`;return r+"}"}(s.mapValue):O(61005,{value:s})}function Fs(s){switch(Tt(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_r(s);return e?16+Fs(e):16;case 5:return 2*s.stringValue.length;case 6:return wt(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((r,i)=>r+Fs(i),0)}(s.arrayValue);case 10:case 11:return function(n){let r=0;return At(n.fields,(i,a)=>{r+=i.length+Fs(a)}),r}(s.mapValue);default:throw O(13486,{value:s})}}function pc(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function Ri(s){return!!s&&"integerValue"in s}function Zi(s){return!!s&&"arrayValue"in s}function gc(s){return!!s&&"nullValue"in s}function yc(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function Bs(s){return!!s&&"mapValue"in s}function jm(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[eu])==null?void 0:n.stringValue)===tu}function Gn(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return At(s.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Gn(n)),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gn(s.arrayValue.values[t]);return e}return{...s}}function zm(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===qm}/**
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
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Bs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gn(t)}setAll(e){let t=pe.emptyPath(),n={},r=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,n,r),n={},r=[],t=l.popLast()}a?n[l.lastSegment()]=Gn(a):r.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Bs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return He(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Bs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){At(t,(r,i)=>e[r]=i);for(const r of n)delete e[r]}clone(){return new Re(Gn(this.value))}}function nu(s){const e=[];return At(s.fields,(t,n)=>{const r=new pe([t]);if(Bs(n)){const i=nu(n.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)}),new Pe(e)}/**
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
 */class Ee{constructor(e,t,n,r,i,a,l){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ee(e,0,U.min(),U.min(),U.min(),Re.empty(),0)}static newFoundDocument(e,t,n,r){return new Ee(e,1,t,U.min(),n,r,0)}static newNoDocument(e,t){return new Ee(e,2,t,U.min(),U.min(),Re.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,U.min(),U.min(),Re.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class er{constructor(e,t){this.position=e,this.inclusive=t}}function _c(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const i=e[r],a=s.position[r];if(i.field.isKeyField()?n=L.comparator(L.fromName(a.referenceValue),t.key):n=hn(a,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function vc(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!He(s.position[t],e.position[t]))return!1;return!0}/**
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
 */class ns{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hm(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
 */class su{}class oe extends su{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Wm(e,t,n):t==="array-contains"?new Jm(e,n):t==="in"?new Xm(e,n):t==="not-in"?new Ym(e,n):t==="array-contains-any"?new Zm(e,n):new oe(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Km(e,n):new Qm(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(hn(t,this.value)):t!==null&&Tt(this.value)===Tt(t)&&this.matchesComparison(hn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ne extends su{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ne(e,t)}matches(e){return ru(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ru(s){return s.op==="and"}function iu(s){return Gm(s)&&ru(s)}function Gm(s){for(const e of s.filters)if(e instanceof Ne)return!1;return!0}function Ci(s){if(s instanceof oe)return s.field.canonicalString()+s.op.toString()+dn(s.value);if(iu(s))return s.filters.map(e=>Ci(e)).join(",");{const e=s.filters.map(t=>Ci(t)).join(",");return`${s.op}(${e})`}}function ou(s,e){return s instanceof oe?function(n,r){return r instanceof oe&&n.op===r.op&&n.field.isEqual(r.field)&&He(n.value,r.value)}(s,e):s instanceof Ne?function(n,r){return r instanceof Ne&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,a,l)=>i&&ou(a,r.filters[l]),!0):!1}(s,e):void O(19439)}function au(s){return s instanceof oe?function(t){return`${t.field.canonicalString()} ${t.op} ${dn(t.value)}`}(s):s instanceof Ne?function(t){return t.op.toString()+" {"+t.getFilters().map(au).join(" ,")+"}"}(s):"Filter"}class Wm extends oe{constructor(e,t,n){super(e,t,n),this.key=L.fromName(n.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Km extends oe{constructor(e,t){super(e,"in",t),this.keys=cu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Qm extends oe{constructor(e,t){super(e,"not-in",t),this.keys=cu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function cu(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>L.fromName(n.referenceValue))}class Jm extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zi(t)&&ts(t.arrayValue,this.value)}}class Xm extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ts(this.value.arrayValue,t)}}class Ym extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ts(this.value.arrayValue,t)}}class Zm extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>ts(this.value.arrayValue,n))}}/**
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
 */class ep{constructor(e,t=null,n=[],r=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Ec(s,e=null,t=[],n=[],r=null,i=null,a=null){return new ep(s,e,t,n,r,i,a)}function eo(s){const e=$(s);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Ci(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),yr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>dn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>dn(n)).join(",")),e.Te=t}return e.Te}function to(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!Hm(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!ou(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!vc(s.startAt,e.startAt)&&vc(s.endAt,e.endAt)}function xi(s){return L.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
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
 */class wn{constructor(e,t=null,n=[],r=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function tp(s,e,t,n,r,i,a,l){return new wn(s,e,t,n,r,i,a,l)}function no(s){return new wn(s)}function wc(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function lu(s){return s.collectionGroup!==null}function Wn(s){const e=$(s);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new he(pe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ns(i,n))}),t.has(pe.keyField().canonicalString())||e.Ie.push(new ns(pe.keyField(),n))}return e.Ie}function Fe(s){const e=$(s);return e.Ee||(e.Ee=np(e,Wn(s))),e.Ee}function np(s,e){if(s.limitType==="F")return Ec(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new ns(r.field,i)});const t=s.endAt?new er(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new er(s.startAt.position,s.startAt.inclusive):null;return Ec(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function Pi(s,e){const t=s.filters.concat([e]);return new wn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function ki(s,e,t){return new wn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function vr(s,e){return to(Fe(s),Fe(e))&&s.limitType===e.limitType}function uu(s){return`${eo(Fe(s))}|lt:${s.limitType}`}function Jt(s){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(r=>au(r)).join(", ")}]`),yr(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>dn(r)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>dn(r)).join(",")),`Target(${n})`}(Fe(s))}; limitType=${s.limitType})`}function Er(s,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(s,e)&&function(n,r){for(const i of Wn(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(s,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(s,e)&&function(n,r){return!(n.startAt&&!function(a,l,u){const d=_c(a,l,u);return a.inclusive?d<=0:d<0}(n.startAt,Wn(n),r)||n.endAt&&!function(a,l,u){const d=_c(a,l,u);return a.inclusive?d>=0:d>0}(n.endAt,Wn(n),r))}(s,e)}function sp(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function hu(s){return(e,t)=>{let n=!1;for(const r of Wn(s)){const i=rp(r,e,t);if(i!==0)return i;n=n||r.field.isKeyField()}return 0}}function rp(s,e,t){const n=s.field.isKeyField()?L.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?hn(u,d):O(42886)}(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return O(19790,{direction:s.dir})}}/**
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
 */class jt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){At(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return Kl(this.inner)}size(){return this.innerSize}}/**
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
 */const ip=new ee(L.comparator);function Ye(){return ip}const du=new ee(L.comparator);function qn(...s){let e=du;for(const t of s)e=e.insert(t.key,t);return e}function fu(s){let e=du;return s.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Lt(){return Kn()}function mu(){return Kn()}function Kn(){return new jt(s=>s.toString(),(s,e)=>s.isEqual(e))}const op=new ee(L.comparator),ap=new he(L.comparator);function G(...s){let e=ap;for(const t of s)e=e.add(t);return e}const cp=new he(H);function lp(){return cp}/**
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
 */function so(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xs(e)?"-0":e}}function pu(s){return{integerValue:""+s}}function up(s,e){return Mm(e)?pu(e):so(s,e)}/**
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
 */class wr{constructor(){this._=void 0}}function hp(s,e,t){return s instanceof tr?function(r,i){const a={fields:{[Xl]:{stringValue:Jl},[Zl]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Yi(i)&&(i=_r(i)),i&&(a.fields[Yl]=i),{mapValue:a}}(t,e):s instanceof ss?yu(s,e):s instanceof rs?_u(s,e):function(r,i){const a=gu(r,i),l=Tc(a)+Tc(r.Ae);return Ri(a)&&Ri(r.Ae)?pu(l):so(r.serializer,l)}(s,e)}function dp(s,e,t){return s instanceof ss?yu(s,e):s instanceof rs?_u(s,e):t}function gu(s,e){return s instanceof nr?function(n){return Ri(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class tr extends wr{}class ss extends wr{constructor(e){super(),this.elements=e}}function yu(s,e){const t=vu(e);for(const n of s.elements)t.some(r=>He(r,n))||t.push(n);return{arrayValue:{values:t}}}class rs extends wr{constructor(e){super(),this.elements=e}}function _u(s,e){let t=vu(e);for(const n of s.elements)t=t.filter(r=>!He(r,n));return{arrayValue:{values:t}}}class nr extends wr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Tc(s){return se(s.integerValue||s.doubleValue)}function vu(s){return Zi(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function fp(s,e){return s.field.isEqual(e.field)&&function(n,r){return n instanceof ss&&r instanceof ss||n instanceof rs&&r instanceof rs?un(n.elements,r.elements,He):n instanceof nr&&r instanceof nr?He(n.Ae,r.Ae):n instanceof tr&&r instanceof tr}(s.transform,e.transform)}class mp{constructor(e,t){this.version=e,this.transformResults=t}}class De{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new De}static exists(e){return new De(void 0,e)}static updateTime(e){return new De(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $s(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Tr{}function Eu(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new ro(s.key,De.none()):new ls(s.key,s.data,De.none());{const t=s.data,n=Re.empty();let r=new he(pe.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?n.delete(i):n.set(i,a),r=r.add(i)}return new St(s.key,n,new Pe(r.toArray()),De.none())}}function pp(s,e,t){s instanceof ls?function(r,i,a){const l=r.value.clone(),u=bc(r.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(s,e,t):s instanceof St?function(r,i,a){if(!$s(r.precondition,i))return void i.convertToUnknownDocument(a.version);const l=bc(r.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(wu(r)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(s,e,t):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Qn(s,e,t,n){return s instanceof ls?function(i,a,l,u){if(!$s(i.precondition,a))return l;const d=i.value.clone(),m=Ac(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(s,e,t,n):s instanceof St?function(i,a,l,u){if(!$s(i.precondition,a))return l;const d=Ac(i.fieldTransforms,u,a),m=a.data;return m.setAll(wu(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(s,e,t,n):function(i,a,l){return $s(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(s,e,t)}function gp(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),i=gu(n.transform,r||null);i!=null&&(t===null&&(t=Re.empty()),t.set(n.field,i))}return t||null}function Ic(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&un(n,r,(i,a)=>fp(i,a))}(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class ls extends Tr{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class St extends Tr{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wu(s){const e=new Map;return s.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}}),e}function bc(s,e,t){const n=new Map;Q(s.length===t.length,32656,{Re:t.length,Ve:s.length});for(let r=0;r<t.length;r++){const i=s[r],a=i.transform,l=e.data.field(i.field);n.set(i.field,dp(a,l,t[r]))}return n}function Ac(s,e,t){const n=new Map;for(const r of s){const i=r.transform,a=t.data.field(r.field);n.set(r.field,hp(i,a,e))}return n}class ro extends Tr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yp extends Tr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _p{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&pp(i,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Qn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Qn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=mu();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(r.key)?null:l;const u=Eu(a,l);u!==null&&n.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&un(this.mutations,e.mutations,(t,n)=>Ic(t,n))&&un(this.baseMutations,e.baseMutations,(t,n)=>Ic(t,n))}}class io{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Q(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=function(){return op}();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,n[a].version);return new io(e,t,n,r)}}/**
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
 */class vp{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ep{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ie,K;function wp(s){switch(s){case R.OK:return O(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return O(15467,{code:s})}}function Tu(s){if(s===void 0)return Je("GRPC error has no .code"),R.UNKNOWN;switch(s){case ie.OK:return R.OK;case ie.CANCELLED:return R.CANCELLED;case ie.UNKNOWN:return R.UNKNOWN;case ie.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ie.INTERNAL:return R.INTERNAL;case ie.UNAVAILABLE:return R.UNAVAILABLE;case ie.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ie.NOT_FOUND:return R.NOT_FOUND;case ie.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ie.ABORTED:return R.ABORTED;case ie.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ie.DATA_LOSS:return R.DATA_LOSS;default:return O(39323,{code:s})}}(K=ie||(ie={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Tp(){return new TextEncoder}/**
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
 */const Ip=new yt([4294967295,4294967295],0);function Sc(s){const e=Tp().encode(s),t=new Ml;return t.update(e),new Uint8Array(t.digest())}function Rc(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new yt([t,n],0),new yt([r,i],0)]}class oo{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new jn(`Invalid padding: ${t}`);if(n<0)throw new jn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new jn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new jn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=yt.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(yt.fromNumber(n)));return r.compare(Ip)===1&&(r=new yt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Sc(e),[n,r]=Rc(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,r,i);if(!this.we(a))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new oo(i,r,t);return n.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Sc(e),[n,r]=Rc(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,r,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class jn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ir{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,us.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ir(U.min(),r,new ee(H),Ye(),G())}}class us{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new us(n,t,G(),G(),G())}}/**
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
 */class qs{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class Iu{constructor(e,t){this.targetId=e,this.Ce=t}}class bu{constructor(e,t,n=ge.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Cc{constructor(){this.ve=0,this.Fe=xc(),this.Me=ge.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=G(),t=G(),n=G();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:O(38017,{changeType:i})}}),new us(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=xc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Q(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class bp{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ye(),this.Je=Ls(),this.He=Ls(),this.Ye=new ee(H)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:O(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,r)=>{this.rt(r)&&t(r)})}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(xi(i))if(n===0){const a=new L(i.path);this.et(t,a,Ee.newNoDocument(a,U.min()))}else Q(n===1,20013,{expectedCount:n});else{const a=this._t(t);if(a!==n){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let a,l;try{a=wt(n).toUint8Array()}catch(u){if(u instanceof Ql)return ln("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new oo(a,r,i)}catch(u){return ln(u instanceof jn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&xi(l.target)){const u=new L(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ee.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let n=G();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const r=new Ir(e,t,this.Ye,this.je,n);return this.je=Ye(),this.Je=Ls(),this.He=Ls(),this.Ye=new ee(H),r}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Cc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new he(H),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new he(H),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Cc),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ls(){return new ee(L.comparator)}function xc(){return new ee(L.comparator)}const Ap={asc:"ASCENDING",desc:"DESCENDING"},Sp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Rp={and:"AND",or:"OR"};class Cp{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vi(s,e){return s.useProto3Json||yr(e)?e:{value:e}}function sr(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Au(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function xp(s,e){return sr(s,e.toTimestamp())}function Be(s){return Q(!!s,49232),U.fromTimestamp(function(t){const n=Et(t);return new Z(n.seconds,n.nanos)}(s))}function ao(s,e){return Di(s,e).canonicalString()}function Di(s,e){const t=function(r){return new X(["projects",r.projectId,"databases",r.database])}(s).child("documents");return e===void 0?t:t.child(e)}function Su(s){const e=X.fromString(s);return Q(ku(e),10190,{key:e.toString()}),e}function Ni(s,e){return ao(s.databaseId,e.path)}function di(s,e){const t=Su(e);if(t.get(1)!==s.databaseId.projectId)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new L(Cu(t))}function Ru(s,e){return ao(s.databaseId,e)}function Pp(s){const e=Su(s);return e.length===4?X.emptyPath():Cu(e)}function Li(s){return new X(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Cu(s){return Q(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function Pc(s,e,t){return{name:Ni(s,e),fields:t.value.mapValue.fields}}function kp(s,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(Q(m===void 0||typeof m=="string",58123),ge.fromBase64String(m||"")):(Q(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ge.fromUint8Array(m||new Uint8Array))}(s,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const m=d.code===void 0?R.UNKNOWN:Tu(d.code);return new D(m,d.message||"")}(a);t=new bu(n,r,i,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=di(s,n.document.name),i=Be(n.document.updateTime),a=n.document.createTime?Be(n.document.createTime):U.min(),l=new Re({mapValue:{fields:n.document.fields}}),u=Ee.newFoundDocument(r,i,a,l),d=n.targetIds||[],m=n.removedTargetIds||[];t=new qs(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=di(s,n.document),i=n.readTime?Be(n.readTime):U.min(),a=Ee.newNoDocument(r,i),l=n.removedTargetIds||[];t=new qs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=di(s,n.document),i=n.removedTargetIds||[];t=new qs([],i,r,null)}else{if(!("filter"in e))return O(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:i}=n,a=new Ep(r,i),l=n.targetId;t=new Iu(l,a)}}return t}function Vp(s,e){let t;if(e instanceof ls)t={update:Pc(s,e.key,e.value)};else if(e instanceof ro)t={delete:Ni(s,e.key)};else if(e instanceof St)t={update:Pc(s,e.key,e.data),updateMask:$p(e.fieldMask)};else{if(!(e instanceof yp))return O(16599,{Vt:e.type});t={verify:Ni(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,a){const l=a.transform;if(l instanceof tr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ss)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof rs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof nr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw O(20930,{transform:a.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:xp(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O(27497)}(s,e.precondition)),t}function Dp(s,e){return s&&s.length>0?(Q(e!==void 0,14353),s.map(t=>function(r,i){let a=r.updateTime?Be(r.updateTime):Be(i);return a.isEqual(U.min())&&(a=Be(i)),new mp(a,r.transformResults||[])}(t,e))):[]}function Np(s,e){return{documents:[Ru(s,e.path)]}}function Lp(s,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Ru(s,r);const i=function(d){if(d.length!==0)return Pu(Ne.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:Xt(v.field),direction:Up(v.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Vi(s,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:r}}function Op(s){let e=Pp(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){Q(n===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(p){const v=xu(p);return v instanceof Ne&&iu(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(v=>function(P){return new ns(Yt(P.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(v))}(t.orderBy));let l=null;t.limit&&(l=function(p){let v;return v=typeof p=="object"?p.value:p,yr(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(p){const v=!!p.before,S=p.values||[];return new er(S,v)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const v=!p.before,S=p.values||[];return new er(S,v)}(t.endAt)),tp(e,r,a,i,l,"F",u,d)}function Mp(s,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xu(s){return s.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Yt(t.unaryFilter.field);return oe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Yt(t.unaryFilter.field);return oe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yt(t.unaryFilter.field);return oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yt(t.unaryFilter.field);return oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(s):s.fieldFilter!==void 0?function(t){return oe.create(Yt(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(t){return Ne.create(t.compositeFilter.filters.map(n=>xu(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(t.compositeFilter.op))}(s):O(30097,{filter:s})}function Up(s){return Ap[s]}function Fp(s){return Sp[s]}function Bp(s){return Rp[s]}function Xt(s){return{fieldPath:s.canonicalString()}}function Yt(s){return pe.fromServerFormat(s.fieldPath)}function Pu(s){return s instanceof oe?function(t){if(t.op==="=="){if(yc(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NAN"}};if(gc(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(yc(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NOT_NAN"}};if(gc(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xt(t.field),op:Fp(t.op),value:t.value}}}(s):s instanceof Ne?function(t){const n=t.getFilters().map(r=>Pu(r));return n.length===1?n[0]:{compositeFilter:{op:Bp(t.op),filters:n}}}(s):O(54877,{filter:s})}function $p(s){const e=[];return s.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ku(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
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
 */class ft{constructor(e,t,n,r,i=U.min(),a=U.min(),l=ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qp{constructor(e){this.yt=e}}function jp(s){const e=Op({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?ki(e,e.limit,"L"):e}/**
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
 */class zp{constructor(){this.Cn=new Hp}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(vt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(vt.min())}updateCollectionGroup(e,t,n){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class Hp{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new he(X.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new he(X.comparator)).toArray()}}/**
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
 */const kc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Vu=41943040;class Se{static withCacheSize(e){return new Se(e,Se.DEFAULT_COLLECTION_PERCENTILE,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */Se.DEFAULT_COLLECTION_PERCENTILE=10,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Se.DEFAULT=new Se(Vu,Se.DEFAULT_COLLECTION_PERCENTILE,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Se.DISABLED=new Se(-1,0,0);/**
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
 */class fn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new fn(0)}static cr(){return new fn(-1)}}/**
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
 */const Vc="LruGarbageCollector",Gp=1048576;function Dc([s,e],[t,n]){const r=H(s,t);return r===0?H(e,n):r}class Wp{constructor(e){this.Ir=e,this.buffer=new he(Dc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Dc(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Kp{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){N(Vc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){En(t)?N(Vc,"Ignoring IndexedDB error during garbage collection: ",t):await vn(t)}await this.Vr(3e5)})}}class Qp{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return C.resolve(gr.ce);const n=new Wp(t);return this.mr.forEachTarget(e,r=>n.Ar(r.sequenceNumber)).next(()=>this.mr.pr(e,r=>n.Ar(r))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(kc)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kc):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,r,i,a,l,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,a=Date.now(),this.nthSequenceNumber(e,r))).next(p=>(n=p,l=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(d=Date.now(),Qt()<=z.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${r} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p})))}}function Jp(s,e){return new Qp(s,e)}/**
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
 */class Xp{constructor(){this.changes=new jt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?C.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Yp{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Zp{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(n!==null&&Qn(n.mutation,r,Pe.empty(),Z.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,G()).next(()=>n))}getLocalViewOfDocuments(e,t,n=G()){const r=Lt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(i=>{let a=qn();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=Lt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,G()))}populateOverlays(e,t,n){const r=[];return n.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,n,r){let i=Ye();const a=Kn(),l=function(){return Kn()}();return t.forEach((u,d)=>{const m=n.get(d.key);r.has(d.key)&&(m===void 0||m.mutation instanceof St)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Qn(m.mutation,d,m.mutation.getFieldMask(),Z.now())):a.set(d.key,Pe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>l.set(d,new Yp(m,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const n=Kn();let r=new ee((a,l)=>a-l),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=n.get(u)||Pe.empty();m=l.applyToLocalView(d,m),n.set(u,m);const p=(r.get(l.batchId)||G()).add(u);r=r.insert(l.batchId,p)})}).next(()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,m=u.value,p=mu();m.forEach(v=>{if(!i.has(v)){const S=Eu(t.get(v),n.get(v));S!==null&&p.set(v,S),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,p))}return C.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,r){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):lu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):C.resolve(Lt());let l=Yn,u=i;return a.next(d=>C.forEach(d,(m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(m)?C.resolve():this.remoteDocumentCache.getEntry(e,m).next(v=>{u=u.insert(m,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,G())).next(m=>({batchId:l,changes:fu(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(n=>{let r=qn();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let a=qn();return this.indexManager.getCollectionParents(e,i).next(l=>C.forEach(l,u=>{const d=function(p,v){return new wn(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,n,r).next(m=>{m.forEach((p,v)=>{a=a.insert(p,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(a=>{i.forEach((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Ee.newInvalidDocument(m)))});let l=qn();return a.forEach((u,d)=>{const m=i.get(u);m!==void 0&&Qn(m.mutation,d,Pe.empty(),Z.now()),Er(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class eg{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return C.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Be(r.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(r){return{name:r.name,query:jp(r.bundledQuery),readTime:Be(r.readTime)}}(t)),C.resolve()}}/**
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
 */class tg{constructor(){this.overlays=new ee(L.comparator),this.qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Lt();return C.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&n.set(r,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((r,i)=>{this.St(e,t,i)}),C.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.qr.get(n);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(n)),C.resolve()}getOverlaysForCollection(e,t,n){const r=Lt(),i=t.length+1,a=new L(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>n&&r.set(u.getKey(),u)}return C.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ee((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=Lt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=Lt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=r)););return C.resolve(l)}St(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const a=this.qr.get(r.largestBatchId).delete(n.key);this.qr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new vp(t,n));let i=this.qr.get(t);i===void 0&&(i=G(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}}/**
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
 */class ng{constructor(){this.sessionToken=ge.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
 */class co{constructor(){this.Qr=new he(fe.$r),this.Ur=new he(fe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new fe(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Gr(new fe(e,t))}zr(e,t){e.forEach(n=>this.removeReference(n,t))}jr(e){const t=new L(new X([])),n=new fe(t,e),r=new fe(t,e+1),i=[];return this.Ur.forEachInRange([n,r],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new L(new X([])),n=new fe(t,e),r=new fe(t,e+1);let i=G();return this.Ur.forEachInRange([n,r],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new fe(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class fe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return L.comparator(e.key,t.key)||H(e.Yr,t.Yr)}static Kr(e,t){return H(e.Yr,t.Yr)||L.comparator(e.key,t.key)}}/**
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
 */class sg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new he(fe.$r)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new _p(i,t,n,r);this.mutationQueue.push(a);for(const l of r)this.Zr=this.Zr.add(new fe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ei(n),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Xi:this.tr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new fe(t,0),r=new fe(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,r],a=>{const l=this.Xr(a.Yr);i.push(l)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new he(H);return t.forEach(r=>{const i=new fe(r,0),a=new fe(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],l=>{n=n.add(l.Yr)})}),C.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;L.isDocumentKey(i)||(i=i.child(""));const a=new fe(new L(i),0);let l=new he(H);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!n.isPrefixOf(d)&&(d.length===r&&(l=l.add(u.Yr)),!0)},a),C.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(n=>{const r=this.Xr(n);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){Q(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return C.forEach(t.mutations,r=>{const i=new fe(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new fe(t,0),r=this.Zr.firstAfterOrEqual(n);return C.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class rg{constructor(e){this.ri=e,this.docs=function(){return new ee(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return C.resolve(n?n.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let n=Ye();return t.forEach(r=>{const i=this.docs.get(r);n=n.insert(r,i?i.document.mutableCopy():Ee.newInvalidDocument(r))}),C.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Ye();const a=t.path,l=new L(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Dm(Vm(m),n)<=0||(r.has(m.key)||Er(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,n,r){O(9500)}ii(e,t){return C.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new ig(this)}getSize(e){return C.resolve(this.size)}}class ig extends Xp{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(n)}),C.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class og{constructor(e){this.persistence=e,this.si=new jt(t=>eo(t),to),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.oi=0,this._i=new co,this.targetCount=0,this.ai=fn.ur()}forEachTarget(e,t){return this.si.forEach((n,r)=>t(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),C.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new fn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Pr(t),C.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return C.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),C.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return C.resolve(n)}containsKey(e,t){return C.resolve(this._i.containsKey(t))}}/**
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
 */class Du{constructor(e,t){this.ui={},this.overlays={},this.ci=new gr(0),this.li=!1,this.li=!0,this.hi=new ng,this.referenceDelegate=e(this),this.Pi=new og(this),this.indexManager=new zp,this.remoteDocumentCache=function(r){return new rg(r)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new qp(t),this.Ii=new eg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new sg(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){N("MemoryPersistence","Starting transaction:",e);const r=new ag(this.ci.next());return this.referenceDelegate.Ei(),n(r).next(i=>this.referenceDelegate.di(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ai(e,t){return C.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class ag extends Lm{constructor(e){super(),this.currentSequenceNumber=e}}class lo{constructor(e){this.persistence=e,this.Ri=new co,this.Vi=null}static mi(e){return new lo(e)}get fi(){if(this.Vi)return this.Vi;throw O(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),C.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(r=>this.fi.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.fi.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,n=>{const r=L.fromPath(n);return this.gi(e,r).next(i=>{i||t.removeEntry(r,U.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class rr{constructor(e,t){this.persistence=e,this.pi=new jt(n=>Um(n.path),(n,r)=>n.isEqual(r)),this.garbageCollector=Jp(this,t)}static mi(e,t){return new rr(e,t)}Ei(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(r=>n+r))}wr(e){let t=0;return this.pr(e,n=>{t++}).next(()=>t)}pr(e,t){return C.forEach(this.pi,(n,r)=>this.br(e,n,r).next(i=>i?C.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,a=>this.br(e,a,t).next(l=>{l||(n++,i.removeEntry(a,U.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),C.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fs(e.data.value)),t}br(e,t,n){return C.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return C.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class uo{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=r}static As(e,t){let n=G(),r=G();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new uo(e,t.fromCache,n,r)}}/**
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
 */class cg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lg{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return tf()?8:Om(we())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,r,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new cg;return this.Ss(e,t,a).next(l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)})}).next(()=>i.result)}bs(e,t,n,r){return n.documentReadCount<this.fs?(Qt()<=z.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Jt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(Qt()<=z.DEBUG&&N("QueryEngine","Query:",Jt(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.gs*r?(Qt()<=z.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Jt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fe(t))):C.resolve())}ys(e,t){if(wc(t))return C.resolve(null);let n=Fe(t);return this.indexManager.getIndexType(e,n).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=ki(t,null,"F"),n=Fe(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const a=G(...i);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,n).next(u=>{const d=this.Ds(t,l);return this.Cs(t,d,a,u.readTime)?this.ys(e,ki(t,null,"F")):this.vs(e,d,t,u)}))})))}ws(e,t,n,r){return wc(t)||r.isEqual(U.min())?C.resolve(null):this.ps.getDocuments(e,n).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,n,r)?C.resolve(null):(Qt()<=z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Jt(t)),this.vs(e,a,t,km(r,Yn)).next(l=>l))})}Ds(e,t){let n=new he(hu(e));return t.forEach((r,i)=>{Er(e,i)&&(n=n.add(i))}),n}Cs(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,n){return Qt()<=z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Jt(t)),this.ps.getDocumentsMatchingQuery(e,t,vt.min(),n)}vs(e,t,n,r){return this.ps.getDocumentsMatchingQuery(e,n,r).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const ho="LocalStore",ug=3e8;class hg{constructor(e,t,n,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new ee(H),this.xs=new jt(i=>eo(i),to),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zp(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function dg(s,e,t,n){return new hg(s,e,t,n)}async function Nu(s,e){const t=$(s);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],l=[];let u=G();for(const d of r){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){l.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(n,u).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:l}))})})}function fg(s,e){const t=$(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,d,m){const p=d.batch,v=p.keys();let S=C.resolve();return v.forEach(P=>{S=S.next(()=>m.getEntry(u,P)).next(V=>{const x=d.docVersions.get(P);Q(x!==null,48541),V.version.compareTo(x)<0&&(p.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),m.addEntry(V)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let u=G();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,r))})}function Lu(s){const e=$(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function mg(s,e){const t=$(s),n=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const l=[];e.targetChanges.forEach((m,p)=>{const v=r.get(p);if(!v)return;l.push(t.Pi.removeMatchingKeys(i,m.removedDocuments,p).next(()=>t.Pi.addMatchingKeys(i,m.addedDocuments,p)));let S=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(ge.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),r=r.insert(p,S),function(V,x,F){return V.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=ug?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(v,S,m)&&l.push(t.Pi.updateTargetData(i,S))});let u=Ye(),d=G();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(pg(i,a,e.documentUpdates).next(m=>{u=m.ks,d=m.qs})),!n.isEqual(U.min())){const m=t.Pi.getLastRemoteSnapshotVersion(i).next(p=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n));l.push(m)}return C.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.Ms=r,i))}function pg(s,e,t){let n=G(),r=G();return t.forEach(i=>n=n.add(i)),e.getEntries(s,n).next(i=>{let a=Ye();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(U.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):N(ho,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{ks:a,qs:r}})}function gg(s,e){const t=$(s);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Xi),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function yg(s,e){const t=$(s);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return t.Pi.getTargetData(n,e).next(i=>i?(r=i,C.resolve(r)):t.Pi.allocateTargetId(n).next(a=>(r=new ft(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,r).next(()=>r))))}).then(n=>{const r=t.Ms.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n})}async function Oi(s,e,t){const n=$(s),r=n.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!En(a))throw a;N(ho,`Failed to update sequence numbers for target ${e}: ${a}`)}n.Ms=n.Ms.remove(e),n.xs.delete(r.target)}function Nc(s,e,t){const n=$(s);let r=U.min(),i=G();return n.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,m){const p=$(u),v=p.xs.get(m);return v!==void 0?C.resolve(p.Ms.get(v)):p.Pi.getTargetData(d,m)}(n,a,Fe(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>n.Fs.getDocumentsMatchingQuery(a,e,t?r:U.min(),t?i:G())).next(l=>(_g(n,sp(e),l),{documents:l,Qs:i})))}function _g(s,e,t){let n=s.Os.get(e)||U.min();t.forEach((r,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),s.Os.set(e,n)}class Lc{constructor(){this.activeTargetIds=lp()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vg{constructor(){this.Mo=new Lc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Lc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Eg{Oo(e){}shutdown(){}}/**
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
 */const Oc="ConnectivityMonitor";class Mc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){N(Oc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){N(Oc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Os=null;function Mi(){return Os===null?Os=function(){return 268435456+Math.round(2147483648*Math.random())}():Os++,"0x"+Os.toString(16)}/**
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
 */const fi="RestConnection",wg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Tg{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Wo=this.databaseId.database===Ys?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Go(e,t,n,r,i){const a=Mi(),l=this.zo(e,t.toUriEncodedString());N(fi,`Sending RPC '${e}' ${a}:`,l,n);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,r,i);const{host:d}=new URL(l),m=gn(d);return this.Jo(e,l,u,n,m).then(p=>(N(fi,`Received RPC '${e}' ${a}: `,p),p),p=>{throw ln(fi,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",n),p})}Ho(e,t,n,r,i,a){return this.Go(e,t,n,r,i)}jo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_n}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),n&&n.headers.forEach((r,i)=>e[i]=r)}zo(e,t){const n=wg[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
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
 */class Ig{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const _e="WebChannelConnection";class bg extends Tg{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,i){const a=Mi();return new Promise((l,u)=>{const d=new Ul;d.setWithCredentials(!0),d.listenOnce(Fl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Us.NO_ERROR:const p=d.getResponseJson();N(_e,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case Us.TIMEOUT:N(_e,`RPC '${e}' ${a} timed out`),u(new D(R.DEADLINE_EXCEEDED,"Request time out"));break;case Us.HTTP_ERROR:const v=d.getStatus();if(N(_e,`RPC '${e}' ${a} failed with status:`,v,"response text:",d.getResponseText()),v>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const P=S==null?void 0:S.error;if(P&&P.status&&P.message){const V=function(F){const B=F.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(B)>=0?B:R.UNKNOWN}(P.status);u(new D(V,P.message))}else u(new D(R.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new D(R.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(_e,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(r);N(_e,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",m,n,15)})}T_(e,t,n){const r=Mi(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ql(),l=$l(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const m=i.join("");N(_e,`Creating RPC '${e}' stream ${r}: ${m}`,u);const p=a.createWebChannel(m,u);this.I_(p);let v=!1,S=!1;const P=new Ig({Yo:x=>{S?N(_e,`Not sending because RPC '${e}' stream ${r} is closed:`,x):(v||(N(_e,`Opening RPC '${e}' stream ${r} transport.`),p.open(),v=!0),N(_e,`RPC '${e}' stream ${r} sending:`,x),p.send(x))},Zo:()=>p.close()}),V=(x,F,B)=>{x.listen(F,W=>{try{B(W)}catch(re){setTimeout(()=>{throw re},0)}})};return V(p,$n.EventType.OPEN,()=>{S||(N(_e,`RPC '${e}' stream ${r} transport opened.`),P.o_())}),V(p,$n.EventType.CLOSE,()=>{S||(S=!0,N(_e,`RPC '${e}' stream ${r} transport closed`),P.a_(),this.E_(p))}),V(p,$n.EventType.ERROR,x=>{S||(S=!0,ln(_e,`RPC '${e}' stream ${r} transport errored. Name:`,x.name,"Message:",x.message),P.a_(new D(R.UNAVAILABLE,"The operation could not be completed")))}),V(p,$n.EventType.MESSAGE,x=>{var F;if(!S){const B=x.data[0];Q(!!B,16349);const W=B,re=(W==null?void 0:W.error)||((F=W[0])==null?void 0:F.error);if(re){N(_e,`RPC '${e}' stream ${r} received error:`,re);const Ce=re.status;let le=function(_){const T=ie[_];if(T!==void 0)return Tu(T)}(Ce),w=re.message;le===void 0&&(le=R.INTERNAL,w="Unknown error status: "+Ce+" with message "+re.message),S=!0,P.a_(new D(le,w)),p.close()}else N(_e,`RPC '${e}' stream ${r} received:`,B),P.u_(B)}}),V(l,Bl.STAT_EVENT,x=>{x.stat===bi.PROXY?N(_e,`RPC '${e}' stream ${r} detected buffering proxy`):x.stat===bi.NOPROXY&&N(_e,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function mi(){return typeof document<"u"?document:null}/**
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
 */function br(s){return new Cp(s,!0)}/**
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
 */class Ou{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&N("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Uc="PersistentStream";class Mu{constructor(e,t,n,r,i,a,l,u){this.Mi=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ou(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(Je(t.toString()),Je("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.D_===t&&this.G_(n,r)},n=>{e(()=>{const r=new D(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(r)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(r=>{n(()=>this.z_(r))}),this.stream.onMessage(r=>{n(()=>++this.F_==1?this.J_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return N(Uc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(N(Uc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ag extends Mu{constructor(e,t,n,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=kp(this.serializer,e),n=function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Be(a.readTime):U.min()}(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=Li(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=xi(u)?{documents:Np(i,u)}:{query:Lp(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Au(i,a.resumeToken);const d=Vi(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=sr(i,a.snapshotVersion.toTimestamp());const d=Vi(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const n=Mp(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=Li(this.serializer),t.removeTarget=e,this.q_(t)}}class Sg extends Mu{constructor(e,t,n,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Dp(e.writeResults,e.commitTime),n=Be(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Li(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Vp(this.serializer,n))};this.q_(t)}}/**
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
 */class Rg{}class Cg extends Rg{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Di(t,n),r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(R.UNKNOWN,i.toString())})}Ho(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,Di(t,n),r,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(R.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class xg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Je(t),this.aa=!1):N("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const $t="RemoteStore";class Pg{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{n.enqueueAndForget(async()=>{zt(this)&&(N($t,"Restarting streams for network reachability change."),await async function(u){const d=$(u);d.Ea.add(4),await hs(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Ar(d)}(this))})}),this.Ra=new xg(n,r)}}async function Ar(s){if(zt(s))for(const e of s.da)await e(!0)}async function hs(s){for(const e of s.da)await e(!1)}function Uu(s,e){const t=$(s);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),go(t)?po(t):Tn(t).O_()&&mo(t,e))}function fo(s,e){const t=$(s),n=Tn(t);t.Ia.delete(e),n.O_()&&Fu(t,e),t.Ia.size===0&&(n.O_()?n.L_():zt(t)&&t.Ra.set("Unknown"))}function mo(s,e){if(s.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Tn(s).Y_(e)}function Fu(s,e){s.Va.Ue(e),Tn(s).Z_(e)}function po(s){s.Va=new bp({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),At:e=>s.Ia.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),Tn(s).start(),s.Ra.ua()}function go(s){return zt(s)&&!Tn(s).x_()&&s.Ia.size>0}function zt(s){return $(s).Ea.size===0}function Bu(s){s.Va=void 0}async function kg(s){s.Ra.set("Online")}async function Vg(s){s.Ia.forEach((e,t)=>{mo(s,e)})}async function Dg(s,e){Bu(s),go(s)?(s.Ra.ha(e),po(s)):s.Ra.set("Unknown")}async function Ng(s,e,t){if(s.Ra.set("Online"),e instanceof bu&&e.state===2&&e.cause)try{await async function(r,i){const a=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,a),r.Ia.delete(l),r.Va.removeTarget(l))}(s,e)}catch(n){N($t,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ir(s,n)}else if(e instanceof qs?s.Va.Ze(e):e instanceof Iu?s.Va.st(e):s.Va.tt(e),!t.isEqual(U.min()))try{const n=await Lu(s.localStore);t.compareTo(n)>=0&&await function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ia.get(d);m&&i.Ia.set(d,m.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const m=i.Ia.get(u);if(!m)return;i.Ia.set(u,m.withResumeToken(ge.EMPTY_BYTE_STRING,m.snapshotVersion)),Fu(i,u);const p=new ft(m.target,u,d,m.sequenceNumber);mo(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(s,t)}catch(n){N($t,"Failed to raise snapshot:",n),await ir(s,n)}}async function ir(s,e,t){if(!En(e))throw e;s.Ea.add(1),await hs(s),s.Ra.set("Offline"),t||(t=()=>Lu(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{N($t,"Retrying IndexedDB access"),await t(),s.Ea.delete(1),await Ar(s)})}function $u(s,e){return e().catch(t=>ir(s,t,e))}async function Sr(s){const e=$(s),t=It(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xi;for(;Lg(e);)try{const r=await gg(e.localStore,n);if(r===null){e.Ta.length===0&&t.L_();break}n=r.batchId,Og(e,r)}catch(r){await ir(e,r)}qu(e)&&ju(e)}function Lg(s){return zt(s)&&s.Ta.length<10}function Og(s,e){s.Ta.push(e);const t=It(s);t.O_()&&t.X_&&t.ea(e.mutations)}function qu(s){return zt(s)&&!It(s).x_()&&s.Ta.length>0}function ju(s){It(s).start()}async function Mg(s){It(s).ra()}async function Ug(s){const e=It(s);for(const t of s.Ta)e.ea(t.mutations)}async function Fg(s,e,t){const n=s.Ta.shift(),r=io.from(n,e,t);await $u(s,()=>s.remoteSyncer.applySuccessfulWrite(r)),await Sr(s)}async function Bg(s,e){e&&It(s).X_&&await async function(n,r){if(function(a){return wp(a)&&a!==R.ABORTED}(r.code)){const i=n.Ta.shift();It(n).B_(),await $u(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Sr(n)}}(s,e),qu(s)&&ju(s)}async function Fc(s,e){const t=$(s);t.asyncQueue.verifyOperationInProgress(),N($t,"RemoteStore received new credentials");const n=zt(t);t.Ea.add(3),await hs(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ar(t)}async function $g(s,e){const t=$(s);e?(t.Ea.delete(2),await Ar(t)):e||(t.Ea.add(2),await hs(t),t.Ra.set("Unknown"))}function Tn(s){return s.ma||(s.ma=function(t,n,r){const i=$(t);return i.sa(),new Ag(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(s.datastore,s.asyncQueue,{Xo:kg.bind(null,s),t_:Vg.bind(null,s),r_:Dg.bind(null,s),H_:Ng.bind(null,s)}),s.da.push(async e=>{e?(s.ma.B_(),go(s)?po(s):s.Ra.set("Unknown")):(await s.ma.stop(),Bu(s))})),s.ma}function It(s){return s.fa||(s.fa=function(t,n,r){const i=$(t);return i.sa(),new Sg(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(s.datastore,s.asyncQueue,{Xo:()=>Promise.resolve(),t_:Mg.bind(null,s),r_:Bg.bind(null,s),ta:Ug.bind(null,s),na:Fg.bind(null,s)}),s.da.push(async e=>{e?(s.fa.B_(),await Sr(s)):(await s.fa.stop(),s.Ta.length>0&&(N($t,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))})),s.fa}/**
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
 */class yo{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ke,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const a=Date.now()+n,l=new yo(e,t,a,r,i);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _o(s,e){if(Je("AsyncQueue",`${e}: ${s}`),En(s))return new D(R.UNAVAILABLE,`${e}: ${s}`);throw s}/**
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
 */class en{static emptySet(e){return new en(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||L.comparator(t.key,n.key):(t,n)=>L.comparator(t.key,n.key),this.keyedMap=qn(),this.sortedSet=new ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof en)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new en;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class Bc{constructor(){this.ga=new ee(L.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):O(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class mn{constructor(e,t,n,r,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,r,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new mn(e,t,en.emptySet(t),a,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
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
 */class qg{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class jg{constructor(){this.queries=$c(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const r=$(t),i=r.queries;r.queries=$c(),i.forEach((a,l)=>{for(const u of l.Sa)u.onError(n)})})(this,new D(R.ABORTED,"Firestore shutting down"))}}function $c(){return new jt(s=>uu(s),vr)}async function zu(s,e){const t=$(s);let n=3;const r=e.query;let i=t.queries.get(r);i?!i.ba()&&e.Da()&&(n=2):(i=new qg,n=e.Da()?0:1);try{switch(n){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const l=_o(a,`Initialization of query '${Jt(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&vo(t)}async function Hu(s,e){const t=$(s),n=e.query;let r=3;const i=t.queries.get(n);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function zg(s,e){const t=$(s);let n=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(r)&&(n=!0);a.wa=r}}n&&vo(t)}function Hg(s,e,t){const n=$(s),r=n.queries.get(e);if(r)for(const i of r.Sa)i.onError(t);n.queries.delete(e)}function vo(s){s.Ca.forEach(e=>{e.next()})}var Ui,qc;(qc=Ui||(Ui={})).Ma="default",qc.Cache="cache";class Gu{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new mn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=mn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ui.Cache}}/**
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
 */class Wu{constructor(e){this.key=e}}class Ku{constructor(e){this.key=e}}class Gg{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=G(),this.mutatedKeys=G(),this.eu=hu(e),this.tu=new en(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new Bc,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((m,p)=>{const v=r.get(m),S=Er(this.query,p)?p:null,P=!!v&&this.mutatedKeys.has(v.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let x=!1;v&&S?v.data.isEqual(S.data)?P!==V&&(n.track({type:3,doc:S}),x=!0):this.su(v,S)||(n.track({type:2,doc:S}),x=!0,(u&&this.eu(S,u)>0||d&&this.eu(S,d)<0)&&(l=!0)):!v&&S?(n.track({type:0,doc:S}),x=!0):v&&!S&&(n.track({type:1,doc:v}),x=!0,(u||d)&&(l=!0)),x&&(S?(a=a.add(S),i=V?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{tu:a,iu:n,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((m,p)=>function(S,P){const V=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Rt:x})}};return V(S)-V(P)}(m.type,p.type)||this.eu(m.doc,p.doc)),this.ou(n),r=r??!1;const l=t&&!r?this._u():[],u=this.Xa.size===0&&this.current&&!r?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new mn(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Bc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=G(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const t=[];return e.forEach(n=>{this.Xa.has(n)||t.push(new Ku(n))}),this.Xa.forEach(n=>{e.has(n)||t.push(new Wu(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=G();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return mn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Eo="SyncEngine";class Wg{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Kg{constructor(e){this.key=e,this.hu=!1}}class Qg{constructor(e,t,n,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new jt(l=>uu(l),vr),this.Iu=new Map,this.Eu=new Set,this.du=new ee(L.comparator),this.Au=new Map,this.Ru=new co,this.Vu={},this.mu=new Map,this.fu=fn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Jg(s,e,t=!0){const n=eh(s);let r;const i=n.Tu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Qu(n,e,t,!0),r}async function Xg(s,e){const t=eh(s);await Qu(t,e,!0,!1)}async function Qu(s,e,t,n){const r=await yg(s.localStore,Fe(e)),i=r.targetId,a=s.sharedClientState.addLocalQueryTarget(i,t);let l;return n&&(l=await Yg(s,e,i,a==="current",r.resumeToken)),s.isPrimaryClient&&t&&Uu(s.remoteStore,r),l}async function Yg(s,e,t,n,r){s.pu=(p,v,S)=>async function(V,x,F,B){let W=x.view.ru(F);W.Cs&&(W=await Nc(V.localStore,x.query,!1).then(({documents:w})=>x.view.ru(w,W)));const re=B&&B.targetChanges.get(x.targetId),Ce=B&&B.targetMismatches.get(x.targetId)!=null,le=x.view.applyChanges(W,V.isPrimaryClient,re,Ce);return zc(V,x.targetId,le.au),le.snapshot}(s,p,v,S);const i=await Nc(s.localStore,e,!0),a=new Gg(e,i.Qs),l=a.ru(i.documents),u=us.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),d=a.applyChanges(l,s.isPrimaryClient,u);zc(s,t,d.au);const m=new Wg(e,t,a);return s.Tu.set(e,m),s.Iu.has(t)?s.Iu.get(t).push(e):s.Iu.set(t,[e]),d.snapshot}async function Zg(s,e,t){const n=$(s),r=n.Tu.get(e),i=n.Iu.get(r.targetId);if(i.length>1)return n.Iu.set(r.targetId,i.filter(a=>!vr(a,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Oi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),t&&fo(n.remoteStore,r.targetId),Fi(n,r.targetId)}).catch(vn)):(Fi(n,r.targetId),await Oi(n.localStore,r.targetId,!0))}async function ey(s,e){const t=$(s),n=t.Tu.get(e),r=t.Iu.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),fo(t.remoteStore,n.targetId))}async function ty(s,e,t){const n=cy(s);try{const r=await function(a,l){const u=$(a),d=Z.now(),m=l.reduce((S,P)=>S.add(P.key),G());let p,v;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=Ye(),V=G();return u.Ns.getEntries(S,m).next(x=>{P=x,P.forEach((F,B)=>{B.isValidDocument()||(V=V.add(F))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,P)).next(x=>{p=x;const F=[];for(const B of l){const W=gp(B,p.get(B.key).overlayedDocument);W!=null&&F.push(new St(B.key,W,nu(W.value.mapValue),De.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,F,l)}).next(x=>{v=x;const F=x.applyToLocalDocumentSet(p,V);return u.documentOverlayCache.saveOverlays(S,x.batchId,F)})}).then(()=>({batchId:v.batchId,changes:fu(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),function(a,l,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new ee(H)),d=d.insert(l,u),a.Vu[a.currentUser.toKey()]=d}(n,r.batchId,t),await ds(n,r.changes),await Sr(n.remoteStore)}catch(r){const i=_o(r,"Failed to persist write");t.reject(i)}}async function Ju(s,e){const t=$(s);try{const n=await mg(t.localStore,e);e.targetChanges.forEach((r,i)=>{const a=t.Au.get(i);a&&(Q(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?Q(a.hu,14607):r.removedDocuments.size>0&&(Q(a.hu,42227),a.hu=!1))}),await ds(t,n,e)}catch(n){await vn(n)}}function jc(s,e,t){const n=$(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&r.push(l.snapshot)}),function(a,l){const u=$(a);u.onlineState=l;let d=!1;u.queries.forEach((m,p)=>{for(const v of p.Sa)v.va(l)&&(d=!0)}),d&&vo(u)}(n.eventManager,e),r.length&&n.Pu.H_(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function ny(s,e,t){const n=$(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Au.get(e),i=r&&r.key;if(i){let a=new ee(L.comparator);a=a.insert(i,Ee.newNoDocument(i,U.min()));const l=G().add(i),u=new Ir(U.min(),new Map,new ee(H),a,l);await Ju(n,u),n.du=n.du.remove(i),n.Au.delete(e),wo(n)}else await Oi(n.localStore,e,!1).then(()=>Fi(n,e,t)).catch(vn)}async function sy(s,e){const t=$(s),n=e.batch.batchId;try{const r=await fg(t.localStore,e);Yu(t,n,null),Xu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await ds(t,r)}catch(r){await vn(r)}}async function ry(s,e,t){const n=$(s);try{const r=await function(a,l){const u=$(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,l).next(p=>(Q(p!==null,37113),m=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(n.localStore,e);Yu(n,e,t),Xu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await ds(n,r)}catch(r){await vn(r)}}function Xu(s,e){(s.mu.get(e)||[]).forEach(t=>{t.resolve()}),s.mu.delete(e)}function Yu(s,e,t){const n=$(s);let r=n.Vu[n.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),n.Vu[n.currentUser.toKey()]=r}}function Fi(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Iu.get(e))s.Tu.delete(n),t&&s.Pu.yu(n,t);s.Iu.delete(e),s.isPrimaryClient&&s.Ru.jr(e).forEach(n=>{s.Ru.containsKey(n)||Zu(s,n)})}function Zu(s,e){s.Eu.delete(e.path.canonicalString());const t=s.du.get(e);t!==null&&(fo(s.remoteStore,t),s.du=s.du.remove(e),s.Au.delete(t),wo(s))}function zc(s,e,t){for(const n of t)n instanceof Wu?(s.Ru.addReference(n.key,e),iy(s,n)):n instanceof Ku?(N(Eo,"Document no longer in limbo: "+n.key),s.Ru.removeReference(n.key,e),s.Ru.containsKey(n.key)||Zu(s,n.key)):O(19791,{wu:n})}function iy(s,e){const t=e.key,n=t.path.canonicalString();s.du.get(t)||s.Eu.has(n)||(N(Eo,"New document in limbo: "+t),s.Eu.add(n),wo(s))}function wo(s){for(;s.Eu.size>0&&s.du.size<s.maxConcurrentLimboResolutions;){const e=s.Eu.values().next().value;s.Eu.delete(e);const t=new L(X.fromString(e)),n=s.fu.next();s.Au.set(n,new Kg(t)),s.du=s.du.insert(t,n),Uu(s.remoteStore,new ft(Fe(no(t.path)),n,"TargetPurposeLimboResolution",gr.ce))}}async function ds(s,e,t){const n=$(s),r=[],i=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach((l,u)=>{a.push(n.pu(u,e,t).then(d=>{var m;if((d||t)&&n.isPrimaryClient){const p=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:m.current;n.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){r.push(d);const p=uo.As(u.targetId,d);i.push(p)}}))}),await Promise.all(a),n.Pu.H_(r),await async function(u,d){const m=$(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>C.forEach(d,v=>C.forEach(v.Es,S=>m.persistence.referenceDelegate.addReference(p,v.targetId,S)).next(()=>C.forEach(v.ds,S=>m.persistence.referenceDelegate.removeReference(p,v.targetId,S)))))}catch(p){if(!En(p))throw p;N(ho,"Failed to update sequence numbers: "+p)}for(const p of d){const v=p.targetId;if(!p.fromCache){const S=m.Ms.get(v),P=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(P);m.Ms=m.Ms.insert(v,V)}}}(n.localStore,i))}async function oy(s,e){const t=$(s);if(!t.currentUser.isEqual(e)){N(Eo,"User change. New user:",e.toKey());const n=await Nu(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new D(R.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ds(t,n.Ls)}}function ay(s,e){const t=$(s),n=t.Au.get(e);if(n&&n.hu)return G().add(n.key);{let r=G();const i=t.Iu.get(e);if(!i)return r;for(const a of i){const l=t.Tu.get(a);r=r.unionWith(l.view.nu)}return r}}function eh(s){const e=$(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ju.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ay.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ny.bind(null,e),e.Pu.H_=zg.bind(null,e.eventManager),e.Pu.yu=Hg.bind(null,e.eventManager),e}function cy(s){const e=$(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ry.bind(null,e),e}class or{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=br(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return dg(this.persistence,new lg,e.initialUser,this.serializer)}Cu(e){return new Du(lo.mi,this.serializer)}Du(e){return new vg}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}or.provider={build:()=>new or};class ly extends or{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Q(this.persistence.referenceDelegate instanceof rr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Kp(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Se.withCacheSize(this.cacheSizeBytes):Se.DEFAULT;return new Du(n=>rr.mi(n,t),this.serializer)}}class Bi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>jc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=oy.bind(null,this.syncEngine),await $g(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jg}()}createDatastore(e){const t=br(e.databaseInfo.databaseId),n=function(i){return new bg(i)}(e.databaseInfo);return function(i,a,l,u){return new Cg(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,r,i,a,l){return new Pg(n,r,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>jc(this.syncEngine,t,0),function(){return Mc.v()?new Mc:new Eg}())}createSyncEngine(e,t){return function(r,i,a,l,u,d,m){const p=new Qg(r,i,a,l,u,d);return m&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=$(r);N($t,"RemoteStore shutting down."),i.Ea.add(5),await hs(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Bi.provider={build:()=>new Bi};/**
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
 */class th{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Je("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const bt="FirestoreClient";class uy{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=ve.UNAUTHENTICATED,this.clientId=Ji.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{N(bt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(N(bt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ke;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=_o(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function pi(s,e){s.asyncQueue.verifyOperationInProgress(),N(bt,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener(async r=>{n.isEqual(r)||(await Nu(e.localStore,r),n=r)}),e.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=e}async function Hc(s,e){s.asyncQueue.verifyOperationInProgress();const t=await hy(s);N(bt,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener(n=>Fc(e.remoteStore,n)),s.setAppCheckTokenChangeListener((n,r)=>Fc(e.remoteStore,r)),s._onlineComponents=e}async function hy(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){N(bt,"Using user provided OfflineComponentProvider");try{await pi(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===R.FAILED_PRECONDITION||r.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;ln("Error using user provided cache. Falling back to memory cache: "+t),await pi(s,new or)}}else N(bt,"Using default OfflineComponentProvider"),await pi(s,new ly(void 0));return s._offlineComponents}async function nh(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(N(bt,"Using user provided OnlineComponentProvider"),await Hc(s,s._uninitializedComponentsProvider._online)):(N(bt,"Using default OnlineComponentProvider"),await Hc(s,new Bi))),s._onlineComponents}function dy(s){return nh(s).then(e=>e.syncEngine)}async function sh(s){const e=await nh(s),t=e.eventManager;return t.onListen=Jg.bind(null,e.syncEngine),t.onUnlisten=Zg.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Xg.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ey.bind(null,e.syncEngine),t}function fy(s,e,t={}){const n=new Ke;return s.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const m=new th({next:v=>{m.Nu(),a.enqueueAndForget(()=>Hu(i,p));const S=v.docs.has(l);!S&&v.fromCache?d.reject(new D(R.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&v.fromCache&&u&&u.source==="server"?d.reject(new D(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),p=new Gu(no(l.path),m,{includeMetadataChanges:!0,qa:!0});return zu(i,p)}(await sh(s),s.asyncQueue,e,t,n)),n.promise}function my(s,e,t={}){const n=new Ke;return s.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const m=new th({next:v=>{m.Nu(),a.enqueueAndForget(()=>Hu(i,p)),v.fromCache&&u.source==="server"?d.reject(new D(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),p=new Gu(l,m,{includeMetadataChanges:!0,qa:!0});return zu(i,p)}(await sh(s),s.asyncQueue,e,t,n)),n.promise}/**
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
 */function rh(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
 */const Gc=new Map;/**
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
 */const ih="firestore.googleapis.com",Wc=!0;class Kc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ih,this.ssl=Wc}else this.host=e.host,this.ssl=e.ssl??Wc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Vu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Gp)throw new D(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Pm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rh(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rr{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Em;switch(n.type){case"firstParty":return new bm(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Gc.get(t);n&&(N("ComponentProvider","Removing Datastore"),Gc.delete(t),n.terminate())}(this),Promise.resolve()}}function py(s,e,t,n={}){var d;s=Xe(s,Rr);const r=gn(e),i=s._getSettings(),a={...i,emulatorOptions:s._getEmulatorOptions()},l=`${e}:${t}`;r&&(xl(`https://${l}`),Pl("Firestore",!0)),i.host!==ih&&i.host!==l&&ln("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:r,emulatorOptions:n};if(!Ut(u,a)&&(s._setSettings(u),n.mockUserToken)){let m,p;if(typeof n.mockUserToken=="string")m=n.mockUserToken,p=ve.MOCK_USER;else{m=Gd(n.mockUserToken,(d=s._app)==null?void 0:d.options.projectId);const v=n.mockUserToken.sub||n.mockUserToken.user_id;if(!v)throw new D(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ve(v)}s._authCredentials=new wm(new zl(m,p))}}/**
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
 */class Ht{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ht(this.firestore,e,this._query)}}class ce{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _t(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ce(this.firestore,e,this._key)}toJSON(){return{type:ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(cs(t,ce._jsonSchema))return new ce(e,n||null,new L(X.fromString(t.referencePath)))}}ce._jsonSchemaVersion="firestore/documentReference/1.0",ce._jsonSchema={type:ae("string",ce._jsonSchemaVersion),referencePath:ae("string")};class _t extends Ht{constructor(e,t,n){super(e,t,no(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ce(this.firestore,null,new L(e))}withConverter(e){return new _t(this.firestore,e,this._path)}}function Qc(s,e,...t){if(s=be(s),Hl("collection","path",e),s instanceof Rr){const n=X.fromString(e,...t);return ac(n),new _t(s,null,n)}{if(!(s instanceof ce||s instanceof _t))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(X.fromString(e,...t));return ac(n),new _t(s.firestore,null,n)}}function js(s,e,...t){if(s=be(s),arguments.length===1&&(e=Ji.newId()),Hl("doc","path",e),s instanceof Rr){const n=X.fromString(e,...t);return oc(n),new ce(s,null,new L(n))}{if(!(s instanceof ce||s instanceof _t))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(X.fromString(e,...t));return oc(n),new ce(s.firestore,s instanceof _t?s.converter:null,new L(n))}}/**
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
 */const Jc="AsyncQueue";class Xc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ou(this,"async_queue_retry"),this._c=()=>{const n=mi();n&&N(Jc,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=mi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=mi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Ke;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!En(e))throw e;N(Jc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,Je("INTERNAL UNHANDLED ERROR: ",Yc(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=yo.createAndSchedule(this,e,t,n,i=>this.hc(i));return this.tc.push(r),r}uc(){this.nc&&O(47125,{Pc:Yc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Yc(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class In extends Rr{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Xc,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xc(e),this._firestoreClient=void 0,await e}}}function gy(s,e){const t=typeof s=="object"?s:Nl(),n=typeof s=="string"?s:Ys,r=Ki(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const i=zd("firestore");i&&py(r,...i)}return r}function To(s){if(s._terminated)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||yy(s),s._firestoreClient}function yy(s){var n,r,i;const e=s._freezeSettings(),t=function(l,u,d,m){return new $m(l,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,rh(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(s._databaseId,((n=s._app)==null?void 0:n.options.appId)||"",s._persistenceKey,e);s._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new uy(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(s._componentsProvider))}/**
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
 */class ke{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ke(ge.fromBase64String(e))}catch(t){throw new D(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ke(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ke._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cs(e,ke._jsonSchema))return ke.fromBase64String(e.bytes)}}ke._jsonSchemaVersion="firestore/bytes/1.0",ke._jsonSchema={type:ae("string",ke._jsonSchemaVersion),bytes:ae("string")};/**
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
 */class Cr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Io{constructor(e){this._methodName=e}}/**
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
 */class $e{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$e._jsonSchemaVersion}}static fromJSON(e){if(cs(e,$e._jsonSchema))return new $e(e.latitude,e.longitude)}}$e._jsonSchemaVersion="firestore/geoPoint/1.0",$e._jsonSchema={type:ae("string",$e._jsonSchemaVersion),latitude:ae("number"),longitude:ae("number")};/**
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
 */class qe{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cs(e,qe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new qe(e.vectorValues);throw new D(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qe._jsonSchemaVersion="firestore/vectorValue/1.0",qe._jsonSchema={type:ae("string",qe._jsonSchemaVersion),vectorValues:ae("object")};/**
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
 */const _y=/^__.*__$/;class vy{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new St(e,this.data,this.fieldMask,t,this.fieldTransforms):new ls(e,this.data,t,this.fieldTransforms)}}class oh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new St(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ah(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{Ac:s})}}class bo{constructor(e,t,n,r,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new bo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ar(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(ah(this.Ac)&&_y.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Ey{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||br(e)}Cc(e,t,n,r=!1){return new bo({Ac:e,methodName:t,Dc:n,path:pe.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ao(s){const e=s._freezeSettings(),t=br(s._databaseId);return new Ey(s._databaseId,!!e.ignoreUndefinedProperties,t)}function wy(s,e,t,n,r,i={}){const a=s.Cc(i.merge||i.mergeFields?2:0,e,t,r);So("Data must be an object, but it was:",a,n);const l=ch(n,a);let u,d;if(i.merge)u=new Pe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const v=$i(e,p,t);if(!a.contains(v))throw new D(R.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);uh(m,v)||m.push(v)}u=new Pe(m),d=a.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=a.fieldTransforms;return new vy(new Re(l),u,d)}class xr extends Io{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xr}}function Ty(s,e,t,n){const r=s.Cc(1,e,t);So("Data must be an object, but it was:",r,n);const i=[],a=Re.empty();At(n,(u,d)=>{const m=Ro(e,u,t);d=be(d);const p=r.yc(m);if(d instanceof xr)i.push(m);else{const v=fs(d,p);v!=null&&(i.push(m),a.set(m,v))}});const l=new Pe(i);return new oh(a,l,r.fieldTransforms)}function Iy(s,e,t,n,r,i){const a=s.Cc(1,e,t),l=[$i(e,n,t)],u=[r];if(i.length%2!=0)throw new D(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)l.push($i(e,i[v])),u.push(i[v+1]);const d=[],m=Re.empty();for(let v=l.length-1;v>=0;--v)if(!uh(d,l[v])){const S=l[v];let P=u[v];P=be(P);const V=a.yc(S);if(P instanceof xr)d.push(S);else{const x=fs(P,V);x!=null&&(d.push(S),m.set(S,x))}}const p=new Pe(d);return new oh(m,p,a.fieldTransforms)}function by(s,e,t,n=!1){return fs(t,s.Cc(n?4:3,e))}function fs(s,e){if(lh(s=be(s)))return So("Unsupported field value:",e,s),ch(s,e);if(s instanceof Io)return function(n,r){if(!ah(r.Ac))throw r.Sc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(n,r){const i=[];let a=0;for(const l of n){let u=fs(l,r.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(s,e)}return function(n,r){if((n=be(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return up(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Z.fromDate(n);return{timestampValue:sr(r.serializer,i)}}if(n instanceof Z){const i=new Z(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:sr(r.serializer,i)}}if(n instanceof $e)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ke)return{bytesValue:Au(r.serializer,n._byteString)};if(n instanceof ce){const i=r.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw r.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ao(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof qe)return function(a,l){return{mapValue:{fields:{[eu]:{stringValue:tu},[Zs]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return so(l.serializer,d)})}}}}}}(n,r);throw r.Sc(`Unsupported field value: ${pr(n)}`)}(s,e)}function ch(s,e){const t={};return Kl(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):At(s,(n,r)=>{const i=fs(r,e.mc(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function lh(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof Z||s instanceof $e||s instanceof ke||s instanceof ce||s instanceof Io||s instanceof qe)}function So(s,e,t){if(!lh(t)||!Gl(t)){const n=pr(t);throw n==="an object"?e.Sc(s+" a custom object"):e.Sc(s+" "+n)}}function $i(s,e,t){if((e=be(e))instanceof Cr)return e._internalPath;if(typeof e=="string")return Ro(s,e);throw ar("Field path arguments must be of type string or ",s,!1,void 0,t)}const Ay=new RegExp("[~\\*/\\[\\]]");function Ro(s,e,t){if(e.search(Ay)>=0)throw ar(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new Cr(...e.split("."))._internalPath}catch{throw ar(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function ar(s,e,t,n,r){const i=n&&!n.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${n}`),a&&(u+=` in document ${r}`),u+=")"),new D(R.INVALID_ARGUMENT,l+s+u)}function uh(s,e){return s.some(t=>t.isEqual(e))}/**
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
 */class hh{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Sy extends hh{data(){return super.data()}}function Pr(s,e){return typeof e=="string"?Ro(s,e):e instanceof Cr?e._internalPath:e._delegate._internalPath}/**
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
 */function Ry(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new D(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Co{}class dh extends Co{}function Zc(s,e,...t){let n=[];e instanceof Co&&n.push(e),n=n.concat(t),function(i){const a=i.filter(u=>u instanceof xo).length,l=i.filter(u=>u instanceof kr).length;if(a>1||a>0&&l>0)throw new D(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const r of n)s=r._apply(s);return s}class kr extends dh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new kr(e,t,n)}_apply(e){const t=this._parse(e);return fh(e._query,t),new Ht(e.firestore,e.converter,Pi(e._query,t))}_parse(e){const t=Ao(e.firestore);return function(i,a,l,u,d,m,p){let v;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new D(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){tl(p,m);const P=[];for(const V of p)P.push(el(u,i,V));v={arrayValue:{values:P}}}else v=el(u,i,p)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||tl(p,m),v=by(l,a,p,m==="in"||m==="not-in");return oe.create(d,m,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Cy(s,e,t){const n=e,r=Pr("where",s);return kr._create(r,n,t)}class xo extends Co{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xo(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Ne.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let a=r;const l=i.getFlattenedFilters();for(const u of l)fh(a,u),a=Pi(a,u)}(e._query,t),new Ht(e.firestore,e.converter,Pi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Po extends dh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Po(e,t)}_apply(e){const t=function(r,i,a){if(r.startAt!==null)throw new D(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new D(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ns(i,a)}(e._query,this._field,this._direction);return new Ht(e.firestore,e.converter,function(r,i){const a=r.explicitOrderBy.concat([i]);return new wn(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function xy(s,e="asc"){const t=e,n=Pr("orderBy",s);return Po._create(n,t)}function el(s,e,t){if(typeof(t=be(t))=="string"){if(t==="")throw new D(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lu(e)&&t.indexOf("/")!==-1)throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(X.fromString(t));if(!L.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return pc(s,new L(n))}if(t instanceof ce)return pc(s,t._key);throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pr(t)}.`)}function tl(s,e){if(!Array.isArray(s)||s.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fh(s,e){const t=function(r,i){for(const a of r)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(s.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Py{convertValue(e,t="none"){switch(Tt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw O(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return At(e,(r,i)=>{n[r]=this.convertValue(i,t)}),n}convertVectorValue(e){var n,r,i;const t=(i=(r=(n=e.fields)==null?void 0:n[Zs].arrayValue)==null?void 0:r.values)==null?void 0:i.map(a=>se(a.doubleValue));return new qe(t)}convertGeoPoint(e){return new $e(se(e.latitude),se(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=_r(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Zn(e));default:return null}}convertTimestamp(e){const t=Et(e);return new Z(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=X.fromString(e);Q(ku(n),9688,{name:e});const r=new es(n.get(1),n.get(3)),i=new L(n.popFirst(5));return r.isEqual(t)||Je(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function ky(s,e,t){let n;return n=s?s.toFirestore(e):e,n}class zn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ot extends hh{constructor(e,t,n,r,i,a){super(e,t,n,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Pr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ot._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ot._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ot._jsonSchema={type:ae("string",Ot._jsonSchemaVersion),bundleSource:ae("string","DocumentSnapshot"),bundleName:ae("string"),bundle:ae("string")};class zs extends Ot{data(e={}){return super.data(e)}}class tn{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new zn(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new zs(this._firestore,this._userDataWriter,n.key,n,new zn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(l=>{const u=new zs(r._firestore,r._userDataWriter,l.doc.key,l.doc,new zn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new zs(r._firestore,r._userDataWriter,l.doc.key,l.doc,new zn(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:Vy(l.type),doc:u,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=tn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ji.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Vy(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:s})}}/**
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
 */function Dy(s){s=Xe(s,ce);const e=Xe(s.firestore,In);return fy(To(e),s._key).then(t=>Ly(e,s,t))}tn._jsonSchemaVersion="firestore/querySnapshot/1.0",tn._jsonSchema={type:ae("string",tn._jsonSchemaVersion),bundleSource:ae("string","QuerySnapshot"),bundleName:ae("string"),bundle:ae("string")};class mh extends Py{constructor(e){super(),this.firestore=e}convertBytes(e){return new ke(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,t)}}function gi(s){s=Xe(s,Ht);const e=Xe(s.firestore,In),t=To(e),n=new mh(e);return Ry(s._query),my(t,s._query).then(r=>new tn(e,n,s,r))}function Ny(s,e,t,...n){s=Xe(s,ce);const r=Xe(s.firestore,In),i=Ao(r);let a;return a=typeof(e=be(e))=="string"||e instanceof Cr?Iy(i,"updateDoc",s._key,e,t,n):Ty(i,"updateDoc",s._key,e),ko(r,[a.toMutation(s._key,De.exists(!0))])}function nl(s){return ko(Xe(s.firestore,In),[new ro(s._key,De.none())])}function sl(s,e){const t=Xe(s.firestore,In),n=js(s),r=ky(s.converter,e);return ko(t,[wy(Ao(s.firestore),"addDoc",n._key,r,s.converter!==null,{}).toMutation(n._key,De.exists(!1))]).then(()=>n)}function ko(s,e){return function(n,r){const i=new Ke;return n.asyncQueue.enqueueAndForget(async()=>ty(await dy(n),r,i)),i.promise}(To(s),e)}function Ly(s,e,t){const n=t.docs.get(e._key),r=new mh(s);return new Ot(s,r,e._key,n,new zn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){_n=r})(yn),cn(new Ft("firestore",(n,{instanceIdentifier:r,options:i})=>{const a=n.getProvider("app").getImmediate(),l=new In(new Tm(n.getProvider("auth-internal")),new Am(a,n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new es(d.options.projectId,m)}(a,r),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),gt(nc,sc,e),gt(nc,sc,"esm2020")})();var Oy="firebase",My="12.4.0";/**
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
 */gt(Oy,My,"app");function ph(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uy=ph,gh=new os("auth","Firebase",ph());/**
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
 */const cr=new Gi("@firebase/auth");function Fy(s,...e){cr.logLevel<=z.WARN&&cr.warn(`Auth (${yn}): ${s}`,...e)}function Hs(s,...e){cr.logLevel<=z.ERROR&&cr.error(`Auth (${yn}): ${s}`,...e)}/**
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
 */function Ze(s,...e){throw Vo(s,...e)}function je(s,...e){return Vo(s,...e)}function yh(s,e,t){const n={...Uy(),[e]:t};return new os("auth","Firebase",n).create(e,{appName:s.name})}function Mt(s){return yh(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vo(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return gh.create(s,...e)}function M(s,e,...t){if(!s)throw Vo(e,...t)}function Ge(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Hs(e),new Error(e)}function et(s,e){s||Ge(e)}/**
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
 */function qi(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function By(){return rl()==="http:"||rl()==="https:"}function rl(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
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
 */function $y(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(By()||Yd()||"connection"in navigator)?navigator.onLine:!0}function qy(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class ms{constructor(e,t){this.shortDelay=e,this.longDelay=t,et(t>e,"Short delay should be less than long delay!"),this.isMobile=Qd()||Zd()}get(){return $y()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Do(s,e){et(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class _h{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Hy=new ms(3e4,6e4);function No(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function bn(s,e,t,n,r={}){return vh(s,r,async()=>{let i={},a={};n&&(e==="GET"?a=n:i={body:JSON.stringify(n)});const l=as({key:s.config.apiKey,...a}).slice(1),u=await s._getAdditionalHeaders();u["Content-Type"]="application/json",s.languageCode&&(u["X-Firebase-Locale"]=s.languageCode);const d={method:e,headers:u,...i};return Xd()||(d.referrerPolicy="no-referrer"),s.emulatorConfig&&gn(s.emulatorConfig.host)&&(d.credentials="include"),_h.fetch()(await Eh(s,s.config.apiHost,t,l),d)})}async function vh(s,e,t){s._canInitEmulator=!1;const n={...jy,...e};try{const r=new Wy(s),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ms(s,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ms(s,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ms(s,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ms(s,"user-disabled",a);const m=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw yh(s,m,d);Ze(s,m)}}catch(r){if(r instanceof tt)throw r;Ze(s,"network-request-failed",{message:String(r)})}}async function Gy(s,e,t,n,r={}){const i=await bn(s,e,t,n,r);return"mfaPendingCredential"in i&&Ze(s,"multi-factor-auth-required",{_serverResponse:i}),i}async function Eh(s,e,t,n){const r=`${e}${t}?${n}`,i=s,a=i.config.emulator?Do(s.config,r):`${s.config.apiScheme}://${r}`;return zy.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Wy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(je(this.auth,"network-request-failed")),Hy.get())})}}function Ms(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=je(s,e,n);return r.customData._tokenResponse=t,r}/**
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
 */async function Ky(s,e){return bn(s,"POST","/v1/accounts:delete",e)}async function lr(s,e){return bn(s,"POST","/v1/accounts:lookup",e)}/**
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
 */function Jn(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qy(s,e=!1){const t=be(s),n=await t.getIdToken(e),r=Lo(n);M(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:n,authTime:Jn(yi(r.auth_time)),issuedAtTime:Jn(yi(r.iat)),expirationTime:Jn(yi(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yi(s){return Number(s)*1e3}function Lo(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return Hs("JWT malformed, contained fewer than 3 sections"),null;try{const r=Al(t);return r?JSON.parse(r):(Hs("Failed to decode base64 JWT payload"),null)}catch(r){return Hs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function il(s){const e=Lo(s);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function is(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof tt&&Jy(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function Jy({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class Xy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ji{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jn(this.lastLoginAt),this.creationTime=Jn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ur(s){var p;const e=s.auth,t=await s.getIdToken(),n=await is(s,lr(e,{idToken:t}));M(n==null?void 0:n.users.length,e,"internal-error");const r=n.users[0];s._notifyReloadListener(r);const i=(p=r.providerUserInfo)!=null&&p.length?wh(r.providerUserInfo):[],a=Zy(s.providerData,i),l=s.isAnonymous,u=!(s.email&&r.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ji(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(s,m)}async function Yy(s){const e=be(s);await ur(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zy(s,e){return[...s.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function wh(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function e_(s,e){const t=await vh(s,{},async()=>{const n=as({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=s.config,a=await Eh(s,r,"/v1/token",`key=${i}`),l=await s._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:n};return s.emulatorConfig&&gn(s.emulatorConfig.host)&&(u.credentials="include"),_h.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function t_(s,e){return bn(s,"POST","/v2/accounts:revokeToken",No(s,e))}/**
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
 */class nn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):il(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=il(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await e_(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,a=new nn;return n&&(M(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),r&&(M(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(M(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nn,this.toJSON())}_performRefresh(){return Ge("not implemented")}}/**
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
 */function ct(s,e){M(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class Ve{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new Xy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ji(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await is(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qy(this,e)}reload(){return Yy(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ve({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ur(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await is(this,Ky(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:p,emailVerified:v,isAnonymous:S,providerData:P,stsTokenManager:V}=t;M(p&&V,e,"internal-error");const x=nn.fromJSON(this.name,V);M(typeof p=="string",e,"internal-error"),ct(n,e.name),ct(r,e.name),M(typeof v=="boolean",e,"internal-error"),M(typeof S=="boolean",e,"internal-error"),ct(i,e.name),ct(a,e.name),ct(l,e.name),ct(u,e.name),ct(d,e.name),ct(m,e.name);const F=new Ve({uid:p,auth:e,email:r,emailVerified:v,displayName:n,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:x,createdAt:d,lastLoginAt:m});return P&&Array.isArray(P)&&(F.providerData=P.map(B=>({...B}))),u&&(F._redirectEventId=u),F}static async _fromIdTokenResponse(e,t,n=!1){const r=new nn;r.updateFromServerResponse(t);const i=new Ve({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ur(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];M(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?wh(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new nn;l.updateFromIdToken(n);const u=new Ve({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ji(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const ol=new Map;function We(s){et(s instanceof Function,"Expected a class definition");let e=ol.get(s);return e?(et(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,ol.set(s,e),e)}/**
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
 */class Th{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Th.type="NONE";const al=Th;/**
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
 */function Gs(s,e,t){return`firebase:${s}:${e}:${t}`}class sn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Gs(this.userKey,r.apiKey,i),this.fullPersistenceKey=Gs("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await lr(this.auth,{idToken:e}).catch(()=>{});return t?Ve._fromGetAccountInfoResponse(this.auth,t,e):null}return Ve._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new sn(We(al),e,n);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||We(al);const a=Gs(n,e.config.apiKey,e.name);let l=null;for(const d of t)try{const m=await d._get(a);if(m){let p;if(typeof m=="string"){const v=await lr(e,{idToken:m}).catch(()=>{});if(!v)break;p=await Ve._fromGetAccountInfoResponse(e,v,m)}else p=Ve._fromJSON(e,m);d!==i&&(l=p),i=d;break}}catch{}const u=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new sn(i,e,n):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new sn(i,e,n))}}/**
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
 */function cl(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ih(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ch(e))return"Blackberry";if(xh(e))return"Webos";if(bh(e))return"Safari";if((e.includes("chrome/")||Ah(e))&&!e.includes("edge/"))return"Chrome";if(Rh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Ih(s=we()){return/firefox\//i.test(s)}function bh(s=we()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ah(s=we()){return/crios\//i.test(s)}function Sh(s=we()){return/iemobile/i.test(s)}function Rh(s=we()){return/android/i.test(s)}function Ch(s=we()){return/blackberry/i.test(s)}function xh(s=we()){return/webos/i.test(s)}function Oo(s=we()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function n_(s=we()){var e;return Oo(s)&&!!((e=window.navigator)!=null&&e.standalone)}function s_(){return ef()&&document.documentMode===10}function Ph(s=we()){return Oo(s)||Rh(s)||xh(s)||Ch(s)||/windows phone/i.test(s)||Sh(s)}/**
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
 */function kh(s,e=[]){let t;switch(s){case"Browser":t=cl(we());break;case"Worker":t=`${cl(we())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yn}/${n}`}/**
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
 */class r_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function i_(s,e={}){return bn(s,"GET","/v2/passwordPolicy",No(s,e))}/**
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
 */const o_=6;class a_{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??o_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class c_{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ll(this),this.idTokenSubscription=new ll(this),this.beforeStateQueue=new r_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=We(t)),this._initializationPromise=this.queue(async()=>{var n,r,i;if(!this._deleted&&(this.persistenceManager=await sn.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lr(this,{idToken:e}),n=await Ve._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ue(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=n==null?void 0:n._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(n=u.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(a){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ur(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(Mt(this));const t=e?be(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(We(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await i_(this),t=new a_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new os("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await t_(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&We(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[We(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,r);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Fy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Mo(s){return be(s)}class ll{constructor(e){this.auth=e,this.observer=null,this.addObserver=lf(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Uo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function l_(s){Uo=s}function u_(s){return Uo.loadJS(s)}function h_(){return Uo.gapiScript}function d_(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
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
 */function f_(s,e){const t=Ki(s,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Ut(i,e??{}))return r;Ze(r,"already-initialized")}return t.initialize({options:e})}function m_(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(We);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function p_(s,e,t){const n=Mo(s);M(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,i=Vh(e),{host:a,port:l}=g_(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){M(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),M(Ut(d,n.config.emulator)&&Ut(m,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=m,n.settings.appVerificationDisabledForTesting=!0,gn(a)?(xl(`${i}//${a}${u}`),Pl("Auth",!0)):y_()}function Vh(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function g_(s){const e=Vh(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const i=r[1];return{host:i,port:ul(n.substr(i.length+1))}}else{const[i,a]=n.split(":");return{host:i,port:ul(a)}}}function ul(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function y_(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */async function rn(s,e){return Gy(s,"POST","/v1/accounts:signInWithIdp",No(s,e))}/**
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
 */const __="http://localhost";class qt extends Dh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const a=new qt(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return rn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,rn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rn(e,t)}buildRequest(){const e={requestUri:__,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=as(t)}return e}}/**
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
 */class Nh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ps extends Nh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lt extends ps{constructor(){super("facebook.com")}static credential(e){return qt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
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
 */class ut extends ps{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ut.credential(t,n)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
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
 */class ht extends ps{constructor(){super("github.com")}static credential(e){return qt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.GITHUB_SIGN_IN_METHOD="github.com";ht.PROVIDER_ID="github.com";/**
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
 */class dt extends ps{constructor(){super("twitter.com")}static credential(e,t){return qt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return dt.credential(t,n)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
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
 */class pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Ve._fromIdTokenResponse(e,n,r),a=hl(n);return new pn({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=hl(n);return new pn({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function hl(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class hr extends tt{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,hr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new hr(e,t,n,r)}}function Lh(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hr._fromErrorAndOperation(s,i,e,n):i})}async function v_(s,e,t=!1){const n=await is(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return pn._forOperation(s,"link",n)}/**
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
 */async function E_(s,e,t=!1){const{auth:n}=s;if(Ue(n.app))return Promise.reject(Mt(n));const r="reauthenticate";try{const i=await is(s,Lh(n,r,e,s),t);M(i.idToken,n,"internal-error");const a=Lo(i.idToken);M(a,n,"internal-error");const{sub:l}=a;return M(s.uid===l,n,"user-mismatch"),pn._forOperation(s,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ze(n,"user-mismatch"),i}}/**
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
 */async function w_(s,e,t=!1){if(Ue(s.app))return Promise.reject(Mt(s));const n="signIn",r=await Lh(s,n,e),i=await pn._fromIdTokenResponse(s,n,r);return t||await s._updateCurrentUser(i.user),i}function T_(s,e,t,n){return be(s).onIdTokenChanged(e,t,n)}function I_(s,e,t){return be(s).beforeAuthStateChanged(e,t)}const dr="__sak";/**
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
 */class Oh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(dr,"1"),this.storage.removeItem(dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const b_=1e3,A_=10;class Mh extends Oh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ph(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},i=this.storage.getItem(n);s_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,A_):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},b_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mh.type="LOCAL";const S_=Mh;/**
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
 */class Uh extends Oh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Uh.type="SESSION";const Fh=Uh;/**
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
 */function R_(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Vr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new Vr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await R_(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vr.receivers=[];/**
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
 */function Fo(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
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
 */class C_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=Fo("",20);r.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},n);a={messageChannel:r,onMessage(p){const v=p;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ze(){return window}function x_(s){ze().location.href=s}/**
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
 */function Bh(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function P_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function k_(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function V_(){return Bh()?self:null}/**
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
 */const $h="firebaseLocalStorageDb",D_=1,fr="firebaseLocalStorage",qh="fbase_key";class gs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dr(s,e){return s.transaction([fr],e?"readwrite":"readonly").objectStore(fr)}function N_(){const s=indexedDB.deleteDatabase($h);return new gs(s).toPromise()}function zi(){const s=indexedDB.open($h,D_);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(fr,{keyPath:qh})}catch(r){t(r)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(fr)?e(n):(n.close(),await N_(),e(await zi()))})})}async function dl(s,e,t){const n=Dr(s,!0).put({[qh]:e,value:t});return new gs(n).toPromise()}async function L_(s,e){const t=Dr(s,!1).get(e),n=await new gs(t).toPromise();return n===void 0?null:n.value}function fl(s,e){const t=Dr(s,!0).delete(e);return new gs(t).toPromise()}const O_=800,M_=3;class jh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>M_)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vr._getInstance(V_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await P_(),!this.activeServiceWorker)return;this.sender=new C_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||k_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zi();return await dl(e,dr,"1"),await fl(e,dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>dl(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>L_(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Dr(r,!1).getAll();return new gs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),O_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jh.type="LOCAL";const U_=jh;new ms(3e4,6e4);/**
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
 */function F_(s,e){return e?We(e):(M(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class Bo extends Dh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function B_(s){return w_(s.auth,new Bo(s),s.bypassAuthState)}function $_(s){const{auth:e,user:t}=s;return M(t,e,"internal-error"),E_(t,new Bo(s),s.bypassAuthState)}async function q_(s){const{auth:e,user:t}=s;return M(t,e,"internal-error"),v_(t,new Bo(s),s.bypassAuthState)}/**
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
 */class zh{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return B_;case"linkViaPopup":case"linkViaRedirect":return q_;case"reauthViaPopup":case"reauthViaRedirect":return $_;default:Ze(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const j_=new ms(2e3,1e4);class Zt extends zh{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=Fo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,j_.get())};e()}}Zt.currentPopupAction=null;/**
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
 */const z_="pendingRedirect",Ws=new Map;class H_ extends zh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ws.get(this.auth._key());if(!e){try{const n=await G_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Ws.set(this.auth._key(),e)}return this.bypassAuthState||Ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function G_(s,e){const t=Q_(e),n=K_(s);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function W_(s,e){Ws.set(s._key(),e)}function K_(s){return We(s._redirectPersistence)}function Q_(s){return Gs(z_,s.config.apiKey,s.name)}async function J_(s,e,t=!1){if(Ue(s.app))return Promise.reject(Mt(s));const n=Mo(s),r=F_(n,e),a=await new H_(n,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const X_=10*60*1e3;class Y_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Z_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Hh(e)){const r=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(je(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=X_&&this.cachedEventUids.clear(),this.cachedEventUids.has(ml(e))}saveEventToCache(e){this.cachedEventUids.add(ml(e)),this.lastProcessedEventTime=Date.now()}}function ml(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Hh({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Z_(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hh(s);default:return!1}}/**
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
 */async function ev(s,e={}){return bn(s,"GET","/v1/projects",e)}/**
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
 */const tv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nv=/^https?/;async function sv(s){if(s.config.emulator)return;const{authorizedDomains:e}=await ev(s);for(const t of e)try{if(rv(t))return}catch{}Ze(s,"unauthorized-domain")}function rv(s){const e=qi(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const a=new URL(s);return a.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!nv.test(t))return!1;if(tv.test(s))return n===s;const r=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
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
 */const iv=new ms(3e4,6e4);function pl(){const s=ze().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function ov(s){return new Promise((e,t)=>{var r,i,a;function n(){pl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pl(),t(je(s,"network-request-failed"))},timeout:iv.get()})}if((i=(r=ze().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=ze().gapi)!=null&&a.load)n();else{const l=d_("iframefcb");return ze()[l]=()=>{gapi.load?n():t(je(s,"network-request-failed"))},u_(`${h_()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Ks=null,e})}let Ks=null;function av(s){return Ks=Ks||ov(s),Ks}/**
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
 */const cv=new ms(5e3,15e3),lv="__/auth/iframe",uv="emulator/auth/iframe",hv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fv(s){const e=s.config;M(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?Do(e,uv):`https://${s.config.authDomain}/${lv}`,n={apiKey:e.apiKey,appName:s.name,v:yn},r=dv.get(s.config.apiHost);r&&(n.eid=r);const i=s._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${as(n).slice(1)}`}async function mv(s){const e=await av(s),t=ze().gapi;return M(t,s,"internal-error"),e.open({where:document.body,url:fv(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hv,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});const a=je(s,"network-request-failed"),l=ze().setTimeout(()=>{i(a)},cv.get());function u(){ze().clearTimeout(l),r(n)}n.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const pv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gv=500,yv=600,_v="_blank",vv="http://localhost";class gl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ev(s,e,t,n=gv,r=yv){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const u={...pv,width:n.toString(),height:r.toString(),top:i,left:a},d=we().toLowerCase();t&&(l=Ah(d)?_v:t),Ih(d)&&(e=e||vv,u.scrollbars="yes");const m=Object.entries(u).reduce((v,[S,P])=>`${v}${S}=${P},`,"");if(n_(d)&&l!=="_self")return wv(e||"",l),new gl(null);const p=window.open(e||"",l,m);M(p,s,"popup-blocked");try{p.focus()}catch{}return new gl(p)}function wv(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const Tv="__/auth/handler",Iv="emulator/auth/handler",bv=encodeURIComponent("fac");async function yl(s,e,t,n,r,i){M(s.config.authDomain,s,"auth-domain-config-required"),M(s.config.apiKey,s,"invalid-api-key");const a={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:yn,eventId:r};if(e instanceof Nh){e.setDefaultLanguage(s.languageCode),a.providerId=e.providerId||"",cf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))a[m]=p}if(e instanceof ps){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(a.scopes=m.join(","))}s.tenantId&&(a.tid=s.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await s._getAppCheckToken(),d=u?`#${bv}=${encodeURIComponent(u)}`:"";return`${Av(s)}?${as(l).slice(1)}${d}`}function Av({config:s}){return s.emulator?Do(s,Iv):`https://${s.authDomain}/${Tv}`}/**
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
 */const _i="webStorageSupport";class Sv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fh,this._completeRedirectFn=J_,this._overrideRedirectResult=W_}async _openPopup(e,t,n,r){var a;et((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await yl(e,t,n,qi(),r);return Ev(e,i,Fo())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await yl(e,t,n,qi(),r);return x_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(et(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await mv(e),n=new Y_(e);return t.register("authEvent",r=>(M(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_i,{type:_i},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[_i];i!==void 0&&t(!!i),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ph()||bh()||Oo()}}const Rv=Sv;var _l="@firebase/auth",vl="1.11.0";/**
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
 */class Cv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xv(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pv(s){cn(new Ft("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:a,authDomain:l,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kh(s)},d=new c_(n,r,i,u);return m_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),cn(new Ft("auth-internal",e=>{const t=Mo(e.getProvider("auth").getImmediate());return(n=>new Cv(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(_l,vl,xv(s)),gt(_l,vl,"esm2020")}/**
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
 */const kv=5*60,Vv=Cl("authIdTokenMaxAge")||kv;let El=null;const Dv=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Vv)return;const r=t==null?void 0:t.token;El!==r&&(El=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Nv(s=Nl()){const e=Ki(s,"auth");if(e.isInitialized())return e.getImmediate();const t=f_(s,{popupRedirectResolver:Rv,persistence:[U_,S_,Fh]}),n=Cl("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const a=Dv(i.toString());I_(t,a,()=>a(t.currentUser)),T_(t,l=>a(l))}}const r=Sl("auth");return r&&p_(t,`http://${r}`),t}function Lv(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}l_({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=r=>{const i=je("internal-error");i.customData=r,t(i)},n.type="text/javascript",n.charset="UTF-8",Lv().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pv("Browser");const Ov={apiKey:"AIzaSyAYy5QZzuXAoTGu2NVO6wAx1Q3tXMqO8SI",authDomain:"splitwiseclone-d9135.firebaseapp.com",projectId:"splitwiseclone-d9135",storageBucket:"splitwiseclone-d9135.firebasestorage.app",messagingSenderId:"1067457595825",appId:"1:1067457595825:web:54d33ba82260f11ef39590"},Gh=Dl(Ov),wl=gy(Gh);Nv(Gh);const on=!0;class Mv{constructor(){j(this,"usersCollection",Qc(wl,"users"));j(this,"expensesCollection",Qc(wl,"expenses"))}async getUsers(){try{return(await gi(this.usersCollection)).docs.map(t=>{var n;return{id:t.id,...t.data(),createdAt:((n=t.data().createdAt)==null?void 0:n.toDate())||new Date}})}catch(e){throw console.error("Error getting users:",e),e}}async getUserByUsername(e){var t;try{const n=Zc(this.usersCollection,Cy("username","==",e)),r=await gi(n);if(r.empty)return null;const i=r.docs[0];return{id:i.id,...i.data(),createdAt:((t=i.data().createdAt)==null?void 0:t.toDate())||new Date}}catch(n){throw console.error("Error getting user by username:",n),n}}async createUser(e){try{return{id:(await sl(this.usersCollection,{...e,createdAt:new Date})).id,...e,createdAt:new Date}}catch(t){throw console.error("Error creating user:",t),t}}async updateUser(e,t){var n,r;try{const i=js(this.usersCollection,e);await Ny(i,t);const a=await Dy(i);return{id:a.id,...a.data(),createdAt:((r=(n=a.data())==null?void 0:n.createdAt)==null?void 0:r.toDate())||new Date}}catch(i){throw console.error("Error updating user:",i),i}}async deleteUser(e){try{const t=js(this.usersCollection,e);await nl(t)}catch(t){throw console.error("Error deleting user:",t),t}}async getExpenses(){try{const e=Zc(this.expensesCollection,xy("date","desc"));return(await gi(e)).docs.map(n=>{var r;return{id:n.id,...n.data(),date:((r=n.data().date)==null?void 0:r.toDate())||new Date}})}catch(e){throw console.error("Error getting expenses:",e),e}}async createExpense(e){try{return{id:(await sl(this.expensesCollection,{...e,date:new Date(e.date)})).id,...e}}catch(t){throw console.error("Error creating expense:",t),t}}async deleteExpense(e){try{const t=js(this.expensesCollection,e);await nl(t)}catch(t){throw console.error("Error deleting expense:",t),t}}async authenticateUser(e,t){try{const n=await this.getUserByUsername(e);if(n&&n.password===t){const{password:r,...i}=n;return i}return null}catch(n){throw console.error("Error authenticating user:",n),n}}}const an=new Mv,Nt=class Nt{constructor(){}async login(e){try{let t=null;if(on&&(t=await an.authenticateUser(e.username,e.password),!t))throw new Error("Invalid credentials");if(!t)throw new Error("User not found");const n={isAuthenticated:!0,currentUser:{id:t.id,name:t.name,username:t.username,role:t.isAdmin?"admin":"user",createdAt:new Date(t.createdAt||Date.now()),isActive:!0,avatar:t.avatar,qrCode:t.qrCode},token:this.generateToken()};return localStorage.setItem(Nt.STORAGE_KEY,JSON.stringify(n)),n}catch(t){throw new Error(t instanceof Error?t.message:"Login failed")}}logout(){localStorage.removeItem(Nt.STORAGE_KEY)}getCurrentAuth(){const e=localStorage.getItem(Nt.STORAGE_KEY);return e?JSON.parse(e):{isAuthenticated:!1,currentUser:null}}async createUser(e){try{if(on){const t=await an.createUser({name:e.name,username:e.username,role:"user",isActive:!0,createdAt:new Date,password:e.password,isAdmin:!1});return{id:t.id,name:t.name,username:t.username,role:"user",createdAt:t.createdAt,isActive:!0}}}catch(t){throw new Error(t instanceof Error?t.message:"Failed to create user")}}async getAllUsers(){try{if(on)return(await an.getUsers()).map(t=>({...t,role:t.isAdmin?"admin":"user",isActive:!0}))}catch(e){return console.error("Failed to fetch users:",e),this.getLocalUsers()}}async updateUser(e,t){var n;try{const r={...t,isAdmin:t.role==="admin"};delete r.role;const i=await ja.updateUser(e,r);if(i.success){const a={...i.user,role:i.user.isAdmin?"admin":"user",createdAt:new Date(i.user.createdAt||Date.now()),isActive:!0},l=this.getCurrentAuth();if(((n=l.currentUser)==null?void 0:n.id)===e){const u={...l,currentUser:a};localStorage.setItem(Nt.STORAGE_KEY,JSON.stringify(u))}return a}else throw new Error(i.message||"Failed to update user")}catch(r){throw new Error(r instanceof Error?r.message:"Failed to update user")}}async deleteUser(e){try{await ja.deleteUser(e)}catch(t){throw new Error(t instanceof Error?t.message:"Failed to delete user")}}async updateQRCode(e,t){try{await this.updateUser(e,{qrCode:t||void 0})}catch(n){throw new Error(n instanceof Error?n.message:"Failed to update QR code")}}generateToken(){return`token_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}isAdmin(e){return(e==null?void 0:e.role)==="admin"}authenticateWithLocalStorage(e){return e.username==="admin"&&e.password==="admin123"?{id:"admin-1",name:"Administrator",username:"admin",role:"admin",createdAt:new Date,isActive:!0}:this.getLocalUsers().find(r=>r.username===e.username&&r.password===e.password)||null}getLocalUsers(){const e=localStorage.getItem("splitwise_users");return e?JSON.parse(e).map(t=>({...t,createdAt:new Date(t.createdAt),role:t.isAdmin?"admin":"user"})):[]}saveLocalUsers(e){const t=e.map(n=>({...n,isAdmin:n.role==="admin",password:n.password}));localStorage.setItem("splitwise_users",JSON.stringify(t))}};j(Nt,"STORAGE_KEY","splitwise_auth");let Hi=Nt;class Uv{constructor(){j(this,"users",[]);j(this,"expenses",[]);j(this,"completedSettlements",[]);j(this,"currentUser",null);j(this,"addExpenseModal");j(this,"authService");j(this,"currentFilter","");this.authService=new Hi;const e=this.authService.getCurrentAuth();e.isAuthenticated&&e.currentUser&&(this.currentUser=e.currentUser,this.initializeData()),this.addExpenseModal=new ii(this.users,this.currentUser,t=>this.addExpense(t)),this.render(),this.setupEventListeners(),window.deleteExpense=t=>this.deleteExpense(t),window.showUserQRCode=t=>this.showUserQRCode(t),window.markSettlementComplete=(t,n,r)=>this.markSettlementComplete(t,n,r),window.editUser=t=>this.editUser(t),window.addEventListener("qr-code-updated",t=>{this.handleQRCodeUpdate(t.detail.userId,t.detail.qrCode)})}async initializeData(){try{this.users=await this.authService.getAllUsers(),this.users=this.users.filter(e=>e.isActive),this.expenses=await this.loadExpenses(),this.completedSettlements=this.loadCompletedSettlements()}catch(e){console.error("Failed to initialize data:",e),this.users=[],this.expenses=[],this.completedSettlements=this.loadCompletedSettlements()}}async loadExpenses(){try{if(on)return await an.getExpenses()}catch(e){console.error("Failed to load expenses:",e);const t=localStorage.getItem("splitwise_expenses");return t?JSON.parse(t).map(n=>({...n,date:new Date(n.date)})):[]}}async saveExpenses(){localStorage.setItem("splitwise_expenses",JSON.stringify(this.expenses))}loadCompletedSettlements(){const e=localStorage.getItem("splitwise_completed_settlements");return e?JSON.parse(e).map(t=>({...t,createdAt:new Date(t.createdAt),settledAt:t.settledAt?new Date(t.settledAt):void 0})):[]}saveCompletedSettlements(){localStorage.setItem("splitwise_completed_settlements",JSON.stringify(this.completedSettlements))}render(){const e=document.getElementById("app");if(!this.currentUser){e.innerHTML=this.renderLoginScreen();return}e.innerHTML=`
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
    `}renderStatsCards(){if(!this.currentUser)return"";const e=this.expenses.reduce((l,u)=>l+u.amount,0),n=this.expenses.filter(l=>l.paidBy===this.currentUser.id).reduce((l,u)=>l+u.amount,0),i=ri(this.expenses,this.users)[this.currentUser.id],a=i?i.totalOwed-i.totalOwes:0;return`
      <div class="card text-center">
        <div class="text-2xl mb-2">💰</div>
        <div class="text-2xl font-bold text-gray-800">${ne(e)}</div>
        <div class="text-sm text-gray-600">Tổng chi phí</div>
      </div>
      
      <div class="card text-center">
        <div class="text-2xl mb-2">🎯</div>
        <div class="text-2xl font-bold text-gray-800">${ne(n)}</div>
        <div class="text-sm text-gray-600">Bạn đã trả</div>
      </div>
      
      <div class="card text-center">
        <div class="text-2xl mb-2">${a>=0?"💚":"💔"}</div>
        <div class="text-2xl font-bold ${a>=0?"text-green-600":"text-red-600"}">
          ${a>=0?"+":""}${ne(a)}
        </div>
        <div class="text-sm text-gray-600">Số dư của bạn</div>
      </div>
    `}renderBalanceSection(){if(!this.currentUser)return"";const e=ri(this.expenses,this.users),t=e[this.currentUser.id];return t?new Pd(t,this.users,e).render():`
        <div class="card text-center py-8">
          <div class="text-4xl mb-4">🎉</div>
          <h2 class="text-xl font-semibold mb-2">Chưa có giao dịch nào</h2>
          <p class="text-gray-500">Thêm chi phí đầu tiên để bắt đầu!</p>
        </div>
      `}renderSettlementSection(){const e=ri(this.expenses,this.users);return new kd(this.users,e,this.currentUser,this.completedSettlements).render()}renderExpensesList(){const e=this.getFilteredExpenses();return e.length===0?`
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
      `:e.map(t=>new xd(t,this.users,this.currentUser,()=>this.deleteExpense(t.id)).render()).join("")}getFilteredExpenses(){return this.currentFilter?this.expenses.filter(e=>e.category===this.currentFilter):this.expenses}setupEventListeners(){var e,t,n,r,i,a;(e=document.getElementById("showLoginBtn"))==null||e.addEventListener("click",()=>{this.showLoginModal()}),(t=document.getElementById("logoutBtn"))==null||t.addEventListener("click",()=>{this.logout()}),(n=document.getElementById("userManagementBtn"))==null||n.addEventListener("click",()=>{this.showUserManagementModal()}),(r=document.getElementById("addExpenseBtn"))==null||r.addEventListener("click",()=>{this.addExpenseModal.show()}),(i=document.getElementById("filterCategory"))==null||i.addEventListener("change",l=>{this.currentFilter=l.target.value,this.updateExpensesList(),this.updateFilterControls()}),(a=document.getElementById("clearFilter"))==null||a.addEventListener("click",()=>{this.currentFilter="";const l=document.getElementById("filterCategory");l&&(l.value=""),this.updateExpensesList(),this.updateFilterControls()})}async addExpense(e){try{if(on){const t=await an.createExpense(e);this.expenses.unshift(t)}await this.saveExpenses(),this.updateAll()}catch(t){console.error("Failed to add expense:",t),this.expenses.unshift(e),await this.saveExpenses(),this.updateAll()}}async deleteExpense(e){if(!this.currentUser||this.currentUser.role!=="admin"){alert("⚠️ Chỉ admin mới có thể xóa chi phí!");return}if(confirm("🗑️ Bạn có chắc chắn muốn xóa chi phí này không?"))try{on&&await an.deleteExpense(e),this.expenses=this.expenses.filter(t=>t.id!==e),await this.saveExpenses(),this.updateAll()}catch(t){console.error("Failed to delete expense:",t),this.expenses=this.expenses.filter(n=>n.id!==e),await this.saveExpenses(),this.updateAll()}}showLoginModal(){const e=new Vd(async t=>{var n;try{const r=await this.authService.login(t);this.currentUser=r.currentUser,await this.initializeData(),this.addExpenseModal=new ii(this.users,this.currentUser,i=>this.addExpense(i)),this.render(),this.setupEventListeners(),(n=document.getElementById("login-modal"))==null||n.remove()}catch(r){throw r}},()=>{var t;(t=document.getElementById("login-modal"))==null||t.remove()});document.body.insertAdjacentHTML("beforeend",e.render()),e.setupEventListeners()}logout(){confirm("🚪 Bạn có chắc chắn muốn đăng xuất không?")&&(this.authService.logout(),this.currentUser=null,this.users=[],this.expenses=[],this.render(),this.setupEventListeners())}async showUserManagementModal(){const e=await this.authService.getAllUsers(),t=new qa(e,async n=>await this.authService.createUser(n),async(n,r)=>{await this.authService.updateUser(n,{isActive:r}),await this.initializeData(),this.addExpenseModal=new ii(this.users,this.currentUser,i=>this.addExpense(i))},()=>{var n;(n=document.getElementById("user-management-modal"))==null||n.remove()},this.authService);document.body.insertAdjacentHTML("beforeend",t.render()),t.setupEventListeners()}async editUser(e){if(document.querySelector("#user-management-modal")){const n=await this.authService.getAllUsers();new qa(n,async i=>await this.authService.createUser(i),async(i,a)=>{await this.authService.updateUser(i,{isActive:a})},()=>{},this.authService).editUser(e)}}updateAll(){this.updateBalanceSection(),this.updateSettlementSection(),this.updateExpensesList(),this.updateStatsCards()}updateBalanceSection(){const e=document.getElementById("balanceSection");e&&(e.innerHTML=this.renderBalanceSection())}updateSettlementSection(){const e=document.getElementById("settlementSection");e&&(e.innerHTML=this.renderSettlementSection())}updateExpensesList(){const e=document.getElementById("expensesList");e&&(e.innerHTML=this.renderExpensesList())}updateStatsCards(){const e=document.querySelector(".grid.grid-cols-1.md\\:grid-cols-3");e&&(e.innerHTML=this.renderStatsCards())}updateFilterControls(){const e=document.getElementById("clearFilter");e&&(this.currentFilter?e.classList.remove("hidden"):e.classList.add("hidden"))}showUserQRCode(e){const t=this.users.find(r=>r.id===e);if(!t){alert("Không tìm thấy người dùng");return}const n=new Dd(t,()=>{var r;(r=document.getElementById("qr-code-modal"))==null||r.remove()});document.body.insertAdjacentHTML("beforeend",n.render()),n.setupEventListeners()}markSettlementComplete(e,t,n){if(!this.currentUser||this.currentUser.id!==t){alert("Chỉ người nhận tiền mới có thể xác nhận thanh toán!");return}const r={id:`settlement_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,from:e,to:t,amount:n,isSettled:!0,createdAt:new Date,settledAt:new Date};this.completedSettlements.push(r),this.saveCompletedSettlements(),this.render();const i=this.users.find(l=>l.id===e),a=this.users.find(l=>l.id===t);alert(`✅ Đã xác nhận nhận tiền từ ${i==null?void 0:i.name} cho ${a==null?void 0:a.name}: ${ne(n)}`)}async handleQRCodeUpdate(e,t){try{await this.authService.updateQRCode(e,t);const n=this.users.findIndex(r=>r.id===e);n!==-1&&(this.users[n].qrCode=t),this.currentUser&&this.currentUser.id===e&&(this.currentUser.qrCode=t),console.log("QR code updated successfully")}catch(n){console.error("Failed to update QR code:",n),alert("Lỗi cập nhật mã QR: "+(n instanceof Error?n.message:"Không xác định"))}}}new Uv;
