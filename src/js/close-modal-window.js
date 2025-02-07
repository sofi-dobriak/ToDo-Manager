import refs from './refs';

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    refs.modalBackDrop.classList.remove('is-open');
  }
}

export default onBackdropClick;
