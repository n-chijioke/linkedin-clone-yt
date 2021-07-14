import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAz31u625owd9hpvcCmGCjy5EBd5Taocu0",
  authDomain: "linkedin-clone-yt-140ae.firebaseapp.com",
  projectId: "linkedin-clone-yt-140ae",
  storageBucket: "linkedin-clone-yt-140ae.appspot.com",
  messagingSenderId: "804878799313",
  appId: "1:804878799313:web:3a2341e7d24099eb05d0f0",
  measurementId: "G-X5FMB6WMWF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };