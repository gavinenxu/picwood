import * as types from '../../../constants/actionTypes'

const initialState = {
    logined: false,
    error: {}
}

export const authReducer = (state = initialState, action={}) => {
    switch(action.type) {
        case types.LOGIN_SUCCESS:
            return {...state, logined: true, error: {}};
        case types.LOGIN_FAIL:
            return {...state, logined: false, error: { login: action.payload }}
        default:
            return state;
    }
}