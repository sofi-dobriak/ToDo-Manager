import { loadFromLS } from './set-get-localStorage';
import { TASK_LIST_KEY } from './constants';

import {
  hideAddTaskButton,
  hideClearListButton,
  hideEmptyImage,
  hideSingleTask,
  showAddTaskButton,
  showClearListButton,
  showEmptyImage,
  showSingleTask,
} from './helpers';

function searchTask(e) {
  e.preventDefault();

  const taskArray = loadFromLS(TASK_LIST_KEY);
  const searchQuery = e.target.value.toLowerCase();
  const tasks = document.querySelectorAll('.task-item');
  let hasVisibleTask = false;

  if (searchQuery === '') {
    showAddTaskButton();

    if (taskArray.length === 0) {
      showEmptyImage();
      hideClearListButton();
    } else {
      hideEmptyImage();
      showClearListButton();

      tasks.forEach(task => showSingleTask(task));
    }
    return;
  }

  hideAddTaskButton();
  hideClearListButton();

  tasks.forEach(task => {
    const taskText = task
      .querySelector('.note-title')
      .textContent.toLowerCase();

    if (taskText.includes(searchQuery)) {
      showSingleTask(task);
      hasVisibleTask = true;
    } else {
      hideSingleTask(task);
    }
  });

  if (hasVisibleTask) {
    hideEmptyImage();
  } else {
    showEmptyImage();
  }
}

export default searchTask;
