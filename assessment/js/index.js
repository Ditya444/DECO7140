// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the toggle button and the navbar links container
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarLinks = document.getElementById('navbar-links');

    // Add an event listener to the toggle button to open/close the navbar links
    toggleButton.addEventListener('click', function () {
        navbarLinks.classList.toggle('open');
    });

    // Search Functionality
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');

    searchButton.addEventListener('click', function () {
        const query = searchBar.value.trim();
        if (query) {
            // Placeholder for future search implementation
            alert('Searching for: ' + query);
        }
    });
});