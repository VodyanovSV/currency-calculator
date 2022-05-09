import React from 'react';
import styles from './MySelect.module.scss'

const MySelect = () => {
    return (
        <select className={styles.container} value={"Валюта"}>
            <option value={"Валюта"} disabled={true}>Валюта</option>
            <option value={"Чебурашка"}>Чебурашка</option>
            <option value={"Гена"}>Гена</option>
            <option value={"Гена"}>Гена</option>
            <option value={"Гена"}>Гена</option>
            <option value={"Гена"}>Гена</option>
            <option value={"Гена"}>Гена</option>
            <option value={"Гена"}>Гена</option>
            <option value={"Гена"}>Гена</option>
            <option value={"Гена"}>Гена</option>
            <option value={"Гена"}>Гена</option>
            <option value={"Гена"}>Гена</option>
            <option value={"Гена"}>Гена</option>
            <option value={"Гена"}>Гена</option>
            <option value={"Гена"}>Гена</option>
        </select>
    );
};

export default MySelect;