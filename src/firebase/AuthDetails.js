    import { onAuthStateChanged } from 'firebase/auth'
    import { useEffect, useState } from 'react'
    import { auth } from './FirebaseConfig'
    import { signInTrue, signInFalse } from '../redux/signInStatusCheck';
    import { useDispatch } from 'react-redux'

    const AuthDetails = () => {
        const [email, setEmail] = useState(null);
        const [authChecked, setAuthChecked] = useState(false);

        const dispatch = useDispatch();

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setEmail(user.email);
                    dispatch(signInTrue());
                } else {
                    setEmail(null);
                    dispatch(signInFalse());
                }
                setAuthChecked(true);
            });

            return () => {
                unsubscribe();
            };
        }, []);

        return (
            <>
                {authChecked && (
                    <p>{email ? `${email}` : 'Guest'}</p>
                )}
            </>
        );
    };

    export default AuthDetails;