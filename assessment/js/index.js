// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarLinks = document.getElementById('navbar-links');

    // Toggle the navbar links visibility on mobile when the hamburger menu is clicked
    toggleButton.addEventListener('click', function () {
        navbarLinks.classList.toggle('open');
    });
});
