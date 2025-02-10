import { TASK_LIST_KEY } from './constants';
import { loadFromLS, saveToLS } from './set-get-localStorage';

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

export default updateTaskText;
