// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBipcddXQOEgaFOncNfqNudCfF-EO0PKgA",
  authDomain: "bd-foodi-place.firebaseapp.com",
  projectId: "bd-foodi-place",
  storageBucket: "bd-foodi-place.appspot.com",
  messagingSenderId: "855385631596",
  appId: "1:855385631596:web:6b29f7557ca36b875ba149"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
