import {
    ADD_TARGET_CURRENCY,
    SET_ALL_CURRENCIES,
    SET_BASE_CURRENCY,
    SET_ALL_EXCHANGE_RATES,
    SET_TARGET_CURRENCY
} from "../actions/currencyActions";

const initialState = {
    countTarget: [0],
    targetCurrencies: [
        {
            id: 0,
            name: 'Валюта',
            value: ''
        }
    ],
    allCurrencies: [],
    baseCurrency: {
        name: '',
        value: null
    },
    allRates: {}

}

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TARGET_CURRENCY:
            return {
                ...state,
                countTarget: [...state.countTarget, action.payload],
                targetCurrencies: [...state.targetCurrencies, {id: action.payload, name: 'Валюта', value: ''}]
            }
        case SET_ALL_CURRENCIES:
            return {...state, allCurrencies: [...action.payload]}
        case SET_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: {...state.baseCurrency, name: action.payload.name, value: action.payload.value}
            }
        case SET_ALL_EXCHANGE_RATES:
            return {
                ...state,
                allRates: {...action.payload}
            }
        case SET_TARGET_CURRENCY:
            return {
                ...state,
                targetCurrencies: state.targetCurrencies.map((elem) => (
                    elem.id === action.payload.id
                        ?
                        {id: action.payload.id, name: action.payload.name, value: action.payload.value}
                        :
                        {...elem}
                ))
            }
        default:
            return state
    }
}

export default reduser