import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import currencyReduser from "./redusers/currencyReduser";

const rootReduser = combineReducers({
    currencyReduser,
})

const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))

export default store