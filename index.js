import{i as y}from"./assets/vendor-I1I71QQ2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();function g(t){t.preventDefault();const e=t.target.value.toLowerCase();document.querySelectorAll(".task-item").forEach(s=>{s.querySelector(".note-title").textContent.toLowerCase().includes(e)?s.style.display="block":s.style.display="none"})}function m(){i.modalBackDrop.classList.toggle("is-open")}function h(t){t.target===t.currentTarget&&i.modalBackDrop.classList.remove("is-open")}function p(t){return`<li class="task-item" data-id="${t.id}">
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
    </li>`}function r(t,e){const c=JSON.stringify(e);localStorage.setItem(t,c)}function d(t){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return e}}const k="task-item-key",l="task-list-key";function v(t){const e={inputValue:t.currentTarget.elements["text-note"].value};r(k,e)}function L(t){const e=d(l)||[];if(e.length===0){t.emptyBlock.style.display="block";return}else t.emptyBlock.style.display="none";const c=e.map(p).join("");t.taskList.innerHTML=c}function T(t,e){t.preventDefault();const c=t.target.elements["text-note"].value.trim();if(c)e.emptyBlock.style.display="none";else{y.warning({color:"violet",message:"Please, enter a note",position:"topRight"});return}const s=d(l)||[],o={id:Date.now(),taskText:c,completed:!1};s.push(o),r(l,s);const n=p(o);e.taskList.insertAdjacentHTML("beforeend",n),e.modalForm.reset(),e.modalBackDrop.classList.remove("is-open"),localStorage.removeItem(k)}function b(t){if(t.target.closest(".icon-trash")){const e=t.target.closest(".task-item");if(e){const c=Number(e.dataset.id);e.remove();let s=d(l);s=s.filter(o=>o.id!==c),r(l,s),s.length===0&&(i.emptyBlock.style.display="block")}}}function S(t){if(t.target.classList.contains("checkbox-input")){const c=t.target.closest(".task-item"),s=c.querySelector(".note-title"),o=t.target.checked;s.classList.toggle("completed",o);const n=Number(c.dataset.id),a=d(l)||[],u=a.findIndex(f=>f.id===n);u!==-1&&(a[u].completed=o,r(l,a))}}function x(t,e,c,s){if(t.key==="Enter"||t.type==="blur"){const o=e.value.trim();c.textContent=o||s,e.remove()}}function I(t){const e=t.target;if(e.closest(".icon-pencil")||e.closest(".note-title")){const s=e.closest(".task-item").querySelector(".note-title"),o=s.textContent.trim(),n=document.createElement("input");n.type="text",n.value=o,n.classList.add("input-edit"),s.innerHTML="",s.appendChild(n),n.focus();const a=u=>x(u,n,s,o);n.addEventListener("keydown",a),n.addEventListener("blur",a)}}function E(t){b(t),S(t),I(t)}function B(t){const e=t.target.value;document.querySelectorAll(".task-item").forEach(s=>{const n=s.querySelector(".note-title").classList.contains("completed");e==="All"||e==="Complete"&&n||e==="Incomplete"&&!n?s.style.display="flex":s.style.display="none"})}function q(){const t=document.body.classList.toggle("dark");r("theme",t?"dark":"")}const w=d("theme");w==="dark"&&document.body.classList.add("dark");const i={searchInput:document.querySelector("#search-note"),modalBackDrop:document.querySelector(".js-modal-backdrop"),addTaskButton:document.querySelector(".js-add-task"),cancelModalBtn:document.querySelector(".js-btn-cancel"),modalWindow:document.querySelector(".js-modal-window"),modalForm:document.querySelector(".js-modal-form"),modalInput:document.querySelector(".modal-input"),taskList:document.querySelector(".js-task-list"),emptyBlock:document.querySelector(".js-empty-block"),statusSelect:document.getElementById("status"),themeButton:document.querySelector(".theme-button")};i.searchInput.addEventListener("input",g);i.addTaskButton.addEventListener("click",m);i.cancelModalBtn.addEventListener("click",m);i.modalBackDrop.addEventListener("click",h);i.modalForm.addEventListener("input",t=>v(t));i.modalForm.addEventListener("submit",t=>T(t,i));i.taskList.addEventListener("click",E);i.statusSelect.addEventListener("change",B);i.themeButton.addEventListener("click",q);L(i);
//# sourceMappingURL=index.js.map
