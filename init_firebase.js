// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaC332hx32wD7vBCiZDf49AHH4ONYqsu4",
  authDomain: "gem-react-clone.firebaseapp.com",
  projectId: "gem-react-clone",
  storageBucket: "gem-react-clone.appspot.com",
  messagingSenderId: "1025910776292",
  appId: "1:1025910776292:web:564623d13f785343f6a7f1",
  measurementId: "G-RJWPSQP1R0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);