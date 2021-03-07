import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// }

const firebaseConfig = {
  apiKey: 'AIzaSyCuxAqUq3CerWh9HibGUu1myDiVCD10nIw',
  authDomain: 'auth-challange-dev.firebaseapp.com',
  projectId: 'auth-challange-dev',
  storageBucket: 'auth-challange-dev.appspot.com',
  messagingSenderId: '522639313234',
  appId: '1:522639313234:web:2079178b7797335f69d28b'
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
