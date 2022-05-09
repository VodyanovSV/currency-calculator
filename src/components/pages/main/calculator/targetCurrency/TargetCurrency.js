import React from 'react';
import styles from './TargetCurrency.module.scss'
import MyInput from "../../../../UI/input/MyInput";
import MySelect from "../../../../UI/select/MySelect";

const TargetCurrency = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <MyInput/>
                    <MySelect/>
                </div>
            </div>
        </div>
    );
};

export default TargetCurrency;