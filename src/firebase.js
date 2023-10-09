import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCIktjTsN5MGeL7Zh2e_orBqftFrLuk-kE",
  authDomain: "designproject-d0e7a.firebaseapp.com",
  projectId: "designproject-d0e7a",
  storageBucket: "designproject-d0e7a.appspot.com",
  messagingSenderId: "976889504508",
  appId: "1:976889504508:web:a70e8c8e9af247395fad79",
  measurementId: "G-PZL9FVSPBT",
  // apiKey: "AIzaSyA3ZsTYBoMwA99Nyw6lmn8McBG4QOq20k0",
  // authDomain: "karyam-prod.firebaseapp.com",
  // projectId: "karyam-prod",
  // storageBucket: "karyam-prod.appspot.com",
  // messagingSenderId: "179568465895",
  // appId: "1:179568465895:web:7db5542fcc583ca2174f42",
  // measurementId: "G-4NZTH25RGG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { app, auth, provider };
