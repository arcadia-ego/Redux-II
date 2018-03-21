import {FRIENDGET, FRIENDGOT, ERROR} from '../actions/getFriends';

const initialState = {
    friends: [],
    getFriends: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FRIENDGET:
            return {...state, getFriends: true}
        case ERROR:
            return {state, error: action.errorMessage}
        
        case FRIENDGOT:
            return {...state, friends: action.friends, getFriends: false, error: null};

        default:
            return state
    }
}