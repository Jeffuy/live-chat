import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB3mRCTf9jiqmBBEXdkNE35YRxNjOOS--o",
	authDomain: "kwangchat-2cb16.firebaseapp.com",
	projectId: "kwangchat-2cb16",
	storageBucket: "kwangchat-2cb16.appspot.com",
	messagingSenderId: "846537629401",
	appId: "1:846537629401:web:e01dfca48e87c48ac328c8",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
