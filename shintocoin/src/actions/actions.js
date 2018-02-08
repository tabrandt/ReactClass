// Application Imports
import {
    MINE_SHINTO_COIN,
    SELL_SHINTO_COIN,
    BUY_SHINTO_COINT} from './types'

    export function buyShintoCoins(numberOfCoins){
        return {
            type: BUY_SHINTO_COINT,
            payload: numberOfCoins
        }
    }

    export function mineShintoCoins(numberOfCoins){
        return {
            type: MINE_SHINTO_COINT,
            payload: numberOfCoins
        }
    }

    export function sellShintoCoins(numberOfCoins){
        return {
            type: SELL_SHINTO_COINT,
            payload: numberOfCoins
        }
    }