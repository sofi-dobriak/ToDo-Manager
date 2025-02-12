import{i as L,o as T}from"./assets/vendor-Cb5ujquc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(e){if(e.ep)return;e.ep=!0;const c=l(e);fetch(e.href,c)}})();function B(t){t.preventDefault();const s=t.target.value.toLowerCase(),l=document.querySelectorAll(".task-item");let o=!1;l.forEach(e=>{e.querySelector(".note-title").textContent.toLowerCase().includes(s)?(e.style.display="block",o=!0):e.style.display="none",s===""?(n.clearListButton.style.display="block",n.addTaskButton.style.display="flex",n.emptyBlock.style.display="none"):o?(n.emptyBlock.style.display="none",n.clearListButton.style.display="none",n.addTaskButton.style.display="none"):(n.clearListButton.style.display="none",n.addTaskButton.style.display="none",n.emptyBlock.style.display="block")})}function f(){n.modalBackDrop.classList.toggle("is-open"),setTimeout(()=>{n.modalInput.focus()},100)}function S(t){t.target===t.currentTarget&&n.modalBackDrop.classList.remove("is-open")}function h({id:t,taskText:s,completed:l}){return`<li class="task-item" data-id="${t}">
            <div class="check-input-text-container">
                <div class="checkbox-container">
                    <input 
                        class="checkbox-input" 
                        type="checkbox" 
                        id="note-check-${t}"
                        ${l?"checked":""}
                    >
                    <label class="checkbox" for="note-check-${t}">
                        <svg class="checkbox-label-icon" width="18" height="18">
                            <use href="assets/icons.svg#icon-check"></use>
                        </svg>
                    </label>
                </div>
                <div class="note-date-container">
                    <p class="note-title ${l?"completed":""}">${s}</p>
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
        </li>`}function x(t){return t.map(h).join("")}function d(t,s){const l=JSON.stringify(s);localStorage.setItem(t,l)}function m(t){const s=localStorage.getItem(t);try{const l=JSON.parse(s);return Array.isArray(l)?l:[]}catch{return[]}}const g="task-item-key",r="task-list-key";function E(t){const s={inputValue:t.currentTarget.elements["text-note"].value};d(g,s)}function v(t){let s=m(r);if(s.length)t.emptyBlock.style.display="none",t.clearListButton.style.display="block";else{t.emptyBlock.style.display="block",t.clearListButton.style.display="none";return}t.taskList.innerHTML=x(s)}function w(t,s){t.preventDefault();const l=t.target.elements["text-note"].value.trim();if(l)s.emptyBlock.style.display="none",s.clearListButton.style.display="block";else{L.warning({color:"violet",message:"Please, enter a note",position:"topRight"});return}const o=m(r)||[],e={id:Date.now(),taskText:l,completed:!1};o.push(e),d(r,o);const c=h(e);s.taskList.insertAdjacentHTML("beforeend",c),s.modalForm.reset(),s.modalBackDrop.classList.remove("is-open"),localStorage.removeItem(g)}function I(t){const s=t.target.closest(".icon-trash");if(!s)return;const l=s.closest(".task-item");if(!l)return;const o=Number(l.dataset.id);l.remove();let e=m(r)||[];e=e.filter(c=>c.id!==o),d(r,e),e.length===0&&(n.emptyBlock.style.display="block",n.clearListButton.style.display="none")}function q(t){if(t.target.classList.contains("checkbox-input")){const l=t.target.closest(".task-item"),o=l.querySelector(".note-title"),e=t.target.checked;o.classList.toggle("completed",e);const c=Number(l.dataset.id),i=m(r)||[],p=i.findIndex(a=>a.id===c);p!==-1&&(i[p].completed=e,d(r,i))}}function j(t,s,l,o){if(t.key==="Enter"||t.type==="blur"){const e=s.textContent.trim();if(s.textContent=e||l,e&&e!==l){let c=m(r);c=c.map(i=>i.id===o?{...i,taskText:e}:i),d(r,c)}}}function A(t){const s=t.target.closest(".icon-pencil, .note-title");if(!s)return;const l=s.closest(".task-item"),o=l.querySelector(".note-title"),e=o.textContent.trim(),c=Number(l.dataset.id);o.setAttribute("contenteditable","true"),o.classList.add("editing"),o.focus();function i(a){o.removeAttribute("contenteditable"),o.classList.remove("editing"),a.type==="keydown"&&a.key==="Escape"?o.textContent=e:j(a,o,e,c),o.removeEventListener("keydown",p),o.removeEventListener("blur",i)}function p(a){(a.key==="Enter"||a.key==="Escape")&&(a.preventDefault(),i(a))}o.addEventListener("keydown",p),o.addEventListener("blur",i)}function D(t){I(t),q(t),A(t)}const u=document.querySelector("#dotlottie-canvas");let y;function b(){if(!u.parentElement)return;const t=u.parentElement,s=window.devicePixelRatio||1,l=t.clientWidth,o=l*9/16;u.style.width=`${l}px`,u.style.height=`${o}px`,u.width=l*s,u.height=o*s,y&&(y.load("https://lottie.host/417618a6-2cb7-461c-9de3-6f8e5f3e50c2/4DNAzjSaoo.lottie"),k())}function k(){y=new T({autoplay:!0,loop:!0,canvas:document.querySelector("#dotlottie-canvas"),src:"https://lottie.host/417618a6-2cb7-461c-9de3-6f8e5f3e50c2/4DNAzjSaoo.lottie"})}b();k();window.addEventListener("resize",b);function C(t){const s=t.target.value,l=document.querySelectorAll(".task-item");let o=!1;l.forEach(e=>{const i=e.querySelector(".note-title").classList.contains("completed");s==="All"||s==="Complete"&&i||s==="Incomplete"&&!i?(e.style.display="flex",o=!0):e.style.display="none"}),o?(n.emptyBlock.style.display="none",n.addTaskButton.style.display=s==="All"?"flex":"none"):(n.emptyBlock.style.display="block",n.addTaskButton.style.display="none",setTimeout(()=>k(),100)),n.clearListButton.style.display=s==="All"?"block":"none"}function N(){const t=document.body.classList.toggle("dark");d("theme",t?"dark":"")}const O=m("theme");O==="dark"&&document.body.classList.add("dark");function F(){d(r,[]),n.taskList.innerHTML="",n.emptyBlock.style.display="block",n.clearListButton.style.display="none",v(n)}const n={searchInput:document.querySelector("#search-note"),modalBackDrop:document.querySelector(".js-modal-backdrop"),addTaskButton:document.querySelector(".js-add-task"),cancelModalBtn:document.querySelector(".js-btn-cancel"),modalWindow:document.querySelector(".js-modal-window"),modalForm:document.querySelector(".js-modal-form"),modalInput:document.querySelector(".modal-input"),taskList:document.querySelector(".js-task-list"),emptyBlock:document.querySelector(".js-empty-block"),clearListButton:document.querySelector(".js-clear-list-button"),statusSelect:document.getElementById("status"),themeButton:document.querySelector(".theme-button"),canvas:document.querySelector("#dotlottie-canvas")};n.searchInput.addEventListener("input",B);n.addTaskButton.addEventListener("click",f);n.cancelModalBtn.addEventListener("click",f);n.modalBackDrop.addEventListener("click",S);n.modalForm.addEventListener("input",t=>E(t));n.modalForm.addEventListener("submit",t=>w(t,n));n.taskList.addEventListener("click",D);n.statusSelect.addEventListener("change",C);n.themeButton.addEventListener("click",N);n.clearListButton.addEventListener("click",F);v(n);
//# sourceMappingURL=index.js.map
