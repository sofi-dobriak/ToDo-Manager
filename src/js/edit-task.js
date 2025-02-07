import updateTaskText from './update-text-task';

function editTask(e) {
  const target = e.target;

  if (target.closest('.icon-pencil') || target.closest('.note-title')) {
    const taskItem = target.closest('.task-item');
    const taskText = taskItem.querySelector('.note-title');
    const originalText = taskText.textContent;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = originalText;
    input.classList.add('input-edit');
    taskText.innerHTML = '';
    taskText.appendChild(input);

    input.focus();

    const updateTask = e => updateTaskText(e, input, taskText, originalText);

    input.addEventListener('keydown', updateTask);
    input.addEventListener('blur', updateTask);
  }
}

export default editTask;
