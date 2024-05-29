// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    };

    setInterval(nextSlide, 6000); // Change slide every 3 seconds

    // Hamburger menu functionality
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', () => {
    let websiteType = box.classList.contains('basic') ? "Basic Website" :
                      box.classList.contains('advanced') ? "Advanced Website" :
                      "Premium Website";
    let message = "I want to order the " + websiteType;
    window.location.href = "mailto:antocaptechnologies@gmail.com?subject=Website Order&body=" + encodeURIComponent(message);
  });
});
        
