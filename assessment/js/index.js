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

// Hero Section
document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const totalSlides = slides.length;
    const progressBar = document.querySelector('.simple-progress-bar');
    const slideInterval = 5000; // 5 detik per slide

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        updateProgressBar(index);
    }

    function updateProgressBar(index) {
        const progressPercentage = ((index + 1) / totalSlides) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Interval otomatis untuk slide
    let autoSlide = setInterval(nextSlide, slideInterval);

    // Event listener untuk tombol prev dan next
    const prevButton = document.querySelector(".carousel-btn.prev");
    const nextButton = document.querySelector(".carousel-btn.next");

    prevButton.addEventListener("click", function() {
        clearInterval(autoSlide);
        prevSlide();
        autoSlide = setInterval(nextSlide, slideInterval);
    });

    nextButton.addEventListener("click", function() {
        clearInterval(autoSlide);
        nextSlide();
        autoSlide = setInterval(nextSlide, slideInterval);
    });

    updateProgressBar(currentSlide);
});


// Product Category Homepage
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const offerItems = document.querySelectorAll(".offer-item");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", function () {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));
        // Add active class to the clicked tab
        tab.classList.add("active");
  
        // Filter items based on category
        const category = tab.getAttribute("data-category");
        offerItems.forEach(item => {
          if (category === "offers" || item.getAttribute("data-category") === category) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  });
  

// Dropdown category
// Fungsi untuk toggle dropdown pada mobile
function toggleDropdown() {
    if (window.innerWidth <= 768) { // Pastikan hanya bekerja di mobile
      const dropdownContent = document.getElementById("dropdown-content");
      const dropdownBtn = document.querySelector(".dropdown-btn");
  
      // Toggle visibility of dropdown
      dropdownContent.style.display = dropdownContent.style.display === "flex" ? "none" : "flex";
      
      // Toggle active class for dropdown button
      dropdownBtn.classList.toggle("active");
    }
  }
  
  // Fungsi untuk memilih kategori dan memperbarui tombol di mobile
  function selectCategory(categoryName) {
    if (window.innerWidth <= 768) { // Pastikan hanya bekerja di mobile
      const dropdownBtn = document.querySelector(".dropdown-btn");
  
      // Update dropdown button text with selected category name
      dropdownBtn.textContent = categoryName;
  
      // Hide dropdown after selection
      document.getElementById("dropdown-content").style.display = "none";
      
      // Remove active class from dropdown button
      dropdownBtn.classList.remove("active");
  
      // Activate the selected tab and deactivate others
      const tabs = document.querySelectorAll(".category-tabs .tab");
      tabs.forEach(tab => {
        if (tab.textContent.trim() === categoryName) {
          tab.classList.add("active");
        } else {
          tab.classList.remove("active");
        }
      });
    }
  }
  
  // Menutup dropdown jika pengguna mengklik di luar dropdown pada mobile
  window.onclick = function(event) {
    if (window.innerWidth <= 768) { // Pastikan hanya bekerja di mobile
      if (!event.target.matches('.dropdown-btn') && !event.target.closest('.dropdown-content')) {
        const dropdownContent = document.getElementById("dropdown-content");
        const dropdownBtn = document.querySelector(".dropdown-btn");
  
        if (dropdownContent.style.display === 'flex') {
          dropdownContent.style.display = 'none';
          dropdownBtn.classList.remove("active");
        }
      }
    }
  };
  
  
  
  
  