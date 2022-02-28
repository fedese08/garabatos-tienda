// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEipJyV3N1Q0UPBsF248dQeCCpQmJvuS8",
  authDomain: "garabatos-shoes.firebaseapp.com",
  projectId: "garabatos-shoes",
  storageBucket: "garabatos-shoes.appspot.com",
  messagingSenderId: "973914769135",
  appId: "1:973914769135:web:7c934fce683e8f0155fd1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Exporto la base de datos desde firestore
export const db = getFirestore(app);