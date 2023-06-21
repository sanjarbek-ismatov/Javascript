import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { addUser } from "./handlers";

const firebaseConfig = {
  apiKey: "AIzaSyCrwywcMoTsHSYJo0zXnBY1DCzpOAMcQMs",
  authDomain: "galery-app-vanilla.firebaseapp.com",
  projectId: "galery-app-vanilla",
  storageBucket: "galery-app-vanilla.appspot.com",
  messagingSenderId: "730525925504",
  appId: "1:730525925504:web:01bdb60049c3b16d65e665",
  measurementId: "G-VB2XNE9265",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const userRef = db.collection("users");

document.getElementById("ff").onclick = function () {
  // addUser(userRef, { name: "Sanjarbek" });
  console.log(addUser);
};
