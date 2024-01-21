import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

const FirebaseUserReg = async (userData) => {
    const nickname = userData.nickname,
          email = userData.email,
          password = userData.password;

          console.log("FirebaseUserReg >>>", nickname, email, password)

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
}

export default FirebaseUserReg;