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

// Fetch and display products on page load
const myHeaders = new Headers();
myHeaders.append("student_number", "s4913925"); // Replace with your actual student number
myHeaders.append("uqcloud_zone_id", "875dd3a6"); // Replace with your actual zone ID

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

// Show loading message before fetching data
document.getElementById('forum-list').innerHTML = "<p>Loading discussions...</p>";

fetch("https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericproduct/", requestOptions)
  .then(response => response.json())
  .then(data => {
    let output = "";
    data.forEach(product => {
      output += `
        <div class="product">
          <h3>${product.product_name}</h3>
          <p>Owner: ${product.product_owner}</p>
          <p>${product.product_description}</p>
          <ul>
            <li>${product.product_info1 || ''}</li>
            <li>${product.product_info2 || ''}</li>
            <li>${product.product_info3 || ''}</li>
          </ul>
          ${product.product_photo ? `<img src="${product.product_photo}" alt="${product.product_name}">` : ""}
        </div>
      `;
    });
    document.getElementById('forum-list').innerHTML = output;
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('forum-list').innerHTML = "<p>Failed to load discussions. Please try again later.</p>";
  });

// Handle form submission
document.getElementById('forumForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Clear previous response message
  document.getElementById('response-message').textContent = "";

  const myHeaders = new Headers();
  myHeaders.append("student_number", "s4913925"); // Replace with your actual student number
  myHeaders.append("uqcloud_zone_id", "875dd3a6"); // Replace with your actual zone ID

  const form = document.getElementById('forumForm');
  const formData = new FormData(form);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formData,
    redirect: "follow"
  };

  // Show submitting message
  document.getElementById('response-message').textContent = "Submitting your discussion...";

  fetch("https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericproduct/", requestOptions)
    .then(response => response.json())
    .then(result => {
      document.getElementById('response-message').textContent = "Discussion submitted successfully!";
      form.reset();
      
      // Optionally, refresh the forum list or add the new discussion dynamically
      // (Assuming `result` contains the new product data)
      const newProduct = `
        <div class="product">
          <h3>${result.product_name}</h3>
          <p>Owner: ${result.product_owner}</p>
          <p>${result.product_description}</p>
          <ul>
            <li>${result.product_info1 || ''}</li>
            <li>${result.product_info2 || ''}</li>
            <li>${result.product_info3 || ''}</li>
          </ul>
          ${result.product_photo ? `<img src="${result.product_photo}" alt="${result.product_name}">` : ""}
        </div>
      `;
      document.getElementById('forum-list').insertAdjacentHTML('beforeend', newProduct);
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('response-message').textContent = "Failed to submit discussion. Please try again.";
    });
});

