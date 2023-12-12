
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalDisplayOff, modalDisplay } from '../../redux/modalSlice';
import { Button } from '@mui/material';
import { TextField, Backdrop } from '@mui/material';

import styles from './form.module.scss';


const RegForm = () => {
    const dispatch = useDispatch();

    const [formValues, setFormValues] = useState({
        nickname: '',
        login: '',
        password: '',
    })

    const closeModalReg = () => {
        dispatch(modalDisplayOff())
        setFormValues({
            nickname: '',
            login: '',
            password: '',
        })
    }

    useEffect(() => {
        const closeEscape = e => {
            if (e.key === 'Escape') {
                dispatch(modalDisplayOff())
                setFormValues({
                    nickname: '',
                    login: '',
                    password: '',
                })
            }
        }

        document.addEventListener('keydown', closeEscape);
        return () => {
            document.removeEventListener('keydown', closeEscape);
        }
    }, [dispatch])

    const display = useSelector(modalDisplay);

    const handleFormClick = (e) => {
        e.stopPropagation();
      };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues(prevState => ({
            ...prevState,
            [id]: value,
        }))
    }

    useEffect(() => {
        if (display) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            // document.body.style.overflowY = 'scroll';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            // document.body.style.paddingRight = '17px';
            document.querySelector('.menuPanel_navigation_panel__9TC-N ').style.marginRight = `${scrollbarWidth+ 15}px`;
            // const regFormElement = document.querySelector('.menuPanel_navigation_panel__9TC-N ');
            // if (regFormElement) {
            //     regFormElement.style.marginRight = '32px';
            // }
        } else {
          document.body.style.overflow = 'auto';
          document.body.style.paddingRight = '';
          document.querySelector('.menuPanel_navigation_panel__9TC-N ').style.marginRight = '15px';
        }
      }, [display]);

    return (
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={display }
        onClick={closeModalReg}>
            <form className={styles.reg_form} onClick={handleFormClick} action="">
            <h1>Create an account</h1>
            <TextField
                className={styles.input_field}
                size="small"
                id="nickname"
                label="Nickname"
                type="text"
                autoComplete="current-password"
                value={formValues.nickname}
                onChange={handleInputChange}
            />
            <TextField
                className={styles.input_field}
                size="small"
                id="login"
                label="Login"
                type="text"
                autoComplete="current-password"
                value={formValues.login}
                onChange={handleInputChange}
            />
            <TextField
                className={styles.input_field}
                size="small"
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={formValues.password}
                onChange={handleInputChange}
            />
            <Button className={styles.reg_btn} variant="contained">Register</Button>
            </form>
        </Backdrop>
    )
}

export default RegForm;