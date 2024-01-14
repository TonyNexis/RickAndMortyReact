import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfER8DlsuXNcK5sGP6U1r20NV1-sALZXY",
  authDomain: "rick-and-morty-ef8c2.firebaseapp.com",
  projectId: "rick-and-morty-ef8c2",
  storageBucket: "rick-and-morty-ef8c2.appspot.com",
  messagingSenderId: "839564930426",
  appId: "1:839564930426:web:5b95a6e0e1da735fd2bac3",
  measurementId: "G-0CDRE58BL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);