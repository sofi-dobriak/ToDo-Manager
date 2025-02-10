import{i as g}from"./assets/vendor-I1I71QQ2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();function h(t){t.preventDefault();const e=t.target.value.toLowerCase();document.querySelectorAll(".task-item").forEach(s=>{s.querySelector(".note-title").textContent.toLowerCase().includes(e)?s.style.display="block":s.style.display="none"})}function m(){l.modalBackDrop.classList.toggle("is-open")}function L(t){t.target===t.currentTarget&&l.modalBackDrop.classList.remove("is-open")}function p(t){return`<li class="task-item" data-id="${t.id}">
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
                            <use href="img/icons.svg#icon-check"></use>
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
                            <use href="img/icons.svg#icon-pencil"></use>
                        </svg>
                    </button>
                </li>
                <li class="icon-item">
                    <button class="icon-button js-delete" type="button">
                        <svg class="icon-trash" width="18" height="18">
                            <use href="img/icons.svg#icon-trash"></use>
                        </svg>
                    </button>
                </li>
            </ul>
        </li>`}function d(t,e){const c=JSON.stringify(e);localStorage.setItem(t,c)}function u(t){const e=localStorage.getItem(t);try{const c=JSON.parse(e);return Array.isArray(c)?c:[]}catch{return[]}}const k="task-item-key",r="task-list-key";function v(t){const e={inputValue:t.currentTarget.elements["text-note"].value};d(k,e)}function y(t){let e=u(r);if(e.length===0){t.emptyBlock.style.display="block",t.clearListButton.style.display="none";return}else t.emptyBlock.style.display="none",t.clearListButton.style.display="block";const c=e.map(p).join("");t.taskList.innerHTML=c}function b(t,e){t.preventDefault();const c=t.target.elements["text-note"].value.trim();if(c)e.emptyBlock.style.display="none",e.clearListButton.style.display="block";else{g.warning({color:"violet",message:"Please, enter a note",position:"topRight"});return}const s=u(r)||[],o={id:Date.now(),taskText:c,completed:!1};s.push(o),d(r,s);const n=p(o);e.taskList.insertAdjacentHTML("beforeend",n),e.modalForm.reset(),e.modalBackDrop.classList.remove("is-open"),localStorage.removeItem(k)}function T(t){if(t.target.closest(".icon-trash")){const e=t.target.closest(".task-item");if(e){const c=Number(e.dataset.id);e.remove();let s=u(r);s=s.filter(o=>o.id!==c),d(r,s),s.length===0&&(l.emptyBlock.style.display="block",l.clearListButton.style.display="none")}}}function S(t){if(t.target.classList.contains("checkbox-input")){const c=t.target.closest(".task-item"),s=c.querySelector(".note-title"),o=t.target.checked;s.classList.toggle("completed",o);const n=Number(c.dataset.id),i=u(r)||[],a=i.findIndex(f=>f.id===n);a!==-1&&(i[a].completed=o,d(r,i))}}function x(t,e,c,s,o){if(t.key==="Enter"||t.type==="blur"){const n=e.value.trim();if(c.textContent=n||s,n&&n!==s){let i=u(r);i=i.map(a=>a.id===o?{...a,taskText:n}:a),d(r,i),e.remove()}}}function B(t){const e=t.target;if(e.closest(".icon-pencil")||e.closest(".note-title")){const c=e.closest(".task-item"),s=c.querySelector(".note-title"),o=s.textContent.trim(),n=Number(c.dataset.id);s.setAttribute("contenteditable","true"),s.classList.add("editing"),s.focus(),document.execCommand("selectAll",!1,null);const i=a=>{s.removeAttribute("contenteditable"),s.classList.remove("editing"),x(a,s,o,n)};s.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),i(a))}),s.addEventListener("blur",i)}}function E(t){T(t),S(t),B(t)}function I(t){const e=t.target.value;document.querySelectorAll(".task-item").forEach(s=>{const n=s.querySelector(".note-title").classList.contains("completed");e==="All"||e==="Complete"&&n||e==="Incomplete"&&!n?s.style.display="flex":s.style.display="none"})}function q(){const t=document.body.classList.toggle("dark");d("theme",t?"dark":"")}const w=u("theme");w==="dark"&&document.body.classList.add("dark");function A(){d(r,[]),l.taskList.innerHTML="",l.emptyBlock.style.display="block",l.clearListButton.style.display="none",y(l)}const l={searchInput:document.querySelector("#search-note"),modalBackDrop:document.querySelector(".js-modal-backdrop"),addTaskButton:document.querySelector(".js-add-task"),cancelModalBtn:document.querySelector(".js-btn-cancel"),modalWindow:document.querySelector(".js-modal-window"),modalForm:document.querySelector(".js-modal-form"),modalInput:document.querySelector(".modal-input"),taskList:document.querySelector(".js-task-list"),emptyBlock:document.querySelector(".js-empty-block"),clearListButton:document.querySelector(".js-clear-list-button"),statusSelect:document.getElementById("status"),themeButton:document.querySelector(".theme-button")};l.searchInput.addEventListener("input",h);l.addTaskButton.addEventListener("click",m);l.cancelModalBtn.addEventListener("click",m);l.modalBackDrop.addEventListener("click",L);l.modalForm.addEventListener("input",t=>v(t));l.modalForm.addEventListener("submit",t=>b(t,l));l.taskList.addEventListener("click",E);l.statusSelect.addEventListener("change",I);l.themeButton.addEventListener("click",q);l.clearListButton.addEventListener("click",A);y(l);
//# sourceMappingURL=index.js.map
