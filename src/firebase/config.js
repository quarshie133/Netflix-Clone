import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAEHu5qNCxKHsZ9EK3TQzdJ53uuY98y1p8",
  authDomain: "nextflix-clone-901e1.firebaseapp.com",
  projectId: "nextflix-clone-901e1",
  storageBucket: "nextflix-clone-901e1.appspot.com",
  messagingSenderId: "390291533482",
  appId: "1:390291533482:web:6b94f25d7fa1b960412ad3",
  measurementId: "G-Z1YSCX7BR0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };