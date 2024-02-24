import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCL2d2DjIvAPcFIB5qIc2S_3KEBBFR4ac",
  authDomain: "proyecto-pizza-8a014.firebaseapp.com",
  projectId: "proyecto-pizza-8a014",
  storageBucket: "proyecto-pizza-8a014.appspot.com",
  messagingSenderId: "1007728884962",
  appId: "1:1007728884962:web:4d919e4d9ddd0e5405f2bb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
