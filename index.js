import{i as f}from"./assets/vendor-I1I71QQ2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function c(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=c(s);fetch(s.href,n)}})();function g(t){t.preventDefault();const e=t.target.value.toLowerCase();document.querySelectorAll(".task-item").forEach(o=>{o.querySelector(".note-title").textContent.toLowerCase().includes(e)?o.style.display="block":o.style.display="none"})}function m(){i.modalBackDrop.classList.toggle("is-open")}function h(t){t.target===t.currentTarget&&i.modalBackDrop.classList.remove("is-open")}function p(t){return`<li class="task-item" data-id="${t.id}">
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
        </li>`}function r(t,e){const c=JSON.stringify(e);localStorage.setItem(t,c)}function d(t){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return e}}const k="task-item-key",a="task-list-key";function L(t){const e={inputValue:t.currentTarget.elements["text-note"].value};r(k,e)}function v(t){const e=d(a)||[];if(e.length===0){t.emptyBlock.style.display="block",t.clearListButton.style.display="none";return}else t.emptyBlock.style.display="none",t.clearListButton.style.display="block";const c=e.map(p).join("");t.taskList.innerHTML=c}function b(t,e){t.preventDefault();const c=t.target.elements["text-note"].value.trim();if(c)e.emptyBlock.style.display="none",e.clearListButton.style.display="block";else{f.warning({color:"violet",message:"Please, enter a note",position:"topRight"});return}const o=d(a)||[],s={id:Date.now(),taskText:c,completed:!1};o.push(s),r(a,o);const n=p(s);e.taskList.insertAdjacentHTML("beforeend",n),e.modalForm.reset(),e.modalBackDrop.classList.remove("is-open"),localStorage.removeItem(k)}function T(t){if(t.target.closest(".icon-trash")){const e=t.target.closest(".task-item");if(e){const c=Number(e.dataset.id);e.remove();let o=d(a);o=o.filter(s=>s.id!==c),r(a,o),o.length===0&&(i.emptyBlock.style.display="block",i.clearListButton.style.display="none")}}}function S(t){if(t.target.classList.contains("checkbox-input")){const c=t.target.closest(".task-item"),o=c.querySelector(".note-title"),s=t.target.checked;o.classList.toggle("completed",s);const n=Number(c.dataset.id),l=d(a)||[],u=l.findIndex(y=>y.id===n);u!==-1&&(l[u].completed=s,r(a,l))}}function x(t,e,c,o){if(t.key==="Enter"||t.type==="blur"){const s=e.value.trim();c.textContent=s||o,e.remove()}}function B(t){const e=t.target;if(e.closest(".icon-pencil")||e.closest(".note-title")){const o=e.closest(".task-item").querySelector(".note-title"),s=o.textContent.trim(),n=document.createElement("input");n.type="text",n.value=s,n.classList.add("input-edit"),o.innerHTML="",o.appendChild(n),n.focus();const l=u=>x(u,n,o,s);n.addEventListener("keydown",l),n.addEventListener("blur",l)}}function E(t){T(t),S(t),B(t)}function I(t){const e=t.target.value;document.querySelectorAll(".task-item").forEach(o=>{const n=o.querySelector(".note-title").classList.contains("completed");e==="All"||e==="Complete"&&n||e==="Incomplete"&&!n?o.style.display="flex":o.style.display="none"})}function q(){const t=document.body.classList.toggle("dark");r("theme",t?"dark":"")}const w=d("theme");w==="dark"&&document.body.classList.add("dark");function C(){r(a,[]),i.taskList.innerHTML="",i.emptyBlock.style.display="block",i.clearListButton.style.display="none"}const i={searchInput:document.querySelector("#search-note"),modalBackDrop:document.querySelector(".js-modal-backdrop"),addTaskButton:document.querySelector(".js-add-task"),cancelModalBtn:document.querySelector(".js-btn-cancel"),modalWindow:document.querySelector(".js-modal-window"),modalForm:document.querySelector(".js-modal-form"),modalInput:document.querySelector(".modal-input"),taskList:document.querySelector(".js-task-list"),emptyBlock:document.querySelector(".js-empty-block"),clearListButton:document.querySelector(".js-clear-list-button"),statusSelect:document.getElementById("status"),themeButton:document.querySelector(".theme-button")};i.searchInput.addEventListener("input",g);i.addTaskButton.addEventListener("click",m);i.cancelModalBtn.addEventListener("click",m);i.modalBackDrop.addEventListener("click",h);i.modalForm.addEventListener("input",t=>L(t));i.modalForm.addEventListener("submit",t=>b(t,i));i.taskList.addEventListener("click",E);i.statusSelect.addEventListener("change",I);i.themeButton.addEventListener("click",q);i.clearListButton.addEventListener("click",C);v(i);
//# sourceMappingURL=index.js.map
