import refs from './refs';
import { initPage } from './add-tasks';
import { TASK_LIST_KEY } from './constants';
import { saveToLS } from './set-get-localStorage';

function clearAllList() {
  saveToLS(TASK_LIST_KEY, []);
  refs.taskList.innerHTML = '';
  refs.emptyBlock.style.display = 'block';
  refs.clearListButton.style.display = 'none';

  initPage(refs);
}

export default clearAllList;
