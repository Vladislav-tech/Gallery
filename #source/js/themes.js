const btn = document.querySelector('.theme-icon-wrapper');
const link = document.getElementById('theme');

if (localStorage.getItem('theme') === "light") {
    link.setAttribute('href', 'css/light.css');
} else if (localStorage.getItem('theme') === 'dark') {
    link.setAttribute('href', 'css/dark.css');
}

function changeTheme() {
    if (link.getAttribute('href') === 'css/dark.css') {
        link.setAttribute('href', 'css/light.css');
        localStorage.setItem('theme', 'light');
    }   else {
        link.setAttribute('href', 'css/dark.css');
        localStorage.setItem('theme', 'dark');
    }
}

btn.addEventListener('click', function() {
    changeTheme();
});