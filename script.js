// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

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

// Sign Up Function
export async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save additional user info to Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      createdAt: new Date(),
      // Add more user data here if needed
    });

    console.log("User signed up and added to Firestore:", user);
  } catch (error) {
    console.error("Error signing up:", error);
  }
}

// Login Function
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("User logged in:", user);
  } catch (error) {
    console.error("Error logging in:", error);
  }
}

// Logout Function
export async function logout() {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out:", error);
  }
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
