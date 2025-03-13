import './scss/styles.scss';

import { refs } from './js/refs';
import searchTask from './js/search-task';
import {
  onAcceptBackdropClick,
  onAcceptCancelButtonClick,
  onAcceptClearButtonClick,
  onBackdropClick,
  onButtonClick,
  onClearButtonClick,
} from './js/modal';
import { onFormInput, onFormSubmit, initPage } from './js/add-tasks';
import onTaskInteraction from './js/interaction-task';
import filterTasks from './js/filter-tasks';
import changeTheme from './js/change-theme';

// Search task
refs.searchInput.addEventListener('input', searchTask);

//Open modal
refs.addTaskButton.addEventListener('click', onButtonClick);

//Close modal
refs.cancelModalBtn.addEventListener('click', onButtonClick);
refs.modalBackDrop.addEventListener('click', onBackdropClick);
refs.acceptModalBackdrop.addEventListener('click', onAcceptBackdropClick);
refs.acceptCancelButton.addEventListener('click', onAcceptCancelButtonClick);
refs.acceptClearListButton.addEventListener('click', onAcceptClearButtonClick);

//Form submit & create task in model window form
refs.modalForm.addEventListener('input', e => onFormInput(e));
refs.modalForm.addEventListener('submit', e => onFormSubmit(e, refs));

//Work with tasks (complete, update, delete)
refs.taskList.addEventListener('click', onTaskInteraction);

//Filter tasks by complete status
refs.statusSelect.addEventListener('change', filterTasks);

//Change theme of app
refs.themeButton.addEventListener('click', changeTheme);

//Clear all list
refs.clearListButton.addEventListener('click', onClearButtonClick);

// Initialize page
initPage(refs);

export default refs;
