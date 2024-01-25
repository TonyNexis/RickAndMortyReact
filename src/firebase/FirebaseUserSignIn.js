import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './FirebaseConfig'

const FirebaseUserSignIn = async (userData) => {
    const {email, password} = userData;

    console.log(`firebaseUserSignIn >> email: ${email.toUpperCase()}, password: ${password.toUpperCase()}` )

    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    .catch((error) => console.log(error))

}

export default FirebaseUserSignIn;