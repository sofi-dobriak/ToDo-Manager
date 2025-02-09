function filterTasks(e) {
  const selectedStatus = e.target.value;
  const tasks = document.querySelectorAll('.task-item');

  tasks.forEach(task => {
    const taskText = task.querySelector('.note-title');
    const isCompleted = taskText.classList.contains('completed');

    if (selectedStatus === 'All') {
      task.style.display = 'flex';
    } else if (selectedStatus === 'Complete' && isCompleted) {
      task.style.display = 'flex';
    } else if (selectedStatus === 'Incomplete' && !isCompleted) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  });
}

export default filterTasks;
