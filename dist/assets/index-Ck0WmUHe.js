(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var _d=Object.defineProperty,Ad=(r,e,t)=>e in r?_d(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,K=(r,e,t)=>Ad(r,typeof e!="symbol"?e+"":e,t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();function zo(r,e){const t={};return e.forEach(n=>{t[n.id]={userId:n.id,owes:{},owedBy:{},totalOwes:0,totalOwed:0}}),r.forEach(n=>{const s=n.paidBy;n.splitBetween.forEach(a=>{const o=a.userId;let u;n.splitType==="equal"?u=n.amount/n.splitBetween.length:u=a.amount||0,o!==s&&(t[o].owes[s]||(t[o].owes[s]=0),t[s].owedBy[o]||(t[s].owedBy[o]=0),t[o].owes[s]+=u,t[s].owedBy[o]+=u)})}),Object.values(t).forEach(n=>{n.totalOwes=Object.values(n.owes).reduce((s,a)=>s+a,0),n.totalOwed=Object.values(n.owedBy).reduce((s,a)=>s+a,0)}),e.forEach(n=>{e.forEach(s=>{if(n.id!==s.id){const a=t[n.id].owes[s.id]||0,o=t[s.id].owes[n.id]||0;if(a>0&&o>0){const u=a-o;u>0?(t[n.id].owes[s.id]=u,t[s.id].owedBy[n.id]=u,delete t[s.id].owes[n.id],delete t[n.id].owedBy[s.id]):u<0?(t[s.id].owes[n.id]=Math.abs(u),t[n.id].owedBy[s.id]=Math.abs(u),delete t[n.id].owes[s.id],delete t[s.id].owedBy[n.id]):(delete t[n.id].owes[s.id],delete t[s.id].owes[n.id],delete t[n.id].owedBy[s.id],delete t[s.id].owedBy[n.id])}}})}),Object.values(t).forEach(n=>{n.totalOwes=Object.values(n.owes).reduce((s,a)=>s+a,0),n.totalOwed=Object.values(n.owedBy).reduce((s,a)=>s+a,0)}),t}function he(r){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0,maximumFractionDigits:0}).format(r)}function Cd(){return Math.random().toString(36).substr(2,9)}function kd(r){const e=[];if((!r.description||r.description.trim().length===0)&&e.push("Mô tả chi phí không được để trống"),(!r.amount||r.amount<=0)&&e.push("Số tiền phải lớn hơn 0"),r.paidBy||e.push("Vui lòng chọn người trả tiền"),(!r.splitBetween||r.splitBetween.length===0)&&e.push("Vui lòng chọn ít nhất một người để chia chi phí"),r.category||e.push("Vui lòng chọn danh mục chi phí"),r.splitType==="custom"&&r.splitBetween){const t=r.splitBetween.reduce((n,s)=>n+(s.amount||0),0);Math.abs(t-(r.amount||0))>1&&e.push("Tổng số tiền chia phải bằng tổng chi phí")}return e}function Dd(r){const e=[],t=Object.values(r).map(u=>({userId:u.userId,netAmount:u.totalOwed-u.totalOwes})),n=t.filter(u=>u.netAmount>0).sort((u,h)=>h.netAmount-u.netAmount),s=t.filter(u=>u.netAmount<0).sort((u,h)=>u.netAmount-h.netAmount);let a=0,o=0;for(;a<n.length&&o<s.length;){const u=n[a],h=s[o],d=Math.min(u.netAmount,Math.abs(h.netAmount));d>0&&e.push({from:h.userId,to:u.userId,amount:d}),u.netAmount-=d,h.netAmount+=d,u.netAmount===0&&a++,h.netAmount===0&&o++}return e}class Nd{constructor(e,t,n){K(this,"expense"),K(this,"users"),K(this,"currentUser"),this.expense=e,this.users=t,this.currentUser=n}render(){var e;const t=this.users.find(a=>a.id===this.expense.paidBy),n=((e=this.currentUser)==null?void 0:e.id)||"",s=this.expense.splitBetween.some(a=>a.userId===n)||this.expense.paidBy===n;return`
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-4 hover:shadow-lg hover:border-gray-200 transition-all duration-200">
        <!-- Header with title, category and amount -->
        <div class="flex items-start justify-between mb-3">
          <div class="flex-1 min-w-0">
            <div class="flex items-center flex-wrap gap-2 mb-2">
              <h3 class="font-semibold text-gray-900 text-lg truncate">${this.expense.description}</h3>
              <span class="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200">
                ${this.getCategoryName(this.expense.category)}
              </span>
              ${this.expense.splitType==="custom"?`
                <span class="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 border border-purple-200">
                  🧮 Tùy chỉnh
                </span>
              `:""}
            </div>
          </div>
          
          <div class="text-right ml-4 flex-shrink-0">
            <div class="font-bold text-2xl text-gray-900 mb-1">
              ${he(this.expense.amount)}
            </div>
          </div>
        </div>

        <!-- Payment info and date -->
        <div class="flex items-center justify-between mb-3 p-3 bg-gray-50 rounded-lg">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-green-600 text-sm">💰</span>
            </div>
            <div>
              <p class="text-sm text-gray-700">
                <span class="font-medium text-gray-900">${t==null?void 0:t.name}</span> đã thanh toán
              </p>
              <p class="text-xs text-gray-500">📅 ${this.formatDate(this.expense.date)}</p>
            </div>
          </div>
          
          <div class="text-right">
            ${s?this.renderUserInvolvement():""}
          </div>
        </div>

        <!-- Split info -->
        <div class="flex items-center justify-between mb-3 text-sm">
          <div class="flex items-center space-x-3 text-gray-600">
            <span class="flex items-center space-x-1">
              <span class="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-xs">👥</span>
              <span>Chia cho ${this.expense.splitBetween.length} người</span>
            </span>
            ${this.expense.splitType==="equal"?`
              <span class="text-gray-400">•</span>
              <span class="font-medium text-gray-700">${he(this.expense.amount/this.expense.splitBetween.length)}/người</span>
            `:""}
          </div>
        </div>

        <!-- Split details (expandable) -->
        <div class="border-t border-gray-100 pt-3">
          <details class="text-sm">
            <summary class="cursor-pointer hover:text-blue-600 text-gray-600 font-medium flex items-center space-x-2 transition-colors">
              <span>🔍 Xem chi tiết chia tiền</span>
            </summary>
            <div class="mt-3 p-3 bg-gray-50 rounded-lg">
              <div class="space-y-2">
                ${this.expense.splitBetween.map(a=>{var o;const u=this.users.find(d=>d.id===a.userId),h=a.userId===((o=this.currentUser)==null?void 0:o.id);return`
                    <div class="flex justify-between items-center py-1 ${h?"bg-blue-50 px-2 rounded font-medium text-blue-900":""}">
                      <span class="flex items-center space-x-2">
                        ${h?'<span class="text-blue-600">👤</span>':'<span class="text-gray-400">👤</span>'}
                        <span>${u==null?void 0:u.name}${h?" (Bạn)":""}</span>
                      </span>
                      <span class="font-medium">${he(a.amount||0)}</span>
                    </div>
                  `}).join("")}
              </div>
            </div>
          </details>
        </div>
      </div>
    `}renderUserInvolvement(){var e;const t=((e=this.currentUser)==null?void 0:e.id)||"",n=this.expense.splitBetween.find(u=>u.userId===t),s=(n==null?void 0:n.amount)||0,a=this.expense.paidBy===t,o=!!n;if(a&&o){const u=this.expense.amount-s;return`
        <div class="text-right">
          <div class="inline-flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
            <div class="text-sm space-y-1">
              <div class="text-green-700 font-semibold flex items-center space-x-1">
                <span class="text-green-600">💰</span>
                <span>+${he(u)}</span>
              </div>
              <div class="text-xs text-green-600">
                Bạn được nợ
              </div>
            </div>
          </div>
          <div class="text-xs text-gray-500 mt-1">
            (Trả ${he(this.expense.amount)} - Nợ ${he(s)})
          </div>
        </div>
      `}else{if(a)return`
        <div class="inline-flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
          <div class="text-sm text-center">
            <div class="text-green-700 font-semibold flex items-center space-x-1">
              <span class="text-green-600">💰</span>
              <span>+${he(this.expense.amount)}</span>
            </div>
            <div class="text-xs text-green-600">
              Bạn được nợ
            </div>
          </div>
        </div>
      `;if(o)return`
        <div class="inline-flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-red-50 to-rose-50 border border-red-200">
          <div class="text-sm text-center">
            <div class="text-red-700 font-semibold flex items-center space-x-1">
              <span class="text-red-600">💳</span>
              <span>-${he(s)}</span>
            </div>
            <div class="text-xs text-red-600">
              Bạn nợ
            </div>
          </div>
        </div>
      `}return""}getCategoryName(e){return{food:"🍽️ Ăn uống",transportation:"🚗 Di chuyển",accommodation:"🏠 Lưu trú",entertainment:"🎉 Giải trí",shopping:"🛍️ Mua sắm",utilities:"⚡ Tiện ích",other:"📦 Khác"}[e]||"📦 Khác"}formatDate(e){return new Date(e).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"})}}class Ld{constructor(e,t,n){K(this,"balance"),K(this,"users"),K(this,"allBalances"),this.balance=e,this.users=t,this.allBalances=n}render(){const e=this.balance.totalOwed,t=this.balance.totalOwes,n=e-t;return`
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
          <span class="font-bold text-green-700 text-lg">+${he(e)}</span>
        </div>
        
        <div class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
          <span class="text-red-700 font-medium">💔 Bạn nợ:</span>
          <span class="font-bold text-red-700 text-lg">-${he(t)}</span>
        </div>
        
        <div class="flex justify-between items-center p-4 ${n>=0?"bg-green-100":"bg-red-100"} rounded-lg border-2 ${n>=0?"border-green-300":"border-red-300"}">
          <span class="font-bold ${n>=0?"text-green-800":"text-red-800"}">
            ${n>=0?"🎯":"⚠️"} Tổng cộng:
          </span>
          <span class="font-bold text-xl ${n>=0?"text-green-800":"text-red-800"}">
            ${n>=0?"+":""}${he(n)}
          </span>
        </div>
      </div>
    `}renderDetailedBalances(){let e='<div class="space-y-3 mb-6">';const t=Object.entries(this.balance.owedBy).filter(([s,a])=>a>0);t.length>0&&(e+='<h3 class="font-semibold text-green-700 text-sm mb-2">💚 Ai nợ bạn:</h3>',t.forEach(([s,a])=>{const o=this.users.find(u=>u.id===s);e+=`
          <div class="flex justify-between items-center p-2 bg-green-50 rounded text-sm">
            <div class="flex items-center space-x-2">
              <span class="text-green-700">${o==null?void 0:o.name}</span>
            </div>
            <span class="font-semibold text-green-700">+${he(a)}</span>
          </div>
        `}));const n=Object.entries(this.balance.owes).filter(([s,a])=>a>0);return n.length>0&&(e+='<h3 class="font-semibold text-red-700 text-sm mb-2 mt-4">💔 Bạn nợ ai:</h3>',n.forEach(([s,a])=>{const o=this.users.find(u=>u.id===s);e+=`
          <div class="flex justify-between items-center p-2 bg-red-50 rounded text-sm">
            <div class="flex items-center space-x-2">
              <span class="text-red-700">${o==null?void 0:o.name}</span>
            </div>
            <span class="font-semibold text-red-700">-${he(a)}</span>
          </div>
        `})),e+="</div>",e}renderSettlementSuggestions(){const e=Dd(this.allBalances).filter(n=>n.from===this.balance.userId||n.to===this.balance.userId);if(e.length===0)return"";let t=`
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
            <span class="font-bold text-orange-700">${he(n.amount)}</span>
          </div>
        `:t+=`
          <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg text-sm">
            <span class="text-blue-700">
              💰 Nhận từ <strong>${s==null?void 0:s.name}</strong>
            </span>
            <span class="font-bold text-blue-700">${he(n.amount)}</span>
          </div>
        `}),t+=`
        </div>
        <p class="text-xs text-gray-500 mt-2">
          💡 Đây là cách tối ưu để thanh toán tất cả các khoản nợ
        </p>
      </div>
    `,t}}class Lr{constructor(e,t,n){K(this,"users"),K(this,"currentUser"),K(this,"onAddExpense"),this.users=e,this.currentUser=t,this.onAddExpense=n}show(){this.render();const e=document.getElementById("addExpenseModal");if(e){e.classList.remove("hidden"),e.classList.add("flex");const t=document.getElementById("expenseDate");if(t){const s=new Date().toISOString().split("T")[0];t.value=s}const n=e.querySelector('input[type="text"]');n&&n.focus()}}hide(){const e=document.getElementById("addExpenseModal");e&&(e.classList.add("hidden"),e.classList.remove("flex")),this.resetForm()}render(){return`
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
                min="0"
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

            <!-- Date -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                📅 Ngày chi tiêu *
              </label>
              <input 
                type="date" 
                id="expenseDate" 
                class="input-field" 
                required
              >
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
    `}setupEventListeners(){var e,t,n;(e=document.getElementById("closeModal"))==null||e.addEventListener("click",()=>this.hide()),(t=document.getElementById("cancelBtn"))==null||t.addEventListener("click",()=>this.hide()),(n=document.getElementById("addExpenseForm"))==null||n.addEventListener("submit",p=>{p.preventDefault(),this.handleSubmit()}),document.querySelectorAll('input[name="splitType"]').forEach(p=>{p.addEventListener("change",m=>{const S=m.target.value;this.toggleSplitMode(S),this.updatePreview()})});const s=document.getElementById("expenseAmount"),a=document.querySelectorAll(".splitBetween"),o=document.querySelectorAll(".customSplitAmount"),u=document.querySelectorAll(".customSplitUser"),h=()=>this.updatePreview();s==null||s.addEventListener("input",h),a.forEach(p=>p.addEventListener("change",h)),o.forEach(p=>p.addEventListener("input",h)),u.forEach(p=>p.addEventListener("change",h));const d=p=>{p.key==="Escape"&&(this.hide(),document.removeEventListener("keydown",d))};document.addEventListener("keydown",d),this.addSelectAllControls()}toggleSplitMode(e){const t=document.getElementById("equalSplitContainer"),n=document.getElementById("customSplitContainer");e==="equal"?(t==null||t.classList.remove("hidden"),n==null||n.classList.add("hidden")):(t==null||t.classList.add("hidden"),n==null||n.classList.remove("hidden"))}addSelectAllControls(){var e,t,n;const s=document.querySelector(".space-y-2.max-h-32");if(s){const a=document.createElement("div");a.className="flex space-x-2 text-xs mb-2",a.innerHTML=`
        <button type="button" id="selectAll" class="text-blue-600 hover:text-blue-800">Chọn tất cả</button>
        <span class="text-gray-400">•</span>
        <button type="button" id="selectNone" class="text-blue-600 hover:text-blue-800">Bỏ chọn tất cả</button>
      `,(e=s.parentNode)==null||e.insertBefore(a,s),(t=document.getElementById("selectAll"))==null||t.addEventListener("click",()=>{document.querySelectorAll(".splitBetween").forEach(o=>{o.checked=!0}),this.updatePreview()}),(n=document.getElementById("selectNone"))==null||n.addEventListener("click",()=>{document.querySelectorAll(".splitBetween").forEach(o=>{o.checked=!1}),this.updatePreview()})}}updatePreview(){var e;const t=document.getElementById("expenseAmount"),n=parseFloat((t==null?void 0:t.value)||"0"),s=(e=document.querySelector('input[name="splitType"]:checked'))==null?void 0:e.value,a=document.getElementById("splitPreviewContent");if(a){if(n<=0){a.innerHTML="Nhập số tiền để xem chi tiết chia tiền";return}if(s==="equal"){const o=document.querySelectorAll(".splitBetween:checked");if(o.length===0){a.innerHTML="Chọn ít nhất một người để chia tiền";return}const u=n/o.length;let h='<div class="space-y-1">';h+=`<div class="font-medium">Tổng: ${this.formatCurrency(n)} ÷ ${o.length} người = ${this.formatCurrency(u)}/người</div>`,o.forEach(d=>{const p=d.value,m=this.users.find(S=>S.id===p);h+=`<div class="flex justify-between"><span>${m==null?void 0:m.name}</span><span>${this.formatCurrency(u)}</span></div>`}),h+="</div>",a.innerHTML=h}else{const o=document.querySelectorAll(".customSplitUser:checked");if(o.length===0){a.innerHTML="Chọn ít nhất một người để chia tiền";return}let u='<div class="space-y-1">',h=0;o.forEach(m=>{const S=m.value,_=this.users.find(L=>L.id===S),k=document.querySelector(`input[data-user-id="${S}"]`),R=parseFloat((k==null?void 0:k.value)||"0");h+=R,u+=`<div class="flex justify-between"><span>${_==null?void 0:_.name}</span><span>${this.formatCurrency(R)}</span></div>`});const d=n-h;u+='<div class="border-t pt-1 mt-1">',u+=`<div class="flex justify-between font-medium"><span>Tổng đã chia:</span><span>${this.formatCurrency(h)}</span></div>`,u+=`<div class="flex justify-between ${d===0?"text-green-600":d>0?"text-orange-600":"text-red-600"}">`,u+=`<span>Còn lại:</span><span>${this.formatCurrency(d)}</span></div>`,u+="</div></div>",a.innerHTML=u;const p=document.getElementById("customSplitTotal");p&&(p.innerHTML=`Tổng: ${this.formatCurrency(h)} (Còn lại: ${this.formatCurrency(d)})`,p.className=`text-sm pt-2 border-t ${d===0?"text-green-600":"text-orange-600"}`)}}}handleSubmit(){var e;const t=document.getElementById("expenseDescription").value,n=parseFloat(document.getElementById("expenseAmount").value),s=document.getElementById("expensePaidBy").value,a=document.getElementById("expenseCategory").value,o=document.getElementById("expenseDate").value,u=new Date(o),h=(e=document.querySelector('input[name="splitType"]:checked'))==null?void 0:e.value;let d=[];if(h==="equal"){const _=document.querySelectorAll(".splitBetween:checked");if(_.length===0){alert("Vui lòng chọn ít nhất một người để chia chi phí!");return}const k=n/_.length;_.forEach(R=>{d.push({userId:R.value,amount:k})})}else{const _=document.querySelectorAll(".customSplitUser:checked");if(_.length===0){alert("Vui lòng chọn ít nhất một người để chia chi phí!");return}let k=0;if(_.forEach(R=>{var L;const B=R.value,H=document.querySelector(`input[data-user-id="${B}"]`),Q=parseFloat((H==null?void 0:H.value)||"0");if(Q<=0){alert(`Vui lòng nhập số tiền cho ${(L=this.users.find(ee=>ee.id===B))==null?void 0:L.name}!`);return}d.push({userId:B,amount:Q}),k+=Q}),Math.abs(k-n)>1){alert(`Tổng số tiền chia (${this.formatCurrency(k)}) phải bằng tổng chi phí (${this.formatCurrency(n)})!`);return}}const p={description:t.trim(),amount:n,paidBy:s,category:a,splitBetween:d,splitType:h,date:u},m=kd(p);if(m.length>0){alert(m.join(`
`));return}const S={id:Cd(),description:p.description,amount:p.amount,currency:"VND",paidBy:p.paidBy,splitBetween:p.splitBetween,splitType:p.splitType,category:p.category,date:p.date};this.onAddExpense(S),this.hide()}resetForm(){const e=document.getElementById("addExpenseForm");e&&(e.reset(),document.querySelectorAll(".splitBetween").forEach(t=>{t.checked=!0}))}formatCurrency(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0,maximumFractionDigits:0}).format(e)}}class Rd{constructor(e,t,n){K(this,"users"),K(this,"settlements"),K(this,"currentUser"),this.users=e,this.settlements=t,this.currentUser=n}render(){const e=this.settlements.filter(n=>!n.isSettled),t=this.groupSettlements(e);return t.length===0?`
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
          ${t.map(n=>{const s=this.users.find(u=>u.id===n.from),a=this.users.find(u=>u.id===n.to),o=this.currentUser&&this.currentUser.id===n.to;return`
              <div class="p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ${s==null?void 0:s.name.charAt(0).toUpperCase()}
                    </div>
                    <span class="text-xl">💸</span>
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ${a==null?void 0:a.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div class="font-bold text-lg text-blue-600">
                    ${he(n.totalAmount)}
                  </div>
                </div>
                <div class="text-xs text-gray-600 mb-2">
                  <strong>${s==null?void 0:s.name}</strong> cần chuyển cho <strong>${a==null?void 0:a.name}</strong>
                </div>
                <div class="text-xs text-gray-500 mb-2">
                  ${n.count>1?`Gộp từ ${n.count} khoản thanh toán`:n.settlements[0].description}
                </div>
                ${o?`
                  <div class="flex justify-end">
                    <button 
                      onclick="window.confirmMultipleSettlements('${n.settlements.map(u=>u.id).join(",")}')"
                      class="text-xs text-green-600 hover:text-green-800 bg-green-100 hover:bg-green-200 px-3 py-1 rounded-full transition-colors"
                      title="Xác nhận đã nhận tiền"
                    >
                      ✅ Xác nhận thanh toán
                    </button>
                  </div>
                `:`
                  <div class="text-center">
                    <span class="text-xs text-gray-400">
                      🔒 Chỉ ${a==null?void 0:a.name} mới có thể xác nhận
                    </span>
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
            <p>• <strong>Tối ưu:</strong> Chỉ ${t.length} giao dịch</p>
            <p>• <strong>Công bằng:</strong> Không ai nợ ai</p>
            <p>• <strong>Đơn giản:</strong> Ít giao dịch nhất</p>
          </div>
        </div>

        <div class="mt-3 text-xs text-gray-500">
          💡 <strong>Mẹo:</strong> Banking, ví điện tử hoặc tiền mặt
        </div>
      </div>
    `}groupSettlements(e){const t=new Map;return e.forEach(n=>{const s=`${n.from}->${n.to}`;if(t.has(s)){const a=t.get(s);a.totalAmount+=n.amount,a.count+=1,a.settlements.push(n)}else t.set(s,{from:n.from,to:n.to,totalAmount:n.amount,count:1,settlements:[n]})}),Array.from(t.values())}}class Od{constructor(e,t){K(this,"onLogin"),K(this,"onClose"),this.onLogin=e,this.onClose=t}render(){return`
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
    `}setupEventListeners(){const e=document.getElementById("login-form"),t=document.getElementById("close-login-modal"),n=document.getElementById("cancel-login"),s=document.getElementById("login-error"),a=document.getElementById("login-submit"),o=document.getElementById("login-submit-text"),u=document.getElementById("login-submit-loading");t==null||t.addEventListener("click",this.onClose),n==null||n.addEventListener("click",this.onClose);const h=d=>{d.key==="Escape"&&(this.onClose(),document.removeEventListener("keydown",h))};document.addEventListener("keydown",h),e==null||e.addEventListener("submit",async d=>{d.preventDefault();const p=new FormData(e),m={username:p.get("username"),password:p.get("password")};a.disabled=!0,o.classList.add("hidden"),u.classList.remove("hidden"),s.classList.add("hidden");try{await this.onLogin(m)}catch(S){s.textContent=S instanceof Error?S.message:"Đã có lỗi xảy ra",s.classList.remove("hidden")}finally{a.disabled=!1,o.classList.remove("hidden"),u.classList.add("hidden")}}),setTimeout(()=>{var d;(d=document.getElementById("email"))==null||d.focus()},100)}}class Pd{constructor(e,t,n,s,a){K(this,"users"),K(this,"onCreateUser"),K(this,"onUpdateUserStatus"),K(this,"onClose"),K(this,"authService"),K(this,"editUser",o=>{var u,h;const d=this.users.find(R=>R.id===o);if(!d){alert("Không tìm thấy người dùng!");return}const p=d.role==="admin",m=document.createElement("div");m.className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",m.id="edit-user-modal",m.innerHTML=`
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
    `,document.body.appendChild(m);const S=()=>{document.body.removeChild(m),document.removeEventListener("keydown",_)},_=R=>{R.key==="Escape"&&S()};(u=document.getElementById("close-edit-modal"))==null||u.addEventListener("click",S),(h=document.getElementById("cancel-edit-user"))==null||h.addEventListener("click",S),document.addEventListener("keydown",_);const k=document.getElementById("edit-user-form");k.addEventListener("submit",async R=>{R.preventDefault();const L=new FormData(k),B=L.get("name"),H=L.get("username"),Q=L.get("password"),ee=document.getElementById("edit-user-error"),ue=document.getElementById("edit-user-text"),te=document.getElementById("edit-user-loading");try{if(ue==null||ue.classList.add("hidden"),te==null||te.classList.remove("hidden"),ee==null||ee.classList.add("hidden"),p){if(!Q.trim())throw new Error("Vui lòng nhập mật khẩu mới");await this.authService.updateUser(o,{password:Q.trim()})}else{await this.authService.updateUser(o,{name:B.trim(),username:H.trim(),...Q.trim()&&{password:Q.trim()}});const g=this.users.findIndex(v=>v.id===o);g!==-1&&(this.users[g].name=B.trim(),this.users[g].username=H.trim())}const b=document.getElementById("users-list");b&&(b.innerHTML=this.renderUsersList()),alert("✅ Cập nhật thông tin thành công!"),S()}catch(b){ue==null||ue.classList.remove("hidden"),te==null||te.classList.add("hidden"),ee&&(ee.textContent=b instanceof Error?b.message:"Có lỗi xảy ra",ee.classList.remove("hidden"))}})}),this.users=e,this.onCreateUser=t,this.onUpdateUserStatus=n,this.onClose=s,this.authService=a}render(){return`
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
    `).join("")}setupEventListeners(){const e=document.getElementById("close-user-management"),t=document.getElementById("close-user-management-btn"),n=document.getElementById("create-user-form"),s=document.getElementById("create-user-error"),a=document.getElementById("create-user-success");e==null||e.addEventListener("click",this.onClose),t==null||t.addEventListener("click",this.onClose);const o=u=>{u.key==="Escape"&&(this.onClose(),document.removeEventListener("keydown",o))};document.addEventListener("keydown",o),n==null||n.addEventListener("submit",async u=>{u.preventDefault();const h=new FormData(n),d={name:h.get("name"),username:h.get("username"),password:h.get("password")},p=document.getElementById("create-user-text"),m=document.getElementById("create-user-loading");p.classList.add("hidden"),m.classList.remove("hidden"),s.classList.add("hidden"),a.classList.add("hidden");try{const S=await this.onCreateUser(d);this.users.push(S);const _=document.getElementById("users-list");_&&(_.innerHTML=this.renderUsersList()),n.reset(),a.textContent=`Tạo thành công người dùng: ${S.name}`,a.classList.remove("hidden")}catch(S){s.textContent=S instanceof Error?S.message:"Đã có lỗi xảy ra",s.classList.remove("hidden")}finally{p.classList.remove("hidden"),m.classList.add("hidden")}}),window.toggleUserStatus=async(u,h)=>{try{await this.onUpdateUserStatus(u,h);const d=this.users.findIndex(m=>m.id===u);d!==-1&&(this.users[d].isActive=h);const p=document.getElementById("users-list");p&&(p.innerHTML=this.renderUsersList())}catch(d){alert("Lỗi: "+(d instanceof Error?d.message:"Không thể cập nhật trạng thái"))}}}}const Md=()=>{};var Ho={};/**
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
*/const bu=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ud=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const a=r[t++];e[n++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=r[t++],o=r[t++],u=r[t++],h=((s&7)<<18|(a&63)<<12|(o&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(h>>10)),e[n++]=String.fromCharCode(56320+(h&1023))}else{const a=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(a&63)<<6|o&63)}}return e.join("")},Eu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const a=r[s],o=s+1<r.length,u=o?r[s+1]:0,h=s+2<r.length,d=h?r[s+2]:0,p=a>>2,m=(a&3)<<4|u>>4;let S=(u&15)<<2|d>>6,_=d&63;h||(_=64,o||(S=64)),n.push(t[p],t[m],t[S],t[_])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(bu(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Ud(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const a=t[r.charAt(s++)],o=s<r.length?t[r.charAt(s)]:0;++s;const u=s<r.length?t[r.charAt(s)]:64;++s;const h=s<r.length?t[r.charAt(s)]:64;if(++s,a==null||o==null||u==null||h==null)throw new Vd;const d=a<<2|o>>4;if(n.push(d),u!==64){const p=o<<4&240|u>>2;if(n.push(p),h!==64){const m=u<<6&192|h;n.push(m)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Vd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fd=function(r){const e=bu(r);return Eu.encodeByteArray(e,!0)},Qr=function(r){return Fd(r).replace(/\./g,"")},Tu=function(r){try{return Eu.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
*/const jd=()=>Bd().__FIREBASE_DEFAULTS__,$d=()=>{if(typeof process>"u"||typeof Ho>"u")return;const r=Ho.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},qd=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Tu(r[1]);return e&&JSON.parse(e)},ps=()=>{try{return Md()||jd()||$d()||qd()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Iu=r=>{var e,t;return(t=(e=ps())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},zd=r=>{const e=Iu(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Su=()=>{var r;return(r=ps())==null?void 0:r.config},xu=r=>{var e;return(e=ps())==null?void 0:e[`_${r}`]};/**
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
*/function gn(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _u(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
*/function Gd(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Qr(JSON.stringify(t)),Qr(JSON.stringify(o)),""].join(".")}const Hn={};function Kd(){const r={prod:[],emulator:[]};for(const e of Object.keys(Hn))Hn[e]?r.emulator.push(e):r.prod.push(e);return r}function Wd(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Go=!1;function Au(r,e){if(typeof window>"u"||typeof document>"u"||!gn(window.location.host)||Hn[r]===e||Hn[r]||Go)return;Hn[r]=e;function t(m){return`__firebase__banner__${m}`}const n="__firebase__banner",s=Kd().prod.length>0;function a(){const m=document.getElementById(n);m&&m.remove()}function o(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,S){m.setAttribute("width","24"),m.setAttribute("id",S),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Go=!0,a()},m}function d(m,S){m.setAttribute("id",S),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Wd(n),S=t("text"),_=document.getElementById(S)||document.createElement("span"),k=t("learnmore"),R=document.getElementById(k)||document.createElement("a"),L=t("preprendIcon"),B=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const H=m.element;o(H),d(R,k);const Q=h();u(B,L),H.append(B,_,R,Q),document.body.appendChild(H)}s?(_.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
*/function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function Xd(){var r;const e=(r=ps())==null?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yd(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Zd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ef(){const r=Te();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function tf(){return!Xd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nf(){try{return typeof indexedDB=="object"}catch{return!1}}function rf(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)==null?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
*/const sf="FirebaseError";class nt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=sf,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],o=a?af(a,n):"Error",u=`${this.serviceName}: ${o} (${s}).`;return new nt(s,u,n)}}function af(r,e){return r.replace(of,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const of=/\{\$([^}]+)}/g;function cf(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Vt(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const a=r[s],o=e[s];if(Ko(a)&&Ko(o)){if(!Vt(a,o))return!1}else if(a!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Ko(r){return r!==null&&typeof r=="object"}/**
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
*/function or(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function uf(r,e){const t=new lf(r,e);return t.subscribe.bind(t)}class lf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");hf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=ai),s.error===void 0&&(s.error=ai),s.complete===void 0&&(s.complete=ai);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hf(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ai(){}/**
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
*/function xe(r){return r&&r._delegate?r._delegate:r}class Ft{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
*/const Ot="[DEFAULT]";/**
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
*/class df{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Hd;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pf(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});n.resolve(a)}catch{}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[a,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);n===u&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const a=this.instances.get(n);return a&&e(a,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ff(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ff(r){return r===Ot?void 0:r}function pf(r){return r.instantiationMode==="EAGER"}/**
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
*/class mf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new df(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var $;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})($||($={}));const gf={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},yf=$.INFO,vf={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},wf=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=vf[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xi{constructor(e){this.name=e,this._logLevel=yf,this._logHandler=wf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const bf=(r,e)=>e.some(t=>r instanceof t);let Wo,Qo;function Ef(){return Wo||(Wo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tf(){return Qo||(Qo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cu=new WeakMap,Si=new WeakMap,ku=new WeakMap,oi=new WeakMap,Ji=new WeakMap;function If(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",a),r.removeEventListener("error",o)},a=()=>{t(gt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",a),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Cu.set(t,r)}).catch(()=>{}),Ji.set(e,r),e}function Sf(r){if(Si.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",o),r.removeEventListener("abort",o)},a=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",a),r.addEventListener("error",o),r.addEventListener("abort",o)});Si.set(r,e)}let xi={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Si.get(r);if(e==="objectStoreNames")return r.objectStoreNames||ku.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function xf(r){xi=r(xi)}function _f(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(ci(this),e,...t);return ku.set(n,e.sort?e.sort():[e]),gt(n)}:Tf().includes(r)?function(...e){return r.apply(ci(this),e),gt(Cu.get(this))}:function(...e){return gt(r.apply(ci(this),e))}}function Af(r){return typeof r=="function"?_f(r):(r instanceof IDBTransaction&&Sf(r),bf(r,Ef())?new Proxy(r,xi):r)}function gt(r){if(r instanceof IDBRequest)return If(r);if(oi.has(r))return oi.get(r);const e=Af(r);return e!==r&&(oi.set(r,e),Ji.set(e,r)),e}const ci=r=>Ji.get(r);function Cf(r,e,{blocked:t,upgrade:n,blocking:s,terminated:a}={}){const o=indexedDB.open(r,e),u=gt(o);return n&&o.addEventListener("upgradeneeded",h=>{n(gt(o.result),h.oldVersion,h.newVersion,gt(o.transaction),h)}),t&&o.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{a&&h.addEventListener("close",()=>a()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const kf=["get","getKey","getAll","getAllKeys","count"],Df=["put","add","delete","clear"],ui=new Map;function Xo(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ui.get(e))return ui.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Df.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||kf.includes(t)))return;const a=async function(o,...u){const h=this.transaction(o,s?"readwrite":"readonly");let d=h.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),s&&h.done]))[0]};return ui.set(e,a),a}xf(r=>({...r,get:(e,t,n)=>Xo(e,t)||r.get(e,t,n),has:(e,t)=>!!Xo(e,t)||r.has(e,t)}));/**
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
*/class Nf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Lf(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(" ")}}function Lf(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _i="@firebase/app",Jo="0.14.4";/**
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
*/const Je=new Xi("@firebase/app"),Rf="@firebase/app-compat",Of="@firebase/analytics-compat",Pf="@firebase/analytics",Mf="@firebase/app-check-compat",Uf="@firebase/app-check",Vf="@firebase/auth",Ff="@firebase/auth-compat",Bf="@firebase/database",jf="@firebase/data-connect",$f="@firebase/database-compat",qf="@firebase/functions",zf="@firebase/functions-compat",Hf="@firebase/installations",Gf="@firebase/installations-compat",Kf="@firebase/messaging",Wf="@firebase/messaging-compat",Qf="@firebase/performance",Xf="@firebase/performance-compat",Jf="@firebase/remote-config",Yf="@firebase/remote-config-compat",Zf="@firebase/storage",ep="@firebase/storage-compat",tp="@firebase/firestore",np="@firebase/ai",rp="@firebase/firestore-compat",sp="firebase",ip="12.4.0";/**
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
*/const Ai="[DEFAULT]",ap={[_i]:"fire-core",[Rf]:"fire-core-compat",[Pf]:"fire-analytics",[Of]:"fire-analytics-compat",[Uf]:"fire-app-check",[Mf]:"fire-app-check-compat",[Vf]:"fire-auth",[Ff]:"fire-auth-compat",[Bf]:"fire-rtdb",[jf]:"fire-data-connect",[$f]:"fire-rtdb-compat",[qf]:"fire-fn",[zf]:"fire-fn-compat",[Hf]:"fire-iid",[Gf]:"fire-iid-compat",[Kf]:"fire-fcm",[Wf]:"fire-fcm-compat",[Qf]:"fire-perf",[Xf]:"fire-perf-compat",[Jf]:"fire-rc",[Yf]:"fire-rc-compat",[Zf]:"fire-gcs",[ep]:"fire-gcs-compat",[tp]:"fire-fst",[rp]:"fire-fst-compat",[np]:"fire-vertex","fire-js":"fire-js",[sp]:"fire-js-all"};/**
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
*/const Xr=new Map,op=new Map,Ci=new Map;function Yo(r,e){try{r.container.addComponent(e)}catch(t){Je.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function cn(r){const e=r.name;if(Ci.has(e))return Je.debug(`There were multiple attempts to register component ${e}.`),!1;Ci.set(e,r);for(const t of Xr.values())Yo(t,r);for(const t of op.values())Yo(t,r);return!0}function Yi(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Be(r){return r==null?!1:r.settings!==void 0}/**
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
*/const cp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yt=new ar("app","Firebase",cp);/**
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
*/class up{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
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
*/const yn=ip;function Du(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Ai,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw yt.create("bad-app-name",{appName:String(s)});if(t||(t=Su()),!t)throw yt.create("no-options");const a=Xr.get(s);if(a){if(Vt(t,a.options)&&Vt(n,a.config))return a;throw yt.create("duplicate-app",{appName:s})}const o=new mf(s);for(const h of Ci.values())o.addComponent(h);const u=new up(t,n,o);return Xr.set(s,u),u}function Nu(r=Ai){const e=Xr.get(r);if(!e&&r===Ai&&Su())return Du();if(!e)throw yt.create("no-app",{appName:r});return e}function vt(r,e,t){let n=ap[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Je.warn(o.join(" "));return}cn(new Ft(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
*/const lp="firebase-heartbeat-database",hp=1,Jn="firebase-heartbeat-store";let li=null;function Lu(){return li||(li=Cf(lp,hp,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Jn)}catch(t){console.warn(t)}}}}).catch(r=>{throw yt.create("idb-open",{originalErrorMessage:r.message})})),li}async function dp(r){try{const e=(await Lu()).transaction(Jn),t=await e.objectStore(Jn).get(Ru(r));return await e.done,t}catch(e){if(e instanceof nt)Je.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Je.warn(t.message)}}}async function Zo(r,e){try{const t=(await Lu()).transaction(Jn,"readwrite");await t.objectStore(Jn).put(e,Ru(r)),await t.done}catch(t){if(t instanceof nt)Je.warn(t.message);else{const n=yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Je.warn(n.message)}}}function Ru(r){return`${r.name}!${r.options.appId}`}/**
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
*/const fp=1024,pp=30;class mp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yp(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ec();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>pp){const a=vp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Je.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ec(),{heartbeatsToSend:n,unsentEntries:s}=gp(this._heartbeatsCache.heartbeats),a=Qr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Je.warn(t),""}}}function ec(){return new Date().toISOString().substring(0,10)}function gp(r,e=fp){const t=[];let n=r.slice();for(const s of r){const a=t.find(o=>o.agent===s.agent);if(a){if(a.dates.push(s.date),tc(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),tc(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class yp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nf()?rf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await dp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Zo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Zo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}}function tc(r){return Qr(JSON.stringify({version:2,heartbeats:r})).length}function vp(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
*/function wp(r){cn(new Ft("platform-logger",e=>new Nf(e),"PRIVATE")),cn(new Ft("heartbeat",e=>new mp(e),"PRIVATE")),vt(_i,Jo,r),vt(_i,Jo,"esm2020"),vt("fire-js","")}wp("");var nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wt,Ou;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function v(){}v.prototype=g.prototype,b.F=g.prototype,b.prototype=new v,b.prototype.constructor=b,b.D=function(E,w,I){for(var y=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)y[_e-2]=arguments[_e];return g.prototype[w].apply(E,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,g,v){v||(v=0);const E=Array(16);if(typeof g=="string")for(var w=0;w<16;++w)E[w]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(w=0;w<16;++w)E[w]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=b.g[0],v=b.g[1],w=b.g[2];let I=b.g[3],y;y=g+(I^v&(w^I))+E[0]+3614090360&4294967295,g=v+(y<<7&4294967295|y>>>25),y=I+(w^g&(v^w))+E[1]+3905402710&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(v^I&(g^v))+E[2]+606105819&4294967295,w=I+(y<<17&4294967295|y>>>15),y=v+(g^w&(I^g))+E[3]+3250441966&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(I^v&(w^I))+E[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=I+(w^g&(v^w))+E[5]+1200080426&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(v^I&(g^v))+E[6]+2821735955&4294967295,w=I+(y<<17&4294967295|y>>>15),y=v+(g^w&(I^g))+E[7]+4249261313&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(I^v&(w^I))+E[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=I+(w^g&(v^w))+E[9]+2336552879&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(v^I&(g^v))+E[10]+4294925233&4294967295,w=I+(y<<17&4294967295|y>>>15),y=v+(g^w&(I^g))+E[11]+2304563134&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(I^v&(w^I))+E[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=I+(w^g&(v^w))+E[13]+4254626195&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(v^I&(g^v))+E[14]+2792965006&4294967295,w=I+(y<<17&4294967295|y>>>15),y=v+(g^w&(I^g))+E[15]+1236535329&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(w^I&(v^w))+E[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=I+(v^w&(g^v))+E[6]+3225465664&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(I^g))+E[11]+643717713&4294967295,w=I+(y<<14&4294967295|y>>>18),y=v+(I^g&(w^I))+E[0]+3921069994&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(v^w))+E[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=I+(v^w&(g^v))+E[10]+38016083&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(I^g))+E[15]+3634488961&4294967295,w=I+(y<<14&4294967295|y>>>18),y=v+(I^g&(w^I))+E[4]+3889429448&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(v^w))+E[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=I+(v^w&(g^v))+E[14]+3275163606&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(I^g))+E[3]+4107603335&4294967295,w=I+(y<<14&4294967295|y>>>18),y=v+(I^g&(w^I))+E[8]+1163531501&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(v^w))+E[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=I+(v^w&(g^v))+E[2]+4243563512&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(I^g))+E[7]+1735328473&4294967295,w=I+(y<<14&4294967295|y>>>18),y=v+(I^g&(w^I))+E[12]+2368359562&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(v^w^I)+E[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=I+(g^v^w)+E[8]+2272392833&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^v)+E[11]+1839030562&4294967295,w=I+(y<<16&4294967295|y>>>16),y=v+(w^I^g)+E[14]+4259657740&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^I)+E[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=I+(g^v^w)+E[4]+1272893353&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^v)+E[7]+4139469664&4294967295,w=I+(y<<16&4294967295|y>>>16),y=v+(w^I^g)+E[10]+3200236656&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^I)+E[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=I+(g^v^w)+E[0]+3936430074&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^v)+E[3]+3572445317&4294967295,w=I+(y<<16&4294967295|y>>>16),y=v+(w^I^g)+E[6]+76029189&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^I)+E[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=I+(g^v^w)+E[12]+3873151461&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^v)+E[15]+530742520&4294967295,w=I+(y<<16&4294967295|y>>>16),y=v+(w^I^g)+E[2]+3299628645&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(w^(v|~I))+E[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=I+(v^(g|~w))+E[7]+1126891415&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~v))+E[14]+2878612391&4294967295,w=I+(y<<15&4294967295|y>>>17),y=v+(I^(w|~g))+E[5]+4237533241&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~I))+E[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=I+(v^(g|~w))+E[3]+2399980690&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~v))+E[10]+4293915773&4294967295,w=I+(y<<15&4294967295|y>>>17),y=v+(I^(w|~g))+E[1]+2240044497&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~I))+E[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=I+(v^(g|~w))+E[15]+4264355552&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~v))+E[6]+2734768916&4294967295,w=I+(y<<15&4294967295|y>>>17),y=v+(I^(w|~g))+E[13]+1309151649&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~I))+E[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=I+(v^(g|~w))+E[11]+3174756917&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~v))+E[2]+718787259&4294967295,w=I+(y<<15&4294967295|y>>>17),y=v+(I^(w|~g))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+I&4294967295}n.prototype.v=function(b,g){g===void 0&&(g=b.length);const v=g-this.blockSize,E=this.C;let w=this.h,I=0;for(;I<g;){if(w==0)for(;I<=v;)s(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<g;)if(E[w++]=b.charCodeAt(I++),w==this.blockSize){s(this,E),w=0;break}}else for(;I<g;)if(E[w++]=b[I++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=g},n.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;g=this.o*8;for(var v=b.length-8;v<b.length;++v)b[v]=g&255,g/=256;for(this.v(b),b=Array(16),g=0,v=0;v<4;++v)for(let E=0;E<32;E+=8)b[g++]=this.g[v]>>>E&255;return b};function a(b,g){var v=u;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=g(b)}function o(b,g){this.h=g;const v=[];let E=!0;for(let w=b.length-1;w>=0;w--){const I=b[w]|0;E&&I==g||(v[w]=I,E=!1)}this.g=v}var u={};function h(b){return-128<=b&&b<128?a(b,function(g){return new o([g|0],g<0?-1:0)}):new o([b|0],b<0?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return m;if(b<0)return L(d(-b));const g=[];let v=1;for(let E=0;b>=v;E++)g[E]=b/v|0,v*=4294967296;return new o(g,0)}function p(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return L(p(b.substring(1),g));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=d(Math.pow(g,8));let E=m;for(let I=0;I<b.length;I+=8){var w=Math.min(8,b.length-I);const y=parseInt(b.substring(I,I+w),g);w<8?(w=d(Math.pow(g,w)),E=E.j(w).add(d(y))):(E=E.j(v),E=E.add(d(y)))}return E}var m=h(0),S=h(1),_=h(16777216);r=o.prototype,r.m=function(){if(R(this))return-L(this).m();let b=0,g=1;for(let v=0;v<this.g.length;v++){const E=this.i(v);b+=(E>=0?E:4294967296+E)*g,g*=4294967296}return b},r.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(k(this))return"0";if(R(this))return"-"+L(this).toString(b);const g=d(Math.pow(b,6));var v=this;let E="";for(;;){const w=ee(v,g).g;v=B(v,w.j(g));let I=((v.g.length>0?v.g[0]:v.h)>>>0).toString(b);if(v=w,k(v))return I+E;for(;I.length<6;)I="0"+I;E=I+E}},r.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function k(b){if(b.h!=0)return!1;for(let g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function R(b){return b.h==-1}r.l=function(b){return b=B(this,b),R(b)?-1:k(b)?0:1};function L(b){const g=b.g.length,v=[];for(let E=0;E<g;E++)v[E]=~b.g[E];return new o(v,~b.h).add(S)}r.abs=function(){return R(this)?L(this):this},r.add=function(b){const g=Math.max(this.g.length,b.g.length),v=[];let E=0;for(let w=0;w<=g;w++){let I=E+(this.i(w)&65535)+(b.i(w)&65535),y=(I>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);E=y>>>16,I&=65535,y&=65535,v[w]=y<<16|I}return new o(v,v[v.length-1]&-2147483648?-1:0)};function B(b,g){return b.add(L(g))}r.j=function(b){if(k(this)||k(b))return m;if(R(this))return R(b)?L(this).j(L(b)):L(L(this).j(b));if(R(b))return L(this.j(L(b)));if(this.l(_)<0&&b.l(_)<0)return d(this.m()*b.m());const g=this.g.length+b.g.length,v=[];for(var E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(let w=0;w<b.g.length;w++){const I=this.i(E)>>>16,y=this.i(E)&65535,_e=b.i(w)>>>16,kt=b.i(w)&65535;v[2*E+2*w]+=y*kt,H(v,2*E+2*w),v[2*E+2*w+1]+=I*kt,H(v,2*E+2*w+1),v[2*E+2*w+1]+=y*_e,H(v,2*E+2*w+1),v[2*E+2*w+2]+=I*_e,H(v,2*E+2*w+2)}for(b=0;b<g;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=g;b<2*g;b++)v[b]=0;return new o(v,0)};function H(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function Q(b,g){this.g=b,this.h=g}function ee(b,g){if(k(g))throw Error("division by zero");if(k(b))return new Q(m,m);if(R(b))return g=ee(L(b),g),new Q(L(g.g),L(g.h));if(R(g))return g=ee(b,L(g)),new Q(L(g.g),g.h);if(b.g.length>30){if(R(b)||R(g))throw Error("slowDivide_ only works with positive integers.");for(var v=S,E=g;E.l(b)<=0;)v=ue(v),E=ue(E);var w=te(v,1),I=te(E,1);for(E=te(E,2),v=te(v,2);!k(E);){var y=I.add(E);y.l(b)<=0&&(w=w.add(v),I=y),E=te(E,1),v=te(v,1)}return g=B(b,w.j(g)),new Q(w,g)}for(w=m;b.l(g)>=0;){for(v=Math.max(1,Math.floor(b.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),I=d(v),y=I.j(g);R(y)||y.l(b)>0;)v-=E,I=d(v),y=I.j(g);k(I)&&(I=S),w=w.add(I),b=B(b,y)}return new Q(w,b)}r.B=function(b){return ee(this,b).h},r.and=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)&b.i(E);return new o(v,this.h&b.h)},r.or=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)|b.i(E);return new o(v,this.h|b.h)},r.xor=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)^b.i(E);return new o(v,this.h^b.h)};function ue(b){const g=b.g.length+1,v=[];for(let E=0;E<g;E++)v[E]=b.i(E)<<1|b.i(E-1)>>>31;return new o(v,b.h)}function te(b,g){const v=g>>5;g%=32;const E=b.g.length-v,w=[];for(let I=0;I<E;I++)w[I]=g>0?b.i(I+v)>>>g|b.i(I+v+1)<<32-g:b.i(I+v);return new o(w,b.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Ou=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,wt=o}).apply(typeof nc<"u"?nc:typeof self<"u"?self:typeof window<"u"?window:{});var Rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pu,jn,Mu,Fr,ki,Uu,Vu,Fu;(function(){var r,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rr=="object"&&Rr];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=t(this);function s(i,c){if(c)e:{var l=n;i=i.split(".");for(var f=0;f<i.length-1;f++){var T=i[f];if(!(T in l))break e;l=l[T]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&e(l,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var l=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&l.push([f,c[f]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},o=this||self;function u(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,l){return i.call.apply(i.bind,arguments)}function d(i,c,l){return d=h,d.apply(null,arguments)}function p(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function m(i,c){function l(){}l.prototype=c.prototype,i.Z=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Ob=function(f,T,x){for(var D=Array(arguments.length-2),j=2;j<arguments.length;j++)D[j-2]=arguments[j];return c.prototype[T].apply(f,D)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function _(i){const c=i.length;if(c>0){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function k(i,c){for(let f=1;f<arguments.length;f++){const T=arguments[f];var l=typeof T;if(l=l!="object"?l:T?Array.isArray(T)?"array":l:"null",l=="array"||l=="object"&&typeof T.length=="number"){l=i.length||0;const x=T.length||0;i.length=l+x;for(let D=0;D<x;D++)i[l+D]=T[D]}else i.push(T)}}class R{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(i){o.setTimeout(()=>{throw i},0)}function B(){var i=b;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class H{constructor(){this.h=this.g=null}add(c,l){const f=Q.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Q=new R(()=>new ee,i=>i.reset());class ee{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,te=!1,b=new H,g=()=>{const i=Promise.resolve(void 0);ue=()=>{i.then(v)}};function v(){for(var i;i=B();){try{i.h.call(i.g)}catch(l){L(l)}var c=Q;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}te=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};o.addEventListener("test",l,c),o.removeEventListener("test",l,c)}catch{}return i}();function y(i){return/^[\s\xa0]*$/.test(i)}function _e(i,c){w.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}m(_e,w),_e.prototype.init=function(i,c){const l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&_e.Z.h.call(this)},_e.prototype.h=function(){_e.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var kt="closure_listenable_"+(Math.random()*1e6|0),Wh=0;function Qh(i,c,l,f,T){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=T,this.key=++Wh,this.da=this.fa=!1}function yr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function vr(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function Xh(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function $a(i){const c={};for(const l in i)c[l]=i[l];return c}const qa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function za(i,c){let l,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(l in f)i[l]=f[l];for(let x=0;x<qa.length;x++)l=qa[x],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function wr(i){this.src=i,this.g={},this.h=0}wr.prototype.add=function(i,c,l,f,T){const x=i.toString();i=this.g[x],i||(i=this.g[x]=[],this.h++);const D=Us(i,c,f,T);return D>-1?(c=i[D],l||(c.fa=!1)):(c=new Qh(c,this.src,x,!!f,T),c.fa=l,i.push(c)),c};function Ms(i,c){const l=c.type;if(l in i.g){var f=i.g[l],T=Array.prototype.indexOf.call(f,c,void 0),x;(x=T>=0)&&Array.prototype.splice.call(f,T,1),x&&(yr(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Us(i,c,l,f){for(let T=0;T<i.length;++T){const x=i[T];if(!x.da&&x.listener==c&&x.capture==!!l&&x.ha==f)return T}return-1}var Vs="closure_lm_"+(Math.random()*1e6|0),Fs={};function Ha(i,c,l,f,T){if(Array.isArray(c)){for(let x=0;x<c.length;x++)Ha(i,c[x],l,f,T);return null}return l=Wa(l),i&&i[kt]?i.J(c,l,u(f)?!!f.capture:!1,T):Jh(i,c,l,!1,f,T)}function Jh(i,c,l,f,T,x){if(!c)throw Error("Invalid event type");const D=u(T)?!!T.capture:!!T;let j=js(i);if(j||(i[Vs]=j=new wr(i)),l=j.add(c,l,f,D,x),l.proxy)return l;if(f=Yh(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)I||(T=D),T===void 0&&(T=!1),i.addEventListener(c.toString(),f,T);else if(i.attachEvent)i.attachEvent(Ka(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Yh(){function i(l){return c.call(i.src,i.listener,l)}const c=Zh;return i}function Ga(i,c,l,f,T){if(Array.isArray(c))for(var x=0;x<c.length;x++)Ga(i,c[x],l,f,T);else f=u(f)?!!f.capture:!!f,l=Wa(l),i&&i[kt]?(i=i.i,x=String(c).toString(),x in i.g&&(c=i.g[x],l=Us(c,l,f,T),l>-1&&(yr(c[l]),Array.prototype.splice.call(c,l,1),c.length==0&&(delete i.g[x],i.h--)))):i&&(i=js(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Us(c,l,f,T)),(l=i>-1?c[i]:null)&&Bs(l))}function Bs(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[kt])Ms(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(Ka(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=js(c))?(Ms(l,i),l.h==0&&(l.src=null,c[Vs]=null)):yr(i)}}}function Ka(i){return i in Fs?Fs[i]:Fs[i]="on"+i}function Zh(i,c){if(i.da)i=!0;else{c=new _e(c,this);const l=i.listener,f=i.ha||i.src;i.fa&&Bs(i),i=l.call(f,c)}return i}function js(i){return i=i[Vs],i instanceof wr?i:null}var $s="__closure_events_fn_"+(Math.random()*1e9>>>0);function Wa(i){return typeof i=="function"?i:(i[$s]||(i[$s]=function(c){return i.handleEvent(c)}),i[$s])}function ve(){E.call(this),this.i=new wr(this),this.M=this,this.G=null}m(ve,E),ve.prototype[kt]=!0,ve.prototype.removeEventListener=function(i,c,l,f){Ga(this,i,c,l,f)};function Ie(i,c){var l,f=i.G;if(f)for(l=[];f;f=f.G)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new w(c,i);else if(c instanceof w)c.target=c.target||i;else{var T=c;c=new w(f,i),za(c,T)}T=!0;let x,D;if(l)for(D=l.length-1;D>=0;D--)x=c.g=l[D],T=br(x,f,!0,c)&&T;if(x=c.g=i,T=br(x,f,!0,c)&&T,T=br(x,f,!1,c)&&T,l)for(D=0;D<l.length;D++)x=c.g=l[D],T=br(x,f,!1,c)&&T}ve.prototype.N=function(){if(ve.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const l=i.g[c];for(let f=0;f<l.length;f++)yr(l[f]);delete i.g[c],i.h--}}this.G=null},ve.prototype.J=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},ve.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function br(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let T=!0;for(let x=0;x<c.length;++x){const D=c[x];if(D&&!D.da&&D.capture==l){const j=D.listener,le=D.ha||D.src;D.fa&&Ms(i.i,D),T=j.call(le,f)!==!1&&T}}return T&&!f.defaultPrevented}function ed(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(i,c||0)}function Qa(i){i.g=ed(()=>{i.g=null,i.i&&(i.i=!1,Qa(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class td extends E{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Qa(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sn(i){E.call(this),this.h=i,this.g={}}m(Sn,E);var Xa=[];function Ja(i){vr(i.g,function(c,l){this.g.hasOwnProperty(l)&&Bs(c)},i),i.g={}}Sn.prototype.N=function(){Sn.Z.N.call(this),Ja(this)},Sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qs=o.JSON.stringify,nd=o.JSON.parse,rd=class{stringify(i){return o.JSON.stringify(i,void 0)}parse(i){return o.JSON.parse(i,void 0)}};function Ya(){}function Za(){}var xn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zs(){w.call(this,"d")}m(zs,w);function Hs(){w.call(this,"c")}m(Hs,w);var Dt={},eo=null;function Er(){return eo=eo||new ve}Dt.Ia="serverreachability";function to(i){w.call(this,Dt.Ia,i)}m(to,w);function _n(i){const c=Er();Ie(c,new to(c))}Dt.STAT_EVENT="statevent";function no(i,c){w.call(this,Dt.STAT_EVENT,i),this.stat=c}m(no,w);function Se(i){const c=Er();Ie(c,new no(c,i))}Dt.Ja="timingevent";function ro(i,c){w.call(this,Dt.Ja,i),this.size=c}m(ro,w);function An(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){i()},c)}function Cn(){this.g=!0}Cn.prototype.ua=function(){this.g=!1};function sd(i,c,l,f,T,x){i.info(function(){if(i.g)if(x){var D="",j=x.split("&");for(let Y=0;Y<j.length;Y++){var le=j[Y].split("=");if(le.length>1){const fe=le[0];le=le[1];const Ve=fe.split("_");D=Ve.length>=2&&Ve[1]=="type"?D+(fe+"="+le+"&"):D+(fe+"=redacted&")}}}else D=null;else D=x;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+c+`
`+l+`
`+D})}function id(i,c,l,f,T,x,D){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+c+`
`+l+`
`+x+" "+D})}function Kt(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+od(i,l)+(f?" "+f:"")})}function ad(i,c){i.info(function(){return"TIMEOUT: "+c})}Cn.prototype.info=function(){};function od(i,c){if(!i.g)return c;if(!c)return null;try{const x=JSON.parse(c);if(x){for(i=0;i<x.length;i++)if(Array.isArray(x[i])){var l=x[i];if(!(l.length<2)){var f=l[1];if(Array.isArray(f)&&!(f.length<1)){var T=f[0];if(T!="noop"&&T!="stop"&&T!="close")for(let D=1;D<f.length;D++)f[D]=""}}}}return qs(x)}catch{return c}}var Tr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},so={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},io;function Gs(){}m(Gs,Ya),Gs.prototype.g=function(){return new XMLHttpRequest},io=new Gs;function kn(i){return encodeURIComponent(String(i))}function cd(i){var c=1;i=i.split(":");const l=[];for(;c>0&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function rt(i,c,l,f){this.j=i,this.i=c,this.l=l,this.S=f||1,this.V=new Sn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ao}function ao(){this.i=null,this.g="",this.h=!1}var oo={},Ks={};function Ws(i,c,l){i.M=1,i.A=Sr(Ue(c)),i.u=l,i.R=!0,co(i,null)}function co(i,c){i.F=Date.now(),Ir(i),i.B=Ue(i.A);var l=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),To(l.i,"t",f),i.C=0,l=i.j.L,i.h=new ao,i.g=Bo(i.j,l?c:null,!i.u),i.P>0&&(i.O=new td(d(i.Y,i,i.g),i.P)),c=i.V,l=i.g,f=i.ba;var T="readystatechange";Array.isArray(T)||(T&&(Xa[0]=T.toString()),T=Xa);for(let x=0;x<T.length;x++){const D=Ha(l,T[x],f||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=i.J?$a(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),_n(),sd(i.i,i.v,i.B,i.l,i.S,i.u)}rt.prototype.ba=function(i){i=i.target;const c=this.O;c&&at(i)==3?c.j():this.Y(i)},rt.prototype.Y=function(i){try{if(i==this.g)e:{const j=at(this.g),le=this.g.ya(),Y=this.g.ca();if(!(j<3)&&(j!=3||this.g&&(this.h.h||this.g.la()||ko(this.g)))){this.K||j!=4||le==7||(le==8||Y<=0?_n(3):_n(2)),Qs(this);var c=this.g.ca();this.X=c;var l=ud(this);if(this.o=c==200,id(this.i,this.v,this.B,this.l,this.S,j,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,T=this.g;if((f=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(f)){var x=f;break t}}x=null}if(i=x)Kt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Xs(this,i);else{this.o=!1,this.m=3,Se(12),Nt(this),Dn(this);break e}}if(this.R){i=!0;let fe;for(;!this.K&&this.C<l.length;)if(fe=ld(this,l),fe==Ks){j==4&&(this.m=4,Se(14),i=!1),Kt(this.i,this.l,null,"[Incomplete Response]");break}else if(fe==oo){this.m=4,Se(15),Kt(this.i,this.l,l,"[Invalid Chunk]"),i=!1;break}else Kt(this.i,this.l,fe,null),Xs(this,fe);if(uo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),j!=4||l.length!=0||this.h.h||(this.m=1,Se(16),i=!1),this.o=this.o&&i,!i)Kt(this.i,this.l,l,"[Invalid Chunked Response]"),Nt(this),Dn(this);else if(l.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),si(D),D.P=!0,Se(11))}}else Kt(this.i,this.l,l,null),Xs(this,l);j==4&&Nt(this),this.o&&!this.K&&(j==4?Mo(this.j,this):(this.o=!1,Ir(this)))}else Sd(this.g),c==400&&l.indexOf("Unknown SID")>0?(this.m=3,Se(12)):(this.m=0,Se(13)),Nt(this),Dn(this)}}}catch{}finally{}};function ud(i){if(!uo(i))return i.g.la();const c=ko(i.g);if(c==="")return"";let l="";const f=c.length,T=at(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Nt(i),Dn(i),"";i.h.i=new o.TextDecoder}for(let x=0;x<f;x++)i.h.h=!0,l+=i.h.i.decode(c[x],{stream:!(T&&x==f-1)});return c.length=0,i.h.g+=l,i.C=0,i.h.g}function uo(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function ld(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?Ks:(l=Number(c.substring(l,f)),isNaN(l)?oo:(f+=1,f+l>c.length?Ks:(c=c.slice(f,f+l),i.C=f+l,c)))}rt.prototype.cancel=function(){this.K=!0,Nt(this)};function Ir(i){i.T=Date.now()+i.H,lo(i,i.H)}function lo(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=An(d(i.aa,i),c)}function Qs(i){i.D&&(o.clearTimeout(i.D),i.D=null)}rt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(ad(this.i,this.B),this.M!=2&&(_n(),Se(17)),Nt(this),this.m=2,Dn(this)):lo(this,this.T-i)};function Dn(i){i.j.I==0||i.K||Mo(i.j,i)}function Nt(i){Qs(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Ja(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function Xs(i,c){try{var l=i.j;if(l.I!=0&&(l.g==i||Js(l.h,i))){if(!i.L&&Js(l.h,i)&&l.I==3){try{var f=l.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!l.v){if(l.g)if(l.g.F+3e3<i.F)kr(l),Ar(l);else break e;ri(l),Se(18)}}else l.xa=T[1],0<l.xa-l.K&&T[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=An(d(l.Va,l),6e3));po(l.h)<=1&&l.ta&&(l.ta=void 0)}else Rt(l,11)}else if((i.L||l.g==i)&&kr(l),!y(c))for(T=l.Ba.g.parse(c),c=0;c<T.length;c++){let Y=T[c];const fe=Y[0];if(!(fe<=l.K))if(l.K=fe,Y=Y[1],l.I==2)if(Y[0]=="c"){l.M=Y[1],l.ba=Y[2];const Ve=Y[3];Ve!=null&&(l.ka=Ve,l.j.info("VER="+l.ka));const Xt=Y[4];Xt!=null&&(l.za=Xt,l.j.info("SVER="+l.za));const ot=Y[5];ot!=null&&typeof ot=="number"&&ot>0&&(f=1.5*ot,l.O=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const ct=i.g;if(ct){const Nr=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nr){var x=f.h;x.g||Nr.indexOf("spdy")==-1&&Nr.indexOf("quic")==-1&&Nr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Ys(x,x.h),x.h=null))}if(f.G){const ii=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;ii&&(f.wa=ii,J(f.J,f.G,ii))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-i.F,l.j.info("Handshake RTT: "+l.T+"ms")),f=l;var D=i;if(f.na=Fo(f,f.L?f.ba:null,f.W),D.L){mo(f.h,D);var j=D,le=f.O;le&&(j.H=le),j.D&&(Qs(j),Ir(j)),f.g=D}else Oo(f);l.i.length>0&&Cr(l)}else Y[0]!="stop"&&Y[0]!="close"||Rt(l,7);else l.I==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Rt(l,7):ni(l):Y[0]!="noop"&&l.l&&l.l.qa(Y),l.A=0)}}_n(4)}catch{}}var hd=class{constructor(i,c){this.g=i,this.map=c}};function ho(i){this.l=i||10,o.PerformanceNavigationTiming?(i=o.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function po(i){return i.h?1:i.g?i.g.size:0}function Js(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Ys(i,c){i.g?i.g.add(c):i.h=c}function mo(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}ho.prototype.cancel=function(){if(this.i=go(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function go(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.G);return c}return _(i.i)}var yo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dd(i,c){if(i){i=i.split("&");for(let l=0;l<i.length;l++){const f=i[l].indexOf("=");let T,x=null;f>=0?(T=i[l].substring(0,f),x=i[l].substring(f+1)):T=i[l],c(T,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function st(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof st?(this.l=i.l,Nn(this,i.j),this.o=i.o,this.g=i.g,Ln(this,i.u),this.h=i.h,Zs(this,Io(i.i)),this.m=i.m):i&&(c=String(i).match(yo))?(this.l=!1,Nn(this,c[1]||"",!0),this.o=Rn(c[2]||""),this.g=Rn(c[3]||"",!0),Ln(this,c[4]),this.h=Rn(c[5]||"",!0),Zs(this,c[6]||"",!0),this.m=Rn(c[7]||"")):(this.l=!1,this.i=new Pn(null,this.l))}st.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(On(c,vo,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(On(c,vo,!0),"@"),i.push(kn(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&i.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(On(l,l.charAt(0)=="/"?md:pd,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",On(l,yd)),i.join("")},st.prototype.resolve=function(i){const c=Ue(this);let l=!!i.j;l?Nn(c,i.j):l=!!i.o,l?c.o=i.o:l=!!i.g,l?c.g=i.g:l=i.u!=null;var f=i.h;if(l)Ln(c,i.u);else if(l=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var T=c.h.lastIndexOf("/");T!=-1&&(f=c.h.slice(0,T+1)+f)}if(T=f,T==".."||T==".")f="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){f=T.lastIndexOf("/",0)==0,T=T.split("/");const x=[];for(let D=0;D<T.length;){const j=T[D++];j=="."?f&&D==T.length&&x.push(""):j==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),f&&D==T.length&&x.push("")):(x.push(j),f=!0)}f=x.join("/")}else f=T}return l?c.h=f:l=i.i.toString()!=="",l?Zs(c,Io(i.i)):l=!!i.m,l&&(c.m=i.m),c};function Ue(i){return new st(i)}function Nn(i,c,l){i.j=l?Rn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Ln(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function Zs(i,c,l){c instanceof Pn?(i.i=c,vd(i.i,i.l)):(l||(c=On(c,gd)),i.i=new Pn(c,i.l))}function J(i,c,l){i.i.set(c,l)}function Sr(i){return J(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Rn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function On(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,fd),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function fd(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var vo=/[#\/\?@]/g,pd=/[#\?:]/g,md=/[#\?]/g,gd=/[#\?@]/g,yd=/#/g;function Pn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Lt(i){i.g||(i.g=new Map,i.h=0,i.i&&dd(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}r=Pn.prototype,r.add=function(i,c){Lt(this),this.i=null,i=Wt(this,i);let l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function wo(i,c){Lt(i),c=Wt(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function bo(i,c){return Lt(i),c=Wt(i,c),i.g.has(c)}r.forEach=function(i,c){Lt(this),this.g.forEach(function(l,f){l.forEach(function(T){i.call(c,T,f,this)},this)},this)};function Eo(i,c){Lt(i);let l=[];if(typeof c=="string")bo(i,c)&&(l=l.concat(i.g.get(Wt(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)l=l.concat(i[c]);return l}r.set=function(i,c){return Lt(this),this.i=null,i=Wt(this,i),bo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},r.get=function(i,c){return i?(i=Eo(this,i),i.length>0?String(i[0]):c):c};function To(i,c,l){wo(i,c),l.length>0&&(i.i=null,i.g.set(Wt(i,c),_(l)),i.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var l=c[f];const T=kn(l);l=Eo(this,l);for(let x=0;x<l.length;x++){let D=T;l[x]!==""&&(D+="="+kn(l[x])),i.push(D)}}return this.i=i.join("&")};function Io(i){const c=new Pn;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function Wt(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function vd(i,c){c&&!i.j&&(Lt(i),i.i=null,i.g.forEach(function(l,f){const T=f.toLowerCase();f!=T&&(wo(this,f),To(this,T,l))},i)),i.j=c}function wd(i,c){const l=new Cn;if(o.Image){const f=new Image;f.onload=p(it,l,"TestLoadImage: loaded",!0,c,f),f.onerror=p(it,l,"TestLoadImage: error",!1,c,f),f.onabort=p(it,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(it,l,"TestLoadImage: timeout",!1,c,f),o.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function bd(i,c){const l=new Cn,f=new AbortController,T=setTimeout(()=>{f.abort(),it(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(x=>{clearTimeout(T),x.ok?it(l,"TestPingServer: ok",!0,c):it(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),it(l,"TestPingServer: error",!1,c)})}function it(i,c,l,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(l)}catch{}}function Ed(){this.g=new rd}function ei(i){this.i=i.Sb||null,this.h=i.ab||!1}m(ei,Ya),ei.prototype.g=function(){return new xr(this.i,this.h)};function xr(i,c){ve.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(xr,ve),r=xr.prototype,r.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Un(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=0},r.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;So(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function So(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}r.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Mn(this):Un(this),this.readyState==3&&So(this)}},r.Oa=function(i){this.g&&(this.response=this.responseText=i,Mn(this))},r.Na=function(i){this.g&&(this.response=i,Mn(this))},r.ga=function(){this.g&&Mn(this)};function Mn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Un(i)}r.setRequestHeader=function(i,c){this.A.append(i,c)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function Un(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function xo(i){let c="";return vr(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function ti(i,c,l){e:{for(f in l){var f=!1;break e}f=!0}f||(l=xo(l),typeof i=="string"?l!=null&&kn(l):J(i,c,l))}function re(i){ve.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(re,ve);var Td=/^https?$/i,Id=["POST","PUT"];r=re.prototype,r.Fa=function(i){this.H=i},r.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():io.g(),this.g.onreadystatechange=S(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(x){_o(this,x);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)l.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const x of f.keys())l.set(x,f.get(x));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(x=>x.toLowerCase()=="content-type"),T=o.FormData&&i instanceof o.FormData,!(Array.prototype.indexOf.call(Id,c,void 0)>=0)||f||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,D]of l)this.g.setRequestHeader(x,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(x){_o(this,x)}};function _o(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Ao(i),_r(i)}function Ao(i){i.A||(i.A=!0,Ie(i,"complete"),Ie(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Ie(this,"complete"),Ie(this,"abort"),_r(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_r(this,!0)),re.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Co(this):this.Xa())},r.Xa=function(){Co(this)};function Co(i){if(i.h&&typeof a<"u"){if(i.v&&at(i)==4)setTimeout(i.Ca.bind(i),0);else if(Ie(i,"readystatechange"),at(i)==4){i.h=!1;try{const x=i.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var f;if(f=x===0){let D=String(i.D).match(yo)[1]||null;!D&&o.self&&o.self.location&&(D=o.self.location.protocol.slice(0,-1)),f=!Td.test(D?D.toLowerCase():"")}l=f}if(l)Ie(i,"complete"),Ie(i,"success");else{i.o=6;try{var T=at(i)>2?i.g.statusText:""}catch{T=""}i.l=T+" ["+i.ca()+"]",Ao(i)}}finally{_r(i)}}}}function _r(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const l=i.g;i.g=null,c||Ie(i,"ready");try{l.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function at(i){return i.g?i.g.readyState:0}r.ca=function(){try{return at(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),nd(c)}};function ko(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Sd(i){const c={};i=(i.g&&at(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(y(i[f]))continue;var l=cd(i[f]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const x=c[T]||[];c[T]=x,x.push(l)}Xh(c,function(f){return f.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vn(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function Do(i){this.za=0,this.i=[],this.j=new Cn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Vn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Vn("baseRetryDelayMs",5e3,i),this.Za=Vn("retryDelaySeedMs",1e4,i),this.Ta=Vn("forwardChannelMaxRetries",2,i),this.va=Vn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new ho(i&&i.concurrentRequestLimit),this.Ba=new Ed,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Do.prototype,r.ka=8,r.I=1,r.connect=function(i,c,l,f){Se(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.J=Fo(this,null,this.W),Cr(this)};function ni(i){if(No(i),i.I==3){var c=i.V++,l=Ue(i.J);if(J(l,"SID",i.M),J(l,"RID",c),J(l,"TYPE","terminate"),Fn(i,l),c=new rt(i,i.j,c),c.M=2,c.A=Sr(Ue(l)),l=!1,o.navigator&&o.navigator.sendBeacon)try{l=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!l&&o.Image&&(new Image().src=c.A,l=!0),l||(c.g=Bo(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ir(c)}Vo(i)}function Ar(i){i.g&&(si(i),i.g.cancel(),i.g=null)}function No(i){Ar(i),i.v&&(o.clearTimeout(i.v),i.v=null),kr(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&o.clearTimeout(i.m),i.m=null)}function Cr(i){if(!fo(i.h)&&!i.m){i.m=!0;var c=i.Ea;ue||g(),te||(ue(),te=!0),b.add(c,i),i.D=0}}function xd(i,c){return po(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=An(d(i.Ea,i,c),Uo(i,i.D)),i.D++,!0)}r.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const T=new rt(this,this.j,i);let x=this.o;if(this.U&&(x?(x=$a(x),za(x,this.U)):x=this.U),this.u!==null||this.R||(T.J=x,x=null),this.S)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=Ro(this,T,c),l=Ue(this.J),J(l,"RID",i),J(l,"CVER",22),this.G&&J(l,"X-HTTP-Session-Id",this.G),Fn(this,l),x&&(this.R?c="headers="+kn(xo(x))+"&"+c:this.u&&ti(l,this.u,x)),Ys(this.h,T),this.Ra&&J(l,"TYPE","init"),this.S?(J(l,"$req",c),J(l,"SID","null"),T.U=!0,Ws(T,l,null)):Ws(T,l,c),this.I=2}}else this.I==3&&(i?Lo(this,i):this.i.length==0||fo(this.h)||Lo(this))};function Lo(i,c){var l;c?l=c.l:l=i.V++;const f=Ue(i.J);J(f,"SID",i.M),J(f,"RID",l),J(f,"AID",i.K),Fn(i,f),i.u&&i.o&&ti(f,i.u,i.o),l=new rt(i,i.j,l,i.D+1),i.u===null&&(l.J=i.o),c&&(i.i=c.G.concat(i.i)),c=Ro(i,l,1e3),l.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Ys(i.h,l),Ws(l,f,c)}function Fn(i,c){i.H&&vr(i.H,function(l,f){J(c,f,l)}),i.l&&vr({},function(l,f){J(c,f,l)})}function Ro(i,c,l){l=Math.min(i.i.length,l);const f=i.l?d(i.l.Ka,i.l,i):null;e:{var T=i.i;let j=-1;for(;;){const le=["count="+l];j==-1?l>0?(j=T[0].g,le.push("ofs="+j)):j=0:le.push("ofs="+j);let Y=!0;for(let fe=0;fe<l;fe++){var x=T[fe].g;const Ve=T[fe].map;if(x-=j,x<0)j=Math.max(0,T[fe].g-100),Y=!1;else try{x="req"+x+"_"||"";try{var D=Ve instanceof Map?Ve:Object.entries(Ve);for(const[Xt,ot]of D){let ct=ot;u(ot)&&(ct=qs(ot)),le.push(x+Xt+"="+encodeURIComponent(ct))}}catch(Xt){throw le.push(x+"type="+encodeURIComponent("_badmap")),Xt}}catch{f&&f(Ve)}}if(Y){D=le.join("&");break e}}D=void 0}return i=i.i.splice(0,l),c.G=i,D}function Oo(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;ue||g(),te||(ue(),te=!0),b.add(c,i),i.A=0}}function ri(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=An(d(i.Da,i),Uo(i,i.A)),i.A++,!0)}r.Da=function(){if(this.v=null,Po(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=An(d(this.Wa,this),i)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Se(10),Ar(this),Po(this))};function si(i){i.B!=null&&(o.clearTimeout(i.B),i.B=null)}function Po(i){i.g=new rt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Ue(i.na);J(c,"RID","rpc"),J(c,"SID",i.M),J(c,"AID",i.K),J(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&J(c,"TO",i.ia),J(c,"TYPE","xmlhttp"),Fn(i,c),i.u&&i.o&&ti(c,i.u,i.o),i.O&&(i.g.H=i.O);var l=i.g;i=i.ba,l.M=1,l.A=Sr(Ue(c)),l.u=null,l.R=!0,co(l,i)}r.Va=function(){this.C!=null&&(this.C=null,Ar(this),ri(this),Se(19))};function kr(i){i.C!=null&&(o.clearTimeout(i.C),i.C=null)}function Mo(i,c){var l=null;if(i.g==c){kr(i),si(i),i.g=null;var f=2}else if(Js(i.h,c))l=c.G,mo(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){l=c.u?c.u.length:0,c=Date.now()-c.F;var T=i.D;f=Er(),Ie(f,new ro(f,l)),Cr(i)}else Oo(i);else if(T=c.m,T==3||T==0&&c.X>0||!(f==1&&xd(i,c)||f==2&&ri(i)))switch(l&&l.length>0&&(c=i.h,c.i=c.i.concat(l)),T){case 1:Rt(i,5);break;case 4:Rt(i,10);break;case 3:Rt(i,6);break;default:Rt(i,2)}}}function Uo(i,c){let l=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(l*=2),l*c}function Rt(i,c){if(i.j.info("Error code "+c),c==2){var l=d(i.bb,i),f=i.Ua;const T=!f;f=new st(f||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Nn(f,"https"),Sr(f),T?wd(f.toString(),l):bd(f.toString(),l)}else Se(2);i.I=0,i.l&&i.l.pa(c),Vo(i),No(i)}r.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function Vo(i){if(i.I=0,i.ja=[],i.l){const c=go(i.h);(c.length!=0||i.i.length!=0)&&(k(i.ja,c),k(i.ja,i.i),i.h.i.length=0,_(i.i),i.i.length=0),i.l.oa()}}function Fo(i,c,l){var f=l instanceof st?Ue(l):new st(l);if(f.g!="")c&&(f.g=c+"."+f.g),Ln(f,f.u);else{var T=o.location;f=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;const x=new st(null);f&&Nn(x,f),c&&(x.g=c),T&&Ln(x,T),l&&(x.h=l),f=x}return l=i.G,c=i.wa,l&&c&&J(f,l,c),J(f,"VER",i.ka),Fn(i,f),f}function Bo(i,c,l){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new re(new ei({ab:l})):new re(i.ma),c.Fa(i.L),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function jo(){}r=jo.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Dr(){}Dr.prototype.g=function(i,c){return new De(i,c)};function De(i,c){ve.call(this),this.g=new Do(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!y(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Qt(this)}m(De,ve),De.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){ni(this.g)},De.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.v&&(l={},l.__data__=qs(i),i=l);c.i.push(new hd(c.Ya++,i)),c.I==3&&Cr(c)},De.prototype.N=function(){this.g.l=null,delete this.j,ni(this.g),delete this.g,De.Z.N.call(this)};function $o(i){zs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const l in c){i=l;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}m($o,zs);function qo(){Hs.call(this),this.status=1}m(qo,Hs);function Qt(i){this.g=i}m(Qt,jo),Qt.prototype.ra=function(){Ie(this.g,"a")},Qt.prototype.qa=function(i){Ie(this.g,new $o(i))},Qt.prototype.pa=function(i){Ie(this.g,new qo)},Qt.prototype.oa=function(){Ie(this.g,"b")},Dr.prototype.createWebChannel=Dr.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,Fu=function(){return new Dr},Vu=function(){return Er()},Uu=Dt,ki={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Tr.NO_ERROR=0,Tr.TIMEOUT=8,Tr.HTTP_ERROR=6,Fr=Tr,so.COMPLETE="complete",Mu=so,Za.EventType=xn,xn.OPEN="a",xn.CLOSE="b",xn.ERROR="c",xn.MESSAGE="d",ve.prototype.listen=ve.prototype.J,jn=Za,re.prototype.listenOnce=re.prototype.K,re.prototype.getLastError=re.prototype.Ha,re.prototype.getLastErrorCode=re.prototype.ya,re.prototype.getStatus=re.prototype.ca,re.prototype.getResponseJson=re.prototype.La,re.prototype.getResponseText=re.prototype.la,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Fa,Pu=re}).apply(typeof Rr<"u"?Rr:typeof self<"u"?self:typeof window<"u"?window:{});const rc="@firebase/firestore",sc="4.9.2";/**
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
*/let vn="12.3.0";/**
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
*/const Bt=new Xi("@firebase/firestore");function Jt(){return Bt.logLevel}function O(r,...e){if(Bt.logLevel<=$.DEBUG){const t=e.map(Zi);Bt.debug(`Firestore (${vn}): ${r}`,...t)}}function Ye(r,...e){if(Bt.logLevel<=$.ERROR){const t=e.map(Zi);Bt.error(`Firestore (${vn}): ${r}`,...t)}}function un(r,...e){if(Bt.logLevel<=$.WARN){const t=e.map(Zi);Bt.warn(`Firestore (${vn}): ${r}`,...t)}}function Zi(r){if(typeof r=="string")return r;try{/**
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
*/function M(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Bu(r,n,t)}function Bu(r,e,t){let n=`FIRESTORE (${vn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Ye(n),new Error(n)}function W(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Bu(e,s,n)}function F(r,e){return r}/**
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
*/const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends nt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
*/class Xe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
*/class ju{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(be.UNAUTHENTICATED))}shutdown(){}}class Ep{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Tp{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0,42304);let n=this.i;const s=h=>this.i!==n?(n=this.i,t(h)):Promise.resolve();let a=new Xe;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Xe,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const h=a;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Xe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(W(typeof n.accessToken=="string",31837,{l:n}),new ju(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{h:e}),new be(e)}}class Ip{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=be.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Sp{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Ip(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ic{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xp{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Be(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){W(this.o===void 0,3512);const n=a=>{a.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const o=a.token!==this.m;return this.m=a.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>n(a))};const s=a=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ic(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ic(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
*/function _p(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
*/class ea{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=_p(40);for(let a=0;a<s.length;++a)n.length<20&&s[a]<t&&(n+=e.charAt(s[a]%62))}return n}}function q(r,e){return r<e?-1:r>e?1:0}function Di(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),a=e.charAt(n);if(s!==a)return hi(s)===hi(a)?q(s,a):hi(s)?1:-1}return q(r.length,e.length)}const Ap=55296,Cp=57343;function hi(r){const e=r.charCodeAt(0);return e>=Ap&&e<=Cp}function ln(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}/**
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
*/const ac="__name__";class Fe{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&M(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Fe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fe?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const a=Fe.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return q(e.length,t.length)}static compareSegments(e,t){const n=Fe.isNumericId(e),s=Fe.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Fe.extractNumericId(e).compare(Fe.extractNumericId(t)):Di(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wt.fromString(e.substring(4,e.length-2))}}class X extends Fe{construct(e,t,n){return new X(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new N(A.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new X(t)}static emptyPath(){return new X([])}}const kp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends Fe{construct(e,t,n){return new ge(e,t,n)}static isValidIdentifier(e){return kp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ac}static keyField(){return new ge([ac])}static fromServerFormat(e){const t=[];let n="",s=0;const a=()=>{if(n.length===0)throw new N(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new N(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=h,s+=2}else u==="`"?(o=!o,s++):u!=="."||o?(n+=u,s++):(a(),s++)}if(a(),o)throw new N(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
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
*/class P{constructor(e){this.path=e}static fromPath(e){return new P(X.fromString(e))}static fromName(e){return new P(X.fromString(e).popFirst(5))}static empty(){return new P(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new X(e.slice()))}}/**
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
*/function $u(r,e,t){if(!t)throw new N(A.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Dp(r,e,t,n){if(e===!0&&n===!0)throw new N(A.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function oc(r){if(!P.isDocumentKey(r))throw new N(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function cc(r){if(P.isDocumentKey(r))throw new N(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function qu(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function ms(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function Pe(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new N(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ms(r);throw new N(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
*/function ce(r,e){const t={typeString:r};return e&&(t.value=e),t}function cr(r,e){if(!qu(r))throw new N(A.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,a="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(a!==void 0&&o!==a.value){t=`Expected '${n}' field to equal '${a.value}'`;break}}if(t)throw new N(A.INVALID_ARGUMENT,t);return!0}/**
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
*/const uc=-62135596800,lc=1e6;class Z{static now(){return Z.fromMillis(Date.now())}static fromDate(e){return Z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*lc);return new Z(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<uc)throw new N(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lc}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Z._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cr(e,Z._jsonSchema))return new Z(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-uc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Z._jsonSchemaVersion="firestore/timestamp/1.0",Z._jsonSchema={type:ce("string",Z._jsonSchemaVersion),seconds:ce("number"),nanoseconds:ce("number")};/**
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
*/const Yn=-1;function Np(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=V.fromTimestamp(n===1e9?new Z(t+1,0):new Z(t,n));return new Et(s,P.empty(),e)}function Lp(r){return new Et(r.readTime,r.key,Yn)}class Et{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Et(V.min(),P.empty(),Yn)}static max(){return new Et(V.max(),P.empty(),Yn)}}function Rp(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=P.comparator(r.documentKey,e.documentKey),t!==0?t:q(r.largestBatchId,e.largestBatchId))}/**
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
*/const Op="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
*/async function wn(r){if(r.code!==A.FAILED_PRECONDITION||r.message!==Op)throw r;O("LocalStore","Unexpectedly lost primary lease")}/**
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
*/class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((n,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(n,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,n)=>{t(e)})}static reject(e){return new C((t,n)=>{n(e)})}static waitFor(e){return new C((t,n)=>{let s=0,a=0,o=!1;e.forEach(u=>{++s,u.next(()=>{++a,o&&a===s&&t()},h=>n(h))}),o=!0,a===s&&t()})}static or(e){let t=C.resolve(!1);for(const n of e)t=t.next(s=>s?C.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,a)=>{n.push(t.call(this,s,a))}),this.waitFor(n)}static mapArray(e,t){return new C((n,s)=>{const a=e.length,o=new Array(a);let u=0;for(let h=0;h<a;h++){const d=h;t(e[d]).next(p=>{o[d]=p,++u,u===a&&n(o)},p=>s(p))}})}static doWhile(e,t){return new C((n,s)=>{const a=()=>{e()===!0?t().next(()=>{a()},s):n()};a()})}}function Mp(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bn(r){return r.name==="IndexedDbTransactionError"}/**
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
*/class gs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}gs.ce=-1;/**
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
*/const ta=-1;function ys(r){return r==null}function Jr(r){return r===0&&1/r==-1/0}function Up(r){return typeof r=="number"&&Number.isInteger(r)&&!Jr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
*/const zu="";function Vp(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=hc(e)),e=Fp(r.get(t),e);return hc(e)}function Fp(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const a=r.charAt(s);switch(a){case"\0":t+="";break;case zu:t+="";break;default:t+=a}}return t}function hc(r){return r+zu+""}/**
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
*/function dc(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function At(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Hu(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
*/class ne{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Or(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Or(this.root,e,this.comparator,!1)}getReverseIterator(){return new Or(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Or(this.root,e,this.comparator,!0)}}class Or{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?n(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,n,s,a){this.key=e,this.value=t,this.color=n??me.RED,this.left=s??me.EMPTY,this.right=a??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,a){return new me(e??this.key,t??this.value,n??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const a=n(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,n),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return me.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(r,e,t,n,s){return this}insert(r,e,t){return new me(r,e)}remove(r,e){return this}isEmpty(){return!0}inorderTraversal(r){return!1}reverseTraversal(r){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
*/class de{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fc(this.data.getIterator())}getIteratorFrom(e){return new fc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=n.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class fc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
*/class Ne{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new Ne([])}unionWith(e){let t=new de(ge.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ne(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ln(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
*/class Gu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
*/class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(n){try{return atob(n)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Gu("Invalid base64 string: "+s):s}}(e);return new ye(t)}static fromUint8Array(e){const t=function(n){let s="";for(let a=0;a<n.length;++a)s+=String.fromCharCode(n[a]);return s}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const Bp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tt(r){if(W(!!r,39018),typeof r=="string"){let e=0;const t=Bp.exec(r);if(W(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:se(r.seconds),nanos:se(r.nanos)}}function se(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function It(r){return typeof r=="string"?ye.fromBase64String(r):ye.fromUint8Array(r)}/**
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
*/const Ku="server_timestamp",Wu="__type__",Qu="__previous_value__",Xu="__local_write_time__";function na(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Wu])==null?void 0:t.stringValue)===Ku}function vs(r){const e=r.mapValue.fields[Qu];return na(e)?vs(e):e}function Zn(r){const e=Tt(r.mapValue.fields[Xu].timestampValue);return new Z(e.seconds,e.nanos)}/**
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
*/class jp{constructor(e,t,n,s,a,o,u,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=a,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const Yr="(default)";class er{constructor(e,t){this.projectId=e,this.database=t||Yr}static empty(){return new er("","")}get isDefaultDatabase(){return this.database===Yr}isEqual(e){return e instanceof er&&e.projectId===this.projectId&&e.database===this.database}}/**
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
*/const Ju="__type__",$p="__max__",Pr={mapValue:{}},Yu="__vector__",Zr="value";function St(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?na(r)?4:zp(r)?9007199254740991:qp(r)?10:11:M(28295,{value:r})}function Ke(r,e){if(r===e)return!0;const t=St(r);if(t!==St(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Zn(r).isEqual(Zn(e));case 3:return function(n,s){if(typeof n.timestampValue=="string"&&typeof s.timestampValue=="string"&&n.timestampValue.length===s.timestampValue.length)return n.timestampValue===s.timestampValue;const a=Tt(n.timestampValue),o=Tt(s.timestampValue);return a.seconds===o.seconds&&a.nanos===o.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(n,s){return It(n.bytesValue).isEqual(It(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(n,s){return se(n.geoPointValue.latitude)===se(s.geoPointValue.latitude)&&se(n.geoPointValue.longitude)===se(s.geoPointValue.longitude)}(r,e);case 2:return function(n,s){if("integerValue"in n&&"integerValue"in s)return se(n.integerValue)===se(s.integerValue);if("doubleValue"in n&&"doubleValue"in s){const a=se(n.doubleValue),o=se(s.doubleValue);return a===o?Jr(a)===Jr(o):isNaN(a)&&isNaN(o)}return!1}(r,e);case 9:return ln(r.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:case 11:return function(n,s){const a=n.mapValue.fields||{},o=s.mapValue.fields||{};if(dc(a)!==dc(o))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(o[u]===void 0||!Ke(a[u],o[u])))return!1;return!0}(r,e);default:return M(52216,{left:r})}}function tr(r,e){return(r.values||[]).find(t=>Ke(t,e))!==void 0}function hn(r,e){if(r===e)return 0;const t=St(r),n=St(e);if(t!==n)return q(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,e.booleanValue);case 2:return function(s,a){const o=se(s.integerValue||s.doubleValue),u=se(a.integerValue||a.doubleValue);return o<u?-1:o>u?1:o===u?0:isNaN(o)?isNaN(u)?0:-1:1}(r,e);case 3:return pc(r.timestampValue,e.timestampValue);case 4:return pc(Zn(r),Zn(e));case 5:return Di(r.stringValue,e.stringValue);case 6:return function(s,a){const o=It(s),u=It(a);return o.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(s,a){const o=s.split("/"),u=a.split("/");for(let h=0;h<o.length&&h<u.length;h++){const d=q(o[h],u[h]);if(d!==0)return d}return q(o.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,a){const o=q(se(s.latitude),se(a.latitude));return o!==0?o:q(se(s.longitude),se(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return mc(r.arrayValue,e.arrayValue);case 10:return function(s,a){var o,u,h,d;const p=s.fields||{},m=a.fields||{},S=(o=p[Zr])==null?void 0:o.arrayValue,_=(u=m[Zr])==null?void 0:u.arrayValue,k=q(((h=S==null?void 0:S.values)==null?void 0:h.length)||0,((d=_==null?void 0:_.values)==null?void 0:d.length)||0);return k!==0?k:mc(S,_)}(r.mapValue,e.mapValue);case 11:return function(s,a){if(s===Pr.mapValue&&a===Pr.mapValue)return 0;if(s===Pr.mapValue)return 1;if(a===Pr.mapValue)return-1;const o=s.fields||{},u=Object.keys(o),h=a.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=Di(u[p],d[p]);if(m!==0)return m;const S=hn(o[u[p]],h[d[p]]);if(S!==0)return S}return q(u.length,d.length)}(r.mapValue,e.mapValue);default:throw M(23264,{he:t})}}function pc(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return q(r,e);const t=Tt(r),n=Tt(e),s=q(t.seconds,n.seconds);return s!==0?s:q(t.nanos,n.nanos)}function mc(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const a=hn(t[s],n[s]);if(a)return a}return q(t.length,n.length)}function dn(r){return Ni(r)}function Ni(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const t=Tt(e);return`time(${t.seconds},${t.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return It(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return P.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let t="[",n=!0;for(const s of e.values||[])n?n=!1:t+=",",t+=Ni(s);return t+"]"}(r.arrayValue):"mapValue"in r?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",s=!0;for(const a of t)s?s=!1:n+=",",n+=`${a}:${Ni(e.fields[a])}`;return n+"}"}(r.mapValue):M(61005,{value:r})}function Br(r){switch(St(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vs(r);return e?16+Br(e):16;case 5:return 2*r.stringValue.length;case 6:return It(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce((n,s)=>n+Br(s),0)}(r.arrayValue);case 10:case 11:return function(t){let n=0;return At(t.fields,(s,a)=>{n+=s.length+Br(a)}),n}(r.mapValue);default:throw M(13486,{value:r})}}function gc(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Li(r){return!!r&&"integerValue"in r}function ra(r){return!!r&&"arrayValue"in r}function yc(r){return!!r&&"nullValue"in r}function vc(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function jr(r){return!!r&&"mapValue"in r}function qp(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Ju])==null?void 0:t.stringValue)===Yu}function Gn(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return At(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Gn(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gn(r.arrayValue.values[t]);return e}return{...r}}function zp(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===$p}/**
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
*/class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!jr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gn(t)}setAll(e){let t=ge.emptyPath(),n={},s=[];e.forEach((o,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,n,s),n={},s=[],t=u.popLast()}o?n[u.lastSegment()]=Gn(o):s.push(u.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,n,s)}delete(e){const t=this.field(e.popLast());jr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];jr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){At(t,(s,a)=>e[s]=a);for(const s of n)delete e[s]}clone(){return new ke(Gn(this.value))}}function Zu(r){const e=[];return At(r.fields,(t,n)=>{const s=new ge([t]);if(jr(n)){const a=Zu(n.mapValue).fields;if(a.length===0)e.push(s);else for(const o of a)e.push(s.child(o))}else e.push(s)}),new Ne(e)}/**
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
*/class Ee{constructor(e,t,n,s,a,o,u){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=a,this.data=o,this.documentState=u}static newInvalidDocument(e){return new Ee(e,0,V.min(),V.min(),V.min(),ke.empty(),0)}static newFoundDocument(e,t,n,s){return new Ee(e,1,t,V.min(),n,s,0)}static newNoDocument(e,t){return new Ee(e,2,t,V.min(),V.min(),ke.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,V.min(),V.min(),ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
*/class es{constructor(e,t){this.position=e,this.inclusive=t}}function wc(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const a=e[s],o=r.position[s];if(a.field.isKeyField()?n=P.comparator(P.fromName(o.referenceValue),t.key):n=hn(o,t.data.field(a.field)),a.dir==="desc"&&(n*=-1),n!==0)break}return n}function bc(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Ke(r.position[t],e.position[t]))return!1;return!0}/**
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
*/class nr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hp(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
*/class el{}class oe extends el{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Kp(e,t,n):t==="array-contains"?new Xp(e,n):t==="in"?new Jp(e,n):t==="not-in"?new Yp(e,n):t==="array-contains-any"?new Zp(e,n):new oe(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Wp(e,n):new Qp(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(hn(t,this.value)):t!==null&&St(this.value)===St(t)&&this.matchesComparison(hn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Me extends el{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Me(e,t)}matches(e){return tl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function tl(r){return r.op==="and"}function nl(r){return Gp(r)&&tl(r)}function Gp(r){for(const e of r.filters)if(e instanceof Me)return!1;return!0}function Ri(r){if(r instanceof oe)return r.field.canonicalString()+r.op.toString()+dn(r.value);if(nl(r))return r.filters.map(e=>Ri(e)).join(",");{const e=r.filters.map(t=>Ri(t)).join(",");return`${r.op}(${e})`}}function rl(r,e){return r instanceof oe?function(t,n){return n instanceof oe&&t.op===n.op&&t.field.isEqual(n.field)&&Ke(t.value,n.value)}(r,e):r instanceof Me?function(t,n){return n instanceof Me&&t.op===n.op&&t.filters.length===n.filters.length?t.filters.reduce((s,a,o)=>s&&rl(a,n.filters[o]),!0):!1}(r,e):void M(19439)}function sl(r){return r instanceof oe?function(e){return`${e.field.canonicalString()} ${e.op} ${dn(e.value)}`}(r):r instanceof Me?function(e){return e.op.toString()+" {"+e.getFilters().map(sl).join(" ,")+"}"}(r):"Filter"}class Kp extends oe{constructor(e,t,n){super(e,t,n),this.key=P.fromName(n.referenceValue)}matches(e){const t=P.comparator(e.key,this.key);return this.matchesComparison(t)}}class Wp extends oe{constructor(e,t){super(e,"in",t),this.keys=il("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Qp extends oe{constructor(e,t){super(e,"not-in",t),this.keys=il("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function il(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>P.fromName(n.referenceValue))}class Xp extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ra(t)&&tr(t.arrayValue,this.value)}}class Jp extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&tr(this.value.arrayValue,t)}}class Yp extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!tr(this.value.arrayValue,t)}}class Zp extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ra(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>tr(this.value.arrayValue,n))}}/**
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
*/class em{constructor(e,t=null,n=[],s=[],a=null,o=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=a,this.startAt=o,this.endAt=u,this.Te=null}}function Ec(r,e=null,t=[],n=[],s=null,a=null,o=null){return new em(r,e,t,n,s,a,o)}function sa(r){const e=F(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Ri(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),ys(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>dn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>dn(n)).join(",")),e.Te=t}return e.Te}function ia(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Hp(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!rl(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!bc(r.startAt,e.startAt)&&bc(r.endAt,e.endAt)}function Oi(r){return P.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
*/class En{constructor(e,t=null,n=[],s=[],a=null,o="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=a,this.limitType=o,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function tm(r,e,t,n,s,a,o,u){return new En(r,e,t,n,s,a,o,u)}function aa(r){return new En(r)}function Tc(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function al(r){return r.collectionGroup!==null}function Kn(r){const e=F(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new de(ge.comparator);return s.filters.forEach(o=>{o.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new nr(s,n))}),t.has(ge.keyField().canonicalString())||e.Ie.push(new nr(ge.keyField(),n))}return e.Ie}function je(r){const e=F(r);return e.Ee||(e.Ee=nm(e,Kn(r))),e.Ee}function nm(r,e){if(r.limitType==="F")return Ec(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new nr(s.field,a)});const t=r.endAt?new es(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new es(r.startAt.position,r.startAt.inclusive):null;return Ec(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Pi(r,e){const t=r.filters.concat([e]);return new En(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Mi(r,e,t){return new En(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ws(r,e){return ia(je(r),je(e))&&r.limitType===e.limitType}function ol(r){return`${sa(je(r))}|lt:${r.limitType}`}function Yt(r){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>sl(n)).join(", ")}]`),ys(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>dn(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>dn(n)).join(",")),`Target(${t})`}(je(r))}; limitType=${r.limitType})`}function bs(r,e){return e.isFoundDocument()&&function(t,n){const s=n.key.path;return t.collectionGroup!==null?n.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):P.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(r,e)&&function(t,n){for(const s of Kn(t))if(!s.field.isKeyField()&&n.data.field(s.field)===null)return!1;return!0}(r,e)&&function(t,n){for(const s of t.filters)if(!s.matches(n))return!1;return!0}(r,e)&&function(t,n){return!(t.startAt&&!function(s,a,o){const u=wc(s,a,o);return s.inclusive?u<=0:u<0}(t.startAt,Kn(t),n)||t.endAt&&!function(s,a,o){const u=wc(s,a,o);return s.inclusive?u>=0:u>0}(t.endAt,Kn(t),n))}(r,e)}function rm(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function cl(r){return(e,t)=>{let n=!1;for(const s of Kn(r)){const a=sm(s,e,t);if(a!==0)return a;n=n||s.field.isKeyField()}return 0}}function sm(r,e,t){const n=r.field.isKeyField()?P.comparator(e.key,t.key):function(s,a,o){const u=a.data.field(s),h=o.data.field(s);return u!==null&&h!==null?hn(u,h):M(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
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
*/class qt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,a]of n)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){At(this.inner,(t,n)=>{for(const[s,a]of n)e(s,a)})}isEmpty(){return Hu(this.inner)}size(){return this.innerSize}}/**
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
*/const im=new ne(P.comparator);function Ze(){return im}const ul=new ne(P.comparator);function $n(...r){let e=ul;for(const t of r)e=e.insert(t.key,t);return e}function ll(r){let e=ul;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Pt(){return Wn()}function hl(){return Wn()}function Wn(){return new qt(r=>r.toString(),(r,e)=>r.isEqual(e))}const am=new ne(P.comparator),om=new de(P.comparator);function z(...r){let e=om;for(const t of r)e=e.add(t);return e}const cm=new de(q);function um(){return cm}/**
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
*/function oa(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jr(e)?"-0":e}}function dl(r){return{integerValue:""+r}}function lm(r,e){return Up(e)?dl(e):oa(r,e)}/**
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
*/class Es{constructor(){this._=void 0}}function hm(r,e,t){return r instanceof ts?function(n,s){const a={fields:{[Wu]:{stringValue:Ku},[Xu]:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return s&&na(s)&&(s=vs(s)),s&&(a.fields[Qu]=s),{mapValue:a}}(t,e):r instanceof rr?pl(r,e):r instanceof sr?ml(r,e):function(n,s){const a=fl(n,s),o=Ic(a)+Ic(n.Ae);return Li(a)&&Li(n.Ae)?dl(o):oa(n.serializer,o)}(r,e)}function dm(r,e,t){return r instanceof rr?pl(r,e):r instanceof sr?ml(r,e):t}function fl(r,e){return r instanceof ns?function(t){return Li(t)||function(n){return!!n&&"doubleValue"in n}(t)}(e)?e:{integerValue:0}:null}class ts extends Es{}class rr extends Es{constructor(e){super(),this.elements=e}}function pl(r,e){const t=gl(e);for(const n of r.elements)t.some(s=>Ke(s,n))||t.push(n);return{arrayValue:{values:t}}}class sr extends Es{constructor(e){super(),this.elements=e}}function ml(r,e){let t=gl(e);for(const n of r.elements)t=t.filter(s=>!Ke(s,n));return{arrayValue:{values:t}}}class ns extends Es{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ic(r){return se(r.integerValue||r.doubleValue)}function gl(r){return ra(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function fm(r,e){return r.field.isEqual(e.field)&&function(t,n){return t instanceof rr&&n instanceof rr||t instanceof sr&&n instanceof sr?ln(t.elements,n.elements,Ke):t instanceof ns&&n instanceof ns?Ke(t.Ae,n.Ae):t instanceof ts&&n instanceof ts}(r.transform,e.transform)}class pm{constructor(e,t){this.version=e,this.transformResults=t}}class Re{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Re}static exists(e){return new Re(void 0,e)}static updateTime(e){return new Re(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $r(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ts{}function yl(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new ca(r.key,Re.none()):new ur(r.key,r.data,Re.none());{const t=r.data,n=ke.empty();let s=new de(ge.comparator);for(let a of e.fields)if(!s.has(a)){let o=t.field(a);o===null&&a.length>1&&(a=a.popLast(),o=t.field(a)),o===null?n.delete(a):n.set(a,o),s=s.add(a)}return new Ct(r.key,n,new Ne(s.toArray()),Re.none())}}function mm(r,e,t){r instanceof ur?function(n,s,a){const o=n.value.clone(),u=xc(n.fieldTransforms,s,a.transformResults);o.setAll(u),s.convertToFoundDocument(a.version,o).setHasCommittedMutations()}(r,e,t):r instanceof Ct?function(n,s,a){if(!$r(n.precondition,s))return void s.convertToUnknownDocument(a.version);const o=xc(n.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(vl(n)),u.setAll(o),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):function(n,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Qn(r,e,t,n){return r instanceof ur?function(s,a,o,u){if(!$r(s.precondition,a))return o;const h=s.value.clone(),d=_c(s.fieldTransforms,u,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof Ct?function(s,a,o,u){if(!$r(s.precondition,a))return o;const h=_c(s.fieldTransforms,u,a),d=a.data;return d.setAll(vl(s)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(s,a,o){return $r(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):o}(r,e,t)}function gm(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),a=fl(n.transform,s||null);a!=null&&(t===null&&(t=ke.empty()),t.set(n.field,a))}return t||null}function Sc(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(t,n){return t===void 0&&n===void 0||!(!t||!n)&&ln(t,n,(s,a)=>fm(s,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ur extends Ts{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ct extends Ts{constructor(e,t,n,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function vl(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function xc(r,e,t){const n=new Map;W(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let s=0;s<t.length;s++){const a=r[s],o=a.transform,u=e.data.field(a.field);n.set(a.field,dm(o,u,t[s]))}return n}function _c(r,e,t){const n=new Map;for(const s of r){const a=s.transform,o=t.data.field(s.field);n.set(s.field,hm(a,o,e))}return n}class ca extends Ts{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ym extends Ts{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
*/class vm{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&mm(a,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Qn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Qn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=hl();return this.mutations.forEach(s=>{const a=e.get(s.key),o=a.overlayedDocument;let u=this.applyToLocalView(o,a.mutatedFields);u=t.has(s.key)?null:u;const h=yl(o,u);h!==null&&n.set(s.key,h),o.isValidDocument()||o.convertToNoDocument(V.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&ln(this.mutations,e.mutations,(t,n)=>Sc(t,n))&&ln(this.baseMutations,e.baseMutations,(t,n)=>Sc(t,n))}}class ua{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){W(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=function(){return am}();const a=e.mutations;for(let o=0;o<a.length;o++)s=s.insert(a[o].key,n[o].version);return new ua(e,t,n,s)}}/**
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
*/class wm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
*/class bm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
*/var ae,G;function Em(r){switch(r){case A.OK:return M(64938);case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function wl(r){if(r===void 0)return Ye("GRPC error has no .code"),A.UNKNOWN;switch(r){case ae.OK:return A.OK;case ae.CANCELLED:return A.CANCELLED;case ae.UNKNOWN:return A.UNKNOWN;case ae.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case ae.INTERNAL:return A.INTERNAL;case ae.UNAVAILABLE:return A.UNAVAILABLE;case ae.UNAUTHENTICATED:return A.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case ae.NOT_FOUND:return A.NOT_FOUND;case ae.ALREADY_EXISTS:return A.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return A.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case ae.ABORTED:return A.ABORTED;case ae.OUT_OF_RANGE:return A.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return A.UNIMPLEMENTED;case ae.DATA_LOSS:return A.DATA_LOSS;default:return M(39323,{code:r})}}(G=ae||(ae={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
*/function Tm(){return new TextEncoder}/**
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
*/const Im=new wt([4294967295,4294967295],0);function Ac(r){const e=Tm().encode(r),t=new Ou;return t.update(e),new Uint8Array(t.digest())}function Cc(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new wt([t,n],0),new wt([s,a],0)]}class la{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new qn(`Invalid padding: ${t}`);if(n<0)throw new qn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new qn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new qn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=wt.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(wt.fromNumber(n)));return s.compare(Im)===1&&(s=new wt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ac(e),[n,s]=Cc(t);for(let a=0;a<this.hashCount;a++){const o=this.ye(n,s,a);if(!this.we(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),o=new la(a,s,t);return n.forEach(u=>o.insert(u)),o}insert(e){if(this.ge===0)return;const t=Ac(e),[n,s]=Cc(t);for(let a=0;a<this.hashCount;a++){const o=this.ye(n,s,a);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class qn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
*/class Is{constructor(e,t,n,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,lr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Is(V.min(),s,new ne(q),Ze(),z())}}class lr{constructor(e,t,n,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new lr(n,t,z(),z(),z())}}/**
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
*/class qr{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class bl{constructor(e,t){this.targetId=e,this.Ce=t}}class El{constructor(e,t,n=ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class kc{constructor(){this.ve=0,this.Fe=Dc(),this.Me=ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=z(),t=z(),n=z();return this.Fe.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:M(38017,{changeType:a})}}),new lr(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Dc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,W(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Sm{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ze(),this.Je=Mr(),this.He=Mr(),this.Ye=new ne(q)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:M(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const a=s.target;if(Oi(a))if(n===0){const o=new P(a.path);this.et(t,o,Ee.newNoDocument(o,V.min()))}else W(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const u=this.ut(e),h=u?this.ct(u,e,o):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:a=0}=t;let o,u;try{o=It(n).toUint8Array()}catch(h){if(h instanceof Gu)return un("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new la(o,s,a)}catch(h){return un(h instanceof qn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.ge===0?null:u}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach(a=>{const o=this.Ge.ht(),u=`projects/${o.projectId}/databases/${o.database}/documents/${a.path.canonicalString()}`;e.mightContain(u)||(this.et(t,a,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((a,o)=>{const u=this.ot(o);if(u){if(a.current&&Oi(u.target)){const h=new P(u.target.path);this.It(h).has(o)||this.Et(o,h)||this.et(o,h,Ee.newNoDocument(h,e))}a.Be&&(t.set(o,a.ke()),a.qe())}});let n=z();this.He.forEach((a,o)=>{let u=!0;o.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(a))}),this.je.forEach((a,o)=>o.setReadTime(e));const s=new Is(e,t,this.Ye,this.je,n);return this.je=Ze(),this.Je=Mr(),this.He=Mr(),this.Ye=new ne(q),s}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new kc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new de(q),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new de(q),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new kc),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Mr(){return new ne(P.comparator)}function Dc(){return new ne(P.comparator)}const xm={asc:"ASCENDING",desc:"DESCENDING"},_m={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Am={and:"AND",or:"OR"};class Cm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ui(r,e){return r.useProto3Json||ys(e)?e:{value:e}}function rs(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tl(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function km(r,e){return rs(r,e.toTimestamp())}function $e(r){return W(!!r,49232),V.fromTimestamp(function(e){const t=Tt(e);return new Z(t.seconds,t.nanos)}(r))}function ha(r,e){return Vi(r,e).canonicalString()}function Vi(r,e){const t=function(n){return new X(["projects",n.projectId,"databases",n.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Il(r){const e=X.fromString(r);return W(Cl(e),10190,{key:e.toString()}),e}function Fi(r,e){return ha(r.databaseId,e.path)}function di(r,e){const t=Il(e);if(t.get(1)!==r.databaseId.projectId)throw new N(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new N(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new P(xl(t))}function Sl(r,e){return ha(r.databaseId,e)}function Dm(r){const e=Il(r);return e.length===4?X.emptyPath():xl(e)}function Bi(r){return new X(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function xl(r){return W(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Nc(r,e,t){return{name:Fi(r,e),fields:t.value.mapValue.fields}}function Nm(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:M(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(h,d){return h.useProto3Json?(W(d===void 0||typeof d=="string",58123),ye.fromBase64String(d||"")):(W(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ye.fromUint8Array(d||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,u=o&&function(h){const d=h.code===void 0?A.UNKNOWN:wl(h.code);return new N(d,h.message||"")}(o);t=new El(n,s,a,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=di(r,n.document.name),a=$e(n.document.updateTime),o=n.document.createTime?$e(n.document.createTime):V.min(),u=new ke({mapValue:{fields:n.document.fields}}),h=Ee.newFoundDocument(s,a,o,u),d=n.targetIds||[],p=n.removedTargetIds||[];t=new qr(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=di(r,n.document),a=n.readTime?$e(n.readTime):V.min(),o=Ee.newNoDocument(s,a),u=n.removedTargetIds||[];t=new qr([],u,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=di(r,n.document),a=n.removedTargetIds||[];t=new qr([],a,s,null)}else{if(!("filter"in e))return M(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:a}=n,o=new bm(s,a),u=n.targetId;t=new bl(u,o)}}return t}function Lm(r,e){let t;if(e instanceof ur)t={update:Nc(r,e.key,e.value)};else if(e instanceof ca)t={delete:Fi(r,e.key)};else if(e instanceof Ct)t={update:Nc(r,e.key,e.data),updateMask:jm(e.fieldMask)};else{if(!(e instanceof ym))return M(16599,{Vt:e.type});t={verify:Fi(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,a){const o=a.transform;if(o instanceof ts)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof rr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof sr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ns)return{fieldPath:a.field.canonicalString(),increment:o.Ae};throw M(20930,{transform:a.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(n,s){return s.updateTime!==void 0?{updateTime:km(n,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M(27497)}(r,e.precondition)),t}function Rm(r,e){return r&&r.length>0?(W(e!==void 0,14353),r.map(t=>function(n,s){let a=n.updateTime?$e(n.updateTime):$e(s);return a.isEqual(V.min())&&(a=$e(s)),new pm(a,n.transformResults||[])}(t,e))):[]}function Om(r,e){return{documents:[Sl(r,e.path)]}}function Pm(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Sl(r,s);const a=function(h){if(h.length!==0)return Al(Me.create(h,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const o=function(h){if(h.length!==0)return h.map(d=>function(p){return{field:Zt(p.field),direction:Vm(p.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const u=Ui(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function Mm(r){let e=Dm(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){W(n===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let a=[];t.where&&(a=function(p){const m=_l(p);return m instanceof Me&&nl(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(S){return new nr(en(S.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(t.orderBy));let u=null;t.limit&&(u=function(p){let m;return m=typeof p=="object"?p.value:p,ys(m)?null:m}(t.limit));let h=null;t.startAt&&(h=function(p){const m=!!p.before,S=p.values||[];return new es(S,m)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const m=!p.before,S=p.values||[];return new es(S,m)}(t.endAt)),tm(e,s,o,a,u,"F",h,d)}function Um(r,e){const t=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:n})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function _l(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=en(e.unaryFilter.field);return oe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=en(e.unaryFilter.field);return oe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=en(e.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=en(e.unaryFilter.field);return oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(r):r.fieldFilter!==void 0?function(e){return oe.create(en(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Me.create(e.compositeFilter.filters.map(t=>_l(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(r):M(30097,{filter:r})}function Vm(r){return xm[r]}function Fm(r){return _m[r]}function Bm(r){return Am[r]}function Zt(r){return{fieldPath:r.canonicalString()}}function en(r){return ge.fromServerFormat(r.fieldPath)}function Al(r){return r instanceof oe?function(e){if(e.op==="=="){if(vc(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NAN"}};if(yc(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vc(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NOT_NAN"}};if(yc(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zt(e.field),op:Fm(e.op),value:e.value}}}(r):r instanceof Me?function(e){const t=e.getFilters().map(n=>Al(n));return t.length===1?t[0]:{compositeFilter:{op:Bm(e.op),filters:t}}}(r):M(54877,{filter:r})}function jm(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Cl(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
*/class mt{constructor(e,t,n,s,a=V.min(),o=V.min(),u=ye.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new mt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
*/class $m{constructor(e){this.yt=e}}function qm(r){const e=Mm({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Mi(e,e.limit,"L"):e}/**
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
*/class zm{constructor(){this.Cn=new Hm}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Et.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Et.min())}updateCollectionGroup(e,t,n){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class Hm{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new de(X.comparator),a=!s.has(n);return this.index[t]=s.add(n),a}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new de(X.comparator)).toArray()}}/**
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
*/const Lc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kl=41943040;class Ae{static withCacheSize(e){return new Ae(e,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
*/Ae.DEFAULT_COLLECTION_PERCENTILE=10,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ae.DEFAULT=new Ae(kl,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ae.DISABLED=new Ae(-1,0,0);/**
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
*/const Rc="LruGarbageCollector",Gm=1048576;function Oc([r,e],[t,n]){const s=q(r,t);return s===0?q(e,n):s}class Km{constructor(e){this.Ir=e,this.buffer=new de(Oc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Oc(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Wm{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){O(Rc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bn(t)?O(Rc,"Ignoring IndexedDB error during garbage collection: ",t):await wn(t)}await this.Vr(3e5)})}}class Qm{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return C.resolve(gs.ce);const n=new Km(t);return this.mr.forEachTarget(e,s=>n.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>n.Ar(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Lc)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lc):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,s,a,o,u,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(n=m,u=Date.now(),this.removeTargets(e,n,t))).next(m=>(a=m,h=Date.now(),this.removeOrphanedDocuments(e,n))).next(m=>(d=Date.now(),Jt()<=$.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(u-o)+`ms
	Removed ${a} targets in `+(h-u)+`ms
	Removed ${m} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:m})))}}function Xm(r,e){return new Qm(r,e)}/**
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
*/class Jm{constructor(){this.changes=new qt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?C.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
*/class Ym{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
*/class Zm{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Qn(n.mutation,s,Ne.empty(),Z.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,z()).next(()=>n))}getLocalViewOfDocuments(e,t,n=z()){const s=Pt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(a=>{let o=$n();return a.forEach((u,h)=>{o=o.insert(u,h.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=Pt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,z()))}populateOverlays(e,t,n){const s=[];return n.forEach(a=>{t.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((o,u)=>{t.set(o,u)})})}computeViews(e,t,n,s){let a=Ze();const o=Wn(),u=function(){return Wn()}();return t.forEach((h,d)=>{const p=n.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Ct)?a=a.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),Qn(p.mutation,d,p.mutation.getFieldMask(),Z.now())):o.set(d.key,Ne.empty())}),this.recalculateAndSaveOverlays(e,a).next(h=>(h.forEach((d,p)=>o.set(d,p)),t.forEach((d,p)=>u.set(d,new Ym(p,o.get(d)??null))),u))}recalculateAndSaveOverlays(e,t){const n=Wn();let s=new ne((o,u)=>o-u),a=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const u of o)u.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=n.get(h)||Ne.empty();p=u.applyToLocalView(d,p),n.set(h,p);const m=(s.get(u.batchId)||z()).add(h);s=s.insert(u.batchId,m)})}).next(()=>{const o=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,m=hl();p.forEach(S=>{if(!a.has(S)){const _=yl(t.get(S),n.get(S));_!==null&&m.set(S,_),a=a.add(S)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return C.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(a){return P.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):al(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(a=>{const o=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-a.size):C.resolve(Pt());let u=Yn,h=a;return o.next(d=>C.forEach(d,(p,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),a.get(p)?C.resolve():this.remoteDocumentCache.getEntry(e,p).next(S=>{h=h.insert(p,S)}))).next(()=>this.populateOverlays(e,d,a)).next(()=>this.computeViews(e,h,d,z())).next(p=>({batchId:u,changes:ll(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new P(t)).next(n=>{let s=$n();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const a=t.collectionGroup;let o=$n();return this.indexManager.getCollectionParents(e,a).next(u=>C.forEach(u,h=>{const d=function(p,m){return new En(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,h.child(a));return this.getDocumentsMatchingCollectionQuery(e,d,n,s).next(p=>{p.forEach((m,S)=>{o=o.insert(m,S)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(a=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,a,s))).next(o=>{a.forEach((h,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,Ee.newInvalidDocument(p)))});let u=$n();return o.forEach((h,d)=>{const p=a.get(h);p!==void 0&&Qn(p.mutation,d,Ne.empty(),Z.now()),bs(t,d)&&(u=u.insert(h,d))}),u})}}/**
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
*/class eg{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return C.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(n){return{id:n.id,version:n.version,createTime:$e(n.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(n){return{name:n.name,query:qm(n.bundledQuery),readTime:$e(n.readTime)}}(t)),C.resolve()}}/**
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
*/class tg{constructor(){this.overlays=new ne(P.comparator),this.qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Pt();return C.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&n.set(s,a)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,a)=>{this.St(e,t,a)}),C.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.qr.delete(n)),C.resolve()}getOverlaysForCollection(e,t,n){const s=Pt(),a=t.length+1,o=new P(t.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===a&&h.largestBatchId>n&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let a=new ne((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let p=a.get(d.largestBatchId);p===null&&(p=Pt(),a=a.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Pt(),h=a.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=s)););return C.resolve(u)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new wm(t,n));let a=this.qr.get(t);a===void 0&&(a=z(),this.qr.set(t,a)),this.qr.set(t,a.add(n.key))}}/**
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
*/class ng{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
*/class da{constructor(){this.Qr=new de(pe.$r),this.Ur=new de(pe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new pe(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Gr(new pe(e,t))}zr(e,t){e.forEach(n=>this.removeReference(n,t))}jr(e){const t=new P(new X([])),n=new pe(t,e),s=new pe(t,e+1),a=[];return this.Ur.forEachInRange([n,s],o=>{this.Gr(o),a.push(o.key)}),a}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new P(new X([])),n=new pe(t,e),s=new pe(t,e+1);let a=z();return this.Ur.forEachInRange([n,s],o=>{a=a.add(o.key)}),a}containsKey(e){const t=new pe(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class pe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return P.comparator(e.key,t.key)||q(e.Yr,t.Yr)}static Kr(e,t){return q(e.Yr,t.Yr)||P.comparator(e.key,t.key)}}/**
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
*/class rg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new de(pe.$r)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vm(a,t,n,s);this.mutationQueue.push(o);for(const u of s)this.Zr=this.Zr.add(new pe(u.key,a)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,t){return C.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.ei(n),a=s<0?0:s;return C.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?ta:this.tr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new pe(t,0),s=new pe(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([n,s],o=>{const u=this.Xr(o.Yr);a.push(u)}),C.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new de(q);return t.forEach(s=>{const a=new pe(s,0),o=new pe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,o],u=>{n=n.add(u.Yr)})}),C.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let a=n;P.isDocumentKey(a)||(a=a.child(""));const o=new pe(new P(a),0);let u=new de(q);return this.Zr.forEachWhile(h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Yr)),!0)},o),C.resolve(this.ti(u))}ti(e){const t=[];return e.forEach(n=>{const s=this.Xr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){W(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return C.forEach(t.mutations,s=>{const a=new pe(s.key,t.batchId);return n=n.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new pe(t,0),s=this.Zr.firstAfterOrEqual(n);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
*/class sg{constructor(e){this.ri=e,this.docs=function(){return new ne(P.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),a=s?s.size:0,o=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-a,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return C.resolve(n?n.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let n=Ze();return t.forEach(s=>{const a=this.docs.get(s);n=n.insert(s,a?a.document.mutableCopy():Ee.newInvalidDocument(s))}),C.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let a=Ze();const o=t.path,u=new P(o.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Rp(Lp(p),n)<=0||(s.has(p.key)||bs(t,p))&&(a=a.insert(p.key,p.mutableCopy()))}return C.resolve(a)}getAllFromCollectionGroup(e,t,n,s){M(9500)}ii(e,t){return C.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new ig(this)}getSize(e){return C.resolve(this.size)}}class ig extends Jm{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(n)}),C.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
*/class ag{constructor(e){this.persistence=e,this.si=new qt(t=>sa(t),ia),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.oi=0,this._i=new da,this.targetCount=0,this.ai=fn.ur()}forEachTarget(e,t){return this.si.forEach((n,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),C.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new fn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Pr(t),C.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,n){let s=0;const a=[];return this.si.forEach((o,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.si.delete(o),a.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),C.waitFor(a).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return C.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),C.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach(o=>{a.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return C.resolve(n)}containsKey(e,t){return C.resolve(this._i.containsKey(t))}}/**
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
*/class Dl{constructor(e,t){this.ui={},this.overlays={},this.ci=new gs(0),this.li=!1,this.li=!0,this.hi=new ng,this.referenceDelegate=e(this),this.Pi=new ag(this),this.indexManager=new zm,this.remoteDocumentCache=function(n){return new sg(n)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new $m(t),this.Ii=new eg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new rg(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){O("MemoryPersistence","Starting transaction:",e);const s=new og(this.ci.next());return this.referenceDelegate.Ei(),n(s).next(a=>this.referenceDelegate.di(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Ai(e,t){return C.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class og extends Pp{constructor(e){super(),this.currentSequenceNumber=e}}class fa{constructor(e){this.persistence=e,this.Ri=new da,this.Vi=null}static mi(e){return new fa(e)}get fi(){if(this.Vi)return this.Vi;throw M(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),C.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(a=>this.fi.add(a.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,n=>{const s=P.fromPath(n);return this.gi(e,s).next(a=>{a||t.removeEntry(s,V.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ss{constructor(e,t){this.persistence=e,this.pi=new qt(n=>Vp(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Xm(this,t)}static mi(e,t){return new ss(e,t)}Ei(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}wr(e){let t=0;return this.pr(e,n=>{t++}).next(()=>t)}pr(e,t){return C.forEach(this.pi,(n,s)=>this.br(e,n,s).next(a=>a?C.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,t).next(u=>{u||(n++,a.removeEntry(o,V.min()))})).next(()=>a.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),C.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Br(e.data.value)),t}br(e,t,n){return C.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return C.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
*/class pa{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=s}static As(e,t){let n=z(),s=z();for(const a of t.docChanges)switch(a.type){case 0:n=n.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new pa(e,t.fromCache,n,s)}}/**
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
*/class ug{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return tf()?8:Mp(Te())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const a={result:null};return this.ys(e,t).next(o=>{a.result=o}).next(()=>{if(!a.result)return this.ws(e,t,s,n).next(o=>{a.result=o})}).next(()=>{if(a.result)return;const o=new cg;return this.Ss(e,t,o).next(u=>{if(a.result=u,this.Vs)return this.bs(e,t,o,u.size)})}).next(()=>a.result)}bs(e,t,n,s){return n.documentReadCount<this.fs?(Jt()<=$.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Yt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(Jt()<=$.DEBUG&&O("QueryEngine","Query:",Yt(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(Jt()<=$.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Yt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,je(t))):C.resolve())}ys(e,t){if(Tc(t))return C.resolve(null);let n=je(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Mi(t,null,"F"),n=je(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(a=>{const o=z(...a);return this.ps.getDocuments(e,o).next(u=>this.indexManager.getMinOffset(e,n).next(h=>{const d=this.Ds(t,u);return this.Cs(t,d,o,h.readTime)?this.ys(e,Mi(t,null,"F")):this.vs(e,d,t,h)}))})))}ws(e,t,n,s){return Tc(t)||s.isEqual(V.min())?C.resolve(null):this.ps.getDocuments(e,n).next(a=>{const o=this.Ds(t,a);return this.Cs(t,o,n,s)?C.resolve(null):(Jt()<=$.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yt(t)),this.vs(e,o,t,Np(s,Yn)).next(u=>u))})}Ds(e,t){let n=new de(cl(e));return t.forEach((s,a)=>{bs(e,a)&&(n=n.add(a))}),n}Cs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}Ss(e,t,n){return Jt()<=$.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Yt(t)),this.ps.getDocumentsMatchingQuery(e,t,Et.min(),n)}vs(e,t,n,s){return this.ps.getDocumentsMatchingQuery(e,n,s).next(a=>(t.forEach(o=>{a=a.insert(o.key,o)}),a))}}/**
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
*/const ma="LocalStore",lg=3e8;class hg{constructor(e,t,n,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new ne(q),this.xs=new qt(a=>sa(a),ia),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zm(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function dg(r,e,t,n){return new hg(r,e,t,n)}async function Nl(r,e){const t=F(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(a=>(s=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(n))).next(a=>{const o=[],u=[];let h=z();for(const d of s){o.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of a){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(n,h).next(d=>({Ls:d,removedBatchIds:o,addedBatchIds:u}))})})}function fg(r,e){const t=F(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return function(o,u,h,d){const p=h.batch,m=p.keys();let S=C.resolve();return m.forEach(_=>{S=S.next(()=>d.getEntry(u,_)).next(k=>{const R=h.docVersions.get(_);W(R!==null,48541),k.version.compareTo(R)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),d.addEntry(k)))})}),S.next(()=>o.mutationQueue.removeMutationBatch(u,p))}(t,n,e,a).next(()=>a.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(o){let u=z();for(let h=0;h<o.mutationResults.length;++h)o.mutationResults[h].transformResults.length>0&&(u=u.add(o.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Ll(r){const e=F(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function pg(r,e){const t=F(r),n=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const u=[];e.targetChanges.forEach((p,m)=>{const S=s.get(m);if(!S)return;u.push(t.Pi.removeMatchingKeys(a,p.removedDocuments,m).next(()=>t.Pi.addMatchingKeys(a,p.addedDocuments,m)));let _=S.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(ye.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):p.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(p.resumeToken,n)),s=s.insert(m,_),function(k,R,L){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=lg?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(S,_,p)&&u.push(t.Pi.updateTargetData(a,_))});let h=Ze(),d=z();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(a,p))}),u.push(mg(a,o,e.documentUpdates).next(p=>{h=p.ks,d=p.qs})),!n.isEqual(V.min())){const p=t.Pi.getLastRemoteSnapshotVersion(a).next(m=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,n));u.push(p)}return C.waitFor(u).next(()=>o.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,h,d)).next(()=>h)}).then(a=>(t.Ms=s,a))}function mg(r,e,t){let n=z(),s=z();return t.forEach(a=>n=n.add(a)),e.getEntries(r,n).next(a=>{let o=Ze();return t.forEach((u,h)=>{const d=a.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(V.min())?(e.removeEntry(u,h.readTime),o=o.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),o=o.insert(u,h)):O(ma,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{ks:o,qs:s}})}function gg(r,e){const t=F(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=ta),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function yg(r,e){const t=F(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Pi.getTargetData(n,e).next(a=>a?(s=a,C.resolve(s)):t.Pi.allocateTargetId(n).next(o=>(s=new mt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n})}async function ji(r,e,t){const n=F(r),s=n.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",a,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bn(o))throw o;O(ma,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ms=n.Ms.remove(e),n.xs.delete(s.target)}function Pc(r,e,t){const n=F(r);let s=V.min(),a=z();return n.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,d){const p=F(u),m=p.xs.get(d);return m!==void 0?C.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,d)}(n,o,je(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(o,u.targetId).next(h=>{a=h})}).next(()=>n.Fs.getDocumentsMatchingQuery(o,e,t?s:V.min(),t?a:z())).next(u=>(vg(n,rm(e),u),{documents:u,Qs:a})))}function vg(r,e,t){let n=r.Os.get(e)||V.min();t.forEach((s,a)=>{a.readTime.compareTo(n)>0&&(n=a.readTime)}),r.Os.set(e,n)}class Mc{constructor(){this.activeTargetIds=um()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wg{constructor(){this.Mo=new Mc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Mc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
*/class bg{Oo(e){}shutdown(){}}/**
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
*/const Uc="ConnectivityMonitor";class Vc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){O(Uc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){O(Uc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
*/let Ur=null;function $i(){return Ur===null?Ur=function(){return 268435456+Math.round(2147483648*Math.random())}():Ur++,"0x"+Ur.toString(16)}/**
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
*/const fi="RestConnection",Eg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Tg{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===Yr?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(e,t,n,s,a){const o=$i(),u=this.zo(e,t.toUriEncodedString());O(fi,`Sending RPC '${e}' ${o}:`,u,n);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,s,a);const{host:d}=new URL(u),p=gn(d);return this.Jo(e,u,h,n,p).then(m=>(O(fi,`Received RPC '${e}' ${o}: `,m),m),m=>{throw un(fi,`RPC '${e}' ${o} failed with error: `,m,"url: ",u,"request:",n),m})}Ho(e,t,n,s,a,o){return this.Go(e,t,n,s,a)}jo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,a)=>e[a]=s),n&&n.headers.forEach((s,a)=>e[a]=s)}zo(e,t){const n=Eg[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
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
*/const we="WebChannelConnection";class Sg extends Tg{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,s,a){const o=$i();return new Promise((u,h)=>{const d=new Pu;d.setWithCredentials(!0),d.listenOnce(Mu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Fr.NO_ERROR:const m=d.getResponseJson();O(we,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),u(m);break;case Fr.TIMEOUT:O(we,`RPC '${e}' ${o} timed out`),h(new N(A.DEADLINE_EXCEEDED,"Request time out"));break;case Fr.HTTP_ERROR:const S=d.getStatus();if(O(we,`RPC '${e}' ${o} failed with status:`,S,"response text:",d.getResponseText()),S>0){let _=d.getResponseJson();Array.isArray(_)&&(_=_[0]);const k=_==null?void 0:_.error;if(k&&k.status&&k.message){const R=function(L){const B=L.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(B)>=0?B:A.UNKNOWN}(k.status);h(new N(R,k.message))}else h(new N(A.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new N(A.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{O(we,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(s);O(we,`RPC '${e}' ${o} sending request:`,s),d.send(t,"POST",p,n,15)})}T_(e,t,n){const s=$i(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Fu(),u=Vu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,n),h.encodeInitMessageHeaders=!0;const p=a.join("");O(we,`Creating RPC '${e}' stream ${s}: ${p}`,h);const m=o.createWebChannel(p,h);this.I_(m);let S=!1,_=!1;const k=new Ig({Yo:L=>{_?O(we,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(S||(O(we,`Opening RPC '${e}' stream ${s} transport.`),m.open(),S=!0),O(we,`RPC '${e}' stream ${s} sending:`,L),m.send(L))},Zo:()=>m.close()}),R=(L,B,H)=>{L.listen(B,Q=>{try{H(Q)}catch(ee){setTimeout(()=>{throw ee},0)}})};return R(m,jn.EventType.OPEN,()=>{_||(O(we,`RPC '${e}' stream ${s} transport opened.`),k.o_())}),R(m,jn.EventType.CLOSE,()=>{_||(_=!0,O(we,`RPC '${e}' stream ${s} transport closed`),k.a_(),this.E_(m))}),R(m,jn.EventType.ERROR,L=>{_||(_=!0,un(we,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),k.a_(new N(A.UNAVAILABLE,"The operation could not be completed")))}),R(m,jn.EventType.MESSAGE,L=>{var B;if(!_){const H=L.data[0];W(!!H,16349);const Q=H,ee=(Q==null?void 0:Q.error)||((B=Q[0])==null?void 0:B.error);if(ee){O(we,`RPC '${e}' stream ${s} received error:`,ee);const ue=ee.status;let te=function(g){const v=ae[g];if(v!==void 0)return wl(v)}(ue),b=ee.message;te===void 0&&(te=A.INTERNAL,b="Unknown error status: "+ue+" with message "+ee.message),_=!0,k.a_(new N(te,b)),m.close()}else O(we,`RPC '${e}' stream ${s} received:`,H),k.u_(H)}}),R(u,Uu.STAT_EVENT,L=>{L.stat===ki.PROXY?O(we,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===ki.NOPROXY&&O(we,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function pi(){return typeof document<"u"?document:null}/**
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
*/function Ss(r){return new Cm(r,!0)}/**
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
*/class Rl{constructor(e,t,n=1e3,s=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=s,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
*/const Fc="PersistentStream";class Ol{constructor(e,t,n,s,a,o,u,h){this.Mi=e,this.S_=n,this.b_=s,this.connection=a,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Rl(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===A.RESOURCE_EXHAUSTED?(Ye(t.toString()),Ye("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.D_===t&&this.G_(n,s)},n=>{e(()=>{const s=new N(A.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{n(()=>this.z_(s))}),this.stream.onMessage(s=>{n(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return O(Fc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(O(Fc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xg extends Ol{constructor(e,t,n,s,a,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Nm(this.serializer,e),n=function(s){if(!("targetChange"in s))return V.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?V.min():a.readTime?$e(a.readTime):V.min()}(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=Bi(this.serializer),t.addTarget=function(s,a){let o;const u=a.target;if(o=Oi(u)?{documents:Om(s,u)}:{query:Pm(s,u).ft},o.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){o.resumeToken=Tl(s,a.resumeToken);const h=Ui(s,a.expectedCount);h!==null&&(o.expectedCount=h)}else if(a.snapshotVersion.compareTo(V.min())>0){o.readTime=rs(s,a.snapshotVersion.toTimestamp());const h=Ui(s,a.expectedCount);h!==null&&(o.expectedCount=h)}return o}(this.serializer,e);const n=Um(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=Bi(this.serializer),t.removeTarget=e,this.q_(t)}}class _g extends Ol{constructor(e,t,n,s,a,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Rm(e.writeResults,e.commitTime),n=$e(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Bi(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Lm(this.serializer,n))};this.q_(t)}}/**
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
*/class Ag{}class Cg extends Ag{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new N(A.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,o])=>this.connection.Go(e,Vi(t,n),s,a,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(A.UNKNOWN,a.toString())})}Ho(e,t,n,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Ho(e,Vi(t,n),s,o,u,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(A.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class kg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ye(t),this.aa=!1):O("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
*/const jt="RemoteStore";class Dg{constructor(e,t,n,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo(o=>{n.enqueueAndForget(async()=>{zt(this)&&(O(jt,"Restarting streams for network reachability change."),await async function(u){const h=F(u);h.Ea.add(4),await hr(h),h.Ra.set("Unknown"),h.Ea.delete(4),await xs(h)}(this))})}),this.Ra=new kg(n,s)}}async function xs(r){if(zt(r))for(const e of r.da)await e(!0)}async function hr(r){for(const e of r.da)await e(!1)}function Pl(r,e){const t=F(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),wa(t)?va(t):Tn(t).O_()&&ya(t,e))}function ga(r,e){const t=F(r),n=Tn(t);t.Ia.delete(e),n.O_()&&Ml(t,e),t.Ia.size===0&&(n.O_()?n.L_():zt(t)&&t.Ra.set("Unknown"))}function ya(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(V.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Tn(r).Y_(e)}function Ml(r,e){r.Va.Ue(e),Tn(r).Z_(e)}function va(r){r.Va=new Sm({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Tn(r).start(),r.Ra.ua()}function wa(r){return zt(r)&&!Tn(r).x_()&&r.Ia.size>0}function zt(r){return F(r).Ea.size===0}function Ul(r){r.Va=void 0}async function Ng(r){r.Ra.set("Online")}async function Lg(r){r.Ia.forEach((e,t)=>{ya(r,e)})}async function Rg(r,e){Ul(r),wa(r)?(r.Ra.ha(e),va(r)):r.Ra.set("Unknown")}async function Og(r,e,t){if(r.Ra.set("Online"),e instanceof El&&e.state===2&&e.cause)try{await async function(n,s){const a=s.cause;for(const o of s.targetIds)n.Ia.has(o)&&(await n.remoteSyncer.rejectListen(o,a),n.Ia.delete(o),n.Va.removeTarget(o))}(r,e)}catch(n){O(jt,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await is(r,n)}else if(e instanceof qr?r.Va.Ze(e):e instanceof bl?r.Va.st(e):r.Va.tt(e),!t.isEqual(V.min()))try{const n=await Ll(r.localStore);t.compareTo(n)>=0&&await function(s,a){const o=s.Va.Tt(a);return o.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(h);d&&s.Ia.set(h,d.withResumeToken(u.resumeToken,a))}}),o.targetMismatches.forEach((u,h)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(ye.EMPTY_BYTE_STRING,d.snapshotVersion)),Ml(s,u);const p=new mt(d.target,u,h,d.sequenceNumber);ya(s,p)}),s.remoteSyncer.applyRemoteEvent(o)}(r,t)}catch(n){O(jt,"Failed to raise snapshot:",n),await is(r,n)}}async function is(r,e,t){if(!bn(e))throw e;r.Ea.add(1),await hr(r),r.Ra.set("Offline"),t||(t=()=>Ll(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{O(jt,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await xs(r)})}function Vl(r,e){return e().catch(t=>is(r,t,e))}async function _s(r){const e=F(r),t=xt(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ta;for(;Pg(e);)try{const s=await gg(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,Mg(e,s)}catch(s){await is(e,s)}Fl(e)&&Bl(e)}function Pg(r){return zt(r)&&r.Ta.length<10}function Mg(r,e){r.Ta.push(e);const t=xt(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Fl(r){return zt(r)&&!xt(r).x_()&&r.Ta.length>0}function Bl(r){xt(r).start()}async function Ug(r){xt(r).ra()}async function Vg(r){const e=xt(r);for(const t of r.Ta)e.ea(t.mutations)}async function Fg(r,e,t){const n=r.Ta.shift(),s=ua.from(n,e,t);await Vl(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await _s(r)}async function Bg(r,e){e&&xt(r).X_&&await async function(t,n){if(function(s){return Em(s)&&s!==A.ABORTED}(n.code)){const s=t.Ta.shift();xt(t).B_(),await Vl(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,n)),await _s(t)}}(r,e),Fl(r)&&Bl(r)}async function Bc(r,e){const t=F(r);t.asyncQueue.verifyOperationInProgress(),O(jt,"RemoteStore received new credentials");const n=zt(t);t.Ea.add(3),await hr(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await xs(t)}async function jg(r,e){const t=F(r);e?(t.Ea.delete(2),await xs(t)):e||(t.Ea.add(2),await hr(t),t.Ra.set("Unknown"))}function Tn(r){return r.ma||(r.ma=function(e,t,n){const s=F(e);return s.sa(),new xg(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(r.datastore,r.asyncQueue,{Xo:Ng.bind(null,r),t_:Lg.bind(null,r),r_:Rg.bind(null,r),H_:Og.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),wa(r)?va(r):r.Ra.set("Unknown")):(await r.ma.stop(),Ul(r))})),r.ma}function xt(r){return r.fa||(r.fa=function(e,t,n){const s=F(e);return s.sa(),new _g(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:Ug.bind(null,r),r_:Bg.bind(null,r),ta:Vg.bind(null,r),na:Fg.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await _s(r)):(await r.fa.stop(),r.Ta.length>0&&(O(jt,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
*/class ba{constructor(e,t,n,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=a,this.deferred=new Xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,a){const o=Date.now()+n,u=new ba(e,t,o,s,a);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ea(r,e){if(Ye("AsyncQueue",`${e}: ${r}`),bn(r))return new N(A.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
*/class nn{static emptySet(e){return new nn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||P.comparator(t.key,n.key):(t,n)=>P.comparator(t.key,n.key),this.keyedMap=$n(),this.sortedSet=new ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=n.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new nn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
*/class jc{constructor(){this.ga=new ne(P.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):M(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class pn{constructor(e,t,n,s,a,o,u,h,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=a,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,s,a){const o=[];return t.forEach(u=>{o.push({type:0,doc:u})}),new pn(e,t,nn.emptySet(t),o,n,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ws(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
*/class $g{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class qg{constructor(){this.queries=$c(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,t){const n=F(e),s=n.queries;n.queries=$c(),s.forEach((a,o)=>{for(const u of o.Sa)u.onError(t)})})(this,new N(A.ABORTED,"Firestore shutting down"))}}function $c(){return new qt(r=>ol(r),ws)}async function jl(r,e){const t=F(r);let n=3;const s=e.query;let a=t.queries.get(s);a?!a.ba()&&e.Da()&&(n=2):(a=new $g,n=e.Da()?0:1);try{switch(n){case 0:a.wa=await t.onListen(s,!0);break;case 1:a.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const u=Ea(o,`Initialization of query '${Yt(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&Ta(t)}async function $l(r,e){const t=F(r),n=e.query;let s=3;const a=t.queries.get(n);if(a){const o=a.Sa.indexOf(e);o>=0&&(a.Sa.splice(o,1),a.Sa.length===0?s=e.Da()?0:1:!a.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function zg(r,e){const t=F(r);let n=!1;for(const s of e){const a=s.query,o=t.queries.get(a);if(o){for(const u of o.Sa)u.Fa(s)&&(n=!0);o.wa=s}}n&&Ta(t)}function Hg(r,e,t){const n=F(r),s=n.queries.get(e);if(s)for(const a of s.Sa)a.onError(t);n.queries.delete(e)}function Ta(r){r.Ca.forEach(e=>{e.next()})}var qi,qc;(qc=qi||(qi={})).Ma="default",qc.Cache="cache";class ql{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new pn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==qi.Cache}}/**
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
*/class zl{constructor(e){this.key=e}}class Hl{constructor(e){this.key=e}}class Gg{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=z(),this.mutatedKeys=z(),this.eu=cl(e),this.tu=new nn(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new jc,s=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,o=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const S=s.get(p),_=bs(this.query,m)?m:null,k=!!S&&this.mutatedKeys.has(S.key),R=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let L=!1;S&&_?S.data.isEqual(_.data)?k!==R&&(n.track({type:3,doc:_}),L=!0):this.su(S,_)||(n.track({type:2,doc:_}),L=!0,(h&&this.eu(_,h)>0||d&&this.eu(_,d)<0)&&(u=!0)):!S&&_?(n.track({type:0,doc:_}),L=!0):S&&!_&&(n.track({type:1,doc:S}),L=!0,(h||d)&&(u=!0)),L&&(_?(o=o.add(_),a=R?a.add(p):a.delete(p)):(o=o.delete(p),a=a.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),a=a.delete(p.key),n.track({type:1,doc:p})}return{tu:o,iu:n,Cs:u,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((p,m)=>function(S,_){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Rt:R})}};return k(S)-k(_)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(n),s=s??!1;const u=t&&!s?this._u():[],h=this.Xa.size===0&&this.current&&!s?1:0,d=h!==this.Za;return this.Za=h,o.length!==0||d?{snapshot:new pn(this.query,e.tu,a,o,e.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new jc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=z(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const t=[];return e.forEach(n=>{this.Xa.has(n)||t.push(new Hl(n))}),this.Xa.forEach(n=>{e.has(n)||t.push(new zl(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return pn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ia="SyncEngine";class Kg{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Wg{constructor(e){this.key=e,this.hu=!1}}class Qg{constructor(e,t,n,s,a,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new qt(u=>ol(u),ws),this.Iu=new Map,this.Eu=new Set,this.du=new ne(P.comparator),this.Au=new Map,this.Ru=new da,this.Vu={},this.mu=new Map,this.fu=fn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Xg(r,e,t=!0){const n=Jl(r);let s;const a=n.Tu.get(e);return a?(n.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.lu()):s=await Gl(n,e,t,!0),s}async function Jg(r,e){const t=Jl(r);await Gl(t,e,!0,!1)}async function Gl(r,e,t,n){const s=await yg(r.localStore,je(e)),a=s.targetId,o=r.sharedClientState.addLocalQueryTarget(a,t);let u;return n&&(u=await Yg(r,e,a,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Pl(r.remoteStore,s),u}async function Yg(r,e,t,n,s){r.pu=(m,S,_)=>async function(k,R,L,B){let H=R.view.ru(L);H.Cs&&(H=await Pc(k.localStore,R.query,!1).then(({documents:te})=>R.view.ru(te,H)));const Q=B&&B.targetChanges.get(R.targetId),ee=B&&B.targetMismatches.get(R.targetId)!=null,ue=R.view.applyChanges(H,k.isPrimaryClient,Q,ee);return Hc(k,R.targetId,ue.au),ue.snapshot}(r,m,S,_);const a=await Pc(r.localStore,e,!0),o=new Gg(e,a.Qs),u=o.ru(a.documents),h=lr.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),d=o.applyChanges(u,r.isPrimaryClient,h);Hc(r,t,d.au);const p=new Kg(e,t,o);return r.Tu.set(e,p),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),d.snapshot}async function Zg(r,e,t){const n=F(r),s=n.Tu.get(e),a=n.Iu.get(s.targetId);if(a.length>1)return n.Iu.set(s.targetId,a.filter(o=>!ws(o,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ji(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&ga(n.remoteStore,s.targetId),zi(n,s.targetId)}).catch(wn)):(zi(n,s.targetId),await ji(n.localStore,s.targetId,!0))}async function ey(r,e){const t=F(r),n=t.Tu.get(e),s=t.Iu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ga(t.remoteStore,n.targetId))}async function ty(r,e,t){const n=cy(r);try{const s=await function(a,o){const u=F(a),h=Z.now(),d=o.reduce((S,_)=>S.add(_.key),z());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let _=Ze(),k=z();return u.Ns.getEntries(S,d).next(R=>{_=R,_.forEach((L,B)=>{B.isValidDocument()||(k=k.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,_)).next(R=>{p=R;const L=[];for(const B of o){const H=gm(B,p.get(B.key).overlayedDocument);H!=null&&L.push(new Ct(B.key,H,Zu(H.value.mapValue),Re.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,L,o)}).next(R=>{m=R;const L=R.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(S,R.batchId,L)})}).then(()=>({batchId:m.batchId,changes:ll(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(a,o,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new ne(q)),h=h.insert(o,u),a.Vu[a.currentUser.toKey()]=h}(n,s.batchId,t),await dr(n,s.changes),await _s(n.remoteStore)}catch(s){const a=Ea(s,"Failed to persist write");t.reject(a)}}async function Kl(r,e){const t=F(r);try{const n=await pg(t.localStore,e);e.targetChanges.forEach((s,a)=>{const o=t.Au.get(a);o&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?W(o.hu,14607):s.removedDocuments.size>0&&(W(o.hu,42227),o.hu=!1))}),await dr(t,n,e)}catch(n){await wn(n)}}function zc(r,e,t){const n=F(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach((a,o)=>{const u=o.view.va(e);u.snapshot&&s.push(u.snapshot)}),function(a,o){const u=F(a);u.onlineState=o;let h=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(o)&&(h=!0)}),h&&Ta(u)}(n.eventManager,e),s.length&&n.Pu.H_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function ny(r,e,t){const n=F(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),a=s&&s.key;if(a){let o=new ne(P.comparator);o=o.insert(a,Ee.newNoDocument(a,V.min()));const u=z().add(a),h=new Is(V.min(),new Map,new ne(q),o,u);await Kl(n,h),n.du=n.du.remove(a),n.Au.delete(e),Sa(n)}else await ji(n.localStore,e,!1).then(()=>zi(n,e,t)).catch(wn)}async function ry(r,e){const t=F(r),n=e.batch.batchId;try{const s=await fg(t.localStore,e);Ql(t,n,null),Wl(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await dr(t,s)}catch(s){await wn(s)}}async function sy(r,e,t){const n=F(r);try{const s=await function(a,o){const u=F(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return u.mutationQueue.lookupMutationBatch(h,o).next(p=>(W(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,d,o)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>u.localDocuments.getDocuments(h,d))})}(n.localStore,e);Ql(n,e,t),Wl(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await dr(n,s)}catch(s){await wn(s)}}function Wl(r,e){(r.mu.get(e)||[]).forEach(t=>{t.resolve()}),r.mu.delete(e)}function Ql(r,e,t){const n=F(r);let s=n.Vu[n.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),n.Vu[n.currentUser.toKey()]=s}}function zi(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Iu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(n=>{r.Ru.containsKey(n)||Xl(r,n)})}function Xl(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(ga(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Sa(r))}function Hc(r,e,t){for(const n of t)n instanceof zl?(r.Ru.addReference(n.key,e),iy(r,n)):n instanceof Hl?(O(Ia,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,e),r.Ru.containsKey(n.key)||Xl(r,n.key)):M(19791,{wu:n})}function iy(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Eu.has(n)||(O(Ia,"New document in limbo: "+t),r.Eu.add(n),Sa(r))}function Sa(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new P(X.fromString(e)),n=r.fu.next();r.Au.set(n,new Wg(t)),r.du=r.du.insert(t,n),Pl(r.remoteStore,new mt(je(aa(t.path)),n,"TargetPurposeLimboResolution",gs.ce))}}async function dr(r,e,t){const n=F(r),s=[],a=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach((u,h)=>{o.push(n.pu(h,e,t).then(d=>{var p;if((d||t)&&n.isPrimaryClient){const m=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:p.current;n.sharedClientState.updateQueryState(h.targetId,m?"current":"not-current")}if(d){s.push(d);const m=pa.As(h.targetId,d);a.push(m)}}))}),await Promise.all(o),n.Pu.H_(s),await async function(u,h){const d=F(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>C.forEach(h,m=>C.forEach(m.Es,S=>d.persistence.referenceDelegate.addReference(p,m.targetId,S)).next(()=>C.forEach(m.ds,S=>d.persistence.referenceDelegate.removeReference(p,m.targetId,S)))))}catch(p){if(!bn(p))throw p;O(ma,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const S=d.Ms.get(m),_=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(_);d.Ms=d.Ms.insert(m,k)}}}(n.localStore,a))}async function ay(r,e){const t=F(r);if(!t.currentUser.isEqual(e)){O(Ia,"User change. New user:",e.toKey());const n=await Nl(t.localStore,e);t.currentUser=e,function(s,a){s.mu.forEach(o=>{o.forEach(u=>{u.reject(new N(A.CANCELLED,a))})}),s.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await dr(t,n.Ls)}}function oy(r,e){const t=F(r),n=t.Au.get(e);if(n&&n.hu)return z().add(n.key);{let s=z();const a=t.Iu.get(e);if(!a)return s;for(const o of a){const u=t.Tu.get(o);s=s.unionWith(u.view.nu)}return s}}function Jl(r){const e=F(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ny.bind(null,e),e.Pu.H_=zg.bind(null,e.eventManager),e.Pu.yu=Hg.bind(null,e.eventManager),e}function cy(r){const e=F(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ry.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sy.bind(null,e),e}class as{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ss(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return dg(this.persistence,new ug,e.initialUser,this.serializer)}Cu(e){return new Dl(fa.mi,this.serializer)}Du(e){return new wg}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}as.provider={build:()=>new as};class uy extends as{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){W(this.persistence.referenceDelegate instanceof ss,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Wm(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ae.withCacheSize(this.cacheSizeBytes):Ae.DEFAULT;return new Dl(n=>ss.mi(n,t),this.serializer)}}class Hi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>zc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=ay.bind(null,this.syncEngine),await jg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qg}()}createDatastore(e){const t=Ss(e.databaseInfo.databaseId),n=function(s){return new Sg(s)}(e.databaseInfo);return function(s,a,o,u){return new Cg(s,a,o,u)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(t,n,s,a,o){return new Dg(t,n,s,a,o)}(this.localStore,this.datastore,e.asyncQueue,t=>zc(this.syncEngine,t,0),function(){return Vc.v()?new Vc:new bg}())}createSyncEngine(e,t){return function(n,s,a,o,u,h,d){const p=new Qg(n,s,a,o,u,h);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(n){const s=F(n);O(jt,"RemoteStore shutting down."),s.Ea.add(5),await hr(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Hi.provider={build:()=>new Hi};/**
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
*/class Yl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ye("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
*/const _t="FirestoreClient";class ly{constructor(e,t,n,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=be.UNAUTHENTICATED,this.clientId=ea.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(n,async o=>{O(_t,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(O(_t,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ea(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function mi(r,e){r.asyncQueue.verifyOperationInProgress(),O(_t,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Nl(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Gc(r,e){r.asyncQueue.verifyOperationInProgress();const t=await hy(r);O(_t,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Bc(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Bc(e.remoteStore,s)),r._onlineComponents=e}async function hy(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){O(_t,"Using user provided OfflineComponentProvider");try{await mi(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(n){return n.name==="FirebaseError"?n.code===A.FAILED_PRECONDITION||n.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}(t))throw t;un("Error using user provided cache. Falling back to memory cache: "+t),await mi(r,new as)}}else O(_t,"Using default OfflineComponentProvider"),await mi(r,new uy(void 0));return r._offlineComponents}async function Zl(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(O(_t,"Using user provided OnlineComponentProvider"),await Gc(r,r._uninitializedComponentsProvider._online)):(O(_t,"Using default OnlineComponentProvider"),await Gc(r,new Hi))),r._onlineComponents}function dy(r){return Zl(r).then(e=>e.syncEngine)}async function eh(r){const e=await Zl(r),t=e.eventManager;return t.onListen=Xg.bind(null,e.syncEngine),t.onUnlisten=Zg.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Jg.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ey.bind(null,e.syncEngine),t}function fy(r,e,t={}){const n=new Xe;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,o,u,h){const d=new Yl({next:m=>{d.Nu(),a.enqueueAndForget(()=>$l(s,p));const S=m.docs.has(o);!S&&m.fromCache?h.reject(new N(A.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&m.fromCache&&u&&u.source==="server"?h.reject(new N(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new ql(aa(o.path),d,{includeMetadataChanges:!0,qa:!0});return jl(s,p)}(await eh(r),r.asyncQueue,e,t,n)),n.promise}function py(r,e,t={}){const n=new Xe;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,o,u,h){const d=new Yl({next:m=>{d.Nu(),a.enqueueAndForget(()=>$l(s,p)),m.fromCache&&u.source==="server"?h.reject(new N(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new ql(o,d,{includeMetadataChanges:!0,qa:!0});return jl(s,p)}(await eh(r),r.asyncQueue,e,t,n)),n.promise}/**
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
*/function th(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
*/const Kc=new Map;/**
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
*/const nh="firestore.googleapis.com",Wc=!0;class Qc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new N(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nh,this.ssl=Wc}else this.host=e.host,this.ssl=e.ssl??Wc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kl;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Gm)throw new N(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Dp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=th(e.experimentalLongPollingOptions??{}),function(t){if(t.timeoutSeconds!==void 0){if(isNaN(t.timeoutSeconds))throw new N(A.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new N(A.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new N(A.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(t,n){return t.timeoutSeconds===n.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class As{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new bp;switch(t.type){case"firstParty":return new Sp(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new N(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Kc.get(e);t&&(O("ComponentProvider","Removing Datastore"),Kc.delete(e),t.terminate())}(this),Promise.resolve()}}function my(r,e,t,n={}){var s;r=Pe(r,As);const a=gn(e),o=r._getSettings(),u={...o,emulatorOptions:r._getEmulatorOptions()},h=`${e}:${t}`;a&&(_u(`https://${h}`),Au("Firestore",!0)),o.host!==nh&&o.host!==h&&un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:h,ssl:a,emulatorOptions:n};if(!Vt(d,u)&&(r._setSettings(d),n.mockUserToken)){let p,m;if(typeof n.mockUserToken=="string")p=n.mockUserToken,m=be.MOCK_USER;else{p=Gd(n.mockUserToken,(s=r._app)==null?void 0:s.options.projectId);const S=n.mockUserToken.sub||n.mockUserToken.user_id;if(!S)throw new N(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new be(S)}r._authCredentials=new Ep(new ju(p,m))}}/**
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
*/class Ht{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ht(this.firestore,e,this._query)}}class ie{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ie(this.firestore,e,this._key)}toJSON(){return{type:ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(cr(t,ie._jsonSchema))return new ie(e,n||null,new P(X.fromString(t.referencePath)))}}ie._jsonSchemaVersion="firestore/documentReference/1.0",ie._jsonSchema={type:ce("string",ie._jsonSchemaVersion),referencePath:ce("string")};class bt extends Ht{constructor(e,t,n){super(e,t,aa(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ie(this.firestore,null,new P(e))}withConverter(e){return new bt(this.firestore,e,this._path)}}function gi(r,e,...t){if(r=xe(r),$u("collection","path",e),r instanceof As){const n=X.fromString(e,...t);return cc(n),new bt(r,null,n)}{if(!(r instanceof ie||r instanceof bt))throw new N(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(e,...t));return cc(n),new bt(r.firestore,null,n)}}function lt(r,e,...t){if(r=xe(r),arguments.length===1&&(e=ea.newId()),$u("doc","path",e),r instanceof As){const n=X.fromString(e,...t);return oc(n),new ie(r,null,new P(n))}{if(!(r instanceof ie||r instanceof bt))throw new N(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(e,...t));return oc(n),new ie(r.firestore,r instanceof bt?r.converter:null,new P(n))}}/**
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
*/const Xc="AsyncQueue";class Jc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Rl(this,"async_queue_retry"),this._c=()=>{const n=pi();n&&O(Xc,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=pi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=pi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Xe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!bn(e))throw e;O(Xc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,Ye("INTERNAL UNHANDLED ERROR: ",Yc(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=ba.createAndSchedule(this,e,t,n,a=>this.hc(a));return this.tc.push(s),s}uc(){this.nc&&M(47125,{Pc:Yc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Yc(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Gt extends As{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Jc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jc(e),this._firestoreClient=void 0,await e}}}function gy(r,e){const t=typeof r=="object"?r:Nu(),n=typeof r=="string"?r:Yr,s=Yi(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const a=zd("firestore");a&&my(s,...a)}return s}function xa(r){if(r._terminated)throw new N(A.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||yy(r),r._firestoreClient}function yy(r){var e,t,n;const s=r._freezeSettings(),a=function(o,u,h,d){return new jp(o,u,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,th(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(r._databaseId,((e=r._app)==null?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||(t=s.localCache)!=null&&t._offlineComponentProvider&&(n=s.localCache)!=null&&n._onlineComponentProvider&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new ly(r._authCredentials,r._appCheckCredentials,r._queue,a,r._componentsProvider&&function(o){const u=o==null?void 0:o._online.build();return{_offline:o==null?void 0:o._offline.build(u),_online:u}}(r._componentsProvider))}/**
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
*/class Le{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Le(ye.fromBase64String(e))}catch(t){throw new N(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Le(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Le._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cr(e,Le._jsonSchema))return Le.fromBase64String(e.bytes)}}Le._jsonSchemaVersion="firestore/bytes/1.0",Le._jsonSchema={type:ce("string",Le._jsonSchemaVersion),bytes:ce("string")};/**
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
*/class Cs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
*/class _a{constructor(e){this._methodName=e}}/**
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
*/class qe{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:qe._jsonSchemaVersion}}static fromJSON(e){if(cr(e,qe._jsonSchema))return new qe(e.latitude,e.longitude)}}qe._jsonSchemaVersion="firestore/geoPoint/1.0",qe._jsonSchema={type:ce("string",qe._jsonSchemaVersion),latitude:ce("number"),longitude:ce("number")};/**
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
*/class ze{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(t,n){if(t.length!==n.length)return!1;for(let s=0;s<t.length;++s)if(t[s]!==n[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cr(e,ze._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ze(e.vectorValues);throw new N(A.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ze._jsonSchemaVersion="firestore/vectorValue/1.0",ze._jsonSchema={type:ce("string",ze._jsonSchemaVersion),vectorValues:ce("object")};/**
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
*/const vy=/^__.*__$/;class wy{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Ct(e,this.data,this.fieldMask,t,this.fieldTransforms):new ur(e,this.data,t,this.fieldTransforms)}}class rh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ct(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function sh(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ac:r})}}class Aa{constructor(e,t,n,s,a,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Aa({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var t;const n=(t=this.path)==null?void 0:t.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){var t;const n=(t=this.path)==null?void 0:t.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return os(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(sh(this.Ac)&&vy.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class by{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ss(e)}Cc(e,t,n,s=!1){return new Aa({Ac:e,methodName:t,Dc:n,path:ge.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ks(r){const e=r._freezeSettings(),t=Ss(r._databaseId);return new by(r._databaseId,!!e.ignoreUndefinedProperties,t)}function ih(r,e,t,n,s,a={}){const o=r.Cc(a.merge||a.mergeFields?2:0,e,t,s);Ca("Data must be an object, but it was:",o,n);const u=ah(n,o);let h,d;if(a.merge)h=new Ne(o.fieldMask),d=o.fieldTransforms;else if(a.mergeFields){const p=[];for(const m of a.mergeFields){const S=Gi(e,m,t);if(!o.contains(S))throw new N(A.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);ch(p,S)||p.push(S)}h=new Ne(p),d=o.fieldTransforms.filter(m=>h.covers(m.field))}else h=null,d=o.fieldTransforms;return new wy(new ke(u),h,d)}class Ds extends _a{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ds}}function Ey(r,e,t,n){const s=r.Cc(1,e,t);Ca("Data must be an object, but it was:",s,n);const a=[],o=ke.empty();At(n,(h,d)=>{const p=ka(e,h,t);d=xe(d);const m=s.yc(p);if(d instanceof Ds)a.push(p);else{const S=fr(d,m);S!=null&&(a.push(p),o.set(p,S))}});const u=new Ne(a);return new rh(o,u,s.fieldTransforms)}function Ty(r,e,t,n,s,a){const o=r.Cc(1,e,t),u=[Gi(e,n,t)],h=[s];if(a.length%2!=0)throw new N(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<a.length;S+=2)u.push(Gi(e,a[S])),h.push(a[S+1]);const d=[],p=ke.empty();for(let S=u.length-1;S>=0;--S)if(!ch(d,u[S])){const _=u[S];let k=h[S];k=xe(k);const R=o.yc(_);if(k instanceof Ds)d.push(_);else{const L=fr(k,R);L!=null&&(d.push(_),p.set(_,L))}}const m=new Ne(d);return new rh(p,m,o.fieldTransforms)}function Iy(r,e,t,n=!1){return fr(t,r.Cc(n?4:3,e))}function fr(r,e){if(oh(r=xe(r)))return Ca("Unsupported field value:",e,r),ah(r,e);if(r instanceof _a)return function(t,n){if(!sh(n.Ac))throw n.Sc(`${t._methodName}() can only be used with update() and set()`);if(!n.path)throw n.Sc(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(n);s&&n.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(t,n){const s=[];let a=0;for(const o of t){let u=fr(o,n.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(r,e)}return function(t,n){if((t=xe(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return lm(n.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=Z.fromDate(t);return{timestampValue:rs(n.serializer,s)}}if(t instanceof Z){const s=new Z(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:rs(n.serializer,s)}}if(t instanceof qe)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Le)return{bytesValue:Tl(n.serializer,t._byteString)};if(t instanceof ie){const s=n.databaseId,a=t.firestore._databaseId;if(!a.isEqual(s))throw n.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ha(t.firestore._databaseId||n.databaseId,t._key.path)}}if(t instanceof ze)return function(s,a){return{mapValue:{fields:{[Ju]:{stringValue:Yu},[Zr]:{arrayValue:{values:s.toArray().map(o=>{if(typeof o!="number")throw a.Sc("VectorValues must only contain numeric values.");return oa(a.serializer,o)})}}}}}}(t,n);throw n.Sc(`Unsupported field value: ${ms(t)}`)}(r,e)}function ah(r,e){const t={};return Hu(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):At(r,(n,s)=>{const a=fr(s,e.mc(n));a!=null&&(t[n]=a)}),{mapValue:{fields:t}}}function oh(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Z||r instanceof qe||r instanceof Le||r instanceof ie||r instanceof _a||r instanceof ze)}function Ca(r,e,t){if(!oh(t)||!qu(t)){const n=ms(t);throw n==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+n)}}function Gi(r,e,t){if((e=xe(e))instanceof Cs)return e._internalPath;if(typeof e=="string")return ka(r,e);throw os("Field path arguments must be of type string or ",r,!1,void 0,t)}const Sy=new RegExp("[~\\*/\\[\\]]");function ka(r,e,t){if(e.search(Sy)>=0)throw os(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Cs(...e.split("."))._internalPath}catch{throw os(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function os(r,e,t,n,s){const a=n&&!n.isEmpty(),o=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(a||o)&&(h+=" (found",a&&(h+=` in field ${n}`),o&&(h+=` in document ${s}`),h+=")"),new N(A.INVALID_ARGUMENT,u+r+h)}function ch(r,e){return r.some(t=>t.isEqual(e))}/**
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
*/class uh{constructor(e,t,n,s,a){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ns("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xy extends uh{data(){return super.data()}}function Ns(r,e){return typeof e=="string"?ka(r,e):e instanceof Cs?e._internalPath:e._delegate._internalPath}/**
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
*/function _y(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Da{}class lh extends Da{}function yi(r,e,...t){let n=[];e instanceof Da&&n.push(e),n=n.concat(t),function(s){const a=s.filter(u=>u instanceof Na).length,o=s.filter(u=>u instanceof Ls).length;if(a>1||a>0&&o>0)throw new N(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Ls extends lh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ls(e,t,n)}_apply(e){const t=this._parse(e);return hh(e._query,t),new Ht(e.firestore,e.converter,Pi(e._query,t))}_parse(e){const t=ks(e.firestore);return function(n,s,a,o,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new N(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){tu(d,h);const m=[];for(const S of d)m.push(eu(o,n,S));p={arrayValue:{values:m}}}else p=eu(o,n,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||tu(d,h),p=Iy(a,s,d,h==="in"||h==="not-in");return oe.create(u,h,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Zc(r,e,t){const n=e,s=Ns("where",r);return Ls._create(s,n,t)}class Na extends Da{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Na(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Me.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(n,s){let a=n;const o=s.getFlattenedFilters();for(const u of o)hh(a,u),a=Pi(a,u)}(e._query,t),new Ht(e.firestore,e.converter,Pi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class La extends lh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new La(e,t)}_apply(e){const t=function(n,s,a){if(n.startAt!==null)throw new N(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(n.endAt!==null)throw new N(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new nr(s,a)}(e._query,this._field,this._direction);return new Ht(e.firestore,e.converter,function(n,s){const a=n.explicitOrderBy.concat([s]);return new En(n.path,n.collectionGroup,a,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}(e._query,t))}}function Ay(r,e="asc"){const t=e,n=Ns("orderBy",r);return La._create(n,t)}function eu(r,e,t){if(typeof(t=xe(t))=="string"){if(t==="")throw new N(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!al(e)&&t.indexOf("/")!==-1)throw new N(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(X.fromString(t));if(!P.isDocumentKey(n))throw new N(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return gc(r,new P(n))}if(t instanceof ie)return gc(r,t._key);throw new N(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ms(t)}.`)}function tu(r,e){if(!Array.isArray(r)||r.length===0)throw new N(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hh(r,e){const t=function(n,s){for(const a of n)for(const o of a.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(r.filters,function(n){switch(n){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new N(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Cy{convertValue(e,t="none"){switch(St(e)){case 0:return null;case 1:return e.booleanValue;case 2:return se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(It(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return At(e,(s,a)=>{n[s]=this.convertValue(a,t)}),n}convertVectorValue(e){var t,n,s;const a=(s=(n=(t=e.fields)==null?void 0:t[Zr].arrayValue)==null?void 0:n.values)==null?void 0:s.map(o=>se(o.doubleValue));return new ze(a)}convertGeoPoint(e){return new qe(se(e.latitude),se(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=vs(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Zn(e));default:return null}}convertTimestamp(e){const t=Tt(e);return new Z(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=X.fromString(e);W(Cl(n),9688,{name:e});const s=new er(n.get(1),n.get(3)),a=new P(n.popFirst(5));return s.isEqual(t)||Ye(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
*/function dh(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class zn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mt extends uh{constructor(e,t,n,s,a,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ns("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(A.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Mt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()||(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),t}}Mt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mt._jsonSchema={type:ce("string",Mt._jsonSchemaVersion),bundleSource:ce("string","DocumentSnapshot"),bundleName:ce("string"),bundle:ce("string")};class zr extends Mt{data(e={}){return super.data(e)}}class rn{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new zn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new zr(this._firestore,this._userDataWriter,n.key,n,new zn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(n,s){if(n._snapshot.oldDocs.isEmpty()){let a=0;return n._snapshot.docChanges.map(o=>{const u=new zr(n._firestore,n._userDataWriter,o.doc.key,o.doc,new zn(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);return o.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const u=new zr(n._firestore,n._userDataWriter,o.doc.key,o.doc,new zn(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);let h=-1,d=-1;return o.type!==0&&(h=a.indexOf(o.doc.key),a=a.delete(o.doc.key)),o.type!==1&&(a=a.add(o.doc),d=a.indexOf(o.doc.key)),{type:ky(o.type),doc:u,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(A.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=rn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ea.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(a=>{a._document!==null&&(t.push(a._document),n.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ky(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}/**
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
*/function vi(r){r=Pe(r,ie);const e=Pe(r.firestore,Gt);return fy(xa(e),r._key).then(t=>Ny(e,r,t))}rn._jsonSchemaVersion="firestore/querySnapshot/1.0",rn._jsonSchema={type:ce("string",rn._jsonSchemaVersion),bundleSource:ce("string","QuerySnapshot"),bundleName:ce("string"),bundle:ce("string")};class fh extends Cy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Le(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ie(this.firestore,null,t)}}function Bn(r){r=Pe(r,Ht);const e=Pe(r.firestore,Gt),t=xa(e),n=new fh(e);return _y(r._query),py(t,r._query).then(s=>new rn(e,n,r,s))}function Dy(r,e,t){r=Pe(r,ie);const n=Pe(r.firestore,Gt),s=dh(r.converter,e,t);return Rs(n,[ih(ks(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Re.none())])}function wi(r,e,t,...n){r=Pe(r,ie);const s=Pe(r.firestore,Gt),a=ks(s);let o;return o=typeof(e=xe(e))=="string"||e instanceof Cs?Ty(a,"updateDoc",r._key,e,t,n):Ey(a,"updateDoc",r._key,e),Rs(s,[o.toMutation(r._key,Re.exists(!0))])}function bi(r){return Rs(Pe(r.firestore,Gt),[new ca(r._key,Re.none())])}function nu(r,e){const t=Pe(r.firestore,Gt),n=lt(r),s=dh(r.converter,e);return Rs(t,[ih(ks(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Re.exists(!1))]).then(()=>n)}function Rs(r,e){return function(t,n){const s=new Xe;return t.asyncQueue.enqueueAndForget(async()=>ty(await dy(t),n,s)),s.promise}(xa(r),e)}function Ny(r,e,t){const n=t.docs.get(e._key),s=new fh(r);return new Mt(r,s,e._key,n,new zn(t.hasPendingWrites,t.fromCache),e.converter)}(function(r,e=!0){(function(t){vn=t})(yn),cn(new Ft("firestore",(t,{instanceIdentifier:n,options:s})=>{const a=t.getProvider("app").getImmediate(),o=new Gt(new Tp(t.getProvider("auth-internal")),new xp(a,t.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new N(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new er(u.options.projectId,h)}(a,n),a);return s={useFetchStreams:e,...s},o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),vt(rc,sc,r),vt(rc,sc,"esm2020")})();const Ly=function(r,e,t){let n=Promise.resolve();function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return n.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return r().catch(s)})};var Ry="firebase",Oy="12.4.0";/**
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
*/vt(Ry,Oy,"app");function ph(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Py=ph,mh=new ar("auth","Firebase",ph());/**
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
*/const cs=new Xi("@firebase/auth");function My(r,...e){cs.logLevel<=$.WARN&&cs.warn(`Auth (${yn}): ${r}`,...e)}function Hr(r,...e){cs.logLevel<=$.ERROR&&cs.error(`Auth (${yn}): ${r}`,...e)}/**
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
*/function et(r,...e){throw Ra(r,...e)}function He(r,...e){return Ra(r,...e)}function gh(r,e,t){const n={...Py(),[e]:t};return new ar("auth","Firebase",n).create(e,{appName:r.name})}function Ut(r){return gh(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ra(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return mh.create(r,...e)}function U(r,e,...t){if(!r)throw Ra(e,...t)}function We(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Hr(e),new Error(e)}function tt(r,e){r||We(e)}/**
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
*/function Ki(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function Uy(){return ru()==="http:"||ru()==="https:"}function ru(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
*/function Vy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uy()||Yd()||"connection"in navigator)?navigator.onLine:!0}function Fy(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
*/class pr{constructor(e,t){this.shortDelay=e,this.longDelay=t,tt(t>e,"Short delay should be less than long delay!"),this.isMobile=Qd()||Zd()}get(){return Vy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function Oa(r,e){tt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
*/class yh{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;We("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;We("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;We("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const By={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
*/const jy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$y=new pr(3e4,6e4);function Pa(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function In(r,e,t,n,s={}){return vh(r,s,async()=>{let a={},o={};n&&(e==="GET"?o=n:a={body:JSON.stringify(n)});const u=or({key:r.config.apiKey,...o}).slice(1),h=await r._getAdditionalHeaders();h["Content-Type"]="application/json",r.languageCode&&(h["X-Firebase-Locale"]=r.languageCode);const d={method:e,headers:h,...a};return Jd()||(d.referrerPolicy="no-referrer"),r.emulatorConfig&&gn(r.emulatorConfig.host)&&(d.credentials="include"),yh.fetch()(await wh(r,r.config.apiHost,t,u),d)})}async function vh(r,e,t){r._canInitEmulator=!1;const n={...By,...e};try{const s=new zy(r),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw Vr(r,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const u=a.ok?o.errorMessage:o.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vr(r,"credential-already-in-use",o);if(h==="EMAIL_EXISTS")throw Vr(r,"email-already-in-use",o);if(h==="USER_DISABLED")throw Vr(r,"user-disabled",o);const p=n[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw gh(r,p,d);et(r,p)}}catch(s){if(s instanceof nt)throw s;et(r,"network-request-failed",{message:String(s)})}}async function qy(r,e,t,n,s={}){const a=await In(r,e,t,n,s);return"mfaPendingCredential"in a&&et(r,"multi-factor-auth-required",{_serverResponse:a}),a}async function wh(r,e,t,n){const s=`${e}${t}?${n}`,a=r,o=a.config.emulator?Oa(r.config,s):`${r.config.apiScheme}://${s}`;return jy.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(o).toString():o}class zy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(He(this.auth,"network-request-failed")),$y.get())})}}function Vr(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=He(r,e,n);return s.customData._tokenResponse=t,s}/**
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
*/async function Hy(r,e){return In(r,"POST","/v1/accounts:delete",e)}async function us(r,e){return In(r,"POST","/v1/accounts:lookup",e)}/**
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
*/function Xn(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gy(r,e=!1){const t=xe(r),n=await t.getIdToken(e),s=Ma(n);U(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:s,token:n,authTime:Xn(Ei(s.auth_time)),issuedAtTime:Xn(Ei(s.iat)),expirationTime:Xn(Ei(s.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Ei(r){return Number(r)*1e3}function Ma(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Hr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Tu(t);return s?JSON.parse(s):(Hr("Failed to decode base64 JWT payload"),null)}catch(s){return Hr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function su(r){const e=Ma(r);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
*/async function ir(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof nt&&Ky(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Ky({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
*/class Wy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const t=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/class Wi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xn(this.lastLoginAt),this.creationTime=Xn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function ls(r){var e;const t=r.auth,n=await r.getIdToken(),s=await ir(r,us(t,{idToken:n}));U(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];r._notifyReloadListener(a);const o=(e=a.providerUserInfo)!=null&&e.length?bh(a.providerUserInfo):[],u=Xy(r.providerData,o),h=r.isAnonymous,d=!(r.email&&a.passwordHash)&&!(u!=null&&u.length),p=h?d:!1,m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Wi(a.createdAt,a.lastLoginAt),isAnonymous:p};Object.assign(r,m)}async function Qy(r){const e=xe(r);await ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xy(r,e){return[...r.filter(t=>!e.some(n=>n.providerId===t.providerId)),...e]}function bh(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
*/async function Jy(r,e){const t=await vh(r,{},async()=>{const n=or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=r.config,o=await wh(r,s,"/v1/token",`key=${a}`),u=await r._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:u,body:n};return r.emulatorConfig&&gn(r.emulatorConfig.host)&&(h.credentials="include"),yh.fetch()(o,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Yy(r,e){return In(r,"POST","/v2/accounts:revokeToken",Pa(r,e))}/**
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
*/class sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):su(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=su(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:a}=await Jy(e,t);this.updateTokensAndExpiration(n,s,Number(a))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:a}=t,o=new sn;return n&&(U(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),a&&(U(typeof a=="number","internal-error",{appName:e}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sn,this.toJSON())}_performRefresh(){return We("not implemented")}}/**
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
*/function ut(r,e){U(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Oe{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new Wy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ir(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Gy(this,e)}reload(){return Qy(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Oe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ls(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Be(this.auth.app))return Promise.reject(Ut(this.auth));const e=await this.getIdToken();return await ir(this,Hy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,a=t.phoneNumber??void 0,o=t.photoURL??void 0,u=t.tenantId??void 0,h=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:S,isAnonymous:_,providerData:k,stsTokenManager:R}=t;U(m&&R,e,"internal-error");const L=sn.fromJSON(this.name,R);U(typeof m=="string",e,"internal-error"),ut(n,e.name),ut(s,e.name),U(typeof S=="boolean",e,"internal-error"),U(typeof _=="boolean",e,"internal-error"),ut(a,e.name),ut(o,e.name),ut(u,e.name),ut(h,e.name),ut(d,e.name),ut(p,e.name);const B=new Oe({uid:m,auth:e,email:s,emailVerified:S,displayName:n,isAnonymous:_,photoURL:o,phoneNumber:a,tenantId:u,stsTokenManager:L,createdAt:d,lastLoginAt:p});return k&&Array.isArray(k)&&(B.providerData=k.map(H=>({...H}))),h&&(B._redirectEventId=h),B}static async _fromIdTokenResponse(e,t,n=!1){const s=new sn;s.updateFromServerResponse(t);const a=new Oe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await ls(a),a}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];U(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?bh(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),u=new sn;u.updateFromIdToken(n);const h=new Oe({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Wi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(h,d),h}}/**
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
*/const iu=new Map;function Qe(r){tt(r instanceof Function,"Expected a class definition");let e=iu.get(r);return e?(tt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,iu.set(r,e),e)}/**
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
*/class Eh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Eh.type="NONE";const au=Eh;/**
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
*/function Gr(r,e,t){return`firebase:${r}:${e}:${t}`}class an{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:a}=this.auth;this.fullUserKey=Gr(this.userKey,s.apiKey,a),this.fullPersistenceKey=Gr("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await us(this.auth,{idToken:e}).catch(()=>{});return t?Oe._fromGetAccountInfoResponse(this.auth,t,e):null}return Oe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new an(Qe(au),e,n);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let a=s[0]||Qe(au);const o=Gr(n,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(o);if(p){let m;if(typeof p=="string"){const S=await us(e,{idToken:p}).catch(()=>{});if(!S)break;m=await Oe._fromGetAccountInfoResponse(e,S,p)}else m=Oe._fromJSON(e,p);d!==a&&(u=m),a=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new an(a,e,n):(a=h[0],u&&await a._set(o,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==a)try{await d._remove(o)}catch{}})),new an(a,e,n))}}/**
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
*/function ou(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Th(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ah(e))return"Blackberry";if(Ch(e))return"Webos";if(Ih(e))return"Safari";if((e.includes("chrome/")||Sh(e))&&!e.includes("edge/"))return"Chrome";if(_h(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Th(r=Te()){return/firefox\//i.test(r)}function Ih(r=Te()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sh(r=Te()){return/crios\//i.test(r)}function xh(r=Te()){return/iemobile/i.test(r)}function _h(r=Te()){return/android/i.test(r)}function Ah(r=Te()){return/blackberry/i.test(r)}function Ch(r=Te()){return/webos/i.test(r)}function Ua(r=Te()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Zy(r=Te()){var e;return Ua(r)&&!!((e=window.navigator)!=null&&e.standalone)}function ev(){return ef()&&document.documentMode===10}function kh(r=Te()){return Ua(r)||_h(r)||Ch(r)||Ah(r)||/windows phone/i.test(r)||xh(r)}/**
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
*/function Dh(r,e=[]){let t;switch(r){case"Browser":t=ou(Te());break;case"Worker":t=`${ou(Te())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yn}/${n}`}/**
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
*/class tv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=a=>new Promise((o,u)=>{try{const h=e(a);o(h)}catch(h){u(h)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
*/async function nv(r,e={}){return In(r,"GET","/v2/passwordPolicy",Pa(r,e))}/**
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
*/const rv=6;class sv{constructor(e){var t;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??rv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((t=e.allowedNonAlphanumericCharacters)==null?void 0:t.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
*/class iv{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cu(this),this.idTokenSubscription=new cu(this),this.beforeStateQueue=new tv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qe(t)),this._initializationPromise=this.queue(async()=>{var n,s,a;if(!this._deleted&&(this.persistenceManager=await an.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await us(this,{idToken:e}),n=await Oe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Be(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)==null?void 0:t._redirectEventId,u=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!o||o===u)&&h!=null&&h.user&&(s=h.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ls(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Be(this.app))return Promise.reject(Ut(this));const t=e?xe(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Be(this.app)?Promise.reject(Ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Be(this.app)?Promise.reject(Ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nv(this),t=new sv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Yy(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qe(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await an.create(this,[Qe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let o=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(u,this,"internal-error"),u.then(()=>{o||a(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,n,s);return()=>{o=!0,h()}}else{const h=e.addObserver(t);return()=>{o=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&My(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Va(r){return xe(r)}class cu{constructor(e){this.auth=e,this.observer=null,this.addObserver=uf(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/let Fa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function av(r){Fa=r}function ov(r){return Fa.loadJS(r)}function cv(){return Fa.gapiScript}function uv(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
*/function lv(r,e){const t=Yi(r,"auth");if(t.isInitialized()){const n=t.getImmediate(),s=t.getOptions();if(Vt(s,e??{}))return n;et(n,"already-initialized")}return t.initialize({options:e})}function hv(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Qe);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function dv(r,e,t){const n=Va(r);U(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,a=Nh(e),{host:o,port:u}=fv(e),h=u===null?"":`:${u}`,d={url:`${a}//${o}${h}/`},p=Object.freeze({host:o,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){U(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),U(Vt(d,n.config.emulator)&&Vt(p,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=p,n.settings.appVerificationDisabledForTesting=!0,gn(o)?(_u(`${a}//${o}${h}`),Au("Auth",!0)):pv()}function Nh(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function fv(r){const e=Nh(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const a=s[1];return{host:a,port:uu(n.substr(a.length+1))}}else{const[a,o]=n.split(":");return{host:a,port:uu(o)}}}function uu(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function pv(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
*/class Lh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return We("not implemented")}_getIdTokenResponse(e){return We("not implemented")}_linkToIdToken(e,t){return We("not implemented")}_getReauthenticationResolver(e){return We("not implemented")}}/**
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
*/async function on(r,e){return qy(r,"POST","/v1/accounts:signInWithIdp",Pa(r,e))}/**
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
*/const mv="http://localhost";class $t extends Lh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...a}=t;if(!n||!s)return null;const o=new $t(n,s);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return on(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,on(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,on(e,t)}buildRequest(){const e={requestUri:mv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=or(t)}return e}}/**
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
*/class mr extends Rh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
*/class ht extends mr{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
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
*/class dt extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return dt.credential(t,n)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
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
*/class ft extends mr{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
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
*/class pt extends mr{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return pt.credential(t,n)}catch{return null}}}pt.TWITTER_SIGN_IN_METHOD="twitter.com";pt.PROVIDER_ID="twitter.com";/**
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
*/class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const a=await Oe._fromIdTokenResponse(e,n,s),o=lu(n);return new mn({user:a,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=lu(n);return new mn({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function lu(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
*/class hs extends nt{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,hs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new hs(e,t,n,s)}}function Oh(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hs._fromErrorAndOperation(r,s,e,n):s})}async function gv(r,e,t=!1){const n=await ir(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return mn._forOperation(r,"link",n)}/**
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
*/async function yv(r,e,t=!1){const{auth:n}=r;if(Be(n.app))return Promise.reject(Ut(n));const s="reauthenticate";try{const a=await ir(r,Oh(n,s,e,r),t);U(a.idToken,n,"internal-error");const o=Ma(a.idToken);U(o,n,"internal-error");const{sub:u}=o;return U(r.uid===u,n,"user-mismatch"),mn._forOperation(r,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&et(n,"user-mismatch"),a}}/**
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
*/async function vv(r,e,t=!1){if(Be(r.app))return Promise.reject(Ut(r));const n="signIn",s=await Oh(r,n,e),a=await mn._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(a.user),a}function wv(r,e,t,n){return xe(r).onIdTokenChanged(e,t,n)}function bv(r,e,t){return xe(r).beforeAuthStateChanged(e,t)}const ds="__sak";/**
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
*/class Ph{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ds,"1"),this.storage.removeItem(ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/const Ev=1e3,Tv=10;class Mh extends Ph{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,u,h)=>{this.notifyListeners(o,h)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},a=this.storage.getItem(n);ev()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Tv):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Ev)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mh.type="LOCAL";const Iv=Mh;/**
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
*/class Uh extends Ph{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Uh.type="SESSION";const Vh=Uh;/**
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
*/function Sv(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
*/class Os{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Os(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:a}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const u=Array.from(o).map(async d=>d(t.origin,a)),h=await Sv(u);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Os.receivers=[];/**
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
*/function Ba(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
*/class xv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,o;return new Promise((u,h)=>{const d=Ba("",20);s.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(m){const S=m;if(S.data.eventId===d)switch(S.data.status){case"ack":clearTimeout(p),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(S.data.response);break;default:clearTimeout(p),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
*/function Ge(){return window}function _v(r){Ge().location.href=r}/**
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
*/function Fh(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function Av(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cv(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function kv(){return Fh()?self:null}/**
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
*/const Bh="firebaseLocalStorageDb",Dv=1,fs="firebaseLocalStorage",jh="fbase_key";class gr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ps(r,e){return r.transaction([fs],e?"readwrite":"readonly").objectStore(fs)}function Nv(){const r=indexedDB.deleteDatabase(Bh);return new gr(r).toPromise()}function Qi(){const r=indexedDB.open(Bh,Dv);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(fs,{keyPath:jh})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(fs)?e(n):(n.close(),await Nv(),e(await Qi()))})})}async function hu(r,e,t){const n=Ps(r,!0).put({[jh]:e,value:t});return new gr(n).toPromise()}async function Lv(r,e){const t=Ps(r,!1).get(e),n=await new gr(t).toPromise();return n===void 0?null:n.value}function du(r,e){const t=Ps(r,!0).delete(e);return new gr(t).toPromise()}const Rv=800,Ov=3;class $h{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Ov)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Os._getInstance(kv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Av(),!this.activeServiceWorker)return;this.sender=new xv(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(e=n[0])!=null&&e.fulfilled&&(t=n[0])!=null&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qi();return await hu(e,ds,"1"),await du(e,ds),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>hu(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Lv(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>du(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Ps(s,!1).getAll();return new gr(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$h.type="LOCAL";const Pv=$h;new pr(3e4,6e4);/**
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
*/function Mv(r,e){return e?Qe(e):(U(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
*/class ja extends Lh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return on(e,this._buildIdpRequest())}_linkToIdToken(e,t){return on(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return on(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Uv(r){return vv(r.auth,new ja(r),r.bypassAuthState)}function Vv(r){const{auth:e,user:t}=r;return U(t,e,"internal-error"),yv(t,new ja(r),r.bypassAuthState)}async function Fv(r){const{auth:e,user:t}=r;return U(t,e,"internal-error"),gv(t,new ja(r),r.bypassAuthState)}/**
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
*/class qh{constructor(e,t,n,s,a=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:a,error:o,type:u}=e;if(o){this.reject(o);return}const h={auth:this.auth,requestUri:t,sessionId:n,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uv;case"linkViaPopup":case"linkViaRedirect":return Fv;case"reauthViaPopup":case"reauthViaRedirect":return Vv;default:et(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const Bv=new pr(2e3,1e4);class tn extends qh{constructor(e,t,n,s,a){super(e,t,s,a),this.provider=n,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=Ba();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bv.get())};e()}}tn.currentPopupAction=null;/**
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
*/const jv="pendingRedirect",Kr=new Map;class $v extends qh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Kr.get(this.auth._key());if(!e){try{const t=await qv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Kr.set(this.auth._key(),e)}return this.bypassAuthState||Kr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qv(r,e){const t=Gv(e),n=Hv(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function zv(r,e){Kr.set(r._key(),e)}function Hv(r){return Qe(r._redirectPersistence)}function Gv(r){return Gr(jv,r.config.apiKey,r.name)}async function Kv(r,e,t=!1){if(Be(r.app))return Promise.reject(Ut(r));const n=Va(r),s=Mv(n,e),a=await new $v(n,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
*/const Wv=10*60*1e3;class Qv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!zh(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(He(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wv&&this.cachedEventUids.clear(),this.cachedEventUids.has(fu(e))}saveEventToCache(e){this.cachedEventUids.add(fu(e)),this.lastProcessedEventTime=Date.now()}}function fu(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function zh({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xv(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zh(r);default:return!1}}/**
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
*/async function Jv(r,e={}){return In(r,"GET","/v1/projects",e)}/**
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
*/const Yv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zv=/^https?/;async function ew(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Jv(r);for(const t of e)try{if(tw(t))return}catch{}et(r,"unauthorized-domain")}function tw(r){const e=Ki(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Zv.test(t))return!1;if(Yv.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
*/const nw=new pr(3e4,6e4);function pu(){const r=Ge().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function rw(r){return new Promise((e,t)=>{var n,s,a;function o(){pu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pu(),t(He(r,"network-request-failed"))},timeout:nw.get()})}if((s=(n=Ge().gapi)==null?void 0:n.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((a=Ge().gapi)!=null&&a.load)o();else{const u=uv("iframefcb");return Ge()[u]=()=>{gapi.load?o():t(He(r,"network-request-failed"))},ov(`${cv()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw Wr=null,e})}let Wr=null;function sw(r){return Wr=Wr||rw(r),Wr}/**
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
*/const iw=new pr(5e3,15e3),aw="__/auth/iframe",ow="emulator/auth/iframe",cw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lw(r){const e=r.config;U(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Oa(e,ow):`https://${r.config.authDomain}/${aw}`,n={apiKey:e.apiKey,appName:r.name,v:yn},s=uw.get(r.config.apiHost);s&&(n.eid=s);const a=r._getFrameworks();return a.length&&(n.fw=a.join(",")),`${t}?${or(n).slice(1)}`}async function hw(r){const e=await sw(r),t=Ge().gapi;return U(t,r,"internal-error"),e.open({where:document.body,url:lw(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cw,dontclear:!0},n=>new Promise(async(s,a)=>{await n.restyle({setHideOnLeave:!1});const o=He(r,"network-request-failed"),u=Ge().setTimeout(()=>{a(o)},iw.get());function h(){Ge().clearTimeout(u),s(n)}n.ping(h).then(h,()=>{a(o)})}))}/**
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
*/const dw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fw=500,pw=600,mw="_blank",gw="http://localhost";class mu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yw(r,e,t,n=fw,s=pw){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const h={...dw,width:n.toString(),height:s.toString(),top:a,left:o},d=Te().toLowerCase();t&&(u=Sh(d)?mw:t),Th(d)&&(e=e||gw,h.scrollbars="yes");const p=Object.entries(h).reduce((S,[_,k])=>`${S}${_}=${k},`,"");if(Zy(d)&&u!=="_self")return vw(e||"",u),new mu(null);const m=window.open(e||"",u,p);U(m,r,"popup-blocked");try{m.focus()}catch{}return new mu(m)}function vw(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
*/const ww="__/auth/handler",bw="emulator/auth/handler",Ew=encodeURIComponent("fac");async function gu(r,e,t,n,s,a){U(r.config.authDomain,r,"auth-domain-config-required"),U(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:yn,eventId:s};if(e instanceof Rh){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",cf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof mr){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}r.tenantId&&(o.tid=r.tenantId);const u=o;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const h=await r._getAppCheckToken(),d=h?`#${Ew}=${encodeURIComponent(h)}`:"";return`${Tw(r)}?${or(u).slice(1)}${d}`}function Tw({config:r}){return r.emulator?Oa(r,bw):`https://${r.authDomain}/${ww}`}/**
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
*/const Ti="webStorageSupport";class Iw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vh,this._completeRedirectFn=Kv,this._overrideRedirectResult=zv}async _openPopup(e,t,n,s){var a;tt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await gu(e,t,n,Ki(),s);return yw(e,o,Ba())}async _openRedirect(e,t,n,s){await this._originValidation(e);const a=await gu(e,t,n,Ki(),s);return _v(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(tt(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await hw(e),n=new Qv(e);return t.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ti,{type:Ti},n=>{var s;const a=(s=n==null?void 0:n[0])==null?void 0:s[Ti];a!==void 0&&t(!!a),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ew(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kh()||Ih()||Ua()}}const Sw=Iw;var yu="@firebase/auth",vu="1.11.0";/**
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
*/class xw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function _w(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Aw(r){cn(new Ft("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:u}=n.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const h={apiKey:o,authDomain:u,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dh(r)},d=new iv(n,s,a,h);return hv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),cn(new Ft("auth-internal",e=>{const t=Va(e.getProvider("auth").getImmediate());return(n=>new xw(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vt(yu,vu,_w(r)),vt(yu,vu,"esm2020")}/**
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
*/const Cw=5*60,kw=xu("authIdTokenMaxAge")||Cw;let wu=null;const Dw=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>kw)return;const s=t==null?void 0:t.token;wu!==s&&(wu=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Nw(r=Nu()){const e=Yi(r,"auth");if(e.isInitialized())return e.getImmediate();const t=lv(r,{popupRedirectResolver:Sw,persistence:[Pv,Iv,Vh]}),n=xu("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(n,location.origin);if(location.origin===a.origin){const o=Dw(a.toString());bv(t,o,()=>o(t.currentUser)),wv(t,u=>o(u))}}const s=Iu("auth");return s&&dv(t,`http://${s}`),t}function Lw(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}av({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const a=He("internal-error");a.customData=s,t(a)},n.type="text/javascript",n.charset="UTF-8",Lw().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Aw("Browser");const Hh={apiKey:"AIzaSyAYy5QZzuXAoTGu2NVO6wAx1Q3tXMqO8SI",authDomain:"splitwiseclone-d9135.firebaseapp.com",projectId:"splitwiseclone-d9135",storageBucket:"splitwiseclone-d9135.firebasestorage.app",messagingSenderId:"1067457595825",appId:"1:1067457595825:web:54d33ba82260f11ef39590"},Gh=Du(Hh),Ii=gy(Gh);Nw(Gh);Hh.projectId;Ly(()=>Promise.resolve().then(()=>Rw));class Kh{constructor(){K(this,"usersCollection",gi(Ii,"user")),K(this,"expensesCollection",gi(Ii,"expenses")),K(this,"settlementsCollection",gi(Ii,"settlements"))}async getUsers(){try{return(await Bn(this.usersCollection)).docs.map(e=>{var t;const n=e.data();return{id:e.id,name:n.name,username:n.username,avatar:n.avatar,role:n.isAdmin===!0?"admin":n.role||"user",createdAt:((t=n.createdAt)==null?void 0:t.toDate())||new Date,isActive:n.isActive===!0}})}catch(e){throw e}}async getUserByUsername(e){var t;try{const n=yi(this.usersCollection,Zc("username","==",e)),s=await Bn(n);if(s.empty)return null;const a=s.docs[0],o=a.data();return o.isActive===!1&&alert("🔥 FIREBASE RAW DATA SHOWS isActive = FALSE for user: "+o.username),{id:a.id,name:o.name,username:o.username,avatar:o.avatar,role:o.isAdmin===!0?"admin":o.role||"user",createdAt:((t=o.createdAt)==null?void 0:t.toDate())||new Date,isActive:o.isActive===!0,password:o.password}}catch(n){throw n}}async createUser(e){try{return{id:(await nu(this.usersCollection,{...e,createdAt:new Date})).id,...e,createdAt:new Date}}catch(t){throw t}}async updateUser(e,t){var n,s;try{const a=lt(this.usersCollection,e);await wi(a,t);const o=await vi(a);return{id:o.id,...o.data(),createdAt:((s=(n=o.data())==null?void 0:n.createdAt)==null?void 0:s.toDate())||new Date}}catch(a){throw a}}async deleteUser(e){try{const t=lt(this.usersCollection,e);await bi(t)}catch(t){throw t}}async getExpenses(){try{const e=yi(this.expensesCollection,Ay("date","desc"));return(await Bn(e)).docs.map(t=>{var n;return{id:t.id,...t.data(),date:((n=t.data().date)==null?void 0:n.toDate())||new Date}})}catch(e){throw e}}async createExpense(e){try{const t={description:e.description||"Expense",amount:e.amount||0,currency:e.currency||"VND",paidBy:e.paidBy||"",splitBetween:Array.isArray(e.splitBetween)?e.splitBetween:[],splitType:e.splitType||"equal",category:e.category||"other",date:new Date(e.date)};return Object.keys(t).forEach(n=>{t[n]===void 0&&delete t[n]}),{id:(await nu(this.expensesCollection,t)).id,...e}}catch(t){throw t}}async deleteExpense(e){let t;for(let n=1;n<=3;n++)try{const s=lt(this.expensesCollection,e);if(!(await vi(s)).exists())return;await bi(s);return}catch(s){t=s,n<3&&await new Promise(a=>setTimeout(a,n*1e3))}throw t}async updateExpense(e,t){try{const n=lt(this.expensesCollection,e),s={description:t.description,amount:t.amount,currency:t.currency,paidBy:t.paidBy,splitBetween:t.splitBetween,category:t.category,date:t.date,splitType:t.splitType};await wi(n,s)}catch(n){throw n}}async authenticateUser(e,t){var n;try{const s=yi(this.usersCollection,Zc("username","==",e)),a=await Bn(s);if(a.empty)return null;const o=a.docs[0],u=o.data();if(u.password!==t)return null;if(u.isActive!==!0)throw alert("🚫 TÀI KHOẢN BỊ VÔ HIỆU HÓA - Firebase data: "+u.isActive),new Error("Tài khoản đã bị vô hiệu hóa. Vui lòng liên hệ quản trị viên.");const h={id:o.id,name:u.name,username:u.username,avatar:u.avatar,role:u.isAdmin===!0?"admin":"user",createdAt:((n=u.createdAt)==null?void 0:n.toDate())||new Date,isActive:u.isActive};if(h.isActive!==!0)throw alert("🚨 PARANOID: Blocking return of inactive user: "+h.isActive),new Error("PARANOID CHECK: Cannot return inactive user");return h}catch(s){throw s}}async saveSettlement(e){try{const t={from:e.from,to:e.to,amount:e.amount,description:e.description||"",isSettled:e.isSettled,settledAt:e.settledAt||null,settledBy:e.settledBy||null,createdAt:e.createdAt,relatedExpenses:e.relatedExpenses||[]},n=lt(this.settlementsCollection,e.id);await Dy(n,t,{merge:!0}),(await vi(n)).exists()}catch(t){throw t}}async getSettlements(){try{return(await Bn(this.settlementsCollection)).docs.map(e=>{var t,n;const s=e.data();return{id:e.id,from:s.from,to:s.to,amount:s.amount,description:s.description||"",isSettled:s.isSettled||!1,settledAt:((t=s.settledAt)==null?void 0:t.toDate())||null,settledBy:s.settledBy||null,createdAt:((n=s.createdAt)==null?void 0:n.toDate())||new Date,relatedExpenses:s.relatedExpenses||[]}})}catch(e){throw e}}async updateSettlementStatus(e,t){try{const n=lt(this.settlementsCollection,e),s={isSettled:t};t?s.settledAt=new Date:s.settledAt=null,await wi(n,s)}catch(n){throw n}}async deleteSettlement(e){try{const t=lt(this.settlementsCollection,e);await bi(t)}catch(t){throw t}}}const Ce=new Kh,Rw=Object.freeze(Object.defineProperty({__proto__:null,FirebaseService:Kh,firebaseService:Ce},Symbol.toStringTag,{value:"Module"}));class Ow{constructor(){}async login(e){try{const t=await Ce.getUserByUsername(e.username);if(t&&t.isActive!==!0)throw window.NUCLEAR_BLOCKED_AT_START=!0,alert("🚫 NUCLEAR BLOCK: User inactive at start - "+t.isActive),new Error("User blocked at login start - isActive: "+t.isActive);const n=await Ce.authenticateUser(e.username,e.password);if(!n)throw new Error("Invalid credentials");if(window.LAST_LOGIN_ATTEMPT={username:e.username,isActive:n.isActive,timestamp:Date.now()},n.isActive!==!0)throw window.BLOCKED_BY_AUTHSERVICE=!0,alert("🚫 AUTHSERVICE BLOCK: isActive = "+n.isActive),new Error("Tài khoản đã bị vô hiệu hóa trong AuthService.");const s={isAuthenticated:!0,currentUser:{id:n.id,name:n.name,username:n.username,role:n.isAdmin===!0?"admin":n.role||"user",createdAt:new Date(n.createdAt||Date.now()),isActive:n.isActive,avatar:n.avatar},token:this.generateToken()};if(n.isActive!==!0)throw window.FINAL_FAILSAFE_TRIGGERED=!0,alert("🚨 FINAL FAIL-SAFE: Blocking login with isActive = "+n.isActive),new Error("FINAL FAIL-SAFE: User not active in final auth state.");const a={isAuthenticated:!0,token:s.token,currentUser:{id:s.currentUser.id,username:s.currentUser.username,name:s.currentUser.name,role:s.currentUser.role,avatar:s.currentUser.avatar,createdAt:s.currentUser.createdAt}};return localStorage.setItem("splitwise_auth",JSON.stringify(a)),s}catch(t){throw new Error(t instanceof Error?t.message:"Login failed")}}logout(){localStorage.removeItem("splitwise_auth")}getCurrentAuth(){try{const e=localStorage.getItem("splitwise_auth");if(e){const t=JSON.parse(e);if(t.isAuthenticated&&t.currentUser)return{isAuthenticated:!0,currentUser:{id:t.currentUser.id,username:t.currentUser.username,name:t.currentUser.name,role:t.currentUser.role,avatar:t.currentUser.avatar,createdAt:t.currentUser.createdAt?new Date(t.currentUser.createdAt):new Date,isActive:!0},token:t.token}}}catch(e){console.error("Failed to parse stored auth state:",e),localStorage.removeItem("splitwise_auth")}return{isAuthenticated:!1,currentUser:null}}async createUser(e){try{const t=await Ce.createUser({name:e.name,username:e.username,role:"user",isActive:!0,createdAt:new Date,password:e.password,isAdmin:!1});return{id:t.id,name:t.name,username:t.username,role:"user",createdAt:t.createdAt,isActive:!0}}catch(t){throw new Error(t instanceof Error?t.message:"Failed to create user in Firebase")}}async getAllUsers(){try{return(await Ce.getUsers()).map(e=>({...e,role:e.isAdmin?"admin":"user"}))}catch(e){throw e}}async updateUser(e,t){try{const n={...t,isAdmin:t.role==="admin"};return delete n.role,await Ce.updateUser(e,n)}catch(n){throw new Error(n instanceof Error?n.message:"Failed to update user")}}async deleteUser(e){try{await Ce.deleteUser(e)}catch(t){throw new Error(t instanceof Error?t.message:"Failed to delete user from Firebase")}}generateToken(){return`token_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}isTokenValid(e){if(!e||!e.startsWith("token_"))return!1;try{const t=parseInt(e.split("_")[1]);return Date.now()-t<864e5}catch{return!1}}async validateSession(){const e=this.getCurrentAuth();if(!e.isAuthenticated||!e.currentUser||!e.token)return!1;if(!this.isTokenValid(e.token))return this.logout(),!1;try{const t=await Ce.getUserByUsername(e.currentUser.username);if(!t||!t.isActive)return this.logout(),!1}catch(t){return console.error("Session validation failed:",t),this.logout(),!1}return!0}isAdmin(e){return(e==null?void 0:e.role)==="admin"}}document.title="Splitwise Clone v5.0.0-NO-DELETE";window.NUCLEAR_VERSION="v5.0.0-NO-DELETE";class Pw{constructor(){K(this,"users",[]),K(this,"expenses",[]),K(this,"settlements",[]),K(this,"currentUser",null),K(this,"addExpenseModal"),K(this,"authService"),K(this,"currentFilter",""),K(this,"currentDateFilter","last7days"),K(this,"customStartDate",null),K(this,"customEndDate",null),this.authService=new Ow,this.initializeAuth()}async initializeAuth(){const e=this.authService.getCurrentAuth();e.isAuthenticated&&e.currentUser&&(await this.authService.validateSession()?(this.currentUser=e.currentUser,await this.initializeData()):this.currentUser=null),this.addExpenseModal=new Lr(this.users,this.currentUser,t=>this.addExpense(t)),this.render(),this.setupEventListeners(),window.editUser=t=>this.editUser(t),window.confirmSettlement=t=>{this.confirmSettlement(t).catch(n=>{alert("❌ Lỗi khi xác nhận thanh toán: "+(n instanceof Error?n.message:n))})},window.confirmMultipleSettlements=t=>{this.confirmMultipleSettlements(t).catch(n=>{alert("❌ Lỗi khi xác nhận thanh toán: "+(n instanceof Error?n.message:n))})}}async initializeData(){try{this.users=await this.authService.getAllUsers(),this.users=this.users.filter(e=>e.isActive),this.expenses=await this.loadExpenses(),this.settlements=await this.loadSettlements()}catch(e){throw e}}async loadExpenses(){try{return await Ce.getExpenses()}catch(e){throw e}}async loadSettlements(){try{return await Ce.getSettlements()}catch{return[]}}render(){const e=document.getElementById("app");if(!this.currentUser){e.innerHTML=this.renderLoginScreen();return}e.innerHTML=`
      <div class="min-h-screen bg-gray-50">
        <!-- Header -->
        <header class="bg-white shadow-sm border-b sticky top-0 z-40">
          <div class="max-w-6xl mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <h1 class="text-3xl font-bold text-splitwise-green">💰 Splitwise Clone</h1>
                <span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                  No Delete v1.0
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
                  <div class="flex flex-col sm:flex-row gap-3">
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
                      
                      <select id="filterDate" class="input-field w-auto text-sm">
                        <option value="all">📅 Tất cả thời gian</option>
                        <option value="today">📆 Hôm nay</option>
                        <option value="yesterday">📆 Hôm qua</option>
                        <option value="last7days" selected>📅 7 ngày gần nhất</option>
                        <option value="last30days">📅 30 ngày gần nhất</option>
                        <option value="thisMonth">📅 Tháng này</option>
                        <option value="lastMonth">📅 Tháng trước</option>
                        <option value="custom">📅 Tùy chỉnh</option>
                      </select>
                    </div>
                    
                    <div id="customDateRange" class="flex items-center space-x-2 ${this.currentDateFilter==="custom"?"":"hidden"}">
                      <input type="date" id="startDate" class="input-field w-auto text-sm" placeholder="Từ ngày">
                      <span class="text-gray-500">đến</span>
                      <input type="date" id="endDate" class="input-field w-auto text-sm" placeholder="Đến ngày">
                    </div>
                    
                    <button id="clearAllFilters" class="text-sm text-gray-500 hover:text-gray-700 ${this.currentFilter||this.currentDateFilter!=="last7days"?"":"hidden"}">
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
            <p class="text-sm text-blue-600 mt-2">✨ Tính năng xóa đã bị gỡ bỏ để bảo vệ dữ liệu</p>
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
            <p>🛡️ Dữ liệu được bảo vệ - không thể xóa</p>
          </div>
        </div>
      </div>
    `}renderStatsCards(){if(!this.currentUser)return"";const e=this.expenses.reduce((a,o)=>a+o.amount,0),t=this.expenses.filter(a=>a.paidBy===this.currentUser.id).reduce((a,o)=>a+o.amount,0),n=zo(this.expenses,this.users)[this.currentUser.id],s=n?n.totalOwed-n.totalOwes:0;return`
      <div class="card text-center">
        <div class="text-2xl mb-2">💰</div>
        <div class="text-2xl font-bold text-gray-800">${he(e)}</div>
        <div class="text-sm text-gray-600">Tổng chi phí</div>
      </div>
      
      <div class="card text-center">
        <div class="text-2xl mb-2">🎯</div>
        <div class="text-2xl font-bold text-gray-800">${he(t)}</div>
        <div class="text-sm text-gray-600">Bạn đã trả</div>
      </div>
      
      <div class="card text-center">
        <div class="text-2xl mb-2">${s>=0?"💚":"💔"}</div>
        <div class="text-2xl font-bold ${s>=0?"text-green-600":"text-red-600"}">
          ${s>=0?"+":""}${he(s)}
        </div>
        <div class="text-sm text-gray-600">Số dư của bạn</div>
      </div>
    `}renderBalanceSection(){if(!this.currentUser)return"";const e=this.calculateBalancesWithSettlements(),t=e[this.currentUser.id];return t?new Ld(t,this.users,e).render():`
        <div class="card text-center py-8">
          <div class="text-4xl mb-4">🎉</div>
          <h2 class="text-xl font-semibold mb-2">Chưa có giao dịch nào</h2>
          <p class="text-gray-500">Thêm chi phí đầu tiên để bắt đầu!</p>
        </div>
      `}renderSettlementSection(){return new Rd(this.users,this.settlements,this.currentUser).render()}renderExpensesList(){const e=this.getFilteredExpenses();return e.length===0?`
        <div class="text-center py-12">
          <div class="text-4xl mb-4">📝</div>
          <h3 class="text-lg font-medium text-gray-800 mb-2">
            ${this.getEmptyStateTitle()}
          </h3>
          <p class="text-gray-500 mb-4">
            ${this.getEmptyStateDescription()}
          </p>
          <button onclick="document.getElementById('addExpenseBtn').click()" class="btn-primary">
            ➕ Thêm chi phí ngay
          </button>
        </div>
      `:e.map(t=>new Nd(t,this.users,this.currentUser).render()).join("")}getFilteredExpenses(){let e=[...this.expenses];return this.currentFilter&&(e=e.filter(t=>t.category===this.currentFilter)),e=this.filterByDate(e),e}filterByDate(e){const t=new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate());switch(this.currentDateFilter){case"all":return e;case"today":return e.filter(_=>{const k=new Date(_.date);return new Date(k.getFullYear(),k.getMonth(),k.getDate()).getTime()===n.getTime()});case"yesterday":const s=new Date(n);return s.setDate(s.getDate()-1),e.filter(_=>{const k=new Date(_.date);return new Date(k.getFullYear(),k.getMonth(),k.getDate()).getTime()===s.getTime()});case"last7days":const a=new Date(n);return a.setDate(a.getDate()-7),e.filter(_=>{const k=new Date(_.date);return k>=a&&k<=t});case"last30days":const o=new Date(n);return o.setDate(o.getDate()-30),e.filter(_=>{const k=new Date(_.date);return k>=o&&k<=t});case"thisMonth":const u=new Date(t.getFullYear(),t.getMonth(),1),h=new Date(t.getFullYear(),t.getMonth()+1,0,23,59,59);return e.filter(_=>{const k=new Date(_.date);return k>=u&&k<=h});case"lastMonth":const d=new Date(t.getFullYear(),t.getMonth()-1,1),p=new Date(t.getFullYear(),t.getMonth(),0,23,59,59);return e.filter(_=>{const k=new Date(_.date);return k>=d&&k<=p});case"custom":if(!this.customStartDate||!this.customEndDate)return e;const m=new Date(this.customStartDate),S=new Date(this.customEndDate);return S.setHours(23,59,59,999),e.filter(_=>{const k=new Date(_.date);return k>=m&&k<=S});default:return e}}setupEventListeners(){var e,t,n,s,a,o,u,h,d;(e=document.getElementById("showLoginBtn"))==null||e.addEventListener("click",()=>{this.showLoginModal()}),(t=document.getElementById("logoutBtn"))==null||t.addEventListener("click",()=>{this.logout()}),(n=document.getElementById("userManagementBtn"))==null||n.addEventListener("click",()=>{this.showUserManagementModal()}),(s=document.getElementById("addExpenseBtn"))==null||s.addEventListener("click",()=>{this.addExpenseModal.show()}),(a=document.getElementById("filterCategory"))==null||a.addEventListener("change",p=>{this.currentFilter=p.target.value,this.updateExpensesList(),this.updateFilterControls()}),(o=document.getElementById("filterDate"))==null||o.addEventListener("change",p=>{this.currentDateFilter=p.target.value,this.updateExpensesList(),this.updateFilterControls(),this.toggleCustomDateRange()}),(u=document.getElementById("startDate"))==null||u.addEventListener("change",p=>{this.customStartDate=p.target.value,this.updateExpensesList()}),(h=document.getElementById("endDate"))==null||h.addEventListener("change",p=>{this.customEndDate=p.target.value,this.updateExpensesList()}),(d=document.getElementById("clearAllFilters"))==null||d.addEventListener("click",()=>{this.currentFilter="",this.currentDateFilter="last7days",this.customStartDate=null,this.customEndDate=null;const p=document.getElementById("filterCategory"),m=document.getElementById("filterDate"),S=document.getElementById("startDate"),_=document.getElementById("endDate");p&&(p.value=""),m&&(m.value="last7days"),S&&(S.value=""),_&&(_.value=""),this.updateExpensesList(),this.updateFilterControls(),this.toggleCustomDateRange()})}async addExpense(e){try{const t=await Ce.createExpense(e);this.expenses.unshift(t),await this.createSettlementsFromExpense(t),this.settlements=await this.loadSettlements(),this.updateAll()}catch(t){throw alert("❌ Lỗi khi lưu expense: "+(t instanceof Error?t.message:t)),t}}async createSettlementsFromExpense(e){try{const t=e.paidBy;for(const n of e.splitBetween){if(n.userId===t)continue;const s={id:`settlement_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,from:n.userId,to:t,amount:n.amount||0,description:`Thanh toán cho: ${e.description}`,isSettled:!1,createdAt:new Date,relatedExpenses:[e.id||""]};await Ce.saveSettlement(s)}}catch(t){throw t}}calculateBalancesWithSettlements(){const e=zo(this.expenses,this.users);return this.settlements.forEach(t=>{if(t.isSettled){const n=e[t.from],s=e[t.to];n&&s&&(n.totalOwes-=t.amount,s.totalOwed-=t.amount)}}),e}async confirmSettlement(e){try{const t=this.settlements.find(n=>n.id===e);if(!t)throw new Error("Settlement not found");if(!this.currentUser||t.to!==this.currentUser.id)throw new Error("Chỉ người nhận tiền mới có thể xác nhận thanh toán");t.isSettled=!0,await Ce.saveSettlement(t),this.settlements=await this.loadSettlements(),this.updateAll(),alert("✅ Đã xác nhận thanh toán thành công!")}catch(t){throw t}}async confirmMultipleSettlements(e){try{const t=e.split(",");let n=0;for(const s of t){const a=this.settlements.find(o=>o.id===s.trim());a&&(!this.currentUser||a.to!==this.currentUser.id||(a.isSettled=!0,a.settledAt=new Date,a.settledBy=this.currentUser.id,await Ce.saveSettlement(a),n++))}this.settlements=await this.loadSettlements(),this.updateAll(),n>0?alert(`✅ Đã xác nhận ${n} thanh toán thành công!`):alert("⚠️ Không có thanh toán nào được xác nhận")}catch(t){throw alert("❌ Có lỗi xảy ra khi xác nhận thanh toán"),t}}updateAll(){this.updateExpensesList(),this.updateBalanceSection(),this.updateSettlementSection(),this.updateStatsCards()}updateExpensesList(){const e=document.getElementById("expensesList");e&&(e.innerHTML=this.renderExpensesList())}updateBalanceSection(){const e=document.getElementById("balanceSection");e&&(e.innerHTML=this.renderBalanceSection())}updateSettlementSection(){const e=document.getElementById("settlementSection");e&&(e.innerHTML=this.renderSettlementSection())}updateStatsCards(){const e=document.querySelector(".grid.grid-cols-1.md\\:grid-cols-3");e&&(e.innerHTML=this.renderStatsCards())}updateFilterControls(){const e=document.getElementById("clearAllFilters");if(e){const t=this.currentFilter||this.currentDateFilter!=="last7days";e.classList.toggle("hidden",!t)}}toggleCustomDateRange(){const e=document.getElementById("customDateRange");e&&e.classList.toggle("hidden",this.currentDateFilter!=="custom")}getEmptyStateTitle(){return this.currentFilter||this.currentDateFilter!=="last7days"?"Không có chi phí nào phù hợp với bộ lọc":"Chưa có chi phí nào"}getEmptyStateDescription(){return this.currentFilter||this.currentDateFilter!=="last7days"?"Thử thay đổi bộ lọc hoặc thêm chi phí mới":"Bắt đầu bằng cách thêm chi phí đầu tiên"}async editUser(e){if(!this.currentUser||this.currentUser.role!=="admin"){alert("⚠️ Chỉ admin mới có thể chỉnh sửa user!");return}const t=this.users.find(s=>s.id===e);if(!t){alert("❌ Không tìm thấy user!");return}const n=document.createElement("div");n.className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",n.innerHTML=`
      <div class="bg-white rounded-lg p-6 w-96">
        <h2 class="text-xl font-bold mb-4">✏️ Chỉnh sửa User</h2>
        <form id="editUserForm">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Tên:</label>
              <input type="text" id="userName" value="${t.name}" class="input-field w-full" required>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Email:</label>
              <input type="text" id="userEmail" value="${t.id}" class="input-field w-full" readonly>
            </div>
            <div class="flex items-center space-x-2">
              <input type="checkbox" id="userActive" ${t.isActive?"checked":""} class="rounded">
              <label for="userActive" class="text-sm">Kích hoạt tài khoản</label>
            </div>
          </div>
          <div class="flex space-x-3 mt-6">
            <button type="submit" class="btn-primary flex-1">💾 Lưu</button>
            <button type="button" id="cancelEdit" class="btn-secondary flex-1">❌ Hủy</button>
          </div>
        </form>
      </div>
    `,document.body.appendChild(n),n.querySelector("#editUserForm").addEventListener("submit",async s=>{s.preventDefault();const a=n.querySelector("#userName"),o=n.querySelector("#userActive");try{await this.authService.updateUser(e,{name:a.value,isActive:o.checked}),this.users=await this.authService.getAllUsers(),this.users=this.users.filter(u=>u.isActive),this.addExpenseModal=new Lr(this.users,this.currentUser,u=>this.addExpense(u)),this.render(),this.setupEventListeners(),document.body.removeChild(n),alert("✅ Đã cập nhật user thành công!")}catch(u){alert("❌ Lỗi khi cập nhật user: "+(u instanceof Error?u.message:u))}}),n.querySelector("#cancelEdit").addEventListener("click",()=>{document.body.removeChild(n)}),n.addEventListener("click",s=>{s.target===n&&document.body.removeChild(n)})}showUserManagementModal(){const e=new Pd(this.users,async t=>await this.authService.createUser(t),async(t,n)=>{var s;await this.authService.updateUser(t,{isActive:n}),(s=document.getElementById("user-management-modal"))==null||s.remove()},()=>{var t;(t=document.getElementById("user-management-modal"))==null||t.remove(),this.authService.getAllUsers().then(n=>{this.users=n.filter(s=>s.isActive),this.addExpenseModal=new Lr(this.users,this.currentUser,s=>this.addExpense(s)),this.render(),this.setupEventListeners()})},this.authService);document.body.insertAdjacentHTML("beforeend",e.render()),e.setupEventListeners()}showLoginModal(){const e=new Od(async t=>{var n,s;try{const a=await this.authService.login(t);if(((n=a.currentUser)==null?void 0:n.isActive)!==!0)throw alert("🚫 MAIN.TS BLOCK: User not active"),new Error("User not active in main.ts check");this.currentUser=a.currentUser,await this.initializeData(),this.addExpenseModal=new Lr(this.users,this.currentUser,o=>this.addExpense(o)),this.render(),this.setupEventListeners(),(s=document.getElementById("login-modal"))==null||s.remove()}catch(a){throw a}},()=>{var t;(t=document.getElementById("login-modal"))==null||t.remove()});document.body.insertAdjacentHTML("beforeend",e.render()),e.setupEventListeners()}logout(){this.authService.logout(),this.currentUser=null,this.users=[],this.expenses=[],this.settlements=[],this.render(),setTimeout(()=>{this.setupEventListeners()},0)}}document.addEventListener("DOMContentLoaded",()=>{new Pw});
