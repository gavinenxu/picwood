import axios from 'axios'
import _ from 'lodash'
import * as types from '../../../constants/actionTypes'

export const login = (username, password) => {

    return (dispatch) => {
        
        axios.post("http://localhost:3030/login", {
                username: username,
                password: password
            })
            .then((response) => {
                if(_.isUndefined(response)) {
                   return dispatch(loginFail('Error: No Response'));
                }

                var userId = JSON.stringify(response.data.uid);
                if(userId) {
                    localStorage.setItem('userId', userId);
                    dispatch(loginSuccess({userId: userId}));
                }
            })
            .catch(error => {
                 alert("Not valid username or password");
                 dispatch(loginFail(error));
                });
    }
}

export const loginSuccess = (data) => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: data
    }
}

export const loginFail = (error) => {
    return {
        type: types.LOGIN_FAIL,
        error: error
    }
}