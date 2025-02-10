function taskTamplate(taskObject) {
  return `<li class="task-item" data-id="${taskObject.id}">
            <div class="check-input-text-container">
                <div class="checkbox-container">
                    <input 
                        class="checkbox-input" 
                        type="checkbox" 
                        id="note-check-${taskObject.id}"
                        ${taskObject.completed ? 'checked' : ''}
                    >
                    <label class="checkbox" for="note-check-${taskObject.id}">
                        <svg class="checkbox-label-icon" width="18" height="18">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                    </label>
                </div>
                <div class="note-date-container">
                    <p class="note-title ${
                      taskObject.completed ? 'completed' : ''
                    }">${taskObject.taskText}</p>
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
        </li>`;
}

export default taskTamplate;
