import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCZYKMVv82iWxMRb3bYVcBX_PwOY43v3TA",
    authDomain: "broker-web-3b4be.firebaseapp.com",
    projectId: "broker-web-3b4be",
    storageBucket: "broker-web-3b4be.appspot.com",
    messagingSenderId: "613924814270",
    appId: "1:613924814270:web:37049dde7ed1ed5d7fcdef",
    measurementId: "G-1WHMXNJF2Y"
  };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

const SignUp = async (name, email , password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split('-').join(" "))
    }
}

// const login = async (email,password)=>{
//     try {
//         signInWithEmailAndPassword(auth , email, password);
//     } catch (error) {
//         console.error(error)
//         toast.error(error.code.split("/")[1].split('-').join(" "))
//     }
// }
const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully:", userCredential.user);
     
    } catch (error) {
      console.error("Login failed:", error);
      
      let errorMessage = "";
      switch (error.code) {
        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again.";
          break;
        case "auth/user-not-found":
          errorMessage = "Email not found. Please create an account.";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Please check your internet connection.";
          break;
        default:
          errorMessage = "An error occurred. Please try again.";
      }
      toast.error(errorMessage);
    }
  };
  
const logout =()=>{
    signOut(auth)
}

export {login,logout,SignUp};