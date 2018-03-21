import {FRIENDGET, FRIENDGOT, ERROR, TOGGLEFRIEND} from '../actions/getFriends';

const initialState = {
    friends: [],
    getFriends: false,
    error: null,
}


export default (state = initialState, action) => {
    switch(action.type) {
        case FRIENDGET:
            return {...state, getFriends: true}
        case ERROR:
            return {...state, error: action.errorMessage}
        case TOGGLEFRIEND:
            return {...state, friends: state.friends.map(obj => obj.id === action.id ? {...obj, toggledFriend : !obj.toggledFriend}:obj)}

        case FRIENDGOT:
            return {...state, friends: action.friends, getFriends: false, error: null};

        default:
            return state
    }
}