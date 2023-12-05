
import React from 'react';
import styles from './form.module.scss';

const testFunc = (e) => {
    e.preventdefault();
    console.log('click');
}

const RegForm = () => {
    return (
        <div className={styles.body}>
                    <form className={styles.reg_form} onSubmit={testFunc}>
            <h1>Create an account</h1>
            <p>Nickname</p>
            <input type="text" />
            <p>login</p>
            <input type="text" name="" id="" />
            <p>Password</p>
            <input type="password" name="" id="" />
            <button>Register</button>
        </form>
        </div>
    )
}

export default RegForm;