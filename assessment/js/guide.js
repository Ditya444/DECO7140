// Toogle menu mobile
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.querySelector(".menu-toggle");

    function toggleMenu() {
        if (navLinks) {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('menu-toggle-active'); // Tambahkan atau hapus kelas hijau
        } else {
            console.error("Element #nav-links not found.");
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    } else {
        console.error("Menu toggle button not found.");
    }
});

// Change background color on scroll for Navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('header-scrolled');
    } else {
        navbar.classList.remove('header-scrolled');
    }
});