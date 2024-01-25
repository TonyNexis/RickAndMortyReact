import { signOut } from 'firebase/auth'
import { auth } from './FirebaseConfig'
import { useDispatch } from 'react-redux'
import { signInFalse } from '../redux/signInStatusCheck'

const useFirebaseSignOut = () => {
    const dispatch = useDispatch();

    const firebaseSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Successfully signed out');
                dispatch(signInFalse());
            })
            .catch(error => {
                console.error('Error signing out:', error.message);
            });
    };

    return firebaseSignOut;
};

export default useFirebaseSignOut;