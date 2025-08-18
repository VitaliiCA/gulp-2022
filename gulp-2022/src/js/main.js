// filepath: f:\Liza\Documents\Новая папка\gulp-2022\src\js\main.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize any interactive elements here
    console.log('Main JavaScript file loaded.');

    // Example: Add event listeners for navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = event.target.getAttribute('href');
            loadPage(targetPage);
        });
    });

    function loadPage(page) {
        // Logic to load the selected page dynamically
        console.log(`Loading page: ${page}`);
        // You can implement AJAX calls or other methods to load content
    }
});