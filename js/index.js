"use strict";

const refs = {
    searchInput: document.querySelector("#search-note"),
    modalBackDrop: document.querySelector(".js-modal-backdrop"),
    addTaskButton: document.querySelector(".js-add-task"),
    cancelModalBtn: document.querySelector(".js-btn-cancel"),
    modalWindow: document.querySelector(".js-modal-window"),
    modalForm: document.querySelector(".js-modal-form"),
    modalInput: document.querySelector(".modal-input"),
    taskList: document.querySelector(".js-task-list"),
    emptyBlock: document.querySelector(".js-empty-block"),
    statusSelect: document.getElementById("status"),
    themeButton: document.querySelector(".theme-button"),
};

refs.searchInput.addEventListener("input", searchTask);
refs.addTaskButton.addEventListener("click", onButtonClick);
refs.cancelModalBtn.addEventListener("click", onButtonClick);
refs.modalBackDrop.addEventListener("click", onBackdropClick);
refs.modalForm.addEventListener("submit", onFormSubmit);
refs.taskList.addEventListener("click", onTaskInteraction);
refs.statusSelect.addEventListener("change", filterTasks);
refs.themeButton.addEventListener("click", changeTheme);

document.addEventListener("keydown", (e) => {
    if (e.code === "KeyO") {
        onButtonClick();
    }
});

function searchTask(e) {
    e.preventDefault();

    const searchQery = e.target.value.toLowerCase();
    const tasks = document.querySelectorAll(".task-item");

    tasks.forEach((task) => {
        const taskText = task.querySelector(".note-title").textContent.toLowerCase();

        if (taskText.includes(searchQery)) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}

function onButtonClick() {
    refs.modalBackDrop.classList.toggle("is-open");
    setTimeout(() => {
        refs.modalInput.focus();
    }, 200);
}

function onBackdropClick(e) {
    if (e.target === e.currentTarget) {
        refs.modalBackDrop.classList.remove("is-open");
    }
}

function onFormSubmit(e) {
    e.preventDefault();

    const inputValue = e.target.elements["text-note"].value.trim();

    if (!inputValue) {
        alert("Please, enter a note");
        return;
    } else {
        refs.emptyBlock.style.display = "none";
    }

    const dataNotes = {
        taskText: inputValue,
    };

    const markup = taskTamplate(dataNotes);
    refs.taskList.insertAdjacentHTML("afterbegin", markup);

    refs.modalForm.reset();
    refs.modalBackDrop.classList.remove("is-open");
}

function toggleTaskCompletion(e) {
    if (e.target.classList.contains("checkbox-input")) {
        const checkbox = e.target;
        const taskItem = checkbox.closest(".task-item");
        const taskText = taskItem.querySelector(".note-title");

        if (checkbox.checked) {
            taskText.classList.add("completed");
        } else {
            taskText.classList.remove("completed");
        }
    }
}

function deleteTask(e) {
    if (e.target.closest(".icon-trash")) {
        const taskItem = e.target.closest(".task-item");

        if (taskItem) {
            taskItem.remove();
        }
    }

    if (refs.taskList.children.length === 0) {
        refs.emptyBlock.style.display = "block";
    }
}

function editTask(e) {
    const target = e.target;

    if (target.closest(".icon-pencil") || target.closest(".note-title")) {
        const taskItem = target.closest(".task-item");
        const taskText = taskItem.querySelector(".note-title");
        const originalText = taskText.textContent;

        const input = document.createElement("input");
        input.type = "text";
        input.value = originalText;
        input.classList.add("input-edit");
        taskText.innerHTML = "";
        taskText.appendChild(input);

        input.focus();

        const updateTask = (e) => updateTaskText(e, input, taskText, originalText);

        input.addEventListener("keydown", updateTask);
        input.addEventListener("blur", updateTask);
    }
}

function updateTaskText(e, input, taskText, originalText) {
    if (e.key === "Enter" || e.type === "blur") {
        const newText = input.value.trim();

        if (newText === "") {
            taskText.textContent = originalText;
        } else {
            taskText.textContent = newText;
        }

        input.remove();
    }
}

function onTaskInteraction(e) {
    deleteTask(e);
    toggleTaskCompletion(e);
    editTask(e);
}

function filterTasks(e) {
    const selectedStatus = e.target.value;
    const tasks = document.querySelectorAll(".task-item");

    tasks.forEach((task) => {
        const taskText = task.querySelector(".note-title");
        const isCompleted = taskText.classList.contains("completed");

        if (selectedStatus === "All") {
            task.style.display = "block";
        } else if (selectedStatus === "Complete" && isCompleted) {
            task.style.display = "block";
        } else if (selectedStatus === "Incomplete" && !isCompleted) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}

function changeTheme() {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "");
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

let taskIdCounter = 0;

function taskTamplate(taskObject) {
    taskIdCounter++;

    return `<li class="task-item">
        <div class="check-input-text-container">
            <div class="checkbox-container">
                <input class="checkbox-input" type="checkbox" value="true"
                    id="note-check-${taskIdCounter}" name="note-check-${taskIdCounter}">
                <label class="checkbox" for="note-check-${taskIdCounter}">
                    <svg class="checkbox-label-icon" width="18" height="18">
                        <use href="./img/symbol-defs.svg#icon-check"></use>
                    </svg>
                </label>
            </div>
            <p class="note-title">${taskObject.taskText}</p>
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
    </li>`;
}
