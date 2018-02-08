// Reducer
import {
    MINE_SHINTO_COIN,
    SELL_SHINTO_COIN,
    BUY_SHINTO_COIN} from '../actions/types'


function reducer(state, action){

    switch(action.type){
        case MINE_SHINTO_COIN :
            // do something
            console.log("Action - MINE");
            return state;
            break;
        case SELL_SHINTO_COIN :
            // do something
            console.log("Action - SELL");
            return state;
            break;
        case BUY_SHINTO_COIN :
            // do something
            console.log("Action - BUY");
            return state;
            break;
        default:
            return state;
            break;
    }
}
export default reducer;