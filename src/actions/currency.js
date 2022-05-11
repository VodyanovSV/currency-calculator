import {setAllCurrencies, setAllExchangeRates} from '../store/actionCreators/currencyActionCreators'

export const getAllCurrencies = () => {
    return async (dispatch) => {
        try {
            const url = 'https://api.coinbase.com/v2/currencies'
            const method = 'GET'

            const response = await fetch(url, {method})
            const data = await response.json()
            const currencies = data.data.map((elem) => elem.id)

            dispatch(setAllCurrencies(currencies))
        } catch (e) {
            alert(e.message)
        }
    }
}

export const getAllExchangeRates = (currency) => {
    return async (dispatch) => {
        try {
            let curr = currency === 'Валюта' ? 'USD' : currency

            const url = `https://api.coinbase.com/v2/exchange-rates?currency=${curr}`
            const method = 'GET'
            const response = await fetch(url, {method})
            const data = await response.json()
            const rates = data.data.rates

            dispatch(setAllExchangeRates(rates))
        } catch (e) {
            alert(e.message)
        }
    }
}