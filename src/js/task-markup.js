export function taskTemplate({ id, taskText, completed }) {
  return `<li class="task-item" data-id="${id}">
            <div class="check-input-text-container">
                <div class="checkbox-container">
                    <input 
                        class="checkbox-input" 
                        type="checkbox" 
                        id="note-check-${id}"
                        ${completed ? 'checked' : ''}
                    >
                    <label class="checkbox" for="note-check-${id}">
                        <svg class="checkbox-label-icon" width="18" height="18">
                            <use href="assets/icons.svg#icon-check"></use>
                        </svg>
                    </label>
                </div>
                <div class="note-date-container">
                    <p class="note-title ${
                      completed ? 'completed' : ''
                    }">${taskText}</p>
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
        </li>`;
}

export function tasksTemplate(tasks) {
  return tasks.map(taskTemplate).join('');
}
