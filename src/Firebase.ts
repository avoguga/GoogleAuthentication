import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCwC5Ic_Vtpw15pJQqq0x37lX3muKs5wcs",
  authDomain: "auth-5c193.firebaseapp.com",
  projectId: "auth-5c193",
  storageBucket: "auth-5c193.appspot.com",
  messagingSenderId: "310166154358",
  appId: "1:310166154358:web:e353838d8dbfa4f6924357"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const name: any = result.user.displayName;
    const email: any = result.user.email;
    const profilePic: any = result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);
    
  }).catch((error) => {
    console.log(error);
  })
};


