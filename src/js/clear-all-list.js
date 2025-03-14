import { refs } from './refs';
import { initPage } from './add-tasks';
import { TASK_LIST_KEY } from './constants';
import { saveToLS } from './set-get-localStorage';
import { hideClearListButton, showEmptyImage } from './helpers';

function clearAllList() {
  saveToLS(TASK_LIST_KEY, []);

  refs.taskList.innerHTML = '';

  showEmptyImage();
  hideClearListButton();

  initPage(refs);
}

export default clearAllList;
