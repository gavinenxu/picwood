import * as types from '../../../../constants/actionTypes'

const initialState = {
    url: '',
    title: '',
    isFav: false
};

export const pictureReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PICTURE_SUCCESS:
            const url = action.picture.url;
            const title = action.picture.title;
            const isFav = action.picture.isFav;
            return {url, title, isFav};
        case types.GET_PICTURE_ERROR:
            return initialState;
        case types.ADD_TO_FAV:
            return {...state, isFav: true }
        case types.REMOVE_FROM_FAV:
            return {...state, isFav: false} 
        default:
            return state;
    }
};