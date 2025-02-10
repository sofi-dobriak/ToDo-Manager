import{i as g}from"./assets/vendor-I1I71QQ2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=c(o);fetch(o.href,l)}})();function h(t){t.preventDefault();const e=t.target.value.toLowerCase();document.querySelectorAll(".task-item").forEach(s=>{s.querySelector(".note-title").textContent.toLowerCase().includes(e)?s.style.display="block":s.style.display="none"})}function m(){n.modalBackDrop.classList.toggle("is-open"),setTimeout(()=>{n.modalInput.focus()},100)}function L(t){t.target===t.currentTarget&&n.modalBackDrop.classList.remove("is-open")}function p(t){return`<li class="task-item" data-id="${t.id}">
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
        </li>`}function d(t,e){const c=JSON.stringify(e);localStorage.setItem(t,c)}function u(t){const e=localStorage.getItem(t);try{const c=JSON.parse(e);return Array.isArray(c)?c:[]}catch{return[]}}const y="task-item-key",i="task-list-key";function v(t){const e={inputValue:t.currentTarget.elements["text-note"].value};d(y,e)}function k(t){let e=u(i);if(e.length===0){t.emptyBlock.style.display="block",t.clearListButton.style.display="none";return}else t.emptyBlock.style.display="none",t.clearListButton.style.display="block";const c=e.map(p).join("");t.taskList.innerHTML=c}function b(t,e){t.preventDefault();const c=t.target.elements["text-note"].value.trim();if(c)e.emptyBlock.style.display="none",e.clearListButton.style.display="block";else{g.warning({color:"violet",message:"Please, enter a note",position:"topRight"});return}const s=u(i)||[],o={id:Date.now(),taskText:c,completed:!1};s.push(o),d(i,s);const l=p(o);e.taskList.insertAdjacentHTML("beforeend",l),e.modalForm.reset(),e.modalBackDrop.classList.remove("is-open"),localStorage.removeItem(y)}function T(t){if(t.target.closest(".icon-trash")){const e=t.target.closest(".task-item");if(e){const c=Number(e.dataset.id);e.remove();let s=u(i);s=s.filter(o=>o.id!==c),d(i,s),s.length===0&&(n.emptyBlock.style.display="block",n.clearListButton.style.display="none")}}}function B(t){if(t.target.classList.contains("checkbox-input")){const c=t.target.closest(".task-item"),s=c.querySelector(".note-title"),o=t.target.checked;s.classList.toggle("completed",o);const l=Number(c.dataset.id),a=u(i)||[],r=a.findIndex(f=>f.id===l);r!==-1&&(a[r].completed=o,d(i,a))}}function S(t,e,c,s){if(t.key==="Enter"||t.type==="blur"){const o=e.textContent.trim();if(e.textContent=o||c,o&&o!==c){let l=u(i);l=l.map(a=>a.id===s?{...a,taskText:o}:a),d(i,l)}}}function x(t){const e=t.target;if(e.closest(".icon-pencil")||e.closest(".note-title")){const c=e.closest(".task-item"),s=c.querySelector(".note-title"),o=(s.textContent||"").trim(),l=Number(c.dataset.id);s.setAttribute("contenteditable","true"),s.classList.add("editing"),s.focus();const a=r=>{s.removeAttribute("contenteditable"),s.classList.remove("editing"),S(r,s,o,l)};s.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),a(r))}),s.addEventListener("blur",a)}}function I(t){T(t),B(t),x(t)}function E(t){const e=t.target.value;document.querySelectorAll(".task-item").forEach(s=>{const l=s.querySelector(".note-title").classList.contains("completed");e==="All"?(s.style.display="flex",n.clearListButton.style.display="block",n.addTaskButton.style.display="flex"):e==="Complete"&&l||e==="Incomplete"&&!l?(s.style.display="flex",n.clearListButton.style.display="none",n.addTaskButton.style.display="none"):s.style.display="none"})}function q(){const t=document.body.classList.toggle("dark");d("theme",t?"dark":"")}const w=u("theme");w==="dark"&&document.body.classList.add("dark");function A(){d(i,[]),n.taskList.innerHTML="",n.emptyBlock.style.display="block",n.clearListButton.style.display="none",k(n)}const n={searchInput:document.querySelector("#search-note"),modalBackDrop:document.querySelector(".js-modal-backdrop"),addTaskButton:document.querySelector(".js-add-task"),cancelModalBtn:document.querySelector(".js-btn-cancel"),modalWindow:document.querySelector(".js-modal-window"),modalForm:document.querySelector(".js-modal-form"),modalInput:document.querySelector(".modal-input"),taskList:document.querySelector(".js-task-list"),emptyBlock:document.querySelector(".js-empty-block"),clearListButton:document.querySelector(".js-clear-list-button"),statusSelect:document.getElementById("status"),themeButton:document.querySelector(".theme-button")};n.searchInput.addEventListener("input",h);n.addTaskButton.addEventListener("click",m);n.cancelModalBtn.addEventListener("click",m);n.modalBackDrop.addEventListener("click",L);n.modalForm.addEventListener("input",t=>v(t));n.modalForm.addEventListener("submit",t=>b(t,n));n.taskList.addEventListener("click",I);n.statusSelect.addEventListener("change",E);n.themeButton.addEventListener("click",q);n.clearListButton.addEventListener("click",A);k(n);
//# sourceMappingURL=index.js.map
