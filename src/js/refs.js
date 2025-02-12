import searchTask from './search-task';
import onButtonClick from './open-modal-window';
import onBackdropClick from './close-modal-window';
import { onFormInput, onFormSubmit, initPage } from './add-tasks';
import onTaskInteraction from './interaction-task';
import filterTasks from './filter-tasks';
import changeTheme from './change-theme';
import clearAllList from './clear-all-list';

import './lottie-animation';

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
  clearListButton: document.querySelector('.js-clear-list-button'),
  statusSelect: document.getElementById('status'),
  themeButton: document.querySelector('.theme-button'),

  canvas: document.querySelector('#dotlottie-canvas'),
};

// Search task
refs.searchInput.addEventListener('input', searchTask);

//Open modal
refs.addTaskButton.addEventListener('click', onButtonClick);
refs.cancelModalBtn.addEventListener('click', onButtonClick);

//Close modal
refs.modalBackDrop.addEventListener('click', onBackdropClick);

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
refs.clearListButton.addEventListener('click', clearAllList);

// Initialize page
initPage(refs);

export default refs;
