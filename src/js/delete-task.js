import refs from './refs';
import { TASK_LIST_KEY } from './constants';
import { loadFromLS, saveToLS } from './set-get-localStorage';

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
    refs.emptyBlock.style.display = 'block';
    refs.clearListButton.style.display = 'none';
  }
}

export default deleteTask;
