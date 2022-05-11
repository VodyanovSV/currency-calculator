import React, {useEffect, useState} from 'react';
import styles from './TargetCurrency.module.scss'
import MyInput from "../../../../UI/input/MyInput";
import MySelect from "../../../../UI/select/MySelect";
import {useDispatch, useSelector} from "react-redux";
import {setTargetCurrency} from "../../../../../store/actionCreators/currencyActionCreators";

const TargetCurrency = ({id}) => {

    const targetCurrencies = useSelector(state => state.currencyReduser.targetCurrencies)
    const targetCurrency = targetCurrencies.find((elem) => (elem.id === id))
    const baseCurrency = useSelector(state => state.currencyReduser.baseCurrency)
    const rates = useSelector(state => state.currencyReduser.allRates)

    const dispatch = useDispatch()
    const [input, setInput] = useState(targetCurrency.value)
    const [select, setSelect] = useState(targetCurrency.name)


    const rate = rates[select]
    let exchange = 0
    if (baseCurrency.value * rate) {
        exchange = Math.round(baseCurrency.value * rate * 100) / 100
    }

    useEffect(() => {
        dispatch(setTargetCurrency({id, name: select, value: exchange}))
        setInput(exchange)
    }, [select, exchange])

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <MyInput value={input} funcChange={() => {
                    }}/>
                    <MySelect value={select} funcChange={setSelect}/>
                </div>
            </div>
        </div>
    );
};

export default TargetCurrency;