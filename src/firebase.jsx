// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgDygkYnHGmsKiuw-C2Dd_tFkg8r1YVqs",
  authDomain: "chatapp-9f49a.firebaseapp.com",
  projectId: "chatapp-9f49a",
  storageBucket: "chatapp-9f49a.appspot.com",
  messagingSenderId: "923531877764",
  appId: "1:923531877764:web:6ae976b05f6c13802591d1",
  measurementId: "G-LP6268T4HB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
