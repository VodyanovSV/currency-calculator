import {ADD_TARGET_CURRENCY, SET_ALL_CURRENCIES} from "../actions/currencyActions";

const initialState = {
    targetCurrencies: [
        {
            name: '',
            value: null
        },
    ],
    allCurrencies: [

    ]

}

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TARGET_CURRENCY:
            return {...state, targetCurrencies: [...state.targetCurrencies, {name: '', value: null}]}
        case SET_ALL_CURRENCIES:
            return {...state, allCurrencies: [...action.payload]}
        default:
            return state
    }
}

export default reduser