import React, { useState, useEffect } from 'react';
import { signUpDisplayOn } from '../../redux/SignUpSlice';
import { signInDisplayOn } from '../../redux/SignInSlice';

import styles from './menuPanel.module.scss'
import { useDispatch } from 'react-redux';

const MenuPanel = () => {
    const [hide, setHide] = useState(false);
    const dispatch = useDispatch();

    const showModalReg = () => {
        dispatch(signUpDisplayOn());
    }

    const showModalIn = () => {
        dispatch(signInDisplayOn());
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const collapseHeight = 400;
            
            setHide(scrollPosition > collapseHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showMenu = () => {
        setHide(false);
    }

    return (
        <>
            <div className={`${styles.navigation_panel} ${hide ? `${styles.hidden}` : ''}`}>
                <p>Hello, Andrew</p>
                <div className={styles.vertical_line}></div>
                <button onClick={showModalIn} className={styles.log_in_btn}>Log in</button>
                <div className={styles.vertical_line}></div>
                <button onClick={showModalReg} className={styles.sign_up_btn}>Sign up</button>
            </div>
            <button className={`${styles.menu_btn} ${hide ? `${styles.menu_btn_show}` : ''}`} onClick={showMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
            </button>
        </>
    )
}

export default MenuPanel;