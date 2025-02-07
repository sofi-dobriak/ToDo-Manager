import refs from './refs';

function deleteTask(e) {
  if (e.target.closest('.icon-trash')) {
    const taskItem = e.target.closest('.task-item');

    if (taskItem) {
      taskItem.remove();
    }
  }

  if (refs.taskList.children.length === 0) {
    refs.emptyBlock.style.display = 'block';
  }
}

export default deleteTask;
