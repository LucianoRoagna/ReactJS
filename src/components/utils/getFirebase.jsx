import firebase from "firebase";
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyANRgRHhuO_gpvW-MLm8OcW2kHQrxyJGCs",
    authDomain: "reactjs-2d97f.firebaseapp.com",
    projectId: "reactjs-2d97f",
    storageBucket: "reactjs-2d97f.appspot.com",
    messagingSenderId: "697746648472",
    appId: "1:697746648472:web:db97bbbb184f3f272a8fed"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);


  //EXPORTAR LA FUNCION
  export function getFirestore(){
      return firebase.firestore(app)
  }