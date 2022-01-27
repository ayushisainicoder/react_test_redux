import {GET_DATA} from '../constants'

const initialState={
    playerData: []
}

export default function playerDetails(state=[],action){
    switch (action.type) {
        case GET_DATA:
            return [
                ...state,
                {playerData: action.data}
            ]
            break;
    
        default:
            return state
    }
}