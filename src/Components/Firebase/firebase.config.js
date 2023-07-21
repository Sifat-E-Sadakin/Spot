// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOJvZZlQ3lOQ7eITh9IMutyeym1of0Tcw",
  authDomain: "spot-ckj.firebaseapp.com",
  projectId: "spot-ckj",
  storageBucket: "spot-ckj.appspot.com",
  messagingSenderId: "1078128621154",
  appId: "1:1078128621154:web:f216285fb0bc4bc31e033b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;