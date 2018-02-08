//App imports
import {BUY_SHINTO_COIN, 
        MINE_SHINTO_COIN,
        SELL_SHINTO_COIN} from '../actions/types';

//reducer 
export const reducer = (state, action) => {

console.log("in reducer"); //debug

function createShintoLedgerObject(transactionType, amountOfShintoCoin, currentShintoCoinValue, transactionCount) {
    return { tranType: transactionType, 
             tranAmount: amountOfShintoCoin, 
             currentValue: currentShintoCoinValue, 
             sequenceNumber: transactionCount}
}

let localShintoObject = undefined;

switch(action.type) {
    case BUY_SHINTO_COIN:
        console.log("reducer - BUY_SHINTO_COIN"); //debug

        //create local shinto coin ledger object
        localShintoObject = createShintoLedgerObject("Bought", action.payload, state.shintoCoinValue + 1, state.transactionCount)

        state = {...state, 
            shintoTransactionLedger: state.shintoTransactionLedger.concat(localShintoObject),
            transactionCount: state.transactionCount + 1,
            shintoCoinValue: state.shintoCoinValue + 1,
            shintoCoinsOwned: state.shintoCoinsOwned + action.payload};
        return state;
    //break;
    case SELL_SHINTO_COIN: 
        console.log("reducer - SELL_SHINTO_COIN"); //debug

        //create local shinto coin ledger object
        localShintoObject = createShintoLedgerObject("Sold", action.payload, state.shintoCoinValue - 1, state.transactionCount)

        state = {...state, 
            shintoTransactionLedger: state.shintoTransactionLedger.concat(localShintoObject),
            transactionCount: state.transactionCount + 1,
            shintoCoinValue: state.shintoCoinValue - 1,
            shintoCoinsOwned: state.shintoCoinsOwned - action.payload};
        return state;
        //break;
    case MINE_SHINTO_COIN: 
        console.log("reducer - MINE_SHINTO_COIN"); //debug

        //create local shinto coin ledger object
        localShintoObject = createShintoLedgerObject("Mined", action.payload, state.shintoCoinValue + 1, state.transactionCount)

        state = {...state, 
            shintoTransactionLedger: state.shintoTransactionLedger.concat(localShintoObject),
            transactionCount: state.transactionCount + 1,
            shintoCoinValue: state.shintoCoinValue + 1,
            shintoCoinsOwned: state.shintoCoinsOwned + action.payload};
        return state;
    //break;
    default: //should always have - code first - should always return current state
        console.log("reducer - default"); //debug
        return state;
    }//end switch
}// end dossierReducer

//only exporting one element as the default element
export default reducer;