import updateTaskText from './update-text-task';

function editTask(e) {
  const target = e.target.closest('.icon-pencil, .note-title');
  if (!target) return;

  const taskItem = target.closest('.task-item');
  const taskText = taskItem.querySelector('.note-title');
  const originalText = taskText.textContent.trim();
  const taskId = Number(taskItem.dataset.id);

  taskText.setAttribute('contenteditable', 'true');
  taskText.classList.add('editing');
  taskText.focus();

  function updateTask(e) {
    taskText.removeAttribute('contenteditable');
    taskText.classList.remove('editing');

    if (e.type === 'keydown' && e.key === 'Escape') {
      taskText.textContent = originalText;
    } else {
      updateTaskText(e, taskText, originalText, taskId);
    }

    taskText.removeEventListener('keydown', onKeyDown);
    taskText.removeEventListener('blur', updateTask);
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' || e.key === 'Escape') {
      e.preventDefault();
      updateTask(e);
    }
  }

  taskText.addEventListener('keydown', onKeyDown);
  taskText.addEventListener('blur', updateTask);
}

export default editTask;
