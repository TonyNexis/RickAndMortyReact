import { signOut } from 'firebase/auth'
import { auth } from './FirebaseConfig'

const firebaseSignOut = () => {
    signOut(auth)
    .then(() => {
        console.log('Successfully signed out');
    })
    .catch(error => {
        console.error('Error signing out:', error.message);
    });
};

export default firebaseSignOut;