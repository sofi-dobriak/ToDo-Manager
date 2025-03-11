import { TASK_LIST_KEY } from './constants';
import { loadFromLS, saveToLS } from './set-get-localStorage';
import { hideClearListButton, showEmptyImage } from './helpers';

function deleteTask(e) {
  const deleteButton = e.target.closest('.icon-trash');
  if (!deleteButton) return;

  const taskItem = deleteButton.closest('.task-item');
  if (!taskItem) return;

  const taskId = Number(taskItem.dataset.id);
  taskItem.remove();

  let tasks = loadFromLS(TASK_LIST_KEY) || [];

  tasks = tasks.filter(task => task.id !== taskId);
  saveToLS(TASK_LIST_KEY, tasks);

  if (tasks.length === 0) {
    showEmptyImage();
    hideClearListButton();
  }
}

function toggleTaskCompletion(e) {
  if (e.target.classList.contains('checkbox-input')) {
    const checkbox = e.target;
    const taskItem = checkbox.closest('.task-item');
    const noteTitle = taskItem.querySelector('.note-title');
    const isCompleted = e.target.checked;

    noteTitle.classList.toggle('completed', isCompleted);

    const taskId = Number(taskItem.dataset.id);
    const tasks = loadFromLS(TASK_LIST_KEY) || [];
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
      tasks[taskIndex].completed = isCompleted;
      saveToLS(TASK_LIST_KEY, tasks);
    }
  }
}

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

function updateTaskText(e, taskText, originalText, taskId) {
  if (e.key === 'Enter' || e.type === 'blur') {
    const newText = taskText.textContent.trim();

    taskText.textContent = newText || originalText;

    if (newText && newText !== originalText) {
      let tasks = loadFromLS(TASK_LIST_KEY);

      tasks = tasks.map(task =>
        task.id === taskId ? { ...task, taskText: newText } : task
      );

      saveToLS(TASK_LIST_KEY, tasks);
    }
  }
}

function onTaskInteraction(e) {
  deleteTask(e);
  toggleTaskCompletion(e);
  editTask(e);
}

export default onTaskInteraction;
