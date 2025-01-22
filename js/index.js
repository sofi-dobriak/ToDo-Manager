"use strict";

const refs = {
    modalBackDrop: document.querySelector(".js-modal-backdrop"),

    addTaskButton: document.querySelector(".js-add-task"),
    cancelModalBtn: document.querySelector(".js-btn-cancel"),

    modalWindow: document.querySelector(".js-modal-window0"),
    modalForm: document.querySelector(".js-modal-form"),

    taskList: document.querySelector(".js-task-list"),

    emptyBlock: document.querySelector(".js-empty-block"),

    iconUpdate: document.querySelector(".icon-pencil"),
    iconDelete: document.querySelector(".icon-trash"),
};

let taskIdCounter = 0;

refs.addTaskButton.addEventListener("click", onButtonClick);
refs.cancelModalBtn.addEventListener("click", onButtonClick);

refs.modalBackDrop.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        closeModal();
    }
});

refs.modalForm.addEventListener("submit", onFormSubmit);

refs.taskList.addEventListener("click", onTaskInteraction);

function onButtonClick() {
    refs.modalBackDrop.classList.toggle("is-open");
}

function closeModal() {
    refs.modalBackDrop.classList.remove("is-open");
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

function onTaskInteraction(e) {
    // обробка видалення
    if (e.target.closest(".icon-trash")) {
        const taskItem = e.target.closest(".task-item");

        if (taskItem) {
            taskItem.remove();
        }
    }

    // якщо список порожній
    if (refs.taskList.children.length === 0) {
        refs.emptyBlock.style.display = "block";
    }

    // обробка виконаності завдання
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
