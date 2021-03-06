import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCU3SBE24AlZVaNZZD5HYLYtLXS0KezvBU",
    authDomain: "react-bootstrap-e280f.firebaseapp.com",
    databaseURL: "https://react-bootstrap-e280f-default-rtdb.firebaseio.com",
    projectId: "react-bootstrap-e280f",
    storageBucket: "react-bootstrap-e280f.appspot.com",
    messagingSenderId: "142495952752",
    appId: "1:142495952752:web:27a7bfc00a67df74b0e9b5"
  };
  
  if(!firebase.app.legth){
    firebase.initializeApp(firebaseConfig)
    }
    
export default firebase