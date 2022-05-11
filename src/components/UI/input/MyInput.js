import React from 'react';
import styles from './MyInput.module.scss'

const MyInput = ({value, funcChange}) => {

    const changeHandler = (event) => {
        funcChange(event.target.value)
    }

    return (
        <input
            className={styles.container}
            type='text'
            placeholder='Кол-во'
            value={value}
            onChange={changeHandler}
        />
    );
};

export default MyInput;