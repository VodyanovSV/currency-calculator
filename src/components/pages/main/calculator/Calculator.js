import React, {useEffect} from 'react';
import styles from './Calculator.module.scss'
import BaseCurrency from "./baseCurrency/BaseCurrency";
import TargetCurrency from "./targetCurrency/TargetCurrency";
import {useDispatch, useSelector} from "react-redux";
import {addTargetCurrency} from "../../../../store/actionCreators/currencyActionCreators";
import {v4 as uuidv4} from 'uuid';
import {getAllCurrencies} from '../../../../actions/currency'

const Calculator = () => {

    const targetCurrencies = useSelector(state => state.currencyReduser.targetCurrencies)
    const dispatch = useDispatch()

    function addToCurrency() {
        dispatch(addTargetCurrency())
    }

    useEffect(() => {
        dispatch(getAllCurrencies())
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <p className={styles.title}>Базовая валюта</p>
                <BaseCurrency/>
                <p className={styles.title}>Целевые валюты</p>
                {targetCurrencies.map((currency) => (
                    <TargetCurrency key={uuidv4()}/>
                ))}
                <p className={styles.addCurrency} onClick={addToCurrency}>Добавить валюту</p>
            </div>
        </div>
    );
};

export default Calculator;