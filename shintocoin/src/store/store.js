import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reducer from '../reducer/reducer';

const initialState = {
    ledgerArr: [],
    shintoCoinValue: 0,
    shintoCoinsOwned: 0
}

const store = createStore(reducer);

export default createStore(
    reducer, 
    initialState,
    applyMiddleware(logger));