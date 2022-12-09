// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoKxASC6yFbwiMjeVfnhVXwL3Y6ZmhXXk",
    authDomain: "w-project-c5144.firebaseapp.com",
    projectId: "w-project-c5144",
    storageBucket: "w-project-c5144.appspot.com",
    messagingSenderId: "1029123931870",
    appId: "1:1029123931870:web:e789c9e3d10c92a3790c4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const db = getFirestore(app);