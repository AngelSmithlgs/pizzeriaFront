import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBx8VImExB7MvP4hzIdUFsttr1qXV7M_hk",
  authDomain: "pizza-29738.firebaseapp.com",
  projectId: "pizza-29738",
  storageBucket: "pizza-29738.appspot.com",
  messagingSenderId: "43677917383",
  appId: "1:43677917383:web:5099f66461b21d5a849ee2",
  measurementId: "G-FPXQ86Y0XN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };