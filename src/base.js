import Rebase from "re-base"
import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDfnMQz6lyoLoRzfdYbTo6iVCV3MqDcvRg",
  authDomain: "hot-burgers-de6d8.firebaseapp.com",
  databaseURL:
    "https://hot-burgers-de6d8-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
