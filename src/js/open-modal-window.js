import refs from './refs';

function onButtonClick() {
  refs.modalBackDrop.classList.toggle('is-open');

  setTimeout(() => {
    refs.modalInput.focus();
  }, 100);
}

export default onButtonClick;
