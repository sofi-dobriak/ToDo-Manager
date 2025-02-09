import{i as y}from"./assets/vendor-I1I71QQ2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=c(s);fetch(s.href,n)}})();function h(t){t.preventDefault();const e=t.target.value.toLowerCase();document.querySelectorAll(".task-item").forEach(o=>{o.querySelector(".note-title").textContent.toLowerCase().includes(e)?o.style.display="block":o.style.display="none"})}function m(){a.modalBackDrop.classList.toggle("is-open")}function g(t){t.target===t.currentTarget&&a.modalBackDrop.classList.remove("is-open")}function p(t){return`<li class="task-item" data-id="${t.id}">
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
    </li>`}function r(t,e){const c=JSON.stringify(e);localStorage.setItem(t,c)}function d(t){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return e}}const k="task-item-key",l="task-list-key";function v(t){const e={inputValue:t.currentTarget.elements["text-note"].value};r(k,e)}function L(t){const e=d(l)||[];if(e.length===0){t.emptyBlock.style.display="block";return}else t.emptyBlock.style.display="none";const c=e.map(p).join("");t.taskList.innerHTML=c}function T(t,e){t.preventDefault();const c=t.target.elements["text-note"].value.trim();if(c)e.emptyBlock.style.display="none";else{y.warning({color:"violet",message:"Please, enter a note",position:"topRight"});return}const o=d(l)||[],s={id:Date.now(),taskText:c,completed:!1};o.push(s),r(l,o);const n=p(s);e.taskList.insertAdjacentHTML("beforeend",n),e.modalForm.reset(),e.modalBackDrop.classList.remove("is-open"),localStorage.removeItem(k)}function b(t){if(t.target.closest(".icon-trash")){const e=t.target.closest(".task-item");if(e){const c=Number(e.dataset.id);e.remove();let o=d(l);o=o.filter(s=>s.id!==c),r(l,o),o.length===0&&(a.emptyBlock.style.display="block")}}}function S(t){if(t.target.classList.contains("checkbox-input")){const c=t.target.closest(".task-item"),o=c.querySelector(".note-title"),s=t.target.checked;o.classList.toggle("completed",s);const n=Number(c.dataset.id),i=d(l)||[],u=i.findIndex(f=>f.id===n);u!==-1&&(i[u].completed=s,r(l,i))}}function x(t,e,c,o){if(t.key==="Enter"||t.type==="blur"){const s=e.value.trim();c.textContent=s||o,e.remove()}}function I(t){const e=t.target;if(e.closest(".icon-pencil")||e.closest(".note-title")){const o=e.closest(".task-item").querySelector(".note-title"),s=o.textContent.trim(),n=document.createElement("input");n.type="text",n.value=s,n.classList.add("input-edit"),o.innerHTML="",o.appendChild(n),n.focus();const i=u=>x(u,n,o,s);n.addEventListener("keydown",i),n.addEventListener("blur",i)}}function E(t){b(t),S(t),I(t)}function B(t){const e=t.target.value;document.querySelectorAll(".task-item").forEach(o=>{const n=o.querySelector(".note-title").classList.contains("completed");e==="All"||e==="Complete"&&n||e==="Incomplete"&&!n?o.style.display="flex":o.style.display="none"})}function q(){const t=document.body.classList.toggle("dark");r("theme",t?"dark":"")}const w=d("theme");w==="dark"&&document.body.classList.add("dark");const a={searchInput:document.querySelector("#search-note"),modalBackDrop:document.querySelector(".js-modal-backdrop"),addTaskButton:document.querySelector(".js-add-task"),cancelModalBtn:document.querySelector(".js-btn-cancel"),modalWindow:document.querySelector(".js-modal-window"),modalForm:document.querySelector(".js-modal-form"),modalInput:document.querySelector(".modal-input"),taskList:document.querySelector(".js-task-list"),emptyBlock:document.querySelector(".js-empty-block"),statusSelect:document.getElementById("status"),themeButton:document.querySelector(".theme-button")};a.searchInput.addEventListener("input",h);a.addTaskButton.addEventListener("click",m);a.cancelModalBtn.addEventListener("click",m);a.modalBackDrop.addEventListener("click",g);a.modalForm.addEventListener("input",t=>v(t));a.modalForm.addEventListener("submit",t=>T(t,a));a.taskList.addEventListener("click",E);a.statusSelect.addEventListener("change",B);a.themeButton.addEventListener("click",q);L(a);
//# sourceMappingURL=index.js.map
