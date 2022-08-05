// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpI-ZjP7eRda99UxkiMobX5VY04H32tAI",
  authDomain: "react-native-ig-clone-792a7.firebaseapp.com",
  projectId: "react-native-ig-clone-792a7",
  storageBucket: "react-native-ig-clone-792a7.appspot.com",
  messagingSenderId: "317741675415",
  appId: "1:317741675415:web:bbd6449a8bc75379cf4ad2"
};

// Initialize Firebase if not already exist
!firebase.apps.length? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase
