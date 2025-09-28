import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAmaLO9oR8AA72cKEB4bLntM1zCWXjQQk",
  authDomain: "traveldairy-9d6b3.firebaseapp.com",
  projectId: "traveldairy-9d6b3",
  storageBucket: "traveldairy-9d6b3.firebasestorage.app",
  messagingSenderId: "594855083263",
  appId: "1:594855083263:android:a836b7443ee9ea187820ca"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const storage = getStorage(app);
