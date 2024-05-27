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

//service boxes
let selectedServiceType;

        function showPopup(serviceType) {
            selectedServiceType = serviceType;
            let serviceName;
            switch(serviceType) {
                case 'basic':
                    serviceName = "Basic Website";
                    break;
                case 'advanced':
                    serviceName = "Advanced Website";
                    break;
                case 'premium':
                    serviceName = "Premium Website";
                    break;
                default:
                    return;
            }
            document.getElementById('popupMessage').innerText = `You selected the ${serviceName}. How would you like to order?`;
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('popup').style.display = 'block';
        }

        function hidePopup() {
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('popup').style.display = 'none';
        }

        function order(method) {
            hidePopup();
            let message;
            let url;
            switch(selectedServiceType) {
                case 'basic':
                    message = "I would like to order the Basic Website.";
                    break;
                case 'advanced':
                    message = "I would like to order the Advanced Website.";
                    break;
                case 'premium':
                    message = "I would like to order the Premium Website.";
                    break;
                default:
                    return;
            }
            if (method === 'email') {
                url = "mailto:antocaptechnologies@gmail.com?subject=" + encodeURIComponent(`${selectedServiceType.charAt(0).toUpperCase() + selectedServiceType.slice(1)} Website Order`) + "&body=" + encodeURIComponent(message);
            } else if (method === 'whatsapp') {
                url = "https://wa.me/YOUR_PHONE_NUMBER?text=" + encodeURIComponent(message);
            }
            window.open(url, '_blank');
        }
