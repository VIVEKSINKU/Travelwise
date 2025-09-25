import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFgzHO7B4_TYG9N6a34A8RvI3EdcO2xDA",
  authDomain: "travelapp-df313.firebaseapp.com",
  projectId: "travelapp-df313",
  storageBucket: "travelapp-df313.firebasestorage.app",
  messagingSenderId: "214643921063",
  appId: "1:214643921063:web:9a5e3015be01e370aecb82"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const storage = getStorage(app);
