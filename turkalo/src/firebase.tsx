
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAhxetriiMbErNAi4hdic8TxnD0Clmz3n0",
  authDomain: "turka-27d56.firebaseapp.com",
  projectId: "turka-27d56",
  storageBucket: "turka-27d56.appspot.com",
  messagingSenderId: "979295103368",
  appId: "1:979295103368:web:2bbcbde7a627f53d59323d",
  databaseURL: "https://turka-27d56-default-rtdb.europe-west1.firebasedatabase.app"
};


export const app = initializeApp(firebaseConfig);

console.log(app);

// database
import { getDatabase } from "firebase/database";

const database = getDatabase();





//storage 
import { getStorage, ref } from "firebase/storage";


const storage = getStorage();

const storageRef = ref(storage);


