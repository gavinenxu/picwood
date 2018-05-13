import * as types from '../../../../constants/actionTypes'
import axios from 'axios'

export const get_picture = () => ({
    type: types.GET_PICTURE
})

export const get_picture_error = error => ({
    type: types.GET_PICTURE_ERROR,
    error
})

export const get_picture_success = picture => ({
    type: types.GET_PICTURE_SUCCESS,
    picture
})


export const getRandomPicture = () => {
    return dispatch => {
        dispatch(get_picture);
        
        axios.get("http://localhost:3030/picture/random")
             .then(response => {
                dispatch(get_picture_success({url: response.data.url, 
                    title: response.data.title}));
             })
             .catch(error => {
                dispatch(get_picture_error(error))
             })
    }
}


export const getRandomPictureWithCategory = category => {
    return dispatch => {
        axios.get(`http://localhost:3030/picture/random/${category}`)
            .then(response => {
                //console.log(response);
                dispatch(get_picture_success({url: response.data.url, 
                    title: response.data.title}));
            })
            .catch(error => {
                dispatch(get_picture_error(error));
            })
    }
}