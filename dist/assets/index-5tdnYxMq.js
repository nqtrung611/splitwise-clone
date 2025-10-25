(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var Sd=Object.defineProperty,Id=(s,e,t)=>e in s?Sd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,K=(s,e,t)=>Id(s,typeof e!="symbol"?e+"":e,t);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();function sr(s,e){const t={};return e.forEach(n=>{t[n.id]={userId:n.id,owes:{},owedBy:{},totalOwes:0,totalOwed:0}}),s.forEach(n=>{const i=n.paidBy;n.splitBetween.forEach(a=>{const o=a.userId;let u;n.splitType==="equal"?u=n.amount/n.splitBetween.length:u=a.amount||0,o!==i&&(t[o].owes[i]||(t[o].owes[i]=0),t[i].owedBy[o]||(t[i].owedBy[o]=0),t[o].owes[i]+=u,t[i].owedBy[o]+=u)})}),Object.values(t).forEach(n=>{n.totalOwes=Object.values(n.owes).reduce((i,a)=>i+a,0),n.totalOwed=Object.values(n.owedBy).reduce((i,a)=>i+a,0)}),e.forEach(n=>{e.forEach(i=>{if(n.id!==i.id){const a=t[n.id].owes[i.id]||0,o=t[i.id].owes[n.id]||0;if(a>0&&o>0){const u=a-o;u>0?(t[n.id].owes[i.id]=u,t[i.id].owedBy[n.id]=u,delete t[i.id].owes[n.id],delete t[n.id].owedBy[i.id]):u<0?(t[i.id].owes[n.id]=Math.abs(u),t[n.id].owedBy[i.id]=Math.abs(u),delete t[n.id].owes[i.id],delete t[i.id].owedBy[n.id]):(delete t[n.id].owes[i.id],delete t[i.id].owes[n.id],delete t[n.id].owedBy[i.id],delete t[i.id].owedBy[n.id])}}})}),Object.values(t).forEach(n=>{n.totalOwes=Object.values(n.owes).reduce((i,a)=>i+a,0),n.totalOwed=Object.values(n.owedBy).reduce((i,a)=>i+a,0)}),t}function ie(s){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0,maximumFractionDigits:0}).format(s)}function _d(){return Math.random().toString(36).substr(2,9)}function Ad(s){const e=[];if((!s.description||s.description.trim().length===0)&&e.push("Mô tả chi phí không được để trống"),(!s.amount||s.amount<=0)&&e.push("Số tiền phải lớn hơn 0"),s.paidBy||e.push("Vui lòng chọn người trả tiền"),(!s.splitBetween||s.splitBetween.length===0)&&e.push("Vui lòng chọn ít nhất một người để chia chi phí"),s.category||e.push("Vui lòng chọn danh mục chi phí"),s.splitType==="custom"&&s.splitBetween){const t=s.splitBetween.reduce((n,i)=>n+(i.amount||0),0);Math.abs(t-(s.amount||0))>1&&e.push("Tổng số tiền chia phải bằng tổng chi phí")}return e}function wu(s){const e=[],t=Object.values(s).map(u=>({userId:u.userId,netAmount:u.totalOwed-u.totalOwes})),n=t.filter(u=>u.netAmount>0).sort((u,l)=>l.netAmount-u.netAmount),i=t.filter(u=>u.netAmount<0).sort((u,l)=>u.netAmount-l.netAmount);let a=0,o=0;for(;a<n.length&&o<i.length;){const u=n[a],l=i[o],d=Math.min(u.netAmount,Math.abs(l.netAmount));d>0&&e.push({from:l.userId,to:u.userId,amount:d}),u.netAmount-=d,l.netAmount+=d,u.netAmount===0&&a++,l.netAmount===0&&o++}return e}class Cd{constructor(e,t,n,i){K(this,"expense"),K(this,"users"),K(this,"currentUser"),K(this,"onDelete"),this.expense=e,this.users=t,this.currentUser=n,this.onDelete=i}render(){var e,t,n;const i=this.users.find(u=>u.id===this.expense.paidBy),a=((e=this.currentUser)==null?void 0:e.id)||"",o=this.expense.splitBetween.some(u=>u.userId===a)||this.expense.paidBy===a;return`
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
                <span class="font-medium">${i==null?void 0:i.name}</span> đã trả 
                <span class="font-semibold text-gray-900">${ie(this.expense.amount)}</span>
              </p>
              
              <p class="text-xs text-gray-500">
                📅 ${this.expense.date.toLocaleDateString("vi-VN",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}
              </p>
              
              <div class="flex items-center space-x-2 text-xs text-gray-500">
                <span>👥 Chia cho ${this.expense.splitBetween.length} người</span>
                ${this.expense.splitType==="equal"?`
                  <span>•</span>
                  <span>${ie(this.expense.amount/this.expense.splitBetween.length)}/người</span>
                `:""}
              </div>
              
              <div class="mt-2">
                <details class="text-xs text-gray-500">
                  <summary class="cursor-pointer hover:text-gray-700">Chi tiết chia tiền</summary>
                  <div class="mt-2 pl-4 space-y-1">
                    ${this.expense.splitBetween.map(u=>{const l=this.users.find(d=>d.id===u.userId);return`
                        <div class="flex justify-between">
                          <span>${l==null?void 0:l.name}</span>
                          <span>${ie(u.amount||0)}</span>
                        </div>
                      `}).join("")}
                  </div>
                </details>
              </div>
            </div>
          </div>
          
          <div class="text-right ml-4">
            <div class="font-bold text-xl text-gray-900 mb-1">
              ${ie(this.expense.amount)}
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
    `}renderUserInvolvement(){var e;const t=((e=this.currentUser)==null?void 0:e.id)||"",n=this.expense.splitBetween.find(u=>u.userId===t),i=(n==null?void 0:n.amount)||0,a=this.expense.paidBy===t,o=!!n;if(a&&o){const u=this.expense.amount-i;return`
        <div class="text-sm space-y-1">
          <div class="text-splitwise-green font-medium">
            💰 Bạn được nợ ${ie(u)}
          </div>
          <div class="text-xs text-gray-500">
            (Trả ${ie(this.expense.amount)} - Nợ ${ie(i)})
          </div>
        </div>
      `}else{if(a)return`
        <div class="text-sm text-splitwise-green font-medium">
          💰 Bạn được nợ ${ie(this.expense.amount)}
        </div>
      `;if(o)return`
        <div class="text-sm text-splitwise-red font-medium">
          💳 Bạn nợ ${ie(i)}
        </div>
      `}return""}getCategoryName(e){return{food:"🍽️ Ăn uống",transportation:"🚗 Di chuyển",accommodation:"🏠 Lưu trú",entertainment:"🎉 Giải trí",shopping:"🛍️ Mua sắm",utilities:"⚡ Tiện ích",other:"📦 Khác"}[e]||"📦 Khác"}}class xd{constructor(e,t,n){K(this,"balance"),K(this,"users"),K(this,"allBalances"),this.balance=e,this.users=t,this.allBalances=n}render(){const e=this.balance.totalOwed,t=this.balance.totalOwes,n=e-t;return`
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
          <span class="font-bold text-green-700 text-lg">+${ie(e)}</span>
        </div>
        
        <div class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
          <span class="text-red-700 font-medium">💔 Bạn nợ:</span>
          <span class="font-bold text-red-700 text-lg">-${ie(t)}</span>
        </div>
        
        <div class="flex justify-between items-center p-4 ${n>=0?"bg-green-100":"bg-red-100"} rounded-lg border-2 ${n>=0?"border-green-300":"border-red-300"}">
          <span class="font-bold ${n>=0?"text-green-800":"text-red-800"}">
            ${n>=0?"🎯":"⚠️"} Tổng cộng:
          </span>
          <span class="font-bold text-xl ${n>=0?"text-green-800":"text-red-800"}">
            ${n>=0?"+":""}${ie(n)}
          </span>
        </div>
      </div>
    `}renderDetailedBalances(){let e='<div class="space-y-3 mb-6">';const t=Object.entries(this.balance.owedBy).filter(([i,a])=>a>0);t.length>0&&(e+='<h3 class="font-semibold text-green-700 text-sm mb-2">💚 Ai nợ bạn:</h3>',t.forEach(([i,a])=>{const o=this.users.find(u=>u.id===i);e+=`
          <div class="flex justify-between items-center p-2 bg-green-50 rounded text-sm">
            <div class="flex items-center space-x-2">
              <span class="text-green-700">${o==null?void 0:o.name}</span>
            </div>
            <span class="font-semibold text-green-700">+${ie(a)}</span>
          </div>
        `}));const n=Object.entries(this.balance.owes).filter(([i,a])=>a>0);return n.length>0&&(e+='<h3 class="font-semibold text-red-700 text-sm mb-2 mt-4">💔 Bạn nợ ai:</h3>',n.forEach(([i,a])=>{const o=this.users.find(u=>u.id===i);e+=`
          <div class="flex justify-between items-center p-2 bg-red-50 rounded text-sm">
            <div class="flex items-center space-x-2">
              <span class="text-red-700">${o==null?void 0:o.name}</span>
            </div>
            <span class="font-semibold text-red-700">-${ie(a)}</span>
          </div>
        `})),e+="</div>",e}renderSettlementSuggestions(){const e=wu(this.allBalances).filter(n=>n.from===this.balance.userId||n.to===this.balance.userId);if(e.length===0)return"";let t=`
      <div class="border-t pt-4">
        <h3 class="font-semibold text-gray-700 text-sm mb-3 flex items-center">
          🔄 Gợi ý thanh toán
        </h3>
        <div class="space-y-2">
    `;return e.forEach(n=>{const i=this.users.find(o=>o.id===n.from),a=this.users.find(o=>o.id===n.to);n.from===this.balance.userId?t+=`
          <div class="flex items-center justify-between p-3 bg-orange-50 rounded-lg text-sm">
            <span class="text-orange-700">
              💸 Chuyển cho <strong>${a==null?void 0:a.name}</strong>
            </span>
            <span class="font-bold text-orange-700">${ie(n.amount)}</span>
          </div>
        `:t+=`
          <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg text-sm">
            <span class="text-blue-700">
              💰 Nhận từ <strong>${i==null?void 0:i.name}</strong>
            </span>
            <span class="font-bold text-blue-700">${ie(n.amount)}</span>
          </div>
        `}),t+=`
        </div>
        <p class="text-xs text-gray-500 mt-2">
          💡 Đây là cách tối ưu để thanh toán tất cả các khoản nợ
        </p>
      </div>
    `,t}}class ir{constructor(e,t,n){K(this,"users"),K(this,"currentUser"),K(this,"onAddExpense"),this.users=e,this.currentUser=t,this.onAddExpense=n}show(){this.render();const e=document.getElementById("addExpenseModal");if(e){e.classList.remove("hidden"),e.classList.add("flex");const t=e.querySelector('input[type="text"]');t&&t.focus()}}hide(){const e=document.getElementById("addExpenseModal");e&&(e.classList.add("hidden"),e.classList.remove("flex")),this.resetForm()}render(){return`
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
    `}setupEventListeners(){var e,t,n;(e=document.getElementById("closeModal"))==null||e.addEventListener("click",()=>this.hide()),(t=document.getElementById("cancelBtn"))==null||t.addEventListener("click",()=>this.hide()),(n=document.getElementById("addExpenseForm"))==null||n.addEventListener("submit",p=>{p.preventDefault(),this.handleSubmit()}),document.querySelectorAll('input[name="splitType"]').forEach(p=>{p.addEventListener("change",m=>{const I=m.target.value;this.toggleSplitMode(I),this.updatePreview()})});const i=document.getElementById("expenseAmount"),a=document.querySelectorAll(".splitBetween"),o=document.querySelectorAll(".customSplitAmount"),u=document.querySelectorAll(".customSplitUser"),l=()=>this.updatePreview();i==null||i.addEventListener("input",l),a.forEach(p=>p.addEventListener("change",l)),o.forEach(p=>p.addEventListener("input",l)),u.forEach(p=>p.addEventListener("change",l));const d=p=>{p.key==="Escape"&&(this.hide(),document.removeEventListener("keydown",d))};document.addEventListener("keydown",d),this.addSelectAllControls()}toggleSplitMode(e){const t=document.getElementById("equalSplitContainer"),n=document.getElementById("customSplitContainer");e==="equal"?(t==null||t.classList.remove("hidden"),n==null||n.classList.add("hidden")):(t==null||t.classList.add("hidden"),n==null||n.classList.remove("hidden"))}addSelectAllControls(){var e,t,n;const i=document.querySelector(".space-y-2.max-h-32");if(i){const a=document.createElement("div");a.className="flex space-x-2 text-xs mb-2",a.innerHTML=`
        <button type="button" id="selectAll" class="text-blue-600 hover:text-blue-800">Chọn tất cả</button>
        <span class="text-gray-400">•</span>
        <button type="button" id="selectNone" class="text-blue-600 hover:text-blue-800">Bỏ chọn tất cả</button>
      `,(e=i.parentNode)==null||e.insertBefore(a,i),(t=document.getElementById("selectAll"))==null||t.addEventListener("click",()=>{document.querySelectorAll(".splitBetween").forEach(o=>{o.checked=!0}),this.updatePreview()}),(n=document.getElementById("selectNone"))==null||n.addEventListener("click",()=>{document.querySelectorAll(".splitBetween").forEach(o=>{o.checked=!1}),this.updatePreview()})}}updatePreview(){var e;const t=document.getElementById("expenseAmount"),n=parseFloat((t==null?void 0:t.value)||"0"),i=(e=document.querySelector('input[name="splitType"]:checked'))==null?void 0:e.value,a=document.getElementById("splitPreviewContent");if(a){if(n<=0){a.innerHTML="Nhập số tiền để xem chi tiết chia tiền";return}if(i==="equal"){const o=document.querySelectorAll(".splitBetween:checked");if(o.length===0){a.innerHTML="Chọn ít nhất một người để chia tiền";return}const u=n/o.length;let l='<div class="space-y-1">';l+=`<div class="font-medium">Tổng: ${this.formatCurrency(n)} ÷ ${o.length} người = ${this.formatCurrency(u)}/người</div>`,o.forEach(d=>{const p=d.value,m=this.users.find(I=>I.id===p);l+=`<div class="flex justify-between"><span>${m==null?void 0:m.name}</span><span>${this.formatCurrency(u)}</span></div>`}),l+="</div>",a.innerHTML=l}else{const o=document.querySelectorAll(".customSplitUser:checked");if(o.length===0){a.innerHTML="Chọn ít nhất một người để chia tiền";return}let u='<div class="space-y-1">',l=0;o.forEach(m=>{const I=m.value,x=this.users.find(R=>R.id===I),N=document.querySelector(`input[data-user-id="${I}"]`),L=parseFloat((N==null?void 0:N.value)||"0");l+=L,u+=`<div class="flex justify-between"><span>${x==null?void 0:x.name}</span><span>${this.formatCurrency(L)}</span></div>`});const d=n-l;u+='<div class="border-t pt-1 mt-1">',u+=`<div class="flex justify-between font-medium"><span>Tổng đã chia:</span><span>${this.formatCurrency(l)}</span></div>`,u+=`<div class="flex justify-between ${d===0?"text-green-600":d>0?"text-orange-600":"text-red-600"}">`,u+=`<span>Còn lại:</span><span>${this.formatCurrency(d)}</span></div>`,u+="</div></div>",a.innerHTML=u;const p=document.getElementById("customSplitTotal");p&&(p.innerHTML=`Tổng: ${this.formatCurrency(l)} (Còn lại: ${this.formatCurrency(d)})`,p.className=`text-sm pt-2 border-t ${d===0?"text-green-600":"text-orange-600"}`)}}}handleSubmit(){var e;const t=document.getElementById("expenseDescription").value,n=parseFloat(document.getElementById("expenseAmount").value),i=document.getElementById("expensePaidBy").value,a=document.getElementById("expenseCategory").value,o=(e=document.querySelector('input[name="splitType"]:checked'))==null?void 0:e.value;let u=[];if(o==="equal"){const m=document.querySelectorAll(".splitBetween:checked");if(m.length===0){alert("Vui lòng chọn ít nhất một người để chia chi phí!");return}const I=n/m.length;m.forEach(x=>{u.push({userId:x.value,amount:I})})}else{const m=document.querySelectorAll(".customSplitUser:checked");if(m.length===0){alert("Vui lòng chọn ít nhất một người để chia chi phí!");return}let I=0;if(m.forEach(x=>{var N;const L=x.value,R=document.querySelector(`input[data-user-id="${L}"]`),B=parseFloat((R==null?void 0:R.value)||"0");if(B<=0){alert(`Vui lòng nhập số tiền cho ${(N=this.users.find(G=>G.id===L))==null?void 0:N.name}!`);return}u.push({userId:L,amount:B}),I+=B}),Math.abs(I-n)>1){alert(`Tổng số tiền chia (${this.formatCurrency(I)}) phải bằng tổng chi phí (${this.formatCurrency(n)})!`);return}}const l={description:t.trim(),amount:n,paidBy:i,category:a,splitBetween:u,splitType:o},d=Ad(l);if(d.length>0){alert(d.join(`
`));return}const p={id:_d(),description:l.description,amount:l.amount,currency:"VND",paidBy:l.paidBy,splitBetween:l.splitBetween,splitType:l.splitType,category:l.category,date:new Date};console.log("🔥🔥🔥 AddExpenseModal: Calling onAddExpense with:",p),this.onAddExpense(p),this.hide()}resetForm(){const e=document.getElementById("addExpenseForm");e&&(e.reset(),document.querySelectorAll(".splitBetween").forEach(t=>{t.checked=!0}))}formatCurrency(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",minimumFractionDigits:0,maximumFractionDigits:0}).format(e)}}class kd{constructor(e,t,n,i=[]){K(this,"users"),K(this,"allBalances"),K(this,"currentUser"),K(this,"completedSettlements"),this.users=e,this.allBalances=t,this.currentUser=n,this.completedSettlements=i}render(){const e=wu(this.allBalances);return e.length===0?`
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
          ${e.map((t,n)=>{const i=this.users.find(l=>l.id===t.from),a=this.users.find(l=>l.id===t.to),o=this.completedSettlements.some(l=>l.from===t.from&&l.to===t.to&&l.amount===t.amount),u=this.currentUser&&this.currentUser.id===t.to;return`
              <div class="p-3 ${o?"bg-gradient-to-r from-green-50 to-green-100 border-green-300":"bg-gradient-to-r from-blue-50 to-green-50"} rounded-lg border ${o?"border-green-300":"border-blue-200"}">
                ${o?`
                  <div class="flex items-center justify-center mb-2">
                    <span class="text-green-600 font-bold text-sm">✅ Đã thanh toán</span>
                  </div>
                `:""}
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ${i==null?void 0:i.name.charAt(0).toUpperCase()}
                    </div>
                    <span class="text-xl">${o?"✅":"💸"}</span>
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ${a==null?void 0:a.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div class="font-bold text-lg ${o?"text-green-600":"text-blue-600"}">
                    ${ie(t.amount)}
                  </div>
                </div>
                <div class="text-xs text-gray-600 mb-2">
                  <strong>${i==null?void 0:i.name}</strong> chuyển cho <strong>${a==null?void 0:a.name}</strong>
                </div>
                ${o?`
                  <div class="text-center">
                    <span class="text-xs text-green-600">
                      💚 Giao dịch đã hoàn tất
                    </span>
                  </div>
                `:`
                  <div class="flex items-center justify-end">
                    ${u?`
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
    `}}class Nd{constructor(e,t){K(this,"onLogin"),K(this,"onClose"),this.onLogin=e,this.onClose=t}render(){return`
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
    `}setupEventListeners(){const e=document.getElementById("login-form"),t=document.getElementById("close-login-modal"),n=document.getElementById("cancel-login"),i=document.getElementById("login-error"),a=document.getElementById("login-submit"),o=document.getElementById("login-submit-text"),u=document.getElementById("login-submit-loading");t==null||t.addEventListener("click",this.onClose),n==null||n.addEventListener("click",this.onClose);const l=d=>{d.key==="Escape"&&(this.onClose(),document.removeEventListener("keydown",l))};document.addEventListener("keydown",l),e==null||e.addEventListener("submit",async d=>{d.preventDefault();const p=new FormData(e),m={username:p.get("username"),password:p.get("password")};a.disabled=!0,o.classList.add("hidden"),u.classList.remove("hidden"),i.classList.add("hidden");try{await this.onLogin(m)}catch(I){i.textContent=I instanceof Error?I.message:"Đã có lỗi xảy ra",i.classList.remove("hidden")}finally{a.disabled=!1,o.classList.remove("hidden"),u.classList.add("hidden")}}),setTimeout(()=>{var d;(d=document.getElementById("email"))==null||d.focus()},100)}}class Bo{constructor(e,t,n,i,a){K(this,"users"),K(this,"onCreateUser"),K(this,"onUpdateUserStatus"),K(this,"onClose"),K(this,"authService"),K(this,"editUser",o=>{var u,l;const d=this.users.find(L=>L.id===o);if(!d){alert("Không tìm thấy người dùng!");return}const p=d.role==="admin",m=document.createElement("div");m.className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",m.id="edit-user-modal",m.innerHTML=`
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
    `,document.body.appendChild(m);const I=()=>{document.body.removeChild(m),document.removeEventListener("keydown",x)},x=L=>{L.key==="Escape"&&I()};(u=document.getElementById("close-edit-modal"))==null||u.addEventListener("click",I),(l=document.getElementById("cancel-edit-user"))==null||l.addEventListener("click",I),document.addEventListener("keydown",x);const N=document.getElementById("edit-user-form");N.addEventListener("submit",async L=>{L.preventDefault();const R=new FormData(N),B=R.get("name"),G=R.get("username"),Z=R.get("password"),ne=document.getElementById("edit-user-error"),le=document.getElementById("edit-user-text"),ee=document.getElementById("edit-user-loading");try{if(le==null||le.classList.add("hidden"),ee==null||ee.classList.remove("hidden"),ne==null||ne.classList.add("hidden"),p){if(!Z.trim())throw new Error("Vui lòng nhập mật khẩu mới");await this.authService.updateUser(o,{password:Z.trim()})}else{await this.authService.updateUser(o,{name:B.trim(),username:G.trim(),...Z.trim()&&{password:Z.trim()}});const g=this.users.findIndex(v=>v.id===o);g!==-1&&(this.users[g].name=B.trim(),this.users[g].username=G.trim())}const b=document.getElementById("users-list");b&&(b.innerHTML=this.renderUsersList()),alert("✅ Cập nhật thông tin thành công!"),I()}catch(b){le==null||le.classList.remove("hidden"),ee==null||ee.classList.add("hidden"),ne&&(ne.textContent=b instanceof Error?b.message:"Có lỗi xảy ra",ne.classList.remove("hidden"))}})}),this.users=e,this.onCreateUser=t,this.onUpdateUserStatus=n,this.onClose=i,this.authService=a}render(){return`
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
    `).join("")}setupEventListeners(){const e=document.getElementById("close-user-management"),t=document.getElementById("close-user-management-btn"),n=document.getElementById("create-user-form"),i=document.getElementById("create-user-error"),a=document.getElementById("create-user-success");e==null||e.addEventListener("click",this.onClose),t==null||t.addEventListener("click",this.onClose);const o=u=>{u.key==="Escape"&&(this.onClose(),document.removeEventListener("keydown",o))};document.addEventListener("keydown",o),n==null||n.addEventListener("submit",async u=>{u.preventDefault();const l=new FormData(n),d={name:l.get("name"),username:l.get("username"),password:l.get("password")},p=document.getElementById("create-user-text"),m=document.getElementById("create-user-loading");p.classList.add("hidden"),m.classList.remove("hidden"),i.classList.add("hidden"),a.classList.add("hidden");try{const I=await this.onCreateUser(d);this.users.push(I);const x=document.getElementById("users-list");x&&(x.innerHTML=this.renderUsersList()),n.reset(),a.textContent=`Tạo thành công người dùng: ${I.name}`,a.classList.remove("hidden")}catch(I){i.textContent=I instanceof Error?I.message:"Đã có lỗi xảy ra",i.classList.remove("hidden")}finally{p.classList.remove("hidden"),m.classList.add("hidden")}}),window.toggleUserStatus=async(u,l)=>{try{await this.onUpdateUserStatus(u,l);const d=this.users.findIndex(m=>m.id===u);d!==-1&&(this.users[d].isActive=l);const p=document.getElementById("users-list");p&&(p.innerHTML=this.renderUsersList())}catch(d){alert("Lỗi: "+(d instanceof Error?d.message:"Không thể cập nhật trạng thái"))}}}}const Dd=()=>{};var $o={};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const bu=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let i=s.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Rd=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const i=s[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const a=s[t++];e[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=s[t++],o=s[t++],u=s[t++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const a=s[t++],o=s[t++];e[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return e.join("")},Eu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<s.length;i+=3){const a=s[i],o=i+1<s.length,u=o?s[i+1]:0,l=i+2<s.length,d=l?s[i+2]:0,p=a>>2,m=(a&3)<<4|u>>4;let I=(u&15)<<2|d>>6,x=d&63;l||(x=64,o||(I=64)),n.push(t[p],t[m],t[I],t[x])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(bu(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Rd(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<s.length;){const a=t[s.charAt(i++)],o=i<s.length?t[s.charAt(i)]:0;++i;const u=i<s.length?t[s.charAt(i)]:64;++i;const l=i<s.length?t[s.charAt(i)]:64;if(++i,a==null||o==null||u==null||l==null)throw new Ld;const d=a<<2|o>>4;if(n.push(d),u!==64){const p=o<<4&240|u>>2;if(n.push(p),l!==64){const m=u<<6&192|l;n.push(m)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Ld extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Od=function(s){const e=bu(s);return Eu.encodeByteArray(e,!0)},Ws=function(s){return Od(s).replace(/\./g,"")},Tu=function(s){try{return Eu.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
*/function Pd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const Md=()=>Pd().__FIREBASE_DEFAULTS__,Ud=()=>{if(typeof process>"u"||typeof $o>"u")return;const s=$o.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Fd=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Tu(s[1]);return e&&JSON.parse(e)},fi=()=>{try{return Dd()||Md()||Ud()||Fd()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Su=s=>{var e,t;return(t=(e=fi())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},Vd=s=>{const e=Su(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Iu=()=>{var s;return(s=fi())==null?void 0:s.config},_u=s=>{var e;return(e=fi())==null?void 0:e[`_${s}`]};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Bd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
*/function pn(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Au(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
*/function $d(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=s.iat||0,a=s.sub||s.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Ws(JSON.stringify(t)),Ws(JSON.stringify(o)),""].join(".")}const zn={};function jd(){const s={prod:[],emulator:[]};for(const e of Object.keys(zn))zn[e]?s.emulator.push(e):s.prod.push(e);return s}function qd(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let jo=!1;function Cu(s,e){if(typeof window>"u"||typeof document>"u"||!pn(window.location.host)||zn[s]===e||zn[s]||jo)return;zn[s]=e;function t(m){return`__firebase__banner__${m}`}const n="__firebase__banner",i=jd().prod.length>0;function a(){const m=document.getElementById(n);m&&m.remove()}function o(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,I){m.setAttribute("width","24"),m.setAttribute("id",I),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function l(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{jo=!0,a()},m}function d(m,I){m.setAttribute("id",I),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=qd(n),I=t("text"),x=document.getElementById(I)||document.createElement("span"),N=t("learnmore"),L=document.getElementById(N)||document.createElement("a"),R=t("preprendIcon"),B=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const G=m.element;o(G),d(L,N);const Z=l();u(B,R),G.append(B,x,L,Z),document.body.appendChild(G)}i?(x.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function Hd(){var s;const e=(s=fi())==null?void 0:s.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kd(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Wd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qd(){const s=Te();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Xd(){return!Hd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jd(){try{return typeof indexedDB=="object"}catch{return!1}}function Yd(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var a;e(((a=i.error)==null?void 0:a.message)||"")}}catch(t){e(t)}})}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Zd="FirebaseError";class nt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Zd,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rs.prototype.create)}}class rs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],o=a?ef(a,n):"Error",u=`${this.serviceName}: ${o} (${i}).`;return new nt(i,u,n)}}function ef(s,e){return s.replace(tf,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const tf=/\{\$([^}]+)}/g;function nf(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Ut(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const a=s[i],o=e[i];if(qo(a)&&qo(o)){if(!Ut(a,o))return!1}else if(a!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function qo(s){return s!==null&&typeof s=="object"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function as(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function sf(s,e){const t=new rf(s,e);return t.subscribe.bind(t)}class rf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");af(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=rr),i.error===void 0&&(i.error=rr),i.complete===void 0&&(i.complete=rr);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function af(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function rr(){}/**
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
*/class of{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Bd;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uf(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});n.resolve(a)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[a,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);n===u&&o.resolve(i)}return i}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const a=this.instances.get(n);return a&&e(a,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:cf(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cf(s){return s===Lt?void 0:s}function uf(s){return s.instantiationMode==="EAGER"}/**
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
*/class lf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new of(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(j||(j={}));const hf={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},df=j.INFO,ff={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},pf=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),i=ff[e];if(i)console[i](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zr{constructor(e){this.name=e,this._logLevel=df,this._logHandler=pf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const mf=(s,e)=>e.some(t=>s instanceof t);let zo,Ho;function gf(){return zo||(zo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yf(){return Ho||(Ho=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xu=new WeakMap,vr=new WeakMap,ku=new WeakMap,ar=new WeakMap,Hr=new WeakMap;function vf(s){const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("success",a),s.removeEventListener("error",o)},a=()=>{t(mt(s.result)),i()},o=()=>{n(s.error),i()};s.addEventListener("success",a),s.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&xu.set(t,s)}).catch(()=>{}),Hr.set(e,s),e}function wf(s){if(vr.has(s))return;const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("complete",a),s.removeEventListener("error",o),s.removeEventListener("abort",o)},a=()=>{t(),i()},o=()=>{n(s.error||new DOMException("AbortError","AbortError")),i()};s.addEventListener("complete",a),s.addEventListener("error",o),s.addEventListener("abort",o)});vr.set(s,e)}let wr={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return vr.get(s);if(e==="objectStoreNames")return s.objectStoreNames||ku.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function bf(s){wr=s(wr)}function Ef(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(or(this),e,...t);return ku.set(n,e.sort?e.sort():[e]),mt(n)}:yf().includes(s)?function(...e){return s.apply(or(this),e),mt(xu.get(this))}:function(...e){return mt(s.apply(or(this),e))}}function Tf(s){return typeof s=="function"?Ef(s):(s instanceof IDBTransaction&&wf(s),mf(s,gf())?new Proxy(s,wr):s)}function mt(s){if(s instanceof IDBRequest)return vf(s);if(ar.has(s))return ar.get(s);const e=Tf(s);return e!==s&&(ar.set(s,e),Hr.set(e,s)),e}const or=s=>Hr.get(s);function Sf(s,e,{blocked:t,upgrade:n,blocking:i,terminated:a}={}){const o=indexedDB.open(s,e),u=mt(o);return n&&o.addEventListener("upgradeneeded",l=>{n(mt(o.result),l.oldVersion,l.newVersion,mt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const If=["get","getKey","getAll","getAllKeys","count"],_f=["put","add","delete","clear"],cr=new Map;function Go(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(cr.get(e))return cr.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=_f.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||If.includes(t)))return;const a=async function(o,...u){const l=this.transaction(o,i?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&l.done]))[0]};return cr.set(e,a),a}bf(s=>({...s,get:(e,t,n)=>Go(e,t)||s.get(e,t,n),has:(e,t)=>!!Go(e,t)||s.has(e,t)}));/**
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
*/class Af{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Cf(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(" ")}}function Cf(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const br="@firebase/app",Ko="0.14.4";/**
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
*/const Xe=new zr("@firebase/app"),xf="@firebase/app-compat",kf="@firebase/analytics-compat",Nf="@firebase/analytics",Df="@firebase/app-check-compat",Rf="@firebase/app-check",Lf="@firebase/auth",Of="@firebase/auth-compat",Pf="@firebase/database",Mf="@firebase/data-connect",Uf="@firebase/database-compat",Ff="@firebase/functions",Vf="@firebase/functions-compat",Bf="@firebase/installations",$f="@firebase/installations-compat",jf="@firebase/messaging",qf="@firebase/messaging-compat",zf="@firebase/performance",Hf="@firebase/performance-compat",Gf="@firebase/remote-config",Kf="@firebase/remote-config-compat",Wf="@firebase/storage",Qf="@firebase/storage-compat",Xf="@firebase/firestore",Jf="@firebase/ai",Yf="@firebase/firestore-compat",Zf="firebase",ep="12.4.0";/**
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
*/const Er="[DEFAULT]",tp={[br]:"fire-core",[xf]:"fire-core-compat",[Nf]:"fire-analytics",[kf]:"fire-analytics-compat",[Rf]:"fire-app-check",[Df]:"fire-app-check-compat",[Lf]:"fire-auth",[Of]:"fire-auth-compat",[Pf]:"fire-rtdb",[Mf]:"fire-data-connect",[Uf]:"fire-rtdb-compat",[Ff]:"fire-fn",[Vf]:"fire-fn-compat",[Bf]:"fire-iid",[$f]:"fire-iid-compat",[jf]:"fire-fcm",[qf]:"fire-fcm-compat",[zf]:"fire-perf",[Hf]:"fire-perf-compat",[Gf]:"fire-rc",[Kf]:"fire-rc-compat",[Wf]:"fire-gcs",[Qf]:"fire-gcs-compat",[Xf]:"fire-fst",[Yf]:"fire-fst-compat",[Jf]:"fire-vertex","fire-js":"fire-js",[Zf]:"fire-js-all"};/**
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
*/const Qs=new Map,np=new Map,Tr=new Map;function Wo(s,e){try{s.container.addComponent(e)}catch(t){Xe.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function an(s){const e=s.name;if(Tr.has(e))return Xe.debug(`There were multiple attempts to register component ${e}.`),!1;Tr.set(e,s);for(const t of Qs.values())Wo(t,s);for(const t of np.values())Wo(t,s);return!0}function Gr(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Ve(s){return s==null?!1:s.settings!==void 0}/**
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
*/const sp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gt=new rs("app","Firebase",sp);/**
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
*/class ip{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
*/const mn=ep;function Nu(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:Er,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(t||(t=Iu()),!t)throw gt.create("no-options");const a=Qs.get(i);if(a){if(Ut(t,a.options)&&Ut(n,a.config))return a;throw gt.create("duplicate-app",{appName:i})}const o=new lf(i);for(const l of Tr.values())o.addComponent(l);const u=new ip(t,n,o);return Qs.set(i,u),u}function Du(s=Er){const e=Qs.get(s);if(!e&&s===Er&&Iu())return Nu();if(!e)throw gt.create("no-app",{appName:s});return e}function yt(s,e,t){let n=tp[s]??s;t&&(n+=`-${t}`);const i=n.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const o=[`Unable to register library "${n}" with version "${e}":`];i&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xe.warn(o.join(" "));return}an(new Ft(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
*/const rp="firebase-heartbeat-database",ap=1,Xn="firebase-heartbeat-store";let ur=null;function Ru(){return ur||(ur=Sf(rp,ap,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Xn)}catch(t){console.warn(t)}}}}).catch(s=>{throw gt.create("idb-open",{originalErrorMessage:s.message})})),ur}async function op(s){try{const e=(await Ru()).transaction(Xn),t=await e.objectStore(Xn).get(Lu(s));return await e.done,t}catch(e){if(e instanceof nt)Xe.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xe.warn(t.message)}}}async function Qo(s,e){try{const t=(await Ru()).transaction(Xn,"readwrite");await t.objectStore(Xn).put(e,Lu(s)),await t.done}catch(t){if(t instanceof nt)Xe.warn(t.message);else{const n=gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xe.warn(n.message)}}}function Lu(s){return`${s.name}!${s.options.appId}`}/**
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
*/const cp=1024,up=30;class lp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dp(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xo();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>up){const a=fp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Xe.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xo(),{heartbeatsToSend:n,unsentEntries:i}=hp(this._heartbeatsCache.heartbeats),a=Ws(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Xe.warn(t),""}}}function Xo(){return new Date().toISOString().substring(0,10)}function hp(s,e=cp){const t=[];let n=s.slice();for(const i of s){const a=t.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),Jo(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Jo(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class dp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jd()?Yd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await op(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Qo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Qo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}}function Jo(s){return Ws(JSON.stringify({version:2,heartbeats:s})).length}function fp(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
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
*/function pp(s){an(new Ft("platform-logger",e=>new Af(e),"PRIVATE")),an(new Ft("heartbeat",e=>new lp(e),"PRIVATE")),yt(br,Ko,s),yt(br,Ko,"esm2020"),yt("fire-js","")}pp("");var Yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vt,Ou;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function v(){}v.prototype=g.prototype,b.F=g.prototype,b.prototype=new v,b.prototype.constructor=b,b.D=function(E,w,S){for(var y=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)y[Ae-2]=arguments[Ae];return g.prototype[w].apply(E,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,g,v){v||(v=0);const E=Array(16);if(typeof g=="string")for(var w=0;w<16;++w)E[w]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(w=0;w<16;++w)E[w]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=b.g[0],v=b.g[1],w=b.g[2];let S=b.g[3],y;y=g+(S^v&(w^S))+E[0]+3614090360&4294967295,g=v+(y<<7&4294967295|y>>>25),y=S+(w^g&(v^w))+E[1]+3905402710&4294967295,S=g+(y<<12&4294967295|y>>>20),y=w+(v^S&(g^v))+E[2]+606105819&4294967295,w=S+(y<<17&4294967295|y>>>15),y=v+(g^w&(S^g))+E[3]+3250441966&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(S^v&(w^S))+E[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=S+(w^g&(v^w))+E[5]+1200080426&4294967295,S=g+(y<<12&4294967295|y>>>20),y=w+(v^S&(g^v))+E[6]+2821735955&4294967295,w=S+(y<<17&4294967295|y>>>15),y=v+(g^w&(S^g))+E[7]+4249261313&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(S^v&(w^S))+E[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=S+(w^g&(v^w))+E[9]+2336552879&4294967295,S=g+(y<<12&4294967295|y>>>20),y=w+(v^S&(g^v))+E[10]+4294925233&4294967295,w=S+(y<<17&4294967295|y>>>15),y=v+(g^w&(S^g))+E[11]+2304563134&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(S^v&(w^S))+E[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=S+(w^g&(v^w))+E[13]+4254626195&4294967295,S=g+(y<<12&4294967295|y>>>20),y=w+(v^S&(g^v))+E[14]+2792965006&4294967295,w=S+(y<<17&4294967295|y>>>15),y=v+(g^w&(S^g))+E[15]+1236535329&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(w^S&(v^w))+E[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=S+(v^w&(g^v))+E[6]+3225465664&4294967295,S=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(S^g))+E[11]+643717713&4294967295,w=S+(y<<14&4294967295|y>>>18),y=v+(S^g&(w^S))+E[0]+3921069994&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^S&(v^w))+E[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=S+(v^w&(g^v))+E[10]+38016083&4294967295,S=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(S^g))+E[15]+3634488961&4294967295,w=S+(y<<14&4294967295|y>>>18),y=v+(S^g&(w^S))+E[4]+3889429448&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^S&(v^w))+E[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=S+(v^w&(g^v))+E[14]+3275163606&4294967295,S=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(S^g))+E[3]+4107603335&4294967295,w=S+(y<<14&4294967295|y>>>18),y=v+(S^g&(w^S))+E[8]+1163531501&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^S&(v^w))+E[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=S+(v^w&(g^v))+E[2]+4243563512&4294967295,S=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(S^g))+E[7]+1735328473&4294967295,w=S+(y<<14&4294967295|y>>>18),y=v+(S^g&(w^S))+E[12]+2368359562&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(v^w^S)+E[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=S+(g^v^w)+E[8]+2272392833&4294967295,S=g+(y<<11&4294967295|y>>>21),y=w+(S^g^v)+E[11]+1839030562&4294967295,w=S+(y<<16&4294967295|y>>>16),y=v+(w^S^g)+E[14]+4259657740&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^S)+E[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=S+(g^v^w)+E[4]+1272893353&4294967295,S=g+(y<<11&4294967295|y>>>21),y=w+(S^g^v)+E[7]+4139469664&4294967295,w=S+(y<<16&4294967295|y>>>16),y=v+(w^S^g)+E[10]+3200236656&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^S)+E[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=S+(g^v^w)+E[0]+3936430074&4294967295,S=g+(y<<11&4294967295|y>>>21),y=w+(S^g^v)+E[3]+3572445317&4294967295,w=S+(y<<16&4294967295|y>>>16),y=v+(w^S^g)+E[6]+76029189&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^S)+E[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=S+(g^v^w)+E[12]+3873151461&4294967295,S=g+(y<<11&4294967295|y>>>21),y=w+(S^g^v)+E[15]+530742520&4294967295,w=S+(y<<16&4294967295|y>>>16),y=v+(w^S^g)+E[2]+3299628645&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(w^(v|~S))+E[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=S+(v^(g|~w))+E[7]+1126891415&4294967295,S=g+(y<<10&4294967295|y>>>22),y=w+(g^(S|~v))+E[14]+2878612391&4294967295,w=S+(y<<15&4294967295|y>>>17),y=v+(S^(w|~g))+E[5]+4237533241&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~S))+E[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=S+(v^(g|~w))+E[3]+2399980690&4294967295,S=g+(y<<10&4294967295|y>>>22),y=w+(g^(S|~v))+E[10]+4293915773&4294967295,w=S+(y<<15&4294967295|y>>>17),y=v+(S^(w|~g))+E[1]+2240044497&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~S))+E[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=S+(v^(g|~w))+E[15]+4264355552&4294967295,S=g+(y<<10&4294967295|y>>>22),y=w+(g^(S|~v))+E[6]+2734768916&4294967295,w=S+(y<<15&4294967295|y>>>17),y=v+(S^(w|~g))+E[13]+1309151649&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~S))+E[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=S+(v^(g|~w))+E[11]+3174756917&4294967295,S=g+(y<<10&4294967295|y>>>22),y=w+(g^(S|~v))+E[2]+718787259&4294967295,w=S+(y<<15&4294967295|y>>>17),y=v+(S^(w|~g))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+S&4294967295}n.prototype.v=function(b,g){g===void 0&&(g=b.length);const v=g-this.blockSize,E=this.C;let w=this.h,S=0;for(;S<g;){if(w==0)for(;S<=v;)i(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<g;)if(E[w++]=b.charCodeAt(S++),w==this.blockSize){i(this,E),w=0;break}}else for(;S<g;)if(E[w++]=b[S++],w==this.blockSize){i(this,E),w=0;break}}this.h=w,this.o+=g},n.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;g=this.o*8;for(var v=b.length-8;v<b.length;++v)b[v]=g&255,g/=256;for(this.v(b),b=Array(16),g=0,v=0;v<4;++v)for(let E=0;E<32;E+=8)b[g++]=this.g[v]>>>E&255;return b};function a(b,g){var v=u;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=g(b)}function o(b,g){this.h=g;const v=[];let E=!0;for(let w=b.length-1;w>=0;w--){const S=b[w]|0;E&&S==g||(v[w]=S,E=!1)}this.g=v}var u={};function l(b){return-128<=b&&b<128?a(b,function(g){return new o([g|0],g<0?-1:0)}):new o([b|0],b<0?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return m;if(b<0)return R(d(-b));const g=[];let v=1;for(let E=0;b>=v;E++)g[E]=b/v|0,v*=4294967296;return new o(g,0)}function p(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return R(p(b.substring(1),g));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=d(Math.pow(g,8));let E=m;for(let S=0;S<b.length;S+=8){var w=Math.min(8,b.length-S);const y=parseInt(b.substring(S,S+w),g);w<8?(w=d(Math.pow(g,w)),E=E.j(w).add(d(y))):(E=E.j(v),E=E.add(d(y)))}return E}var m=l(0),I=l(1),x=l(16777216);s=o.prototype,s.m=function(){if(L(this))return-R(this).m();let b=0,g=1;for(let v=0;v<this.g.length;v++){const E=this.i(v);b+=(E>=0?E:4294967296+E)*g,g*=4294967296}return b},s.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(N(this))return"0";if(L(this))return"-"+R(this).toString(b);const g=d(Math.pow(b,6));var v=this;let E="";for(;;){const w=ne(v,g).g;v=B(v,w.j(g));let S=((v.g.length>0?v.g[0]:v.h)>>>0).toString(b);if(v=w,N(v))return S+E;for(;S.length<6;)S="0"+S;E=S+E}},s.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function N(b){if(b.h!=0)return!1;for(let g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function L(b){return b.h==-1}s.l=function(b){return b=B(this,b),L(b)?-1:N(b)?0:1};function R(b){const g=b.g.length,v=[];for(let E=0;E<g;E++)v[E]=~b.g[E];return new o(v,~b.h).add(I)}s.abs=function(){return L(this)?R(this):this},s.add=function(b){const g=Math.max(this.g.length,b.g.length),v=[];let E=0;for(let w=0;w<=g;w++){let S=E+(this.i(w)&65535)+(b.i(w)&65535),y=(S>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);E=y>>>16,S&=65535,y&=65535,v[w]=y<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function B(b,g){return b.add(R(g))}s.j=function(b){if(N(this)||N(b))return m;if(L(this))return L(b)?R(this).j(R(b)):R(R(this).j(b));if(L(b))return R(this.j(R(b)));if(this.l(x)<0&&b.l(x)<0)return d(this.m()*b.m());const g=this.g.length+b.g.length,v=[];for(var E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(let w=0;w<b.g.length;w++){const S=this.i(E)>>>16,y=this.i(E)&65535,Ae=b.i(w)>>>16,xt=b.i(w)&65535;v[2*E+2*w]+=y*xt,G(v,2*E+2*w),v[2*E+2*w+1]+=S*xt,G(v,2*E+2*w+1),v[2*E+2*w+1]+=y*Ae,G(v,2*E+2*w+1),v[2*E+2*w+2]+=S*Ae,G(v,2*E+2*w+2)}for(b=0;b<g;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=g;b<2*g;b++)v[b]=0;return new o(v,0)};function G(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function Z(b,g){this.g=b,this.h=g}function ne(b,g){if(N(g))throw Error("division by zero");if(N(b))return new Z(m,m);if(L(b))return g=ne(R(b),g),new Z(R(g.g),R(g.h));if(L(g))return g=ne(b,R(g)),new Z(R(g.g),g.h);if(b.g.length>30){if(L(b)||L(g))throw Error("slowDivide_ only works with positive integers.");for(var v=I,E=g;E.l(b)<=0;)v=le(v),E=le(E);var w=ee(v,1),S=ee(E,1);for(E=ee(E,2),v=ee(v,2);!N(E);){var y=S.add(E);y.l(b)<=0&&(w=w.add(v),S=y),E=ee(E,1),v=ee(v,1)}return g=B(b,w.j(g)),new Z(w,g)}for(w=m;b.l(g)>=0;){for(v=Math.max(1,Math.floor(b.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),S=d(v),y=S.j(g);L(y)||y.l(b)>0;)v-=E,S=d(v),y=S.j(g);N(S)&&(S=I),w=w.add(S),b=B(b,y)}return new Z(w,b)}s.B=function(b){return ne(this,b).h},s.and=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)&b.i(E);return new o(v,this.h&b.h)},s.or=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)|b.i(E);return new o(v,this.h|b.h)},s.xor=function(b){const g=Math.max(this.g.length,b.g.length),v=[];for(let E=0;E<g;E++)v[E]=this.i(E)^b.i(E);return new o(v,this.h^b.h)};function le(b){const g=b.g.length+1,v=[];for(let E=0;E<g;E++)v[E]=b.i(E)<<1|b.i(E-1)>>>31;return new o(v,b.h)}function ee(b,g){const v=g>>5;g%=32;const E=b.g.length-v,w=[];for(let S=0;S<E;S++)w[S]=g>0?b.i(S+v)>>>g|b.i(S+v+1)<<32-g:b.i(S+v);return new o(w,b.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Ou=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,vt=o}).apply(typeof Yo<"u"?Yo:typeof self<"u"?self:typeof window<"u"?window:{});var Ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pu,Bn,Mu,Us,Sr,Uu,Fu,Vu;(function(){var s,e=Object.defineProperty;function t(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ds=="object"&&Ds];for(var c=0;c<r.length;++c){var h=r[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function i(r,c){if(c)e:{var h=n;r=r.split(".");for(var f=0;f<r.length-1;f++){var T=r[f];if(!(T in h))break e;h=h[T]}r=r[r.length-1],f=h[r],c=c(f),c!=f&&c!=null&&e(h,r,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(r){return r||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(r){return r||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(r){return r||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},o=this||self;function u(r){var c=typeof r;return c=="object"&&r!=null||c=="function"}function l(r,c,h){return r.call.apply(r.bind,arguments)}function d(r,c,h){return d=l,d.apply(null,arguments)}function p(r,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),r.apply(this,f)}}function m(r,c){function h(){}h.prototype=c.prototype,r.Z=c.prototype,r.prototype=new h,r.prototype.constructor=r,r.Ob=function(f,T,_){for(var k=Array(arguments.length-2),$=2;$<arguments.length;$++)k[$-2]=arguments[$];return c.prototype[T].apply(f,k)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?r=>r&&AsyncContext.Snapshot.wrap(r):r=>r;function x(r){const c=r.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=r[f];return h}return[]}function N(r,c){for(let f=1;f<arguments.length;f++){const T=arguments[f];var h=typeof T;if(h=h!="object"?h:T?Array.isArray(T)?"array":h:"null",h=="array"||h=="object"&&typeof T.length=="number"){h=r.length||0;const _=T.length||0;r.length=h+_;for(let k=0;k<_;k++)r[h+k]=T[k]}else r.push(T)}}class L{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function R(r){o.setTimeout(()=>{throw r},0)}function B(){var r=b;let c=null;return r.g&&(c=r.g,r.g=r.g.next,r.g||(r.h=null),c.next=null),c}class G{constructor(){this.h=this.g=null}add(c,h){const f=Z.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Z=new L(()=>new ne,r=>r.reset());class ne{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ee=!1,b=new G,g=()=>{const r=Promise.resolve(void 0);le=()=>{r.then(v)}};function v(){for(var r;r=B();){try{r.h.call(r.g)}catch(h){R(h)}var c=Z;c.j(r),c.h<100&&(c.h++,r.next=c.g,c.g=r)}ee=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(r,c){this.type=r,this.g=this.target=c,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var r=!1,c=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const h=()=>{};o.addEventListener("test",h,c),o.removeEventListener("test",h,c)}catch{}return r}();function y(r){return/^[\s\xa0]*$/.test(r)}function Ae(r,c){w.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r&&this.init(r,c)}m(Ae,w),Ae.prototype.init=function(r,c){const h=this.type=r.type,f=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;this.target=r.target||r.srcElement,this.g=c,c=r.relatedTarget,c||(h=="mouseover"?c=r.fromElement:h=="mouseout"&&(c=r.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=r.pointerType,this.state=r.state,this.i=r,r.defaultPrevented&&Ae.Z.h.call(this)},Ae.prototype.h=function(){Ae.Z.h.call(this);const r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var xt="closure_listenable_"+(Math.random()*1e6|0),Hh=0;function Gh(r,c,h,f,T){this.listener=r,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=T,this.key=++Hh,this.da=this.fa=!1}function gs(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function ys(r,c,h){for(const f in r)c.call(h,r[f],f,r)}function Kh(r,c){for(const h in r)c.call(void 0,r[h],h,r)}function Fa(r){const c={};for(const h in r)c[h]=r[h];return c}const Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ba(r,c){let h,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(h in f)r[h]=f[h];for(let _=0;_<Va.length;_++)h=Va[_],Object.prototype.hasOwnProperty.call(f,h)&&(r[h]=f[h])}}function vs(r){this.src=r,this.g={},this.h=0}vs.prototype.add=function(r,c,h,f,T){const _=r.toString();r=this.g[_],r||(r=this.g[_]=[],this.h++);const k=Oi(r,c,f,T);return k>-1?(c=r[k],h||(c.fa=!1)):(c=new Gh(c,this.src,_,!!f,T),c.fa=h,r.push(c)),c};function Li(r,c){const h=c.type;if(h in r.g){var f=r.g[h],T=Array.prototype.indexOf.call(f,c,void 0),_;(_=T>=0)&&Array.prototype.splice.call(f,T,1),_&&(gs(c),r.g[h].length==0&&(delete r.g[h],r.h--))}}function Oi(r,c,h,f){for(let T=0;T<r.length;++T){const _=r[T];if(!_.da&&_.listener==c&&_.capture==!!h&&_.ha==f)return T}return-1}var Pi="closure_lm_"+(Math.random()*1e6|0),Mi={};function $a(r,c,h,f,T){if(Array.isArray(c)){for(let _=0;_<c.length;_++)$a(r,c[_],h,f,T);return null}return h=za(h),r&&r[xt]?r.J(c,h,u(f)?!!f.capture:!1,T):Wh(r,c,h,!1,f,T)}function Wh(r,c,h,f,T,_){if(!c)throw Error("Invalid event type");const k=u(T)?!!T.capture:!!T;let $=Fi(r);if($||(r[Pi]=$=new vs(r)),h=$.add(c,h,f,k,_),h.proxy)return h;if(f=Qh(),h.proxy=f,f.src=r,f.listener=h,r.addEventListener)S||(T=k),T===void 0&&(T=!1),r.addEventListener(c.toString(),f,T);else if(r.attachEvent)r.attachEvent(qa(c.toString()),f);else if(r.addListener&&r.removeListener)r.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Qh(){function r(h){return c.call(r.src,r.listener,h)}const c=Xh;return r}function ja(r,c,h,f,T){if(Array.isArray(c))for(var _=0;_<c.length;_++)ja(r,c[_],h,f,T);else f=u(f)?!!f.capture:!!f,h=za(h),r&&r[xt]?(r=r.i,_=String(c).toString(),_ in r.g&&(c=r.g[_],h=Oi(c,h,f,T),h>-1&&(gs(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete r.g[_],r.h--)))):r&&(r=Fi(r))&&(c=r.g[c.toString()],r=-1,c&&(r=Oi(c,h,f,T)),(h=r>-1?c[r]:null)&&Ui(h))}function Ui(r){if(typeof r!="number"&&r&&!r.da){var c=r.src;if(c&&c[xt])Li(c.i,r);else{var h=r.type,f=r.proxy;c.removeEventListener?c.removeEventListener(h,f,r.capture):c.detachEvent?c.detachEvent(qa(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Fi(c))?(Li(h,r),h.h==0&&(h.src=null,c[Pi]=null)):gs(r)}}}function qa(r){return r in Mi?Mi[r]:Mi[r]="on"+r}function Xh(r,c){if(r.da)r=!0;else{c=new Ae(c,this);const h=r.listener,f=r.ha||r.src;r.fa&&Ui(r),r=h.call(f,c)}return r}function Fi(r){return r=r[Pi],r instanceof vs?r:null}var Vi="__closure_events_fn_"+(Math.random()*1e9>>>0);function za(r){return typeof r=="function"?r:(r[Vi]||(r[Vi]=function(c){return r.handleEvent(c)}),r[Vi])}function ve(){E.call(this),this.i=new vs(this),this.M=this,this.G=null}m(ve,E),ve.prototype[xt]=!0,ve.prototype.removeEventListener=function(r,c,h,f){ja(this,r,c,h,f)};function Se(r,c){var h,f=r.G;if(f)for(h=[];f;f=f.G)h.push(f);if(r=r.M,f=c.type||c,typeof c=="string")c=new w(c,r);else if(c instanceof w)c.target=c.target||r;else{var T=c;c=new w(f,r),Ba(c,T)}T=!0;let _,k;if(h)for(k=h.length-1;k>=0;k--)_=c.g=h[k],T=ws(_,f,!0,c)&&T;if(_=c.g=r,T=ws(_,f,!0,c)&&T,T=ws(_,f,!1,c)&&T,h)for(k=0;k<h.length;k++)_=c.g=h[k],T=ws(_,f,!1,c)&&T}ve.prototype.N=function(){if(ve.Z.N.call(this),this.i){var r=this.i;for(const c in r.g){const h=r.g[c];for(let f=0;f<h.length;f++)gs(h[f]);delete r.g[c],r.h--}}this.G=null},ve.prototype.J=function(r,c,h,f){return this.i.add(String(r),c,!1,h,f)},ve.prototype.K=function(r,c,h,f){return this.i.add(String(r),c,!0,h,f)};function ws(r,c,h,f){if(c=r.i.g[String(c)],!c)return!0;c=c.concat();let T=!0;for(let _=0;_<c.length;++_){const k=c[_];if(k&&!k.da&&k.capture==h){const $=k.listener,he=k.ha||k.src;k.fa&&Li(r.i,k),T=$.call(he,f)!==!1&&T}}return T&&!f.defaultPrevented}function Jh(r,c){if(typeof r!="function")if(r&&typeof r.handleEvent=="function")r=d(r.handleEvent,r);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(r,c||0)}function Ha(r){r.g=Jh(()=>{r.g=null,r.i&&(r.i=!1,Ha(r))},r.l);const c=r.h;r.h=null,r.m.apply(null,c)}class Yh extends E{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ha(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sn(r){E.call(this),this.h=r,this.g={}}m(Sn,E);var Ga=[];function Ka(r){ys(r.g,function(c,h){this.g.hasOwnProperty(h)&&Ui(c)},r),r.g={}}Sn.prototype.N=function(){Sn.Z.N.call(this),Ka(this)},Sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bi=o.JSON.stringify,Zh=o.JSON.parse,ed=class{stringify(r){return o.JSON.stringify(r,void 0)}parse(r){return o.JSON.parse(r,void 0)}};function Wa(){}function Qa(){}var In={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $i(){w.call(this,"d")}m($i,w);function ji(){w.call(this,"c")}m(ji,w);var kt={},Xa=null;function bs(){return Xa=Xa||new ve}kt.Ia="serverreachability";function Ja(r){w.call(this,kt.Ia,r)}m(Ja,w);function _n(r){const c=bs();Se(c,new Ja(c))}kt.STAT_EVENT="statevent";function Ya(r,c){w.call(this,kt.STAT_EVENT,r),this.stat=c}m(Ya,w);function Ie(r){const c=bs();Se(c,new Ya(c,r))}kt.Ja="timingevent";function Za(r,c){w.call(this,kt.Ja,r),this.size=c}m(Za,w);function An(r,c){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){r()},c)}function Cn(){this.g=!0}Cn.prototype.ua=function(){this.g=!1};function td(r,c,h,f,T,_){r.info(function(){if(r.g)if(_){var k="",$=_.split("&");for(let J=0;J<$.length;J++){var he=$[J].split("=");if(he.length>1){const fe=he[0];he=he[1];const Me=fe.split("_");k=Me.length>=2&&Me[1]=="type"?k+(fe+"="+he+"&"):k+(fe+"=redacted&")}}}else k=null;else k=_;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+c+`
`+h+`
`+k})}function nd(r,c,h,f,T,_,k){r.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+c+`
`+h+`
`+_+" "+k})}function Ht(r,c,h,f){r.info(function(){return"XMLHTTP TEXT ("+c+"): "+id(r,h)+(f?" "+f:"")})}function sd(r,c){r.info(function(){return"TIMEOUT: "+c})}Cn.prototype.info=function(){};function id(r,c){if(!r.g)return c;if(!c)return null;try{const _=JSON.parse(c);if(_){for(r=0;r<_.length;r++)if(Array.isArray(_[r])){var h=_[r];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var T=f[0];if(T!="noop"&&T!="stop"&&T!="close")for(let k=1;k<f.length;k++)f[k]=""}}}}return Bi(_)}catch{return c}}var Es={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},eo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},to;function qi(){}m(qi,Wa),qi.prototype.g=function(){return new XMLHttpRequest},to=new qi;function xn(r){return encodeURIComponent(String(r))}function rd(r){var c=1;r=r.split(":");const h=[];for(;c>0&&r.length;)h.push(r.shift()),c--;return r.length&&h.push(r.join(":")),h}function st(r,c,h,f){this.j=r,this.i=c,this.l=h,this.S=f||1,this.V=new Sn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new no}function no(){this.i=null,this.g="",this.h=!1}var so={},zi={};function Hi(r,c,h){r.M=1,r.A=Ss(Pe(c)),r.u=h,r.R=!0,io(r,null)}function io(r,c){r.F=Date.now(),Ts(r),r.B=Pe(r.A);var h=r.B,f=r.S;Array.isArray(f)||(f=[String(f)]),vo(h.i,"t",f),r.C=0,h=r.j.L,r.h=new no,r.g=Mo(r.j,h?c:null,!r.u),r.P>0&&(r.O=new Yh(d(r.Y,r,r.g),r.P)),c=r.V,h=r.g,f=r.ba;var T="readystatechange";Array.isArray(T)||(T&&(Ga[0]=T.toString()),T=Ga);for(let _=0;_<T.length;_++){const k=$a(h,T[_],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=r.J?Fa(r.J):{},r.u?(r.v||(r.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.B,r.v,r.u,c)):(r.v="GET",r.g.ea(r.B,r.v,null,c)),_n(),td(r.i,r.v,r.B,r.l,r.S,r.u)}st.prototype.ba=function(r){r=r.target;const c=this.O;c&&at(r)==3?c.j():this.Y(r)},st.prototype.Y=function(r){try{if(r==this.g)e:{const $=at(this.g),he=this.g.ya(),J=this.g.ca();if(!($<3)&&($!=3||this.g&&(this.h.h||this.g.la()||_o(this.g)))){this.K||$!=4||he==7||(he==8||J<=0?_n(3):_n(2)),Gi(this);var c=this.g.ca();this.X=c;var h=ad(this);if(this.o=c==200,nd(this.i,this.v,this.B,this.l,this.S,$,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,T=this.g;if((f=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(f)){var _=f;break t}}_=null}if(r=_)Ht(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ki(this,r);else{this.o=!1,this.m=3,Ie(12),Nt(this),kn(this);break e}}if(this.R){r=!0;let fe;for(;!this.K&&this.C<h.length;)if(fe=od(this,h),fe==zi){$==4&&(this.m=4,Ie(14),r=!1),Ht(this.i,this.l,null,"[Incomplete Response]");break}else if(fe==so){this.m=4,Ie(15),Ht(this.i,this.l,h,"[Invalid Chunk]"),r=!1;break}else Ht(this.i,this.l,fe,null),Ki(this,fe);if(ro(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||h.length!=0||this.h.h||(this.m=1,Ie(16),r=!1),this.o=this.o&&r,!r)Ht(this.i,this.l,h,"[Invalid Chunked Response]"),Nt(this),kn(this);else if(h.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),tr(k),k.P=!0,Ie(11))}}else Ht(this.i,this.l,h,null),Ki(this,h);$==4&&Nt(this),this.o&&!this.K&&($==4?Ro(this.j,this):(this.o=!1,Ts(this)))}else Ed(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ie(12)):(this.m=0,Ie(13)),Nt(this),kn(this)}}}catch{}finally{}};function ad(r){if(!ro(r))return r.g.la();const c=_o(r.g);if(c==="")return"";let h="";const f=c.length,T=at(r.g)==4;if(!r.h.i){if(typeof TextDecoder>"u")return Nt(r),kn(r),"";r.h.i=new o.TextDecoder}for(let _=0;_<f;_++)r.h.h=!0,h+=r.h.i.decode(c[_],{stream:!(T&&_==f-1)});return c.length=0,r.h.g+=h,r.C=0,r.h.g}function ro(r){return r.g?r.v=="GET"&&r.M!=2&&r.j.Aa:!1}function od(r,c){var h=r.C,f=c.indexOf(`
`,h);return f==-1?zi:(h=Number(c.substring(h,f)),isNaN(h)?so:(f+=1,f+h>c.length?zi:(c=c.slice(f,f+h),r.C=f+h,c)))}st.prototype.cancel=function(){this.K=!0,Nt(this)};function Ts(r){r.T=Date.now()+r.H,ao(r,r.H)}function ao(r,c){if(r.D!=null)throw Error("WatchDog timer not null");r.D=An(d(r.aa,r),c)}function Gi(r){r.D&&(o.clearTimeout(r.D),r.D=null)}st.prototype.aa=function(){this.D=null;const r=Date.now();r-this.T>=0?(sd(this.i,this.B),this.M!=2&&(_n(),Ie(17)),Nt(this),this.m=2,kn(this)):ao(this,this.T-r)};function kn(r){r.j.I==0||r.K||Ro(r.j,r)}function Nt(r){Gi(r);var c=r.O;c&&typeof c.dispose=="function"&&c.dispose(),r.O=null,Ka(r.V),r.g&&(c=r.g,r.g=null,c.abort(),c.dispose())}function Ki(r,c){try{var h=r.j;if(h.I!=0&&(h.g==r||Wi(h.h,r))){if(!r.L&&Wi(h.h,r)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<r.F)xs(h),As(h);else break e;er(h),Ie(18)}}else h.xa=T[1],0<h.xa-h.K&&T[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=An(d(h.Va,h),6e3));uo(h.h)<=1&&h.ta&&(h.ta=void 0)}else Rt(h,11)}else if((r.L||h.g==r)&&xs(h),!y(c))for(T=h.Ba.g.parse(c),c=0;c<T.length;c++){let J=T[c];const fe=J[0];if(!(fe<=h.K))if(h.K=fe,J=J[1],h.I==2)if(J[0]=="c"){h.M=J[1],h.ba=J[2];const Me=J[3];Me!=null&&(h.ka=Me,h.j.info("VER="+h.ka));const Wt=J[4];Wt!=null&&(h.za=Wt,h.j.info("SVER="+h.za));const ot=J[5];ot!=null&&typeof ot=="number"&&ot>0&&(f=1.5*ot,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const ct=r.g;if(ct){const Ns=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ns){var _=f.h;_.g||Ns.indexOf("spdy")==-1&&Ns.indexOf("quic")==-1&&Ns.indexOf("h2")==-1||(_.j=_.l,_.g=new Set,_.h&&(Qi(_,_.h),_.h=null))}if(f.G){const nr=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;nr&&(f.wa=nr,X(f.J,f.G,nr))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-r.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var k=r;if(f.na=Po(f,f.L?f.ba:null,f.W),k.L){lo(f.h,k);var $=k,he=f.O;he&&($.H=he),$.D&&(Gi($),Ts($)),f.g=k}else No(f);h.i.length>0&&Cs(h)}else J[0]!="stop"&&J[0]!="close"||Rt(h,7);else h.I==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Rt(h,7):Zi(h):J[0]!="noop"&&h.l&&h.l.qa(J),h.A=0)}}_n(4)}catch{}}var cd=class{constructor(r,c){this.g=r,this.map=c}};function oo(r){this.l=r||10,o.PerformanceNavigationTiming?(r=o.performance.getEntriesByType("navigation"),r=r.length>0&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function co(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function uo(r){return r.h?1:r.g?r.g.size:0}function Wi(r,c){return r.h?r.h==c:r.g?r.g.has(c):!1}function Qi(r,c){r.g?r.g.add(c):r.h=c}function lo(r,c){r.h&&r.h==c?r.h=null:r.g&&r.g.has(c)&&r.g.delete(c)}oo.prototype.cancel=function(){if(this.i=ho(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function ho(r){if(r.h!=null)return r.i.concat(r.h.G);if(r.g!=null&&r.g.size!==0){let c=r.i;for(const h of r.g.values())c=c.concat(h.G);return c}return x(r.i)}var fo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ud(r,c){if(r){r=r.split("&");for(let h=0;h<r.length;h++){const f=r[h].indexOf("=");let T,_=null;f>=0?(T=r[h].substring(0,f),_=r[h].substring(f+1)):T=r[h],c(T,_?decodeURIComponent(_.replace(/\+/g," ")):"")}}}function it(r){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;r instanceof it?(this.l=r.l,Nn(this,r.j),this.o=r.o,this.g=r.g,Dn(this,r.u),this.h=r.h,Xi(this,wo(r.i)),this.m=r.m):r&&(c=String(r).match(fo))?(this.l=!1,Nn(this,c[1]||"",!0),this.o=Rn(c[2]||""),this.g=Rn(c[3]||"",!0),Dn(this,c[4]),this.h=Rn(c[5]||"",!0),Xi(this,c[6]||"",!0),this.m=Rn(c[7]||"")):(this.l=!1,this.i=new On(null,this.l))}it.prototype.toString=function(){const r=[];var c=this.j;c&&r.push(Ln(c,po,!0),":");var h=this.g;return(h||c=="file")&&(r.push("//"),(c=this.o)&&r.push(Ln(c,po,!0),"@"),r.push(xn(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&r.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&r.push("/"),r.push(Ln(h,h.charAt(0)=="/"?dd:hd,!0))),(h=this.i.toString())&&r.push("?",h),(h=this.m)&&r.push("#",Ln(h,pd)),r.join("")},it.prototype.resolve=function(r){const c=Pe(this);let h=!!r.j;h?Nn(c,r.j):h=!!r.o,h?c.o=r.o:h=!!r.g,h?c.g=r.g:h=r.u!=null;var f=r.h;if(h)Dn(c,r.u);else if(h=!!r.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var T=c.h.lastIndexOf("/");T!=-1&&(f=c.h.slice(0,T+1)+f)}if(T=f,T==".."||T==".")f="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){f=T.lastIndexOf("/",0)==0,T=T.split("/");const _=[];for(let k=0;k<T.length;){const $=T[k++];$=="."?f&&k==T.length&&_.push(""):$==".."?((_.length>1||_.length==1&&_[0]!="")&&_.pop(),f&&k==T.length&&_.push("")):(_.push($),f=!0)}f=_.join("/")}else f=T}return h?c.h=f:h=r.i.toString()!=="",h?Xi(c,wo(r.i)):h=!!r.m,h&&(c.m=r.m),c};function Pe(r){return new it(r)}function Nn(r,c,h){r.j=h?Rn(c,!0):c,r.j&&(r.j=r.j.replace(/:$/,""))}function Dn(r,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);r.u=c}else r.u=null}function Xi(r,c,h){c instanceof On?(r.i=c,md(r.i,r.l)):(h||(c=Ln(c,fd)),r.i=new On(c,r.l))}function X(r,c,h){r.i.set(c,h)}function Ss(r){return X(r,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),r}function Rn(r,c){return r?c?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ln(r,c,h){return typeof r=="string"?(r=encodeURI(r).replace(c,ld),h&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function ld(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var po=/[#\/\?@]/g,hd=/[#\?:]/g,dd=/[#\?]/g,fd=/[#\?@]/g,pd=/#/g;function On(r,c){this.h=this.g=null,this.i=r||null,this.j=!!c}function Dt(r){r.g||(r.g=new Map,r.h=0,r.i&&ud(r.i,function(c,h){r.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}s=On.prototype,s.add=function(r,c){Dt(this),this.i=null,r=Gt(this,r);let h=this.g.get(r);return h||this.g.set(r,h=[]),h.push(c),this.h+=1,this};function mo(r,c){Dt(r),c=Gt(r,c),r.g.has(c)&&(r.i=null,r.h-=r.g.get(c).length,r.g.delete(c))}function go(r,c){return Dt(r),c=Gt(r,c),r.g.has(c)}s.forEach=function(r,c){Dt(this),this.g.forEach(function(h,f){h.forEach(function(T){r.call(c,T,f,this)},this)},this)};function yo(r,c){Dt(r);let h=[];if(typeof c=="string")go(r,c)&&(h=h.concat(r.g.get(Gt(r,c))));else for(r=Array.from(r.g.values()),c=0;c<r.length;c++)h=h.concat(r[c]);return h}s.set=function(r,c){return Dt(this),this.i=null,r=Gt(this,r),go(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[c]),this.h+=1,this},s.get=function(r,c){return r?(r=yo(this,r),r.length>0?String(r[0]):c):c};function vo(r,c,h){mo(r,c),h.length>0&&(r.i=null,r.g.set(Gt(r,c),x(h)),r.h+=h.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const T=xn(h);h=yo(this,h);for(let _=0;_<h.length;_++){let k=T;h[_]!==""&&(k+="="+xn(h[_])),r.push(k)}}return this.i=r.join("&")};function wo(r){const c=new On;return c.i=r.i,r.g&&(c.g=new Map(r.g),c.h=r.h),c}function Gt(r,c){return c=String(c),r.j&&(c=c.toLowerCase()),c}function md(r,c){c&&!r.j&&(Dt(r),r.i=null,r.g.forEach(function(h,f){const T=f.toLowerCase();f!=T&&(mo(this,f),vo(this,T,h))},r)),r.j=c}function gd(r,c){const h=new Cn;if(o.Image){const f=new Image;f.onload=p(rt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=p(rt,h,"TestLoadImage: error",!1,c,f),f.onabort=p(rt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(rt,h,"TestLoadImage: timeout",!1,c,f),o.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=r}else c(!1)}function yd(r,c){const h=new Cn,f=new AbortController,T=setTimeout(()=>{f.abort(),rt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(r,{signal:f.signal}).then(_=>{clearTimeout(T),_.ok?rt(h,"TestPingServer: ok",!0,c):rt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),rt(h,"TestPingServer: error",!1,c)})}function rt(r,c,h,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(h)}catch{}}function vd(){this.g=new ed}function Ji(r){this.i=r.Sb||null,this.h=r.ab||!1}m(Ji,Wa),Ji.prototype.g=function(){return new Is(this.i,this.h)};function Is(r,c){ve.call(this),this.H=r,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Is,ve),s=Is.prototype,s.open=function(r,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=r,this.D=c,this.readyState=1,Mn(this)},s.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};r&&(c.body=r),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=0},s.Pa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;bo(this)}else r.text().then(this.Oa.bind(this),this.ga.bind(this))};function bo(r){r.j.read().then(r.Ma.bind(r)).catch(r.ga.bind(r))}s.Ma=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var c=r.value?r.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!r.done}))&&(this.response=this.responseText+=c)}r.done?Pn(this):Mn(this),this.readyState==3&&bo(this)}},s.Oa=function(r){this.g&&(this.response=this.responseText=r,Pn(this))},s.Na=function(r){this.g&&(this.response=r,Pn(this))},s.ga=function(){this.g&&Pn(this)};function Pn(r){r.readyState=4,r.l=null,r.j=null,r.B=null,Mn(r)}s.setRequestHeader=function(r,c){this.A.append(r,c)},s.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,r.push(h[0]+": "+h[1]),h=c.next();return r.join(`\r
`)};function Mn(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Eo(r){let c="";return ys(r,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Yi(r,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Eo(h),typeof r=="string"?h!=null&&xn(h):X(r,c,h))}function se(r){ve.call(this),this.headers=new Map,this.L=r||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(se,ve);var wd=/^https?$/i,bd=["POST","PUT"];s=se.prototype,s.Fa=function(r){this.H=r},s.ea=function(r,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);c=c?c.toUpperCase():"GET",this.D=r,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():to.g(),this.g.onreadystatechange=I(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(r),!0),this.B=!1}catch(_){To(this,_);return}if(r=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)h.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const _ of f.keys())h.set(_,f.get(_));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(_=>_.toLowerCase()=="content-type"),T=o.FormData&&r instanceof o.FormData,!(Array.prototype.indexOf.call(bd,c,void 0)>=0)||f||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[_,k]of h)this.g.setRequestHeader(_,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(r),this.v=!1}catch(_){To(this,_)}};function To(r,c){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=c,r.o=5,So(r),_s(r)}function So(r){r.A||(r.A=!0,Se(r,"complete"),Se(r,"error"))}s.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=r||7,Se(this,"complete"),Se(this,"abort"),_s(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_s(this,!0)),se.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Io(this):this.Xa())},s.Xa=function(){Io(this)};function Io(r){if(r.h&&typeof a<"u"){if(r.v&&at(r)==4)setTimeout(r.Ca.bind(r),0);else if(Se(r,"readystatechange"),at(r)==4){r.h=!1;try{const _=r.ca();e:switch(_){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=_===0){let k=String(r.D).match(fo)[1]||null;!k&&o.self&&o.self.location&&(k=o.self.location.protocol.slice(0,-1)),f=!wd.test(k?k.toLowerCase():"")}h=f}if(h)Se(r,"complete"),Se(r,"success");else{r.o=6;try{var T=at(r)>2?r.g.statusText:""}catch{T=""}r.l=T+" ["+r.ca()+"]",So(r)}}finally{_s(r)}}}}function _s(r,c){if(r.g){r.m&&(clearTimeout(r.m),r.m=null);const h=r.g;r.g=null,c||Se(r,"ready");try{h.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function at(r){return r.g?r.g.readyState:0}s.ca=function(){try{return at(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(r){if(this.g){var c=this.g.responseText;return r&&c.indexOf(r)==0&&(c=c.substring(r.length)),Zh(c)}};function _o(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.F){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Ed(r){const c={};r=(r.g&&at(r)>=2&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<r.length;f++){if(y(r[f]))continue;var h=rd(r[f]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const _=c[T]||[];c[T]=_,_.push(h)}Kh(c,function(f){return f.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(r,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[r]||c}function Ao(r){this.za=0,this.i=[],this.j=new Cn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Un("failFast",!1,r),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Un("baseRetryDelayMs",5e3,r),this.Za=Un("retryDelaySeedMs",1e4,r),this.Ta=Un("forwardChannelMaxRetries",2,r),this.va=Un("forwardChannelRequestTimeoutMs",2e4,r),this.ma=r&&r.xmlHttpFactory||void 0,this.Ua=r&&r.Rb||void 0,this.Aa=r&&r.useFetchStreams||!1,this.O=void 0,this.L=r&&r.supportsCrossDomainXhr||!1,this.M="",this.h=new oo(r&&r.concurrentRequestLimit),this.Ba=new vd,this.S=r&&r.fastHandshake||!1,this.R=r&&r.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=r&&r.Pb||!1,r&&r.ua&&this.j.ua(),r&&r.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&r&&r.detectBufferingProxy||!1,this.ia=void 0,r&&r.longPollingTimeout&&r.longPollingTimeout>0&&(this.ia=r.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Ao.prototype,s.ka=8,s.I=1,s.connect=function(r,c,h,f){Ie(0),this.W=r,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=Po(this,null,this.W),Cs(this)};function Zi(r){if(Co(r),r.I==3){var c=r.V++,h=Pe(r.J);if(X(h,"SID",r.M),X(h,"RID",c),X(h,"TYPE","terminate"),Fn(r,h),c=new st(r,r.j,c),c.M=2,c.A=Ss(Pe(h)),h=!1,o.navigator&&o.navigator.sendBeacon)try{h=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&o.Image&&(new Image().src=c.A,h=!0),h||(c.g=Mo(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ts(c)}Oo(r)}function As(r){r.g&&(tr(r),r.g.cancel(),r.g=null)}function Co(r){As(r),r.v&&(o.clearTimeout(r.v),r.v=null),xs(r),r.h.cancel(),r.m&&(typeof r.m=="number"&&o.clearTimeout(r.m),r.m=null)}function Cs(r){if(!co(r.h)&&!r.m){r.m=!0;var c=r.Ea;le||g(),ee||(le(),ee=!0),b.add(c,r),r.D=0}}function Td(r,c){return uo(r.h)>=r.h.j-(r.m?1:0)?!1:r.m?(r.i=c.G.concat(r.i),!0):r.I==1||r.I==2||r.D>=(r.Sa?0:r.Ta)?!1:(r.m=An(d(r.Ea,r,c),Lo(r,r.D)),r.D++,!0)}s.Ea=function(r){if(this.m)if(this.m=null,this.I==1){if(!r){this.V=Math.floor(Math.random()*1e5),r=this.V++;const T=new st(this,this.j,r);let _=this.o;if(this.U&&(_?(_=Fa(_),Ba(_,this.U)):_=this.U),this.u!==null||this.R||(T.J=_,_=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=ko(this,T,c),h=Pe(this.J),X(h,"RID",r),X(h,"CVER",22),this.G&&X(h,"X-HTTP-Session-Id",this.G),Fn(this,h),_&&(this.R?c="headers="+xn(Eo(_))+"&"+c:this.u&&Yi(h,this.u,_)),Qi(this.h,T),this.Ra&&X(h,"TYPE","init"),this.S?(X(h,"$req",c),X(h,"SID","null"),T.U=!0,Hi(T,h,null)):Hi(T,h,c),this.I=2}}else this.I==3&&(r?xo(this,r):this.i.length==0||co(this.h)||xo(this))};function xo(r,c){var h;c?h=c.l:h=r.V++;const f=Pe(r.J);X(f,"SID",r.M),X(f,"RID",h),X(f,"AID",r.K),Fn(r,f),r.u&&r.o&&Yi(f,r.u,r.o),h=new st(r,r.j,h,r.D+1),r.u===null&&(h.J=r.o),c&&(r.i=c.G.concat(r.i)),c=ko(r,h,1e3),h.H=Math.round(r.va*.5)+Math.round(r.va*.5*Math.random()),Qi(r.h,h),Hi(h,f,c)}function Fn(r,c){r.H&&ys(r.H,function(h,f){X(c,f,h)}),r.l&&ys({},function(h,f){X(c,f,h)})}function ko(r,c,h){h=Math.min(r.i.length,h);const f=r.l?d(r.l.Ka,r.l,r):null;e:{var T=r.i;let $=-1;for(;;){const he=["count="+h];$==-1?h>0?($=T[0].g,he.push("ofs="+$)):$=0:he.push("ofs="+$);let J=!0;for(let fe=0;fe<h;fe++){var _=T[fe].g;const Me=T[fe].map;if(_-=$,_<0)$=Math.max(0,T[fe].g-100),J=!1;else try{_="req"+_+"_"||"";try{var k=Me instanceof Map?Me:Object.entries(Me);for(const[Wt,ot]of k){let ct=ot;u(ot)&&(ct=Bi(ot)),he.push(_+Wt+"="+encodeURIComponent(ct))}}catch(Wt){throw he.push(_+"type="+encodeURIComponent("_badmap")),Wt}}catch{f&&f(Me)}}if(J){k=he.join("&");break e}}k=void 0}return r=r.i.splice(0,h),c.G=r,k}function No(r){if(!r.g&&!r.v){r.Y=1;var c=r.Da;le||g(),ee||(le(),ee=!0),b.add(c,r),r.A=0}}function er(r){return r.g||r.v||r.A>=3?!1:(r.Y++,r.v=An(d(r.Da,r),Lo(r,r.A)),r.A++,!0)}s.Da=function(){if(this.v=null,Do(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var r=4*this.T;this.j.info("BP detection timer enabled: "+r),this.B=An(d(this.Wa,this),r)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ie(10),As(this),Do(this))};function tr(r){r.B!=null&&(o.clearTimeout(r.B),r.B=null)}function Do(r){r.g=new st(r,r.j,"rpc",r.Y),r.u===null&&(r.g.J=r.o),r.g.P=0;var c=Pe(r.na);X(c,"RID","rpc"),X(c,"SID",r.M),X(c,"AID",r.K),X(c,"CI",r.F?"0":"1"),!r.F&&r.ia&&X(c,"TO",r.ia),X(c,"TYPE","xmlhttp"),Fn(r,c),r.u&&r.o&&Yi(c,r.u,r.o),r.O&&(r.g.H=r.O);var h=r.g;r=r.ba,h.M=1,h.A=Ss(Pe(c)),h.u=null,h.R=!0,io(h,r)}s.Va=function(){this.C!=null&&(this.C=null,As(this),er(this),Ie(19))};function xs(r){r.C!=null&&(o.clearTimeout(r.C),r.C=null)}function Ro(r,c){var h=null;if(r.g==c){xs(r),tr(r),r.g=null;var f=2}else if(Wi(r.h,c))h=c.G,lo(r.h,c),f=1;else return;if(r.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var T=r.D;f=bs(),Se(f,new Za(f,h)),Cs(r)}else No(r);else if(T=c.m,T==3||T==0&&c.X>0||!(f==1&&Td(r,c)||f==2&&er(r)))switch(h&&h.length>0&&(c=r.h,c.i=c.i.concat(h)),T){case 1:Rt(r,5);break;case 4:Rt(r,10);break;case 3:Rt(r,6);break;default:Rt(r,2)}}}function Lo(r,c){let h=r.Qa+Math.floor(Math.random()*r.Za);return r.isActive()||(h*=2),h*c}function Rt(r,c){if(r.j.info("Error code "+c),c==2){var h=d(r.bb,r),f=r.Ua;const T=!f;f=new it(f||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Nn(f,"https"),Ss(f),T?gd(f.toString(),h):yd(f.toString(),h)}else Ie(2);r.I=0,r.l&&r.l.pa(c),Oo(r),Co(r)}s.bb=function(r){r?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))};function Oo(r){if(r.I=0,r.ja=[],r.l){const c=ho(r.h);(c.length!=0||r.i.length!=0)&&(N(r.ja,c),N(r.ja,r.i),r.h.i.length=0,x(r.i),r.i.length=0),r.l.oa()}}function Po(r,c,h){var f=h instanceof it?Pe(h):new it(h);if(f.g!="")c&&(f.g=c+"."+f.g),Dn(f,f.u);else{var T=o.location;f=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;const _=new it(null);f&&Nn(_,f),c&&(_.g=c),T&&Dn(_,T),h&&(_.h=h),f=_}return h=r.G,c=r.wa,h&&c&&X(f,h,c),X(f,"VER",r.ka),Fn(r,f),f}function Mo(r,c,h){if(c&&!r.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=r.Aa&&!r.ma?new se(new Ji({ab:h})):new se(r.ma),c.Fa(r.L),c}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uo(){}s=Uo.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function ks(){}ks.prototype.g=function(r,c){return new ke(r,c)};function ke(r,c){ve.call(this),this.g=new Ao(c),this.l=r,this.h=c&&c.messageUrlParams||null,r=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(r?r["X-WebChannel-Content-Type"]=c.messageContentType:r={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(r?r["X-WebChannel-Client-Profile"]=c.sa:r={"X-WebChannel-Client-Profile":c.sa}),this.g.U=r,(r=c&&c.Qb)&&!y(r)&&(this.g.u=r),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,r=this.h,r!==null&&c in r&&(r=this.h,c in r&&delete r[c])),this.j=new Kt(this)}m(ke,ve),ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ke.prototype.close=function(){Zi(this.g)},ke.prototype.o=function(r){var c=this.g;if(typeof r=="string"){var h={};h.__data__=r,r=h}else this.v&&(h={},h.__data__=Bi(r),r=h);c.i.push(new cd(c.Ya++,r)),c.I==3&&Cs(c)},ke.prototype.N=function(){this.g.l=null,delete this.j,Zi(this.g),delete this.g,ke.Z.N.call(this)};function Fo(r){$i.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var c=r.__sm__;if(c){e:{for(const h in c){r=h;break e}r=void 0}(this.i=r)&&(r=this.i,c=c!==null&&r in c?c[r]:void 0),this.data=c}else this.data=r}m(Fo,$i);function Vo(){ji.call(this),this.status=1}m(Vo,ji);function Kt(r){this.g=r}m(Kt,Uo),Kt.prototype.ra=function(){Se(this.g,"a")},Kt.prototype.qa=function(r){Se(this.g,new Fo(r))},Kt.prototype.pa=function(r){Se(this.g,new Vo)},Kt.prototype.oa=function(){Se(this.g,"b")},ks.prototype.createWebChannel=ks.prototype.g,ke.prototype.send=ke.prototype.o,ke.prototype.open=ke.prototype.m,ke.prototype.close=ke.prototype.close,Vu=function(){return new ks},Fu=function(){return bs()},Uu=kt,Sr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Es.NO_ERROR=0,Es.TIMEOUT=8,Es.HTTP_ERROR=6,Us=Es,eo.COMPLETE="complete",Mu=eo,Qa.EventType=In,In.OPEN="a",In.CLOSE="b",In.ERROR="c",In.MESSAGE="d",ve.prototype.listen=ve.prototype.J,Bn=Qa,se.prototype.listenOnce=se.prototype.K,se.prototype.getLastError=se.prototype.Ha,se.prototype.getLastErrorCode=se.prototype.ya,se.prototype.getStatus=se.prototype.ca,se.prototype.getResponseJson=se.prototype.La,se.prototype.getResponseText=se.prototype.la,se.prototype.send=se.prototype.ea,se.prototype.setWithCredentials=se.prototype.Fa,Pu=se}).apply(typeof Ds<"u"?Ds:typeof self<"u"?self:typeof window<"u"?window:{});const Zo="@firebase/firestore",ec="4.9.2";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/const Vt=new zr("@firebase/firestore");function Qt(){return Vt.logLevel}function O(s,...e){if(Vt.logLevel<=j.DEBUG){const t=e.map(Kr);Vt.debug(`Firestore (${gn}): ${s}`,...t)}}function Je(s,...e){if(Vt.logLevel<=j.ERROR){const t=e.map(Kr);Vt.error(`Firestore (${gn}): ${s}`,...t)}}function on(s,...e){if(Vt.logLevel<=j.WARN){const t=e.map(Kr);Vt.warn(`Firestore (${gn}): ${s}`,...t)}}function Kr(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function M(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Bu(s,n,t)}function Bu(s,e,t){let n=`FIRESTORE (${gn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Je(n),new Error(n)}function W(s,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,s||Bu(e,i,n)}function V(s,e){return s}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/class $u{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(be.UNAUTHENTICATED))}shutdown(){}}class gp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class yp{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0,42304);let n=this.i;const i=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let a=new Qe;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Qe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=a;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},u=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Qe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(W(typeof n.accessToken=="string",31837,{l:n}),new $u(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{h:e}),new be(e)}}class vp{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=be.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class wp{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new vp(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bp{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ve(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){W(this.o===void 0,3512);const n=a=>{a.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const o=a.token!==this.m;return this.m=a.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>n(a))};const i=a=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>i(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new tc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new tc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ep(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wr{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Ep(40);for(let a=0;a<i.length;++a)n.length<20&&i[a]<t&&(n+=e.charAt(i[a]%62))}return n}}function q(s,e){return s<e?-1:s>e?1:0}function Ir(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const i=s.charAt(n),a=e.charAt(n);if(i!==a)return lr(i)===lr(a)?q(i,a):lr(i)?1:-1}return q(s.length,e.length)}const Tp=55296,Sp=57343;function lr(s){const e=s.charCodeAt(0);return e>=Tp&&e<=Sp}function cn(s,e,t){return s.length===e.length&&s.every((n,i)=>t(n,e[i]))}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const nc="__name__";class Ue{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&M(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ue.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ue?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const a=Ue.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return q(e.length,t.length)}static compareSegments(e,t){const n=Ue.isNumericId(e),i=Ue.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?Ue.extractNumericId(e).compare(Ue.extractNumericId(t)):Ir(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vt.fromString(e.substring(4,e.length-2))}}class Q extends Ue{construct(e,t,n){return new Q(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new D(A.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new Q(t)}static emptyPath(){return new Q([])}}const Ip=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends Ue{construct(e,t,n){return new ge(e,t,n)}static isValidIdentifier(e){return Ip.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===nc}static keyField(){return new ge([nc])}static fromServerFormat(e){const t=[];let n="",i=0;const a=()=>{if(n.length===0)throw new D(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new D(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,i+=2}else u==="`"?(o=!o,i++):u!=="."||o?(n+=u,i++):(a(),i++)}if(a(),o)throw new D(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function ju(s,e,t){if(!t)throw new D(A.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function _p(s,e,t,n){if(e===!0&&n===!0)throw new D(A.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function sc(s){if(!P.isDocumentKey(s))throw new D(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function ic(s){if(P.isDocumentKey(s))throw new D(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function qu(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function pi(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":M(12329,{type:typeof s})}function Ye(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new D(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pi(s);throw new D(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
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
*/function ce(s,e){const t={typeString:s};return e&&(t.value=e),t}function os(s,e){if(!qu(s))throw new D(A.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,a="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const o=s[n];if(i&&typeof o!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(a!==void 0&&o!==a.value){t=`Expected '${n}' field to equal '${a.value}'`;break}}if(t)throw new D(A.INVALID_ARGUMENT,t);return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const rc=-62135596800,ac=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*ac);return new Y(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<rc)throw new D(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ac}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(os(e,Y._jsonSchema))return new Y(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-rc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:ce("string",Y._jsonSchemaVersion),seconds:ce("number"),nanoseconds:ce("number")};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/const Jn=-1;function Ap(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,i=F.fromTimestamp(n===1e9?new Y(t+1,0):new Y(t,n));return new bt(i,P.empty(),e)}function Cp(s){return new bt(s.readTime,s.key,Jn)}class bt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new bt(F.min(),P.empty(),Jn)}static max(){return new bt(F.max(),P.empty(),Jn)}}function xp(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=P.comparator(s.documentKey,e.documentKey),t!==0?t:q(s.largestBatchId,e.largestBatchId))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const kp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Np{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function yn(s){if(s.code!==A.FAILED_PRECONDITION||s.message!==kp)throw s;O("LocalStore","Unexpectedly lost primary lease")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((n,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(n,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,n)=>{t(e)})}static reject(e){return new C((t,n)=>{n(e)})}static waitFor(e){return new C((t,n)=>{let i=0,a=0,o=!1;e.forEach(u=>{++i,u.next(()=>{++a,o&&a===i&&t()},l=>n(l))}),o=!0,a===i&&t()})}static or(e){let t=C.resolve(!1);for(const n of e)t=t.next(i=>i?C.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,a)=>{n.push(t.call(this,i,a))}),this.waitFor(n)}static mapArray(e,t){return new C((n,i)=>{const a=e.length,o=new Array(a);let u=0;for(let l=0;l<a;l++){const d=l;t(e[d]).next(p=>{o[d]=p,++u,u===a&&n(o)},p=>i(p))}})}static doWhile(e,t){return new C((n,i)=>{const a=()=>{e()===!0?t().next(()=>{a()},i):n()};a()})}}function Dp(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function vn(s){return s.name==="IndexedDbTransactionError"}/**
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
*/class mi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}mi.ce=-1;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Qr=-1;function gi(s){return s==null}function Xs(s){return s===0&&1/s==-1/0}function Rp(s){return typeof s=="number"&&Number.isInteger(s)&&!Xs(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const zu="";function Lp(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=oc(e)),e=Op(s.get(t),e);return oc(e)}function Op(s,e){let t=e;const n=s.length;for(let i=0;i<n;i++){const a=s.charAt(i);switch(a){case"\0":t+="";break;case zu:t+="";break;default:t+=a}}return t}function oc(s){return s+zu+""}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function cc(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function At(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function Hu(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class te{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rs(this.root,e,this.comparator,!0)}}class Rs{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?n(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,n,i,a){this.key=e,this.value=t,this.color=n??me.RED,this.left=i??me.EMPTY,this.right=a??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,a){return new me(e??this.key,t??this.value,n??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const a=n(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,n),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return me.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(s,e,t,n,i){return this}insert(s,e,t){return new me(s,e)}remove(s,e){return this}isEmpty(){return!0}inorderTraversal(s){return!1}reverseTraversal(s){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class de{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uc(this.data.getIterator())}getIteratorFrom(e){return new uc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=n.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class uc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(n){try{return atob(n)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Gu("Invalid base64 string: "+i):i}}(e);return new ye(t)}static fromUint8Array(e){const t=function(n){let i="";for(let a=0;a<n.length;++a)i+=String.fromCharCode(n[a]);return i}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const Pp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(s){if(W(!!s,39018),typeof s=="string"){let e=0;const t=Pp.exec(s);if(W(!!t,46558,{timestamp:s}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:re(s.seconds),nanos:re(s.nanos)}}function re(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Tt(s){return typeof s=="string"?ye.fromBase64String(s):ye.fromUint8Array(s)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ku="server_timestamp",Wu="__type__",Qu="__previous_value__",Xu="__local_write_time__";function Xr(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)==null?void 0:e.fields)||{})[Wu])==null?void 0:t.stringValue)===Ku}function yi(s){const e=s.mapValue.fields[Qu];return Xr(e)?yi(e):e}function Yn(s){const e=Et(s.mapValue.fields[Xu].timestampValue);return new Y(e.seconds,e.nanos)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Mp{constructor(e,t,n,i,a,o,u,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=a,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=p}}const Js="(default)";class Zn{constructor(e,t){this.projectId=e,this.database=t||Js}static empty(){return new Zn("","")}get isDefaultDatabase(){return this.database===Js}isEqual(e){return e instanceof Zn&&e.projectId===this.projectId&&e.database===this.database}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Ju="__type__",Up="__max__",Ls={mapValue:{}},Yu="__vector__",Ys="value";function St(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Xr(s)?4:Vp(s)?9007199254740991:Fp(s)?10:11:M(28295,{value:s})}function Ge(s,e){if(s===e)return!0;const t=St(s);if(t!==St(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return Yn(s).isEqual(Yn(e));case 3:return function(n,i){if(typeof n.timestampValue=="string"&&typeof i.timestampValue=="string"&&n.timestampValue.length===i.timestampValue.length)return n.timestampValue===i.timestampValue;const a=Et(n.timestampValue),o=Et(i.timestampValue);return a.seconds===o.seconds&&a.nanos===o.nanos}(s,e);case 5:return s.stringValue===e.stringValue;case 6:return function(n,i){return Tt(n.bytesValue).isEqual(Tt(i.bytesValue))}(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return function(n,i){return re(n.geoPointValue.latitude)===re(i.geoPointValue.latitude)&&re(n.geoPointValue.longitude)===re(i.geoPointValue.longitude)}(s,e);case 2:return function(n,i){if("integerValue"in n&&"integerValue"in i)return re(n.integerValue)===re(i.integerValue);if("doubleValue"in n&&"doubleValue"in i){const a=re(n.doubleValue),o=re(i.doubleValue);return a===o?Xs(a)===Xs(o):isNaN(a)&&isNaN(o)}return!1}(s,e);case 9:return cn(s.arrayValue.values||[],e.arrayValue.values||[],Ge);case 10:case 11:return function(n,i){const a=n.mapValue.fields||{},o=i.mapValue.fields||{};if(cc(a)!==cc(o))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(o[u]===void 0||!Ge(a[u],o[u])))return!1;return!0}(s,e);default:return M(52216,{left:s})}}function es(s,e){return(s.values||[]).find(t=>Ge(t,e))!==void 0}function un(s,e){if(s===e)return 0;const t=St(s),n=St(e);if(t!==n)return q(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(s.booleanValue,e.booleanValue);case 2:return function(i,a){const o=re(i.integerValue||i.doubleValue),u=re(a.integerValue||a.doubleValue);return o<u?-1:o>u?1:o===u?0:isNaN(o)?isNaN(u)?0:-1:1}(s,e);case 3:return lc(s.timestampValue,e.timestampValue);case 4:return lc(Yn(s),Yn(e));case 5:return Ir(s.stringValue,e.stringValue);case 6:return function(i,a){const o=Tt(i),u=Tt(a);return o.compareTo(u)}(s.bytesValue,e.bytesValue);case 7:return function(i,a){const o=i.split("/"),u=a.split("/");for(let l=0;l<o.length&&l<u.length;l++){const d=q(o[l],u[l]);if(d!==0)return d}return q(o.length,u.length)}(s.referenceValue,e.referenceValue);case 8:return function(i,a){const o=q(re(i.latitude),re(a.latitude));return o!==0?o:q(re(i.longitude),re(a.longitude))}(s.geoPointValue,e.geoPointValue);case 9:return hc(s.arrayValue,e.arrayValue);case 10:return function(i,a){var o,u,l,d;const p=i.fields||{},m=a.fields||{},I=(o=p[Ys])==null?void 0:o.arrayValue,x=(u=m[Ys])==null?void 0:u.arrayValue,N=q(((l=I==null?void 0:I.values)==null?void 0:l.length)||0,((d=x==null?void 0:x.values)==null?void 0:d.length)||0);return N!==0?N:hc(I,x)}(s.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ls.mapValue&&a===Ls.mapValue)return 0;if(i===Ls.mapValue)return 1;if(a===Ls.mapValue)return-1;const o=i.fields||{},u=Object.keys(o),l=a.fields||{},d=Object.keys(l);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=Ir(u[p],d[p]);if(m!==0)return m;const I=un(o[u[p]],l[d[p]]);if(I!==0)return I}return q(u.length,d.length)}(s.mapValue,e.mapValue);default:throw M(23264,{he:t})}}function lc(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return q(s,e);const t=Et(s),n=Et(e),i=q(t.seconds,n.seconds);return i!==0?i:q(t.nanos,n.nanos)}function hc(s,e){const t=s.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const a=un(t[i],n[i]);if(a)return a}return q(t.length,n.length)}function ln(s){return _r(s)}function _r(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(e){const t=Et(e);return`time(${t.seconds},${t.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(e){return Tt(e).toBase64()}(s.bytesValue):"referenceValue"in s?function(e){return P.fromName(e).toString()}(s.referenceValue):"geoPointValue"in s?function(e){return`geo(${e.latitude},${e.longitude})`}(s.geoPointValue):"arrayValue"in s?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=_r(i);return t+"]"}(s.arrayValue):"mapValue"in s?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const a of t)i?i=!1:n+=",",n+=`${a}:${_r(e.fields[a])}`;return n+"}"}(s.mapValue):M(61005,{value:s})}function Fs(s){switch(St(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=yi(s);return e?16+Fs(e):16;case 5:return 2*s.stringValue.length;case 6:return Tt(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce((n,i)=>n+Fs(i),0)}(s.arrayValue);case 10:case 11:return function(t){let n=0;return At(t.fields,(i,a)=>{n+=i.length+Fs(a)}),n}(s.mapValue);default:throw M(13486,{value:s})}}function dc(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function Ar(s){return!!s&&"integerValue"in s}function Jr(s){return!!s&&"arrayValue"in s}function fc(s){return!!s&&"nullValue"in s}function pc(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function Vs(s){return!!s&&"mapValue"in s}function Fp(s){var e,t;return((t=(((e=s==null?void 0:s.mapValue)==null?void 0:e.fields)||{})[Ju])==null?void 0:t.stringValue)===Yu}function Hn(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return At(s.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Hn(n)),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Hn(s.arrayValue.values[t]);return e}return{...s}}function Vp(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===Up}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xe{constructor(e){this.value=e}static empty(){return new xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Vs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hn(t)}setAll(e){let t=ge.emptyPath(),n={},i=[];e.forEach((o,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,n,i),n={},i=[],t=u.popLast()}o?n[u.lastSegment()]=Hn(o):i.push(u.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,n,i)}delete(e){const t=this.field(e.popLast());Vs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ge(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Vs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){At(t,(i,a)=>e[i]=a);for(const i of n)delete e[i]}clone(){return new xe(Hn(this.value))}}function Zu(s){const e=[];return At(s.fields,(t,n)=>{const i=new ge([t]);if(Vs(n)){const a=Zu(n.mapValue).fields;if(a.length===0)e.push(i);else for(const o of a)e.push(i.child(o))}else e.push(i)}),new Ne(e)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ee{constructor(e,t,n,i,a,o,u){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=a,this.data=o,this.documentState=u}static newInvalidDocument(e){return new Ee(e,0,F.min(),F.min(),F.min(),xe.empty(),0)}static newFoundDocument(e,t,n,i){return new Ee(e,1,t,F.min(),n,i,0)}static newNoDocument(e,t){return new Ee(e,2,t,F.min(),F.min(),xe.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,F.min(),F.min(),xe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
*/class Zs{constructor(e,t){this.position=e,this.inclusive=t}}function mc(s,e,t){let n=0;for(let i=0;i<s.position.length;i++){const a=e[i],o=s.position[i];if(a.field.isKeyField()?n=P.comparator(P.fromName(o.referenceValue),t.key):n=un(o,t.data.field(a.field)),a.dir==="desc"&&(n*=-1),n!==0)break}return n}function gc(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!Ge(s.position[t],e.position[t]))return!1;return!0}/**
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
*/class ts{constructor(e,t="asc"){this.field=e,this.dir=t}}function Bp(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
*/class el{}class oe extends el{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new jp(e,t,n):t==="array-contains"?new Hp(e,n):t==="in"?new Gp(e,n):t==="not-in"?new Kp(e,n):t==="array-contains-any"?new Wp(e,n):new oe(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new qp(e,n):new zp(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(un(t,this.value)):t!==null&&St(this.value)===St(t)&&this.matchesComparison(un(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Oe extends el{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Oe(e,t)}matches(e){return tl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function tl(s){return s.op==="and"}function nl(s){return $p(s)&&tl(s)}function $p(s){for(const e of s.filters)if(e instanceof Oe)return!1;return!0}function Cr(s){if(s instanceof oe)return s.field.canonicalString()+s.op.toString()+ln(s.value);if(nl(s))return s.filters.map(e=>Cr(e)).join(",");{const e=s.filters.map(t=>Cr(t)).join(",");return`${s.op}(${e})`}}function sl(s,e){return s instanceof oe?function(t,n){return n instanceof oe&&t.op===n.op&&t.field.isEqual(n.field)&&Ge(t.value,n.value)}(s,e):s instanceof Oe?function(t,n){return n instanceof Oe&&t.op===n.op&&t.filters.length===n.filters.length?t.filters.reduce((i,a,o)=>i&&sl(a,n.filters[o]),!0):!1}(s,e):void M(19439)}function il(s){return s instanceof oe?function(e){return`${e.field.canonicalString()} ${e.op} ${ln(e.value)}`}(s):s instanceof Oe?function(e){return e.op.toString()+" {"+e.getFilters().map(il).join(" ,")+"}"}(s):"Filter"}class jp extends oe{constructor(e,t,n){super(e,t,n),this.key=P.fromName(n.referenceValue)}matches(e){const t=P.comparator(e.key,this.key);return this.matchesComparison(t)}}class qp extends oe{constructor(e,t){super(e,"in",t),this.keys=rl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class zp extends oe{constructor(e,t){super(e,"not-in",t),this.keys=rl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rl(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>P.fromName(n.referenceValue))}class Hp extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jr(t)&&es(t.arrayValue,this.value)}}class Gp extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&es(this.value.arrayValue,t)}}class Kp extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(es(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!es(this.value.arrayValue,t)}}class Wp extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>es(this.value.arrayValue,n))}}/**
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
*/class Qp{constructor(e,t=null,n=[],i=[],a=null,o=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=a,this.startAt=o,this.endAt=u,this.Te=null}}function yc(s,e=null,t=[],n=[],i=null,a=null,o=null){return new Qp(s,e,t,n,i,a,o)}function Yr(s){const e=V(s);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Cr(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),gi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ln(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ln(n)).join(",")),e.Te=t}return e.Te}function Zr(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!Bp(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!sl(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!gc(s.startAt,e.startAt)&&gc(s.endAt,e.endAt)}function xr(s){return P.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wn{constructor(e,t=null,n=[],i=[],a=null,o="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=a,this.limitType=o,this.startAt=u,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Xp(s,e,t,n,i,a,o,u){return new wn(s,e,t,n,i,a,o,u)}function ea(s){return new wn(s)}function vc(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function al(s){return s.collectionGroup!==null}function Gn(s){const e=V(s);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(i){let a=new de(ge.comparator);return i.filters.forEach(o=>{o.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ts(i,n))}),t.has(ge.keyField().canonicalString())||e.Ie.push(new ts(ge.keyField(),n))}return e.Ie}function Be(s){const e=V(s);return e.Ee||(e.Ee=Jp(e,Gn(s))),e.Ee}function Jp(s,e){if(s.limitType==="F")return yc(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map(i=>{const a=i.dir==="desc"?"asc":"desc";return new ts(i.field,a)});const t=s.endAt?new Zs(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new Zs(s.startAt.position,s.startAt.inclusive):null;return yc(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function kr(s,e){const t=s.filters.concat([e]);return new wn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function Nr(s,e,t){return new wn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function vi(s,e){return Zr(Be(s),Be(e))&&s.limitType===e.limitType}function ol(s){return`${Yr(Be(s))}|lt:${s.limitType}`}function Xt(s){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>il(n)).join(", ")}]`),gi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ln(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ln(n)).join(",")),`Target(${t})`}(Be(s))}; limitType=${s.limitType})`}function wi(s,e){return e.isFoundDocument()&&function(t,n){const i=n.key.path;return t.collectionGroup!==null?n.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):P.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(s,e)&&function(t,n){for(const i of Gn(t))if(!i.field.isKeyField()&&n.data.field(i.field)===null)return!1;return!0}(s,e)&&function(t,n){for(const i of t.filters)if(!i.matches(n))return!1;return!0}(s,e)&&function(t,n){return!(t.startAt&&!function(i,a,o){const u=mc(i,a,o);return i.inclusive?u<=0:u<0}(t.startAt,Gn(t),n)||t.endAt&&!function(i,a,o){const u=mc(i,a,o);return i.inclusive?u>=0:u>0}(t.endAt,Gn(t),n))}(s,e)}function Yp(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function cl(s){return(e,t)=>{let n=!1;for(const i of Gn(s)){const a=Zp(i,e,t);if(a!==0)return a;n=n||i.field.isKeyField()}return 0}}function Zp(s,e,t){const n=s.field.isKeyField()?P.comparator(e.key,t.key):function(i,a,o){const u=a.data.field(i),l=o.data.field(i);return u!==null&&l!==null?un(u,l):M(42886)}(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:s.dir})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class jt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,a]of n)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){At(this.inner,(t,n)=>{for(const[i,a]of n)e(i,a)})}isEmpty(){return Hu(this.inner)}size(){return this.innerSize}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const em=new te(P.comparator);function Ze(){return em}const ul=new te(P.comparator);function $n(...s){let e=ul;for(const t of s)e=e.insert(t.key,t);return e}function ll(s){let e=ul;return s.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Ot(){return Kn()}function hl(){return Kn()}function Kn(){return new jt(s=>s.toString(),(s,e)=>s.isEqual(e))}const tm=new te(P.comparator),nm=new de(P.comparator);function z(...s){let e=nm;for(const t of s)e=e.add(t);return e}const sm=new de(q);function im(){return sm}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ta(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xs(e)?"-0":e}}function dl(s){return{integerValue:""+s}}function rm(s,e){return Rp(e)?dl(e):ta(s,e)}/**
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
*/class bi{constructor(){this._=void 0}}function am(s,e,t){return s instanceof ei?function(n,i){const a={fields:{[Wu]:{stringValue:Ku},[Xu]:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return i&&Xr(i)&&(i=yi(i)),i&&(a.fields[Qu]=i),{mapValue:a}}(t,e):s instanceof ns?pl(s,e):s instanceof ss?ml(s,e):function(n,i){const a=fl(n,i),o=wc(a)+wc(n.Ae);return Ar(a)&&Ar(n.Ae)?dl(o):ta(n.serializer,o)}(s,e)}function om(s,e,t){return s instanceof ns?pl(s,e):s instanceof ss?ml(s,e):t}function fl(s,e){return s instanceof ti?function(t){return Ar(t)||function(n){return!!n&&"doubleValue"in n}(t)}(e)?e:{integerValue:0}:null}class ei extends bi{}class ns extends bi{constructor(e){super(),this.elements=e}}function pl(s,e){const t=gl(e);for(const n of s.elements)t.some(i=>Ge(i,n))||t.push(n);return{arrayValue:{values:t}}}class ss extends bi{constructor(e){super(),this.elements=e}}function ml(s,e){let t=gl(e);for(const n of s.elements)t=t.filter(i=>!Ge(i,n));return{arrayValue:{values:t}}}class ti extends bi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function wc(s){return re(s.integerValue||s.doubleValue)}function gl(s){return Jr(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function cm(s,e){return s.field.isEqual(e.field)&&function(t,n){return t instanceof ns&&n instanceof ns||t instanceof ss&&n instanceof ss?cn(t.elements,n.elements,Ge):t instanceof ti&&n instanceof ti?Ge(t.Ae,n.Ae):t instanceof ei&&n instanceof ei}(s.transform,e.transform)}class um{constructor(e,t){this.version=e,this.transformResults=t}}class Le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bs(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Ei{}function yl(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new na(s.key,Le.none()):new cs(s.key,s.data,Le.none());{const t=s.data,n=xe.empty();let i=new de(ge.comparator);for(let a of e.fields)if(!i.has(a)){let o=t.field(a);o===null&&a.length>1&&(a=a.popLast(),o=t.field(a)),o===null?n.delete(a):n.set(a,o),i=i.add(a)}return new Ct(s.key,n,new Ne(i.toArray()),Le.none())}}function lm(s,e,t){s instanceof cs?function(n,i,a){const o=n.value.clone(),u=Ec(n.fieldTransforms,i,a.transformResults);o.setAll(u),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()}(s,e,t):s instanceof Ct?function(n,i,a){if(!Bs(n.precondition,i))return void i.convertToUnknownDocument(a.version);const o=Ec(n.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(vl(n)),u.setAll(o),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(s,e,t):function(n,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Wn(s,e,t,n){return s instanceof cs?function(i,a,o,u){if(!Bs(i.precondition,a))return o;const l=i.value.clone(),d=Tc(i.fieldTransforms,u,a);return l.setAll(d),a.convertToFoundDocument(a.version,l).setHasLocalMutations(),null}(s,e,t,n):s instanceof Ct?function(i,a,o,u){if(!Bs(i.precondition,a))return o;const l=Tc(i.fieldTransforms,u,a),d=a.data;return d.setAll(vl(i)),d.setAll(l),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(s,e,t,n):function(i,a,o){return Bs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):o}(s,e,t)}function hm(s,e){let t=null;for(const n of s.fieldTransforms){const i=e.data.field(n.field),a=fl(n.transform,i||null);a!=null&&(t===null&&(t=xe.empty()),t.set(n.field,a))}return t||null}function bc(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!function(t,n){return t===void 0&&n===void 0||!(!t||!n)&&cn(t,n,(i,a)=>cm(i,a))}(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class cs extends Ei{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ct extends Ei{constructor(e,t,n,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function vl(s){const e=new Map;return s.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}}),e}function Ec(s,e,t){const n=new Map;W(s.length===t.length,32656,{Re:t.length,Ve:s.length});for(let i=0;i<t.length;i++){const a=s[i],o=a.transform,u=e.data.field(a.field);n.set(a.field,om(o,u,t[i]))}return n}function Tc(s,e,t){const n=new Map;for(const i of s){const a=i.transform,o=t.data.field(i.field);n.set(i.field,am(a,o,e))}return n}class na extends Ei{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dm extends Ei{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fm{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&lm(a,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Wn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Wn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=hl();return this.mutations.forEach(i=>{const a=e.get(i.key),o=a.overlayedDocument;let u=this.applyToLocalView(o,a.mutatedFields);u=t.has(i.key)?null:u;const l=yl(o,u);l!==null&&n.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&cn(this.mutations,e.mutations,(t,n)=>bc(t,n))&&cn(this.baseMutations,e.baseMutations,(t,n)=>bc(t,n))}}class sa{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){W(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let i=function(){return tm}();const a=e.mutations;for(let o=0;o<a.length;o++)i=i.insert(a[o].key,n[o].version);return new sa(e,t,n,i)}}/**
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
*/class pm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
*/class mm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ae,H;function gm(s){switch(s){case A.OK:return M(64938);case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0;default:return M(15467,{code:s})}}function wl(s){if(s===void 0)return Je("GRPC error has no .code"),A.UNKNOWN;switch(s){case ae.OK:return A.OK;case ae.CANCELLED:return A.CANCELLED;case ae.UNKNOWN:return A.UNKNOWN;case ae.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case ae.INTERNAL:return A.INTERNAL;case ae.UNAVAILABLE:return A.UNAVAILABLE;case ae.UNAUTHENTICATED:return A.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case ae.NOT_FOUND:return A.NOT_FOUND;case ae.ALREADY_EXISTS:return A.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return A.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case ae.ABORTED:return A.ABORTED;case ae.OUT_OF_RANGE:return A.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return A.UNIMPLEMENTED;case ae.DATA_LOSS:return A.DATA_LOSS;default:return M(39323,{code:s})}}(H=ae||(ae={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
*/function ym(){return new TextEncoder}/**
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
*/const vm=new vt([4294967295,4294967295],0);function Sc(s){const e=ym().encode(s),t=new Ou;return t.update(e),new Uint8Array(t.digest())}function Ic(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new vt([t,n],0),new vt([i,a],0)]}class ia{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new jn(`Invalid padding: ${t}`);if(n<0)throw new jn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new jn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new jn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vt.fromNumber(this.ge)}ye(e,t,n){let i=e.add(t.multiply(vt.fromNumber(n)));return i.compare(vm)===1&&(i=new vt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Sc(e),[n,i]=Ic(t);for(let a=0;a<this.hashCount;a++){const o=this.ye(n,i,a);if(!this.we(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),o=new ia(a,i,t);return n.forEach(u=>o.insert(u)),o}insert(e){if(this.ge===0)return;const t=Sc(e),[n,i]=Ic(t);for(let a=0;a<this.hashCount;a++){const o=this.ye(n,i,a);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class jn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ti{constructor(e,t,n,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,us.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ti(F.min(),i,new te(q),Ze(),z())}}class us{constructor(e,t,n,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new us(n,t,z(),z(),z())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $s{constructor(e,t,n,i){this.be=e,this.removedTargetIds=t,this.key=n,this.De=i}}class bl{constructor(e,t){this.targetId=e,this.Ce=t}}class El{constructor(e,t,n=ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class _c{constructor(){this.ve=0,this.Fe=Ac(),this.Me=ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=z(),t=z(),n=z();return this.Fe.forEach((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:M(38017,{changeType:a})}}),new us(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Ac()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,W(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class wm{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ze(),this.Je=Os(),this.He=Os(),this.Ye=new te(q)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:M(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,i)=>{this.rt(i)&&t(i)})}st(e){const t=e.targetId,n=e.Ce.count,i=this.ot(t);if(i){const a=i.target;if(xr(a))if(n===0){const o=new P(a.path);this.et(t,o,Ee.newNoDocument(o,F.min()))}else W(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const u=this.ut(e),l=u?this.ct(u,e,o):1;if(l!==0){this.it(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:a=0}=t;let o,u;try{o=Tt(n).toUint8Array()}catch(l){if(l instanceof Gu)return on("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new ia(o,i,a)}catch(l){return on(l instanceof jn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.ge===0?null:u}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let i=0;return n.forEach(a=>{const o=this.Ge.ht(),u=`projects/${o.projectId}/databases/${o.database}/documents/${a.path.canonicalString()}`;e.mightContain(u)||(this.et(t,a,null),i++)}),i}Tt(e){const t=new Map;this.ze.forEach((a,o)=>{const u=this.ot(o);if(u){if(a.current&&xr(u.target)){const l=new P(u.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Ee.newNoDocument(l,e))}a.Be&&(t.set(o,a.ke()),a.qe())}});let n=z();this.He.forEach((a,o)=>{let u=!0;o.forEachWhile(l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(a))}),this.je.forEach((a,o)=>o.setReadTime(e));const i=new Ti(e,t,this.Ye,this.je,n);return this.je=Ze(),this.Je=Os(),this.He=Os(),this.Ye=new te(q),i}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new _c,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new de(q),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new de(q),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _c),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Os(){return new te(P.comparator)}function Ac(){return new te(P.comparator)}const bm={asc:"ASCENDING",desc:"DESCENDING"},Em={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tm={and:"AND",or:"OR"};class Sm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Dr(s,e){return s.useProto3Json||gi(e)?e:{value:e}}function ni(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tl(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function Im(s,e){return ni(s,e.toTimestamp())}function $e(s){return W(!!s,49232),F.fromTimestamp(function(e){const t=Et(e);return new Y(t.seconds,t.nanos)}(s))}function ra(s,e){return Rr(s,e).canonicalString()}function Rr(s,e){const t=function(n){return new Q(["projects",n.projectId,"databases",n.database])}(s).child("documents");return e===void 0?t:t.child(e)}function Sl(s){const e=Q.fromString(s);return W(xl(e),10190,{key:e.toString()}),e}function Lr(s,e){return ra(s.databaseId,e.path)}function hr(s,e){const t=Sl(e);if(t.get(1)!==s.databaseId.projectId)throw new D(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new D(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new P(_l(t))}function Il(s,e){return ra(s.databaseId,e)}function _m(s){const e=Sl(s);return e.length===4?Q.emptyPath():_l(e)}function Or(s){return new Q(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function _l(s){return W(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function Cc(s,e,t){return{name:Lr(s,e),fields:t.value.mapValue.fields}}function Am(s,e){let t;if("targetChange"in e){e.targetChange;const n=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:M(39313,{state:l})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=function(l,d){return l.useProto3Json?(W(d===void 0||typeof d=="string",58123),ye.fromBase64String(d||"")):(W(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ye.fromUint8Array(d||new Uint8Array))}(s,e.targetChange.resumeToken),o=e.targetChange.cause,u=o&&function(l){const d=l.code===void 0?A.UNKNOWN:wl(l.code);return new D(d,l.message||"")}(o);t=new El(n,i,a,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=hr(s,n.document.name),a=$e(n.document.updateTime),o=n.document.createTime?$e(n.document.createTime):F.min(),u=new xe({mapValue:{fields:n.document.fields}}),l=Ee.newFoundDocument(i,a,o,u),d=n.targetIds||[],p=n.removedTargetIds||[];t=new $s(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=hr(s,n.document),a=n.readTime?$e(n.readTime):F.min(),o=Ee.newNoDocument(i,a),u=n.removedTargetIds||[];t=new $s([],u,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=hr(s,n.document),a=n.removedTargetIds||[];t=new $s([],a,i,null)}else{if(!("filter"in e))return M(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:a}=n,o=new mm(i,a),u=n.targetId;t=new bl(u,o)}}return t}function Cm(s,e){let t;if(e instanceof cs)t={update:Cc(s,e.key,e.value)};else if(e instanceof na)t={delete:Lr(s,e.key)};else if(e instanceof Ct)t={update:Cc(s,e.key,e.data),updateMask:Mm(e.fieldMask)};else{if(!(e instanceof dm))return M(16599,{Vt:e.type});t={verify:Lr(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,a){const o=a.transform;if(o instanceof ei)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ns)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ss)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ti)return{fieldPath:a.field.canonicalString(),increment:o.Ae};throw M(20930,{transform:a.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(n,i){return i.updateTime!==void 0?{updateTime:Im(n,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M(27497)}(s,e.precondition)),t}function xm(s,e){return s&&s.length>0?(W(e!==void 0,14353),s.map(t=>function(n,i){let a=n.updateTime?$e(n.updateTime):$e(i);return a.isEqual(F.min())&&(a=$e(i)),new um(a,n.transformResults||[])}(t,e))):[]}function km(s,e){return{documents:[Il(s,e.path)]}}function Nm(s,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Il(s,i);const a=function(l){if(l.length!==0)return Cl(Oe.create(l,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const o=function(l){if(l.length!==0)return l.map(d=>function(p){return{field:Jt(p.field),direction:Lm(p.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const u=Dr(s,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ft:t,parent:i}}function Dm(s){let e=_m(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){W(n===1,65062);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let a=[];t.where&&(a=function(p){const m=Al(p);return m instanceof Oe&&nl(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(I){return new ts(Yt(I.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(m))}(t.orderBy));let u=null;t.limit&&(u=function(p){let m;return m=typeof p=="object"?p.value:p,gi(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(p){const m=!!p.before,I=p.values||[];return new Zs(I,m)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const m=!p.before,I=p.values||[];return new Zs(I,m)}(t.endAt)),Xp(e,i,o,a,u,"F",l,d)}function Rm(s,e){const t=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:n})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Al(s){return s.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Yt(e.unaryFilter.field);return oe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Yt(e.unaryFilter.field);return oe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yt(e.unaryFilter.field);return oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yt(e.unaryFilter.field);return oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(s):s.fieldFilter!==void 0?function(e){return oe.create(Yt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(e){return Oe.create(e.compositeFilter.filters.map(t=>Al(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(s):M(30097,{filter:s})}function Lm(s){return bm[s]}function Om(s){return Em[s]}function Pm(s){return Tm[s]}function Jt(s){return{fieldPath:s.canonicalString()}}function Yt(s){return ge.fromServerFormat(s.fieldPath)}function Cl(s){return s instanceof oe?function(e){if(e.op==="=="){if(pc(e.value))return{unaryFilter:{field:Jt(e.field),op:"IS_NAN"}};if(fc(e.value))return{unaryFilter:{field:Jt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(pc(e.value))return{unaryFilter:{field:Jt(e.field),op:"IS_NOT_NAN"}};if(fc(e.value))return{unaryFilter:{field:Jt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jt(e.field),op:Om(e.op),value:e.value}}}(s):s instanceof Oe?function(e){const t=e.getFilters().map(n=>Cl(n));return t.length===1?t[0]:{compositeFilter:{op:Pm(e.op),filters:t}}}(s):M(54877,{filter:s})}function Mm(s){const e=[];return s.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function xl(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pt{constructor(e,t,n,i,a=F.min(),o=F.min(),u=ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Um{constructor(e){this.yt=e}}function Fm(s){const e=Dm({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Nr(e,e.limit,"L"):e}/**
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
*/class Vm{constructor(){this.Cn=new Bm}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(bt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(bt.min())}updateCollectionGroup(e,t,n){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class Bm{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new de(Q.comparator),a=!i.has(n);return this.index[t]=i.add(n),a}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new de(Q.comparator)).toArray()}}/**
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
*/const xc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kl=41943040;class Ce{static withCacheSize(e){return new Ce(e,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/Ce.DEFAULT_COLLECTION_PERCENTILE=10,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ce.DEFAULT=new Ce(kl,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ce.DISABLED=new Ce(-1,0,0);/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/const kc="LruGarbageCollector",$m=1048576;function Nc([s,e],[t,n]){const i=q(s,t);return i===0?q(e,n):i}class jm{constructor(e){this.Ir=e,this.buffer=new de(Nc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Nc(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class qm{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){O(kc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){vn(t)?O(kc,"Ignoring IndexedDB error during garbage collection: ",t):await yn(t)}await this.Vr(3e5)})}}class zm{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return C.resolve(mi.ce);const n=new jm(t);return this.mr.forEachTarget(e,i=>n.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>n.Ar(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(xc)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xc):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,i,a,o,u,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(n=m,u=Date.now(),this.removeTargets(e,n,t))).next(m=>(a=m,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(m=>(d=Date.now(),Qt()<=j.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(u-o)+`ms
	Removed ${a} targets in `+(l-u)+`ms
	Removed ${m} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:m})))}}function Hm(s,e){return new zm(s,e)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Gm{constructor(){this.changes=new jt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?C.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/class Km{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wm{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&Wn(n.mutation,i,Ne.empty(),Y.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,z()).next(()=>n))}getLocalViewOfDocuments(e,t,n=z()){const i=Ot();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(a=>{let o=$n();return a.forEach((u,l)=>{o=o.insert(u,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=Ot();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,z()))}populateOverlays(e,t,n){const i=[];return n.forEach(a=>{t.has(a)||i.push(a)}),this.documentOverlayCache.getOverlays(e,i).next(a=>{a.forEach((o,u)=>{t.set(o,u)})})}computeViews(e,t,n,i){let a=Ze();const o=Kn(),u=function(){return Kn()}();return t.forEach((l,d)=>{const p=n.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Ct)?a=a.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),Wn(p.mutation,d,p.mutation.getFieldMask(),Y.now())):o.set(d.key,Ne.empty())}),this.recalculateAndSaveOverlays(e,a).next(l=>(l.forEach((d,p)=>o.set(d,p)),t.forEach((d,p)=>u.set(d,new Km(p,o.get(d)??null))),u))}recalculateAndSaveOverlays(e,t){const n=Kn();let i=new te((o,u)=>o-u),a=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const u of o)u.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let p=n.get(l)||Ne.empty();p=u.applyToLocalView(d,p),n.set(l,p);const m=(i.get(u.batchId)||z()).add(l);i=i.insert(u.batchId,m)})}).next(()=>{const o=[],u=i.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,p=l.value,m=hl();p.forEach(I=>{if(!a.has(I)){const x=yl(t.get(I),n.get(I));x!==null&&m.set(I,x),a=a.add(I)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return C.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(a){return P.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):al(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(a=>{const o=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-a.size):C.resolve(Ot());let u=Jn,l=a;return o.next(d=>C.forEach(d,(p,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),a.get(p)?C.resolve():this.remoteDocumentCache.getEntry(e,p).next(I=>{l=l.insert(p,I)}))).next(()=>this.populateOverlays(e,d,a)).next(()=>this.computeViews(e,l,d,z())).next(p=>({batchId:u,changes:ll(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new P(t)).next(n=>{let i=$n();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const a=t.collectionGroup;let o=$n();return this.indexManager.getCollectionParents(e,a).next(u=>C.forEach(u,l=>{const d=function(p,m){return new wn(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(a));return this.getDocumentsMatchingCollectionQuery(e,d,n,i).next(p=>{p.forEach((m,I)=>{o=o.insert(m,I)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(a=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,a,i))).next(o=>{a.forEach((l,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,Ee.newInvalidDocument(p)))});let u=$n();return o.forEach((l,d)=>{const p=a.get(l);p!==void 0&&Wn(p.mutation,d,Ne.empty(),Y.now()),wi(t,d)&&(u=u.insert(l,d))}),u})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Qm{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return C.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(n){return{id:n.id,version:n.version,createTime:$e(n.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(n){return{name:n.name,query:Fm(n.bundledQuery),readTime:$e(n.readTime)}}(t)),C.resolve()}}/**
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
*/class Xm{constructor(){this.overlays=new te(P.comparator),this.qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ot();return C.forEach(t,i=>this.getOverlay(e,i).next(a=>{a!==null&&n.set(i,a)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,a)=>{this.St(e,t,a)}),C.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.qr.get(n);return i!==void 0&&(i.forEach(a=>this.overlays=this.overlays.remove(a)),this.qr.delete(n)),C.resolve()}getOverlaysForCollection(e,t,n){const i=Ot(),a=t.length+1,o=new P(t.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===a&&l.largestBatchId>n&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let a=new te((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let p=a.get(d.largestBatchId);p===null&&(p=Ot(),a=a.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Ot(),l=a.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return C.resolve(u)}St(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new pm(t,n));let a=this.qr.get(t);a===void 0&&(a=z(),this.qr.set(t,a)),this.qr.set(t,a.add(n.key))}}/**
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
*/class Jm{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class aa{constructor(){this.Qr=new de(pe.$r),this.Ur=new de(pe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new pe(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Gr(new pe(e,t))}zr(e,t){e.forEach(n=>this.removeReference(n,t))}jr(e){const t=new P(new Q([])),n=new pe(t,e),i=new pe(t,e+1),a=[];return this.Ur.forEachInRange([n,i],o=>{this.Gr(o),a.push(o.key)}),a}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new P(new Q([])),n=new pe(t,e),i=new pe(t,e+1);let a=z();return this.Ur.forEachInRange([n,i],o=>{a=a.add(o.key)}),a}containsKey(e){const t=new pe(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class pe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return P.comparator(e.key,t.key)||q(e.Yr,t.Yr)}static Kr(e,t){return q(e.Yr,t.Yr)||P.comparator(e.key,t.key)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ym{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new de(pe.$r)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fm(a,t,n,i);this.mutationQueue.push(o);for(const u of i)this.Zr=this.Zr.add(new pe(u.key,a)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,t){return C.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ei(n),a=i<0?0:i;return C.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Qr:this.tr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new pe(t,0),i=new pe(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([n,i],o=>{const u=this.Xr(o.Yr);a.push(u)}),C.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new de(q);return t.forEach(i=>{const a=new pe(i,0),o=new pe(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,o],u=>{n=n.add(u.Yr)})}),C.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let a=n;P.isDocumentKey(a)||(a=a.child(""));const o=new pe(new P(a),0);let u=new de(q);return this.Zr.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(u=u.add(l.Yr)),!0)},o),C.resolve(this.ti(u))}ti(e){const t=[];return e.forEach(n=>{const i=this.Xr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){W(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return C.forEach(t.mutations,i=>{const a=new pe(i.key,t.batchId);return n=n.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new pe(t,0),i=this.Zr.firstAfterOrEqual(n);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zm{constructor(e){this.ri=e,this.docs=function(){return new te(P.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),a=i?i.size:0,o=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-a,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return C.resolve(n?n.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let n=Ze();return t.forEach(i=>{const a=this.docs.get(i);n=n.insert(i,a?a.document.mutableCopy():Ee.newInvalidDocument(i))}),C.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let a=Ze();const o=t.path,u=new P(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||xp(Cp(p),n)<=0||(i.has(p.key)||wi(t,p))&&(a=a.insert(p.key,p.mutableCopy()))}return C.resolve(a)}getAllFromCollectionGroup(e,t,n,i){M(9500)}ii(e,t){return C.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new eg(this)}getSize(e){return C.resolve(this.size)}}class eg extends Gm{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(n)}),C.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tg{constructor(e){this.persistence=e,this.si=new jt(t=>Yr(t),Zr),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.oi=0,this._i=new aa,this.targetCount=0,this.ai=hn.ur()}forEachTarget(e,t){return this.si.forEach((n,i)=>t(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),C.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new hn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Pr(t),C.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,n){let i=0;const a=[];return this.si.forEach((o,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.si.delete(o),a.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),C.waitFor(a).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return C.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),C.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach(o=>{a.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return C.resolve(n)}containsKey(e,t){return C.resolve(this._i.containsKey(t))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nl{constructor(e,t){this.ui={},this.overlays={},this.ci=new mi(0),this.li=!1,this.li=!0,this.hi=new Jm,this.referenceDelegate=e(this),this.Pi=new tg(this),this.indexManager=new Vm,this.remoteDocumentCache=function(n){return new Zm(n)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new Um(t),this.Ii=new Qm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new Ym(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){O("MemoryPersistence","Starting transaction:",e);const i=new ng(this.ci.next());return this.referenceDelegate.Ei(),n(i).next(a=>this.referenceDelegate.di(i).next(()=>a)).toPromise().then(a=>(i.raiseOnCommittedEvent(),a))}Ai(e,t){return C.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class ng extends Np{constructor(e){super(),this.currentSequenceNumber=e}}class oa{constructor(e){this.persistence=e,this.Ri=new aa,this.Vi=null}static mi(e){return new oa(e)}get fi(){if(this.Vi)return this.Vi;throw M(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),C.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(i=>this.fi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(a=>this.fi.add(a.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,n=>{const i=P.fromPath(n);return this.gi(e,i).next(a=>{a||t.removeEntry(i,F.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class si{constructor(e,t){this.persistence=e,this.pi=new jt(n=>Lp(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Hm(this,t)}static mi(e,t){return new si(e,t)}Ei(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}wr(e){let t=0;return this.pr(e,n=>{t++}).next(()=>t)}pr(e,t){return C.forEach(this.pi,(n,i)=>this.br(e,n,i).next(a=>a?C.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,t).next(u=>{u||(n++,a.removeEntry(o,F.min()))})).next(()=>a.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),C.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fs(e.data.value)),t}br(e,t,n){return C.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return C.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ca{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=i}static As(e,t){let n=z(),i=z();for(const a of t.docChanges)switch(a.type){case 0:n=n.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new ca(e,t.fromCache,n,i)}}/**
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
*/class sg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
*/class ig{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Xd()?8:Dp(Te())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,i){const a={result:null};return this.ys(e,t).next(o=>{a.result=o}).next(()=>{if(!a.result)return this.ws(e,t,i,n).next(o=>{a.result=o})}).next(()=>{if(a.result)return;const o=new sg;return this.Ss(e,t,o).next(u=>{if(a.result=u,this.Vs)return this.bs(e,t,o,u.size)})}).next(()=>a.result)}bs(e,t,n,i){return n.documentReadCount<this.fs?(Qt()<=j.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Xt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(Qt()<=j.DEBUG&&O("QueryEngine","Query:",Xt(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(Qt()<=j.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Xt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Be(t))):C.resolve())}ys(e,t){if(vc(t))return C.resolve(null);let n=Be(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Nr(t,null,"F"),n=Be(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(a=>{const o=z(...a);return this.ps.getDocuments(e,o).next(u=>this.indexManager.getMinOffset(e,n).next(l=>{const d=this.Ds(t,u);return this.Cs(t,d,o,l.readTime)?this.ys(e,Nr(t,null,"F")):this.vs(e,d,t,l)}))})))}ws(e,t,n,i){return vc(t)||i.isEqual(F.min())?C.resolve(null):this.ps.getDocuments(e,n).next(a=>{const o=this.Ds(t,a);return this.Cs(t,o,n,i)?C.resolve(null):(Qt()<=j.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xt(t)),this.vs(e,o,t,Ap(i,Jn)).next(u=>u))})}Ds(e,t){let n=new de(cl(e));return t.forEach((i,a)=>{wi(e,a)&&(n=n.add(a))}),n}Cs(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Ss(e,t,n){return Qt()<=j.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Xt(t)),this.ps.getDocumentsMatchingQuery(e,t,bt.min(),n)}vs(e,t,n,i){return this.ps.getDocumentsMatchingQuery(e,n,i).next(a=>(t.forEach(o=>{a=a.insert(o.key,o)}),a))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ua="LocalStore",rg=3e8;class ag{constructor(e,t,n,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new te(q),this.xs=new jt(a=>Yr(a),Zr),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wm(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function og(s,e,t,n){return new ag(s,e,t,n)}async function Dl(s,e){const t=V(s);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(a=>(i=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(n))).next(a=>{const o=[],u=[];let l=z();for(const d of i){o.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of a){u.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(n,l).next(d=>({Ls:d,removedBatchIds:o,addedBatchIds:u}))})})}function cg(s,e){const t=V(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return function(o,u,l,d){const p=l.batch,m=p.keys();let I=C.resolve();return m.forEach(x=>{I=I.next(()=>d.getEntry(u,x)).next(N=>{const L=l.docVersions.get(x);W(L!==null,48541),N.version.compareTo(L)<0&&(p.applyToRemoteDocument(N,l),N.isValidDocument()&&(N.setReadTime(l.commitVersion),d.addEntry(N)))})}),I.next(()=>o.mutationQueue.removeMutationBatch(u,p))}(t,n,e,a).next(()=>a.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(o){let u=z();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(u=u.add(o.batch.mutations[l].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function Rl(s){const e=V(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function ug(s,e){const t=V(s),n=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const u=[];e.targetChanges.forEach((p,m)=>{const I=i.get(m);if(!I)return;u.push(t.Pi.removeMatchingKeys(a,p.removedDocuments,m).next(()=>t.Pi.addMatchingKeys(a,p.addedDocuments,m)));let x=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(m)!==null?x=x.withResumeToken(ye.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(p.resumeToken,n)),i=i.insert(m,x),function(N,L,R){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=rg?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(I,x,p)&&u.push(t.Pi.updateTargetData(a,x))});let l=Ze(),d=z();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(a,p))}),u.push(lg(a,o,e.documentUpdates).next(p=>{l=p.ks,d=p.qs})),!n.isEqual(F.min())){const p=t.Pi.getLastRemoteSnapshotVersion(a).next(m=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,n));u.push(p)}return C.waitFor(u).next(()=>o.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,l,d)).next(()=>l)}).then(a=>(t.Ms=i,a))}function lg(s,e,t){let n=z(),i=z();return t.forEach(a=>n=n.add(a)),e.getEntries(s,n).next(a=>{let o=Ze();return t.forEach((u,l)=>{const d=a.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(u,l.readTime),o=o.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(u,l)):O(ua,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{ks:o,qs:i}})}function hg(s,e){const t=V(s);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Qr),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function dg(s,e){const t=V(s);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Pi.getTargetData(n,e).next(a=>a?(i=a,C.resolve(i)):t.Pi.allocateTargetId(n).next(o=>(i=new pt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.Ms.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n})}async function Pr(s,e,t){const n=V(s),i=n.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",a,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vn(o))throw o;O(ua,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ms=n.Ms.remove(e),n.xs.delete(i.target)}function Dc(s,e,t){const n=V(s);let i=F.min(),a=z();return n.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,d){const p=V(u),m=p.xs.get(d);return m!==void 0?C.resolve(p.Ms.get(m)):p.Pi.getTargetData(l,d)}(n,o,Be(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(o,u.targetId).next(l=>{a=l})}).next(()=>n.Fs.getDocumentsMatchingQuery(o,e,t?i:F.min(),t?a:z())).next(u=>(fg(n,Yp(e),u),{documents:u,Qs:a})))}function fg(s,e,t){let n=s.Os.get(e)||F.min();t.forEach((i,a)=>{a.readTime.compareTo(n)>0&&(n=a.readTime)}),s.Os.set(e,n)}class Rc{constructor(){this.activeTargetIds=im()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pg{constructor(){this.Mo=new Rc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Rc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
*/class mg{Oo(e){}shutdown(){}}/**
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
*/const Lc="ConnectivityMonitor";class Oc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){O(Lc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){O(Lc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
*/let Ps=null;function Mr(){return Ps===null?Ps=function(){return 268435456+Math.round(2147483648*Math.random())}():Ps++,"0x"+Ps.toString(16)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const dr="RestConnection",gg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yg{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===Js?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(e,t,n,i,a){const o=Mr(),u=this.zo(e,t.toUriEncodedString());O(dr,`Sending RPC '${e}' ${o}:`,u,n);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,i,a);const{host:d}=new URL(u),p=pn(d);return this.Jo(e,u,l,n,p).then(m=>(O(dr,`Received RPC '${e}' ${o}: `,m),m),m=>{throw on(dr,`RPC '${e}' ${o} failed with error: `,m,"url: ",u,"request:",n),m})}Ho(e,t,n,i,a,o){return this.Go(e,t,n,i,a)}jo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,a)=>e[a]=i),n&&n.headers.forEach((i,a)=>e[a]=i)}zo(e,t){const n=gg[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vg{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const we="WebChannelConnection";class wg extends yg{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,i,a){const o=Mr();return new Promise((u,l)=>{const d=new Pu;d.setWithCredentials(!0),d.listenOnce(Mu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Us.NO_ERROR:const m=d.getResponseJson();O(we,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),u(m);break;case Us.TIMEOUT:O(we,`RPC '${e}' ${o} timed out`),l(new D(A.DEADLINE_EXCEEDED,"Request time out"));break;case Us.HTTP_ERROR:const I=d.getStatus();if(O(we,`RPC '${e}' ${o} failed with status:`,I,"response text:",d.getResponseText()),I>0){let x=d.getResponseJson();Array.isArray(x)&&(x=x[0]);const N=x==null?void 0:x.error;if(N&&N.status&&N.message){const L=function(R){const B=R.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(B)>=0?B:A.UNKNOWN}(N.status);l(new D(L,N.message))}else l(new D(A.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new D(A.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{O(we,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);O(we,`RPC '${e}' ${o} sending request:`,i),d.send(t,"POST",p,n,15)})}T_(e,t,n){const i=Mr(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Vu(),u=Fu(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const p=a.join("");O(we,`Creating RPC '${e}' stream ${i}: ${p}`,l);const m=o.createWebChannel(p,l);this.I_(m);let I=!1,x=!1;const N=new vg({Yo:R=>{x?O(we,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(I||(O(we,`Opening RPC '${e}' stream ${i} transport.`),m.open(),I=!0),O(we,`RPC '${e}' stream ${i} sending:`,R),m.send(R))},Zo:()=>m.close()}),L=(R,B,G)=>{R.listen(B,Z=>{try{G(Z)}catch(ne){setTimeout(()=>{throw ne},0)}})};return L(m,Bn.EventType.OPEN,()=>{x||(O(we,`RPC '${e}' stream ${i} transport opened.`),N.o_())}),L(m,Bn.EventType.CLOSE,()=>{x||(x=!0,O(we,`RPC '${e}' stream ${i} transport closed`),N.a_(),this.E_(m))}),L(m,Bn.EventType.ERROR,R=>{x||(x=!0,on(we,`RPC '${e}' stream ${i} transport errored. Name:`,R.name,"Message:",R.message),N.a_(new D(A.UNAVAILABLE,"The operation could not be completed")))}),L(m,Bn.EventType.MESSAGE,R=>{var B;if(!x){const G=R.data[0];W(!!G,16349);const Z=G,ne=(Z==null?void 0:Z.error)||((B=Z[0])==null?void 0:B.error);if(ne){O(we,`RPC '${e}' stream ${i} received error:`,ne);const le=ne.status;let ee=function(g){const v=ae[g];if(v!==void 0)return wl(v)}(le),b=ne.message;ee===void 0&&(ee=A.INTERNAL,b="Unknown error status: "+le+" with message "+ne.message),x=!0,N.a_(new D(ee,b)),m.close()}else O(we,`RPC '${e}' stream ${i} received:`,G),N.u_(G)}}),L(u,Uu.STAT_EVENT,R=>{R.stat===Sr.PROXY?O(we,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Sr.NOPROXY&&O(we,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function fr(){return typeof document<"u"?document:null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Si(s){return new Sm(s,!0)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ll{constructor(e,t,n=1e3,i=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=i,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-n);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Pc="PersistentStream";class Ol{constructor(e,t,n,i,a,o,u,l){this.Mi=e,this.S_=n,this.b_=i,this.connection=a,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ll(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===A.RESOURCE_EXHAUSTED?(Je(t.toString()),Je("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.D_===t&&this.G_(n,i)},n=>{e(()=>{const i=new D(A.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{n(()=>this.z_(i))}),this.stream.onMessage(i=>{n(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return O(Pc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(O(Pc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bg extends Ol{constructor(e,t,n,i,a,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Am(this.serializer,e),n=function(i){if(!("targetChange"in i))return F.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?$e(a.readTime):F.min()}(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=Or(this.serializer),t.addTarget=function(i,a){let o;const u=a.target;if(o=xr(u)?{documents:km(i,u)}:{query:Nm(i,u).ft},o.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){o.resumeToken=Tl(i,a.resumeToken);const l=Dr(i,a.expectedCount);l!==null&&(o.expectedCount=l)}else if(a.snapshotVersion.compareTo(F.min())>0){o.readTime=ni(i,a.snapshotVersion.toTimestamp());const l=Dr(i,a.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const n=Rm(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=Or(this.serializer),t.removeTarget=e,this.q_(t)}}class Eg extends Ol{constructor(e,t,n,i,a,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=xm(e.writeResults,e.commitTime),n=$e(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Or(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Cm(this.serializer,n))};this.q_(t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Tg{}class Sg extends Tg{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new D(A.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,o])=>this.connection.Go(e,Rr(t,n),i,a,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(A.UNKNOWN,a.toString())})}Ho(e,t,n,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Ho(e,Rr(t,n),i,o,u,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(A.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Ig{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
*/const Bt="RemoteStore";class _g{constructor(e,t,n,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo(o=>{n.enqueueAndForget(async()=>{qt(this)&&(O(Bt,"Restarting streams for network reachability change."),await async function(u){const l=V(u);l.Ea.add(4),await ls(l),l.Ra.set("Unknown"),l.Ea.delete(4),await Ii(l)}(this))})}),this.Ra=new Ig(n,i)}}async function Ii(s){if(qt(s))for(const e of s.da)await e(!0)}async function ls(s){for(const e of s.da)await e(!1)}function Pl(s,e){const t=V(s);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),fa(t)?da(t):bn(t).O_()&&ha(t,e))}function la(s,e){const t=V(s),n=bn(t);t.Ia.delete(e),n.O_()&&Ml(t,e),t.Ia.size===0&&(n.O_()?n.L_():qt(t)&&t.Ra.set("Unknown"))}function ha(s,e){if(s.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}bn(s).Y_(e)}function Ml(s,e){s.Va.Ue(e),bn(s).Z_(e)}function da(s){s.Va=new wm({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),At:e=>s.Ia.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),bn(s).start(),s.Ra.ua()}function fa(s){return qt(s)&&!bn(s).x_()&&s.Ia.size>0}function qt(s){return V(s).Ea.size===0}function Ul(s){s.Va=void 0}async function Ag(s){s.Ra.set("Online")}async function Cg(s){s.Ia.forEach((e,t)=>{ha(s,e)})}async function xg(s,e){Ul(s),fa(s)?(s.Ra.ha(e),da(s)):s.Ra.set("Unknown")}async function kg(s,e,t){if(s.Ra.set("Online"),e instanceof El&&e.state===2&&e.cause)try{await async function(n,i){const a=i.cause;for(const o of i.targetIds)n.Ia.has(o)&&(await n.remoteSyncer.rejectListen(o,a),n.Ia.delete(o),n.Va.removeTarget(o))}(s,e)}catch(n){O(Bt,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ii(s,n)}else if(e instanceof $s?s.Va.Ze(e):e instanceof bl?s.Va.st(e):s.Va.tt(e),!t.isEqual(F.min()))try{const n=await Rl(s.localStore);t.compareTo(n)>=0&&await function(i,a){const o=i.Va.Tt(a);return o.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ia.get(l);d&&i.Ia.set(l,d.withResumeToken(u.resumeToken,a))}}),o.targetMismatches.forEach((u,l)=>{const d=i.Ia.get(u);if(!d)return;i.Ia.set(u,d.withResumeToken(ye.EMPTY_BYTE_STRING,d.snapshotVersion)),Ml(i,u);const p=new pt(d.target,u,l,d.sequenceNumber);ha(i,p)}),i.remoteSyncer.applyRemoteEvent(o)}(s,t)}catch(n){O(Bt,"Failed to raise snapshot:",n),await ii(s,n)}}async function ii(s,e,t){if(!vn(e))throw e;s.Ea.add(1),await ls(s),s.Ra.set("Offline"),t||(t=()=>Rl(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{O(Bt,"Retrying IndexedDB access"),await t(),s.Ea.delete(1),await Ii(s)})}function Fl(s,e){return e().catch(t=>ii(s,t,e))}async function _i(s){const e=V(s),t=It(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Qr;for(;Ng(e);)try{const i=await hg(e.localStore,n);if(i===null){e.Ta.length===0&&t.L_();break}n=i.batchId,Dg(e,i)}catch(i){await ii(e,i)}Vl(e)&&Bl(e)}function Ng(s){return qt(s)&&s.Ta.length<10}function Dg(s,e){s.Ta.push(e);const t=It(s);t.O_()&&t.X_&&t.ea(e.mutations)}function Vl(s){return qt(s)&&!It(s).x_()&&s.Ta.length>0}function Bl(s){It(s).start()}async function Rg(s){It(s).ra()}async function Lg(s){const e=It(s);for(const t of s.Ta)e.ea(t.mutations)}async function Og(s,e,t){const n=s.Ta.shift(),i=sa.from(n,e,t);await Fl(s,()=>s.remoteSyncer.applySuccessfulWrite(i)),await _i(s)}async function Pg(s,e){e&&It(s).X_&&await async function(t,n){if(function(i){return gm(i)&&i!==A.ABORTED}(n.code)){const i=t.Ta.shift();It(t).B_(),await Fl(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,n)),await _i(t)}}(s,e),Vl(s)&&Bl(s)}async function Mc(s,e){const t=V(s);t.asyncQueue.verifyOperationInProgress(),O(Bt,"RemoteStore received new credentials");const n=qt(t);t.Ea.add(3),await ls(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ii(t)}async function Mg(s,e){const t=V(s);e?(t.Ea.delete(2),await Ii(t)):e||(t.Ea.add(2),await ls(t),t.Ra.set("Unknown"))}function bn(s){return s.ma||(s.ma=function(e,t,n){const i=V(e);return i.sa(),new bg(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(s.datastore,s.asyncQueue,{Xo:Ag.bind(null,s),t_:Cg.bind(null,s),r_:xg.bind(null,s),H_:kg.bind(null,s)}),s.da.push(async e=>{e?(s.ma.B_(),fa(s)?da(s):s.Ra.set("Unknown")):(await s.ma.stop(),Ul(s))})),s.ma}function It(s){return s.fa||(s.fa=function(e,t,n){const i=V(e);return i.sa(),new Eg(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(s.datastore,s.asyncQueue,{Xo:()=>Promise.resolve(),t_:Rg.bind(null,s),r_:Pg.bind(null,s),ta:Lg.bind(null,s),na:Og.bind(null,s)}),s.da.push(async e=>{e?(s.fa.B_(),await _i(s)):(await s.fa.stop(),s.Ta.length>0&&(O(Bt,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))})),s.fa}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pa{constructor(e,t,n,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=a,this.deferred=new Qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,a){const o=Date.now()+n,u=new pa(e,t,o,i,a);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ma(s,e){if(Je("AsyncQueue",`${e}: ${s}`),vn(s))return new D(A.UNAVAILABLE,`${e}: ${s}`);throw s}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class en{static emptySet(e){return new en(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||P.comparator(t.key,n.key):(t,n)=>P.comparator(t.key,n.key),this.keyedMap=$n(),this.sortedSet=new te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof en)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=n.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
*/class Uc{constructor(){this.ga=new te(P.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):M(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class dn{constructor(e,t,n,i,a,o,u,l,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=a,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,i,a){const o=[];return t.forEach(u=>{o.push({type:0,doc:u})}),new dn(e,t,en.emptySet(t),o,n,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ug{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Fg{constructor(){this.queries=Fc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,t){const n=V(e),i=n.queries;n.queries=Fc(),i.forEach((a,o)=>{for(const u of o.Sa)u.onError(t)})})(this,new D(A.ABORTED,"Firestore shutting down"))}}function Fc(){return new jt(s=>ol(s),vi)}async function $l(s,e){const t=V(s);let n=3;const i=e.query;let a=t.queries.get(i);a?!a.ba()&&e.Da()&&(n=2):(a=new Ug,n=e.Da()?0:1);try{switch(n){case 0:a.wa=await t.onListen(i,!0);break;case 1:a.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const u=ma(o,`Initialization of query '${Xt(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&ga(t)}async function jl(s,e){const t=V(s),n=e.query;let i=3;const a=t.queries.get(n);if(a){const o=a.Sa.indexOf(e);o>=0&&(a.Sa.splice(o,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Vg(s,e){const t=V(s);let n=!1;for(const i of e){const a=i.query,o=t.queries.get(a);if(o){for(const u of o.Sa)u.Fa(i)&&(n=!0);o.wa=i}}n&&ga(t)}function Bg(s,e,t){const n=V(s),i=n.queries.get(e);if(i)for(const a of i.Sa)a.onError(t);n.queries.delete(e)}function ga(s){s.Ca.forEach(e=>{e.next()})}var Ur,Vc;(Vc=Ur||(Ur={})).Ma="default",Vc.Cache="cache";class ql{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new dn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=dn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ur.Cache}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zl{constructor(e){this.key=e}}class Hl{constructor(e){this.key=e}}class $g{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=z(),this.mutatedKeys=z(),this.eu=cl(e),this.tu=new en(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new Uc,i=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,o=i,u=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const I=i.get(p),x=wi(this.query,m)?m:null,N=!!I&&this.mutatedKeys.has(I.key),L=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let R=!1;I&&x?I.data.isEqual(x.data)?N!==L&&(n.track({type:3,doc:x}),R=!0):this.su(I,x)||(n.track({type:2,doc:x}),R=!0,(l&&this.eu(x,l)>0||d&&this.eu(x,d)<0)&&(u=!0)):!I&&x?(n.track({type:0,doc:x}),R=!0):I&&!x&&(n.track({type:1,doc:I}),R=!0,(l||d)&&(u=!0)),R&&(x?(o=o.add(x),a=L?a.add(p):a.delete(p)):(o=o.delete(p),a=a.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),a=a.delete(p.key),n.track({type:1,doc:p})}return{tu:o,iu:n,Cs:u,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((p,m)=>function(I,x){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Rt:L})}};return N(I)-N(x)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(n),i=i??!1;const u=t&&!i?this._u():[],l=this.Xa.size===0&&this.current&&!i?1:0,d=l!==this.Za;return this.Za=l,o.length!==0||d?{snapshot:new dn(this.query,e.tu,a,o,e.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Uc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=z(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const t=[];return e.forEach(n=>{this.Xa.has(n)||t.push(new Hl(n))}),this.Xa.forEach(n=>{e.has(n)||t.push(new zl(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return dn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ya="SyncEngine";class jg{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class qg{constructor(e){this.key=e,this.hu=!1}}class zg{constructor(e,t,n,i,a,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new jt(u=>ol(u),vi),this.Iu=new Map,this.Eu=new Set,this.du=new te(P.comparator),this.Au=new Map,this.Ru=new aa,this.Vu={},this.mu=new Map,this.fu=hn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Hg(s,e,t=!0){const n=Jl(s);let i;const a=n.Tu.get(e);return a?(n.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await Gl(n,e,t,!0),i}async function Gg(s,e){const t=Jl(s);await Gl(t,e,!0,!1)}async function Gl(s,e,t,n){const i=await dg(s.localStore,Be(e)),a=i.targetId,o=s.sharedClientState.addLocalQueryTarget(a,t);let u;return n&&(u=await Kg(s,e,a,o==="current",i.resumeToken)),s.isPrimaryClient&&t&&Pl(s.remoteStore,i),u}async function Kg(s,e,t,n,i){s.pu=(m,I,x)=>async function(N,L,R,B){let G=L.view.ru(R);G.Cs&&(G=await Dc(N.localStore,L.query,!1).then(({documents:ee})=>L.view.ru(ee,G)));const Z=B&&B.targetChanges.get(L.targetId),ne=B&&B.targetMismatches.get(L.targetId)!=null,le=L.view.applyChanges(G,N.isPrimaryClient,Z,ne);return $c(N,L.targetId,le.au),le.snapshot}(s,m,I,x);const a=await Dc(s.localStore,e,!0),o=new $g(e,a.Qs),u=o.ru(a.documents),l=us.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",i),d=o.applyChanges(u,s.isPrimaryClient,l);$c(s,t,d.au);const p=new jg(e,t,o);return s.Tu.set(e,p),s.Iu.has(t)?s.Iu.get(t).push(e):s.Iu.set(t,[e]),d.snapshot}async function Wg(s,e,t){const n=V(s),i=n.Tu.get(e),a=n.Iu.get(i.targetId);if(a.length>1)return n.Iu.set(i.targetId,a.filter(o=>!vi(o,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Pr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&la(n.remoteStore,i.targetId),Fr(n,i.targetId)}).catch(yn)):(Fr(n,i.targetId),await Pr(n.localStore,i.targetId,!0))}async function Qg(s,e){const t=V(s),n=t.Tu.get(e),i=t.Iu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),la(t.remoteStore,n.targetId))}async function Xg(s,e,t){const n=sy(s);try{const i=await function(a,o){const u=V(a),l=Y.now(),d=o.reduce((I,x)=>I.add(x.key),z());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let x=Ze(),N=z();return u.Ns.getEntries(I,d).next(L=>{x=L,x.forEach((R,B)=>{B.isValidDocument()||(N=N.add(R))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,x)).next(L=>{p=L;const R=[];for(const B of o){const G=hm(B,p.get(B.key).overlayedDocument);G!=null&&R.push(new Ct(B.key,G,Zu(G.value.mapValue),Le.exists(!0)))}return u.mutationQueue.addMutationBatch(I,l,R,o)}).next(L=>{m=L;const R=L.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(I,L.batchId,R)})}).then(()=>({batchId:m.batchId,changes:ll(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(a,o,u){let l=a.Vu[a.currentUser.toKey()];l||(l=new te(q)),l=l.insert(o,u),a.Vu[a.currentUser.toKey()]=l}(n,i.batchId,t),await hs(n,i.changes),await _i(n.remoteStore)}catch(i){const a=ma(i,"Failed to persist write");t.reject(a)}}async function Kl(s,e){const t=V(s);try{const n=await ug(t.localStore,e);e.targetChanges.forEach((i,a)=>{const o=t.Au.get(a);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?W(o.hu,14607):i.removedDocuments.size>0&&(W(o.hu,42227),o.hu=!1))}),await hs(t,n,e)}catch(n){await yn(n)}}function Bc(s,e,t){const n=V(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Tu.forEach((a,o)=>{const u=o.view.va(e);u.snapshot&&i.push(u.snapshot)}),function(a,o){const u=V(a);u.onlineState=o;let l=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(o)&&(l=!0)}),l&&ga(u)}(n.eventManager,e),i.length&&n.Pu.H_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Jg(s,e,t){const n=V(s);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Au.get(e),a=i&&i.key;if(a){let o=new te(P.comparator);o=o.insert(a,Ee.newNoDocument(a,F.min()));const u=z().add(a),l=new Ti(F.min(),new Map,new te(q),o,u);await Kl(n,l),n.du=n.du.remove(a),n.Au.delete(e),va(n)}else await Pr(n.localStore,e,!1).then(()=>Fr(n,e,t)).catch(yn)}async function Yg(s,e){const t=V(s),n=e.batch.batchId;try{const i=await cg(t.localStore,e);Ql(t,n,null),Wl(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await hs(t,i)}catch(i){await yn(i)}}async function Zg(s,e,t){const n=V(s);try{const i=await function(a,o){const u=V(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let d;return u.mutationQueue.lookupMutationBatch(l,o).next(p=>(W(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(l,p))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,d,o)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d)).next(()=>u.localDocuments.getDocuments(l,d))})}(n.localStore,e);Ql(n,e,t),Wl(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await hs(n,i)}catch(i){await yn(i)}}function Wl(s,e){(s.mu.get(e)||[]).forEach(t=>{t.resolve()}),s.mu.delete(e)}function Ql(s,e,t){const n=V(s);let i=n.Vu[n.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),n.Vu[n.currentUser.toKey()]=i}}function Fr(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Iu.get(e))s.Tu.delete(n),t&&s.Pu.yu(n,t);s.Iu.delete(e),s.isPrimaryClient&&s.Ru.jr(e).forEach(n=>{s.Ru.containsKey(n)||Xl(s,n)})}function Xl(s,e){s.Eu.delete(e.path.canonicalString());const t=s.du.get(e);t!==null&&(la(s.remoteStore,t),s.du=s.du.remove(e),s.Au.delete(t),va(s))}function $c(s,e,t){for(const n of t)n instanceof zl?(s.Ru.addReference(n.key,e),ey(s,n)):n instanceof Hl?(O(ya,"Document no longer in limbo: "+n.key),s.Ru.removeReference(n.key,e),s.Ru.containsKey(n.key)||Xl(s,n.key)):M(19791,{wu:n})}function ey(s,e){const t=e.key,n=t.path.canonicalString();s.du.get(t)||s.Eu.has(n)||(O(ya,"New document in limbo: "+t),s.Eu.add(n),va(s))}function va(s){for(;s.Eu.size>0&&s.du.size<s.maxConcurrentLimboResolutions;){const e=s.Eu.values().next().value;s.Eu.delete(e);const t=new P(Q.fromString(e)),n=s.fu.next();s.Au.set(n,new qg(t)),s.du=s.du.insert(t,n),Pl(s.remoteStore,new pt(Be(ea(t.path)),n,"TargetPurposeLimboResolution",mi.ce))}}async function hs(s,e,t){const n=V(s),i=[],a=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach((u,l)=>{o.push(n.pu(l,e,t).then(d=>{var p;if((d||t)&&n.isPrimaryClient){const m=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:p.current;n.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){i.push(d);const m=ca.As(l.targetId,d);a.push(m)}}))}),await Promise.all(o),n.Pu.H_(i),await async function(u,l){const d=V(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>C.forEach(l,m=>C.forEach(m.Es,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>C.forEach(m.ds,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!vn(p))throw p;O(ua,"Failed to update sequence numbers: "+p)}for(const p of l){const m=p.targetId;if(!p.fromCache){const I=d.Ms.get(m),x=I.snapshotVersion,N=I.withLastLimboFreeSnapshotVersion(x);d.Ms=d.Ms.insert(m,N)}}}(n.localStore,a))}async function ty(s,e){const t=V(s);if(!t.currentUser.isEqual(e)){O(ya,"User change. New user:",e.toKey());const n=await Dl(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(o=>{o.forEach(u=>{u.reject(new D(A.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await hs(t,n.Ls)}}function ny(s,e){const t=V(s),n=t.Au.get(e);if(n&&n.hu)return z().add(n.key);{let i=z();const a=t.Iu.get(e);if(!a)return i;for(const o of a){const u=t.Tu.get(o);i=i.unionWith(u.view.nu)}return i}}function Jl(s){const e=V(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ny.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jg.bind(null,e),e.Pu.H_=Vg.bind(null,e.eventManager),e.Pu.yu=Bg.bind(null,e.eventManager),e}function sy(s){const e=V(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Yg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Zg.bind(null,e),e}class ri{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Si(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return og(this.persistence,new ig,e.initialUser,this.serializer)}Cu(e){return new Nl(oa.mi,this.serializer)}Du(e){return new pg}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ri.provider={build:()=>new ri};class iy extends ri{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){W(this.persistence.referenceDelegate instanceof si,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new qm(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new Nl(n=>si.mi(n,t),this.serializer)}}class Vr{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Bc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=ty.bind(null,this.syncEngine),await Mg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Fg}()}createDatastore(e){const t=Si(e.databaseInfo.databaseId),n=function(i){return new wg(i)}(e.databaseInfo);return function(i,a,o,u){return new Sg(i,a,o,u)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(t,n,i,a,o){return new _g(t,n,i,a,o)}(this.localStore,this.datastore,e.asyncQueue,t=>Bc(this.syncEngine,t,0),function(){return Oc.v()?new Oc:new mg}())}createSyncEngine(e,t){return function(n,i,a,o,u,l,d){const p=new zg(n,i,a,o,u,l);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(n){const i=V(n);O(Bt,"RemoteStore shutting down."),i.Ea.add(5),await ls(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Vr.provider={build:()=>new Vr};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/class Yl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Je("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const _t="FirestoreClient";class ry{constructor(e,t,n,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=Wr.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(n,async o=>{O(_t,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(O(_t,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ma(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function pr(s,e){s.asyncQueue.verifyOperationInProgress(),O(_t,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Dl(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=e}async function jc(s,e){s.asyncQueue.verifyOperationInProgress();const t=await ay(s);O(_t,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener(n=>Mc(e.remoteStore,n)),s.setAppCheckTokenChangeListener((n,i)=>Mc(e.remoteStore,i)),s._onlineComponents=e}async function ay(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){O(_t,"Using user provided OfflineComponentProvider");try{await pr(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(n){return n.name==="FirebaseError"?n.code===A.FAILED_PRECONDITION||n.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}(t))throw t;on("Error using user provided cache. Falling back to memory cache: "+t),await pr(s,new ri)}}else O(_t,"Using default OfflineComponentProvider"),await pr(s,new iy(void 0));return s._offlineComponents}async function Zl(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(O(_t,"Using user provided OnlineComponentProvider"),await jc(s,s._uninitializedComponentsProvider._online)):(O(_t,"Using default OnlineComponentProvider"),await jc(s,new Vr))),s._onlineComponents}function oy(s){return Zl(s).then(e=>e.syncEngine)}async function eh(s){const e=await Zl(s),t=e.eventManager;return t.onListen=Hg.bind(null,e.syncEngine),t.onUnlisten=Wg.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Gg.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Qg.bind(null,e.syncEngine),t}function cy(s,e,t={}){const n=new Qe;return s.asyncQueue.enqueueAndForget(async()=>function(i,a,o,u,l){const d=new Yl({next:m=>{d.Nu(),a.enqueueAndForget(()=>jl(i,p));const I=m.docs.has(o);!I&&m.fromCache?l.reject(new D(A.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?l.reject(new D(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(m)},error:m=>l.reject(m)}),p=new ql(ea(o.path),d,{includeMetadataChanges:!0,qa:!0});return $l(i,p)}(await eh(s),s.asyncQueue,e,t,n)),n.promise}function uy(s,e,t={}){const n=new Qe;return s.asyncQueue.enqueueAndForget(async()=>function(i,a,o,u,l){const d=new Yl({next:m=>{d.Nu(),a.enqueueAndForget(()=>jl(i,p)),m.fromCache&&u.source==="server"?l.reject(new D(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(m)},error:m=>l.reject(m)}),p=new ql(o,d,{includeMetadataChanges:!0,qa:!0});return $l(i,p)}(await eh(s),s.asyncQueue,e,t,n)),n.promise}/**
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
*/function th(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const qc=new Map;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const nh="firestore.googleapis.com",zc=!0;class Hc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nh,this.ssl=zc}else this.host=e.host,this.ssl=e.ssl??zc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kl;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$m)throw new D(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_p("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=th(e.experimentalLongPollingOptions??{}),function(t){if(t.timeoutSeconds!==void 0){if(isNaN(t.timeoutSeconds))throw new D(A.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new D(A.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new D(A.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(t,n){return t.timeoutSeconds===n.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ai{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new mp;switch(t.type){case"firstParty":return new wp(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new D(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=qc.get(e);t&&(O("ComponentProvider","Removing Datastore"),qc.delete(e),t.terminate())}(this),Promise.resolve()}}function ly(s,e,t,n={}){var i;s=Ye(s,Ai);const a=pn(e),o=s._getSettings(),u={...o,emulatorOptions:s._getEmulatorOptions()},l=`${e}:${t}`;a&&(Au(`https://${l}`),Cu("Firestore",!0)),o.host!==nh&&o.host!==l&&on("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:l,ssl:a,emulatorOptions:n};if(!Ut(d,u)&&(s._setSettings(d),n.mockUserToken)){let p,m;if(typeof n.mockUserToken=="string")p=n.mockUserToken,m=be.MOCK_USER;else{p=$d(n.mockUserToken,(i=s._app)==null?void 0:i.options.projectId);const I=n.mockUserToken.sub||n.mockUserToken.user_id;if(!I)throw new D(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new be(I)}s._authCredentials=new gp(new $u(p,m))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new zt(this.firestore,e,this._query)}}class ue{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}toJSON(){return{type:ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(os(t,ue._jsonSchema))return new ue(e,n||null,new P(Q.fromString(t.referencePath)))}}ue._jsonSchemaVersion="firestore/documentReference/1.0",ue._jsonSchema={type:ce("string",ue._jsonSchemaVersion),referencePath:ce("string")};class wt extends zt{constructor(e,t,n){super(e,t,ea(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new P(e))}withConverter(e){return new wt(this.firestore,e,this._path)}}function Gc(s,e,...t){if(s=_e(s),ju("collection","path",e),s instanceof Ai){const n=Q.fromString(e,...t);return ic(n),new wt(s,null,n)}{if(!(s instanceof ue||s instanceof wt))throw new D(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Q.fromString(e,...t));return ic(n),new wt(s.firestore,null,n)}}function js(s,e,...t){if(s=_e(s),arguments.length===1&&(e=Wr.newId()),ju("doc","path",e),s instanceof Ai){const n=Q.fromString(e,...t);return sc(n),new ue(s,null,new P(n))}{if(!(s instanceof ue||s instanceof wt))throw new D(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Q.fromString(e,...t));return sc(n),new ue(s.firestore,s instanceof wt?s.converter:null,new P(n))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Kc="AsyncQueue";class Wc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ll(this,"async_queue_retry"),this._c=()=>{const n=fr();n&&O(Kc,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=fr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=fr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Qe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!vn(e))throw e;O(Kc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,Je("INTERNAL UNHANDLED ERROR: ",Qc(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=pa.createAndSchedule(this,e,t,n,a=>this.hc(a));return this.tc.push(i),i}uc(){this.nc&&M(47125,{Pc:Qc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Qc(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class En extends Ai{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Wc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wc(e),this._firestoreClient=void 0,await e}}}function hy(s,e){const t=typeof s=="object"?s:Du(),n=typeof s=="string"?s:Js,i=Gr(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const a=Vd("firestore");a&&ly(i,...a)}return i}function wa(s){if(s._terminated)throw new D(A.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||dy(s),s._firestoreClient}function dy(s){var e,t,n;const i=s._freezeSettings(),a=function(o,u,l,d){return new Mp(o,u,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,th(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(s._databaseId,((e=s._app)==null?void 0:e.options.appId)||"",s._persistenceKey,i);s._componentsProvider||(t=i.localCache)!=null&&t._offlineComponentProvider&&(n=i.localCache)!=null&&n._onlineComponentProvider&&(s._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),s._firestoreClient=new ry(s._authCredentials,s._appCheckCredentials,s._queue,a,s._componentsProvider&&function(o){const u=o==null?void 0:o._online.build();return{_offline:o==null?void 0:o._offline.build(u),_online:u}}(s._componentsProvider))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class De{constructor(e){this._byteString=e}static fromBase64String(e){try{return new De(ye.fromBase64String(e))}catch(t){throw new D(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new De(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:De._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(os(e,De._jsonSchema))return De.fromBase64String(e.bytes)}}De._jsonSchemaVersion="firestore/bytes/1.0",De._jsonSchema={type:ce("string",De._jsonSchemaVersion),bytes:ce("string")};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ci{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/class je{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:je._jsonSchemaVersion}}static fromJSON(e){if(os(e,je._jsonSchema))return new je(e.latitude,e.longitude)}}je._jsonSchemaVersion="firestore/geoPoint/1.0",je._jsonSchema={type:ce("string",je._jsonSchemaVersion),latitude:ce("number"),longitude:ce("number")};/**
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
*/class qe{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(t,n){if(t.length!==n.length)return!1;for(let i=0;i<t.length;++i)if(t[i]!==n[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(os(e,qe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new qe(e.vectorValues);throw new D(A.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qe._jsonSchemaVersion="firestore/vectorValue/1.0",qe._jsonSchema={type:ce("string",qe._jsonSchemaVersion),vectorValues:ce("object")};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const fy=/^__.*__$/;class py{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Ct(e,this.data,this.fieldMask,t,this.fieldTransforms):new cs(e,this.data,t,this.fieldTransforms)}}class sh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ct(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ih(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ac:s})}}class Ea{constructor(e,t,n,i,a,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ea({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var t;const n=(t=this.path)==null?void 0:t.child(e),i=this.Vc({path:n,fc:!1});return i.gc(e),i}yc(e){var t;const n=(t=this.path)==null?void 0:t.child(e),i=this.Vc({path:n,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ai(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(ih(this.Ac)&&fy.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class my{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Si(e)}Cc(e,t,n,i=!1){return new Ea({Ac:e,methodName:t,Dc:n,path:ge.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ta(s){const e=s._freezeSettings(),t=Si(s._databaseId);return new my(s._databaseId,!!e.ignoreUndefinedProperties,t)}function gy(s,e,t,n,i,a={}){const o=s.Cc(a.merge||a.mergeFields?2:0,e,t,i);Sa("Data must be an object, but it was:",o,n);const u=rh(n,o);let l,d;if(a.merge)l=new Ne(o.fieldMask),d=o.fieldTransforms;else if(a.mergeFields){const p=[];for(const m of a.mergeFields){const I=Br(e,m,t);if(!o.contains(I))throw new D(A.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);oh(p,I)||p.push(I)}l=new Ne(p),d=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,d=o.fieldTransforms;return new py(new xe(u),l,d)}class xi extends ba{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xi}}function yy(s,e,t,n){const i=s.Cc(1,e,t);Sa("Data must be an object, but it was:",i,n);const a=[],o=xe.empty();At(n,(l,d)=>{const p=Ia(e,l,t);d=_e(d);const m=i.yc(p);if(d instanceof xi)a.push(p);else{const I=ds(d,m);I!=null&&(a.push(p),o.set(p,I))}});const u=new Ne(a);return new sh(o,u,i.fieldTransforms)}function vy(s,e,t,n,i,a){const o=s.Cc(1,e,t),u=[Br(e,n,t)],l=[i];if(a.length%2!=0)throw new D(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<a.length;I+=2)u.push(Br(e,a[I])),l.push(a[I+1]);const d=[],p=xe.empty();for(let I=u.length-1;I>=0;--I)if(!oh(d,u[I])){const x=u[I];let N=l[I];N=_e(N);const L=o.yc(x);if(N instanceof xi)d.push(x);else{const R=ds(N,L);R!=null&&(d.push(x),p.set(x,R))}}const m=new Ne(d);return new sh(p,m,o.fieldTransforms)}function wy(s,e,t,n=!1){return ds(t,s.Cc(n?4:3,e))}function ds(s,e){if(ah(s=_e(s)))return Sa("Unsupported field value:",e,s),rh(s,e);if(s instanceof ba)return function(t,n){if(!ih(n.Ac))throw n.Sc(`${t._methodName}() can only be used with update() and set()`);if(!n.path)throw n.Sc(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(n);i&&n.fieldTransforms.push(i)}(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(t,n){const i=[];let a=0;for(const o of t){let u=ds(o,n.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(s,e)}return function(t,n){if((t=_e(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return rm(n.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=Y.fromDate(t);return{timestampValue:ni(n.serializer,i)}}if(t instanceof Y){const i=new Y(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ni(n.serializer,i)}}if(t instanceof je)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof De)return{bytesValue:Tl(n.serializer,t._byteString)};if(t instanceof ue){const i=n.databaseId,a=t.firestore._databaseId;if(!a.isEqual(i))throw n.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ra(t.firestore._databaseId||n.databaseId,t._key.path)}}if(t instanceof qe)return function(i,a){return{mapValue:{fields:{[Ju]:{stringValue:Yu},[Ys]:{arrayValue:{values:i.toArray().map(o=>{if(typeof o!="number")throw a.Sc("VectorValues must only contain numeric values.");return ta(a.serializer,o)})}}}}}}(t,n);throw n.Sc(`Unsupported field value: ${pi(t)}`)}(s,e)}function rh(s,e){const t={};return Hu(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):At(s,(n,i)=>{const a=ds(i,e.mc(n));a!=null&&(t[n]=a)}),{mapValue:{fields:t}}}function ah(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof Y||s instanceof je||s instanceof De||s instanceof ue||s instanceof ba||s instanceof qe)}function Sa(s,e,t){if(!ah(t)||!qu(t)){const n=pi(t);throw n==="an object"?e.Sc(s+" a custom object"):e.Sc(s+" "+n)}}function Br(s,e,t){if((e=_e(e))instanceof Ci)return e._internalPath;if(typeof e=="string")return Ia(s,e);throw ai("Field path arguments must be of type string or ",s,!1,void 0,t)}const by=new RegExp("[~\\*/\\[\\]]");function Ia(s,e,t){if(e.search(by)>=0)throw ai(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new Ci(...e.split("."))._internalPath}catch{throw ai(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function ai(s,e,t,n,i){const a=n&&!n.isEmpty(),o=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(a||o)&&(l+=" (found",a&&(l+=` in field ${n}`),o&&(l+=` in document ${i}`),l+=")"),new D(A.INVALID_ARGUMENT,u+s+l)}function oh(s,e){return s.some(t=>t.isEqual(e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ch{constructor(e,t,n,i,a){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ey(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ki("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ey extends ch{data(){return super.data()}}function ki(s,e){return typeof e=="string"?Ia(s,e):e instanceof Ci?e._internalPath:e._delegate._internalPath}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ty(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new D(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _a{}class uh extends _a{}function mr(s,e,...t){let n=[];e instanceof _a&&n.push(e),n=n.concat(t),function(i){const a=i.filter(u=>u instanceof Aa).length,o=i.filter(u=>u instanceof Ni).length;if(a>1||a>0&&o>0)throw new D(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)s=i._apply(s);return s}class Ni extends uh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ni(e,t,n)}_apply(e){const t=this._parse(e);return lh(e._query,t),new zt(e.firestore,e.converter,kr(e._query,t))}_parse(e){const t=Ta(e.firestore);return function(n,i,a,o,u,l,d){let p;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new D(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Yc(d,l);const m=[];for(const I of d)m.push(Jc(o,n,I));p={arrayValue:{values:m}}}else p=Jc(o,n,d)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Yc(d,l),p=wy(a,i,d,l==="in"||l==="not-in");return oe.create(u,l,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Xc(s,e,t){const n=e,i=ki("where",s);return Ni._create(i,n,t)}class Aa extends _a{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Aa(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Oe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(n,i){let a=n;const o=i.getFlattenedFilters();for(const u of o)lh(a,u),a=kr(a,u)}(e._query,t),new zt(e.firestore,e.converter,kr(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ca extends uh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ca(e,t)}_apply(e){const t=function(n,i,a){if(n.startAt!==null)throw new D(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(n.endAt!==null)throw new D(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ts(i,a)}(e._query,this._field,this._direction);return new zt(e.firestore,e.converter,function(n,i){const a=n.explicitOrderBy.concat([i]);return new wn(n.path,n.collectionGroup,a,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}(e._query,t))}}function Sy(s,e="asc"){const t=e,n=ki("orderBy",s);return Ca._create(n,t)}function Jc(s,e,t){if(typeof(t=_e(t))=="string"){if(t==="")throw new D(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!al(e)&&t.indexOf("/")!==-1)throw new D(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Q.fromString(t));if(!P.isDocumentKey(n))throw new D(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return dc(s,new P(n))}if(t instanceof ue)return dc(s,t._key);throw new D(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pi(t)}.`)}function Yc(s,e){if(!Array.isArray(s)||s.length===0)throw new D(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lh(s,e){const t=function(n,i){for(const a of n)for(const o of a.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(s.filters,function(n){switch(n){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new D(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Iy{convertValue(e,t="none"){switch(St(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return At(e,(i,a)=>{n[i]=this.convertValue(a,t)}),n}convertVectorValue(e){var t,n,i;const a=(i=(n=(t=e.fields)==null?void 0:t[Ys].arrayValue)==null?void 0:n.values)==null?void 0:i.map(o=>re(o.doubleValue));return new qe(a)}convertGeoPoint(e){return new je(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=yi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Yn(e));default:return null}}convertTimestamp(e){const t=Et(e);return new Y(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Q.fromString(e);W(xl(n),9688,{name:e});const i=new Zn(n.get(1),n.get(3)),a=new P(n.popFirst(5));return i.isEqual(t)||Je(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _y(s,e,t){let n;return n=s?s.toFirestore(e):e,n}class qn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pt extends ch{constructor(e,t,n,i,a,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ki("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(A.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Pt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()||(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),t}}Pt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pt._jsonSchema={type:ce("string",Pt._jsonSchemaVersion),bundleSource:ce("string","DocumentSnapshot"),bundleName:ce("string"),bundle:ce("string")};class qs extends Pt{data(e={}){return super.data(e)}}class tn{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new qn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new qs(this._firestore,this._userDataWriter,n.key,n,new qn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(n,i){if(n._snapshot.oldDocs.isEmpty()){let a=0;return n._snapshot.docChanges.map(o=>{const u=new qs(n._firestore,n._userDataWriter,o.doc.key,o.doc,new qn(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);return o.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const u=new qs(n._firestore,n._userDataWriter,o.doc.key,o.doc,new qn(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);let l=-1,d=-1;return o.type!==0&&(l=a.indexOf(o.doc.key),a=a.delete(o.doc.key)),o.type!==1&&(a=a.add(o.doc),d=a.indexOf(o.doc.key)),{type:Ay(o.type),doc:u,oldIndex:l,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(A.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=tn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wr.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach(a=>{a._document!==null&&(t.push(a._document),n.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ay(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:s})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Cy(s){s=Ye(s,ue);const e=Ye(s.firestore,En);return cy(wa(e),s._key).then(t=>ky(e,s,t))}tn._jsonSchemaVersion="firestore/querySnapshot/1.0",tn._jsonSchema={type:ce("string",tn._jsonSchemaVersion),bundleSource:ce("string","QuerySnapshot"),bundleName:ce("string"),bundle:ce("string")};class hh extends Iy{constructor(e){super(),this.firestore=e}convertBytes(e){return new De(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}function Vn(s){s=Ye(s,zt);const e=Ye(s.firestore,En),t=wa(e),n=new hh(e);return Ty(s._query),uy(t,s._query).then(i=>new tn(e,n,s,i))}function xy(s,e,t,...n){s=Ye(s,ue);const i=Ye(s.firestore,En),a=Ta(i);let o;return o=typeof(e=_e(e))=="string"||e instanceof Ci?vy(a,"updateDoc",s._key,e,t,n):yy(a,"updateDoc",s._key,e),xa(i,[o.toMutation(s._key,Le.exists(!0))])}function Zc(s){return xa(Ye(s.firestore,En),[new na(s._key,Le.none())])}function eu(s,e){const t=Ye(s.firestore,En),n=js(s),i=_y(s.converter,e);return xa(t,[gy(Ta(s.firestore),"addDoc",n._key,i,s.converter!==null,{}).toMutation(n._key,Le.exists(!1))]).then(()=>n)}function xa(s,e){return function(t,n){const i=new Qe;return t.asyncQueue.enqueueAndForget(async()=>Xg(await oy(t),n,i)),i.promise}(wa(s),e)}function ky(s,e,t){const n=t.docs.get(e._key),i=new hh(s);return new Pt(s,i,e._key,n,new qn(t.hasPendingWrites,t.fromCache),e.converter)}(function(s,e=!0){(function(t){gn=t})(mn),an(new Ft("firestore",(t,{instanceIdentifier:n,options:i})=>{const a=t.getProvider("app").getImmediate(),o=new En(new yp(t.getProvider("auth-internal")),new bp(a,t.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zn(u.options.projectId,l)}(a,n),a);return i={useFetchStreams:e,...i},o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),yt(Zo,ec,s),yt(Zo,ec,"esm2020")})();const Ny=function(s,e,t){let n=Promise.resolve();function i(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return n.then(a=>{for(const o of a||[])o.status==="rejected"&&i(o.reason);return s().catch(i)})};var Dy="firebase",Ry="12.4.0";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/yt(Dy,Ry,"app");function dh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ly=dh,fh=new rs("auth","Firebase",dh());/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const oi=new zr("@firebase/auth");function Oy(s,...e){oi.logLevel<=j.WARN&&oi.warn(`Auth (${mn}): ${s}`,...e)}function zs(s,...e){oi.logLevel<=j.ERROR&&oi.error(`Auth (${mn}): ${s}`,...e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function et(s,...e){throw ka(s,...e)}function ze(s,...e){return ka(s,...e)}function ph(s,e,t){const n={...Ly(),[e]:t};return new rs("auth","Firebase",n).create(e,{appName:s.name})}function Mt(s){return ph(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ka(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return fh.create(s,...e)}function U(s,e,...t){if(!s)throw ka(e,...t)}function Ke(s){const e="INTERNAL ASSERTION FAILED: "+s;throw zs(e),new Error(e)}function tt(s,e){s||Ke(e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $r(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function Py(){return tu()==="http:"||tu()==="https:"}function tu(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function My(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Py()||Kd()||"connection"in navigator)?navigator.onLine:!0}function Uy(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fs{constructor(e,t){this.shortDelay=e,this.longDelay=t,tt(t>e,"Short delay should be less than long delay!"),this.isMobile=zd()||Wd()}get(){return My()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Na(s,e){tt(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class mh{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Fy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Vy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],By=new fs(3e4,6e4);function Da(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function Tn(s,e,t,n,i={}){return gh(s,i,async()=>{let a={},o={};n&&(e==="GET"?o=n:a={body:JSON.stringify(n)});const u=as({key:s.config.apiKey,...o}).slice(1),l=await s._getAdditionalHeaders();l["Content-Type"]="application/json",s.languageCode&&(l["X-Firebase-Locale"]=s.languageCode);const d={method:e,headers:l,...a};return Gd()||(d.referrerPolicy="no-referrer"),s.emulatorConfig&&pn(s.emulatorConfig.host)&&(d.credentials="include"),mh.fetch()(await yh(s,s.config.apiHost,t,u),d)})}async function gh(s,e,t){s._canInitEmulator=!1;const n={...Fy,...e};try{const i=new jy(s),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw Ms(s,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const u=a.ok?o.errorMessage:o.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ms(s,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ms(s,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ms(s,"user-disabled",o);const p=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ph(s,p,d);et(s,p)}}catch(i){if(i instanceof nt)throw i;et(s,"network-request-failed",{message:String(i)})}}async function $y(s,e,t,n,i={}){const a=await Tn(s,e,t,n,i);return"mfaPendingCredential"in a&&et(s,"multi-factor-auth-required",{_serverResponse:a}),a}async function yh(s,e,t,n){const i=`${e}${t}?${n}`,a=s,o=a.config.emulator?Na(s.config,i):`${s.config.apiScheme}://${i}`;return Vy.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(o).toString():o}class jy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(ze(this.auth,"network-request-failed")),By.get())})}}function Ms(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=ze(s,e,n);return i.customData._tokenResponse=t,i}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function qy(s,e){return Tn(s,"POST","/v1/accounts:delete",e)}async function ci(s,e){return Tn(s,"POST","/v1/accounts:lookup",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Qn(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zy(s,e=!1){const t=_e(s),n=await t.getIdToken(e),i=Ra(n);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:n,authTime:Qn(gr(i.auth_time)),issuedAtTime:Qn(gr(i.iat)),expirationTime:Qn(gr(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function gr(s){return Number(s)*1e3}function Ra(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return zs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Tu(t);return i?JSON.parse(i):(zs("Failed to decode base64 JWT payload"),null)}catch(i){return zs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nu(s){const e=Ra(s);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function is(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof nt&&Hy(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function Hy({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Gy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const t=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class jr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function ui(s){var e;const t=s.auth,n=await s.getIdToken(),i=await is(s,ci(t,{idToken:n}));U(i==null?void 0:i.users.length,t,"internal-error");const a=i.users[0];s._notifyReloadListener(a);const o=(e=a.providerUserInfo)!=null&&e.length?vh(a.providerUserInfo):[],u=Wy(s.providerData,o),l=s.isAnonymous,d=!(s.email&&a.passwordHash)&&!(u!=null&&u.length),p=l?d:!1,m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new jr(a.createdAt,a.lastLoginAt),isAnonymous:p};Object.assign(s,m)}async function Ky(s){const e=_e(s);await ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wy(s,e){return[...s.filter(t=>!e.some(n=>n.providerId===t.providerId)),...e]}function vh(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Qy(s,e){const t=await gh(s,{},async()=>{const n=as({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=s.config,o=await yh(s,i,"/v1/token",`key=${a}`),u=await s._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:u,body:n};return s.emulatorConfig&&pn(s.emulatorConfig.host)&&(l.credentials="include"),mh.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Xy(s,e){return Tn(s,"POST","/v2/accounts:revokeToken",Da(s,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class nn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=nu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:a}=await Qy(e,t);this.updateTokensAndExpiration(n,i,Number(a))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:a}=t,o=new nn;return n&&(U(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),a&&(U(typeof a=="number","internal-error",{appName:e}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nn,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ut(s,e){U(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class Re{constructor({uid:e,auth:t,stsTokenManager:n,...i}){this.providerId="firebase",this.proactiveRefresh=new Gy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await is(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zy(this,e)}reload(){return Ky(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Re({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ui(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await is(this,qy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,i=t.email??void 0,a=t.phoneNumber??void 0,o=t.photoURL??void 0,u=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:I,isAnonymous:x,providerData:N,stsTokenManager:L}=t;U(m&&L,e,"internal-error");const R=nn.fromJSON(this.name,L);U(typeof m=="string",e,"internal-error"),ut(n,e.name),ut(i,e.name),U(typeof I=="boolean",e,"internal-error"),U(typeof x=="boolean",e,"internal-error"),ut(a,e.name),ut(o,e.name),ut(u,e.name),ut(l,e.name),ut(d,e.name),ut(p,e.name);const B=new Re({uid:m,auth:e,email:i,emailVerified:I,displayName:n,isAnonymous:x,photoURL:o,phoneNumber:a,tenantId:u,stsTokenManager:R,createdAt:d,lastLoginAt:p});return N&&Array.isArray(N)&&(B.providerData=N.map(G=>({...G}))),l&&(B._redirectEventId=l),B}static async _fromIdTokenResponse(e,t,n=!1){const i=new nn;i.updateFromServerResponse(t);const a=new Re({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ui(a),a}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];U(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?vh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),u=new nn;u.updateFromIdToken(n);const l=new Re({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new jr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(l,d),l}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const su=new Map;function We(s){tt(s instanceof Function,"Expected a class definition");let e=su.get(s);return e?(tt(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,su.set(s,e),e)}/**
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
*/class wh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wh.type="NONE";const iu=wh;/**
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
*/function Hs(s,e,t){return`firebase:${s}:${e}:${t}`}class sn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:a}=this.auth;this.fullUserKey=Hs(this.userKey,i.apiKey,a),this.fullPersistenceKey=Hs("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ci(this.auth,{idToken:e}).catch(()=>{});return t?Re._fromGetAccountInfoResponse(this.auth,t,e):null}return Re._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new sn(We(iu),e,n);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let a=i[0]||We(iu);const o=Hs(n,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(o);if(p){let m;if(typeof p=="string"){const I=await ci(e,{idToken:p}).catch(()=>{});if(!I)break;m=await Re._fromGetAccountInfoResponse(e,I,p)}else m=Re._fromJSON(e,p);d!==a&&(u=m),a=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new sn(a,e,n):(a=l[0],u&&await a._set(o,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==a)try{await d._remove(o)}catch{}})),new sn(a,e,n))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ru(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_h(e))return"Blackberry";if(Ah(e))return"Webos";if(Eh(e))return"Safari";if((e.includes("chrome/")||Th(e))&&!e.includes("edge/"))return"Chrome";if(Ih(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function bh(s=Te()){return/firefox\//i.test(s)}function Eh(s=Te()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Th(s=Te()){return/crios\//i.test(s)}function Sh(s=Te()){return/iemobile/i.test(s)}function Ih(s=Te()){return/android/i.test(s)}function _h(s=Te()){return/blackberry/i.test(s)}function Ah(s=Te()){return/webos/i.test(s)}function La(s=Te()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Jy(s=Te()){var e;return La(s)&&!!((e=window.navigator)!=null&&e.standalone)}function Yy(){return Qd()&&document.documentMode===10}function Ch(s=Te()){return La(s)||Ih(s)||Ah(s)||_h(s)||/windows phone/i.test(s)||Sh(s)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function xh(s,e=[]){let t;switch(s){case"Browser":t=ru(Te());break;case"Worker":t=`${ru(Te())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mn}/${n}`}/**
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
*/class Zy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=a=>new Promise((o,u)=>{try{const l=e(a);o(l)}catch(l){u(l)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
*/async function ev(s,e={}){return Tn(s,"GET","/v2/passwordPolicy",Da(s,e))}/**
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
*/const tv=6;class nv{constructor(e){var t;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??tv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((t=e.allowedNonAlphanumericCharacters)==null?void 0:t.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sv{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new au(this),this.idTokenSubscription=new au(this),this.beforeStateQueue=new Zy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=We(t)),this._initializationPromise=this.queue(async()=>{var n,i,a;if(!this._deleted&&(this.persistenceManager=await sn.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ci(this,{idToken:e}),n=await Re._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ve(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)==null?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===u)&&l!=null&&l.user&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ui(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(Mt(this));const t=e?_e(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(We(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ev(this),t=new nv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new rs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Xy(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&We(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[We(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let o=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(u,this,"internal-error"),u.then(()=>{o||a(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&Oy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Oa(s){return _e(s)}class au{constructor(e){this.auth=e,this.observer=null,this.addObserver=sf(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iv(s){Pa=s}function rv(s){return Pa.loadJS(s)}function av(){return Pa.gapiScript}function ov(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function cv(s,e){const t=Gr(s,"auth");if(t.isInitialized()){const n=t.getImmediate(),i=t.getOptions();if(Ut(i,e??{}))return n;et(n,"already-initialized")}return t.initialize({options:e})}function uv(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(We);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function lv(s,e,t){const n=Oa(s);U(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,a=kh(e),{host:o,port:u}=hv(e),l=u===null?"":`:${u}`,d={url:`${a}//${o}${l}/`},p=Object.freeze({host:o,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){U(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),U(Ut(d,n.config.emulator)&&Ut(p,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=p,n.settings.appVerificationDisabledForTesting=!0,pn(o)?(Au(`${a}//${o}${l}`),Cu("Auth",!0)):dv()}function kh(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function hv(s){const e=kh(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const a=i[1];return{host:a,port:ou(n.substr(a.length+1))}}else{const[a,o]=n.split(":");return{host:a,port:ou(o)}}}function ou(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function dv(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,t){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function rn(s,e){return $y(s,"POST","/v1/accounts:signInWithIdp",Da(s,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const fv="http://localhost";class $t extends Nh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,...a}=t;if(!n||!i)return null;const o=new $t(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return rn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,rn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rn(e,t)}buildRequest(){const e={requestUri:fv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=as(t)}return e}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Dh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
*/class ps extends Dh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class lt extends ps{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ht extends ps{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ht.credential(t,n)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class dt extends ps{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.GITHUB_SIGN_IN_METHOD="github.com";dt.PROVIDER_ID="github.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ft extends ps{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ft.credential(t,n)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const a=await Re._fromIdTokenResponse(e,n,i),o=cu(n);return new fn({user:a,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=cu(n);return new fn({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function cu(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class li extends nt{constructor(e,t,n,i){super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,li.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new li(e,t,n,i)}}function Rh(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?li._fromErrorAndOperation(s,i,e,n):i})}async function pv(s,e,t=!1){const n=await is(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return fn._forOperation(s,"link",n)}/**
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
*/async function mv(s,e,t=!1){const{auth:n}=s;if(Ve(n.app))return Promise.reject(Mt(n));const i="reauthenticate";try{const a=await is(s,Rh(n,i,e,s),t);U(a.idToken,n,"internal-error");const o=Ra(a.idToken);U(o,n,"internal-error");const{sub:u}=o;return U(s.uid===u,n,"user-mismatch"),fn._forOperation(s,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&et(n,"user-mismatch"),a}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function gv(s,e,t=!1){if(Ve(s.app))return Promise.reject(Mt(s));const n="signIn",i=await Rh(s,n,e),a=await fn._fromIdTokenResponse(s,n,i);return t||await s._updateCurrentUser(a.user),a}function yv(s,e,t,n){return _e(s).onIdTokenChanged(e,t,n)}function vv(s,e,t){return _e(s).beforeAuthStateChanged(e,t)}const hi="__sak";/**
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
*/class Lh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hi,"1"),this.storage.removeItem(hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const wv=1e3,bv=10;class Oh extends Lh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ch(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,u,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},a=this.storage.getItem(n);Yy()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bv):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},wv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oh.type="LOCAL";const Ev=Oh;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ph extends Lh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ph.type="SESSION";const Mh=Ph;/**
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
*/class Di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Di(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:a}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const u=Array.from(o).map(async d=>d(t.origin,a)),l=await Tv(u);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Di.receivers=[];/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ma(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
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
*/class Sv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((u,l)=>{const d=Ma("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(m){const I=m;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(p),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(I.data.response);break;default:clearTimeout(p),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function He(){return window}function Iv(s){He().location.href=s}/**
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
*/function Uh(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function _v(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Av(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function Cv(){return Uh()?self:null}/**
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
*/const Fh="firebaseLocalStorageDb",xv=1,di="firebaseLocalStorage",Vh="fbase_key";class ms{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ri(s,e){return s.transaction([di],e?"readwrite":"readonly").objectStore(di)}function kv(){const s=indexedDB.deleteDatabase(Fh);return new ms(s).toPromise()}function qr(){const s=indexedDB.open(Fh,xv);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(di,{keyPath:Vh})}catch(i){t(i)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(di)?e(n):(n.close(),await kv(),e(await qr()))})})}async function uu(s,e,t){const n=Ri(s,!0).put({[Vh]:e,value:t});return new ms(n).toPromise()}async function Nv(s,e){const t=Ri(s,!1).get(e),n=await new ms(t).toPromise();return n===void 0?null:n.value}function lu(s,e){const t=Ri(s,!0).delete(e);return new ms(t).toPromise()}const Dv=800,Rv=3;class Bh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Rv)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Di._getInstance(Cv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _v(),!this.activeServiceWorker)return;this.sender=new Sv(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(e=n[0])!=null&&e.fulfilled&&(t=n[0])!=null&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Av()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qr();return await uu(e,hi,"1"),await lu(e,hi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>uu(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Nv(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Ri(i,!1).getAll();return new ms(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bh.type="LOCAL";const Lv=Bh;new fs(3e4,6e4);/**
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
*/function Ov(s,e){return e?We(e):(U(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
*/class Ua extends Nh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pv(s){return gv(s.auth,new Ua(s),s.bypassAuthState)}function Mv(s){const{auth:e,user:t}=s;return U(t,e,"internal-error"),mv(t,new Ua(s),s.bypassAuthState)}async function Uv(s){const{auth:e,user:t}=s;return U(t,e,"internal-error"),pv(t,new Ua(s),s.bypassAuthState)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $h{constructor(e,t,n,i,a=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:a,error:o,type:u}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pv;case"linkViaPopup":case"linkViaRedirect":return Uv;case"reauthViaPopup":case"reauthViaRedirect":return Mv;default:et(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Fv=new fs(2e3,1e4);class Zt extends $h{constructor(e,t,n,i,a){super(e,t,i,a),this.provider=n,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=Ma();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Fv.get())};e()}}Zt.currentPopupAction=null;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Vv="pendingRedirect",Gs=new Map;class Bv extends $h{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Gs.get(this.auth._key());if(!e){try{const t=await $v(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Gs.set(this.auth._key(),e)}return this.bypassAuthState||Gs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $v(s,e){const t=zv(e),n=qv(s);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function jv(s,e){Gs.set(s._key(),e)}function qv(s){return We(s._redirectPersistence)}function zv(s){return Hs(Vv,s.config.apiKey,s.name)}async function Hv(s,e,t=!1){if(Ve(s.app))return Promise.reject(Mt(s));const n=Oa(s),i=Ov(n,e),a=await new Bv(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Gv=10*60*1e3;class Kv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!jh(e)){const i=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(ze(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gv&&this.cachedEventUids.clear(),this.cachedEventUids.has(hu(e))}saveEventToCache(e){this.cachedEventUids.add(hu(e)),this.lastProcessedEventTime=Date.now()}}function hu(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function jh({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wv(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jh(s);default:return!1}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Qv(s,e={}){return Tn(s,"GET","/v1/projects",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Xv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jv=/^https?/;async function Yv(s){if(s.config.emulator)return;const{authorizedDomains:e}=await Qv(s);for(const t of e)try{if(Zv(t))return}catch{}et(s,"unauthorized-domain")}function Zv(s){const e=$r(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const a=new URL(s);return a.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Jv.test(t))return!1;if(Xv.test(s))return n===s;const i=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
*/const ew=new fs(3e4,6e4);function du(){const s=He().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function tw(s){return new Promise((e,t)=>{var n,i,a;function o(){du(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{du(),t(ze(s,"network-request-failed"))},timeout:ew.get()})}if((i=(n=He().gapi)==null?void 0:n.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=He().gapi)!=null&&a.load)o();else{const u=ov("iframefcb");return He()[u]=()=>{gapi.load?o():t(ze(s,"network-request-failed"))},rv(`${av()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw Ks=null,e})}let Ks=null;function nw(s){return Ks=Ks||tw(s),Ks}/**
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
*/const sw=new fs(5e3,15e3),iw="__/auth/iframe",rw="emulator/auth/iframe",aw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ow=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cw(s){const e=s.config;U(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?Na(e,rw):`https://${s.config.authDomain}/${iw}`,n={apiKey:e.apiKey,appName:s.name,v:mn},i=ow.get(s.config.apiHost);i&&(n.eid=i);const a=s._getFrameworks();return a.length&&(n.fw=a.join(",")),`${t}?${as(n).slice(1)}`}async function uw(s){const e=await nw(s),t=He().gapi;return U(t,s,"internal-error"),e.open({where:document.body,url:cw(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aw,dontclear:!0},n=>new Promise(async(i,a)=>{await n.restyle({setHideOnLeave:!1});const o=ze(s,"network-request-failed"),u=He().setTimeout(()=>{a(o)},sw.get());function l(){He().clearTimeout(u),i(n)}n.ping(l).then(l,()=>{a(o)})}))}/**
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
*/const lw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hw=500,dw=600,fw="_blank",pw="http://localhost";class fu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mw(s,e,t,n=hw,i=dw){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const l={...lw,width:n.toString(),height:i.toString(),top:a,left:o},d=Te().toLowerCase();t&&(u=Th(d)?fw:t),bh(d)&&(e=e||pw,l.scrollbars="yes");const p=Object.entries(l).reduce((I,[x,N])=>`${I}${x}=${N},`,"");if(Jy(d)&&u!=="_self")return gw(e||"",u),new fu(null);const m=window.open(e||"",u,p);U(m,s,"popup-blocked");try{m.focus()}catch{}return new fu(m)}function gw(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
*/const yw="__/auth/handler",vw="emulator/auth/handler",ww=encodeURIComponent("fac");async function pu(s,e,t,n,i,a){U(s.config.authDomain,s,"auth-domain-config-required"),U(s.config.apiKey,s,"invalid-api-key");const o={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:mn,eventId:i};if(e instanceof Dh){e.setDefaultLanguage(s.languageCode),o.providerId=e.providerId||"",nf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof ps){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}s.tenantId&&(o.tid=s.tenantId);const u=o;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const l=await s._getAppCheckToken(),d=l?`#${ww}=${encodeURIComponent(l)}`:"";return`${bw(s)}?${as(u).slice(1)}${d}`}function bw({config:s}){return s.emulator?Na(s,vw):`https://${s.authDomain}/${yw}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const yr="webStorageSupport";class Ew{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mh,this._completeRedirectFn=Hv,this._overrideRedirectResult=jv}async _openPopup(e,t,n,i){var a;tt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await pu(e,t,n,$r(),i);return mw(e,o,Ma())}async _openRedirect(e,t,n,i){await this._originValidation(e);const a=await pu(e,t,n,$r(),i);return Iv(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(tt(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await uw(e),n=new Kv(e);return t.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yr,{type:yr},n=>{var i;const a=(i=n==null?void 0:n[0])==null?void 0:i[yr];a!==void 0&&t(!!a),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ch()||Eh()||La()}}const Tw=Ew;var mu="@firebase/auth",gu="1.11.0";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Sw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Iw(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _w(s){an(new Ft("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:u}=n.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:u,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xh(s)},d=new sv(n,i,a,l);return uv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),an(new Ft("auth-internal",e=>{const t=Oa(e.getProvider("auth").getImmediate());return(n=>new Sw(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(mu,gu,Iw(s)),yt(mu,gu,"esm2020")}/**
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
*/const Aw=5*60,Cw=_u("authIdTokenMaxAge")||Aw;let yu=null;const xw=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Cw)return;const i=t==null?void 0:t.token;yu!==i&&(yu=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kw(s=Du()){const e=Gr(s,"auth");if(e.isInitialized())return e.getImmediate();const t=cv(s,{popupRedirectResolver:Tw,persistence:[Lv,Ev,Mh]}),n=_u("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(n,location.origin);if(location.origin===a.origin){const o=xw(a.toString());vv(t,o,()=>o(t.currentUser)),yv(t,u=>o(u))}}const i=Su("auth");return i&&lv(t,`http://${i}`),t}function Nw(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}iv({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=i=>{const a=ze("internal-error");a.customData=i,t(a)},n.type="text/javascript",n.charset="UTF-8",Nw().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_w("Browser");const Dw={apiKey:"AIzaSyAYy5QZzuXAoTGu2NVO6wAx1Q3tXMqO8SI",authDomain:"splitwiseclone-d9135.firebaseapp.com",projectId:"splitwiseclone-d9135",storageBucket:"splitwiseclone-d9135.firebasestorage.app",messagingSenderId:"1067457595825",appId:"1:1067457595825:web:54d33ba82260f11ef39590"},qh=Nu(Dw),vu=hy(qh);kw(qh);console.log("🔥 FIREBASE CONFIG LOADING...");console.log("✅ FIREBASE-ONLY MODE ACTIVATED ✅");console.log("🔥 Firebase initialized with project:","splitwiseclone-d9135");Ny(()=>Promise.resolve().then(()=>Rw)).then(s=>{console.log("🔥 Testing Firebase connection..."),s.firebaseService.getUsers().then(e=>console.log("🔥 Firebase works! Users found:",e.length)).catch(e=>console.error("🔥 Firebase connection failed:",e))}).catch(s=>console.error("🔥 Failed to load FirebaseService:",s));class zh{constructor(){K(this,"usersCollection",Gc(vu,"user")),K(this,"expensesCollection",Gc(vu,"expenses"))}async getUsers(){try{return(await Vn(this.usersCollection)).docs.map(e=>{var t;const n=e.data();return{id:e.id,name:n.name,username:n.username,avatar:n.avatar,role:n.isAdmin===!0?"admin":n.role||"user",createdAt:((t=n.createdAt)==null?void 0:t.toDate())||new Date,isActive:n.isActive===!0}})}catch(e){throw console.error("Error getting users:",e),e}}async getUserByUsername(e){var t;try{console.log("🔥 FirebaseService: Querying Firestore for username:",e),console.log("🔥 FirebaseService: Collection name:","user"),console.log("🔥 FirebaseService: Query field:","username");const n=mr(this.usersCollection,Xc("username","==",e)),i=await Vn(n);console.log("🔥 FirebaseService: Query result - empty:",i.empty,"size:",i.size),console.log("🔥 FirebaseService: Query result - empty:",i.empty,"size:",i.size);const a=await Vn(this.usersCollection);if(console.log("🔥 FirebaseService: ALL DOCUMENTS in collection:",a.size),a.forEach(d=>{const p=d.data();console.log("🔥 FirebaseService: Document:",d.id,"username:",p.username,"isActive:",p.isActive)}),i.empty?console.log("🔥 FirebaseService: No documents found with query"):(console.log("🔥 FirebaseService: Found documents with query:"),i.forEach(d=>{console.log("🔥 FirebaseService: Query result doc:",d.id,d.data())})),i.empty)return console.log("🔥 FirebaseService: No user found with username:",e),null;const o=i.docs[0],u=o.data();console.log("🔥 FirebaseService: Raw user data from Firestore:",u),console.log("🔥🔥🔥 CRITICAL DEBUG 🔥🔥🔥"),console.log("🔥 RAW userData.isActive:",u.isActive),console.log("🔥 RAW userData.isActive TYPE:",typeof u.isActive),console.log("🔥 RAW userData.isActive === true:",u.isActive===!0),console.log("🔥 RAW userData.isActive === false:",u.isActive===!1),u.isActive===!1&&alert("🔥 FIREBASE RAW DATA SHOWS isActive = FALSE for user: "+u.username);const l={id:o.id,name:u.name,username:u.username,avatar:u.avatar,role:u.isAdmin===!0?"admin":u.role||"user",createdAt:((t=u.createdAt)==null?void 0:t.toDate())||new Date,isActive:u.isActive===!0,password:u.password};return console.log("🔥 FirebaseService: Processed user:",l),console.log("🔥 FirebaseService: Password field exists:",!!l.password),l}catch(n){throw console.error("🔥 FirebaseService: Error getting user by username:",n),n}}async createUser(e){try{return{id:(await eu(this.usersCollection,{...e,createdAt:new Date})).id,...e,createdAt:new Date}}catch(t){throw console.error("Error creating user:",t),t}}async updateUser(e,t){var n,i;try{const a=js(this.usersCollection,e);await xy(a,t);const o=await Cy(a);return{id:o.id,...o.data(),createdAt:((i=(n=o.data())==null?void 0:n.createdAt)==null?void 0:i.toDate())||new Date}}catch(a){throw console.error("Error updating user:",a),a}}async deleteUser(e){try{const t=js(this.usersCollection,e);await Zc(t)}catch(t){throw console.error("Error deleting user:",t),t}}async getExpenses(){try{const e=mr(this.expensesCollection,Sy("date","desc"));return(await Vn(e)).docs.map(t=>{var n;return{id:t.id,...t.data(),date:((n=t.data().date)==null?void 0:n.toDate())||new Date}})}catch(e){throw console.error("Error getting expenses:",e),e}}async createExpense(e){try{console.log("🔥🔥🔥 FirebaseService: createExpense called with:",e),console.log("🔥 FirebaseService: Collection name:","expenses"),console.log("🔥 FirebaseService: About to call addDoc...");const t={description:e.description||"Expense",amount:e.amount||0,currency:e.currency||"VND",paidBy:e.paidBy||"",splitBetween:Array.isArray(e.splitBetween)?e.splitBetween:[],splitType:e.splitType||"equal",category:e.category||"other",date:new Date(e.date)};Object.keys(t).forEach(a=>{t[a]===void 0&&delete t[a]}),console.log("🔥 FirebaseService: Original data:",e),console.log("🔥 FirebaseService: Clean data:",t),console.log("🔥 FirebaseService: Clean data keys:",Object.keys(t));const n=await eu(this.expensesCollection,t);console.log("🔥 FirebaseService: addDoc successful, docRef.id:",n.id);const i={id:n.id,...e};return console.log("🔥 FirebaseService: Returning expense:",i),i}catch(t){throw console.error("❌ FirebaseService: Error creating expense:",t),t}}async deleteExpense(e){try{const t=js(this.expensesCollection,e);await Zc(t)}catch(t){throw console.error("Error deleting expense:",t),t}}async authenticateUser(e,t){var n;try{console.log("🔥🔥🔥 AUTHENTICATION ATTEMPT 🔥🔥🔥"),console.log("🔥 FirebaseService: authenticateUser called with:",{username:e,password:t}),console.log("🔥 FirebaseService: Checking RAW Firebase data directly...");const i=mr(this.usersCollection,Xc("username","==",e)),a=await Vn(i);if(a.empty)return console.log("🔥 FirebaseService: No user found with username:",e),null;const o=a.docs[0],u=o.data();if(console.log("🔥🔥🔥 RAW FIREBASE DATA 🔥🔥🔥"),console.log("🔥 RAW rawUserData:",u),console.log("🔥 RAW rawUserData.isActive:",u.isActive),console.log("🔥 RAW rawUserData.isActive TYPE:",typeof u.isActive),console.log("🔥 RAW rawUserData.password:",u.password),u.password!==t)return console.log("🔥 FirebaseService: Password MISMATCH"),null;if(console.log("🔥 FirebaseService: Password match SUCCESS"),u.isActive!==!0)throw console.error("🚫🚫🚫 FIREBASE RAW DATA SHOWS USER INACTIVE 🚫🚫🚫"),console.error("� RAW isActive value:",u.isActive),console.error("🚫 RAW isActive === true:",u.isActive===!0),alert("🚫 TÀI KHOẢN BỊ VÔ HIỆU HÓA - Firebase data: "+u.isActive),new Error("Tài khoản đã bị vô hiệu hóa. Vui lòng liên hệ quản trị viên.");console.log("🔥 FirebaseService: RAW Firebase confirms user is active, proceeding...");const l={id:o.id,name:u.name,username:u.username,avatar:u.avatar,role:u.isAdmin===!0?"admin":"user",createdAt:((n=u.createdAt)==null?void 0:n.toDate())||new Date,isActive:u.isActive};if(l.isActive!==!0)throw console.error("🚨🚨🚨 PARANOID CHECK: About to return user with isActive !== true 🚨🚨🚨"),alert("🚨 PARANOID: Blocking return of inactive user: "+l.isActive),new Error("PARANOID CHECK: Cannot return inactive user");return l}catch(i){throw console.error("🔥 FirebaseService: Error authenticating user:",i),i}}}const Fe=new zh,Rw=Object.freeze(Object.defineProperty({__proto__:null,FirebaseService:zh,firebaseService:Fe},Symbol.toStringTag,{value:"Module"}));class Lw{constructor(){console.log("🔥 AuthService: Initialized with Firebase-only mode")}async login(e){var t,n,i;try{console.log("🚀 AuthService: Starting Firebase-only login"),console.log("🔥🔥🔥 NUCLEAR DIRECT FIREBASE CHECK 🔥🔥🔥");const a=await Fe.getUserByUsername(e.username);if(a&&(console.log("🔥 Direct Firebase check - Raw isActive:",a.isActive),a.isActive!==!0))throw console.error("🚫🚫🚫 NUCLEAR BLOCK AT LOGIN START 🚫🚫🚫"),window.NUCLEAR_BLOCKED_AT_START=!0,alert("🚫 NUCLEAR BLOCK: User inactive at start - "+a.isActive),new Error("User blocked at login start - isActive: "+a.isActive);const o=await Fe.authenticateUser(e.username,e.password);if(!o)throw new Error("Invalid credentials");if(console.log("🔥 User from Firebase:",o),console.log("🔥 User role:",o.role),console.log("🔥 User isAdmin:",o.isAdmin),console.log("🔥🔥🔥 AUTHSERVICE NUCLEAR CHECK 🔥🔥🔥"),console.log("🔥 AuthService: user.isActive:",o.isActive),console.log("🔥 AuthService: user.isActive type:",typeof o.isActive),window.LAST_LOGIN_ATTEMPT={username:e.username,isActive:o.isActive,timestamp:Date.now()},o.isActive!==!0)throw console.error("🚫🚫🚫 AUTHSERVICE BLOCKS LOGIN - USER NOT ACTIVE 🚫🚫🚫"),window.BLOCKED_BY_AUTHSERVICE=!0,alert("🚫 AUTHSERVICE BLOCK: isActive = "+o.isActive),new Error("Tài khoản đã bị vô hiệu hóa trong AuthService.");const u={isAuthenticated:!0,currentUser:{id:o.id,name:o.name,username:o.username,role:o.isAdmin===!0?"admin":o.role||"user",createdAt:new Date(o.createdAt||Date.now()),isActive:o.isActive,avatar:o.avatar},token:this.generateToken()};if(((t=u.currentUser)==null?void 0:t.isActive)!==!0)throw console.error("🚨🚨🚨 FINAL FAIL-SAFE TRIGGERED 🚨🚨🚨"),console.error("🚨 AuthState has isActive:",(n=u.currentUser)==null?void 0:n.isActive),window.FINAL_FAILSAFE_TRIGGERED=!0,alert("🚨 FINAL FAIL-SAFE: Blocking login with isActive = "+((i=u.currentUser)==null?void 0:i.isActive)),new Error("FINAL FAIL-SAFE: User not active in final auth state.");return console.log("🔥 Final auth state:",u),u}catch(a){throw new Error(a instanceof Error?a.message:"Login failed")}}logout(){}getCurrentAuth(){return{isAuthenticated:!1,currentUser:null}}async createUser(e){try{const t=await Fe.createUser({name:e.name,username:e.username,role:"user",isActive:!0,createdAt:new Date,password:e.password,isAdmin:!1});return{id:t.id,name:t.name,username:t.username,role:"user",createdAt:t.createdAt,isActive:!0}}catch(t){throw new Error(t instanceof Error?t.message:"Failed to create user in Firebase")}}async getAllUsers(){try{return(await Fe.getUsers()).map(e=>({...e,role:e.isAdmin?"admin":"user"}))}catch(e){throw console.error("Failed to fetch users from Firebase:",e),e}}async updateUser(e,t){try{const n={...t,isAdmin:t.role==="admin"};delete n.role,console.log("🔥 AuthService: Updating user via Firebase:",e,n);const i=await Fe.updateUser(e,n);return console.log("🔥 AuthService: User updated successfully via Firebase:",i),i}catch(n){throw new Error(n instanceof Error?n.message:"Failed to update user")}}async deleteUser(e){try{console.log("🔥 AuthService: Deleting user via Firebase:",e),await Fe.deleteUser(e),console.log("🔥 AuthService: User deleted successfully from Firebase")}catch(t){throw console.error("🔥 AuthService: Failed to delete user:",t),new Error(t instanceof Error?t.message:"Failed to delete user from Firebase")}}generateToken(){return`token_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}isAdmin(e){return(e==null?void 0:e.role)==="admin"}}console.log("🚀🚀🚀 NUCLEAR VERSION v5.0.0-ISACTIVE-BLOCK 🚀🚀🚀");console.log("🚀 MAIN.TS LOADED SUCCESSFULLY");console.log("🚀 Date:",new Date().toISOString());document.title="Splitwise Clone v5.0.0-NUCLEAR";console.log("=== FIREBASE ONLY MODE - NUCLEAR ISACTIVE CHECK ===");console.log("🔥 Build timestamp:",new Date().toISOString());window.NUCLEAR_VERSION="v5.0.0-ISACTIVE-BLOCK";console.log("🔥 Version: v3.0.0-apiservice-disabled");console.log("🔥 Force new build hash:",Math.random());console.log("All data stored in Firestore");console.log("============================");class Ow{constructor(){K(this,"users",[]),K(this,"expenses",[]),K(this,"completedSettlements",[]),K(this,"currentUser",null),K(this,"addExpenseModal"),K(this,"authService"),K(this,"currentFilter",""),this.authService=new Lw;const e=this.authService.getCurrentAuth();e.isAuthenticated&&e.currentUser&&(this.currentUser=e.currentUser,this.initializeData()),this.addExpenseModal=new ir(this.users,this.currentUser,t=>this.addExpense(t)),this.render(),this.setupEventListeners(),window.deleteExpense=t=>this.deleteExpense(t),window.markSettlementComplete=(t,n,i)=>this.markSettlementComplete(t,n,i),window.editUser=t=>this.editUser(t)}async initializeData(){try{this.users=await this.authService.getAllUsers(),this.users=this.users.filter(e=>e.isActive),this.expenses=await this.loadExpenses(),this.completedSettlements=await this.loadCompletedSettlements()}catch(e){throw console.error("Failed to initialize data:",e),e}}async loadExpenses(){try{return await Fe.getExpenses()}catch(e){throw console.error("Failed to load expenses from Firebase:",e),e}}async loadCompletedSettlements(){try{return[]}catch(e){return console.error("Failed to load settlements from Firebase:",e),[]}}async saveCompletedSettlements(){}render(){const e=document.getElementById("app");if(!this.currentUser){e.innerHTML=this.renderLoginScreen();return}e.innerHTML=`
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
    `}renderStatsCards(){if(!this.currentUser)return"";const e=this.expenses.reduce((a,o)=>a+o.amount,0),t=this.expenses.filter(a=>a.paidBy===this.currentUser.id).reduce((a,o)=>a+o.amount,0),n=sr(this.expenses,this.users)[this.currentUser.id],i=n?n.totalOwed-n.totalOwes:0;return`
      <div class="card text-center">
        <div class="text-2xl mb-2">💰</div>
        <div class="text-2xl font-bold text-gray-800">${ie(e)}</div>
        <div class="text-sm text-gray-600">Tổng chi phí</div>
      </div>
      
      <div class="card text-center">
        <div class="text-2xl mb-2">🎯</div>
        <div class="text-2xl font-bold text-gray-800">${ie(t)}</div>
        <div class="text-sm text-gray-600">Bạn đã trả</div>
      </div>
      
      <div class="card text-center">
        <div class="text-2xl mb-2">${i>=0?"💚":"💔"}</div>
        <div class="text-2xl font-bold ${i>=0?"text-green-600":"text-red-600"}">
          ${i>=0?"+":""}${ie(i)}
        </div>
        <div class="text-sm text-gray-600">Số dư của bạn</div>
      </div>
    `}renderBalanceSection(){if(!this.currentUser)return"";const e=sr(this.expenses,this.users),t=e[this.currentUser.id];return t?new xd(t,this.users,e).render():`
        <div class="card text-center py-8">
          <div class="text-4xl mb-4">🎉</div>
          <h2 class="text-xl font-semibold mb-2">Chưa có giao dịch nào</h2>
          <p class="text-gray-500">Thêm chi phí đầu tiên để bắt đầu!</p>
        </div>
      `}renderSettlementSection(){const e=sr(this.expenses,this.users);return new kd(this.users,e,this.currentUser,this.completedSettlements).render()}renderExpensesList(){const e=this.getFilteredExpenses();return e.length===0?`
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
      `:e.map(t=>new Cd(t,this.users,this.currentUser,()=>this.deleteExpense(t.id)).render()).join("")}getFilteredExpenses(){return this.currentFilter?this.expenses.filter(e=>e.category===this.currentFilter):this.expenses}setupEventListeners(){var e,t,n,i,a,o;(e=document.getElementById("showLoginBtn"))==null||e.addEventListener("click",()=>{this.showLoginModal()}),(t=document.getElementById("logoutBtn"))==null||t.addEventListener("click",()=>{this.logout()}),(n=document.getElementById("userManagementBtn"))==null||n.addEventListener("click",()=>{this.showUserManagementModal()}),(i=document.getElementById("addExpenseBtn"))==null||i.addEventListener("click",()=>{this.addExpenseModal.show()}),(a=document.getElementById("filterCategory"))==null||a.addEventListener("change",u=>{this.currentFilter=u.target.value,this.updateExpensesList(),this.updateFilterControls()}),(o=document.getElementById("clearFilter"))==null||o.addEventListener("click",()=>{this.currentFilter="";const u=document.getElementById("filterCategory");u&&(u.value=""),this.updateExpensesList(),this.updateFilterControls()})}async addExpense(e){try{console.log("🔥🔥🔥 Main.ts: addExpense called with:",e),console.log("🔥 Main.ts: Calling firebaseService.createExpense...");const t=await Fe.createExpense(e);console.log("🔥 Main.ts: Firebase returned:",t),this.expenses.unshift(t),this.updateAll(),console.log("🔥 Main.ts: Expense added successfully")}catch(t){throw console.error("❌ Failed to add expense to Firebase:",t),alert("❌ Lỗi khi lưu expense: "+(t instanceof Error?t.message:t)),t}}async deleteExpense(e){if(!this.currentUser||this.currentUser.role!=="admin"){alert("⚠️ Chỉ admin mới có thể xóa chi phí!");return}if(confirm("🗑️ Bạn có chắc chắn muốn xóa chi phí này không?"))try{await Fe.deleteExpense(e),this.expenses=this.expenses.filter(t=>t.id!==e),this.updateAll()}catch(t){console.error("Failed to delete expense from Firebase:",t),alert("❌ Không thể xóa chi phí. Vui lòng thử lại!")}}showLoginModal(){const e=new Nd(async t=>{var n,i,a;try{const o=await this.authService.login(t);if(console.log("🔥🔥🔥 MAIN.TS FINAL CHECK 🔥🔥🔥"),console.log("🔥 Main.ts: authState.currentUser?.isActive:",(n=o.currentUser)==null?void 0:n.isActive),((i=o.currentUser)==null?void 0:i.isActive)!==!0)throw console.error("🚫🚫🚫 MAIN.TS FINAL BLOCK 🚫🚫🚫"),alert("🚫 MAIN.TS BLOCK: User not active"),new Error("User not active in main.ts check");this.currentUser=o.currentUser,await this.initializeData(),this.addExpenseModal=new ir(this.users,this.currentUser,u=>this.addExpense(u)),this.render(),this.setupEventListeners(),(a=document.getElementById("login-modal"))==null||a.remove()}catch(o){throw o}},()=>{var t;(t=document.getElementById("login-modal"))==null||t.remove()});document.body.insertAdjacentHTML("beforeend",e.render()),e.setupEventListeners()}logout(){confirm("🚪 Bạn có chắc chắn muốn đăng xuất không?")&&(this.authService.logout(),this.currentUser=null,this.users=[],this.expenses=[],this.render(),this.setupEventListeners())}async showUserManagementModal(){const e=await this.authService.getAllUsers(),t=new Bo(e,async n=>await this.authService.createUser(n),async(n,i)=>{await this.authService.updateUser(n,{isActive:i}),await this.initializeData(),this.addExpenseModal=new ir(this.users,this.currentUser,a=>this.addExpense(a))},()=>{var n;(n=document.getElementById("user-management-modal"))==null||n.remove()},this.authService);document.body.insertAdjacentHTML("beforeend",t.render()),t.setupEventListeners()}async editUser(e){if(document.querySelector("#user-management-modal")){const t=await this.authService.getAllUsers();new Bo(t,async n=>await this.authService.createUser(n),async(n,i)=>{await this.authService.updateUser(n,{isActive:i})},()=>{},this.authService).editUser(e)}}updateAll(){this.updateBalanceSection(),this.updateSettlementSection(),this.updateExpensesList(),this.updateStatsCards()}updateBalanceSection(){const e=document.getElementById("balanceSection");e&&(e.innerHTML=this.renderBalanceSection())}updateSettlementSection(){const e=document.getElementById("settlementSection");e&&(e.innerHTML=this.renderSettlementSection())}updateExpensesList(){const e=document.getElementById("expensesList");e&&(e.innerHTML=this.renderExpensesList())}updateStatsCards(){const e=document.querySelector(".grid.grid-cols-1.md\\:grid-cols-3");e&&(e.innerHTML=this.renderStatsCards())}updateFilterControls(){const e=document.getElementById("clearFilter");e&&(this.currentFilter?e.classList.remove("hidden"):e.classList.add("hidden"))}markSettlementComplete(e,t,n){if(!this.currentUser||this.currentUser.id!==t){alert("Chỉ người nhận tiền mới có thể xác nhận thanh toán!");return}const i={id:`settlement_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,from:e,to:t,amount:n,isSettled:!0,createdAt:new Date,settledAt:new Date};this.completedSettlements.push(i),this.saveCompletedSettlements(),this.render();const a=this.users.find(u=>u.id===e),o=this.users.find(u=>u.id===t);alert(`✅ Đã xác nhận nhận tiền từ ${a==null?void 0:a.name} cho ${o==null?void 0:o.name}: ${ie(n)}`)}}new Ow;
