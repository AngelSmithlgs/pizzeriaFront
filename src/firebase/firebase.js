import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCL2d2DjIvAPcFIB5qIc2S_3KEBBFR4ac",
  authDomain: "proyecto-pizza-8a014.firebaseapp.com",
  projectId: "proyecto-pizza-8a014",
  storageBucket: "proyecto-pizza-8a014.appspot.com",
  messagingSenderId: "1007728884962",
  appId: "1:1007728884962:web:4d919e4d9ddd0e5405f2bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;