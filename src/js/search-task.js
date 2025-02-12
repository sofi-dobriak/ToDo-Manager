import refs from './refs';
import { initLottie, destroyLottie } from './lottie-animation';

function searchTask(e) {
  e.preventDefault();

  const searchQuery = e.target.value.toLowerCase();
  const tasks = document.querySelectorAll('.task-item');
  let hasVisibleTask = false;

  tasks.forEach(task => {
    const taskText = task
      .querySelector('.note-title')
      .textContent.toLowerCase();

    if (taskText.includes(searchQuery)) {
      task.style.display = 'block';
      hasVisibleTask = true;
    } else {
      task.style.display = 'none';
    }

    if (searchQuery === '') {
      refs.clearListButton.style.display = 'block';
      refs.addTaskButton.style.display = 'flex';
      refs.emptyBlock.style.display = 'none';
    } else if (!hasVisibleTask) {
      refs.clearListButton.style.display = 'none';
      refs.addTaskButton.style.display = 'none';

      refs.emptyBlock.style.display = 'block';
      initLottie();
    } else {
      refs.emptyBlock.style.display = 'none';
      refs.clearListButton.style.display = 'none';
      refs.addTaskButton.style.display = 'none';
      destroyLottie();
    }
  });
}

export default searchTask;
