import React from 'react';
import styles from './Main.module.scss'
import Calculator from "./calculator/Calculator";

const Main = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <h1 className={styles.title}>Валютный калькулятор</h1>
                <Calculator/>
            </div>
        </div>
    );
};

export default Main;