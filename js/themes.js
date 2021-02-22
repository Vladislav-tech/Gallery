const btn = document.querySelector('.theme-icon-wrapper');

function changeTheme() {
    const link = document.getElementById('theme');

    if (link.getAttribute('href') === 'css/dark.css') {
        link.setAttribute('href', 'css/light.css');
    }   else {
        link.setAttribute('href', 'css/dark.css');
    }
}

btn.addEventListener('click', function() {
    changeTheme();
});