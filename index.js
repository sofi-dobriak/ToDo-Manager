(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=l(o);fetch(o.href,n)}})();function u(e){e.preventDefault();const t=e.target.value.toLowerCase();document.querySelectorAll(".task-item").forEach(s=>{s.querySelector(".note-title").textContent.toLowerCase().includes(t)?s.style.display="block":s.style.display="none"})}function r(){c.modalBackDrop.classList.toggle("is-open")}function m(e){e.target===e.currentTarget&&c.modalBackDrop.classList.remove("is-open")}let i=0;function p(e){return i++,`<li class="task-item">
        <div class="check-input-text-container">
            <div class="checkbox-container">
                <input class="checkbox-input" type="checkbox" value="true"
                    id="note-check-${i}" name="note-check-${i}">
                <label class="checkbox" for="note-check-${i}">
                    <svg class="checkbox-label-icon" width="18" height="18">
                        <use href="./img/symbol-defs.svg#icon-check"></use>
                    </svg>
                </label>
            </div>
            <p class="note-title">${e.taskText}</p>
        </div>
        <ul class="icon-list">
            <li class="icon-item">
                <button class="icon-button" type="button">
                    <svg class="icon-pencil" width="15" height="15">
                        <use href="./img/symbol-defs.svg#icon-pencil"></use>
                    </svg>
                </button>
            </li>
            <li class="icon-item">
                <button class="icon-button" type="button">
                    <svg class="icon-trash" width="18" height="18">
                        <use href="./img/symbol-defs.svg#icon-trash"></use>
                    </svg>
                </button>
            </li>
        </ul>
    </li>`}function k(e){e.preventDefault();const t=e.target.elements["text-note"].value.trim();if(t)c.emptyBlock.style.display="none";else{alert("Please, enter a note");return}const s=p({taskText:t});c.taskList.insertAdjacentHTML("afterbegin",s),c.modalForm.reset(),c.modalBackDrop.classList.remove("is-open")}function f(e){if(e.target.closest(".icon-trash")){const t=e.target.closest(".task-item");t&&t.remove()}c.taskList.children.length===0&&(c.emptyBlock.style.display="block")}function y(e){if(e.target.classList.contains("checkbox-input")){const t=e.target,s=t.closest(".task-item").querySelector(".note-title");t.checked?s.classList.add("completed"):s.classList.remove("completed")}}function h(e,t,l,s){if(e.key==="Enter"||e.type==="blur"){const o=t.value.trim();o===""?l.textContent=s:l.textContent=o,t.remove()}}function g(e){const t=e.target;if(t.closest(".icon-pencil")||t.closest(".note-title")){const s=t.closest(".task-item").querySelector(".note-title"),o=s.textContent,n=document.createElement("input");n.type="text",n.value=o,n.classList.add("input-edit"),s.innerHTML="",s.appendChild(n),n.focus();const a=d=>h(d,n,s,o);n.addEventListener("keydown",a),n.addEventListener("blur",a)}}function b(e){f(e),y(e),g(e)}function v(e){const t=e.target.value;document.querySelectorAll(".task-item").forEach(s=>{const n=s.querySelector(".note-title").classList.contains("completed");t==="All"||t==="Complete"&&n||t==="Incomplete"&&!n?s.style.display="block":s.style.display="none"})}function L(){const e=document.body.classList.toggle("dark");localStorage.setItem("theme",e?"dark":"")}const T=localStorage.getItem("theme");T==="dark"&&document.body.classList.add("dark");const c={searchInput:document.querySelector("#search-note"),modalBackDrop:document.querySelector(".js-modal-backdrop"),addTaskButton:document.querySelector(".js-add-task"),cancelModalBtn:document.querySelector(".js-btn-cancel"),modalWindow:document.querySelector(".js-modal-window"),modalForm:document.querySelector(".js-modal-form"),modalInput:document.querySelector(".modal-input"),taskList:document.querySelector(".js-task-list"),emptyBlock:document.querySelector(".js-empty-block"),statusSelect:document.getElementById("status"),themeButton:document.querySelector(".theme-button")};c.searchInput.addEventListener("input",u);c.addTaskButton.addEventListener("click",r);c.cancelModalBtn.addEventListener("click",r);c.modalBackDrop.addEventListener("click",m);c.modalForm.addEventListener("submit",k);c.taskList.addEventListener("click",b);c.statusSelect.addEventListener("change",v);c.themeButton.addEventListener("click",L);
//# sourceMappingURL=index.js.map
