import React from 'react';
import styles from './Calculator.module.scss'
import BaseCurrency from "./baseCurrency/BaseCurrency";
import TargetCurrency from "./targetCurrency/TargetCurrency";
import {useDispatch, useSelector} from "react-redux";
import {addCurrency} from "../../../../store/actionCreators/targetCurrencyActionCreators";
import { v4 as uuidv4 } from 'uuid';


const Calculator = () => {

    const currencies = useSelector(state => state.targetCurrencyReduser.currencies)
    const dispatch = useDispatch()

    function addToCurrency() {
        dispatch(addCurrency())
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <p className={styles.title}>Базовая валюта</p>
                <BaseCurrency/>
                <p className={styles.title}>Целевые валюты</p>
                {currencies.map((currency) => (
                    <TargetCurrency key={uuidv4()}/>
                ))}
                <p className={styles.addCurrency} onClick={addToCurrency}>Добавить валюту</p>
            </div>
        </div>
    );
};

export default Calculator;