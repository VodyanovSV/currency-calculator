import {ADD_TARGET_CURRENCY, SET_ALL_CURRENCIES} from "../actions/currencyActions";

export const addTargetCurrency = () => ({
    type: ADD_TARGET_CURRENCY
})

export const setAllCurrencies = (allCurrencies) => ({
    type: SET_ALL_CURRENCIES,
    payload: allCurrencies
})
