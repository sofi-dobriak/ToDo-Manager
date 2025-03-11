import { refs } from './refs';

export function showEmptyImage() {
  refs.emptyBlock.style.display = 'block';
}

export function hideEmptyImage() {
  refs.emptyBlock.style.display = 'none';
}

export function showClearListButton() {
  refs.clearListButton.style.display = 'block';
}

export function hideClearListButton() {
  refs.clearListButton.style.display = 'none';
}

export function showSingleTask(taskElement) {
  taskElement.style.display = 'flex';
}

export function hideSingleTask(taskElement) {
  taskElement.style.display = 'none';
}

export function showAddTaskButton() {
  refs.addTaskButton.style.display = 'flex';
}

export function hideAddTaskButton() {
  refs.addTaskButton.style.display = 'none';
}
