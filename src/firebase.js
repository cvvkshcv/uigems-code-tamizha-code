// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAuYrhqFuwcdxjR-jfTDve4qAc5K0jyUU",
  authDomain: "happy-hours-demo.firebaseapp.com",
  databaseURL: "https://happy-hours-demo.firebaseio.com",
  projectId: "happy-hours-demo",
  storageBucket: "happy-hours-demo.appspot.com",
  messagingSenderId: "582406561742",
  appId: "1:582406561742:web:fdbed372cc093c3d58559f",
  measurementId: "G-51R9CVMCN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);