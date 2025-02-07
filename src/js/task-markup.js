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

export default taskTamplate;
