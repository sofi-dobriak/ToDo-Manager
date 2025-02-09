import { saveToLS, loadFromLS } from './set-get-localStorage';

function changeTheme() {
  const isDark = document.body.classList.toggle('dark');
  saveToLS('theme', isDark ? 'dark' : '');
}

const savedTheme = loadFromLS('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

export default changeTheme;
