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

  const searchQuery = e.target.value.toLowerCase();
  const tasks = document.querySelectorAll('.task-item');
  let hasVisibleTask = false;

  for (const task of tasks) {
    const taskText = task
      .querySelector('.note-title')
      .textContent.toLowerCase();

    if (taskText.includes(searchQuery)) {
      showSingleTask(task);
      hasVisibleTask = true;
    } else {
      hideSingleTask(task);
    }
  }

  if (searchQuery === '') {
    showClearListButton();
    showAddTaskButton();
    hideEmptyImage();
  } else if (!hasVisibleTask) {
    hideClearListButton();
    hideAddTaskButton();
    showEmptyImage();
  } else {
    hideEmptyImage();
    hideClearListButton();
    hideAddTaskButton();
  }
}

export default searchTask;
