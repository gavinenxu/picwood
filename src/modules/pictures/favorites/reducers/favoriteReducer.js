import * as types from '../../../../constants/actionTypes'

const initialState = [];

export const favorites = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_FAV:
            return [...state, action.picture];
        case types.REMOVE_FROM_FAV:
            //console.log("action: "+action.picture.url);
            return state.filter(picture => picture.url !== action.picture.url)
        default:
            return state;
    }
}
 