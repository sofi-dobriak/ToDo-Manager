function toggleTaskCompletion(e) {
  if (e.target.classList.contains('checkbox-input')) {
    const checkbox = e.target;
    const taskItem = checkbox.closest('.task-item');
    const taskText = taskItem.querySelector('.note-title');

    if (checkbox.checked) {
      taskText.classList.add('completed');
    } else {
      taskText.classList.remove('completed');
    }
  }
}

export default toggleTaskCompletion;
