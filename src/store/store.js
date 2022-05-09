import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import targetCurrencyReduser from "./redusers/targetCurrencyReduser";

const rootReduser = combineReducers({
    targetCurrencyReduser,
})

const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))

export default store