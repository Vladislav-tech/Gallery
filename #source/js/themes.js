
  const btn = document.querySelector('.theme-icon-wrapper');
  const link = document.getElementById('theme');

  link.setAttribute('href', `css/${ localStorage.getItem('theme') === 'dark' ? 'dark' : 'light' }.css`);

  btn.addEventListener('click', changeTheme);

  function changeTheme() {
    const theme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';

    link.setAttribute('href', `css/${theme}.css`)
    localStorage.setItem('theme', theme);
  }