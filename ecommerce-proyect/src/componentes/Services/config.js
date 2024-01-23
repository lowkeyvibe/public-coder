// FUNCION QUE ME PERMITE USAR MI BASE DE DATOS
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Información de mi base de datos.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "first-proyect-31d5e.firebaseapp.com",
  projectId: "first-proyect-31d5e",
  storageBucket: "first-proyect-31d5e.appspot.com",
  messagingSenderId: "192031708944",
  appId: "1:192031708944:web:15ef45d93164c9a030f795"
};

// "AIzaSyCxzNod3ePWInZXcTY1Zo1L05eYgSur8OU"


// Inicializamos nuestra BASE DE DATOS
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)