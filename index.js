import{i as h}from"./assets/vendor-I1I71QQ2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(e){if(e.ep)return;e.ep=!0;const c=l(e);fetch(e.href,c)}})();function g(t){t.preventDefault();const s=t.target.value.toLowerCase(),l=document.querySelectorAll(".task-item");let n=!1;l.forEach(e=>{e.querySelector(".note-title").textContent.toLowerCase().includes(s)?(e.style.display="block",n=!0):e.style.display="none",s===""?(o.clearListButton.style.display="block",o.addTaskButton.style.display="flex",o.emptyBlock.style.display="none"):n?(o.emptyBlock.style.display="none",o.clearListButton.style.display="none",o.addTaskButton.style.display="none"):(o.clearListButton.style.display="none",o.addTaskButton.style.display="none",o.emptyBlock.style.display="block")})}function m(){o.modalBackDrop.classList.toggle("is-open"),setTimeout(()=>{o.modalInput.focus()},100)}function L(t){t.target===t.currentTarget&&o.modalBackDrop.classList.remove("is-open")}function p(t){return`<li class="task-item" data-id="${t.id}">
            <div class="check-input-text-container">
                <div class="checkbox-container">
                    <input 
                        class="checkbox-input" 
                        type="checkbox" 
                        id="note-check-${t.id}"
                        ${t.completed?"checked":""}
                    >
                    <label class="checkbox" for="note-check-${t.id}">
                        <svg class="checkbox-label-icon" width="18" height="18">
                            <use href="assets/icons.svg#icon-check"></use>
                        </svg>
                    </label>
                </div>
                <div class="note-date-container">
                    <p class="note-title ${t.completed?"completed":""}">${t.taskText}</p>
                </div>
            </div>
        
            <ul class="icon-list">
                <li class="icon-item">
                    <button class="icon-button js-edit" type="button">
                        <svg class="icon-pencil" width="15" height="15">
                            <use href="assets/icons.svg#icon-pencil"></use>
                        </svg>
                    </button>
                </li>
                <li class="icon-item">
                    <button class="icon-button js-delete" type="button">
                        <svg class="icon-trash" width="18" height="18">
                            <use href="assets/icons.svg#icon-trash"></use>
                        </svg>
                    </button>
                </li>
            </ul>
        </li>`}function d(t,s){const l=JSON.stringify(s);localStorage.setItem(t,l)}function u(t){const s=localStorage.getItem(t);try{const l=JSON.parse(s);return Array.isArray(l)?l:[]}catch{return[]}}const y="task-item-key",i="task-list-key";function b(t){const s={inputValue:t.currentTarget.elements["text-note"].value};d(y,s)}function k(t){let s=u(i);if(s.length===0){t.emptyBlock.style.display="block",t.clearListButton.style.display="none";return}else t.emptyBlock.style.display="none",t.clearListButton.style.display="block";const l=s.map(p).join("");t.taskList.innerHTML=l}function v(t,s){t.preventDefault();const l=t.target.elements["text-note"].value.trim();if(l)s.emptyBlock.style.display="none",s.clearListButton.style.display="block";else{h.warning({color:"violet",message:"Please, enter a note",position:"topRight"});return}const n=u(i)||[],e={id:Date.now(),taskText:l,completed:!1};n.push(e),d(i,n);const c=p(e);s.taskList.insertAdjacentHTML("beforeend",c),s.modalForm.reset(),s.modalBackDrop.classList.remove("is-open"),localStorage.removeItem(y)}function T(t){if(t.target.closest(".icon-trash")){const s=t.target.closest(".task-item");if(s){const l=Number(s.dataset.id);s.remove();let n=u(i);n=n.filter(e=>e.id!==l),d(i,n),n.length===0&&(o.emptyBlock.style.display="block",o.clearListButton.style.display="none")}}}function B(t){if(t.target.classList.contains("checkbox-input")){const l=t.target.closest(".task-item"),n=l.querySelector(".note-title"),e=t.target.checked;n.classList.toggle("completed",e);const c=Number(l.dataset.id),a=u(i)||[],r=a.findIndex(f=>f.id===c);r!==-1&&(a[r].completed=e,d(i,a))}}function S(t,s,l,n){if(t.key==="Enter"||t.type==="blur"){const e=s.textContent.trim();if(s.textContent=e||l,e&&e!==l){let c=u(i);c=c.map(a=>a.id===n?{...a,taskText:e}:a),d(i,c)}}}function x(t){const s=t.target;if(s.closest(".icon-pencil")||s.closest(".note-title")){const l=s.closest(".task-item"),n=l.querySelector(".note-title"),e=(n.textContent||"").trim(),c=Number(l.dataset.id);n.setAttribute("contenteditable","true"),n.classList.add("editing"),n.focus();const a=r=>{n.removeAttribute("contenteditable"),n.classList.remove("editing"),S(r,n,e,c)};n.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),a(r))}),n.addEventListener("blur",a)}}function I(t){T(t),B(t),x(t)}function E(t){const s=t.target.value,l=document.querySelectorAll(".task-item");let n=!1;l.forEach(e=>{const a=e.querySelector(".note-title").classList.contains("completed");s==="All"||s==="Complete"&&a||s==="Incomplete"&&!a?(e.style.display="flex",n=!0):e.style.display="none"}),n?(o.emptyBlock.style.display="none",o.addTaskButton.style.display=s==="All"?"flex":"none"):(o.emptyBlock.style.display="block",o.addTaskButton.style.display="none"),o.clearListButton.style.display=s==="All"?"block":"none"}function q(){const t=document.body.classList.toggle("dark");d("theme",t?"dark":"")}const w=u("theme");w==="dark"&&document.body.classList.add("dark");function A(){d(i,[]),o.taskList.innerHTML="",o.emptyBlock.style.display="block",o.clearListButton.style.display="none",k(o)}const o={searchInput:document.querySelector("#search-note"),modalBackDrop:document.querySelector(".js-modal-backdrop"),addTaskButton:document.querySelector(".js-add-task"),cancelModalBtn:document.querySelector(".js-btn-cancel"),modalWindow:document.querySelector(".js-modal-window"),modalForm:document.querySelector(".js-modal-form"),modalInput:document.querySelector(".modal-input"),taskList:document.querySelector(".js-task-list"),emptyBlock:document.querySelector(".js-empty-block"),clearListButton:document.querySelector(".js-clear-list-button"),statusSelect:document.getElementById("status"),themeButton:document.querySelector(".theme-button")};o.searchInput.addEventListener("input",g);o.addTaskButton.addEventListener("click",m);o.cancelModalBtn.addEventListener("click",m);o.modalBackDrop.addEventListener("click",L);o.modalForm.addEventListener("input",t=>b(t));o.modalForm.addEventListener("submit",t=>v(t,o));o.taskList.addEventListener("click",I);o.statusSelect.addEventListener("change",E);o.themeButton.addEventListener("click",q);o.clearListButton.addEventListener("click",A);k(o);
//# sourceMappingURL=index.js.map
