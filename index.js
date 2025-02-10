import{i as g}from"./assets/vendor-I1I71QQ2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function h(t){t.preventDefault();const e=t.target.value.toLowerCase();document.querySelectorAll(".task-item").forEach(s=>{s.querySelector(".note-title").textContent.toLowerCase().includes(e)?s.style.display="block":s.style.display="none"})}function m(){l.modalBackDrop.classList.toggle("is-open"),setTimeout(()=>{l.modalInput.focus()},100)}function L(t){t.target===t.currentTarget&&l.modalBackDrop.classList.remove("is-open")}function p(t){return`<li class="task-item" data-id="${t.id}">
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
        </li>`}function d(t,e){const n=JSON.stringify(e);localStorage.setItem(t,n)}function u(t){const e=localStorage.getItem(t);try{const n=JSON.parse(e);return Array.isArray(n)?n:[]}catch{return[]}}const y="task-item-key",a="task-list-key";function v(t){const e={inputValue:t.currentTarget.elements["text-note"].value};d(y,e)}function k(t){let e=u(a);if(e.length===0){t.emptyBlock.style.display="block",t.clearListButton.style.display="none";return}else t.emptyBlock.style.display="none",t.clearListButton.style.display="block";const n=e.map(p).join("");t.taskList.innerHTML=n}function b(t,e){t.preventDefault();const n=t.target.elements["text-note"].value.trim();if(n)e.emptyBlock.style.display="none",e.clearListButton.style.display="block";else{g.warning({color:"violet",message:"Please, enter a note",position:"topRight"});return}const s=u(a)||[],o={id:Date.now(),taskText:n,completed:!1};s.push(o),d(a,s);const c=p(o);e.taskList.insertAdjacentHTML("beforeend",c),e.modalForm.reset(),e.modalBackDrop.classList.remove("is-open"),localStorage.removeItem(y)}function T(t){if(t.target.closest(".icon-trash")){const e=t.target.closest(".task-item");if(e){const n=Number(e.dataset.id);e.remove();let s=u(a);s=s.filter(o=>o.id!==n),d(a,s),s.length===0&&(l.emptyBlock.style.display="block",l.clearListButton.style.display="none")}}}function S(t){if(t.target.classList.contains("checkbox-input")){const n=t.target.closest(".task-item"),s=n.querySelector(".note-title"),o=t.target.checked;s.classList.toggle("completed",o);const c=Number(n.dataset.id),i=u(a)||[],r=i.findIndex(f=>f.id===c);r!==-1&&(i[r].completed=o,d(a,i))}}function B(t,e,n,s){if(t.key==="Enter"||t.type==="blur"){const o=e.textContent.trim();if(e.textContent=o||n,o&&o!==n){let c=u(a);c=c.map(i=>i.id===s?{...i,taskText:o}:i),d(a,c)}}}function x(t){const e=t.target;if(e.closest(".icon-pencil")||e.closest(".note-title")){const n=e.closest(".task-item"),s=n.querySelector(".note-title"),o=(s.textContent||"").trim(),c=Number(n.dataset.id);s.setAttribute("contenteditable","true"),s.classList.add("editing"),s.focus();const i=r=>{s.removeAttribute("contenteditable"),s.classList.remove("editing"),B(r,s,o,c)};s.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),i(r))}),s.addEventListener("blur",i)}}function I(t){T(t),S(t),x(t)}function E(t){const e=t.target.value;document.querySelectorAll(".task-item").forEach(s=>{const c=s.querySelector(".note-title").classList.contains("completed");e==="All"?(s.style.display="flex",l.clearListButton.style.display="block"):e==="Complete"&&c||e==="Incomplete"&&!c?(s.style.display="flex",l.clearListButton.style.display="none"):s.style.display="none"})}function q(){const t=document.body.classList.toggle("dark");d("theme",t?"dark":"")}const w=u("theme");w==="dark"&&document.body.classList.add("dark");function A(){d(a,[]),l.taskList.innerHTML="",l.emptyBlock.style.display="block",l.clearListButton.style.display="none",k(l)}const l={searchInput:document.querySelector("#search-note"),modalBackDrop:document.querySelector(".js-modal-backdrop"),addTaskButton:document.querySelector(".js-add-task"),cancelModalBtn:document.querySelector(".js-btn-cancel"),modalWindow:document.querySelector(".js-modal-window"),modalForm:document.querySelector(".js-modal-form"),modalInput:document.querySelector(".modal-input"),taskList:document.querySelector(".js-task-list"),emptyBlock:document.querySelector(".js-empty-block"),clearListButton:document.querySelector(".js-clear-list-button"),statusSelect:document.getElementById("status"),themeButton:document.querySelector(".theme-button")};l.searchInput.addEventListener("input",h);l.addTaskButton.addEventListener("click",m);l.cancelModalBtn.addEventListener("click",m);l.modalBackDrop.addEventListener("click",L);l.modalForm.addEventListener("input",t=>v(t));l.modalForm.addEventListener("submit",t=>b(t,l));l.taskList.addEventListener("click",I);l.statusSelect.addEventListener("change",E);l.themeButton.addEventListener("click",q);l.clearListButton.addEventListener("click",A);k(l);
//# sourceMappingURL=index.js.map
