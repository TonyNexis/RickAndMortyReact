import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

const FirebaseUserReg = async (userData) => {
    const nickname = userData.nickname,
          email = userData.email,
          password = userData.password;

    const userCredential = await createUserWithEmailAndPassword(auth, nickname, email, password);
}

export default FirebaseUserReg;