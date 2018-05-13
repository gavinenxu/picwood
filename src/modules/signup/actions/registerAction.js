import axios from 'axios'
import _ from 'lodash'
import * as types from '../../../constants/actionTypes'

export const register = (username, password) => {

    return (dispatch) => {
        
        axios.post("http://localhost:3030/register", {
                username: username,
                password: password
            })
            .then((response) => {
                if(_.isUndefined(response)) {
                   return dispatch(registerFail('Error: No Response'));
                }

                alert("Register Succeed");

                setTimeout(function() {
                    window.location.href = 'http://localhost:3000/login'
                }, 1000);
                /*
                var userId = JSON.stringify(response.data.uid);
                if(userId) {
                    localStorage.setItem('userId', userId);
                    dispatch(registerSuccess({userId: userId}));
                }
                */
            })
            .catch(error => {
                 alert("Account exist");
                 dispatch(registerFail(error));
                });
    }
}

export const registerSuccess = (data) => {
    return {
        type: types.SIGNUP_SUCCESS,
        payload: data
    }
}

export const registerFail = (error) => {
    return {
        type: types.SIGNUP_FAIL,
        error: error
    }
}