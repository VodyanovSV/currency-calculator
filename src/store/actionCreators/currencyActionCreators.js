import {ADD_TARGET_CURRENCY, SET_ALL_CURRENCIES, SET_BASE_CURRENCY, SET_ALL_EXCHANGE_RATES, SET_TARGET_CURRENCY} from "../actions/currencyActions";

export const addTargetCurrency = (index) => ({
    type: ADD_TARGET_CURRENCY,
    payload: index
})

export const setAllCurrencies = (allCurrencies) => ({
    type: SET_ALL_CURRENCIES,
    payload: allCurrencies
})

export const setBaseCurrency = (baseCurrency) => ({
    type: SET_BASE_CURRENCY,
    payload: baseCurrency
})

export const setAllExchangeRates = (allRates) => ({
    type: SET_ALL_EXCHANGE_RATES,
    payload: allRates
})

export const setTargetCurrency = (targetCurrency) => ({
    type: SET_TARGET_CURRENCY,
    payload: targetCurrency
})