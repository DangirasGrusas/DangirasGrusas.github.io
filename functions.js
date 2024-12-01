const themeToggleButton = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleButton.classList.add('dark-mode');
}

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleButton.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
