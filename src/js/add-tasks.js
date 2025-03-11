import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { taskTemplate, tasksTemplate } from './task-markup';
import { saveToLS, loadFromLS } from './set-get-localStorage';
import { TASK_ITEM_KEY, TASK_LIST_KEY } from './constants';
import {
  hideClearListButton,
  hideEmptyImage,
  showClearListButton,
  showEmptyImage,
} from './helpers';

export function onFormInput(e) {
  const taskObject = {
    inputValue: e.currentTarget.elements['text-note'].value,
  };

  saveToLS(TASK_ITEM_KEY, taskObject);
}

export function initPage(refs) {
  let tasks = loadFromLS(TASK_LIST_KEY);

  if (!tasks.length) {
    showEmptyImage();
    hideClearListButton();
    return;
  } else {
    hideEmptyImage();
    showClearListButton();
  }

  refs.taskList.innerHTML = tasksTemplate(tasks);
}

export function onFormSubmit(e, refs) {
  e.preventDefault();

  const inputValue = e.target.elements['text-note'].value.trim();

  if (!inputValue) {
    iziToast.warning({
      color: 'violet',
      message: 'Please, enter a note',
      position: 'topRight',
    });
    return;
  } else {
    hideEmptyImage();
    showClearListButton();
  }

  const tasks = loadFromLS(TASK_LIST_KEY) || [];

  const newTask = {
    id: Date.now(),
    taskText: inputValue,
    completed: false,
  };

  tasks.push(newTask);
  saveToLS(TASK_LIST_KEY, tasks);

  const markup = taskTemplate(newTask);
  refs.taskList.insertAdjacentHTML('beforeend', markup);

  refs.modalForm.reset();
  refs.modalBackDrop.classList.remove('is-open');

  localStorage.removeItem(TASK_ITEM_KEY);
}
