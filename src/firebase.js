
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCw6JtT-nl0SfSU2WjcRZxlHCQ294ooPz4",
  authDomain: "bizchat-157cd.firebaseapp.com",
  projectId: "bizchat-157cd",
  storageBucket: "bizchat-157cd.appspot.com",
  messagingSenderId: "456040397461",
  appId: "1:456040397461:web:e93a49dae67dce5eccb99c",
  measurementId: "G-CZKGLHD00X"
}
const app=initializeApp(firebaseConfig);

export const db = getFirestore(app);




