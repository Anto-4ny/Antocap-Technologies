// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Toggle between login and register forms
const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');
const loginButton = document.getElementById('show-login');
const registerButton = document.getElementById('show-register');

loginButton.addEventListener('click', () => {
    loginSection.classList.add('active');
    registerSection.classList.remove('active');
    loginButton.classList.add('active');
    registerButton.classList.remove('active');
});

registerButton.addEventListener('click', () => {
    registerSection.classList.add('active');
    loginSection.classList.remove('active');
    registerButton.classList.add('active');
    loginButton.classList.remove('active');
});

// Show/hide password
document.querySelectorAll('.toggle-password').forEach(item => {
    item.addEventListener('click', function () {
        const input = this.previousElementSibling;
        const icon = this.querySelector('i');
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

// Register new user
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            // Save user data to Firestore
            return db.collection('users').doc(userCredential.user.uid).set({
                email: email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            alert('Registration successful!');
        })
        .catch(error => {
            alert(error.message);
        });
});

// Login existing user
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Login successful!');
            // Redirect or perform actions after successful login
        })
        .catch((error) => {
            alert(error.message);
        });
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
