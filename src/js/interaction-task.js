import deleteTask from './delete-task';
import toggleTaskCompletion from './complete-task';
import editTask from './edit-task';

function onTaskInteraction(e) {
  deleteTask(e);
  toggleTaskCompletion(e);
  editTask(e);
}

export default onTaskInteraction;
