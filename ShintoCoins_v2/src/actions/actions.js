//App imports
import {BUY_SHINTO_COIN, 
        MINE_SHINTO_COIN,
        SELL_SHINTO_COIN} from './types';



export function buyShintoCoin(numberOfCoins, currShintoCoinValue) {
    //parse string value of coins
    let localNumberOfCoins = parseInt(numberOfCoins, 10);
    //return type and payload of shinto ledger object
    return {
        type: BUY_SHINTO_COIN,
        payload: localNumberOfCoins
    }
}

export function sellShintoCoin(numberOfCoins, currShintoCoinValue) {
    //parse string value of coins
    let localNumberOfCoins = parseInt(numberOfCoins, 10);
    //return type and payload of shinto ledger object
    return {
        type: SELL_SHINTO_COIN,
        payload: localNumberOfCoins
    }
}

export function mineShintoCoin(numberOfCoins, currShintoCoinValue) {
    //parse string value of coins
    let localNumberOfCoins = parseInt(numberOfCoins, 10);
    //return type and payload of shinto ledger object
    return {
        type: MINE_SHINTO_COIN,
        payload: localNumberOfCoins
    }
}
