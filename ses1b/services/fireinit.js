import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyCBowv1Eosnqc167XWl_wdJf0xJu0w3K54",
    authDomain: "patientzero-be5cd.firebaseapp.com",
    databaseURL: "https://patientzero-be5cd.firebaseio.com",
    projectId: "patientzero-be5cd",
    storageBucket: "patientzero-be5cd.appspot.com",
    messagingSenderId: "42589141235"
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase