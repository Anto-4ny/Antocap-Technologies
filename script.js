// Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
    import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyB41af8HAWUOK_gg-_H649rdtYadj_5C58",
      authDomain: "antocap-teknologies.firebaseapp.com",
      projectId: "antocap-teknologies",
      storageBucket: "antocap-teknologies.appspot.com",
      messagingSenderId: "897941113649",
      appId: "1:897941113649:web:5374565d99bddab3ff7e10",
      measurementId: "G-7FH02REVL3"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    const db = getFirestore(app);

    // Handle Sign-Up
    document.getElementById('sign-up-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById('sign-up-email').value;
      const password = document.getElementById('sign-up-password').value;

      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

      if (!passwordRegex.test(password)) {
        alert('Password must be at least 6 characters long and include both letters and numbers.');
        return;
      }

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // Store user info in Firestore
          return setDoc(doc(db, "users", user.uid), {
            email: user.email,
            uid: user.uid,
            createdAt: new Date()
          });
        })
        .then(() => {
          alert('Sign-up successful!');
        })
        .catch((error) => {
          alert(`Error: ${error.message}`);
        });
    });

    // Handle Login
    document.getElementById('login-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert('Login successful!');
          // Redirect or perform actions after login
        })
        .catch((error) => {
          alert(`Error: ${error.message}`);
        });
    });

    // Form Toggling
    document.getElementById('show-login').addEventListener('click', () => {
      document.getElementById('login-form').classList.add('active');
      document.getElementById('sign-up-form').classList.remove('active');
    });

    document.getElementById('show-signup').addEventListener('click', () => {
      document.getElementById('sign-up-form').classList.add('active');
      document.getElementById('login-form').classList.remove('active');
    });

    // Password Visibility Toggling
    function togglePasswordVisibility(inputId) {
      const passwordInput = document.getElementById(inputId);
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
    }

//pop ins
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.pop-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
