import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCL2d2DjIvAPcFIB5qIc2S_3KEBBFR4ac",
  authDomain: "proyecto-pizza-8a014.firebaseapp.com",
  projectId: "proyecto-pizza-8a014",
  storageBucket: "proyecto-pizza-8a014.appspot.com",
  messagingSenderId: "1007728884962",
  appId: "1:1007728884962:web:4d919e4d9ddd0e5405f2bb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const initializeFirestore = async () => {
  try {
    const usuariosCollection = collection(db, "usuarios");

    const user1DocRef = doc(usuariosCollection, "usuario1@example.com");
    await setDoc(user1DocRef, { name: "Usuario1", email: "usuario1@example.com", phoneNumber: "+56912345678" });

    const user2DocRef = doc(usuariosCollection, "usuario2@example.com");
    await setDoc(user2DocRef, { name: "Usuario2", email: "usuario2@example.com", phoneNumber: "+56987654321" });

    console.log("Base de datos inicializada correctamente");
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
  }
};

initializeFirestore();
