import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
   apiKey: "AIzaSyBkbY6IYloDI44DSm2G3jcNhM5ivXvIBlA",
   authDomain: "titanet2022.firebaseapp.com",
   projectId: "titanet2022",
   storageBucket: "titanet2022.appspot.com",
   messagingSenderId: "47900017123",
   appId: "1:47900017123:web:fc7ab35d110738f5e960d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();