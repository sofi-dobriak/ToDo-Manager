import refs from './refs';
import taskTamplate from './task-markup';

function onFormSubmit(e) {
  e.preventDefault();

  const inputValue = e.target.elements['text-note'].value.trim();

  if (!inputValue) {
    alert('Please, enter a note');
    return;
  } else {
    refs.emptyBlock.style.display = 'none';
  }

  const dataNotes = {
    taskText: inputValue,
  };

  const markup = taskTamplate(dataNotes);
  refs.taskList.insertAdjacentHTML('afterbegin', markup);

  refs.modalForm.reset();
  refs.modalBackDrop.classList.remove('is-open');
}

export default onFormSubmit;
