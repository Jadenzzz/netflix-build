import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5rpSu3hwrT5Ojpqi1hqb58HHAcuG-VeE",
    authDomain: "netflix-clone-b8378.firebaseapp.com",
    projectId: "netflix-clone-b8378",
    storageBucket: "netflix-clone-b8378.appspot.com",
    messagingSenderId: "547450642205",
    appId: "1:547450642205:web:21a3b528eee67fec55cbf4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;