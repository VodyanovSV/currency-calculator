import {setAllCurrencies} from '../store/actionCreators/currencyActionCreators'

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