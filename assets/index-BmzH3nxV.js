(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();var Cd=Object.defineProperty,kd=(s,e,t)=>e in s?Cd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,K=(s,e,t)=>kd(s,typeof e!="symbol"?e+"":e,t);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();function oi(s,e){const t={};return e.forEach(n=>{t[n.id]={userId:n.id,owes:{},owedBy:{},totalOwes:0,totalOwed:0}}),s.forEach(n=>{const r=n.paidBy;n.splitBetween.forEach(o=>{const a=o.userId;let l;n.splitType==="equal"?l=n.amount/n.splitBetween.length:l=o.amount||0,a!==r&&(t[a].owes[r]||(t[a].owes[r]=0),t[r].owedBy[a]||(t[r].owedBy[a]=0),t[a].owes[r]+=l,t[r].owedBy[a]+=l)})}),Object.values(t).forEach(n=>{n.totalOwes=Object.values(n.owes).reduce((r,o)=>r+o,0),n.totalOwed=Object.values(n.owedBy).reduce((r,o)=>r+o,0)}),e.forEach(n=>{e.forEach(r=>{if(n.id!==r.id){const o=t[n.id].owes[r.id]||0,a=t[r.id].owes[n.id]||0;if(o>0&&a>0){const l=o-a;l>0?(t[n.id].owes[r.id]=l,t[r.id].owedBy[n.id]=l,delete t[r.id].owes[n.id],delete t[n.id].owedBy[r.id]):l<0?(t[r.id].owes[n.id]=Math.abs(l),t[n.id].owedBy[r.id]=Math.abs(l),delete t[n.id].owes[r.id],delete t[r.id].owedBy[n.id]):(delete t[n.id].owes[r.id],delete t[r.id].owes[n.id],delete t[n.id].owedBy[r.id],delete t[r.id].owedBy[n.id])}}})}),Object.values(t).forEach(n=>{n.totalOwes=Object.values(n.owes).reduce((r,o)=>r+o,0),n.totalOwed=Object.values(n.owedBy).reduce((r,o)=>r+o,0)}),t}function oe(s){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0,maximumFractionDigits:0}).format(s)}function Nd(){return Math.random().toString(36).substr(2,9)}function Dd(s){const e=[];if((!s.description||s.description.trim().length===0)&&e.push("Mô tả chi phí không được để trống"),(!s.amount||s.amount<=0)&&e.push("Số tiền phải lớn hơn 0"),s.paidBy||e.push("Vui lòng chọn người trả tiền"),(!s.splitBetween||s.splitBetween.length===0)&&e.push("Vui lòng chọn ít nhất một người để chia chi phí"),s.category||e.push("Vui lòng chọn danh mục chi phí"),s.splitType==="custom"&&s.splitBetween){const t=s.splitBetween.reduce((n,r)=>n+(r.amount||0),0);Math.abs(t-(s.amount||0))>1&&e.push("Tổng số tiền chia phải bằng tổng chi phí")}return e}function _l(s){const e=[],t=Object.values(s).map(l=>({userId:l.userId,netAmount:l.totalOwed-l.totalOwes})),n=t.filter(l=>l.netAmount>0).sort((l,u)=>u.netAmount-l.netAmount),r=t.filter(l=>l.netAmount<0).sort((l,u)=>l.netAmount-u.netAmount);let o=0,a=0;for(;o<n.length&&a<r.length;){const l=n[o],u=r[a],d=Math.min(l.netAmount,Math.abs(u.netAmount));d>0&&e.push({from:u.userId,to:l.userId,amount:d}),l.netAmount-=d,u.netAmount+=d,l.netAmount===0&&o++,u.netAmount===0&&a++}return e}class Rd{constructor(e,t,n,r){K(this,"expense"),K(this,"users"),K(this,"currentUser"),K(this,"onDelete"),this.expense=e,this.users=t,this.currentUser=n,this.onDelete=r}render(){var e,t,n;const r=this.users.find(l=>l.id===this.expense.paidBy),o=((e=this.currentUser)==null?void 0:e.id)||"",a=this.expense.splitBetween.some(l=>l.userId===o)||this.expense.paidBy===o;return`
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
            </div>
            
            <div class="space-y-1">
              <p class="text-sm text-gray-600">
                <span class="font-medium">${r==null?void 0:r.name}</span> đã trả 
                <span class="font-semibold text-gray-900">${oe(this.expense.amount)}</span>
              </p>
              
              <p class="text-xs text-gray-500">
                📅 ${this.expense.date.toLocaleDateString("vi-VN",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}
              </p>
              
              <div class="flex items-center space-x-2 text-xs text-gray-500">
                <span>👥 Chia cho ${this.expense.splitBetween.length} người</span>
                ${this.expense.splitType==="equal"?`
                  <span>•</span>
                  <span>${oe(this.expense.amount/this.expense.splitBetween.length)}/người</span>
                `:""}
              </div>
              
              <div class="mt-2">
                <details class="text-xs text-gray-500">
                  <summary class="cursor-pointer hover:text-gray-700">Chi tiết chia tiền</summary>
                  <div class="mt-2 pl-4 space-y-1">
                    ${this.expense.splitBetween.map(l=>{const u=this.users.find(d=>d.id===l.userId);return`
                        <div class="flex justify-between">
                          <span>${u==null?void 0:u.name}</span>
                          <span>${oe(l.amount||0)}</span>
                        </div>
                      `}).join("")}
                  </div>
                </details>
              </div>
            </div>
          </div>
          
          <div class="text-right ml-4">
            <div class="font-bold text-xl text-gray-900 mb-1">
              ${oe(this.expense.amount)}
            </div>
            ${a?this.renderUserInvolvement():""}
            
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
    `}renderUserInvolvement(){var e;const t=((e=this.currentUser)==null?void 0:e.id)||"",n=this.expense.splitBetween.find(l=>l.userId===t),r=(n==null?void 0:n.amount)||0,o=this.expense.paidBy===t,a=!!n;if(o&&a){const l=this.expense.amount-r;return`
        <div class="text-sm space-y-1">
          <div class="text-splitwise-green font-medium">
            💰 Bạn được nợ ${oe(l)}
          </div>
          <div class="text-xs text-gray-500">
            (Trả ${oe(this.expense.amount)} - Nợ ${oe(r)})
          </div>
        </div>
      `}else{if(o)return`
        <div class="text-sm text-splitwise-green font-medium">
          💰 Bạn được nợ ${oe(this.expense.amount)}
        </div>
      `;if(a)return`
        <div class="text-sm text-splitwise-red font-medium">
          💳 Bạn nợ ${oe(r)}
        </div>
      `}return""}getCategoryName(e){return{food:"🍽️ Ăn uống",transportation:"🚗 Di chuyển",accommodation:"🏠 Lưu trú",entertainment:"🎉 Giải trí",shopping:"🛍️ Mua sắm",utilities:"⚡ Tiện ích",other:"📦 Khác"}[e]||"📦 Khác"}}class Ld{constructor(e,t,n){K(this,"balance"),K(this,"users"),K(this,"allBalances"),this.balance=e,this.users=t,this.allBalances=n}render(){const e=this.balance.totalOwed,t=this.balance.totalOwes,n=e-t;return`
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
          <span class="font-bold text-green-700 text-lg">+${oe(e)}</span>
        </div>
        
        <div class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
          <span class="text-red-700 font-medium">💔 Bạn nợ:</span>
          <span class="font-bold text-red-700 text-lg">-${oe(t)}</span>
        </div>
        
        <div class="flex justify-between items-center p-4 ${n>=0?"bg-green-100":"bg-red-100"} rounded-lg border-2 ${n>=0?"border-green-300":"border-red-300"}">
          <span class="font-bold ${n>=0?"text-green-800":"text-red-800"}">
            ${n>=0?"🎯":"⚠️"} Tổng cộng:
          </span>
          <span class="font-bold text-xl ${n>=0?"text-green-800":"text-red-800"}">
            ${n>=0?"+":""}${oe(n)}
          </span>
        </div>
      </div>
    `}renderDetailedBalances(){let e='<div class="space-y-3 mb-6">';const t=Object.entries(this.balance.owedBy).filter(([r,o])=>o>0);t.length>0&&(e+='<h3 class="font-semibold text-green-700 text-sm mb-2">💚 Ai nợ bạn:</h3>',t.forEach(([r,o])=>{const a=this.users.find(l=>l.id===r);e+=`
          <div class="flex justify-between items-center p-2 bg-green-50 rounded text-sm">
            <div class="flex items-center space-x-2">
              <span class="text-green-700">${a==null?void 0:a.name}</span>
            </div>
            <span class="font-semibold text-green-700">+${oe(o)}</span>
          </div>
        `}));const n=Object.entries(this.balance.owes).filter(([r,o])=>o>0);return n.length>0&&(e+='<h3 class="font-semibold text-red-700 text-sm mb-2 mt-4">💔 Bạn nợ ai:</h3>',n.forEach(([r,o])=>{const a=this.users.find(l=>l.id===r);e+=`
          <div class="flex justify-between items-center p-2 bg-red-50 rounded text-sm">
            <div class="flex items-center space-x-2">
              <span class="text-red-700">${a==null?void 0:a.name}</span>
            </div>
            <span class="font-semibold text-red-700">-${oe(o)}</span>
          </div>
        `})),e+="</div>",e}renderSettlementSuggestions(){const e=_l(this.allBalances).filter(n=>n.from===this.balance.userId||n.to===this.balance.userId);if(e.length===0)return"";let t=`
      <div class="border-t pt-4">
        <h3 class="font-semibold text-gray-700 text-sm mb-3 flex items-center">
          🔄 Gợi ý thanh toán
        </h3>
        <div class="space-y-2">
    `;return e.forEach(n=>{const r=this.users.find(a=>a.id===n.from),o=this.users.find(a=>a.id===n.to);n.from===this.balance.userId?t+=`
          <div class="flex items-center justify-between p-3 bg-orange-50 rounded-lg text-sm">
            <span class="text-orange-700">
              💸 Chuyển cho <strong>${o==null?void 0:o.name}</strong>
            </span>
            <span class="font-bold text-orange-700">${oe(n.amount)}</span>
          </div>
        `:t+=`
          <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg text-sm">
            <span class="text-blue-700">
              💰 Nhận từ <strong>${r==null?void 0:r.name}</strong>
            </span>
            <span class="font-bold text-blue-700">${oe(n.amount)}</span>
          </div>
        `}),t+=`
        </div>
        <p class="text-xs text-gray-500 mt-2">
          💡 Đây là cách tối ưu để thanh toán tất cả các khoản nợ
        </p>
      </div>
    `,t}}class ai{constructor(e,t,n){K(this,"users"),K(this,"currentUser"),K(this,"onAddExpense"),this.users=e,this.currentUser=t,this.onAddExpense=n}show(){this.render();const e=document.getElementById("addExpenseModal");if(e){e.classList.remove("hidden"),e.classList.add("flex");const t=e.querySelector('input[type="text"]');t&&t.focus()}}hide(){const e=document.getElementById("addExpenseModal");e&&(e.classList.add("hidden"),e.classList.remove("flex")),this.resetForm()}render(){return`
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
    `}setupEventListeners(){var e,t,n;(e=document.getElementById("closeModal"))==null||e.addEventListener("click",()=>this.hide()),(t=document.getElementById("cancelBtn"))==null||t.addEventListener("click",()=>this.hide()),(n=document.getElementById("addExpenseForm"))==null||n.addEventListener("submit",p=>{p.preventDefault(),this.handleSubmit()}),document.querySelectorAll('input[name="splitType"]').forEach(p=>{p.addEventListener("change",m=>{const T=m.target.value;this.toggleSplitMode(T),this.updatePreview()})});const r=document.getElementById("expenseAmount"),o=document.querySelectorAll(".splitBetween"),a=document.querySelectorAll(".customSplitAmount"),l=document.querySelectorAll(".customSplitUser"),u=()=>this.updatePreview();r==null||r.addEventListener("input",u),o.forEach(p=>p.addEventListener("change",u)),a.forEach(p=>p.addEventListener("input",u)),l.forEach(p=>p.addEventListener("change",u));const d=p=>{p.key==="Escape"&&(this.hide(),document.removeEventListener("keydown",d))};document.addEventListener("keydown",d),this.addSelectAllControls()}toggleSplitMode(e){const t=document.getElementById("equalSplitContainer"),n=document.getElementById("customSplitContainer");e==="equal"?(t==null||t.classList.remove("hidden"),n==null||n.classList.add("hidden")):(t==null||t.classList.add("hidden"),n==null||n.classList.remove("hidden"))}addSelectAllControls(){var e,t,n;const r=document.querySelector(".space-y-2.max-h-32");if(r){const o=document.createElement("div");o.className="flex space-x-2 text-xs mb-2",o.innerHTML=`
        <button type="button" id="selectAll" class="text-blue-600 hover:text-blue-800">Chọn tất cả</button>
        <span class="text-gray-400">•</span>
        <button type="button" id="selectNone" class="text-blue-600 hover:text-blue-800">Bỏ chọn tất cả</button>
      `,(e=r.parentNode)==null||e.insertBefore(o,r),(t=document.getElementById("selectAll"))==null||t.addEventListener("click",()=>{document.querySelectorAll(".splitBetween").forEach(a=>{a.checked=!0}),this.updatePreview()}),(n=document.getElementById("selectNone"))==null||n.addEventListener("click",()=>{document.querySelectorAll(".splitBetween").forEach(a=>{a.checked=!1}),this.updatePreview()})}}updatePreview(){var e;const t=document.getElementById("expenseAmount"),n=parseFloat((t==null?void 0:t.value)||"0"),r=(e=document.querySelector('input[name="splitType"]:checked'))==null?void 0:e.value,o=document.getElementById("splitPreviewContent");if(o){if(n<=0){o.innerHTML="Nhập số tiền để xem chi tiết chia tiền";return}if(r==="equal"){const a=document.querySelectorAll(".splitBetween:checked");if(a.length===0){o.innerHTML="Chọn ít nhất một người để chia tiền";return}const l=n/a.length;let u='<div class="space-y-1">';u+=`<div class="font-medium">Tổng: ${this.formatCurrency(n)} ÷ ${a.length} người = ${this.formatCurrency(l)}/người</div>`,a.forEach(d=>{const p=d.value,m=this.users.find(T=>T.id===p);u+=`<div class="flex justify-between"><span>${m==null?void 0:m.name}</span><span>${this.formatCurrency(l)}</span></div>`}),u+="</div>",o.innerHTML=u}else{const a=document.querySelectorAll(".customSplitUser:checked");if(a.length===0){o.innerHTML="Chọn ít nhất một người để chia tiền";return}let l='<div class="space-y-1">',u=0;a.forEach(m=>{const T=m.value,C=this.users.find(R=>R.id===T),N=document.querySelector(`input[data-user-id="${T}"]`),L=parseFloat((N==null?void 0:N.value)||"0");u+=L,l+=`<div class="flex justify-between"><span>${C==null?void 0:C.name}</span><span>${this.formatCurrency(L)}</span></div>`});const d=n-u;l+='<div class="border-t pt-1 mt-1">',l+=`<div class="flex justify-between font-medium"><span>Tổng đã chia:</span><span>${this.formatCurrency(u)}</span></div>`,l+=`<div class="flex justify-between ${d===0?"text-green-600":d>0?"text-orange-600":"text-red-600"}">`,l+=`<span>Còn lại:</span><span>${this.formatCurrency(d)}</span></div>`,l+="</div></div>",o.innerHTML=l;const p=document.getElementById("customSplitTotal");p&&(p.innerHTML=`Tổng: ${this.formatCurrency(u)} (Còn lại: ${this.formatCurrency(d)})`,p.className=`text-sm pt-2 border-t ${d===0?"text-green-600":"text-orange-600"}`)}}}handleSubmit(){var e;const t=document.getElementById("expenseDescription").value,n=parseFloat(document.getElementById("expenseAmount").value),r=document.getElementById("expensePaidBy").value,o=document.getElementById("expenseCategory").value,a=(e=document.querySelector('input[name="splitType"]:checked'))==null?void 0:e.value;let l=[];if(a==="equal"){const m=document.querySelectorAll(".splitBetween:checked");if(m.length===0){alert("Vui lòng chọn ít nhất một người để chia chi phí!");return}const T=n/m.length;m.forEach(C=>{l.push({userId:C.value,amount:T})})}else{const m=document.querySelectorAll(".customSplitUser:checked");if(m.length===0){alert("Vui lòng chọn ít nhất một người để chia chi phí!");return}let T=0;if(m.forEach(C=>{var N;const L=C.value,R=document.querySelector(`input[data-user-id="${L}"]`),B=parseFloat((R==null?void 0:R.value)||"0");if(B<=0){alert(`Vui lòng nhập số tiền cho ${(N=this.users.find(G=>G.id===L))==null?void 0:N.name}!`);return}l.push({userId:L,amount:B}),T+=B}),Math.abs(T-n)>1){alert(`Tổng số tiền chia (${this.formatCurrency(T)}) phải bằng tổng chi phí (${this.formatCurrency(n)})!`);return}}const u={description:t.trim(),amount:n,paidBy:r,category:o,splitBetween:l,splitType:a},d=Dd(u);if(d.length>0){alert(d.join(`
`));return}const p={id:Nd(),description:u.description,amount:u.amount,currency:"VND",paidBy:u.paidBy,splitBetween:u.splitBetween,splitType:u.splitType,category:u.category,date:new Date};console.log("🔥🔥🔥 AddExpenseModal: Calling onAddExpense with:",p),this.onAddExpense(p),this.hide()}resetForm(){const e=document.getElementById("addExpenseForm");e&&(e.reset(),document.querySelectorAll(".splitBetween").forEach(t=>{t.checked=!0}))}formatCurrency(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0,maximumFractionDigits:0}).format(e)}}class Od{constructor(e,t){K(this,"users"),K(this,"allBalances"),this.users=e,this.allBalances=t}render(){const e=_l(this.allBalances);return e.length===0?`
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
          ${e.map(t=>{const n=this.users.find(o=>o.id===t.from),r=this.users.find(o=>o.id===t.to);return`
              <div class="p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ${n==null?void 0:n.name.charAt(0).toUpperCase()}
                    </div>
                    <span class="text-xl">💸</span>
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ${r==null?void 0:r.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div class="font-bold text-lg text-blue-600">
                    ${oe(t.amount)}
                  </div>
                </div>
                <div class="text-xs text-gray-600">
                  <strong>${n==null?void 0:n.name}</strong> cần chuyển cho <strong>${r==null?void 0:r.name}</strong>
                </div>
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
    `}}class Pd{constructor(e,t){K(this,"onLogin"),K(this,"onClose"),this.onLogin=e,this.onClose=t}render(){return`
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
    `}setupEventListeners(){const e=document.getElementById("login-form"),t=document.getElementById("close-login-modal"),n=document.getElementById("cancel-login"),r=document.getElementById("login-error"),o=document.getElementById("login-submit"),a=document.getElementById("login-submit-text"),l=document.getElementById("login-submit-loading");t==null||t.addEventListener("click",this.onClose),n==null||n.addEventListener("click",this.onClose);const u=d=>{d.key==="Escape"&&(this.onClose(),document.removeEventListener("keydown",u))};document.addEventListener("keydown",u),e==null||e.addEventListener("submit",async d=>{d.preventDefault();const p=new FormData(e),m={username:p.get("username"),password:p.get("password")};o.disabled=!0,a.classList.add("hidden"),l.classList.remove("hidden"),r.classList.add("hidden");try{await this.onLogin(m)}catch(T){r.textContent=T instanceof Error?T.message:"Đã có lỗi xảy ra",r.classList.remove("hidden")}finally{o.disabled=!1,a.classList.remove("hidden"),l.classList.add("hidden")}}),setTimeout(()=>{var d;(d=document.getElementById("email"))==null||d.focus()},100)}}class Ha{constructor(e,t,n,r,o){K(this,"users"),K(this,"onCreateUser"),K(this,"onUpdateUserStatus"),K(this,"onClose"),K(this,"authService"),K(this,"editUser",a=>{var l,u;const d=this.users.find(L=>L.id===a);if(!d){alert("Không tìm thấy người dùng!");return}const p=d.role==="admin",m=document.createElement("div");m.className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",m.id="edit-user-modal",m.innerHTML=`
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
    `,document.body.appendChild(m);const T=()=>{document.body.removeChild(m),document.removeEventListener("keydown",C)},C=L=>{L.key==="Escape"&&T()};(l=document.getElementById("close-edit-modal"))==null||l.addEventListener("click",T),(u=document.getElementById("cancel-edit-user"))==null||u.addEventListener("click",T),document.addEventListener("keydown",C);const N=document.getElementById("edit-user-form");N.addEventListener("submit",async L=>{L.preventDefault();const R=new FormData(N),B=R.get("name"),G=R.get("username"),Z=R.get("password"),ne=document.getElementById("edit-user-error"),ue=document.getElementById("edit-user-text"),ee=document.getElementById("edit-user-loading");try{if(ue==null||ue.classList.add("hidden"),ee==null||ee.classList.remove("hidden"),ne==null||ne.classList.add("hidden"),p){if(!Z.trim())throw new Error("Vui lòng nhập mật khẩu mới");await this.authService.updateUser(a,{password:Z.trim()})}else{await this.authService.updateUser(a,{name:B.trim(),username:G.trim(),...Z.trim()&&{password:Z.trim()}});const g=this.users.findIndex(v=>v.id===a);g!==-1&&(this.users[g].name=B.trim(),this.users[g].username=G.trim())}const b=document.getElementById("users-list");b&&(b.innerHTML=this.renderUsersList()),alert("✅ Cập nhật thông tin thành công!"),T()}catch(b){ue==null||ue.classList.remove("hidden"),ee==null||ee.classList.add("hidden"),ne&&(ne.textContent=b instanceof Error?b.message:"Có lỗi xảy ra",ne.classList.remove("hidden"))}})}),this.users=e,this.onCreateUser=t,this.onUpdateUserStatus=n,this.onClose=r,this.authService=o}render(){return`
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
    `).join("")}setupEventListeners(){const e=document.getElementById("close-user-management"),t=document.getElementById("close-user-management-btn"),n=document.getElementById("create-user-form"),r=document.getElementById("create-user-error"),o=document.getElementById("create-user-success");e==null||e.addEventListener("click",this.onClose),t==null||t.addEventListener("click",this.onClose);const a=l=>{l.key==="Escape"&&(this.onClose(),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a),n==null||n.addEventListener("submit",async l=>{l.preventDefault();const u=new FormData(n),d={name:u.get("name"),username:u.get("username"),password:u.get("password")},p=document.getElementById("create-user-text"),m=document.getElementById("create-user-loading");p.classList.add("hidden"),m.classList.remove("hidden"),r.classList.add("hidden"),o.classList.add("hidden");try{const T=await this.onCreateUser(d);this.users.push(T);const C=document.getElementById("users-list");C&&(C.innerHTML=this.renderUsersList()),n.reset(),o.textContent=`Tạo thành công người dùng: ${T.name}`,o.classList.remove("hidden")}catch(T){r.textContent=T instanceof Error?T.message:"Đã có lỗi xảy ra",r.classList.remove("hidden")}finally{p.classList.remove("hidden"),m.classList.add("hidden")}}),window.toggleUserStatus=async(l,u)=>{try{await this.onUpdateUserStatus(l,u);const d=this.users.findIndex(m=>m.id===l);d!==-1&&(this.users[d].isActive=u);const p=document.getElementById("users-list");p&&(p.innerHTML=this.renderUsersList())}catch(d){alert("Lỗi: "+(d instanceof Error?d.message:"Không thể cập nhật trạng thái"))}}}}const Md=()=>{};var Ga={};/**
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
*/const Al=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ud=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const o=s[t++];e[n++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=s[t++],a=s[t++],l=s[t++],u=((r&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const o=s[t++],a=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},xl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const o=s[r],a=r+1<s.length,l=a?s[r+1]:0,u=r+2<s.length,d=u?s[r+2]:0,p=o>>2,m=(o&3)<<4|l>>4;let T=(l&15)<<2|d>>6,C=d&63;u||(C=64,a||(T=64)),n.push(t[p],t[m],t[T],t[C])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Al(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Ud(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const o=t[s.charAt(r++)],a=r<s.length?t[s.charAt(r)]:0;++r;const l=r<s.length?t[s.charAt(r)]:64;++r;const u=r<s.length?t[s.charAt(r)]:64;if(++r,o==null||a==null||l==null||u==null)throw new Fd;const d=o<<2|a>>4;if(n.push(d),l!==64){const p=a<<4&240|l>>2;if(n.push(p),u!==64){const m=l<<6&192|u;n.push(m)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Fd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vd=function(s){const e=Al(s);return xl.encodeByteArray(e,!0)},Js=function(s){return Vd(s).replace(/\./g,"")},Cl=function(s){try{return xl.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
*/const jd=()=>Bd().__FIREBASE_DEFAULTS__,$d=()=>{if(typeof process>"u"||typeof Ga>"u")return;const s=Ga.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},qd=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Cl(s[1]);return e&&JSON.parse(e)},gr=()=>{try{return Md()||jd()||$d()||qd()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},kl=s=>{var e,t;return(t=(e=gr())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},zd=s=>{const e=kl(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Nl=()=>{var s;return(s=gr())==null?void 0:s.config},Dl=s=>{var e;return(e=gr())==null?void 0:e[`_${s}`]};/**
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
*/function yn(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rl(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
*/function Gd(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=s.iat||0,o=s.sub||s.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Js(JSON.stringify(t)),Js(JSON.stringify(a)),""].join(".")}const Kn={};function Kd(){const s={prod:[],emulator:[]};for(const e of Object.keys(Kn))Kn[e]?s.emulator.push(e):s.prod.push(e);return s}function Wd(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let Ka=!1;function Ll(s,e){if(typeof window>"u"||typeof document>"u"||!yn(window.location.host)||Kn[s]===e||Kn[s]||Ka)return;Kn[s]=e;function t(m){return`__firebase__banner__${m}`}const n="__firebase__banner",r=Kd().prod.length>0;function o(){const m=document.getElementById(n);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,T){m.setAttribute("width","24"),m.setAttribute("id",T),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Ka=!0,o()},m}function d(m,T){m.setAttribute("id",T),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Wd(n),T=t("text"),C=document.getElementById(T)||document.createElement("span"),N=t("learnmore"),L=document.getElementById(N)||document.createElement("a"),R=t("preprendIcon"),B=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const G=m.element;a(G),d(L,N);const Z=u();l(B,R),G.append(B,C,L,Z),document.body.appendChild(G)}r?(C.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
*/function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Xd(){var s;const e=(s=gr())==null?void 0:s.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yd(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Zd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ef(){const s=Ie();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function tf(){return!Xd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nf(){try{return typeof indexedDB=="object"}catch{return!1}}function sf(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
*/const rf="FirebaseError";class nt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=rf,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?of(o,n):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new nt(r,l,n)}}function of(s,e){return s.replace(af,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const af=/\{\$([^}]+)}/g;function cf(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Ut(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const o=s[r],a=e[r];if(Wa(o)&&Wa(a)){if(!Ut(o,a))return!1}else if(o!==a)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function Wa(s){return s!==null&&typeof s=="object"}/**
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
*/function ls(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function lf(s,e){const t=new uf(s,e);return t.subscribe.bind(t)}class uf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");hf(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=ci),r.error===void 0&&(r.error=ci),r.complete===void 0&&(r.complete=ci);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hf(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function ci(){}/**
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
*/function _e(s){return s&&s._delegate?s._delegate:s}class Ft{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
*/const Lt="[DEFAULT]";/**
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
*/class df{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Hd;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pf(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});n.resolve(o)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&a.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const o=this.instances.get(n);return o&&e(o,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ff(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ff(s){return s===Lt?void 0:s}function pf(s){return s.instantiationMode==="EAGER"}/**
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
*/var $;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})($||($={}));const gf={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},yf=$.INFO,vf={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},wf=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=vf[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wi{constructor(e){this.name=e,this._logLevel=yf,this._logHandler=wf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const bf=(s,e)=>e.some(t=>s instanceof t);let Qa,Xa;function Ef(){return Qa||(Qa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function If(){return Xa||(Xa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ol=new WeakMap,Ii=new WeakMap,Pl=new WeakMap,li=new WeakMap,Qi=new WeakMap;function Sf(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",o),s.removeEventListener("error",a)},o=()=>{t(mt(s.result)),r()},a=()=>{n(s.error),r()};s.addEventListener("success",o),s.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ol.set(t,s)}).catch(()=>{}),Qi.set(e,s),e}function Tf(s){if(Ii.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",o),s.removeEventListener("error",a),s.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",o),s.addEventListener("error",a),s.addEventListener("abort",a)});Ii.set(s,e)}let Si={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Ii.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Pl.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function _f(s){Si=s(Si)}function Af(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(ui(this),e,...t);return Pl.set(n,e.sort?e.sort():[e]),mt(n)}:If().includes(s)?function(...e){return s.apply(ui(this),e),mt(Ol.get(this))}:function(...e){return mt(s.apply(ui(this),e))}}function xf(s){return typeof s=="function"?Af(s):(s instanceof IDBTransaction&&Tf(s),bf(s,Ef())?new Proxy(s,Si):s)}function mt(s){if(s instanceof IDBRequest)return Sf(s);if(li.has(s))return li.get(s);const e=xf(s);return e!==s&&(li.set(s,e),Qi.set(e,s)),e}const ui=s=>Qi.get(s);function Cf(s,e,{blocked:t,upgrade:n,blocking:r,terminated:o}={}){const a=indexedDB.open(s,e),l=mt(a);return n&&a.addEventListener("upgradeneeded",u=>{n(mt(a.result),u.oldVersion,u.newVersion,mt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),r&&u.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const kf=["get","getKey","getAll","getAllKeys","count"],Nf=["put","add","delete","clear"],hi=new Map;function Ja(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(hi.get(e))return hi.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=Nf.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||kf.includes(t)))return;const o=async function(a,...l){const u=this.transaction(a,r?"readwrite":"readonly");let d=u.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),r&&u.done]))[0]};return hi.set(e,o),o}_f(s=>({...s,get:(e,t,n)=>Ja(e,t)||s.get(e,t,n),has:(e,t)=>!!Ja(e,t)||s.has(e,t)}));/**
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
*/class Df{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Rf(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(" ")}}function Rf(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ti="@firebase/app",Ya="0.14.4";/**
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
*/const Xe=new Wi("@firebase/app"),Lf="@firebase/app-compat",Of="@firebase/analytics-compat",Pf="@firebase/analytics",Mf="@firebase/app-check-compat",Uf="@firebase/app-check",Ff="@firebase/auth",Vf="@firebase/auth-compat",Bf="@firebase/database",jf="@firebase/data-connect",$f="@firebase/database-compat",qf="@firebase/functions",zf="@firebase/functions-compat",Hf="@firebase/installations",Gf="@firebase/installations-compat",Kf="@firebase/messaging",Wf="@firebase/messaging-compat",Qf="@firebase/performance",Xf="@firebase/performance-compat",Jf="@firebase/remote-config",Yf="@firebase/remote-config-compat",Zf="@firebase/storage",ep="@firebase/storage-compat",tp="@firebase/firestore",np="@firebase/ai",sp="@firebase/firestore-compat",rp="firebase",ip="12.4.0";/**
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
*/const _i="[DEFAULT]",op={[Ti]:"fire-core",[Lf]:"fire-core-compat",[Pf]:"fire-analytics",[Of]:"fire-analytics-compat",[Uf]:"fire-app-check",[Mf]:"fire-app-check-compat",[Ff]:"fire-auth",[Vf]:"fire-auth-compat",[Bf]:"fire-rtdb",[jf]:"fire-data-connect",[$f]:"fire-rtdb-compat",[qf]:"fire-fn",[zf]:"fire-fn-compat",[Hf]:"fire-iid",[Gf]:"fire-iid-compat",[Kf]:"fire-fcm",[Wf]:"fire-fcm-compat",[Qf]:"fire-perf",[Xf]:"fire-perf-compat",[Jf]:"fire-rc",[Yf]:"fire-rc-compat",[Zf]:"fire-gcs",[ep]:"fire-gcs-compat",[tp]:"fire-fst",[sp]:"fire-fst-compat",[np]:"fire-vertex","fire-js":"fire-js",[rp]:"fire-js-all"};/**
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
*/const Ys=new Map,ap=new Map,Ai=new Map;function Za(s,e){try{s.container.addComponent(e)}catch(t){Xe.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function ln(s){const e=s.name;if(Ai.has(e))return Xe.debug(`There were multiple attempts to register component ${e}.`),!1;Ai.set(e,s);for(const t of Ys.values())Za(t,s);for(const t of ap.values())Za(t,s);return!0}function Xi(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Ve(s){return s==null?!1:s.settings!==void 0}/**
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
*/const cp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gt=new cs("app","Firebase",cp);/**
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
*/class lp{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
*/const vn=ip;function Ml(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:_i,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw gt.create("bad-app-name",{appName:String(r)});if(t||(t=Nl()),!t)throw gt.create("no-options");const o=Ys.get(r);if(o){if(Ut(t,o.options)&&Ut(n,o.config))return o;throw gt.create("duplicate-app",{appName:r})}const a=new mf(r);for(const u of Ai.values())a.addComponent(u);const l=new lp(t,n,a);return Ys.set(r,l),l}function Ul(s=_i){const e=Ys.get(s);if(!e&&s===_i&&Nl())return Ml();if(!e)throw gt.create("no-app",{appName:s});return e}function yt(s,e,t){let n=op[s]??s;t&&(n+=`-${t}`);const r=n.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${n}" with version "${e}":`];r&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xe.warn(a.join(" "));return}ln(new Ft(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
*/const up="firebase-heartbeat-database",hp=1,Zn="firebase-heartbeat-store";let di=null;function Fl(){return di||(di=Cf(up,hp,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Zn)}catch(t){console.warn(t)}}}}).catch(s=>{throw gt.create("idb-open",{originalErrorMessage:s.message})})),di}async function dp(s){try{const e=(await Fl()).transaction(Zn),t=await e.objectStore(Zn).get(Vl(s));return await e.done,t}catch(e){if(e instanceof nt)Xe.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xe.warn(t.message)}}}async function ec(s,e){try{const t=(await Fl()).transaction(Zn,"readwrite");await t.objectStore(Zn).put(e,Vl(s)),await t.done}catch(t){if(t instanceof nt)Xe.warn(t.message);else{const n=gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xe.warn(n.message)}}}function Vl(s){return`${s.name}!${s.options.appId}`}/**
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
*/const fp=1024,pp=30;class mp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yp(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>pp){const o=vp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Xe.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tc(),{heartbeatsToSend:n,unsentEntries:r}=gp(this._heartbeatsCache.heartbeats),o=Js(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Xe.warn(t),""}}}function tc(){return new Date().toISOString().substring(0,10)}function gp(s,e=fp){const t=[];let n=s.slice();for(const r of s){const o=t.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),nc(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),nc(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class yp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nf()?sf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await dp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return ec(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return ec(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}}function nc(s){return Js(JSON.stringify({version:2,heartbeats:s})).length}function vp(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
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
*/function wp(s){ln(new Ft("platform-logger",e=>new Df(e),"PRIVATE")),ln(new Ft("heartbeat",e=>new mp(e),"PRIVATE")),yt(Ti,Ya,s),yt(Ti,Ya,"esm2020"),yt("fire-js","")}wp("");var sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vt,Bl;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function v(){}v.prototype=g.prototype,b.F=g.prototype,b.prototype=new v,b.prototype.constructor=b,b.D=function(E,w,S){for(var y=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)y[Ae-2]=arguments[Ae];return g.prototype[w].apply(E,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,g,v){v||(v=0);const E=Array(16);if(typeof g=="string")for(var w=0;w<16;++w)E[w]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(w=0;w<16;++w)E[w]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=b.g[0],v=b.g[1],w=b.g[2];let S=b.g[3],y;y=g+(S^v&(w^S))+E[0]+3614090360&4294967295,g=v+(y<<7&4294967295|y>>>25),y=S+(w^g&(v^w))+E[1]+3905402710&4294967295,S=g+(y<<12&4294967295|y>>>20),y=w+(v^S&(g^v))+E[2]+606105819&4294967295,w=S+(y<<17&4294967295|y>>>15),y=v+(g^w&(S^g))+E[3]+3250441966&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(S^v&(w^S))+E[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=S+(w^g&(v^w))+E[5]+1200080426&4294967295,S=g+(y<<12&4294967295|y>>>20),y=w+(v^S&(g^v))+E[6]+2821735955&4294967295,w=S+(y<<17&4294967295|y>>>15),y=v+(g^w&(S^g))+E[7]+4249261313&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(S^v&(w^S))+E[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=S+(w^g&(v^w))+E[9]+2336552879&4294967295,S=g+(y<<12&4294967295|y>>>20),y=w+(v^S&(g^v))+E[10]+4294925233&4294967295,w=S+(y<<17&4294967295|y>>>15),y=v+(g^w&(S^g))+E[11]+2304563134&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(S^v&(w^S))+E[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=S+(w^g&(v^w))+E[13]+4254626195&4294967295,S=g+(y<<12&4294967295|y>>>20),y=w+(v^S&(g^v))+E[14]+2792965006&4294967295,w=S+(y<<17&4294967295|y>>>15),y=v+(g^w&(S^g))+E[15]+1236535329&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(w^S&(v^w))+E[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=S+(v^w&(g^v))+E[6]+3225465664&4294967295,S=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(S^g))+E[11]+643717713&4294967295,w=S+(y<<14&4294967295|y>>>18),y=v+(S^g&(w^S))+E[0]+3921069994&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^S&(v^w))+E[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=S+(v^w&(g^v))+E[10]+38016083&4294967295,S=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(S^g))+E[15]+3634488961&4294967295,w=S+(y<<14&4294967295|y>>>18),y=v+(S^g&(w^S))+E[4]+3889429448&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^S&(v^w))+E[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=S+(v^w&(g^v))+E[14]+3275163606&4294967295,S=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(S^g))+E[3]+4107603335&4294967295,w=S+(y<<14&4294967295|y>>>18),y=v+(S^g&(w^S))+E[8]+1163531501&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^S&(v^w))+E[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=S+(v^w&(g^v))+E[2]+4243563512&4294967295,S=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(S^g))+E[7]+1735328473&4294967295,w=S+(y<<14&4294967295|y>>>18),y=v+(S^g&(w^S))+E[12]+2368359562&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(v^w^S)+E[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=S+(g^v^w)+E[8]+2272392833&4294967295,S=g+(y<<11&4294967295|y>>>21),y=w+(S^g^v)+E[11]+1839030562&4294967295,w=S+(y<<16&4294967295|y>>>16),y=v+(w^S^g)+E[14]+4259657740&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^S)+E[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=S+(g^v^w)+E[4]+1272893353&4294967295,S=g+(y<<11&4294967295|y>>>21),y=w+(S^g^v)+E[7]+4139469664&4294967295,w=S+(y<<16&4294967295|y>>>16),y=v+(w^S^g)+E[10]+3200236656&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^S)+E[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=S+(g^v^w)+E[0]+3936430074&4294967295,S=g+(y<<11&4294967295|y>>>21),y=w+(S^g^v)+E[3]+3572445317&4294967295,w=S+(y<<16&4294967295|y>>>16),y=v+(w^S^g)+E[6]+76029189&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^S)+E[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=S+(g^v^w)+E[12]+3873151461&4294967295,S=g+(y<<11&4294967295|y>>>21),y=w+(S^g^v)+E[15]+530742520&4294967295,w=S+(y<<16&4294967295|y>>>16),y=v+(w^S^g)+E[2]+3299628645&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(w^(v|~S))+E[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=S+(v^(g|~w))+E[7]+1126891415&4294967295,S=g+(y<<10&4294967295|y>>>22),y=w+(g^(S|~v))+E[14]+2878612391&4294967295,w=S+(y<<15&4294967295|y>>>17),y=v+(S^(w|~g))+E[5]+4237533241&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~S))+E[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=S+(v^(g|~w))+E[3]+2399980690&4294967295,S=g+(y<<10&4294967295|y>>>22),y=w+(g^(S|~v))+E[10]+4293915773&4294967295,w=S+(y<<15&4294967295|y>>>17),y=v+(S^(w|~g))+E[1]+2240044497&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~S))+E[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=S+(v^(g|~w))+E[15]+4264355552&4294967295,S=g+(y<<10&4294967295|y>>>22),y=w+(g^(S|~v))+E[6]+2734768916&4294967295,w=S+(y<<15&4294967295|y>>>17),y=v+(S^(w|~g))+E[13]+1309151649&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~S))+E[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=S+(v^(g|~w))+E[11]+3174756917&4294967295,S=g+(y<<10&4294967295|y>>>22),y=w+(g^(S|~v))+E[2]+718787259&4294967295,w=S+(y<<15&4294967295|y>>>17),y=v+(S^(w|~g))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+S&4294967295}n.prototype.v=function(b,g){g===void 0&&(g=b.length);const v=g-this.blockSize,E=this.C;let w=this.h,S=0;for(;S<g;){if(w==0)for(;S<=v;)r(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<g;)if(E[w++]=b.charCodeAt(S++),w==this.blockSize){r(this,E),w=0;break}}else for(;S<g;)if(E[w++]=b[S++],w==this.blockSize){r(this,E),w=0;break}}this.h=w,this.o+=g},n.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;g=this.o*8;for(var v=b.length-8;v<b.length;++v)b[v]=g&255,g/=256;for(this.v(b),b=Array(16),g=0,v=0;v<4;++v)for(let E=0;E<32;E+=8)b[g++]=this.g[v]>>>E&255;return b};function o(b,g){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=g(b)}function a(b,g){this.h=g;const v=[];let E=!0;for(let w=b.length-1;w>=0;w--){const S=b[w]|0;E&&S==g||(v[w]=S,E=!1)}this.g=v}var l={};function u(b){return-128<=b&&b<128?o(b,function(g){return new a([g|0],g<0?-1:0)}):new a([b|0],b<0?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return m;if(b<0)return R(d(-b));const g=[];let v=1;for(let E=0;b>=v;E++)g[E]=b/v|0,v*=4294967296;return new a(g,0)}function p(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return R(p(b.substring(1),g));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=d(Math.pow(g,8));let E=m;for(let S=0;S<b.length;S+=8){var w=Math.min(8,b.length-S);const y=parseInt(b.substring(S,S+w),g);w<8?(w=d(Math.pow(g,w)),E=E.j(w).add(d(y))):(E=E.j(v),E=E.add(d(y)))}return E}var m=u(0),T=u(1),C=u(16777216);s=a.prototype,s.m=function(){if(L(this))return-R(this).m();let b=0,g=1;for(let v=0;v<this.g.length;v++){const E=this.i(v);b+=(E>=0?E:4294967296+E)*g,g*=4294967296}return b},s.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(N(this))return"0";if(L(this))return"-"+R(this).toString(b);const g=d(Math.pow(b,6));var v=this;let E="";for(;;){const w=ne(v,g).g;v=B(v,w.j(g));let S=((v.g.length>0?v.g[0]:v.h)>>>0).toString(b);if(v=w,N(v))return S+E;for(;S.length<6;)S="0"+S;E=S+E}},s.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function N(b){if(b.h!=0)return!1;for(let g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function L(b){return b.h==-1}s.l=function(b){return b=B(this,b),L(b)?-1:N(b)?0:1};function R(b){const g=b.g.length,v=[];for(let E=0;E<g;E++)v[E]=~b.g[E];return new a(v,~b.h).add(T)}s.abs=function(){return L(this)?R(this):this},s.add=function(b){const g=Math.max(this.g.length,b.g.length),v=[];let E=0;for(let w=0;w<=g;w++){let S=E+(this.i(w)&65535)+(b.i(w)&65535),y=(S>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);E=y>>>16,S&=65535,y&=65535,v[w]=y<<16|S}return new a(v,v[v.length-1]&-2147483648?-1:0)};function B(b,g){return b.add(R(g))}s.j=function(b){if(N(this)||N(b))return m;if(L(this))return L(b)?R(this).j(R(b)):R(R(this).j(b));if(L(b))return R(this.j(R(b)));if(this.l(C)<0&&b.l(C)<0)return d(this.m()*b.m());const g=this.g.length+b.g.length,v=[];for(var E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(let w=0;w<b.g.length;w++){const S=this.i(E)>>>16,y=this.i(E)&65535,Ae=b.i(w)>>>16,Ct=b.i(w)&65535;v[2*E+2*w]+=y*Ct,G(v,2*E+2*w),v[2*E+2*w+1]+=S*Ct,G(v,2*E+2*w+1),v[2*E+2*w+1]+=y*Ae,G(v,2*E+2*w+1),v[2*E+2*w+2]+=S*Ae,G(v,2*E+2*w+2)}for(b=0;b<g;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=g;b<2*g;b++)v[b]=0;return new a(v,0)};function G(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function Z(b,g){this.g=b,this.h=g}function ne(b,g){if(N(g))throw Error("division by zero");if(N(b))return new Z(m,m);if(L(b))return g=ne(R(b),g),new Z(R(g.g),R(g.h));if(L(g))return g=ne(b,R(g)),new Z(R(g.g),g.h);if(b.g.length>30){if(L(b)||L(g))throw Error("slowDivide_ only works with positive integers.");for(var v=T,E=g;E.l(b)<=0;)v=ue(v),E=ue(E);var w=ee(v,1),S=ee(E,1);for(E=ee(E,2),v=ee(v,2);!N(E);){var y=S.add(E);y.l(b)<=0&&(w=w.add(v),S=y),E=ee(E,1),v=ee(v,1)}return g=B(b,w.j(g)),new Z(w,g)}for(w=m;b.l(g)>=0;){for(v=Math.max(1,Math.floor(b.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),S=d(v),y=S.j(g);L(y)||y.l(b)>0;)v-=E,S=d(v),y=S.j(g);N(S)&&(S=T),w=w.add(S),b=B(b,y)}return new Z(w,b)}s.B=function(b){return ne(this,b).h},s.and=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)&b.i(E);return new a(v,this.h&b.h)},s.or=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)|b.i(E);return new a(v,this.h|b.h)},s.xor=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)^b.i(E);return new a(v,this.h^b.h)};function ue(b){const g=b.g.length+1,v=[];for(let E=0;E<g;E++)v[E]=b.i(E)<<1|b.i(E-1)>>>31;return new a(v,b.h)}function ee(b,g){const v=g>>5;g%=32;const E=b.g.length-v,w=[];for(let S=0;S<E;S++)w[S]=g>0?b.i(S+v)>>>g|b.i(S+v+1)<<32-g:b.i(S+v);return new a(w,b.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Bl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,vt=a}).apply(typeof sc<"u"?sc:typeof self<"u"?self:typeof window<"u"?window:{});var Os=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jl,$n,$l,js,xi,ql,zl,Hl;(function(){var s,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Os=="object"&&Os];for(var c=0;c<i.length;++c){var h=i[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function r(i,c){if(c)e:{var h=n;i=i.split(".");for(var f=0;f<i.length-1;f++){var I=i[f];if(!(I in h))break e;h=h[I]}i=i[i.length-1],f=h[i],c=c(f),c!=f&&c!=null&&e(h,i,{configurable:!0,writable:!0,value:c})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function u(i,c,h){return i.call.apply(i.bind,arguments)}function d(i,c,h){return d=u,d.apply(null,arguments)}function p(i,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function m(i,c){function h(){}h.prototype=c.prototype,i.Z=c.prototype,i.prototype=new h,i.prototype.constructor=i,i.Ob=function(f,I,_){for(var k=Array(arguments.length-2),j=2;j<arguments.length;j++)k[j-2]=arguments[j];return c.prototype[I].apply(f,k)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function C(i){const c=i.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=i[f];return h}return[]}function N(i,c){for(let f=1;f<arguments.length;f++){const I=arguments[f];var h=typeof I;if(h=h!="object"?h:I?Array.isArray(I)?"array":h:"null",h=="array"||h=="object"&&typeof I.length=="number"){h=i.length||0;const _=I.length||0;i.length=h+_;for(let k=0;k<_;k++)i[h+k]=I[k]}else i.push(I)}}class L{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function R(i){a.setTimeout(()=>{throw i},0)}function B(){var i=b;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class G{constructor(){this.h=this.g=null}add(c,h){const f=Z.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Z=new L(()=>new ne,i=>i.reset());class ne{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ee=!1,b=new G,g=()=>{const i=Promise.resolve(void 0);ue=()=>{i.then(v)}};function v(){for(var i;i=B();){try{i.h.call(i.g)}catch(h){R(h)}var c=Z;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}ee=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return i}();function y(i){return/^[\s\xa0]*$/.test(i)}function Ae(i,c){w.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}m(Ae,w),Ae.prototype.init=function(i,c){const h=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(h=="mouseover"?c=i.fromElement:h=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Ae.Z.h.call(this)},Ae.prototype.h=function(){Ae.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Ct="closure_listenable_"+(Math.random()*1e6|0),Xh=0;function Jh(i,c,h,f,I){this.listener=i,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=I,this.key=++Xh,this.da=this.fa=!1}function ws(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function bs(i,c,h){for(const f in i)c.call(h,i[f],f,i)}function Yh(i,c){for(const h in i)c.call(void 0,i[h],h,i)}function zo(i){const c={};for(const h in i)c[h]=i[h];return c}const Ho="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Go(i,c){let h,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(h in f)i[h]=f[h];for(let _=0;_<Ho.length;_++)h=Ho[_],Object.prototype.hasOwnProperty.call(f,h)&&(i[h]=f[h])}}function Es(i){this.src=i,this.g={},this.h=0}Es.prototype.add=function(i,c,h,f,I){const _=i.toString();i=this.g[_],i||(i=this.g[_]=[],this.h++);const k=Ur(i,c,f,I);return k>-1?(c=i[k],h||(c.fa=!1)):(c=new Jh(c,this.src,_,!!f,I),c.fa=h,i.push(c)),c};function Mr(i,c){const h=c.type;if(h in i.g){var f=i.g[h],I=Array.prototype.indexOf.call(f,c,void 0),_;(_=I>=0)&&Array.prototype.splice.call(f,I,1),_&&(ws(c),i.g[h].length==0&&(delete i.g[h],i.h--))}}function Ur(i,c,h,f){for(let I=0;I<i.length;++I){const _=i[I];if(!_.da&&_.listener==c&&_.capture==!!h&&_.ha==f)return I}return-1}var Fr="closure_lm_"+(Math.random()*1e6|0),Vr={};function Ko(i,c,h,f,I){if(Array.isArray(c)){for(let _=0;_<c.length;_++)Ko(i,c[_],h,f,I);return null}return h=Xo(h),i&&i[Ct]?i.J(c,h,l(f)?!!f.capture:!1,I):Zh(i,c,h,!1,f,I)}function Zh(i,c,h,f,I,_){if(!c)throw Error("Invalid event type");const k=l(I)?!!I.capture:!!I;let j=jr(i);if(j||(i[Fr]=j=new Es(i)),h=j.add(c,h,f,k,_),h.proxy)return h;if(f=ed(),h.proxy=f,f.src=i,f.listener=h,i.addEventListener)S||(I=k),I===void 0&&(I=!1),i.addEventListener(c.toString(),f,I);else if(i.attachEvent)i.attachEvent(Qo(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ed(){function i(h){return c.call(i.src,i.listener,h)}const c=td;return i}function Wo(i,c,h,f,I){if(Array.isArray(c))for(var _=0;_<c.length;_++)Wo(i,c[_],h,f,I);else f=l(f)?!!f.capture:!!f,h=Xo(h),i&&i[Ct]?(i=i.i,_=String(c).toString(),_ in i.g&&(c=i.g[_],h=Ur(c,h,f,I),h>-1&&(ws(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete i.g[_],i.h--)))):i&&(i=jr(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Ur(c,h,f,I)),(h=i>-1?c[i]:null)&&Br(h))}function Br(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Ct])Mr(c.i,i);else{var h=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(h,f,i.capture):c.detachEvent?c.detachEvent(Qo(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=jr(c))?(Mr(h,i),h.h==0&&(h.src=null,c[Fr]=null)):ws(i)}}}function Qo(i){return i in Vr?Vr[i]:Vr[i]="on"+i}function td(i,c){if(i.da)i=!0;else{c=new Ae(c,this);const h=i.listener,f=i.ha||i.src;i.fa&&Br(i),i=h.call(f,c)}return i}function jr(i){return i=i[Fr],i instanceof Es?i:null}var $r="__closure_events_fn_"+(Math.random()*1e9>>>0);function Xo(i){return typeof i=="function"?i:(i[$r]||(i[$r]=function(c){return i.handleEvent(c)}),i[$r])}function ve(){E.call(this),this.i=new Es(this),this.M=this,this.G=null}m(ve,E),ve.prototype[Ct]=!0,ve.prototype.removeEventListener=function(i,c,h,f){Wo(this,i,c,h,f)};function Se(i,c){var h,f=i.G;if(f)for(h=[];f;f=f.G)h.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new w(c,i);else if(c instanceof w)c.target=c.target||i;else{var I=c;c=new w(f,i),Go(c,I)}I=!0;let _,k;if(h)for(k=h.length-1;k>=0;k--)_=c.g=h[k],I=Is(_,f,!0,c)&&I;if(_=c.g=i,I=Is(_,f,!0,c)&&I,I=Is(_,f,!1,c)&&I,h)for(k=0;k<h.length;k++)_=c.g=h[k],I=Is(_,f,!1,c)&&I}ve.prototype.N=function(){if(ve.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const h=i.g[c];for(let f=0;f<h.length;f++)ws(h[f]);delete i.g[c],i.h--}}this.G=null},ve.prototype.J=function(i,c,h,f){return this.i.add(String(i),c,!1,h,f)},ve.prototype.K=function(i,c,h,f){return this.i.add(String(i),c,!0,h,f)};function Is(i,c,h,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let I=!0;for(let _=0;_<c.length;++_){const k=c[_];if(k&&!k.da&&k.capture==h){const j=k.listener,he=k.ha||k.src;k.fa&&Mr(i.i,k),I=j.call(he,f)!==!1&&I}}return I&&!f.defaultPrevented}function nd(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function Jo(i){i.g=nd(()=>{i.g=null,i.i&&(i.i=!1,Jo(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class sd extends E{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Jo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function An(i){E.call(this),this.h=i,this.g={}}m(An,E);var Yo=[];function Zo(i){bs(i.g,function(c,h){this.g.hasOwnProperty(h)&&Br(c)},i),i.g={}}An.prototype.N=function(){An.Z.N.call(this),Zo(this)},An.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qr=a.JSON.stringify,rd=a.JSON.parse,id=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function ea(){}function ta(){}var xn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zr(){w.call(this,"d")}m(zr,w);function Hr(){w.call(this,"c")}m(Hr,w);var kt={},na=null;function Ss(){return na=na||new ve}kt.Ia="serverreachability";function sa(i){w.call(this,kt.Ia,i)}m(sa,w);function Cn(i){const c=Ss();Se(c,new sa(c))}kt.STAT_EVENT="statevent";function ra(i,c){w.call(this,kt.STAT_EVENT,i),this.stat=c}m(ra,w);function Te(i){const c=Ss();Se(c,new ra(c,i))}kt.Ja="timingevent";function ia(i,c){w.call(this,kt.Ja,i),this.size=c}m(ia,w);function kn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function Nn(){this.g=!0}Nn.prototype.ua=function(){this.g=!1};function od(i,c,h,f,I,_){i.info(function(){if(i.g)if(_){var k="",j=_.split("&");for(let J=0;J<j.length;J++){var he=j[J].split("=");if(he.length>1){const fe=he[0];he=he[1];const Ue=fe.split("_");k=Ue.length>=2&&Ue[1]=="type"?k+(fe+"="+he+"&"):k+(fe+"=redacted&")}}}else k=null;else k=_;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+c+`
`+h+`
`+k})}function ad(i,c,h,f,I,_,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+c+`
`+h+`
`+_+" "+k})}function Gt(i,c,h,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+ld(i,h)+(f?" "+f:"")})}function cd(i,c){i.info(function(){return"TIMEOUT: "+c})}Nn.prototype.info=function(){};function ld(i,c){if(!i.g)return c;if(!c)return null;try{const _=JSON.parse(c);if(_){for(i=0;i<_.length;i++)if(Array.isArray(_[i])){var h=_[i];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var I=f[0];if(I!="noop"&&I!="stop"&&I!="close")for(let k=1;k<f.length;k++)f[k]=""}}}}return qr(_)}catch{return c}}var Ts={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},oa={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},aa;function Gr(){}m(Gr,ea),Gr.prototype.g=function(){return new XMLHttpRequest},aa=new Gr;function Dn(i){return encodeURIComponent(String(i))}function ud(i){var c=1;i=i.split(":");const h=[];for(;c>0&&i.length;)h.push(i.shift()),c--;return i.length&&h.push(i.join(":")),h}function st(i,c,h,f){this.j=i,this.i=c,this.l=h,this.S=f||1,this.V=new An(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ca}function ca(){this.i=null,this.g="",this.h=!1}var la={},Kr={};function Wr(i,c,h){i.M=1,i.A=As(Me(c)),i.u=h,i.R=!0,ua(i,null)}function ua(i,c){i.F=Date.now(),_s(i),i.B=Me(i.A);var h=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),Sa(h.i,"t",f),i.C=0,h=i.j.L,i.h=new ca,i.g=ja(i.j,h?c:null,!i.u),i.P>0&&(i.O=new sd(d(i.Y,i,i.g),i.P)),c=i.V,h=i.g,f=i.ba;var I="readystatechange";Array.isArray(I)||(I&&(Yo[0]=I.toString()),I=Yo);for(let _=0;_<I.length;_++){const k=Ko(h,I[_],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=i.J?zo(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Cn(),od(i.i,i.v,i.B,i.l,i.S,i.u)}st.prototype.ba=function(i){i=i.target;const c=this.O;c&&ot(i)==3?c.j():this.Y(i)},st.prototype.Y=function(i){try{if(i==this.g)e:{const j=ot(this.g),he=this.g.ya(),J=this.g.ca();if(!(j<3)&&(j!=3||this.g&&(this.h.h||this.g.la()||Na(this.g)))){this.K||j!=4||he==7||(he==8||J<=0?Cn(3):Cn(2)),Qr(this);var c=this.g.ca();this.X=c;var h=hd(this);if(this.o=c==200,ad(this.i,this.v,this.B,this.l,this.S,j,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,I=this.g;if((f=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(f)){var _=f;break t}}_=null}if(i=_)Gt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Xr(this,i);else{this.o=!1,this.m=3,Te(12),Nt(this),Rn(this);break e}}if(this.R){i=!0;let fe;for(;!this.K&&this.C<h.length;)if(fe=dd(this,h),fe==Kr){j==4&&(this.m=4,Te(14),i=!1),Gt(this.i,this.l,null,"[Incomplete Response]");break}else if(fe==la){this.m=4,Te(15),Gt(this.i,this.l,h,"[Invalid Chunk]"),i=!1;break}else Gt(this.i,this.l,fe,null),Xr(this,fe);if(ha(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),j!=4||h.length!=0||this.h.h||(this.m=1,Te(16),i=!1),this.o=this.o&&i,!i)Gt(this.i,this.l,h,"[Invalid Chunked Response]"),Nt(this),Rn(this);else if(h.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),ri(k),k.P=!0,Te(11))}}else Gt(this.i,this.l,h,null),Xr(this,h);j==4&&Nt(this),this.o&&!this.K&&(j==4?Ua(this.j,this):(this.o=!1,_s(this)))}else Ad(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Te(12)):(this.m=0,Te(13)),Nt(this),Rn(this)}}}catch{}finally{}};function hd(i){if(!ha(i))return i.g.la();const c=Na(i.g);if(c==="")return"";let h="";const f=c.length,I=ot(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Nt(i),Rn(i),"";i.h.i=new a.TextDecoder}for(let _=0;_<f;_++)i.h.h=!0,h+=i.h.i.decode(c[_],{stream:!(I&&_==f-1)});return c.length=0,i.h.g+=h,i.C=0,i.h.g}function ha(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function dd(i,c){var h=i.C,f=c.indexOf(`
`,h);return f==-1?Kr:(h=Number(c.substring(h,f)),isNaN(h)?la:(f+=1,f+h>c.length?Kr:(c=c.slice(f,f+h),i.C=f+h,c)))}st.prototype.cancel=function(){this.K=!0,Nt(this)};function _s(i){i.T=Date.now()+i.H,da(i,i.H)}function da(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=kn(d(i.aa,i),c)}function Qr(i){i.D&&(a.clearTimeout(i.D),i.D=null)}st.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(cd(this.i,this.B),this.M!=2&&(Cn(),Te(17)),Nt(this),this.m=2,Rn(this)):da(this,this.T-i)};function Rn(i){i.j.I==0||i.K||Ua(i.j,i)}function Nt(i){Qr(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Zo(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function Xr(i,c){try{var h=i.j;if(h.I!=0&&(h.g==i||Jr(h.h,i))){if(!i.L&&Jr(h.h,i)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<i.F)Ds(h),ks(h);else break e;si(h),Te(18)}}else h.xa=I[1],0<h.xa-h.K&&I[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=kn(d(h.Va,h),6e3));ma(h.h)<=1&&h.ta&&(h.ta=void 0)}else Rt(h,11)}else if((i.L||h.g==i)&&Ds(h),!y(c))for(I=h.Ba.g.parse(c),c=0;c<I.length;c++){let J=I[c];const fe=J[0];if(!(fe<=h.K))if(h.K=fe,J=J[1],h.I==2)if(J[0]=="c"){h.M=J[1],h.ba=J[2];const Ue=J[3];Ue!=null&&(h.ka=Ue,h.j.info("VER="+h.ka));const Qt=J[4];Qt!=null&&(h.za=Qt,h.j.info("SVER="+h.za));const at=J[5];at!=null&&typeof at=="number"&&at>0&&(f=1.5*at,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const ct=i.g;if(ct){const Ls=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ls){var _=f.h;_.g||Ls.indexOf("spdy")==-1&&Ls.indexOf("quic")==-1&&Ls.indexOf("h2")==-1||(_.j=_.l,_.g=new Set,_.h&&(Yr(_,_.h),_.h=null))}if(f.G){const ii=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;ii&&(f.wa=ii,X(f.J,f.G,ii))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-i.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var k=i;if(f.na=Ba(f,f.L?f.ba:null,f.W),k.L){ga(f.h,k);var j=k,he=f.O;he&&(j.H=he),j.D&&(Qr(j),_s(j)),f.g=k}else Pa(f);h.i.length>0&&Ns(h)}else J[0]!="stop"&&J[0]!="close"||Rt(h,7);else h.I==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Rt(h,7):ni(h):J[0]!="noop"&&h.l&&h.l.qa(J),h.A=0)}}Cn(4)}catch{}}var fd=class{constructor(i,c){this.g=i,this.map=c}};function fa(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pa(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ma(i){return i.h?1:i.g?i.g.size:0}function Jr(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Yr(i,c){i.g?i.g.add(c):i.h=c}function ga(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}fa.prototype.cancel=function(){if(this.i=ya(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ya(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const h of i.g.values())c=c.concat(h.G);return c}return C(i.i)}var va=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pd(i,c){if(i){i=i.split("&");for(let h=0;h<i.length;h++){const f=i[h].indexOf("=");let I,_=null;f>=0?(I=i[h].substring(0,f),_=i[h].substring(f+1)):I=i[h],c(I,_?decodeURIComponent(_.replace(/\+/g," ")):"")}}}function rt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof rt?(this.l=i.l,Ln(this,i.j),this.o=i.o,this.g=i.g,On(this,i.u),this.h=i.h,Zr(this,Ta(i.i)),this.m=i.m):i&&(c=String(i).match(va))?(this.l=!1,Ln(this,c[1]||"",!0),this.o=Pn(c[2]||""),this.g=Pn(c[3]||"",!0),On(this,c[4]),this.h=Pn(c[5]||"",!0),Zr(this,c[6]||"",!0),this.m=Pn(c[7]||"")):(this.l=!1,this.i=new Un(null,this.l))}rt.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(Mn(c,wa,!0),":");var h=this.g;return(h||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Mn(c,wa,!0),"@"),i.push(Dn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&i.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Mn(h,h.charAt(0)=="/"?yd:gd,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Mn(h,wd)),i.join("")},rt.prototype.resolve=function(i){const c=Me(this);let h=!!i.j;h?Ln(c,i.j):h=!!i.o,h?c.o=i.o:h=!!i.g,h?c.g=i.g:h=i.u!=null;var f=i.h;if(h)On(c,i.u);else if(h=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var I=c.h.lastIndexOf("/");I!=-1&&(f=c.h.slice(0,I+1)+f)}if(I=f,I==".."||I==".")f="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){f=I.lastIndexOf("/",0)==0,I=I.split("/");const _=[];for(let k=0;k<I.length;){const j=I[k++];j=="."?f&&k==I.length&&_.push(""):j==".."?((_.length>1||_.length==1&&_[0]!="")&&_.pop(),f&&k==I.length&&_.push("")):(_.push(j),f=!0)}f=_.join("/")}else f=I}return h?c.h=f:h=i.i.toString()!=="",h?Zr(c,Ta(i.i)):h=!!i.m,h&&(c.m=i.m),c};function Me(i){return new rt(i)}function Ln(i,c,h){i.j=h?Pn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function On(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function Zr(i,c,h){c instanceof Un?(i.i=c,bd(i.i,i.l)):(h||(c=Mn(c,vd)),i.i=new Un(c,i.l))}function X(i,c,h){i.i.set(c,h)}function As(i){return X(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Pn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Mn(i,c,h){return typeof i=="string"?(i=encodeURI(i).replace(c,md),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function md(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var wa=/[#\/\?@]/g,gd=/[#\?:]/g,yd=/[#\?]/g,vd=/[#\?@]/g,wd=/#/g;function Un(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Dt(i){i.g||(i.g=new Map,i.h=0,i.i&&pd(i.i,function(c,h){i.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}s=Un.prototype,s.add=function(i,c){Dt(this),this.i=null,i=Kt(this,i);let h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(c),this.h+=1,this};function ba(i,c){Dt(i),c=Kt(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Ea(i,c){return Dt(i),c=Kt(i,c),i.g.has(c)}s.forEach=function(i,c){Dt(this),this.g.forEach(function(h,f){h.forEach(function(I){i.call(c,I,f,this)},this)},this)};function Ia(i,c){Dt(i);let h=[];if(typeof c=="string")Ea(i,c)&&(h=h.concat(i.g.get(Kt(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)h=h.concat(i[c]);return h}s.set=function(i,c){return Dt(this),this.i=null,i=Kt(this,i),Ea(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},s.get=function(i,c){return i?(i=Ia(this,i),i.length>0?String(i[0]):c):c};function Sa(i,c,h){ba(i,c),h.length>0&&(i.i=null,i.g.set(Kt(i,c),C(h)),i.h+=h.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const I=Dn(h);h=Ia(this,h);for(let _=0;_<h.length;_++){let k=I;h[_]!==""&&(k+="="+Dn(h[_])),i.push(k)}}return this.i=i.join("&")};function Ta(i){const c=new Un;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function Kt(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function bd(i,c){c&&!i.j&&(Dt(i),i.i=null,i.g.forEach(function(h,f){const I=f.toLowerCase();f!=I&&(ba(this,f),Sa(this,I,h))},i)),i.j=c}function Ed(i,c){const h=new Nn;if(a.Image){const f=new Image;f.onload=p(it,h,"TestLoadImage: loaded",!0,c,f),f.onerror=p(it,h,"TestLoadImage: error",!1,c,f),f.onabort=p(it,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(it,h,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function Id(i,c){const h=new Nn,f=new AbortController,I=setTimeout(()=>{f.abort(),it(h,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(_=>{clearTimeout(I),_.ok?it(h,"TestPingServer: ok",!0,c):it(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(I),it(h,"TestPingServer: error",!1,c)})}function it(i,c,h,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(h)}catch{}}function Sd(){this.g=new id}function ei(i){this.i=i.Sb||null,this.h=i.ab||!1}m(ei,ea),ei.prototype.g=function(){return new xs(this.i,this.h)};function xs(i,c){ve.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(xs,ve),s=xs.prototype,s.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Vn(this)},s.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fn(this)),this.readyState=0},s.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_a(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function _a(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}s.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Fn(this):Vn(this),this.readyState==3&&_a(this)}},s.Oa=function(i){this.g&&(this.response=this.responseText=i,Fn(this))},s.Na=function(i){this.g&&(this.response=i,Fn(this))},s.ga=function(){this.g&&Fn(this)};function Fn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Vn(i)}s.setRequestHeader=function(i,c){this.A.append(i,c)},s.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=c.next();return i.join(`\r
`)};function Vn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(xs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Aa(i){let c="";return bs(i,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function ti(i,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Aa(h),typeof i=="string"?h!=null&&Dn(h):X(i,c,h))}function se(i){ve.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(se,ve);var Td=/^https?$/i,_d=["POST","PUT"];s=se.prototype,s.Fa=function(i){this.H=i},s.ea=function(i,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():aa.g(),this.g.onreadystatechange=T(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(_){xa(this,_);return}if(i=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)h.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const _ of f.keys())h.set(_,f.get(_));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(_=>_.toLowerCase()=="content-type"),I=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(_d,c,void 0)>=0)||f||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[_,k]of h)this.g.setRequestHeader(_,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(_){xa(this,_)}};function xa(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Ca(i),Cs(i)}function Ca(i){i.A||(i.A=!0,Se(i,"complete"),Se(i,"error"))}s.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Se(this,"complete"),Se(this,"abort"),Cs(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cs(this,!0)),se.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?ka(this):this.Xa())},s.Xa=function(){ka(this)};function ka(i){if(i.h&&typeof o<"u"){if(i.v&&ot(i)==4)setTimeout(i.Ca.bind(i),0);else if(Se(i,"readystatechange"),ot(i)==4){i.h=!1;try{const _=i.ca();e:switch(_){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=_===0){let k=String(i.D).match(va)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),f=!Td.test(k?k.toLowerCase():"")}h=f}if(h)Se(i,"complete"),Se(i,"success");else{i.o=6;try{var I=ot(i)>2?i.g.statusText:""}catch{I=""}i.l=I+" ["+i.ca()+"]",Ca(i)}}finally{Cs(i)}}}}function Cs(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const h=i.g;i.g=null,c||Se(i,"ready");try{h.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function ot(i){return i.g?i.g.readyState:0}s.ca=function(){try{return ot(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),rd(c)}};function Na(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Ad(i){const c={};i=(i.g&&ot(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(y(i[f]))continue;var h=ud(i[f]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const _=c[I]||[];c[I]=_,_.push(h)}Yh(c,function(f){return f.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(i,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||c}function Da(i){this.za=0,this.i=[],this.j=new Nn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Bn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Bn("baseRetryDelayMs",5e3,i),this.Za=Bn("retryDelaySeedMs",1e4,i),this.Ta=Bn("forwardChannelMaxRetries",2,i),this.va=Bn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new fa(i&&i.concurrentRequestLimit),this.Ba=new Sd,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Da.prototype,s.ka=8,s.I=1,s.connect=function(i,c,h,f){Te(0),this.W=i,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=Ba(this,null,this.W),Ns(this)};function ni(i){if(Ra(i),i.I==3){var c=i.V++,h=Me(i.J);if(X(h,"SID",i.M),X(h,"RID",c),X(h,"TYPE","terminate"),jn(i,h),c=new st(i,i.j,c),c.M=2,c.A=As(Me(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=ja(c.j,null),c.g.ea(c.A)),c.F=Date.now(),_s(c)}Va(i)}function ks(i){i.g&&(ri(i),i.g.cancel(),i.g=null)}function Ra(i){ks(i),i.v&&(a.clearTimeout(i.v),i.v=null),Ds(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Ns(i){if(!pa(i.h)&&!i.m){i.m=!0;var c=i.Ea;ue||g(),ee||(ue(),ee=!0),b.add(c,i),i.D=0}}function xd(i,c){return ma(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=kn(d(i.Ea,i,c),Fa(i,i.D)),i.D++,!0)}s.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const I=new st(this,this.j,i);let _=this.o;if(this.U&&(_?(_=zo(_),Go(_,this.U)):_=this.U),this.u!==null||this.R||(I.J=_,_=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Oa(this,I,c),h=Me(this.J),X(h,"RID",i),X(h,"CVER",22),this.G&&X(h,"X-HTTP-Session-Id",this.G),jn(this,h),_&&(this.R?c="headers="+Dn(Aa(_))+"&"+c:this.u&&ti(h,this.u,_)),Yr(this.h,I),this.Ra&&X(h,"TYPE","init"),this.S?(X(h,"$req",c),X(h,"SID","null"),I.U=!0,Wr(I,h,null)):Wr(I,h,c),this.I=2}}else this.I==3&&(i?La(this,i):this.i.length==0||pa(this.h)||La(this))};function La(i,c){var h;c?h=c.l:h=i.V++;const f=Me(i.J);X(f,"SID",i.M),X(f,"RID",h),X(f,"AID",i.K),jn(i,f),i.u&&i.o&&ti(f,i.u,i.o),h=new st(i,i.j,h,i.D+1),i.u===null&&(h.J=i.o),c&&(i.i=c.G.concat(i.i)),c=Oa(i,h,1e3),h.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Yr(i.h,h),Wr(h,f,c)}function jn(i,c){i.H&&bs(i.H,function(h,f){X(c,f,h)}),i.l&&bs({},function(h,f){X(c,f,h)})}function Oa(i,c,h){h=Math.min(i.i.length,h);const f=i.l?d(i.l.Ka,i.l,i):null;e:{var I=i.i;let j=-1;for(;;){const he=["count="+h];j==-1?h>0?(j=I[0].g,he.push("ofs="+j)):j=0:he.push("ofs="+j);let J=!0;for(let fe=0;fe<h;fe++){var _=I[fe].g;const Ue=I[fe].map;if(_-=j,_<0)j=Math.max(0,I[fe].g-100),J=!1;else try{_="req"+_+"_"||"";try{var k=Ue instanceof Map?Ue:Object.entries(Ue);for(const[Qt,at]of k){let ct=at;l(at)&&(ct=qr(at)),he.push(_+Qt+"="+encodeURIComponent(ct))}}catch(Qt){throw he.push(_+"type="+encodeURIComponent("_badmap")),Qt}}catch{f&&f(Ue)}}if(J){k=he.join("&");break e}}k=void 0}return i=i.i.splice(0,h),c.G=i,k}function Pa(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;ue||g(),ee||(ue(),ee=!0),b.add(c,i),i.A=0}}function si(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=kn(d(i.Da,i),Fa(i,i.A)),i.A++,!0)}s.Da=function(){if(this.v=null,Ma(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=kn(d(this.Wa,this),i)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Te(10),ks(this),Ma(this))};function ri(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Ma(i){i.g=new st(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Me(i.na);X(c,"RID","rpc"),X(c,"SID",i.M),X(c,"AID",i.K),X(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&X(c,"TO",i.ia),X(c,"TYPE","xmlhttp"),jn(i,c),i.u&&i.o&&ti(c,i.u,i.o),i.O&&(i.g.H=i.O);var h=i.g;i=i.ba,h.M=1,h.A=As(Me(c)),h.u=null,h.R=!0,ua(h,i)}s.Va=function(){this.C!=null&&(this.C=null,ks(this),si(this),Te(19))};function Ds(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Ua(i,c){var h=null;if(i.g==c){Ds(i),ri(i),i.g=null;var f=2}else if(Jr(i.h,c))h=c.G,ga(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var I=i.D;f=Ss(),Se(f,new ia(f,h)),Ns(i)}else Pa(i);else if(I=c.m,I==3||I==0&&c.X>0||!(f==1&&xd(i,c)||f==2&&si(i)))switch(h&&h.length>0&&(c=i.h,c.i=c.i.concat(h)),I){case 1:Rt(i,5);break;case 4:Rt(i,10);break;case 3:Rt(i,6);break;default:Rt(i,2)}}}function Fa(i,c){let h=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(h*=2),h*c}function Rt(i,c){if(i.j.info("Error code "+c),c==2){var h=d(i.bb,i),f=i.Ua;const I=!f;f=new rt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ln(f,"https"),As(f),I?Ed(f.toString(),h):Id(f.toString(),h)}else Te(2);i.I=0,i.l&&i.l.pa(c),Va(i),Ra(i)}s.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))};function Va(i){if(i.I=0,i.ja=[],i.l){const c=ya(i.h);(c.length!=0||i.i.length!=0)&&(N(i.ja,c),N(i.ja,i.i),i.h.i.length=0,C(i.i),i.i.length=0),i.l.oa()}}function Ba(i,c,h){var f=h instanceof rt?Me(h):new rt(h);if(f.g!="")c&&(f.g=c+"."+f.g),On(f,f.u);else{var I=a.location;f=I.protocol,c=c?c+"."+I.hostname:I.hostname,I=+I.port;const _=new rt(null);f&&Ln(_,f),c&&(_.g=c),I&&On(_,I),h&&(_.h=h),f=_}return h=i.G,c=i.wa,h&&c&&X(f,h,c),X(f,"VER",i.ka),jn(i,f),f}function ja(i,c,h){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new se(new ei({ab:h})):new se(i.ma),c.Fa(i.L),c}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function $a(){}s=$a.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function Rs(){}Rs.prototype.g=function(i,c){return new ke(i,c)};function ke(i,c){ve.call(this),this.g=new Da(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!y(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Wt(this)}m(ke,ve),ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ke.prototype.close=function(){ni(this.g)},ke.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.v&&(h={},h.__data__=qr(i),i=h);c.i.push(new fd(c.Ya++,i)),c.I==3&&Ns(c)},ke.prototype.N=function(){this.g.l=null,delete this.j,ni(this.g),delete this.g,ke.Z.N.call(this)};function qa(i){zr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const h in c){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}m(qa,zr);function za(){Hr.call(this),this.status=1}m(za,Hr);function Wt(i){this.g=i}m(Wt,$a),Wt.prototype.ra=function(){Se(this.g,"a")},Wt.prototype.qa=function(i){Se(this.g,new qa(i))},Wt.prototype.pa=function(i){Se(this.g,new za)},Wt.prototype.oa=function(){Se(this.g,"b")},Rs.prototype.createWebChannel=Rs.prototype.g,ke.prototype.send=ke.prototype.o,ke.prototype.open=ke.prototype.m,ke.prototype.close=ke.prototype.close,Hl=function(){return new Rs},zl=function(){return Ss()},ql=kt,xi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ts.NO_ERROR=0,Ts.TIMEOUT=8,Ts.HTTP_ERROR=6,js=Ts,oa.COMPLETE="complete",$l=oa,ta.EventType=xn,xn.OPEN="a",xn.CLOSE="b",xn.ERROR="c",xn.MESSAGE="d",ve.prototype.listen=ve.prototype.J,$n=ta,se.prototype.listenOnce=se.prototype.K,se.prototype.getLastError=se.prototype.Ha,se.prototype.getLastErrorCode=se.prototype.ya,se.prototype.getStatus=se.prototype.ca,se.prototype.getResponseJson=se.prototype.La,se.prototype.getResponseText=se.prototype.la,se.prototype.send=se.prototype.ea,se.prototype.setWithCredentials=se.prototype.Fa,jl=se}).apply(typeof Os<"u"?Os:typeof self<"u"?self:typeof window<"u"?window:{});const rc="@firebase/firestore",ic="4.9.2";/**
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
*/let wn="12.3.0";/**
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
*/const Vt=new Wi("@firebase/firestore");function Jt(){return Vt.logLevel}function O(s,...e){if(Vt.logLevel<=$.DEBUG){const t=e.map(Ji);Vt.debug(`Firestore (${wn}): ${s}`,...t)}}function Je(s,...e){if(Vt.logLevel<=$.ERROR){const t=e.map(Ji);Vt.error(`Firestore (${wn}): ${s}`,...t)}}function un(s,...e){if(Vt.logLevel<=$.WARN){const t=e.map(Ji);Vt.warn(`Firestore (${wn}): ${s}`,...t)}}function Ji(s){if(typeof s=="string")return s;try{/**
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
*/return function(e){return JSON.stringify(e)}(s)}catch{return s}}/**
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
*/function M(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Gl(s,n,t)}function Gl(s,e,t){let n=`FIRESTORE (${wn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Je(n),new Error(n)}function W(s,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,s||Gl(e,r,n)}function V(s,e){return s}/**
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
*/const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends nt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
*/class Kl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(be.UNAUTHENTICATED))}shutdown(){}}class Ep{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ip{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0,42304);let n=this.i;const r=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let o=new Qe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qe,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},l=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qe)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(W(typeof n.accessToken=="string",31837,{l:n}),new Kl(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{h:e}),new be(e)}}class Sp{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=be.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Tp{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Sp(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _p{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ve(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){W(this.o===void 0,3512);const n=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>n(o))};const r=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new oc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new oc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
*/function Ap(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
*/class Yi{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=Ap(40);for(let o=0;o<r.length;++o)n.length<20&&r[o]<t&&(n+=e.charAt(r[o]%62))}return n}}function q(s,e){return s<e?-1:s>e?1:0}function Ci(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const r=s.charAt(n),o=e.charAt(n);if(r!==o)return fi(r)===fi(o)?q(r,o):fi(r)?1:-1}return q(s.length,e.length)}const xp=55296,Cp=57343;function fi(s){const e=s.charCodeAt(0);return e>=xp&&e<=Cp}function hn(s,e,t){return s.length===e.length&&s.every((n,r)=>t(n,e[r]))}/**
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
*/const ac="__name__";class Fe{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&M(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Fe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fe?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const o=Fe.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return q(e.length,t.length)}static compareSegments(e,t){const n=Fe.isNumericId(e),r=Fe.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Fe.extractNumericId(e).compare(Fe.extractNumericId(t)):Ci(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vt.fromString(e.substring(4,e.length-2))}}class Q extends Fe{construct(e,t,n){return new Q(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new D(A.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(r=>r.length>0))}return new Q(t)}static emptyPath(){return new Q([])}}const kp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends Fe{construct(e,t,n){return new ge(e,t,n)}static isValidIdentifier(e){return kp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ac}static keyField(){return new ge([ac])}static fromServerFormat(e){const t=[];let n="",r=0;const o=()=>{if(n.length===0)throw new D(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new D(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new D(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(n+=l,r++):(o(),r++)}if(o(),a)throw new D(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
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
*/class P{constructor(e){this.path=e}static fromPath(e){return new P(Q.fromString(e))}static fromName(e){return new P(Q.fromString(e).popFirst(5))}static empty(){return new P(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new Q(e.slice()))}}/**
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
*/function Wl(s,e,t){if(!t)throw new D(A.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function Np(s,e,t,n){if(e===!0&&n===!0)throw new D(A.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function cc(s){if(!P.isDocumentKey(s))throw new D(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function lc(s){if(P.isDocumentKey(s))throw new D(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function Ql(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function yr(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":M(12329,{type:typeof s})}function Ye(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new D(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=yr(s);throw new D(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
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
*/function ce(s,e){const t={typeString:s};return e&&(t.value=e),t}function us(s,e){if(!Ql(s))throw new D(A.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,o="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const a=s[n];if(r&&typeof a!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${n}' field to equal '${o.value}'`;break}}if(t)throw new D(A.INVALID_ARGUMENT,t);return!0}/**
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
*/const uc=-62135596800,hc=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*hc);return new Y(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<uc)throw new D(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hc}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(us(e,Y._jsonSchema))return new Y(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-uc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:ce("string",Y._jsonSchemaVersion),seconds:ce("number"),nanoseconds:ce("number")};/**
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
*/class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new Y(0,0))}static max(){return new F(new Y(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
*/const es=-1;function Dp(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=F.fromTimestamp(n===1e9?new Y(t+1,0):new Y(t,n));return new bt(r,P.empty(),e)}function Rp(s){return new bt(s.readTime,s.key,es)}class bt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new bt(F.min(),P.empty(),es)}static max(){return new bt(F.max(),P.empty(),es)}}function Lp(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=P.comparator(s.documentKey,e.documentKey),t!==0?t:q(s.largestBatchId,e.largestBatchId))}/**
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
*/async function bn(s){if(s.code!==A.FAILED_PRECONDITION||s.message!==Op)throw s;O("LocalStore","Unexpectedly lost primary lease")}/**
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
*/class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x((n,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):x.reject(t)}static resolve(e){return new x((t,n)=>{t(e)})}static reject(e){return new x((t,n)=>{n(e)})}static waitFor(e){return new x((t,n)=>{let r=0,o=0,a=!1;e.forEach(l=>{++r,l.next(()=>{++o,a&&o===r&&t()},u=>n(u))}),a=!0,o===r&&t()})}static or(e){let t=x.resolve(!1);for(const n of e)t=t.next(r=>r?x.resolve(r):n());return t}static forEach(e,t){const n=[];return e.forEach((r,o)=>{n.push(t.call(this,r,o))}),this.waitFor(n)}static mapArray(e,t){return new x((n,r)=>{const o=e.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++l,l===o&&n(a)},p=>r(p))}})}static doWhile(e,t){return new x((n,r)=>{const o=()=>{e()===!0?t().next(()=>{o()},r):n()};o()})}}function Mp(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function En(s){return s.name==="IndexedDbTransactionError"}/**
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
*/class vr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}vr.ce=-1;/**
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
*/const Zi=-1;function wr(s){return s==null}function Zs(s){return s===0&&1/s==-1/0}function Up(s){return typeof s=="number"&&Number.isInteger(s)&&!Zs(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
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
*/const Xl="";function Fp(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=dc(e)),e=Vp(s.get(t),e);return dc(e)}function Vp(s,e){let t=e;const n=s.length;for(let r=0;r<n;r++){const o=s.charAt(r);switch(o){case"\0":t+="";break;case Xl:t+="";break;default:t+=o}}return t}function dc(s){return s+Xl+""}/**
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
*/function fc(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function At(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function Jl(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
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
*/class te{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ps(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ps(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ps(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ps(this.root,e,this.comparator,!0)}}class Ps{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,n,r,o){this.key=e,this.value=t,this.color=n??me.RED,this.left=r??me.EMPTY,this.right=o??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,o){return new me(e??this.key,t??this.value,n??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const o=n(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,n),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return me.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(s,e,t,n,r){return this}insert(s,e,t){return new me(s,e)}remove(s,e){return this}isEmpty(){return!0}inorderTraversal(s){return!1}reverseTraversal(s){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
*/class de{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new pc(this.data.getIterator())}getIteratorFrom(e){return new pc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=n.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class pc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
*/class Ne{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new Ne([])}unionWith(e){let t=new de(ge.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ne(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
*/class Yl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
*/class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(n){try{return atob(n)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Yl("Invalid base64 string: "+r):r}}(e);return new ye(t)}static fromUint8Array(e){const t=function(n){let r="";for(let o=0;o<n.length;++o)r+=String.fromCharCode(n[o]);return r}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const Bp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(s){if(W(!!s,39018),typeof s=="string"){let e=0;const t=Bp.exec(s);if(W(!!t,46558,{timestamp:s}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:re(s.seconds),nanos:re(s.nanos)}}function re(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function It(s){return typeof s=="string"?ye.fromBase64String(s):ye.fromUint8Array(s)}/**
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
*/const Zl="server_timestamp",eu="__type__",tu="__previous_value__",nu="__local_write_time__";function eo(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)==null?void 0:e.fields)||{})[eu])==null?void 0:t.stringValue)===Zl}function br(s){const e=s.mapValue.fields[tu];return eo(e)?br(e):e}function ts(s){const e=Et(s.mapValue.fields[nu].timestampValue);return new Y(e.seconds,e.nanos)}/**
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
*/class jp{constructor(e,t,n,r,o,a,l,u,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=p}}const er="(default)";class ns{constructor(e,t){this.projectId=e,this.database=t||er}static empty(){return new ns("","")}get isDefaultDatabase(){return this.database===er}isEqual(e){return e instanceof ns&&e.projectId===this.projectId&&e.database===this.database}}/**
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
*/const su="__type__",$p="__max__",Ms={mapValue:{}},ru="__vector__",tr="value";function St(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?eo(s)?4:zp(s)?9007199254740991:qp(s)?10:11:M(28295,{value:s})}function Ge(s,e){if(s===e)return!0;const t=St(s);if(t!==St(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return ts(s).isEqual(ts(e));case 3:return function(n,r){if(typeof n.timestampValue=="string"&&typeof r.timestampValue=="string"&&n.timestampValue.length===r.timestampValue.length)return n.timestampValue===r.timestampValue;const o=Et(n.timestampValue),a=Et(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(s,e);case 5:return s.stringValue===e.stringValue;case 6:return function(n,r){return It(n.bytesValue).isEqual(It(r.bytesValue))}(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return function(n,r){return re(n.geoPointValue.latitude)===re(r.geoPointValue.latitude)&&re(n.geoPointValue.longitude)===re(r.geoPointValue.longitude)}(s,e);case 2:return function(n,r){if("integerValue"in n&&"integerValue"in r)return re(n.integerValue)===re(r.integerValue);if("doubleValue"in n&&"doubleValue"in r){const o=re(n.doubleValue),a=re(r.doubleValue);return o===a?Zs(o)===Zs(a):isNaN(o)&&isNaN(a)}return!1}(s,e);case 9:return hn(s.arrayValue.values||[],e.arrayValue.values||[],Ge);case 10:case 11:return function(n,r){const o=n.mapValue.fields||{},a=r.mapValue.fields||{};if(fc(o)!==fc(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ge(o[l],a[l])))return!1;return!0}(s,e);default:return M(52216,{left:s})}}function ss(s,e){return(s.values||[]).find(t=>Ge(t,e))!==void 0}function dn(s,e){if(s===e)return 0;const t=St(s),n=St(e);if(t!==n)return q(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(s.booleanValue,e.booleanValue);case 2:return function(r,o){const a=re(r.integerValue||r.doubleValue),l=re(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(s,e);case 3:return mc(s.timestampValue,e.timestampValue);case 4:return mc(ts(s),ts(e));case 5:return Ci(s.stringValue,e.stringValue);case 6:return function(r,o){const a=It(r),l=It(o);return a.compareTo(l)}(s.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=q(a[u],l[u]);if(d!==0)return d}return q(a.length,l.length)}(s.referenceValue,e.referenceValue);case 8:return function(r,o){const a=q(re(r.latitude),re(o.latitude));return a!==0?a:q(re(r.longitude),re(o.longitude))}(s.geoPointValue,e.geoPointValue);case 9:return gc(s.arrayValue,e.arrayValue);case 10:return function(r,o){var a,l,u,d;const p=r.fields||{},m=o.fields||{},T=(a=p[tr])==null?void 0:a.arrayValue,C=(l=m[tr])==null?void 0:l.arrayValue,N=q(((u=T==null?void 0:T.values)==null?void 0:u.length)||0,((d=C==null?void 0:C.values)==null?void 0:d.length)||0);return N!==0?N:gc(T,C)}(s.mapValue,e.mapValue);case 11:return function(r,o){if(r===Ms.mapValue&&o===Ms.mapValue)return 0;if(r===Ms.mapValue)return 1;if(o===Ms.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=Ci(l[p],d[p]);if(m!==0)return m;const T=dn(a[l[p]],u[d[p]]);if(T!==0)return T}return q(l.length,d.length)}(s.mapValue,e.mapValue);default:throw M(23264,{he:t})}}function mc(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return q(s,e);const t=Et(s),n=Et(e),r=q(t.seconds,n.seconds);return r!==0?r:q(t.nanos,n.nanos)}function gc(s,e){const t=s.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const o=dn(t[r],n[r]);if(o)return o}return q(t.length,n.length)}function fn(s){return ki(s)}function ki(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(e){const t=Et(e);return`time(${t.seconds},${t.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(e){return It(e).toBase64()}(s.bytesValue):"referenceValue"in s?function(e){return P.fromName(e).toString()}(s.referenceValue):"geoPointValue"in s?function(e){return`geo(${e.latitude},${e.longitude})`}(s.geoPointValue):"arrayValue"in s?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ki(r);return t+"]"}(s.arrayValue):"mapValue"in s?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const o of t)r?r=!1:n+=",",n+=`${o}:${ki(e.fields[o])}`;return n+"}"}(s.mapValue):M(61005,{value:s})}function $s(s){switch(St(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=br(s);return e?16+$s(e):16;case 5:return 2*s.stringValue.length;case 6:return It(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce((n,r)=>n+$s(r),0)}(s.arrayValue);case 10:case 11:return function(t){let n=0;return At(t.fields,(r,o)=>{n+=r.length+$s(o)}),n}(s.mapValue);default:throw M(13486,{value:s})}}function yc(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function Ni(s){return!!s&&"integerValue"in s}function to(s){return!!s&&"arrayValue"in s}function vc(s){return!!s&&"nullValue"in s}function wc(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function qs(s){return!!s&&"mapValue"in s}function qp(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)==null?void 0:e.fields)||{})[su])==null?void 0:t.stringValue)===ru}function Wn(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return At(s.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Wn(n)),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wn(s.arrayValue.values[t]);return e}return{...s}}function zp(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===$p}/**
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
*/class Ce{constructor(e){this.value=e}static empty(){return new Ce({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!qs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wn(t)}setAll(e){let t=ge.emptyPath(),n={},r=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,n,r),n={},r=[],t=l.popLast()}a?n[l.lastSegment()]=Wn(a):r.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,n,r)}delete(e){const t=this.field(e.popLast());qs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ge(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];qs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){At(t,(r,o)=>e[r]=o);for(const r of n)delete e[r]}clone(){return new Ce(Wn(this.value))}}function iu(s){const e=[];return At(s.fields,(t,n)=>{const r=new ge([t]);if(qs(n)){const o=iu(n.mapValue).fields;if(o.length===0)e.push(r);else for(const a of o)e.push(r.child(a))}else e.push(r)}),new Ne(e)}/**
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
*/class Ee{constructor(e,t,n,r,o,a,l){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ee(e,0,F.min(),F.min(),F.min(),Ce.empty(),0)}static newFoundDocument(e,t,n,r){return new Ee(e,1,t,F.min(),n,r,0)}static newNoDocument(e,t){return new Ee(e,2,t,F.min(),F.min(),Ce.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,F.min(),F.min(),Ce.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ce.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
*/class nr{constructor(e,t){this.position=e,this.inclusive=t}}function bc(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const o=e[r],a=s.position[r];if(o.field.isKeyField()?n=P.comparator(P.fromName(a.referenceValue),t.key):n=dn(a,t.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ec(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!Ge(s.position[t],e.position[t]))return!1;return!0}/**
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
*/class rs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hp(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
*/class ou{}class ae extends ou{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Kp(e,t,n):t==="array-contains"?new Xp(e,n):t==="in"?new Jp(e,n):t==="not-in"?new Yp(e,n):t==="array-contains-any"?new Zp(e,n):new ae(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Wp(e,n):new Qp(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(dn(t,this.value)):t!==null&&St(this.value)===St(t)&&this.matchesComparison(dn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pe extends ou{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Pe(e,t)}matches(e){return au(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function au(s){return s.op==="and"}function cu(s){return Gp(s)&&au(s)}function Gp(s){for(const e of s.filters)if(e instanceof Pe)return!1;return!0}function Di(s){if(s instanceof ae)return s.field.canonicalString()+s.op.toString()+fn(s.value);if(cu(s))return s.filters.map(e=>Di(e)).join(",");{const e=s.filters.map(t=>Di(t)).join(",");return`${s.op}(${e})`}}function lu(s,e){return s instanceof ae?function(t,n){return n instanceof ae&&t.op===n.op&&t.field.isEqual(n.field)&&Ge(t.value,n.value)}(s,e):s instanceof Pe?function(t,n){return n instanceof Pe&&t.op===n.op&&t.filters.length===n.filters.length?t.filters.reduce((r,o,a)=>r&&lu(o,n.filters[a]),!0):!1}(s,e):void M(19439)}function uu(s){return s instanceof ae?function(e){return`${e.field.canonicalString()} ${e.op} ${fn(e.value)}`}(s):s instanceof Pe?function(e){return e.op.toString()+" {"+e.getFilters().map(uu).join(" ,")+"}"}(s):"Filter"}class Kp extends ae{constructor(e,t,n){super(e,t,n),this.key=P.fromName(n.referenceValue)}matches(e){const t=P.comparator(e.key,this.key);return this.matchesComparison(t)}}class Wp extends ae{constructor(e,t){super(e,"in",t),this.keys=hu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Qp extends ae{constructor(e,t){super(e,"not-in",t),this.keys=hu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function hu(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>P.fromName(n.referenceValue))}class Xp extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return to(t)&&ss(t.arrayValue,this.value)}}class Jp extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ss(this.value.arrayValue,t)}}class Yp extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(ss(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ss(this.value.arrayValue,t)}}class Zp extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!to(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>ss(this.value.arrayValue,n))}}/**
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
*/class em{constructor(e,t=null,n=[],r=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function Ic(s,e=null,t=[],n=[],r=null,o=null,a=null){return new em(s,e,t,n,r,o,a)}function no(s){const e=V(s);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Di(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(r){return r.field.canonicalString()+r.dir}(n)).join(","),wr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>fn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>fn(n)).join(",")),e.Te=t}return e.Te}function so(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!Hp(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!lu(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!Ec(s.startAt,e.startAt)&&Ec(s.endAt,e.endAt)}function Ri(s){return P.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
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
*/class In{constructor(e,t=null,n=[],r=[],o=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function tm(s,e,t,n,r,o,a,l){return new In(s,e,t,n,r,o,a,l)}function ro(s){return new In(s)}function Sc(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function du(s){return s.collectionGroup!==null}function Qn(s){const e=V(s);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(r){let o=new de(ge.comparator);return r.filters.forEach(a=>{a.getFlattenedFilters().forEach(l=>{l.isInequality()&&(o=o.add(l.field))})}),o})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new rs(r,n))}),t.has(ge.keyField().canonicalString())||e.Ie.push(new rs(ge.keyField(),n))}return e.Ie}function Be(s){const e=V(s);return e.Ee||(e.Ee=nm(e,Qn(s))),e.Ee}function nm(s,e){if(s.limitType==="F")return Ic(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map(r=>{const o=r.dir==="desc"?"asc":"desc";return new rs(r.field,o)});const t=s.endAt?new nr(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new nr(s.startAt.position,s.startAt.inclusive):null;return Ic(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function Li(s,e){const t=s.filters.concat([e]);return new In(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function Oi(s,e,t){return new In(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function Er(s,e){return so(Be(s),Be(e))&&s.limitType===e.limitType}function fu(s){return`${no(Be(s))}|lt:${s.limitType}`}function Yt(s){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>uu(n)).join(", ")}]`),wr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>fn(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>fn(n)).join(",")),`Target(${t})`}(Be(s))}; limitType=${s.limitType})`}function Ir(s,e){return e.isFoundDocument()&&function(t,n){const r=n.key.path;return t.collectionGroup!==null?n.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):P.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(s,e)&&function(t,n){for(const r of Qn(t))if(!r.field.isKeyField()&&n.data.field(r.field)===null)return!1;return!0}(s,e)&&function(t,n){for(const r of t.filters)if(!r.matches(n))return!1;return!0}(s,e)&&function(t,n){return!(t.startAt&&!function(r,o,a){const l=bc(r,o,a);return r.inclusive?l<=0:l<0}(t.startAt,Qn(t),n)||t.endAt&&!function(r,o,a){const l=bc(r,o,a);return r.inclusive?l>=0:l>0}(t.endAt,Qn(t),n))}(s,e)}function sm(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function pu(s){return(e,t)=>{let n=!1;for(const r of Qn(s)){const o=rm(r,e,t);if(o!==0)return o;n=n||r.field.isKeyField()}return 0}}function rm(s,e,t){const n=s.field.isKeyField()?P.comparator(e.key,t.key):function(r,o,a){const l=o.data.field(r),u=a.data.field(r);return l!==null&&u!==null?dn(l,u):M(42886)}(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:s.dir})}}/**
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
*/class qt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,o]of n)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){At(this.inner,(t,n)=>{for(const[r,o]of n)e(r,o)})}isEmpty(){return Jl(this.inner)}size(){return this.innerSize}}/**
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
*/const im=new te(P.comparator);function Ze(){return im}const mu=new te(P.comparator);function qn(...s){let e=mu;for(const t of s)e=e.insert(t.key,t);return e}function gu(s){let e=mu;return s.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Ot(){return Xn()}function yu(){return Xn()}function Xn(){return new qt(s=>s.toString(),(s,e)=>s.isEqual(e))}const om=new te(P.comparator),am=new de(P.comparator);function z(...s){let e=am;for(const t of s)e=e.add(t);return e}const cm=new de(q);function lm(){return cm}/**
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
*/function io(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zs(e)?"-0":e}}function vu(s){return{integerValue:""+s}}function um(s,e){return Up(e)?vu(e):io(s,e)}/**
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
*/class Sr{constructor(){this._=void 0}}function hm(s,e,t){return s instanceof sr?function(n,r){const o={fields:{[eu]:{stringValue:Zl},[nu]:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return r&&eo(r)&&(r=br(r)),r&&(o.fields[tu]=r),{mapValue:o}}(t,e):s instanceof is?bu(s,e):s instanceof os?Eu(s,e):function(n,r){const o=wu(n,r),a=Tc(o)+Tc(n.Ae);return Ni(o)&&Ni(n.Ae)?vu(a):io(n.serializer,a)}(s,e)}function dm(s,e,t){return s instanceof is?bu(s,e):s instanceof os?Eu(s,e):t}function wu(s,e){return s instanceof rr?function(t){return Ni(t)||function(n){return!!n&&"doubleValue"in n}(t)}(e)?e:{integerValue:0}:null}class sr extends Sr{}class is extends Sr{constructor(e){super(),this.elements=e}}function bu(s,e){const t=Iu(e);for(const n of s.elements)t.some(r=>Ge(r,n))||t.push(n);return{arrayValue:{values:t}}}class os extends Sr{constructor(e){super(),this.elements=e}}function Eu(s,e){let t=Iu(e);for(const n of s.elements)t=t.filter(r=>!Ge(r,n));return{arrayValue:{values:t}}}class rr extends Sr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Tc(s){return re(s.integerValue||s.doubleValue)}function Iu(s){return to(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function fm(s,e){return s.field.isEqual(e.field)&&function(t,n){return t instanceof is&&n instanceof is||t instanceof os&&n instanceof os?hn(t.elements,n.elements,Ge):t instanceof rr&&n instanceof rr?Ge(t.Ae,n.Ae):t instanceof sr&&n instanceof sr}(s.transform,e.transform)}class pm{constructor(e,t){this.version=e,this.transformResults=t}}class Oe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Oe}static exists(e){return new Oe(void 0,e)}static updateTime(e){return new Oe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zs(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Tr{}function Su(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new oo(s.key,Oe.none()):new hs(s.key,s.data,Oe.none());{const t=s.data,n=Ce.empty();let r=new de(ge.comparator);for(let o of e.fields)if(!r.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?n.delete(o):n.set(o,a),r=r.add(o)}return new xt(s.key,n,new Ne(r.toArray()),Oe.none())}}function mm(s,e,t){s instanceof hs?function(n,r,o){const a=n.value.clone(),l=Ac(n.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(s,e,t):s instanceof xt?function(n,r,o){if(!zs(n.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Ac(n.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(Tu(n)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(s,e,t):function(n,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Jn(s,e,t,n){return s instanceof hs?function(r,o,a,l){if(!zs(r.precondition,o))return a;const u=r.value.clone(),d=xc(r.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(s,e,t,n):s instanceof xt?function(r,o,a,l){if(!zs(r.precondition,o))return a;const u=xc(r.fieldTransforms,l,o),d=o.data;return d.setAll(Tu(r)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(p=>p.field))}(s,e,t,n):function(r,o,a){return zs(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(s,e,t)}function gm(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),o=wu(n.transform,r||null);o!=null&&(t===null&&(t=Ce.empty()),t.set(n.field,o))}return t||null}function _c(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!function(t,n){return t===void 0&&n===void 0||!(!t||!n)&&hn(t,n,(r,o)=>fm(r,o))}(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class hs extends Tr{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class xt extends Tr{constructor(e,t,n,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Tu(s){const e=new Map;return s.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}}),e}function Ac(s,e,t){const n=new Map;W(s.length===t.length,32656,{Re:t.length,Ve:s.length});for(let r=0;r<t.length;r++){const o=s[r],a=o.transform,l=e.data.field(o.field);n.set(o.field,dm(a,l,t[r]))}return n}function xc(s,e,t){const n=new Map;for(const r of s){const o=r.transform,a=t.data.field(r.field);n.set(r.field,hm(o,a,e))}return n}class oo extends Tr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ym extends Tr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
*/class vm{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&mm(o,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Jn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Jn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=yu();return this.mutations.forEach(r=>{const o=e.get(r.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(r.key)?null:l;const u=Su(a,l);u!==null&&n.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&hn(this.mutations,e.mutations,(t,n)=>_c(t,n))&&hn(this.baseMutations,e.baseMutations,(t,n)=>_c(t,n))}}class ao{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){W(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=function(){return om}();const o=e.mutations;for(let a=0;a<o.length;a++)r=r.insert(o[a].key,n[a].version);return new ao(e,t,n,r)}}/**
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
*/var ie,H;function Em(s){switch(s){case A.OK:return M(64938);case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0;default:return M(15467,{code:s})}}function _u(s){if(s===void 0)return Je("GRPC error has no .code"),A.UNKNOWN;switch(s){case ie.OK:return A.OK;case ie.CANCELLED:return A.CANCELLED;case ie.UNKNOWN:return A.UNKNOWN;case ie.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case ie.INTERNAL:return A.INTERNAL;case ie.UNAVAILABLE:return A.UNAVAILABLE;case ie.UNAUTHENTICATED:return A.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case ie.NOT_FOUND:return A.NOT_FOUND;case ie.ALREADY_EXISTS:return A.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return A.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case ie.ABORTED:return A.ABORTED;case ie.OUT_OF_RANGE:return A.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return A.UNIMPLEMENTED;case ie.DATA_LOSS:return A.DATA_LOSS;default:return M(39323,{code:s})}}(H=ie||(ie={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
*/function Im(){return new TextEncoder}/**
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
*/const Sm=new vt([4294967295,4294967295],0);function Cc(s){const e=Im().encode(s),t=new Bl;return t.update(e),new Uint8Array(t.digest())}function kc(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new vt([t,n],0),new vt([r,o],0)]}class co{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new zn(`Invalid padding: ${t}`);if(n<0)throw new zn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new zn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new zn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vt.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(vt.fromNumber(n)));return r.compare(Sm)===1&&(r=new vt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Cc(e),[n,r]=kc(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,r,o);if(!this.we(a))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new co(o,r,t);return n.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=Cc(e),[n,r]=kc(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,r,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class zn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
*/class _r{constructor(e,t,n,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,ds.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new _r(F.min(),r,new te(q),Ze(),z())}}class ds{constructor(e,t,n,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ds(n,t,z(),z(),z())}}/**
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
*/class Hs{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class Au{constructor(e,t){this.targetId=e,this.Ce=t}}class xu{constructor(e,t,n=ye.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Nc{constructor(){this.ve=0,this.Fe=Dc(),this.Me=ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=z(),t=z(),n=z();return this.Fe.forEach((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:M(38017,{changeType:o})}}),new ds(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Dc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,W(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Tm{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ze(),this.Je=Us(),this.He=Us(),this.Ye=new te(q)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:M(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,r)=>{this.rt(r)&&t(r)})}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const o=r.target;if(Ri(o))if(n===0){const a=new P(o.path);this.et(t,a,Ee.newNoDocument(a,F.min()))}else W(n===1,20013,{expectedCount:n});else{const a=this._t(t);if(a!==n){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:o=0}=t;let a,l;try{a=It(n).toUint8Array()}catch(u){if(u instanceof Yl)return un("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new co(a,r,o)}catch(u){return un(u instanceof zn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach(o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.et(t,o,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((o,a)=>{const l=this.ot(a);if(l){if(o.current&&Ri(l.target)){const u=new P(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ee.newNoDocument(u,e))}o.Be&&(t.set(a,o.ke()),o.qe())}});let n=z();this.He.forEach((o,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.je.forEach((o,a)=>a.setReadTime(e));const r=new _r(e,t,this.Ye,this.je,n);return this.je=Ze(),this.Je=Us(),this.He=Us(),this.Ye=new te(q),r}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Nc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new de(q),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new de(q),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Nc),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Us(){return new te(P.comparator)}function Dc(){return new te(P.comparator)}const _m={asc:"ASCENDING",desc:"DESCENDING"},Am={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xm={and:"AND",or:"OR"};class Cm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pi(s,e){return s.useProto3Json||wr(e)?e:{value:e}}function ir(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cu(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function km(s,e){return ir(s,e.toTimestamp())}function je(s){return W(!!s,49232),F.fromTimestamp(function(e){const t=Et(e);return new Y(t.seconds,t.nanos)}(s))}function lo(s,e){return Mi(s,e).canonicalString()}function Mi(s,e){const t=function(n){return new Q(["projects",n.projectId,"databases",n.database])}(s).child("documents");return e===void 0?t:t.child(e)}function ku(s){const e=Q.fromString(s);return W(Ou(e),10190,{key:e.toString()}),e}function Ui(s,e){return lo(s.databaseId,e.path)}function pi(s,e){const t=ku(e);if(t.get(1)!==s.databaseId.projectId)throw new D(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new D(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new P(Du(t))}function Nu(s,e){return lo(s.databaseId,e)}function Nm(s){const e=ku(s);return e.length===4?Q.emptyPath():Du(e)}function Fi(s){return new Q(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Du(s){return W(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function Rc(s,e,t){return{name:Ui(s,e),fields:t.value.mapValue.fields}}function Dm(s,e){let t;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:M(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=function(u,d){return u.useProto3Json?(W(d===void 0||typeof d=="string",58123),ye.fromBase64String(d||"")):(W(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ye.fromUint8Array(d||new Uint8Array))}(s,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(u){const d=u.code===void 0?A.UNKNOWN:_u(u.code);return new D(d,u.message||"")}(a);t=new xu(n,r,o,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=pi(s,n.document.name),o=je(n.document.updateTime),a=n.document.createTime?je(n.document.createTime):F.min(),l=new Ce({mapValue:{fields:n.document.fields}}),u=Ee.newFoundDocument(r,o,a,l),d=n.targetIds||[],p=n.removedTargetIds||[];t=new Hs(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=pi(s,n.document),o=n.readTime?je(n.readTime):F.min(),a=Ee.newNoDocument(r,o),l=n.removedTargetIds||[];t=new Hs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=pi(s,n.document),o=n.removedTargetIds||[];t=new Hs([],o,r,null)}else{if(!("filter"in e))return M(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:o}=n,a=new bm(r,o),l=n.targetId;t=new Au(l,a)}}return t}function Rm(s,e){let t;if(e instanceof hs)t={update:Rc(s,e.key,e.value)};else if(e instanceof oo)t={delete:Ui(s,e.key)};else if(e instanceof xt)t={update:Rc(s,e.key,e.data),updateMask:jm(e.fieldMask)};else{if(!(e instanceof ym))return M(16599,{Vt:e.type});t={verify:Ui(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(r,o){const a=o.transform;if(a instanceof sr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof is)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof os)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof rr)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw M(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(n,r){return r.updateTime!==void 0?{updateTime:km(n,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:M(27497)}(s,e.precondition)),t}function Lm(s,e){return s&&s.length>0?(W(e!==void 0,14353),s.map(t=>function(n,r){let o=n.updateTime?je(n.updateTime):je(r);return o.isEqual(F.min())&&(o=je(r)),new pm(o,n.transformResults||[])}(t,e))):[]}function Om(s,e){return{documents:[Nu(s,e.path)]}}function Pm(s,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Nu(s,r);const o=function(u){if(u.length!==0)return Lu(Pe.create(u,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(u){if(u.length!==0)return u.map(d=>function(p){return{field:Zt(p.field),direction:Fm(p.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Pi(s,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:t,parent:r}}function Mm(s){let e=Nm(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){W(n===1,65062);const p=t.from[0];p.allDescendants?r=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(p){const m=Ru(p);return m instanceof Pe&&cu(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(m=>function(T){return new rs(en(T.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,wr(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(p){const m=!!p.before,T=p.values||[];return new nr(T,m)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const m=!p.before,T=p.values||[];return new nr(T,m)}(t.endAt)),tm(e,r,a,o,l,"F",u,d)}function Um(s,e){const t=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:n})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ru(s){return s.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=en(e.unaryFilter.field);return ae.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=en(e.unaryFilter.field);return ae.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=en(e.unaryFilter.field);return ae.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=en(e.unaryFilter.field);return ae.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(s):s.fieldFilter!==void 0?function(e){return ae.create(en(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(e){return Pe.create(e.compositeFilter.filters.map(t=>Ru(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(s):M(30097,{filter:s})}function Fm(s){return _m[s]}function Vm(s){return Am[s]}function Bm(s){return xm[s]}function Zt(s){return{fieldPath:s.canonicalString()}}function en(s){return ge.fromServerFormat(s.fieldPath)}function Lu(s){return s instanceof ae?function(e){if(e.op==="=="){if(wc(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NAN"}};if(vc(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(wc(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NOT_NAN"}};if(vc(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zt(e.field),op:Vm(e.op),value:e.value}}}(s):s instanceof Pe?function(e){const t=e.getFilters().map(n=>Lu(n));return t.length===1?t[0]:{compositeFilter:{op:Bm(e.op),filters:t}}}(s):M(54877,{filter:s})}function jm(s){const e=[];return s.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ou(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
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
*/class pt{constructor(e,t,n,r,o=F.min(),a=F.min(),l=ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
*/class $m{constructor(e){this.yt=e}}function qm(s){const e=Mm({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Oi(e,e.limit,"L"):e}/**
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
*/class zm{constructor(){this.Cn=new Hm}addToCollectionParentIndex(e,t){return this.Cn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(bt.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(bt.min())}updateCollectionGroup(e,t,n){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class Hm{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new de(Q.comparator),o=!r.has(n);return this.index[t]=r.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new de(Q.comparator)).toArray()}}/**
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
*/const Lc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Pu=41943040;class xe{static withCacheSize(e){return new xe(e,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
*/xe.DEFAULT_COLLECTION_PERCENTILE=10,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xe.DEFAULT=new xe(Pu,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xe.DISABLED=new xe(-1,0,0);/**
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
*/class pn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new pn(0)}static cr(){return new pn(-1)}}/**
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
*/const Oc="LruGarbageCollector",Gm=1048576;function Pc([s,e],[t,n]){const r=q(s,t);return r===0?q(e,n):r}class Km{constructor(e){this.Ir=e,this.buffer=new de(Pc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Pc(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Wm{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){O(Oc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){En(t)?O(Oc,"Ignoring IndexedDB error during garbage collection: ",t):await bn(t)}await this.Vr(3e5)})}}class Qm{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return x.resolve(vr.ce);const n=new Km(t);return this.mr.forEachTarget(e,r=>n.Ar(r.sequenceNumber)).next(()=>this.mr.pr(e,r=>n.Ar(r))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Lc)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lc):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,r,o,a,l,u,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),r=this.params.maximumSequenceNumbersToCollect):r=m,a=Date.now(),this.nthSequenceNumber(e,r))).next(m=>(n=m,l=Date.now(),this.removeTargets(e,n,t))).next(m=>(o=m,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(m=>(d=Date.now(),Jt()<=$.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${r} in `+(l-a)+`ms
	Removed ${o} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:m})))}}function Xm(s,e){return new Qm(s,e)}/**
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
*/class Jm{constructor(){this.changes=new qt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?x.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
*/class Zm{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(n!==null&&Jn(n.mutation,r,Ne.empty(),Y.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,z()).next(()=>n))}getLocalViewOfDocuments(e,t,n=z()){const r=Ot();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(o=>{let a=qn();return o.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=Ot();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,z()))}populateOverlays(e,t,n){const r=[];return n.forEach(o=>{t.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(e,r).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,n,r){let o=Ze();const a=Xn(),l=function(){return Xn()}();return t.forEach((u,d)=>{const p=n.get(d.key);r.has(d.key)&&(p===void 0||p.mutation instanceof xt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Jn(p.mutation,d,p.mutation.getFieldMask(),Y.now())):a.set(d.key,Ne.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>l.set(d,new Ym(p,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const n=Xn();let r=new te((a,l)=>a-l),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=n.get(u)||Ne.empty();p=l.applyToLocalView(d,p),n.set(u,p);const m=(r.get(l.batchId)||z()).add(u);r=r.insert(l.batchId,m)})}).next(()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,m=yu();p.forEach(T=>{if(!o.has(T)){const C=Su(t.get(T),n.get(T));C!==null&&m.set(T,C),o=o.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return x.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,r){return function(o){return P.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):du(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(o=>{const a=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-o.size):x.resolve(Ot());let l=es,u=o;return a.next(d=>x.forEach(d,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),o.get(p)?x.resolve():this.remoteDocumentCache.getEntry(e,p).next(T=>{u=u.insert(p,T)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,u,d,z())).next(p=>({batchId:l,changes:gu(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new P(t)).next(n=>{let r=qn();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const o=t.collectionGroup;let a=qn();return this.indexManager.getCollectionParents(e,o).next(l=>x.forEach(l,u=>{const d=function(p,m){return new In(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,n,r).next(p=>{p.forEach((m,T)=>{a=a.insert(m,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,o,r))).next(a=>{o.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ee.newInvalidDocument(p)))});let l=qn();return a.forEach((u,d)=>{const p=o.get(u);p!==void 0&&Jn(p.mutation,d,Ne.empty(),Y.now()),Ir(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
*/class eg{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return x.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(n){return{id:n.id,version:n.version,createTime:je(n.createTime)}}(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(n){return{name:n.name,query:qm(n.bundledQuery),readTime:je(n.readTime)}}(t)),x.resolve()}}/**
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
*/class tg{constructor(){this.overlays=new te(P.comparator),this.qr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ot();return x.forEach(t,r=>this.getOverlay(e,r).next(o=>{o!==null&&n.set(r,o)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((r,o)=>{this.St(e,t,o)}),x.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.qr.get(n);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(n)),x.resolve()}getOverlaysForCollection(e,t,n){const r=Ot(),o=t.length+1,a=new P(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>n&&r.set(u.getKey(),u)}return x.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let o=new te((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let p=o.get(d.largestBatchId);p===null&&(p=Ot(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Ot(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=r)););return x.resolve(l)}St(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const a=this.qr.get(r.largestBatchId).delete(n.key);this.qr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new wm(t,n));let o=this.qr.get(t);o===void 0&&(o=z(),this.qr.set(t,o)),this.qr.set(t,o.add(n.key))}}/**
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
*/class ng{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
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
*/class uo{constructor(){this.Qr=new de(pe.$r),this.Ur=new de(pe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new pe(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Gr(new pe(e,t))}zr(e,t){e.forEach(n=>this.removeReference(n,t))}jr(e){const t=new P(new Q([])),n=new pe(t,e),r=new pe(t,e+1),o=[];return this.Ur.forEachInRange([n,r],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new P(new Q([])),n=new pe(t,e),r=new pe(t,e+1);let o=z();return this.Ur.forEachInRange([n,r],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new pe(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class pe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return P.comparator(e.key,t.key)||q(e.Yr,t.Yr)}static Kr(e,t){return q(e.Yr,t.Yr)||P.comparator(e.key,t.key)}}/**
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
*/class sg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new de(pe.$r)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new vm(o,t,n,r);this.mutationQueue.push(a);for(const l of r)this.Zr=this.Zr.add(new pe(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,t){return x.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ei(n),o=r<0?0:r;return x.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Zi:this.tr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new pe(t,0),r=new pe(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([n,r],a=>{const l=this.Xr(a.Yr);o.push(l)}),x.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new de(q);return t.forEach(r=>{const o=new pe(r,0),a=new pe(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],l=>{n=n.add(l.Yr)})}),x.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let o=n;P.isDocumentKey(o)||(o=o.child(""));const a=new pe(new P(o),0);let l=new de(q);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!n.isPrefixOf(d)&&(d.length===r&&(l=l.add(u.Yr)),!0)},a),x.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(n=>{const r=this.Xr(n);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){W(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return x.forEach(t.mutations,r=>{const o=new pe(r.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new pe(t,0),r=this.Zr.firstAfterOrEqual(n);return x.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
*/class rg{constructor(e){this.ri=e,this.docs=function(){return new te(P.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),o=r?r.size:0,a=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return x.resolve(n?n.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let n=Ze();return t.forEach(r=>{const o=this.docs.get(r);n=n.insert(r,o?o.document.mutableCopy():Ee.newInvalidDocument(r))}),x.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let o=Ze();const a=t.path,l=new P(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Lp(Rp(p),n)<=0||(r.has(p.key)||Ir(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return x.resolve(o)}getAllFromCollectionGroup(e,t,n,r){M(9500)}ii(e,t){return x.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new ig(this)}getSize(e){return x.resolve(this.size)}}class ig extends Jm{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(n)}),x.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
*/class og{constructor(e){this.persistence=e,this.si=new qt(t=>no(t),so),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.oi=0,this._i=new uo,this.targetCount=0,this.ai=pn.ur()}forEachTarget(e,t){return this.si.forEach((n,r)=>t(r)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),x.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new pn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.Pr(t),x.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,n){let r=0;const o=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),x.waitFor(o).next(()=>r)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return x.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),x.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach(a=>{o.push(r.markPotentiallyOrphaned(e,a))}),x.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return x.resolve(n)}containsKey(e,t){return x.resolve(this._i.containsKey(t))}}/**
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
*/class Mu{constructor(e,t){this.ui={},this.overlays={},this.ci=new vr(0),this.li=!1,this.li=!0,this.hi=new ng,this.referenceDelegate=e(this),this.Pi=new og(this),this.indexManager=new zm,this.remoteDocumentCache=function(n){return new rg(n)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new $m(t),this.Ii=new eg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new sg(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){O("MemoryPersistence","Starting transaction:",e);const r=new ag(this.ci.next());return this.referenceDelegate.Ei(),n(r).next(o=>this.referenceDelegate.di(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}Ai(e,t){return x.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class ag extends Pp{constructor(e){super(),this.currentSequenceNumber=e}}class ho{constructor(e){this.persistence=e,this.Ri=new uo,this.Vi=null}static mi(e){return new ho(e)}get fi(){if(this.Vi)return this.Vi;throw M(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),x.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(r=>this.fi.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(o=>this.fi.add(o.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.fi,n=>{const r=P.fromPath(n);return this.gi(e,r).next(o=>{o||t.removeEntry(r,F.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return x.or([()=>x.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class or{constructor(e,t){this.persistence=e,this.pi=new qt(n=>Fp(n.path),(n,r)=>n.isEqual(r)),this.garbageCollector=Xm(this,t)}static mi(e,t){return new or(e,t)}Ei(){}di(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(r=>n+r))}wr(e){let t=0;return this.pr(e,n=>{t++}).next(()=>t)}pr(e,t){return x.forEach(this.pi,(n,r)=>this.br(e,n,r).next(o=>o?x.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.ii(e,a=>this.br(e,a,t).next(l=>{l||(n++,o.removeEntry(a,F.min()))})).next(()=>o.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),x.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),x.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=$s(e.data.value)),t}br(e,t,n){return x.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return x.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
*/class fo{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=r}static As(e,t){let n=z(),r=z();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new fo(e,t.fromCache,n,r)}}/**
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
*/class lg{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return tf()?8:Mp(Ie())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const o={result:null};return this.ys(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(e,t,r,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new cg;return this.Ss(e,t,a).next(l=>{if(o.result=l,this.Vs)return this.bs(e,t,a,l.size)})}).next(()=>o.result)}bs(e,t,n,r){return n.documentReadCount<this.fs?(Jt()<=$.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Yt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),x.resolve()):(Jt()<=$.DEBUG&&O("QueryEngine","Query:",Yt(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.gs*r?(Jt()<=$.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Yt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Be(t))):x.resolve())}ys(e,t){if(Sc(t))return x.resolve(null);let n=Be(t);return this.indexManager.getIndexType(e,n).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Oi(t,null,"F"),n=Be(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(o=>{const a=z(...o);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,n).next(u=>{const d=this.Ds(t,l);return this.Cs(t,d,a,u.readTime)?this.ys(e,Oi(t,null,"F")):this.vs(e,d,t,u)}))})))}ws(e,t,n,r){return Sc(t)||r.isEqual(F.min())?x.resolve(null):this.ps.getDocuments(e,n).next(o=>{const a=this.Ds(t,o);return this.Cs(t,a,n,r)?x.resolve(null):(Jt()<=$.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Yt(t)),this.vs(e,a,t,Dp(r,es)).next(l=>l))})}Ds(e,t){let n=new de(pu(e));return t.forEach((r,o)=>{Ir(e,o)&&(n=n.add(o))}),n}Cs(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Ss(e,t,n){return Jt()<=$.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Yt(t)),this.ps.getDocumentsMatchingQuery(e,t,bt.min(),n)}vs(e,t,n,r){return this.ps.getDocumentsMatchingQuery(e,n,r).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
*/const po="LocalStore",ug=3e8;class hg{constructor(e,t,n,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new te(q),this.xs=new qt(o=>no(o),so),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zm(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function dg(s,e,t,n){return new hg(s,e,t,n)}async function Uu(s,e){const t=V(s);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next(o=>(r=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],l=[];let u=z();for(const d of r){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(n,u).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:l}))})})}function fg(s,e){const t=V(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const p=u.batch,m=p.keys();let T=x.resolve();return m.forEach(C=>{T=T.next(()=>d.getEntry(l,C)).next(N=>{const L=u.docVersions.get(C);W(L!==null,48541),N.version.compareTo(L)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),d.addEntry(N)))})}),T.next(()=>a.mutationQueue.removeMutationBatch(l,p))}(t,n,e,o).next(()=>o.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(a){let l=z();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,r))})}function Fu(s){const e=V(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function pg(s,e){const t=V(s),n=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const l=[];e.targetChanges.forEach((p,m)=>{const T=r.get(m);if(!T)return;l.push(t.Pi.removeMatchingKeys(o,p.removedDocuments,m).next(()=>t.Pi.addMatchingKeys(o,p.addedDocuments,m)));let C=T.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(m)!==null?C=C.withResumeToken(ye.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,n)),r=r.insert(m,C),function(N,L,R){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=ug?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(T,C,p)&&l.push(t.Pi.updateTargetData(o,C))});let u=Ze(),d=z();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(mg(o,a,e.documentUpdates).next(p=>{u=p.ks,d=p.qs})),!n.isEqual(F.min())){const p=t.Pi.getLastRemoteSnapshotVersion(o).next(m=>t.Pi.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(p)}return x.waitFor(l).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(t.Ms=r,o))}function mg(s,e,t){let n=z(),r=z();return t.forEach(o=>n=n.add(o)),e.getEntries(s,n).next(o=>{let a=Ze();return t.forEach((l,u)=>{const d=o.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(F.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):O(po,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{ks:a,qs:r}})}function gg(s,e){const t=V(s);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Zi),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function yg(s,e){const t=V(s);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return t.Pi.getTargetData(n,e).next(o=>o?(r=o,x.resolve(r)):t.Pi.allocateTargetId(n).next(a=>(r=new pt(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,r).next(()=>r))))}).then(n=>{const r=t.Ms.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n})}async function Vi(s,e,t){const n=V(s),r=n.Ms.get(e),o=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!En(a))throw a;O(po,`Failed to update sequence numbers for target ${e}: ${a}`)}n.Ms=n.Ms.remove(e),n.xs.delete(r.target)}function Mc(s,e,t){const n=V(s);let r=F.min(),o=z();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,u,d){const p=V(l),m=p.xs.get(d);return m!==void 0?x.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,d)}(n,a,Be(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(a,l.targetId).next(u=>{o=u})}).next(()=>n.Fs.getDocumentsMatchingQuery(a,e,t?r:F.min(),t?o:z())).next(l=>(vg(n,sm(e),l),{documents:l,Qs:o})))}function vg(s,e,t){let n=s.Os.get(e)||F.min();t.forEach((r,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),s.Os.set(e,n)}class Uc{constructor(){this.activeTargetIds=lm()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wg{constructor(){this.Mo=new Uc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Uc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
*/const Fc="ConnectivityMonitor";class Vc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){O(Fc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){O(Fc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
*/let Fs=null;function Bi(){return Fs===null?Fs=function(){return 268435456+Math.round(2147483648*Math.random())}():Fs++,"0x"+Fs.toString(16)}/**
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
*/const mi="RestConnection",Eg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ig{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Wo=this.databaseId.database===er?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Go(e,t,n,r,o){const a=Bi(),l=this.zo(e,t.toUriEncodedString());O(mi,`Sending RPC '${e}' ${a}:`,l,n);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,r,o);const{host:d}=new URL(l),p=yn(d);return this.Jo(e,l,u,n,p).then(m=>(O(mi,`Received RPC '${e}' ${a}: `,m),m),m=>{throw un(mi,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",n),m})}Ho(e,t,n,r,o,a){return this.Go(e,t,n,r,o)}jo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,o)=>e[o]=r),n&&n.headers.forEach((r,o)=>e[o]=r)}zo(e,t){const n=Eg[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
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
*/class Sg{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
*/const we="WebChannelConnection";class Tg extends Ig{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,o){const a=Bi();return new Promise((l,u)=>{const d=new jl;d.setWithCredentials(!0),d.listenOnce($l.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case js.NO_ERROR:const m=d.getResponseJson();O(we,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case js.TIMEOUT:O(we,`RPC '${e}' ${a} timed out`),u(new D(A.DEADLINE_EXCEEDED,"Request time out"));break;case js.HTTP_ERROR:const T=d.getStatus();if(O(we,`RPC '${e}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const N=C==null?void 0:C.error;if(N&&N.status&&N.message){const L=function(R){const B=R.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(B)>=0?B:A.UNKNOWN}(N.status);u(new D(L,N.message))}else u(new D(A.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new D(A.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{O(we,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(r);O(we,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",p,n,15)})}T_(e,t,n){const r=Bi(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Hl(),l=zl(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const p=o.join("");O(we,`Creating RPC '${e}' stream ${r}: ${p}`,u);const m=a.createWebChannel(p,u);this.I_(m);let T=!1,C=!1;const N=new Sg({Yo:R=>{C?O(we,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(T||(O(we,`Opening RPC '${e}' stream ${r} transport.`),m.open(),T=!0),O(we,`RPC '${e}' stream ${r} sending:`,R),m.send(R))},Zo:()=>m.close()}),L=(R,B,G)=>{R.listen(B,Z=>{try{G(Z)}catch(ne){setTimeout(()=>{throw ne},0)}})};return L(m,$n.EventType.OPEN,()=>{C||(O(we,`RPC '${e}' stream ${r} transport opened.`),N.o_())}),L(m,$n.EventType.CLOSE,()=>{C||(C=!0,O(we,`RPC '${e}' stream ${r} transport closed`),N.a_(),this.E_(m))}),L(m,$n.EventType.ERROR,R=>{C||(C=!0,un(we,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),N.a_(new D(A.UNAVAILABLE,"The operation could not be completed")))}),L(m,$n.EventType.MESSAGE,R=>{var B;if(!C){const G=R.data[0];W(!!G,16349);const Z=G,ne=(Z==null?void 0:Z.error)||((B=Z[0])==null?void 0:B.error);if(ne){O(we,`RPC '${e}' stream ${r} received error:`,ne);const ue=ne.status;let ee=function(g){const v=ie[g];if(v!==void 0)return _u(v)}(ue),b=ne.message;ee===void 0&&(ee=A.INTERNAL,b="Unknown error status: "+ue+" with message "+ne.message),C=!0,N.a_(new D(ee,b)),m.close()}else O(we,`RPC '${e}' stream ${r} received:`,G),N.u_(G)}}),L(l,ql.STAT_EVENT,R=>{R.stat===xi.PROXY?O(we,`RPC '${e}' stream ${r} detected buffering proxy`):R.stat===xi.NOPROXY&&O(we,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function gi(){return typeof document<"u"?document:null}/**
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
*/function Ar(s){return new Cm(s,!0)}/**
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
*/class Vu{constructor(e,t,n=1e3,r=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=r,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&O("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
*/const Bc="PersistentStream";class Bu{constructor(e,t,n,r,o,a,l,u){this.Mi=e,this.S_=n,this.b_=r,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Vu(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===A.RESOURCE_EXHAUSTED?(Je(t.toString()),Je("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.D_===t&&this.G_(n,r)},n=>{e(()=>{const r=new D(A.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(r)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(r=>{n(()=>this.z_(r))}),this.stream.onMessage(r=>{n(()=>++this.F_==1?this.J_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return O(Bc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(O(Bc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _g extends Bu{constructor(e,t,n,r,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Dm(this.serializer,e),n=function(r){if(!("targetChange"in r))return F.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?F.min():o.readTime?je(o.readTime):F.min()}(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=Fi(this.serializer),t.addTarget=function(r,o){let a;const l=o.target;if(a=Ri(l)?{documents:Om(r,l)}:{query:Pm(r,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Cu(r,o.resumeToken);const u=Pi(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(F.min())>0){a.readTime=ir(r,o.snapshotVersion.toTimestamp());const u=Pi(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const n=Um(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=Fi(this.serializer),t.removeTarget=e,this.q_(t)}}class Ag extends Bu{constructor(e,t,n,r,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Lm(e.writeResults,e.commitTime),n=je(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Fi(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Rm(this.serializer,n))};this.q_(t)}}/**
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
*/class xg{}class Cg extends xg{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new D(A.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(e,Mi(t,n),r,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(A.UNKNOWN,o.toString())})}Ho(e,t,n,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,Mi(t,n),r,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(A.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class kg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
*/const Bt="RemoteStore";class Ng{constructor(e,t,n,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{n.enqueueAndForget(async()=>{zt(this)&&(O(Bt,"Restarting streams for network reachability change."),await async function(l){const u=V(l);u.Ea.add(4),await fs(u),u.Ra.set("Unknown"),u.Ea.delete(4),await xr(u)}(this))})}),this.Ra=new kg(n,r)}}async function xr(s){if(zt(s))for(const e of s.da)await e(!0)}async function fs(s){for(const e of s.da)await e(!1)}function ju(s,e){const t=V(s);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),vo(t)?yo(t):Sn(t).O_()&&go(t,e))}function mo(s,e){const t=V(s),n=Sn(t);t.Ia.delete(e),n.O_()&&$u(t,e),t.Ia.size===0&&(n.O_()?n.L_():zt(t)&&t.Ra.set("Unknown"))}function go(s,e){if(s.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Sn(s).Y_(e)}function $u(s,e){s.Va.Ue(e),Sn(s).Z_(e)}function yo(s){s.Va=new Tm({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),At:e=>s.Ia.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),Sn(s).start(),s.Ra.ua()}function vo(s){return zt(s)&&!Sn(s).x_()&&s.Ia.size>0}function zt(s){return V(s).Ea.size===0}function qu(s){s.Va=void 0}async function Dg(s){s.Ra.set("Online")}async function Rg(s){s.Ia.forEach((e,t)=>{go(s,e)})}async function Lg(s,e){qu(s),vo(s)?(s.Ra.ha(e),yo(s)):s.Ra.set("Unknown")}async function Og(s,e,t){if(s.Ra.set("Online"),e instanceof xu&&e.state===2&&e.cause)try{await async function(n,r){const o=r.cause;for(const a of r.targetIds)n.Ia.has(a)&&(await n.remoteSyncer.rejectListen(a,o),n.Ia.delete(a),n.Va.removeTarget(a))}(s,e)}catch(n){O(Bt,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ar(s,n)}else if(e instanceof Hs?s.Va.Ze(e):e instanceof Au?s.Va.st(e):s.Va.tt(e),!t.isEqual(F.min()))try{const n=await Fu(s.localStore);t.compareTo(n)>=0&&await function(r,o){const a=r.Va.Tt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=r.Ia.get(u);d&&r.Ia.set(u,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const d=r.Ia.get(l);if(!d)return;r.Ia.set(l,d.withResumeToken(ye.EMPTY_BYTE_STRING,d.snapshotVersion)),$u(r,l);const p=new pt(d.target,l,u,d.sequenceNumber);go(r,p)}),r.remoteSyncer.applyRemoteEvent(a)}(s,t)}catch(n){O(Bt,"Failed to raise snapshot:",n),await ar(s,n)}}async function ar(s,e,t){if(!En(e))throw e;s.Ea.add(1),await fs(s),s.Ra.set("Offline"),t||(t=()=>Fu(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{O(Bt,"Retrying IndexedDB access"),await t(),s.Ea.delete(1),await xr(s)})}function zu(s,e){return e().catch(t=>ar(s,t,e))}async function Cr(s){const e=V(s),t=Tt(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Zi;for(;Pg(e);)try{const r=await gg(e.localStore,n);if(r===null){e.Ta.length===0&&t.L_();break}n=r.batchId,Mg(e,r)}catch(r){await ar(e,r)}Hu(e)&&Gu(e)}function Pg(s){return zt(s)&&s.Ta.length<10}function Mg(s,e){s.Ta.push(e);const t=Tt(s);t.O_()&&t.X_&&t.ea(e.mutations)}function Hu(s){return zt(s)&&!Tt(s).x_()&&s.Ta.length>0}function Gu(s){Tt(s).start()}async function Ug(s){Tt(s).ra()}async function Fg(s){const e=Tt(s);for(const t of s.Ta)e.ea(t.mutations)}async function Vg(s,e,t){const n=s.Ta.shift(),r=ao.from(n,e,t);await zu(s,()=>s.remoteSyncer.applySuccessfulWrite(r)),await Cr(s)}async function Bg(s,e){e&&Tt(s).X_&&await async function(t,n){if(function(r){return Em(r)&&r!==A.ABORTED}(n.code)){const r=t.Ta.shift();Tt(t).B_(),await zu(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,n)),await Cr(t)}}(s,e),Hu(s)&&Gu(s)}async function jc(s,e){const t=V(s);t.asyncQueue.verifyOperationInProgress(),O(Bt,"RemoteStore received new credentials");const n=zt(t);t.Ea.add(3),await fs(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await xr(t)}async function jg(s,e){const t=V(s);e?(t.Ea.delete(2),await xr(t)):e||(t.Ea.add(2),await fs(t),t.Ra.set("Unknown"))}function Sn(s){return s.ma||(s.ma=function(e,t,n){const r=V(e);return r.sa(),new _g(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(s.datastore,s.asyncQueue,{Xo:Dg.bind(null,s),t_:Rg.bind(null,s),r_:Lg.bind(null,s),H_:Og.bind(null,s)}),s.da.push(async e=>{e?(s.ma.B_(),vo(s)?yo(s):s.Ra.set("Unknown")):(await s.ma.stop(),qu(s))})),s.ma}function Tt(s){return s.fa||(s.fa=function(e,t,n){const r=V(e);return r.sa(),new Ag(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(s.datastore,s.asyncQueue,{Xo:()=>Promise.resolve(),t_:Ug.bind(null,s),r_:Bg.bind(null,s),ta:Fg.bind(null,s),na:Vg.bind(null,s)}),s.da.push(async e=>{e?(s.fa.B_(),await Cr(s)):(await s.fa.stop(),s.Ta.length>0&&(O(Bt,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))})),s.fa}/**
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
*/class wo{constructor(e,t,n,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=o,this.deferred=new Qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,o){const a=Date.now()+n,l=new wo(e,t,a,r,o);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bo(s,e){if(Je("AsyncQueue",`${e}: ${s}`),En(s))return new D(A.UNAVAILABLE,`${e}: ${s}`);throw s}/**
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
*/class sn{static emptySet(e){return new sn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||P.comparator(t.key,n.key):(t,n)=>P.comparator(t.key,n.key),this.keyedMap=qn(),this.sortedSet=new te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=n.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new sn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
*/class $c{constructor(){this.ga=new te(P.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):M(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class mn{constructor(e,t,n,r,o,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,r,o){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new mn(e,t,sn.emptySet(t),a,n,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Er(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
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
*/class $g{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class qg{constructor(){this.queries=qc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,t){const n=V(e),r=n.queries;n.queries=qc(),r.forEach((o,a)=>{for(const l of a.Sa)l.onError(t)})})(this,new D(A.ABORTED,"Firestore shutting down"))}}function qc(){return new qt(s=>fu(s),Er)}async function Ku(s,e){const t=V(s);let n=3;const r=e.query;let o=t.queries.get(r);o?!o.ba()&&e.Da()&&(n=2):(o=new $g,n=e.Da()?0:1);try{switch(n){case 0:o.wa=await t.onListen(r,!0);break;case 1:o.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const l=bo(a,`Initialization of query '${Yt(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,o),o.Sa.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&Eo(t)}async function Wu(s,e){const t=V(s),n=e.query;let r=3;const o=t.queries.get(n);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?r=e.Da()?0:1:!o.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function zg(s,e){const t=V(s);let n=!1;for(const r of e){const o=r.query,a=t.queries.get(o);if(a){for(const l of a.Sa)l.Fa(r)&&(n=!0);a.wa=r}}n&&Eo(t)}function Hg(s,e,t){const n=V(s),r=n.queries.get(e);if(r)for(const o of r.Sa)o.onError(t);n.queries.delete(e)}function Eo(s){s.Ca.forEach(e=>{e.next()})}var ji,zc;(zc=ji||(ji={})).Ma="default",zc.Cache="cache";class Qu{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new mn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=mn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ji.Cache}}/**
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
*/class Xu{constructor(e){this.key=e}}class Ju{constructor(e){this.key=e}}class Gg{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=z(),this.mutatedKeys=z(),this.eu=pu(e),this.tu=new sn(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new $c,r=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((p,m)=>{const T=r.get(p),C=Ir(this.query,m)?m:null,N=!!T&&this.mutatedKeys.has(T.key),L=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let R=!1;T&&C?T.data.isEqual(C.data)?N!==L&&(n.track({type:3,doc:C}),R=!0):this.su(T,C)||(n.track({type:2,doc:C}),R=!0,(u&&this.eu(C,u)>0||d&&this.eu(C,d)<0)&&(l=!0)):!T&&C?(n.track({type:0,doc:C}),R=!0):T&&!C&&(n.track({type:1,doc:T}),R=!0,(u||d)&&(l=!0)),R&&(C?(a=a.add(C),o=L?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{tu:a,iu:n,Cs:l,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((p,m)=>function(T,C){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Rt:L})}};return N(T)-N(C)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(n),r=r??!1;const l=t&&!r?this._u():[],u=this.Xa.size===0&&this.current&&!r?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new mn(this.query,e.tu,o,a,e.mutatedKeys,u===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $c,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=z(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const t=[];return e.forEach(n=>{this.Xa.has(n)||t.push(new Ju(n))}),this.Xa.forEach(n=>{e.has(n)||t.push(new Xu(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return mn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Io="SyncEngine";class Kg{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Wg{constructor(e){this.key=e,this.hu=!1}}class Qg{constructor(e,t,n,r,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new qt(l=>fu(l),Er),this.Iu=new Map,this.Eu=new Set,this.du=new te(P.comparator),this.Au=new Map,this.Ru=new uo,this.Vu={},this.mu=new Map,this.fu=pn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Xg(s,e,t=!0){const n=sh(s);let r;const o=n.Tu.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.lu()):r=await Yu(n,e,t,!0),r}async function Jg(s,e){const t=sh(s);await Yu(t,e,!0,!1)}async function Yu(s,e,t,n){const r=await yg(s.localStore,Be(e)),o=r.targetId,a=s.sharedClientState.addLocalQueryTarget(o,t);let l;return n&&(l=await Yg(s,e,o,a==="current",r.resumeToken)),s.isPrimaryClient&&t&&ju(s.remoteStore,r),l}async function Yg(s,e,t,n,r){s.pu=(m,T,C)=>async function(N,L,R,B){let G=L.view.ru(R);G.Cs&&(G=await Mc(N.localStore,L.query,!1).then(({documents:ee})=>L.view.ru(ee,G)));const Z=B&&B.targetChanges.get(L.targetId),ne=B&&B.targetMismatches.get(L.targetId)!=null,ue=L.view.applyChanges(G,N.isPrimaryClient,Z,ne);return Gc(N,L.targetId,ue.au),ue.snapshot}(s,m,T,C);const o=await Mc(s.localStore,e,!0),a=new Gg(e,o.Qs),l=a.ru(o.documents),u=ds.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),d=a.applyChanges(l,s.isPrimaryClient,u);Gc(s,t,d.au);const p=new Kg(e,t,a);return s.Tu.set(e,p),s.Iu.has(t)?s.Iu.get(t).push(e):s.Iu.set(t,[e]),d.snapshot}async function Zg(s,e,t){const n=V(s),r=n.Tu.get(e),o=n.Iu.get(r.targetId);if(o.length>1)return n.Iu.set(r.targetId,o.filter(a=>!Er(a,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Vi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),t&&mo(n.remoteStore,r.targetId),$i(n,r.targetId)}).catch(bn)):($i(n,r.targetId),await Vi(n.localStore,r.targetId,!0))}async function ey(s,e){const t=V(s),n=t.Tu.get(e),r=t.Iu.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),mo(t.remoteStore,n.targetId))}async function ty(s,e,t){const n=cy(s);try{const r=await function(o,a){const l=V(o),u=Y.now(),d=a.reduce((T,C)=>T.add(C.key),z());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let C=Ze(),N=z();return l.Ns.getEntries(T,d).next(L=>{C=L,C.forEach((R,B)=>{B.isValidDocument()||(N=N.add(R))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,C)).next(L=>{p=L;const R=[];for(const B of a){const G=gm(B,p.get(B.key).overlayedDocument);G!=null&&R.push(new xt(B.key,G,iu(G.value.mapValue),Oe.exists(!0)))}return l.mutationQueue.addMutationBatch(T,u,R,a)}).next(L=>{m=L;const R=L.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(T,L.batchId,R)})}).then(()=>({batchId:m.batchId,changes:gu(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new te(q)),u=u.insert(a,l),o.Vu[o.currentUser.toKey()]=u}(n,r.batchId,t),await ps(n,r.changes),await Cr(n.remoteStore)}catch(r){const o=bo(r,"Failed to persist write");t.reject(o)}}async function Zu(s,e){const t=V(s);try{const n=await pg(t.localStore,e);e.targetChanges.forEach((r,o)=>{const a=t.Au.get(o);a&&(W(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.hu=!0:r.modifiedDocuments.size>0?W(a.hu,14607):r.removedDocuments.size>0&&(W(a.hu,42227),a.hu=!1))}),await ps(t,n,e)}catch(n){await bn(n)}}function Hc(s,e,t){const n=V(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Tu.forEach((o,a)=>{const l=a.view.va(e);l.snapshot&&r.push(l.snapshot)}),function(o,a){const l=V(o);l.onlineState=a;let u=!1;l.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(a)&&(u=!0)}),u&&Eo(l)}(n.eventManager,e),r.length&&n.Pu.H_(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function ny(s,e,t){const n=V(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Au.get(e),o=r&&r.key;if(o){let a=new te(P.comparator);a=a.insert(o,Ee.newNoDocument(o,F.min()));const l=z().add(o),u=new _r(F.min(),new Map,new te(q),a,l);await Zu(n,u),n.du=n.du.remove(o),n.Au.delete(e),So(n)}else await Vi(n.localStore,e,!1).then(()=>$i(n,e,t)).catch(bn)}async function sy(s,e){const t=V(s),n=e.batch.batchId;try{const r=await fg(t.localStore,e);th(t,n,null),eh(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await ps(t,r)}catch(r){await bn(r)}}async function ry(s,e,t){const n=V(s);try{const r=await function(o,a){const l=V(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(p=>(W(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(n.localStore,e);th(n,e,t),eh(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await ps(n,r)}catch(r){await bn(r)}}function eh(s,e){(s.mu.get(e)||[]).forEach(t=>{t.resolve()}),s.mu.delete(e)}function th(s,e,t){const n=V(s);let r=n.Vu[n.currentUser.toKey()];if(r){const o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),n.Vu[n.currentUser.toKey()]=r}}function $i(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Iu.get(e))s.Tu.delete(n),t&&s.Pu.yu(n,t);s.Iu.delete(e),s.isPrimaryClient&&s.Ru.jr(e).forEach(n=>{s.Ru.containsKey(n)||nh(s,n)})}function nh(s,e){s.Eu.delete(e.path.canonicalString());const t=s.du.get(e);t!==null&&(mo(s.remoteStore,t),s.du=s.du.remove(e),s.Au.delete(t),So(s))}function Gc(s,e,t){for(const n of t)n instanceof Xu?(s.Ru.addReference(n.key,e),iy(s,n)):n instanceof Ju?(O(Io,"Document no longer in limbo: "+n.key),s.Ru.removeReference(n.key,e),s.Ru.containsKey(n.key)||nh(s,n.key)):M(19791,{wu:n})}function iy(s,e){const t=e.key,n=t.path.canonicalString();s.du.get(t)||s.Eu.has(n)||(O(Io,"New document in limbo: "+t),s.Eu.add(n),So(s))}function So(s){for(;s.Eu.size>0&&s.du.size<s.maxConcurrentLimboResolutions;){const e=s.Eu.values().next().value;s.Eu.delete(e);const t=new P(Q.fromString(e)),n=s.fu.next();s.Au.set(n,new Wg(t)),s.du=s.du.insert(t,n),ju(s.remoteStore,new pt(Be(ro(t.path)),n,"TargetPurposeLimboResolution",vr.ce))}}async function ps(s,e,t){const n=V(s),r=[],o=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach((l,u)=>{a.push(n.pu(u,e,t).then(d=>{var p;if((d||t)&&n.isPrimaryClient){const m=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:p.current;n.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){r.push(d);const m=fo.As(u.targetId,d);o.push(m)}}))}),await Promise.all(a),n.Pu.H_(r),await async function(l,u){const d=V(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(u,m=>x.forEach(m.Es,T=>d.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>x.forEach(m.ds,T=>d.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!En(p))throw p;O(po,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const T=d.Ms.get(m),C=T.snapshotVersion,N=T.withLastLimboFreeSnapshotVersion(C);d.Ms=d.Ms.insert(m,N)}}}(n.localStore,o))}async function oy(s,e){const t=V(s);if(!t.currentUser.isEqual(e)){O(Io,"User change. New user:",e.toKey());const n=await Uu(t.localStore,e);t.currentUser=e,function(r,o){r.mu.forEach(a=>{a.forEach(l=>{l.reject(new D(A.CANCELLED,o))})}),r.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ps(t,n.Ls)}}function ay(s,e){const t=V(s),n=t.Au.get(e);if(n&&n.hu)return z().add(n.key);{let r=z();const o=t.Iu.get(e);if(!o)return r;for(const a of o){const l=t.Tu.get(a);r=r.unionWith(l.view.nu)}return r}}function sh(s){const e=V(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ay.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ny.bind(null,e),e.Pu.H_=zg.bind(null,e.eventManager),e.Pu.yu=Hg.bind(null,e.eventManager),e}function cy(s){const e=V(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ry.bind(null,e),e}class cr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ar(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return dg(this.persistence,new lg,e.initialUser,this.serializer)}Cu(e){return new Mu(ho.mi,this.serializer)}Du(e){return new wg}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cr.provider={build:()=>new cr};class ly extends cr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){W(this.persistence.referenceDelegate instanceof or,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Wm(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?xe.withCacheSize(this.cacheSizeBytes):xe.DEFAULT;return new Mu(n=>or.mi(n,t),this.serializer)}}class qi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Hc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=oy.bind(null,this.syncEngine),await jg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qg}()}createDatastore(e){const t=Ar(e.databaseInfo.databaseId),n=function(r){return new Tg(r)}(e.databaseInfo);return function(r,o,a,l){return new Cg(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(t,n,r,o,a){return new Ng(t,n,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Hc(this.syncEngine,t,0),function(){return Vc.v()?new Vc:new bg}())}createSyncEngine(e,t){return function(n,r,o,a,l,u,d){const p=new Qg(n,r,o,a,l,u);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(n){const r=V(n);O(Bt,"RemoteStore shutting down."),r.Ea.add(5),await fs(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}qi.provider={build:()=>new qi};/**
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
*/class rh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Je("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
*/const _t="FirestoreClient";class uy{constructor(e,t,n,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=be.UNAUTHENTICATED,this.clientId=Yi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{O(_t,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(O(_t,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=bo(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function yi(s,e){s.asyncQueue.verifyOperationInProgress(),O(_t,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener(async r=>{n.isEqual(r)||(await Uu(e.localStore,r),n=r)}),e.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=e}async function Kc(s,e){s.asyncQueue.verifyOperationInProgress();const t=await hy(s);O(_t,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener(n=>jc(e.remoteStore,n)),s.setAppCheckTokenChangeListener((n,r)=>jc(e.remoteStore,r)),s._onlineComponents=e}async function hy(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){O(_t,"Using user provided OfflineComponentProvider");try{await yi(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(n){return n.name==="FirebaseError"?n.code===A.FAILED_PRECONDITION||n.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}(t))throw t;un("Error using user provided cache. Falling back to memory cache: "+t),await yi(s,new cr)}}else O(_t,"Using default OfflineComponentProvider"),await yi(s,new ly(void 0));return s._offlineComponents}async function ih(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(O(_t,"Using user provided OnlineComponentProvider"),await Kc(s,s._uninitializedComponentsProvider._online)):(O(_t,"Using default OnlineComponentProvider"),await Kc(s,new qi))),s._onlineComponents}function dy(s){return ih(s).then(e=>e.syncEngine)}async function oh(s){const e=await ih(s),t=e.eventManager;return t.onListen=Xg.bind(null,e.syncEngine),t.onUnlisten=Zg.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Jg.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ey.bind(null,e.syncEngine),t}function fy(s,e,t={}){const n=new Qe;return s.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,u){const d=new rh({next:m=>{d.Nu(),o.enqueueAndForget(()=>Wu(r,p));const T=m.docs.has(a);!T&&m.fromCache?u.reject(new D(A.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&l&&l.source==="server"?u.reject(new D(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Qu(ro(a.path),d,{includeMetadataChanges:!0,qa:!0});return Ku(r,p)}(await oh(s),s.asyncQueue,e,t,n)),n.promise}function py(s,e,t={}){const n=new Qe;return s.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,u){const d=new rh({next:m=>{d.Nu(),o.enqueueAndForget(()=>Wu(r,p)),m.fromCache&&l.source==="server"?u.reject(new D(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Qu(a,d,{includeMetadataChanges:!0,qa:!0});return Ku(r,p)}(await oh(s),s.asyncQueue,e,t,n)),n.promise}/**
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
*/function ah(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
*/const Wc=new Map;/**
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
*/const ch="firestore.googleapis.com",Qc=!0;class Xc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ch,this.ssl=Qc}else this.host=e.host,this.ssl=e.ssl??Qc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Pu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Gm)throw new D(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Np("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ah(e.experimentalLongPollingOptions??{}),function(t){if(t.timeoutSeconds!==void 0){if(isNaN(t.timeoutSeconds))throw new D(A.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new D(A.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new D(A.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(t,n){return t.timeoutSeconds===n.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kr{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new bp;switch(t.type){case"firstParty":return new Tp(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new D(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Wc.get(e);t&&(O("ComponentProvider","Removing Datastore"),Wc.delete(e),t.terminate())}(this),Promise.resolve()}}function my(s,e,t,n={}){var r;s=Ye(s,kr);const o=yn(e),a=s._getSettings(),l={...a,emulatorOptions:s._getEmulatorOptions()},u=`${e}:${t}`;o&&(Rl(`https://${u}`),Ll("Firestore",!0)),a.host!==ch&&a.host!==u&&un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...a,host:u,ssl:o,emulatorOptions:n};if(!Ut(d,l)&&(s._setSettings(d),n.mockUserToken)){let p,m;if(typeof n.mockUserToken=="string")p=n.mockUserToken,m=be.MOCK_USER;else{p=Gd(n.mockUserToken,(r=s._app)==null?void 0:r.options.projectId);const T=n.mockUserToken.sub||n.mockUserToken.user_id;if(!T)throw new D(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new be(T)}s._authCredentials=new Ep(new Kl(p,m))}}/**
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
*/class Ht{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ht(this.firestore,e,this._query)}}class le{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}toJSON(){return{type:le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(us(t,le._jsonSchema))return new le(e,n||null,new P(Q.fromString(t.referencePath)))}}le._jsonSchemaVersion="firestore/documentReference/1.0",le._jsonSchema={type:ce("string",le._jsonSchemaVersion),referencePath:ce("string")};class wt extends Ht{constructor(e,t,n){super(e,t,ro(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new P(e))}withConverter(e){return new wt(this.firestore,e,this._path)}}function vi(s,e,...t){if(s=_e(s),Wl("collection","path",e),s instanceof kr){const n=Q.fromString(e,...t);return lc(n),new wt(s,null,n)}{if(!(s instanceof le||s instanceof wt))throw new D(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Q.fromString(e,...t));return lc(n),new wt(s.firestore,null,n)}}function Hn(s,e,...t){if(s=_e(s),arguments.length===1&&(e=Yi.newId()),Wl("doc","path",e),s instanceof kr){const n=Q.fromString(e,...t);return cc(n),new le(s,null,new P(n))}{if(!(s instanceof le||s instanceof wt))throw new D(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Q.fromString(e,...t));return cc(n),new le(s.firestore,s instanceof wt?s.converter:null,new P(n))}}/**
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
*/const Jc="AsyncQueue";class Yc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Vu(this,"async_queue_retry"),this._c=()=>{const n=gi();n&&O(Jc,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=gi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=gi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Qe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!En(e))throw e;O(Jc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,Je("INTERNAL UNHANDLED ERROR: ",Zc(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=wo.createAndSchedule(this,e,t,n,o=>this.hc(o));return this.tc.push(r),r}uc(){this.nc&&M(47125,{Pc:Zc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Zc(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class Tn extends kr{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Yc,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yc(e),this._firestoreClient=void 0,await e}}}function gy(s,e){const t=typeof s=="object"?s:Ul(),n=typeof s=="string"?s:er,r=Xi(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const o=zd("firestore");o&&my(r,...o)}return r}function To(s){if(s._terminated)throw new D(A.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||yy(s),s._firestoreClient}function yy(s){var e,t,n;const r=s._freezeSettings(),o=function(a,l,u,d){return new jp(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,ah(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(s._databaseId,((e=s._app)==null?void 0:e.options.appId)||"",s._persistenceKey,r);s._componentsProvider||(t=r.localCache)!=null&&t._offlineComponentProvider&&(n=r.localCache)!=null&&n._onlineComponentProvider&&(s._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),s._firestoreClient=new uy(s._authCredentials,s._appCheckCredentials,s._queue,o,s._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(s._componentsProvider))}/**
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
*/class De{constructor(e){this._byteString=e}static fromBase64String(e){try{return new De(ye.fromBase64String(e))}catch(t){throw new D(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new De(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:De._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(us(e,De._jsonSchema))return De.fromBase64String(e.bytes)}}De._jsonSchemaVersion="firestore/bytes/1.0",De._jsonSchema={type:ce("string",De._jsonSchemaVersion),bytes:ce("string")};/**
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
*/class Nr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
*/class _o{constructor(e){this._methodName=e}}/**
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
*/class $e{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$e._jsonSchemaVersion}}static fromJSON(e){if(us(e,$e._jsonSchema))return new $e(e.latitude,e.longitude)}}$e._jsonSchemaVersion="firestore/geoPoint/1.0",$e._jsonSchema={type:ce("string",$e._jsonSchemaVersion),latitude:ce("number"),longitude:ce("number")};/**
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
*/class qe{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(t,n){if(t.length!==n.length)return!1;for(let r=0;r<t.length;++r)if(t[r]!==n[r])return!1;return!0}(this._values,e._values)}toJSON(){return{type:qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(us(e,qe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new qe(e.vectorValues);throw new D(A.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qe._jsonSchemaVersion="firestore/vectorValue/1.0",qe._jsonSchema={type:ce("string",qe._jsonSchemaVersion),vectorValues:ce("object")};/**
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
*/const vy=/^__.*__$/;class wy{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new xt(e,this.data,this.fieldMask,t,this.fieldTransforms):new hs(e,this.data,t,this.fieldTransforms)}}class lh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new xt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function uh(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ac:s})}}class Ao{constructor(e,t,n,r,o,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ao({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var t;const n=(t=this.path)==null?void 0:t.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var t;const n=(t=this.path)==null?void 0:t.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return lr(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(uh(this.Ac)&&vy.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class by{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ar(e)}Cc(e,t,n,r=!1){return new Ao({Ac:e,methodName:t,Dc:n,path:ge.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xo(s){const e=s._freezeSettings(),t=Ar(s._databaseId);return new by(s._databaseId,!!e.ignoreUndefinedProperties,t)}function Ey(s,e,t,n,r,o={}){const a=s.Cc(o.merge||o.mergeFields?2:0,e,t,r);Co("Data must be an object, but it was:",a,n);const l=hh(n,a);let u,d;if(o.merge)u=new Ne(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const m of o.mergeFields){const T=zi(e,m,t);if(!a.contains(T))throw new D(A.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);fh(p,T)||p.push(T)}u=new Ne(p),d=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=a.fieldTransforms;return new wy(new Ce(l),u,d)}class Dr extends _o{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dr}}function Iy(s,e,t,n){const r=s.Cc(1,e,t);Co("Data must be an object, but it was:",r,n);const o=[],a=Ce.empty();At(n,(u,d)=>{const p=ko(e,u,t);d=_e(d);const m=r.yc(p);if(d instanceof Dr)o.push(p);else{const T=ms(d,m);T!=null&&(o.push(p),a.set(p,T))}});const l=new Ne(o);return new lh(a,l,r.fieldTransforms)}function Sy(s,e,t,n,r,o){const a=s.Cc(1,e,t),l=[zi(e,n,t)],u=[r];if(o.length%2!=0)throw new D(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<o.length;T+=2)l.push(zi(e,o[T])),u.push(o[T+1]);const d=[],p=Ce.empty();for(let T=l.length-1;T>=0;--T)if(!fh(d,l[T])){const C=l[T];let N=u[T];N=_e(N);const L=a.yc(C);if(N instanceof Dr)d.push(C);else{const R=ms(N,L);R!=null&&(d.push(C),p.set(C,R))}}const m=new Ne(d);return new lh(p,m,a.fieldTransforms)}function Ty(s,e,t,n=!1){return ms(t,s.Cc(n?4:3,e))}function ms(s,e){if(dh(s=_e(s)))return Co("Unsupported field value:",e,s),hh(s,e);if(s instanceof _o)return function(t,n){if(!uh(n.Ac))throw n.Sc(`${t._methodName}() can only be used with update() and set()`);if(!n.path)throw n.Sc(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(n);r&&n.fieldTransforms.push(r)}(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(t,n){const r=[];let o=0;for(const a of t){let l=ms(a,n.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(s,e)}return function(t,n){if((t=_e(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return um(n.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=Y.fromDate(t);return{timestampValue:ir(n.serializer,r)}}if(t instanceof Y){const r=new Y(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ir(n.serializer,r)}}if(t instanceof $e)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof De)return{bytesValue:Cu(n.serializer,t._byteString)};if(t instanceof le){const r=n.databaseId,o=t.firestore._databaseId;if(!o.isEqual(r))throw n.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:lo(t.firestore._databaseId||n.databaseId,t._key.path)}}if(t instanceof qe)return function(r,o){return{mapValue:{fields:{[su]:{stringValue:ru},[tr]:{arrayValue:{values:r.toArray().map(a=>{if(typeof a!="number")throw o.Sc("VectorValues must only contain numeric values.");return io(o.serializer,a)})}}}}}}(t,n);throw n.Sc(`Unsupported field value: ${yr(t)}`)}(s,e)}function hh(s,e){const t={};return Jl(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):At(s,(n,r)=>{const o=ms(r,e.mc(n));o!=null&&(t[n]=o)}),{mapValue:{fields:t}}}function dh(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof Y||s instanceof $e||s instanceof De||s instanceof le||s instanceof _o||s instanceof qe)}function Co(s,e,t){if(!dh(t)||!Ql(t)){const n=yr(t);throw n==="an object"?e.Sc(s+" a custom object"):e.Sc(s+" "+n)}}function zi(s,e,t){if((e=_e(e))instanceof Nr)return e._internalPath;if(typeof e=="string")return ko(s,e);throw lr("Field path arguments must be of type string or ",s,!1,void 0,t)}const _y=new RegExp("[~\\*/\\[\\]]");function ko(s,e,t){if(e.search(_y)>=0)throw lr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new Nr(...e.split("."))._internalPath}catch{throw lr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function lr(s,e,t,n,r){const o=n&&!n.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${n}`),a&&(u+=` in document ${r}`),u+=")"),new D(A.INVALID_ARGUMENT,l+s+u)}function fh(s,e){return s.some(t=>t.isEqual(e))}/**
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
*/class ph{constructor(e,t,n,r,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ay(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Rr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ay extends ph{data(){return super.data()}}function Rr(s,e){return typeof e=="string"?ko(s,e):e instanceof Nr?e._internalPath:e._delegate._internalPath}/**
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
*/function xy(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new D(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class No{}class mh extends No{}function Vs(s,e,...t){let n=[];e instanceof No&&n.push(e),n=n.concat(t),function(r){const o=r.filter(l=>l instanceof Do).length,a=r.filter(l=>l instanceof Lr).length;if(o>1||o>0&&a>0)throw new D(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const r of n)s=r._apply(s);return s}class Lr extends mh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Lr(e,t,n)}_apply(e){const t=this._parse(e);return gh(e._query,t),new Ht(e.firestore,e.converter,Li(e._query,t))}_parse(e){const t=xo(e.firestore);return function(n,r,o,a,l,u,d){let p;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new D(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){sl(d,u);const m=[];for(const T of d)m.push(nl(a,n,T));p={arrayValue:{values:m}}}else p=nl(a,n,d)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||sl(d,u),p=Ty(o,r,d,u==="in"||u==="not-in");return ae.create(l,u,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function el(s,e,t){const n=e,r=Rr("where",s);return Lr._create(r,n,t)}class Do extends No{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Do(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Pe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(n,r){let o=n;const a=r.getFlattenedFilters();for(const l of a)gh(o,l),o=Li(o,l)}(e._query,t),new Ht(e.firestore,e.converter,Li(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ro extends mh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ro(e,t)}_apply(e){const t=function(n,r,o){if(n.startAt!==null)throw new D(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(n.endAt!==null)throw new D(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rs(r,o)}(e._query,this._field,this._direction);return new Ht(e.firestore,e.converter,function(n,r){const o=n.explicitOrderBy.concat([r]);return new In(n.path,n.collectionGroup,o,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}(e._query,t))}}function tl(s,e="asc"){const t=e,n=Rr("orderBy",s);return Ro._create(n,t)}function nl(s,e,t){if(typeof(t=_e(t))=="string"){if(t==="")throw new D(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!du(e)&&t.indexOf("/")!==-1)throw new D(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Q.fromString(t));if(!P.isDocumentKey(n))throw new D(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return yc(s,new P(n))}if(t instanceof le)return yc(s,t._key);throw new D(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yr(t)}.`)}function sl(s,e){if(!Array.isArray(s)||s.length===0)throw new D(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gh(s,e){const t=function(n,r){for(const o of n)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(s.filters,function(n){switch(n){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new D(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Cy{convertValue(e,t="none"){switch(St(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(It(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return At(e,(r,o)=>{n[r]=this.convertValue(o,t)}),n}convertVectorValue(e){var t,n,r;const o=(r=(n=(t=e.fields)==null?void 0:t[tr].arrayValue)==null?void 0:n.values)==null?void 0:r.map(a=>re(a.doubleValue));return new qe(o)}convertGeoPoint(e){return new $e(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=br(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ts(e));default:return null}}convertTimestamp(e){const t=Et(e);return new Y(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Q.fromString(e);W(Ou(n),9688,{name:e});const r=new ns(n.get(1),n.get(3)),o=new P(n.popFirst(5));return r.isEqual(t)||Je(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
*/function ky(s,e,t){let n;return n=s?s.toFirestore(e):e,n}class Gn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pt extends ph{constructor(e,t,n,r,o,a){super(e,t,n,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Rr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(A.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Pt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()||(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),t}}Pt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pt._jsonSchema={type:ce("string",Pt._jsonSchemaVersion),bundleSource:ce("string","DocumentSnapshot"),bundleName:ce("string"),bundle:ce("string")};class Gs extends Pt{data(e={}){return super.data(e)}}class rn{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Gn(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Gs(this._firestore,this._userDataWriter,n.key,n,new Gn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(n,r){if(n._snapshot.oldDocs.isEmpty()){let o=0;return n._snapshot.docChanges.map(a=>{const l=new Gs(n._firestore,n._userDataWriter,a.doc.key,a.doc,new Gn(n._snapshot.mutatedKeys.has(a.doc.key),n._snapshot.fromCache),n.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new Gs(n._firestore,n._userDataWriter,a.doc.key,a.doc,new Gn(n._snapshot.mutatedKeys.has(a.doc.key),n._snapshot.fromCache),n.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:Ny(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(A.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=rn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),r.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ny(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:s})}}/**
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
*/function rl(s){s=Ye(s,le);const e=Ye(s.firestore,Tn);return fy(To(e),s._key).then(t=>Dy(e,s,t))}rn._jsonSchemaVersion="firestore/querySnapshot/1.0",rn._jsonSchema={type:ce("string",rn._jsonSchemaVersion),bundleSource:ce("string","QuerySnapshot"),bundleName:ce("string"),bundle:ce("string")};class yh extends Cy{constructor(e){super(),this.firestore=e}convertBytes(e){return new De(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function Xt(s){s=Ye(s,Ht);const e=Ye(s.firestore,Tn),t=To(e),n=new yh(e);return xy(s._query),py(t,s._query).then(r=>new rn(e,n,s,r))}function il(s,e,t,...n){s=Ye(s,le);const r=Ye(s.firestore,Tn),o=xo(r);let a;return a=typeof(e=_e(e))=="string"||e instanceof Nr?Sy(o,"updateDoc",s._key,e,t,n):Iy(o,"updateDoc",s._key,e),Lo(r,[a.toMutation(s._key,Oe.exists(!0))])}function ol(s){return Lo(Ye(s.firestore,Tn),[new oo(s._key,Oe.none())])}function wi(s,e){const t=Ye(s.firestore,Tn),n=Hn(s),r=ky(s.converter,e);return Lo(t,[Ey(xo(s.firestore),"addDoc",n._key,r,s.converter!==null,{}).toMutation(n._key,Oe.exists(!1))]).then(()=>n)}function Lo(s,e){return function(t,n){const r=new Qe;return t.asyncQueue.enqueueAndForget(async()=>ty(await dy(t),n,r)),r.promise}(To(s),e)}function Dy(s,e,t){const n=t.docs.get(e._key),r=new yh(s);return new Pt(s,r,e._key,n,new Gn(t.hasPendingWrites,t.fromCache),e.converter)}(function(s,e=!0){(function(t){wn=t})(vn),ln(new Ft("firestore",(t,{instanceIdentifier:n,options:r})=>{const o=t.getProvider("app").getImmediate(),a=new Tn(new Ip(t.getProvider("auth-internal")),new _p(o,t.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new D(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ns(l.options.projectId,u)}(o,n),o);return r={useFetchStreams:e,...r},a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),yt(rc,ic,s),yt(rc,ic,"esm2020")})();const Ry=function(s,e,t){let n=Promise.resolve();function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return n.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return s().catch(r)})};var Ly="firebase",Oy="12.4.0";/**
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
*/yt(Ly,Oy,"app");function vh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Py=vh,wh=new cs("auth","Firebase",vh());/**
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
*/const ur=new Wi("@firebase/auth");function My(s,...e){ur.logLevel<=$.WARN&&ur.warn(`Auth (${vn}): ${s}`,...e)}function Ks(s,...e){ur.logLevel<=$.ERROR&&ur.error(`Auth (${vn}): ${s}`,...e)}/**
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
*/function et(s,...e){throw Oo(s,...e)}function ze(s,...e){return Oo(s,...e)}function bh(s,e,t){const n={...Py(),[e]:t};return new cs("auth","Firebase",n).create(e,{appName:s.name})}function Mt(s){return bh(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oo(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return wh.create(s,...e)}function U(s,e,...t){if(!s)throw Oo(e,...t)}function Ke(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Ks(e),new Error(e)}function tt(s,e){s||Ke(e)}/**
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
*/function Hi(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function Uy(){return al()==="http:"||al()==="https:"}function al(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
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
*/function Fy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uy()||Yd()||"connection"in navigator)?navigator.onLine:!0}function Vy(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
*/class gs{constructor(e,t){this.shortDelay=e,this.longDelay=t,tt(t>e,"Short delay should be less than long delay!"),this.isMobile=Qd()||Zd()}get(){return Fy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function Po(s,e){tt(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
*/class Eh{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const jy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$y=new gs(3e4,6e4);function Mo(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function _n(s,e,t,n,r={}){return Ih(s,r,async()=>{let o={},a={};n&&(e==="GET"?a=n:o={body:JSON.stringify(n)});const l=ls({key:s.config.apiKey,...a}).slice(1),u=await s._getAdditionalHeaders();u["Content-Type"]="application/json",s.languageCode&&(u["X-Firebase-Locale"]=s.languageCode);const d={method:e,headers:u,...o};return Jd()||(d.referrerPolicy="no-referrer"),s.emulatorConfig&&yn(s.emulatorConfig.host)&&(d.credentials="include"),Eh.fetch()(await Sh(s,s.config.apiHost,t,l),d)})}async function Ih(s,e,t){s._canInitEmulator=!1;const n={...By,...e};try{const r=new zy(s),o=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Bs(s,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bs(s,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Bs(s,"email-already-in-use",a);if(u==="USER_DISABLED")throw Bs(s,"user-disabled",a);const p=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw bh(s,p,d);et(s,p)}}catch(r){if(r instanceof nt)throw r;et(s,"network-request-failed",{message:String(r)})}}async function qy(s,e,t,n,r={}){const o=await _n(s,e,t,n,r);return"mfaPendingCredential"in o&&et(s,"multi-factor-auth-required",{_serverResponse:o}),o}async function Sh(s,e,t,n){const r=`${e}${t}?${n}`,o=s,a=o.config.emulator?Po(s.config,r):`${s.config.apiScheme}://${r}`;return jy.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class zy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(ze(this.auth,"network-request-failed")),$y.get())})}}function Bs(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=ze(s,e,n);return r.customData._tokenResponse=t,r}/**
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
*/async function Hy(s,e){return _n(s,"POST","/v1/accounts:delete",e)}async function hr(s,e){return _n(s,"POST","/v1/accounts:lookup",e)}/**
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
*/function Yn(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gy(s,e=!1){const t=_e(s),n=await t.getIdToken(e),r=Uo(n);U(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:r,token:n,authTime:Yn(bi(r.auth_time)),issuedAtTime:Yn(bi(r.iat)),expirationTime:Yn(bi(r.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function bi(s){return Number(s)*1e3}function Uo(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return Ks("JWT malformed, contained fewer than 3 sections"),null;try{const r=Cl(t);return r?JSON.parse(r):(Ks("Failed to decode base64 JWT payload"),null)}catch(r){return Ks("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function cl(s){const e=Uo(s);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
*/async function as(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof nt&&Ky(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function Ky({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
*/class Gi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yn(this.lastLoginAt),this.creationTime=Yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function dr(s){var e;const t=s.auth,n=await s.getIdToken(),r=await as(s,hr(t,{idToken:n}));U(r==null?void 0:r.users.length,t,"internal-error");const o=r.users[0];s._notifyReloadListener(o);const a=(e=o.providerUserInfo)!=null&&e.length?Th(o.providerUserInfo):[],l=Xy(s.providerData,a),u=s.isAnonymous,d=!(s.email&&o.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Gi(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(s,m)}async function Qy(s){const e=_e(s);await dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xy(s,e){return[...s.filter(t=>!e.some(n=>n.providerId===t.providerId)),...e]}function Th(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
*/async function Jy(s,e){const t=await Ih(s,{},async()=>{const n=ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=s.config,a=await Sh(s,r,"/v1/token",`key=${o}`),l=await s._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:n};return s.emulatorConfig&&yn(s.emulatorConfig.host)&&(u.credentials="include"),Eh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Yy(s,e){return _n(s,"POST","/v2/accounts:revokeToken",Mo(s,e))}/**
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
*/class on{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=cl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await Jy(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,a=new on;return n&&(U(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),r&&(U(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),o&&(U(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new on,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
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
*/function lt(s,e){U(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class Le{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new Wy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Gi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await as(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Gy(this,e)}reload(){return Qy(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Le({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await dr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await as(this,Hy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:T,isAnonymous:C,providerData:N,stsTokenManager:L}=t;U(m&&L,e,"internal-error");const R=on.fromJSON(this.name,L);U(typeof m=="string",e,"internal-error"),lt(n,e.name),lt(r,e.name),U(typeof T=="boolean",e,"internal-error"),U(typeof C=="boolean",e,"internal-error"),lt(o,e.name),lt(a,e.name),lt(l,e.name),lt(u,e.name),lt(d,e.name),lt(p,e.name);const B=new Le({uid:m,auth:e,email:r,emailVerified:T,displayName:n,isAnonymous:C,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:R,createdAt:d,lastLoginAt:p});return N&&Array.isArray(N)&&(B.providerData=N.map(G=>({...G}))),u&&(B._redirectEventId=u),B}static async _fromIdTokenResponse(e,t,n=!1){const r=new on;r.updateFromServerResponse(t);const o=new Le({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await dr(o),o}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];U(r.localId!==void 0,"internal-error");const o=r.providerUserInfo!==void 0?Th(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(o!=null&&o.length),l=new on;l.updateFromIdToken(n);const u=new Le({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Gi(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
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
*/const ll=new Map;function We(s){tt(s instanceof Function,"Expected a class definition");let e=ll.get(s);return e?(tt(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,ll.set(s,e),e)}/**
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
*/class _h{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_h.type="NONE";const ul=_h;/**
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
*/function Ws(s,e,t){return`firebase:${s}:${e}:${t}`}class an{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=Ws(this.userKey,r.apiKey,o),this.fullPersistenceKey=Ws("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await hr(this.auth,{idToken:e}).catch(()=>{});return t?Le._fromGetAccountInfoResponse(this.auth,t,e):null}return Le._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new an(We(ul),e,n);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=r[0]||We(ul);const a=Ws(n,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){let m;if(typeof p=="string"){const T=await hr(e,{idToken:p}).catch(()=>{});if(!T)break;m=await Le._fromGetAccountInfoResponse(e,T,p)}else m=Le._fromJSON(e,p);d!==o&&(l=m),o=d;break}}catch{}const u=r.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new an(o,e,n):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new an(o,e,n))}}/**
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
*/function hl(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ah(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dh(e))return"Blackberry";if(Rh(e))return"Webos";if(xh(e))return"Safari";if((e.includes("chrome/")||Ch(e))&&!e.includes("edge/"))return"Chrome";if(Nh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Ah(s=Ie()){return/firefox\//i.test(s)}function xh(s=Ie()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ch(s=Ie()){return/crios\//i.test(s)}function kh(s=Ie()){return/iemobile/i.test(s)}function Nh(s=Ie()){return/android/i.test(s)}function Dh(s=Ie()){return/blackberry/i.test(s)}function Rh(s=Ie()){return/webos/i.test(s)}function Fo(s=Ie()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Zy(s=Ie()){var e;return Fo(s)&&!!((e=window.navigator)!=null&&e.standalone)}function ev(){return ef()&&document.documentMode===10}function Lh(s=Ie()){return Fo(s)||Nh(s)||Rh(s)||Dh(s)||/windows phone/i.test(s)||kh(s)}/**
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
*/function Oh(s,e=[]){let t;switch(s){case"Browser":t=hl(Ie());break;case"Worker":t=`${hl(Ie())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vn}/${n}`}/**
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
*/class tv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=o=>new Promise((a,l)=>{try{const u=e(o);a(u)}catch(u){l(u)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
*/async function nv(s,e={}){return _n(s,"GET","/v2/passwordPolicy",Mo(s,e))}/**
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
*/const sv=6;class rv{constructor(e){var t;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??sv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((t=e.allowedNonAlphanumericCharacters)==null?void 0:t.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
*/class iv{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dl(this),this.idTokenSubscription=new dl(this),this.beforeStateQueue=new tv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=We(t)),this._initializationPromise=this.queue(async()=>{var n,r,o;if(!this._deleted&&(this.persistenceManager=await an.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await hr(this,{idToken:e}),n=await Le._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ve(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)==null?void 0:t._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u!=null&&u.user&&(r=u.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await dr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(Mt(this));const t=e?_e(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(We(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nv(this),t=new rv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Yy(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&We(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await an.create(this,[We(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,r);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&My(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Vo(s){return _e(s)}class dl{constructor(e){this.auth=e,this.observer=null,this.addObserver=lf(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/let Bo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ov(s){Bo=s}function av(s){return Bo.loadJS(s)}function cv(){return Bo.gapiScript}function lv(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
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
*/function uv(s,e){const t=Xi(s,"auth");if(t.isInitialized()){const n=t.getImmediate(),r=t.getOptions();if(Ut(r,e??{}))return n;et(n,"already-initialized")}return t.initialize({options:e})}function hv(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(We);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function dv(s,e,t){const n=Vo(s);U(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,o=Ph(e),{host:a,port:l}=fv(e),u=l===null?"":`:${l}`,d={url:`${o}//${a}${u}/`},p=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){U(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),U(Ut(d,n.config.emulator)&&Ut(p,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=p,n.settings.appVerificationDisabledForTesting=!0,yn(a)?(Rl(`${o}//${a}${u}`),Ll("Auth",!0)):pv()}function Ph(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function fv(s){const e=Ph(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const o=r[1];return{host:o,port:fl(n.substr(o.length+1))}}else{const[o,a]=n.split(":");return{host:o,port:fl(a)}}}function fl(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function pv(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
*/class Mh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,t){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}/**
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
*/async function cn(s,e){return qy(s,"POST","/v1/accounts:signInWithIdp",Mo(s,e))}/**
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
*/const mv="http://localhost";class jt extends Mh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...o}=t;if(!n||!r)return null;const a=new jt(n,r);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return cn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,cn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,cn(e,t)}buildRequest(){const e={requestUri:mv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ls(t)}return e}}/**
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
*/class Uh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
*/class ys extends Uh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
*/class ut extends ys{constructor(){super("facebook.com")}static credential(e){return jt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";ut.PROVIDER_ID="facebook.com";/**
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
*/class ht extends ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return jt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ht.credential(t,n)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
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
*/class dt extends ys{constructor(){super("github.com")}static credential(e){return jt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.GITHUB_SIGN_IN_METHOD="github.com";dt.PROVIDER_ID="github.com";/**
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
*/class ft extends ys{constructor(){super("twitter.com")}static credential(e,t){return jt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ft.credential(t,n)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
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
*/class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await Le._fromIdTokenResponse(e,n,r),a=pl(n);return new gn({user:o,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=pl(n);return new gn({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function pl(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
*/class fr extends nt{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,fr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new fr(e,t,n,r)}}function Fh(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?fr._fromErrorAndOperation(s,r,e,n):r})}async function gv(s,e,t=!1){const n=await as(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return gn._forOperation(s,"link",n)}/**
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
*/async function yv(s,e,t=!1){const{auth:n}=s;if(Ve(n.app))return Promise.reject(Mt(n));const r="reauthenticate";try{const o=await as(s,Fh(n,r,e,s),t);U(o.idToken,n,"internal-error");const a=Uo(o.idToken);U(a,n,"internal-error");const{sub:l}=a;return U(s.uid===l,n,"user-mismatch"),gn._forOperation(s,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&et(n,"user-mismatch"),o}}/**
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
*/async function vv(s,e,t=!1){if(Ve(s.app))return Promise.reject(Mt(s));const n="signIn",r=await Fh(s,n,e),o=await gn._fromIdTokenResponse(s,n,r);return t||await s._updateCurrentUser(o.user),o}function wv(s,e,t,n){return _e(s).onIdTokenChanged(e,t,n)}function bv(s,e,t){return _e(s).beforeAuthStateChanged(e,t)}const pr="__sak";/**
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
*/class Vh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pr,"1"),this.storage.removeItem(pr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/const Ev=1e3,Iv=10;class Bh extends Vh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},o=this.storage.getItem(n);ev()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Iv):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Ev)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bh.type="LOCAL";const Sv=Bh;/**
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
*/class jh extends Vh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jh.type="SESSION";const $h=jh;/**
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
*/function Tv(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
*/class Or{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new Or(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const l=Array.from(a).map(async d=>d(t.origin,o)),u=await Tv(l);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Or.receivers=[];/**
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
*/function jo(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
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
*/class _v{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const d=jo("",20);r.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},n);a={messageChannel:r,onMessage(m){const T=m;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(T.data.response);break;default:clearTimeout(p),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
*/function He(){return window}function Av(s){He().location.href=s}/**
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
*/function qh(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function xv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cv(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function kv(){return qh()?self:null}/**
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
*/const zh="firebaseLocalStorageDb",Nv=1,mr="firebaseLocalStorage",Hh="fbase_key";class vs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pr(s,e){return s.transaction([mr],e?"readwrite":"readonly").objectStore(mr)}function Dv(){const s=indexedDB.deleteDatabase(zh);return new vs(s).toPromise()}function Ki(){const s=indexedDB.open(zh,Nv);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(mr,{keyPath:Hh})}catch(r){t(r)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(mr)?e(n):(n.close(),await Dv(),e(await Ki()))})})}async function ml(s,e,t){const n=Pr(s,!0).put({[Hh]:e,value:t});return new vs(n).toPromise()}async function Rv(s,e){const t=Pr(s,!1).get(e),n=await new vs(t).toPromise();return n===void 0?null:n.value}function gl(s,e){const t=Pr(s,!0).delete(e);return new vs(t).toPromise()}const Lv=800,Ov=3;class Gh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ki(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Ov)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Or._getInstance(kv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xv(),!this.activeServiceWorker)return;this.sender=new _v(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(e=n[0])!=null&&e.fulfilled&&(t=n[0])!=null&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ki();return await ml(e,pr,"1"),await gl(e,pr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ml(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Rv(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>gl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=Pr(r,!1).getAll();return new vs(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gh.type="LOCAL";const Pv=Gh;new gs(3e4,6e4);/**
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
*/function Mv(s,e){return e?We(e):(U(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
*/class $o extends Mh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return cn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Uv(s){return vv(s.auth,new $o(s),s.bypassAuthState)}function Fv(s){const{auth:e,user:t}=s;return U(t,e,"internal-error"),yv(t,new $o(s),s.bypassAuthState)}async function Vv(s){const{auth:e,user:t}=s;return U(t,e,"internal-error"),gv(t,new $o(s),s.bypassAuthState)}/**
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
*/class Kh{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uv;case"linkViaPopup":case"linkViaRedirect":return Vv;case"reauthViaPopup":case"reauthViaRedirect":return Fv;default:et(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const Bv=new gs(2e3,1e4);class nn extends Kh{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=jo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bv.get())};e()}}nn.currentPopupAction=null;/**
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
*/const jv="pendingRedirect",Qs=new Map;class $v extends Kh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Qs.get(this.auth._key());if(!e){try{const t=await qv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Qs.set(this.auth._key(),e)}return this.bypassAuthState||Qs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qv(s,e){const t=Gv(e),n=Hv(s);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function zv(s,e){Qs.set(s._key(),e)}function Hv(s){return We(s._redirectPersistence)}function Gv(s){return Ws(jv,s.config.apiKey,s.name)}async function Kv(s,e,t=!1){if(Ve(s.app))return Promise.reject(Mt(s));const n=Vo(s),r=Mv(n,e),o=await new $v(n,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
*/const Wv=10*60*1e3;class Qv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Wh(e)){const r=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(ze(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wv&&this.cachedEventUids.clear(),this.cachedEventUids.has(yl(e))}saveEventToCache(e){this.cachedEventUids.add(yl(e)),this.lastProcessedEventTime=Date.now()}}function yl(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Wh({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xv(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wh(s);default:return!1}}/**
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
*/async function Jv(s,e={}){return _n(s,"GET","/v1/projects",e)}/**
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
*/const Yv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zv=/^https?/;async function ew(s){if(s.config.emulator)return;const{authorizedDomains:e}=await Jv(s);for(const t of e)try{if(tw(t))return}catch{}et(s,"unauthorized-domain")}function tw(s){const e=Hi(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const o=new URL(s);return o.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Zv.test(t))return!1;if(Yv.test(s))return n===s;const r=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
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
*/const nw=new gs(3e4,6e4);function vl(){const s=He().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function sw(s){return new Promise((e,t)=>{var n,r,o;function a(){vl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vl(),t(ze(s,"network-request-failed"))},timeout:nw.get()})}if((r=(n=He().gapi)==null?void 0:n.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=He().gapi)!=null&&o.load)a();else{const l=lv("iframefcb");return He()[l]=()=>{gapi.load?a():t(ze(s,"network-request-failed"))},av(`${cv()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Xs=null,e})}let Xs=null;function rw(s){return Xs=Xs||sw(s),Xs}/**
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
*/const iw=new gs(5e3,15e3),ow="__/auth/iframe",aw="emulator/auth/iframe",cw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uw(s){const e=s.config;U(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?Po(e,aw):`https://${s.config.authDomain}/${ow}`,n={apiKey:e.apiKey,appName:s.name,v:vn},r=lw.get(s.config.apiHost);r&&(n.eid=r);const o=s._getFrameworks();return o.length&&(n.fw=o.join(",")),`${t}?${ls(n).slice(1)}`}async function hw(s){const e=await rw(s),t=He().gapi;return U(t,s,"internal-error"),e.open({where:document.body,url:uw(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cw,dontclear:!0},n=>new Promise(async(r,o)=>{await n.restyle({setHideOnLeave:!1});const a=ze(s,"network-request-failed"),l=He().setTimeout(()=>{o(a)},iw.get());function u(){He().clearTimeout(l),r(n)}n.ping(u).then(u,()=>{o(a)})}))}/**
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
*/const dw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fw=500,pw=600,mw="_blank",gw="http://localhost";class wl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yw(s,e,t,n=fw,r=pw){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const u={...dw,width:n.toString(),height:r.toString(),top:o,left:a},d=Ie().toLowerCase();t&&(l=Ch(d)?mw:t),Ah(d)&&(e=e||gw,u.scrollbars="yes");const p=Object.entries(u).reduce((T,[C,N])=>`${T}${C}=${N},`,"");if(Zy(d)&&l!=="_self")return vw(e||"",l),new wl(null);const m=window.open(e||"",l,p);U(m,s,"popup-blocked");try{m.focus()}catch{}return new wl(m)}function vw(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
*/const ww="__/auth/handler",bw="emulator/auth/handler",Ew=encodeURIComponent("fac");async function bl(s,e,t,n,r,o){U(s.config.authDomain,s,"auth-domain-config-required"),U(s.config.apiKey,s,"invalid-api-key");const a={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:vn,eventId:r};if(e instanceof Uh){e.setDefaultLanguage(s.languageCode),a.providerId=e.providerId||"",cf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof ys){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}s.tenantId&&(a.tid=s.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await s._getAppCheckToken(),d=u?`#${Ew}=${encodeURIComponent(u)}`:"";return`${Iw(s)}?${ls(l).slice(1)}${d}`}function Iw({config:s}){return s.emulator?Po(s,bw):`https://${s.authDomain}/${ww}`}/**
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
*/const Ei="webStorageSupport";class Sw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$h,this._completeRedirectFn=Kv,this._overrideRedirectResult=zv}async _openPopup(e,t,n,r){var o;tt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await bl(e,t,n,Hi(),r);return yw(e,a,jo())}async _openRedirect(e,t,n,r){await this._originValidation(e);const o=await bl(e,t,n,Hi(),r);return Av(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:o}=this.eventManagers[t];return r?Promise.resolve(r):(tt(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await hw(e),n=new Qv(e);return t.register("authEvent",r=>(U(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ei,{type:Ei},n=>{var r;const o=(r=n==null?void 0:n[0])==null?void 0:r[Ei];o!==void 0&&t(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ew(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Lh()||xh()||Fo()}}const Tw=Sw;var El="@firebase/auth",Il="1.11.0";/**
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
*/class _w{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function Aw(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xw(s){ln(new Ft("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=n.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:a,authDomain:l,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oh(s)},d=new iv(n,r,o,u);return hv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),ln(new Ft("auth-internal",e=>{const t=Vo(e.getProvider("auth").getImmediate());return(n=>new _w(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(El,Il,Aw(s)),yt(El,Il,"esm2020")}/**
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
*/const Cw=5*60,kw=Dl("authIdTokenMaxAge")||Cw;let Sl=null;const Nw=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>kw)return;const r=t==null?void 0:t.token;Sl!==r&&(Sl=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Dw(s=Ul()){const e=Xi(s,"auth");if(e.isInitialized())return e.getImmediate();const t=uv(s,{popupRedirectResolver:Tw,persistence:[Pv,Sv,$h]}),n=Dl("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const a=Nw(o.toString());bv(t,a,()=>a(t.currentUser)),wv(t,l=>a(l))}}const r=kl("auth");return r&&dv(t,`http://${r}`),t}function Rw(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}ov({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=r=>{const o=ze("internal-error");o.customData=r,t(o)},n.type="text/javascript",n.charset="UTF-8",Rw().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xw("Browser");const $t={apiKey:"AIzaSyAYy5QZzuXAoTGu2NVO6wAx1Q3tXMqO8SI",authDomain:"splitwiseclone-d9135.firebaseapp.com",projectId:"splitwiseclone-d9135",storageBucket:"splitwiseclone-d9135.firebasestorage.app",messagingSenderId:"1067457595825",appId:"1:1067457595825:web:54d33ba82260f11ef39590"},qo=Ml($t),tn=gy(qo);Dw(qo);console.log("🔥🔥🔥 FIREBASE CONFIG COMPREHENSIVE DEBUG 🔥🔥🔥");console.log("🔥 Raw firebaseConfig object:",$t);console.log("🔥 Project ID:",$t.projectId);console.log("🔥 Auth Domain:",$t.authDomain);var Tl;console.log("🔥 API Key (masked):",((Tl=$t.apiKey)==null?void 0:Tl.substring(0,10))+"...");console.log("🔥 Environment variables check:");console.log("🔥 - VITE_FIREBASE_PROJECT_ID:","splitwiseclone-d9135");console.log("🔥 - VITE_FIREBASE_API_KEY exists:",!0);console.log("🔥 - VITE_FIREBASE_AUTH_DOMAIN:","splitwiseclone-d9135.firebaseapp.com");$t.projectId==="demo-project"?(console.log("⚠️⚠️⚠️ WARNING: Using demo Firebase config! This will NOT work with real data."),console.log("⚠️ All Firebase calls will fail. Set environment variables!")):console.log("✅ Using real Firebase config for project:",$t.projectId);console.log("✅ FIREBASE-ONLY MODE ACTIVATED ✅");console.log("🔥 Firebase app object:",qo);console.log("🔥 Firestore db object:",tn);Ry(()=>Promise.resolve().then(()=>Lw)).then(s=>{console.log("🔥 Testing Firebase connection..."),s.firebaseService.getUsers().then(e=>console.log("🔥 Firebase works! Users found:",e.length)).catch(e=>console.error("🔥 Firebase connection failed:",e))}).catch(s=>console.error("🔥 Failed to load FirebaseService:",s));class Qh{constructor(){K(this,"usersCollection",vi(tn,"user")),K(this,"expensesCollection",vi(tn,"expenses")),K(this,"settlementsCollection",vi(tn,"settlements")),console.log("🔥🔥🔥 FirebaseService constructor called"),console.log("🔥 Database object:",tn),console.log("🔥 Users collection:",this.usersCollection),console.log("🔥 Expenses collection:",this.expensesCollection),console.log("🔥 Settlements collection:",this.settlementsCollection),console.log("🔥 FirebaseService initialized successfully")}async getUsers(){try{return(await Xt(this.usersCollection)).docs.map(e=>{var t;const n=e.data();return{id:e.id,name:n.name,username:n.username,avatar:n.avatar,role:n.isAdmin===!0?"admin":n.role||"user",createdAt:((t=n.createdAt)==null?void 0:t.toDate())||new Date,isActive:n.isActive===!0}})}catch(e){throw console.error("Error getting users:",e),e}}async getUserByUsername(e){var t;try{console.log("🔥 FirebaseService: Querying Firestore for username:",e),console.log("🔥 FirebaseService: Collection name:","user"),console.log("🔥 FirebaseService: Query field:","username");const n=Vs(this.usersCollection,el("username","==",e)),r=await Xt(n);console.log("🔥 FirebaseService: Query result - empty:",r.empty,"size:",r.size),console.log("🔥 FirebaseService: Query result - empty:",r.empty,"size:",r.size);const o=await Xt(this.usersCollection);if(console.log("🔥 FirebaseService: ALL DOCUMENTS in collection:",o.size),o.forEach(d=>{const p=d.data();console.log("🔥 FirebaseService: Document:",d.id,"username:",p.username,"isActive:",p.isActive)}),r.empty?console.log("🔥 FirebaseService: No documents found with query"):(console.log("🔥 FirebaseService: Found documents with query:"),r.forEach(d=>{console.log("🔥 FirebaseService: Query result doc:",d.id,d.data())})),r.empty)return console.log("🔥 FirebaseService: No user found with username:",e),null;const a=r.docs[0],l=a.data();console.log("🔥 FirebaseService: Raw user data from Firestore:",l),console.log("🔥🔥🔥 CRITICAL DEBUG 🔥🔥🔥"),console.log("🔥 RAW userData.isActive:",l.isActive),console.log("🔥 RAW userData.isActive TYPE:",typeof l.isActive),console.log("🔥 RAW userData.isActive === true:",l.isActive===!0),console.log("🔥 RAW userData.isActive === false:",l.isActive===!1),l.isActive===!1&&alert("🔥 FIREBASE RAW DATA SHOWS isActive = FALSE for user: "+l.username);const u={id:a.id,name:l.name,username:l.username,avatar:l.avatar,role:l.isAdmin===!0?"admin":l.role||"user",createdAt:((t=l.createdAt)==null?void 0:t.toDate())||new Date,isActive:l.isActive===!0,password:l.password};return console.log("🔥 FirebaseService: Processed user:",u),console.log("🔥 FirebaseService: Password field exists:",!!u.password),u}catch(n){throw console.error("🔥 FirebaseService: Error getting user by username:",n),n}}async createUser(e){try{return{id:(await wi(this.usersCollection,{...e,createdAt:new Date})).id,...e,createdAt:new Date}}catch(t){throw console.error("Error creating user:",t),t}}async updateUser(e,t){var n,r;try{const o=Hn(this.usersCollection,e);await il(o,t);const a=await rl(o);return{id:a.id,...a.data(),createdAt:((r=(n=a.data())==null?void 0:n.createdAt)==null?void 0:r.toDate())||new Date}}catch(o){throw console.error("Error updating user:",o),o}}async deleteUser(e){try{const t=Hn(this.usersCollection,e);await ol(t)}catch(t){throw console.error("Error deleting user:",t),t}}async getExpenses(){try{const e=Vs(this.expensesCollection,tl("date","desc"));return(await Xt(e)).docs.map(t=>{var n;return{id:t.id,...t.data(),date:((n=t.data().date)==null?void 0:n.toDate())||new Date}})}catch(e){throw console.error("Error getting expenses:",e),e}}async createExpense(e){try{console.log("🔥🔥🔥 FirebaseService: createExpense called with:",e),console.log("🔥 FirebaseService: Collection name:","expenses"),console.log("🔥 FirebaseService: About to call addDoc...");const t={description:e.description||"Expense",amount:e.amount||0,currency:e.currency||"VND",paidBy:e.paidBy||"",splitBetween:Array.isArray(e.splitBetween)?e.splitBetween:[],splitType:e.splitType||"equal",category:e.category||"other",date:new Date(e.date)};Object.keys(t).forEach(o=>{t[o]===void 0&&delete t[o]}),console.log("🔥 FirebaseService: Original data:",e),console.log("🔥 FirebaseService: Clean data:",t),console.log("🔥 FirebaseService: Clean data keys:",Object.keys(t));const n=await wi(this.expensesCollection,t);console.log("🔥 FirebaseService: addDoc successful, docRef.id:",n.id);const r={id:n.id,...e};return console.log("🔥 FirebaseService: Returning expense:",r),r}catch(t){throw console.error("❌ FirebaseService: Error creating expense:",t),t}}async deleteExpense(e){try{const t=Hn(this.expensesCollection,e);await ol(t)}catch(t){throw console.error("Error deleting expense:",t),t}}async updateExpense(e,t){try{console.log("🔥🔥🔥 FirebaseService: updateExpense called"),console.log("🔥 Expense ID:",e),console.log("🔥 Full expenseData:",t),console.log("🔥 splitBetween array:",t.splitBetween);const n=Hn(this.expensesCollection,e),r={description:t.description,amount:t.amount,currency:t.currency,paidBy:t.paidBy,splitBetween:t.splitBetween,category:t.category,date:t.date,splitType:t.splitType};console.log("🔥 Data to send to Firebase:",r),console.log("🔥 splitBetween data:",r.splitBetween),await il(n,r),console.log("✅ FirebaseService: Expense updated successfully!")}catch(n){throw console.error("❌ FirebaseService: Error updating expense:",n),n}}async authenticateUser(e,t){var n;try{console.log("🔥🔥🔥 AUTHENTICATION ATTEMPT 🔥🔥🔥"),console.log("🔥 FirebaseService: authenticateUser called with:",{username:e,password:t}),console.log("🔥 FirebaseService: Checking RAW Firebase data directly...");const r=Vs(this.usersCollection,el("username","==",e)),o=await Xt(r);if(o.empty)return console.log("🔥 FirebaseService: No user found with username:",e),null;const a=o.docs[0],l=a.data();if(console.log("🔥🔥🔥 RAW FIREBASE DATA 🔥🔥🔥"),console.log("🔥 RAW rawUserData:",l),console.log("🔥 RAW rawUserData.isActive:",l.isActive),console.log("🔥 RAW rawUserData.isActive TYPE:",typeof l.isActive),console.log("🔥 RAW rawUserData.password:",l.password),l.password!==t)return console.log("🔥 FirebaseService: Password MISMATCH"),null;if(console.log("🔥 FirebaseService: Password match SUCCESS"),l.isActive!==!0)throw console.error("🚫🚫🚫 FIREBASE RAW DATA SHOWS USER INACTIVE 🚫🚫🚫"),console.error("� RAW isActive value:",l.isActive),console.error("🚫 RAW isActive === true:",l.isActive===!0),alert("🚫 TÀI KHOẢN BỊ VÔ HIỆU HÓA - Firebase data: "+l.isActive),new Error("Tài khoản đã bị vô hiệu hóa. Vui lòng liên hệ quản trị viên.");console.log("🔥 FirebaseService: RAW Firebase confirms user is active, proceeding...");const u={id:a.id,name:l.name,username:l.username,avatar:l.avatar,role:l.isAdmin===!0?"admin":"user",createdAt:((n=l.createdAt)==null?void 0:n.toDate())||new Date,isActive:l.isActive};if(u.isActive!==!0)throw console.error("🚨🚨🚨 PARANOID CHECK: About to return user with isActive !== true 🚨🚨🚨"),alert("🚨 PARANOID: Blocking return of inactive user: "+u.isActive),new Error("PARANOID CHECK: Cannot return inactive user");return u}catch(r){throw console.error("🔥 FirebaseService: Error authenticating user:",r),r}}async getSettlements(){try{console.log("🔥🔥🔥 FirebaseService: Getting settlements from Firestore...");const e=Vs(this.settlementsCollection,tl("createdAt","desc")),t=(await Xt(e)).docs.map(n=>{var r,o;return{id:n.id,...n.data(),createdAt:((r=n.data().createdAt)==null?void 0:r.toDate())||new Date,settledAt:((o=n.data().settledAt)==null?void 0:o.toDate())||new Date}});return console.log("🔥 FirebaseService: Retrieved settlements:",t.length),t}catch(e){throw console.error("❌ FirebaseService: Error getting settlements:",e),e}}async saveSettlement(e){try{console.log("🔥🔥🔥 FirebaseService: Saving settlement to Firestore..."),console.log("🔥 Original settlement object:",e),console.log("🔥 Firebase db object:",tn),console.log("🔥 Settlements collection:",this.settlementsCollection);const t={from:e.from,to:e.to,amount:e.amount,isSettled:e.isSettled||!0,createdAt:new Date(e.createdAt),settledAt:new Date(e.settledAt||new Date)};console.log("🔥 Clean settlement data:",t),console.log("🔥 About to call addDoc...");const n=await wi(this.settlementsCollection,t);console.log("🔥 ✅ SUCCESS! Settlement saved with ID:",n.id),console.log("🔥 Document reference:",n),console.log("🔥 Attempting to verify document was saved...");const r=await rl(n);r.exists()?console.log("🔥 ✅ VERIFIED! Document exists:",r.data()):console.log("🔥 ❌ WARNING: Document not found after save!")}catch(t){throw console.error("❌❌❌ FirebaseService: CRITICAL ERROR saving settlement:"),console.error("❌ Error type:",typeof t),console.error("❌ Error message:",t instanceof Error?t.message:t),console.error("❌ Full error object:",t),console.error("❌ Stack trace:",t instanceof Error?t.stack:"No stack"),t}}}const Re=new Qh,Lw=Object.freeze(Object.defineProperty({__proto__:null,FirebaseService:Qh,firebaseService:Re},Symbol.toStringTag,{value:"Module"}));class Ow{constructor(){console.log("🔥 AuthService: Initialized with Firebase-only mode")}async login(e){var t,n,r;try{console.log("🚀 AuthService: Starting Firebase-only login"),console.log("🔥🔥🔥 NUCLEAR DIRECT FIREBASE CHECK 🔥🔥🔥");const o=await Re.getUserByUsername(e.username);if(o&&(console.log("🔥 Direct Firebase check - Raw isActive:",o.isActive),o.isActive!==!0))throw console.error("🚫🚫🚫 NUCLEAR BLOCK AT LOGIN START 🚫🚫🚫"),window.NUCLEAR_BLOCKED_AT_START=!0,alert("🚫 NUCLEAR BLOCK: User inactive at start - "+o.isActive),new Error("User blocked at login start - isActive: "+o.isActive);const a=await Re.authenticateUser(e.username,e.password);if(!a)throw new Error("Invalid credentials");if(console.log("🔥 User from Firebase:",a),console.log("🔥 User role:",a.role),console.log("🔥 User isAdmin:",a.isAdmin),console.log("🔥🔥🔥 AUTHSERVICE NUCLEAR CHECK 🔥🔥🔥"),console.log("🔥 AuthService: user.isActive:",a.isActive),console.log("🔥 AuthService: user.isActive type:",typeof a.isActive),window.LAST_LOGIN_ATTEMPT={username:e.username,isActive:a.isActive,timestamp:Date.now()},a.isActive!==!0)throw console.error("🚫🚫🚫 AUTHSERVICE BLOCKS LOGIN - USER NOT ACTIVE 🚫🚫🚫"),window.BLOCKED_BY_AUTHSERVICE=!0,alert("🚫 AUTHSERVICE BLOCK: isActive = "+a.isActive),new Error("Tài khoản đã bị vô hiệu hóa trong AuthService.");const l={isAuthenticated:!0,currentUser:{id:a.id,name:a.name,username:a.username,role:a.isAdmin===!0?"admin":a.role||"user",createdAt:new Date(a.createdAt||Date.now()),isActive:a.isActive,avatar:a.avatar},token:this.generateToken()};if(((t=l.currentUser)==null?void 0:t.isActive)!==!0)throw console.error("🚨🚨🚨 FINAL FAIL-SAFE TRIGGERED 🚨🚨🚨"),console.error("🚨 AuthState has isActive:",(n=l.currentUser)==null?void 0:n.isActive),window.FINAL_FAILSAFE_TRIGGERED=!0,alert("🚨 FINAL FAIL-SAFE: Blocking login with isActive = "+((r=l.currentUser)==null?void 0:r.isActive)),new Error("FINAL FAIL-SAFE: User not active in final auth state.");return console.log("🔥 Final auth state:",l),l}catch(o){throw new Error(o instanceof Error?o.message:"Login failed")}}logout(){}getCurrentAuth(){return{isAuthenticated:!1,currentUser:null}}async createUser(e){try{const t=await Re.createUser({name:e.name,username:e.username,role:"user",isActive:!0,createdAt:new Date,password:e.password,isAdmin:!1});return{id:t.id,name:t.name,username:t.username,role:"user",createdAt:t.createdAt,isActive:!0}}catch(t){throw new Error(t instanceof Error?t.message:"Failed to create user in Firebase")}}async getAllUsers(){try{return(await Re.getUsers()).map(e=>({...e,role:e.isAdmin?"admin":"user"}))}catch(e){throw console.error("Failed to fetch users from Firebase:",e),e}}async updateUser(e,t){try{const n={...t,isAdmin:t.role==="admin"};delete n.role,console.log("🔥 AuthService: Updating user via Firebase:",e,n);const r=await Re.updateUser(e,n);return console.log("🔥 AuthService: User updated successfully via Firebase:",r),r}catch(n){throw new Error(n instanceof Error?n.message:"Failed to update user")}}async deleteUser(e){try{console.log("🔥 AuthService: Deleting user via Firebase:",e),await Re.deleteUser(e),console.log("🔥 AuthService: User deleted successfully from Firebase")}catch(t){throw console.error("🔥 AuthService: Failed to delete user:",t),new Error(t instanceof Error?t.message:"Failed to delete user from Firebase")}}generateToken(){return`token_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}isAdmin(e){return(e==null?void 0:e.role)==="admin"}}console.log("🚀🚀🚀 NUCLEAR VERSION v5.0.0-ISACTIVE-BLOCK 🚀🚀🚀");console.log("🚀 MAIN.TS LOADED SUCCESSFULLY");console.log("🚀 Date:",new Date().toISOString());document.title="Splitwise Clone v5.0.0-NUCLEAR";console.log("=== FIREBASE ONLY MODE - NUCLEAR ISACTIVE CHECK ===");console.log("🔥 Build timestamp:",new Date().toISOString());window.NUCLEAR_VERSION="v5.0.0-ISACTIVE-BLOCK";console.log("🔥 Version: v3.0.0-apiservice-disabled");console.log("🔥 Force new build hash:",Math.random());console.log("All data stored in Firestore");console.log("============================");class Pw{constructor(){K(this,"users",[]),K(this,"expenses",[]),K(this,"currentUser",null),K(this,"addExpenseModal"),K(this,"authService"),K(this,"firebaseService",Re),K(this,"currentFilter",""),this.authService=new Ow;const e=this.authService.getCurrentAuth();e.isAuthenticated&&e.currentUser&&(this.currentUser=e.currentUser,this.initializeData()),this.addExpenseModal=new ai(this.users,this.currentUser,t=>this.addExpense(t)),this.render(),this.setupEventListeners(),window.deleteExpense=t=>this.deleteExpense(t),window.editUser=t=>this.editUser(t)}async initializeData(){try{this.users=await this.authService.getAllUsers(),this.users=this.users.filter(e=>e.isActive),this.expenses=await this.loadExpenses()}catch(e){throw console.error("Failed to initialize data:",e),e}}async loadExpenses(){try{return await Re.getExpenses()}catch(e){throw console.error("Failed to load expenses from Firebase:",e),e}}render(){const e=document.getElementById("app");if(!this.currentUser){e.innerHTML=this.renderLoginScreen();return}e.innerHTML=`
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
                <!-- DEBUG: Test Firebase Button -->
                <button id="testFirebaseBtn" class="bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-700">
                  🔥 Test Firebase
                </button>

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
    `}renderStatsCards(){if(!this.currentUser)return"";const e=this.expenses.reduce((o,a)=>o+a.amount,0),t=this.expenses.filter(o=>o.paidBy===this.currentUser.id).reduce((o,a)=>o+a.amount,0),n=oi(this.expenses,this.users)[this.currentUser.id],r=n?n.totalOwed-n.totalOwes:0;return`
      <div class="card text-center">
        <div class="text-2xl mb-2">💰</div>
        <div class="text-2xl font-bold text-gray-800">${oe(e)}</div>
        <div class="text-sm text-gray-600">Tổng chi phí</div>
      </div>
      
      <div class="card text-center">
        <div class="text-2xl mb-2">🎯</div>
        <div class="text-2xl font-bold text-gray-800">${oe(t)}</div>
        <div class="text-sm text-gray-600">Bạn đã trả</div>
      </div>
      
      <div class="card text-center">
        <div class="text-2xl mb-2">${r>=0?"💚":"💔"}</div>
        <div class="text-2xl font-bold ${r>=0?"text-green-600":"text-red-600"}">
          ${r>=0?"+":""}${oe(r)}
        </div>
        <div class="text-sm text-gray-600">Số dư của bạn</div>
      </div>
    `}renderBalanceSection(){if(!this.currentUser)return"";const e=oi(this.expenses,this.users),t=e[this.currentUser.id];return t?new Ld(t,this.users,e).render():`
        <div class="card text-center py-8">
          <div class="text-4xl mb-4">🎉</div>
          <h2 class="text-xl font-semibold mb-2">Chưa có giao dịch nào</h2>
          <p class="text-gray-500">Thêm chi phí đầu tiên để bắt đầu!</p>
        </div>
      `}renderSettlementSection(){const e=oi(this.expenses,this.users);return new Od(this.users,e).render()}renderExpensesList(){const e=this.getFilteredExpenses();return e.length===0?`
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
      `:e.map(t=>new Rd(t,this.users,this.currentUser,()=>this.deleteExpense(t.id)).render()).join("")}getFilteredExpenses(){return this.currentFilter?this.expenses.filter(e=>e.category===this.currentFilter):this.expenses}setupEventListeners(){var e,t,n,r,o,a,l;(e=document.getElementById("showLoginBtn"))==null||e.addEventListener("click",()=>{this.showLoginModal()}),(t=document.getElementById("logoutBtn"))==null||t.addEventListener("click",()=>{this.logout()}),(n=document.getElementById("userManagementBtn"))==null||n.addEventListener("click",()=>{this.showUserManagementModal()}),(r=document.getElementById("testFirebaseBtn"))==null||r.addEventListener("click",async()=>{console.log("🔥🔥🔥 TEST FIREBASE BUTTON CLICKED!"),alert("🔥 Testing Firebase connection...");try{console.log("🔥 Testing direct Firebase call...");const u={id:`test_${Date.now()}`,from:"test-user-1",to:"test-user-2",amount:5e4,isSettled:!0,createdAt:new Date,settledAt:new Date};console.log("🔥 Test settlement object:",u),await this.firebaseService.saveSettlement(u),alert("✅ Firebase test successful! Check console for details."),console.log("✅ Firebase test completed successfully")}catch(u){console.error("❌ Firebase test failed:",u),alert("❌ Firebase test failed: "+(u instanceof Error?u.message:u))}}),(o=document.getElementById("addExpenseBtn"))==null||o.addEventListener("click",()=>{this.addExpenseModal.show()}),(a=document.getElementById("filterCategory"))==null||a.addEventListener("change",u=>{this.currentFilter=u.target.value,this.updateExpensesList(),this.updateFilterControls()}),(l=document.getElementById("clearFilter"))==null||l.addEventListener("click",()=>{this.currentFilter="";const u=document.getElementById("filterCategory");u&&(u.value=""),this.updateExpensesList(),this.updateFilterControls()})}async addExpense(e){try{console.log("🔥🔥🔥 Main.ts: addExpense called with:",e),console.log("🔥 Main.ts: Calling firebaseService.createExpense...");const t=await Re.createExpense(e);console.log("🔥 Main.ts: Firebase returned:",t),this.expenses.unshift(t),this.updateAll(),console.log("🔥 Main.ts: Expense added successfully")}catch(t){throw console.error("❌ Failed to add expense to Firebase:",t),alert("❌ Lỗi khi lưu expense: "+(t instanceof Error?t.message:t)),t}}async deleteExpense(e){if(!this.currentUser||this.currentUser.role!=="admin"){alert("⚠️ Chỉ admin mới có thể xóa chi phí!");return}if(confirm("🗑️ Bạn có chắc chắn muốn xóa chi phí này không?"))try{await Re.deleteExpense(e),this.expenses=this.expenses.filter(t=>t.id!==e),this.updateAll()}catch(t){console.error("Failed to delete expense from Firebase:",t),alert("❌ Không thể xóa chi phí. Vui lòng thử lại!")}}showLoginModal(){const e=new Pd(async t=>{var n,r,o;try{const a=await this.authService.login(t);if(console.log("🔥🔥🔥 MAIN.TS FINAL CHECK 🔥🔥🔥"),console.log("🔥 Main.ts: authState.currentUser?.isActive:",(n=a.currentUser)==null?void 0:n.isActive),((r=a.currentUser)==null?void 0:r.isActive)!==!0)throw console.error("🚫🚫🚫 MAIN.TS FINAL BLOCK 🚫🚫🚫"),alert("🚫 MAIN.TS BLOCK: User not active"),new Error("User not active in main.ts check");this.currentUser=a.currentUser,await this.initializeData(),this.addExpenseModal=new ai(this.users,this.currentUser,l=>this.addExpense(l)),this.render(),this.setupEventListeners(),(o=document.getElementById("login-modal"))==null||o.remove()}catch(a){throw a}},()=>{var t;(t=document.getElementById("login-modal"))==null||t.remove()});document.body.insertAdjacentHTML("beforeend",e.render()),e.setupEventListeners()}logout(){confirm("🚪 Bạn có chắc chắn muốn đăng xuất không?")&&(this.authService.logout(),this.currentUser=null,this.users=[],this.expenses=[],this.render(),this.setupEventListeners())}async showUserManagementModal(){const e=await this.authService.getAllUsers(),t=new Ha(e,async n=>await this.authService.createUser(n),async(n,r)=>{await this.authService.updateUser(n,{isActive:r}),await this.initializeData(),this.addExpenseModal=new ai(this.users,this.currentUser,o=>this.addExpense(o))},()=>{var n;(n=document.getElementById("user-management-modal"))==null||n.remove()},this.authService);document.body.insertAdjacentHTML("beforeend",t.render()),t.setupEventListeners()}async editUser(e){if(document.querySelector("#user-management-modal")){const t=await this.authService.getAllUsers();new Ha(t,async n=>await this.authService.createUser(n),async(n,r)=>{await this.authService.updateUser(n,{isActive:r})},()=>{},this.authService).editUser(e)}}updateAll(){this.updateBalanceSection(),this.updateSettlementSection(),this.updateExpensesList(),this.updateStatsCards()}updateBalanceSection(){const e=document.getElementById("balanceSection");e&&(e.innerHTML=this.renderBalanceSection())}updateSettlementSection(){const e=document.getElementById("settlementSection");e&&(e.innerHTML=this.renderSettlementSection())}updateExpensesList(){const e=document.getElementById("expensesList");e&&(e.innerHTML=this.renderExpensesList())}updateStatsCards(){const e=document.querySelector(".grid.grid-cols-1.md\\:grid-cols-3");e&&(e.innerHTML=this.renderStatsCards())}updateFilterControls(){const e=document.getElementById("clearFilter");e&&(this.currentFilter?e.classList.remove("hidden"):e.classList.add("hidden"))}}new Pw;
