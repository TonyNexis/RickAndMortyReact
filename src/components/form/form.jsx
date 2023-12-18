
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { modalDisplayOff, modalDisplay } from '../../redux/modalSlice';
import { Button, TextField, Backdrop, InputAdornment, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { v4 as uuidv4 } from 'uuid';

import sendDataToServer from '../../services/dataService';

import styles from './form.module.scss';


const RegForm = () => {
    const {
        register,
        formState: { errors, isValid }, 
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = React.useState(false);


    const closeModalReg = (e) => {
        e.preventDefault();

        dispatch(modalDisplayOff())
        setShowPassword(false);
        reset();
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    useEffect(() => {
        const closeEscape = e => {
            if (e.key === 'Escape') {
                dispatch(modalDisplayOff())
                reset();
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

    const onSubmit = (data) => {
        const userData = {...data, id: uuidv4(),}
        sendDataToServer(userData);
    }

    useEffect(() => {
        if (display) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.querySelector('.menuPanel_navigation_panel__9TC-N ').style.marginRight = `${scrollbarWidth+ 15}px`;
            document.querySelector('.form_reg_form__4s1Kl').style.marginRight = ``;
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';
            document.querySelector('.menuPanel_navigation_panel__9TC-N ').style.marginRight = '15px';

            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            
            document.querySelector('.form_reg_form__4s1Kl').style.marginRight = `-${scrollbarWidth}px`;
        }
    }, [display]);

    return (
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={display}
        onClick={closeModalReg}>
            <form className={styles.reg_form} onClick={handleFormClick} onSubmit={handleSubmit(onSubmit)} action="">
            <h1>Create an account</h1>
            <button className={styles.close_btn} onClick={closeModalReg}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30"><path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path></svg>
            </button>
            <TextField
                className={styles.input_field}
                size="small"
                id="nickname"
                label="Nickname"
                type="text"
                autoComplete="current-password"
                {...register('nickname', {
                    required: 'All fields are required.',
                    minLength: {
                        value: 3,
                        message: 'Minimum Nickname length is 3 characters.'
                    },
                    maxLength: {
                        value: 14,
                        message: 'Maximum Nickname length is 14 characters.'
                    },
                })}
            />
            <TextField
                className={styles.input_field}
                size="small"
                id="login"
                label="Login"
                type="text"
                autoComplete="current-password"
                {...register('login', {
                    required: 'All fields are required.',
                        minLength: {
                        value: 3,
                        message: 'Minimum Login length is 3 characters.'
                    },
                    maxLength: {
                        value: 14,
                        message: 'Maximum Login length is 14 characters.'
                    },
                })}
            />
            <FormControl size="small" className={styles.input_field} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton 
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                    {...register('password', {
                        required: 'All fields are required.',
                        minLength: {
                            value: 6,
                            message: 'Minimum Password length is 6 characters.'
                        },
                        maxLength: {
                            value: 24,
                            message: 'Maximum Password length is 24 characters.'
                        },
                    })}
                />
            </FormControl>
            <div className={styles.error_message}>
                {(errors?.nickname || errors?.login || errors?.password) && (
                <p>{(errors?.nickname || errors?.login || errors?.password)?.message || 'Error!'}</p>)}
            </div>
            <Button type='submit' className={styles.reg_btn} variant="contained" disabled={!isValid}>Register</Button>
            </form>
        </Backdrop>
    )
}

export default RegForm;