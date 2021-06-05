import firebase from "firebase"; 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIWr5HNM9Hi9ZKiqTU0KYEXEEpXONdrpo",
    authDomain: "cu-connect-62a4a.firebaseapp.com",
    projectId: "cu-connect-62a4a",
    storageBucket: "cu-connect-62a4a.appspot.com",
    messagingSenderId: "786617548531",
    appId: "1:786617548531:web:373d8165038da423a38186",
    measurementId: "G-F7537ME2RY"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;