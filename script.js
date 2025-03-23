// Toggle Navigation Menu (Hamburger Icon)
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('visible');
});

// Smooth Scrolling for Navigation Links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Project Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('#projects article');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        projects.forEach(project => {
            if (category === 'all' || project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Lightbox for Project Images
const images = document.querySelectorAll('#projects img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.getElementById('close-lightbox');

images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImage.src = image.src;
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close Lightbox when clicked outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Form Validation for Contact Form
const form = document.querySelector('#contact form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

form.addEventListener('submit', function (e) {
    let valid = true;
    if (nameField.value.trim() === '')
