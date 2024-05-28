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

function showPopup(serviceType) {
    let message;
    let serviceName;

    switch(serviceType) {
        case 'basic':
            serviceName = "Basic Website";
            message = "I would like to order the Basic Website.";
            break;
        case 'advanced':
            serviceName = "Advanced Website";
            message = "I would like to order the Advanced Website.";
            break;
        case 'premium':
            serviceName = "Premium Website";
            message = "I would like to order the Premium Website.";
            break;
        default:
            return;
    }

    const subject = `${serviceName} Order`;
    const body = encodeURIComponent(message);
    const url = `mailto:antocaptechnologies@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.location.href = url;
}
