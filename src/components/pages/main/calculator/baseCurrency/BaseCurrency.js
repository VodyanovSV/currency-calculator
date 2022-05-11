import React, {useEffect, useState} from 'react';
import styles from './BaseCurrency.module.scss'
import MyInput from "../../../../UI/input/MyInput";
import MySelect from "../../../../UI/select/MySelect";
import {useDispatch} from "react-redux";
import {setBaseCurrency} from "../../../../../store/actionCreators/currencyActionCreators";
import {getAllExchangeRates} from "../../../../../actions/currency";
import {roundNumber} from "../../../../../utils/functions";

const BaseCurrency = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const [select, setSelect] = useState('Валюта')
    const [time, setTime] = useState(Date.now());

    const customSetInput = (value) => {
        let num = roundNumber(value)
        setInput(num)
    }

    useEffect(() => {
        dispatch(setBaseCurrency({name: select, value: input}))
    }, [input, select])

    useEffect(() => {
        console.log('getAllExchangeRates')
        dispatch(getAllExchangeRates(select))
    }, [select, time])

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000 * 60 * 5);
        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <MyInput value={input} funcChange={customSetInput}/>
                    <MySelect value={select} funcChange={setSelect}/>
                </div>
            </div>
        </div>
    );
};

export default BaseCurrency;