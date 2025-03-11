import {
  showAddTaskButton,
  hideAddTaskButton,
  showSingleTask,
  hideSingleTask,
  showEmptyImage,
  hideEmptyImage,
  showClearListButton,
  hideClearListButton,
} from './helpers';

function filterTasks(e) {
  const selectedStatus = e.target.value;
  const tasks = document.querySelectorAll('.task-item');
  let hasVisibleTasks = false;

  tasks.forEach(task => {
    const taskText = task.querySelector('.note-title');
    const isCompleted = taskText.classList.contains('completed');

    if (selectedStatus === 'All') {
      showSingleTask(task);
      hasVisibleTasks = true;
    } else if (selectedStatus === 'Complete' && isCompleted) {
      showSingleTask(task);
      hasVisibleTasks = true;
    } else if (selectedStatus === 'Incomplete' && !isCompleted) {
      showSingleTask(task);
      hasVisibleTasks = true;
    } else {
      hideSingleTask(task);
    }
  });

  if (!hasVisibleTasks) {
    showEmptyImage();
    hideAddTaskButton();
  } else {
    hideEmptyImage();
    selectedStatus === 'All' ? showAddTaskButton() : hideAddTaskButton();
  }

  selectedStatus === 'All' ? showClearListButton() : hideClearListButton();
}

export default filterTasks;
