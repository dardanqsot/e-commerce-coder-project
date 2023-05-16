import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzJ3AazNcOCxKY5QyjZTD6-CzIhV0QI28",
  authDomain: "ecommerce-dardan.firebaseapp.com",
  projectId: "ecommerce-dardan",
  storageBucket: "ecommerce-dardan.appspot.com",
  messagingSenderId: "474799356443",
  appId: "1:474799356443:web:2fb035f3300b9e15ea16be"
};

// Inicializamos la app
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseDB   = getFirestore( FirebaseApp );
