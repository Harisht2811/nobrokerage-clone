import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
import { getStorage }   from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDDd0605pzbSG1wbd-zUOf-5BkWG87LSUc",
  authDomain: "nobrokerage-93d84.firebaseapp.com",
  projectId: "nobrokerage-93d84",
  storageBucket: "nobrokerage-93d84.appspot.com",
  messagingSenderId: "124902377304",
  appId: "1:124902377304:web:5c49008dda17b39e1f872d",
  measurementId: "G-6X1BCFEVK0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =getFirestore(app);
export const storage = getStorage(app);

