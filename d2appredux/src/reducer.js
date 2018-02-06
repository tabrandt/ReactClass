import {UPDATE_COLOR} from './types'

const initState = {
    color: 'black'
}

function reducer(state = initState, action){

    switch(action.type){
        case UPDATE_COLOR :
            // do something
            return{...state, color:action.color}
            break;
        default:
            return state;
            break;
    }
}
export default reducer;