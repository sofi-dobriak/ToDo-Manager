import { refs } from './refs';
import clearAllList from './clear-all-list';

// Modal window

export function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    refs.modalBackDrop.classList.remove('is-open');
  }
}

export function onButtonClick() {
  refs.modalBackDrop.classList.toggle('is-open');

  setTimeout(() => {
    refs.modalInput.focus();
  }, 100);
}

// Accept modal window

export function onAcceptBackdropClick(e) {
  if (e.target === e.currentTarget) {
    refs.acceptModalBackdrop.classList.remove('is-open');
  }
}

export function onAcceptCancelButtonClick() {
  refs.acceptModalBackdrop.classList.remove('is-open');
}

export function onClearButtonClick() {
  refs.acceptModalBackdrop.classList.toggle('is-open');
}

export function onAcceptClearButtonClick() {
  clearAllList();
  refs.acceptModalBackdrop.classList.remove('is-open');
}
