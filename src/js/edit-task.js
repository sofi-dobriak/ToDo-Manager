import updateTaskText from './update-text-task';

function editTask(e) {
  const target = e.target;

  if (target.closest('.icon-pencil') || target.closest('.note-title')) {
    const taskItem = target.closest('.task-item');
    const taskText = taskItem.querySelector('.note-title');
    const originalText = (taskText.textContent || '').trim();
    const taskId = Number(taskItem.dataset.id);

    // Додаємо редагування без інпуту
    taskText.setAttribute('contenteditable', 'true');
    taskText.classList.add('editing');
    taskText.focus();

    const updateTask = e => {
      taskText.removeAttribute('contenteditable');
      taskText.classList.remove('editing');
      updateTaskText(e, taskText, originalText, taskId);
    };

    taskText.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        updateTask(e);
      }
    });

    taskText.addEventListener('blur', updateTask);
  }
}

export default editTask;
