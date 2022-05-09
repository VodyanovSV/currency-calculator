import React from 'react';
import styles from './MyInput.module.scss'

const MyInput = () => {
    return (
        <input className={styles.container}
               type='text'
               placeholder='Кол-во'
        />
    );
};

export default MyInput;