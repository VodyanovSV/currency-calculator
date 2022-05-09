import {ADD_CURRENCY} from "../actions/targetCurrencyActions";

const initialState = {
    currencies: [
        {
            type: '',
            value: null
        },
    ]
}

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENCY:
            return {...state, currencies: [...state.currencies, {type: '', value: null}]}
        default:
            return state
    }
}

export default reduser