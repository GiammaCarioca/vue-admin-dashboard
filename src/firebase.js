import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZuDgKpxZR5o2PBnaZqArXdkYshh0Bp3Y",
  authDomain: "vue-hq-57cb5.firebaseapp.com",
  databaseURL: "https://vue-hq-57cb5.firebaseio.com",
  projectId: "vue-hq-57cb5",
  storageBucket: "vue-hq-57cb5.appspot.com",
  messagingSenderId: "831974089096"
});

export const db = firebaseApp.firestore();
