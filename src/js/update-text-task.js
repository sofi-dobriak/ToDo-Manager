function updateTaskText(e, input, taskText, originalText) {
  if (e.key === 'Enter' || e.type === 'blur') {
    const newText = input.value.trim();

    taskText.textContent = newText || originalText;

    input.remove();
  }
}

export default updateTaskText;
