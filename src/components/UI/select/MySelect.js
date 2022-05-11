import React from 'react';
import styles from './MySelect.module.scss'
import {useSelector} from "react-redux";

const MySelect = ({value, funcChange}) => {

    const allCurrencies = useSelector(state => state.currencyReduser.allCurrencies)

    const changeHandler = (event) => {
        funcChange(event.target.value)
    }

    return (
        <select className={styles.container} value={value} onChange={changeHandler}>
            <option disabled={true}>Валюта</option>
            {
                allCurrencies.map((currency) => (
                    <option value={currency} key={currency}>{currency}</option>

                ))
            }

        </select>
    );
};

export default MySelect;