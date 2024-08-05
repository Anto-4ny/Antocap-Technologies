// JavaScript for slider functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Initial display
showSlide(currentIndex);
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// JavaScript for mobile menu toggle
document.getElementById('menu-icon').addEventListener('click', function() {
    console.log('Menu icon clicked');
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// Function to open content in fullscreen
function openFullScreen(contentId) {
    const content = document.getElementById(contentId);
    if (content) {
        if (content.requestFullscreen) {
            content.requestFullscreen();
        } else if (content.mozRequestFullScreen) { // Firefox
            content.mozRequestFullScreen();
        } else if (content.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            content.webkitRequestFullscreen();
        } else if (content.msRequestFullscreen) { // IE/Edge
            content.msRequestFullscreen();
        }
    }
}

// Example function for feature boxes (if you want interaction)
const featureBoxes = document.querySelectorAll('.feature-box');
featureBoxes.forEach(box => {
    box.addEventListener('click', function() {
        const contentId = this.getAttribute('data-content-id');
        openFullScreen(contentId);
    });
});

// Smooth Scrolling for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
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
