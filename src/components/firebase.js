import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
import { getStorage }   from "firebase/storage";
import {getAuth} from 'firebase/auth';




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
export const auth = getAuth(app);


// const admin = require('firebase-admin')
// admin.initializeApp();
// const functions = require('firebase-functions')


// exports.addAdminRole = functions.https.onCall((data, context) => {
//   // get user and add admin custom claim
//   return admin.auth().getUserByEmail(data.email).then(user => {
//     return admin.auth().setCustomUserClaims(user.uid, {
//       admin: true
//     })
//   }).then(() => {
//     return {
//       message: `Success! ${data.email} has been made an admin.`
//     }
//   }).catch(err => {
//     return err;
//   });
// });

// exports.setAdminClaims = functions.https.onCall(async (data, context) => {

//   const adminUIDs = ['2jfow4fd3H2ZqYLWZI2s1YdqOPB42', '767fjdhshd3H2ZqYLWZI2suyyqOPB42'];

//   await Promise.all(adminUIDs.map(uid => admin.auth().setCustomUserClaims(uid, { admin: true })));
  
//   return { result: "Operation completed" }
  
// });