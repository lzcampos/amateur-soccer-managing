import { createApp } from "vue";
import App from "./App.vue";
import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyAX83Rf13BFxyqAbj-C4db3_RJl88odIfk",
  authDomain: "soccer-managing.firebaseapp.com",
  projectId: "soccer-managing",
  storageBucket: "soccer-managing.appspot.com",
  messagingSenderId: "896530747941",
  appId: "1:896530747941:web:2251923860e9da65fbe5cc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).mount("#app");
