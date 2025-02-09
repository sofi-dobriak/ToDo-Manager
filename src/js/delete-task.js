import refs from './refs';
import { TASK_ITEM_KEY, TASK_LIST_KEY } from './constants';
import { loadFromLS, saveToLS } from './set-get-localStorage';

function deleteTask(e) {
  if (e.target.closest('.icon-trash')) {
    const taskItem = e.target.closest('.task-item');

    if (taskItem) {
      const taskId = Number(taskItem.dataset.id);
      taskItem.remove();

      let tasks = loadFromLS(TASK_LIST_KEY);
      tasks = tasks.filter(task => task.id !== taskId);

      saveToLS(TASK_LIST_KEY, tasks);

      if (tasks.length === 0) {
        refs.emptyBlock.style.display = 'block';
      }
    }
  }
}

export default deleteTask;
