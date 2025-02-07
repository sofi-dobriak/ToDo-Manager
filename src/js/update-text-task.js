function updateTaskText(e, input, taskText, originalText) {
  if (e.key === 'Enter' || e.type === 'blur') {
    const newText = input.value.trim();

    if (newText === '') {
      taskText.textContent = originalText;
    } else {
      taskText.textContent = newText;
    }

    input.remove();
  }
}

export default updateTaskText;
