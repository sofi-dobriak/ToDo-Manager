import searchTask from './search-task';
import onButtonClick from './open-modal-window';
import onBackdropClick from './close-modal-window';
import onFormSubmit from './add-tasks';
import onTaskInteraction from './interaction-task';
import filterTasks from './filter-tasks';
import changeTheme from './change-theme';

const refs = {
  searchInput: document.querySelector('#search-note'),
  modalBackDrop: document.querySelector('.js-modal-backdrop'),
  addTaskButton: document.querySelector('.js-add-task'),
  cancelModalBtn: document.querySelector('.js-btn-cancel'),
  modalWindow: document.querySelector('.js-modal-window'),
  modalForm: document.querySelector('.js-modal-form'),
  modalInput: document.querySelector('.modal-input'),
  taskList: document.querySelector('.js-task-list'),
  emptyBlock: document.querySelector('.js-empty-block'),
  statusSelect: document.getElementById('status'),
  themeButton: document.querySelector('.theme-button'),
};

refs.searchInput.addEventListener('input', searchTask);
refs.addTaskButton.addEventListener('click', onButtonClick);
refs.cancelModalBtn.addEventListener('click', onButtonClick);
refs.modalBackDrop.addEventListener('click', onBackdropClick);
refs.modalForm.addEventListener('submit', onFormSubmit);
refs.taskList.addEventListener('click', onTaskInteraction);
refs.statusSelect.addEventListener('change', filterTasks);
refs.themeButton.addEventListener('click', changeTheme);

export default refs;
