// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmoytMzQ1LHqkzLC0p0PEdPLLNqai7UPQ",
    authDomain: "contact-form-app-85277.firebaseapp.com",
    projectId: "contact-form-app-85277",
    storageBucket: "contact-form-app-85277.firebasestorage.app",
    messagingSenderId: "165018835093",
    appId: "1:165018835093:web:db02ae59e23a59d039a39c"
};

// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully');
} catch (error) {
    console.error('Firebase initialization error:', error);
}

// Initialize Firestore
const db = firebase.firestore();
