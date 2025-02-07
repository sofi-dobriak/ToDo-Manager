function searchTask(e) {
  e.preventDefault();

  const searchQery = e.target.value.toLowerCase();
  const tasks = document.querySelectorAll('.task-item');

  tasks.forEach(task => {
    const taskText = task
      .querySelector('.note-title')
      .textContent.toLowerCase();

    if (taskText.includes(searchQery)) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

export default searchTask;
