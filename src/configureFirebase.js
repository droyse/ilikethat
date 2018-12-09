import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const {
  REACT_APP_FIREBASE_API_KEY: API_KEY,
  REACT_APP_FIREBASE_PROJECT_ID: PROJECT_ID,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID: MESSAGING_SENDER_ID,
} = process.env

firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  projectId: PROJECT_ID,
  databaseURL: `https://${PROJECT_ID}.firebaseio.com`,
  storageBucket: `${PROJECT_ID}.appspot.com`,
  messagingSenderId: MESSAGING_SENDER_ID,
})

firebase.firestore().settings({timestampsInSnapshots: true})
