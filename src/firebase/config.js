// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOfyQ_lR_bVqSfiaNOJwRoRSUjUdvupE4",
  authDomain: "chat-app-d9464.firebaseapp.com",
  projectId: "chat-app-d9464",
  storageBucket: "chat-app-d9464.appspot.com",
  messagingSenderId: "771744988495",
  appId: "1:771744988495:web:7cd95c876d2ed7b897993a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// yetkilendirmeyi aktif
export const auth = getAuth(app);

// google yetkilendirme

export const provider = new GoogleAuthProvider();

// veritabının referansını oluşturma
export const db = getFirestore(app);
