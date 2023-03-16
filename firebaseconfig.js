import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDMM2XZPekbfZxfyquDom836s7W4IYmI_Y',
  authDomain: 'juanzapp-8ede7.firebaseapp.com',
  projectId: 'juanzapp-8ede7',
  storageBucket: 'juanzapp-8ede7.appspot.com',
  messagingSenderId: '785746597508',
  appId: '1:785746597508:web:1d27e54b9dfc56373a54d1',
  measurementId: 'G-3HC2L392NX',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

export { auth, db, app }
