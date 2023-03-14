import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8oDVNKA7W_CQlb0qrhMhgQ8klfBN_99E",
  authDomain: "chatty-1d1c1.firebaseapp.com",
  projectId: "chatty-1d1c1",
  storageBucket: "chatty-1d1c1.appspot.com",
  messagingSenderId: "930173154509",
  appId: "1:930173154509:web:7836f695436281d1cbe584",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
