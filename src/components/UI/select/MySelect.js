import React, {useState} from 'react';
import styles from './MySelect.module.scss'
import {useSelector} from "react-redux";

const MySelect = () => {

    const [currency, setCurrency] = useState('Валюта')
    const allCurrencies = useSelector(state => state.currencyReduser.allCurrencies)

    return (
        // <select className={styles.container}>
        <select className={styles.container} value={currency} onChange={(event) => setCurrency(event.target.value)}>
            <option defaultValue={"Валюта"} disabled={true}>Валюта</option>
            {
                allCurrencies.map((currency) => (
                    <option value={currency} key={currency}>{currency}</option>
                ))
            }

        </select>
    );
};

export default MySelect;