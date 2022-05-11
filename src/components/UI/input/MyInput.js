import React from 'react';
import styles from './MyInput.module.scss'

const MyInput = ({value, funcChange}) => {

    const changeHandler = (event) => {
        // onChange(Math.round(event.target.value * 100) / 100)
        funcChange(event.target.value)
    }

    return (
        <input
            className={styles.container}
            type='text'
            placeholder='Кол-во'
            value={value}
            // onChange={event => onChange(Math.round(event.target.value * 100) / 100)}
            onChange={changeHandler}
        />
    );
};

export default MyInput;