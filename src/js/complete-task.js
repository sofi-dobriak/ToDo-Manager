import { saveToLS, loadFromLS } from './set-get-localStorage';
import { TASK_LIST_KEY } from './constants';

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

export default toggleTaskCompletion;
