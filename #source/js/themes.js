
  const btn = document.querySelector('.theme-icon-wrapper');
  const link = document.getElementById('theme');

  link.setAttribute('href', `css/${ localStorage.getItem('theme') === 'light' }.css`);

  btn.addEventListener('click', () => {
    const theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

    link.setAttribute('href', `css/${theme}.css`)
    localStorage.setItem('theme', theme);
  });