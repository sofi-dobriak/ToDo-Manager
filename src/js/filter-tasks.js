import refs from './refs';
import { initLottie, destroyLottie } from './lottie-animation';

function filterTasks(e) {
  const selectedStatus = e.target.value;
  const tasks = document.querySelectorAll('.task-item');
  let hasVisibleTasks = false;

  tasks.forEach(task => {
    const taskText = task.querySelector('.note-title');
    const isCompleted = taskText.classList.contains('completed');

    if (selectedStatus === 'All') {
      task.style.display = 'flex';
      hasVisibleTasks = true;
    } else if (selectedStatus === 'Complete' && isCompleted) {
      task.style.display = 'flex';
      hasVisibleTasks = true;
    } else if (selectedStatus === 'Incomplete' && !isCompleted) {
      task.style.display = 'flex';
      hasVisibleTasks = true;
    } else {
      task.style.display = 'none';
    }
  });

  if (!hasVisibleTasks) {
    refs.emptyBlock.style.display = 'block';
    refs.addTaskButton.style.display = 'none';

    initLottie();
  } else {
    refs.emptyBlock.style.display = 'none';
    refs.addTaskButton.style.display =
      selectedStatus === 'All' ? 'flex' : 'none';
    destroyLottie();
  }

  refs.clearListButton.style.display =
    selectedStatus === 'All' ? 'block' : 'none';
}

export default filterTasks;
