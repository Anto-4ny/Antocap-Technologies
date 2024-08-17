
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex); // Show the first slide initially

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
});

// Simple sliding functionality for reviews
const reviewsSlider = document.querySelector('.reviews-slider');
let isDown = false;
let startX;
let scrollLeft;

reviewsSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - reviewsSlider.offsetLeft;
    scrollLeft = reviewsSlider.scrollLeft;
});

reviewsSlider.addEventListener('mouseleave', () => {
    isDown = false;
});

reviewsSlider.addEventListener('mouseup', () => {
    isDown = false;
});

reviewsSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - reviewsSlider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    reviewsSlider.scrollLeft = scrollLeft - walk;
});

//contact us page 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const status = document.createElement('p');
        status.classList.add('form-status');
        form.appendChild(status);

        fetch('send-email.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.status === 200) {
                status.innerHTML = "Thank you! Your message has been sent.";
                status.style.color = 'green';
                form.reset();
            } else {
                return response.text().then(text => { throw new Error(text) });
            }
        })
        .catch(error => {
            status.innerHTML = error.message;
            status.style.color = 'red';
        });
    });
});


// Import Firebase configuration
// Use this only if you are working in a module environment or a build tool is configured.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toggle between login and registration forms
document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('login-section').classList.remove('hidden');
    document.getElementById('register-section').classList.add('hidden');
    document.getElementById('show-login').classList.add('active');
    document.getElementById('show-register').classList.remove('active');
});

document.getElementById('show-register').addEventListener('click', () => {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('register-section').classList.remove('hidden');
    document.getElementById('show-login').classList.remove('active');
    document.getElementById('show-register').classList.add('active');
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
        // Redirect to another page or handle successful login
    } catch (error) {
        console.error('Error logging in:', error);
        alert('Login failed: ' + error.message);
    }
});

// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Registration successful!');
        // Redirect to another page or handle successful registration
    } catch (error) {
        console.error('Error registering:', error);
        alert('Registration failed: ' + error.message);
    }
});
