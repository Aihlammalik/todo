// Import the functions you need from the SDKs you need
import initializeApp  from "firebase/app";
import {getFirestore} from '@firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVRHULCz-USn3BBv-tDZxSkTvErBXxqRU",
  authDomain: "todo-80f95.firebaseapp.com",
  projectId: "todo-80f95",
  storageBucket: "todo-80f95.appspot.com",
  messagingSenderId: "1012639148757",
  appId: "1:1012639148757:web:77e51a9187e2b40589d05c",
  measurementId: "G-60410JVC91"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export  const db = getFirestore(app);