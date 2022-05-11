import React, {useEffect, useState} from 'react';
import styles from './TargetCurrency.module.scss'
import MyInput from "../../../../UI/input/MyInput";
import MySelect from "../../../../UI/select/MySelect";
import {useDispatch, useSelector} from "react-redux";
import {setTargetCurrency} from "../../../../../store/actionCreators/currencyActionCreators";

const TargetCurrency = ({id}) => {

    const targetCurrencies = useSelector(state => state.currencyReduser.targetCurrencies)
    const targetCurrency = targetCurrencies.find((elem) => (elem.id === id))

    const dispatch = useDispatch()
    const [input, setInput] = useState(targetCurrency.value)
    const [select, setSelect] = useState(targetCurrency.name)

    useEffect(() => {
        dispatch(setTargetCurrency({id, name: select, value: input}))
    }, [select])

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