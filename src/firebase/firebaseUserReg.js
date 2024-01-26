import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './FirebaseConfig'

const firebaseUserReg = async (userData) => {
    const nickname = userData.nickname,
          email = userData.email,
          password = userData.password;

          console.log("FirebaseUserReg >>>", nickname, email, password)

    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    .catch((error) => console.log(error))
}

export default firebaseUserReg;