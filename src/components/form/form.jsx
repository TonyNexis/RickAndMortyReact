
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalDisplayOff, modalDisplayOn, modalDisplay } from '../../redux/modalSlice';
import { Button } from '@mui/material';
import { TextField, Backdrop } from '@mui/material';

import styles from './form.module.scss';



const RegForm = () => {
    const dispatch = useDispatch();

    const closeModalReg = () => {
        dispatch(modalDisplayOff())
    }

    const display = useSelector(modalDisplay);

    const handleFormClick = (e) => {
        e.stopPropagation();
      };

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
                id="outlined-nickname-input"
                label="Nickname"
                type="text"
                autoComplete="current-password"
            />
            <TextField
                className={styles.input_field}
                size="small"
                id="outlined-login-input"
                label="Login"
                type="text"
                autoComplete="current-password"
            />
            <TextField
                className={styles.input_field}
                size="small"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <Button className={styles.reg_btn} variant="contained">Register</Button>
            </form>
        </Backdrop>
    )
}

export default RegForm;