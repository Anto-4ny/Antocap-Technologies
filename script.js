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

    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Hamburger menu functionality
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

//basic, advanced and premium services 
function orderService(serviceType) {
    let message;
    let email;
    switch(serviceType) {
        case 'basic':
            message = "I would like to order the Basic Service.";
            email = "mailto:your-email@example.com?subject=Basic Service Order&body=" + encodeURIComponent(message);
            break;
        case 'advanced':
            message = "I would like to order the Advanced Service.";
            email = "mailto:your-email@example.com?subject=Advanced Service Order&body=" + encodeURIComponent(message);
            break;
        case 'premium':
            message = "I would like to order the Premium Service.";
            email = "mailto:your-email@example.com?subject=Premium Service Order&body=" + encodeURIComponent(message);
            break;
        default:
            return;
    }
    window.open(email, '_blank');
}
