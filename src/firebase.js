import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyDqgkqGVEKAVzWHkQmgada5h-9IuCM0xuU",
    authDomain: "movies-7d02a.firebaseapp.com",
    projectId: "movies-7d02a",
    storageBucket: "movies-7d02a.appspot.com",
    messagingSenderId: "783247393362",
    appId: "1:783247393362:web:8b892ea7f3d00b81cd558b"
};

const app = initializeApp(config);

export const db = getFirestore(app);