import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from './FirebaseConfig'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    }, []);
    console.log('AuthDetails in work')
    console.log(authUser ? authUser.email.split('@')[0] : 'User') 

    return (
        <p>{authUser ? authUser.email.split('@')[0] : 'User'}</p>
    )
}

export default AuthDetails;