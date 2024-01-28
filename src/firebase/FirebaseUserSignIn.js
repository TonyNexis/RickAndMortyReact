import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './FirebaseConfig'

const firebaseUserSignIn = async (userData) => {
    const {email, password} = userData;
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    .catch((error) => (
        console.log(error)
    ))

}

export default firebaseUserSignIn;