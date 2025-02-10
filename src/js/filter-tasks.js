import refs from './refs';

function filterTasks(e) {
  const selectedStatus = e.target.value;
  const tasks = document.querySelectorAll('.task-item');

  tasks.forEach(task => {
    const taskText = task.querySelector('.note-title');
    const isCompleted = taskText.classList.contains('completed');

    if (selectedStatus === 'All') {
      task.style.display = 'flex';
      refs.clearListButton.style.display = 'block';
      refs.addTaskButton.style.display = 'block';
    } else if (selectedStatus === 'Complete' && isCompleted) {
      task.style.display = 'flex';
      refs.clearListButton.style.display = 'none';
      refs.addTaskButton.style.display = 'none';
    } else if (selectedStatus === 'Incomplete' && !isCompleted) {
      task.style.display = 'flex';
      refs.clearListButton.style.display = 'none';
      refs.addTaskButton.style.display = 'none';
    } else {
      task.style.display = 'none';
    }
  });
}

export default filterTasks;
