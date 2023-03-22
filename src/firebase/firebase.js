// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxcXQokKZy0cj9UfSs4VJfdY3tGI_B8EM",
  authDomain: "fir-isitech.firebaseapp.com",
  projectId: "fir-isitech",
  storageBucket: "fir-isitech.appspot.com",
  messagingSenderId: "496205806563",
  appId: "1:496205806563:web:2b96003db56eeaf2653ed6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export some services
const database = getFirestore(app);

export {database};