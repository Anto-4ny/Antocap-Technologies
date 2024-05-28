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

function order(serviceType) {
    let message;
    let subject;
    
    switch(serviceType) {
        case 'basic':
            subject = "Order for Basic Website";
            message = "I would like to order the Basic Website.";
            break;
        case 'advanced':
            subject = "Order for Advanced Website";
            message = "I would like to order the Advanced Website.";
            break;
        case 'premium':
            subject = "Order for Premium Website";
            message = "I would like to order the Premium Website.";
            break;
        default:
            return;
    }
    
    const url = `mailto:antocaptechnologies@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    window.location.href = url;
}

