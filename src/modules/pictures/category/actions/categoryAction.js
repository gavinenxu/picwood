import axios from 'axios'
import _ from 'lodash'
import * as types from '../../../../constants/actionTypes'

export const getCategories = () => ({
    type: types.GET_CATEGORIES
})

export const setCategorySearchTextAction = searchText => ({
    type: types.SET_CATEGORY_SEARCH_TEXT,
    searchText
})

export const getCategoryError = error => ({
    type: types.GET_CATEGORY_ERROR,
    error
})

export const getCategorySuccess = categories => ({
    type: types.GET_CATEGORY_SUCCESS,
    categories
})

export const getCategoriesAction = () => {
    return dispatch => {
        dispatch(getCategories);
        axios.get("http://localhost:3030/picture/category")
            .then(response => {
                if(_.isUndefined(response)) {
                    return dispatch(getCategoryError('Error: No Response'));
                }
                const categories = response.data;
                dispatch(getCategorySuccess(categories));
            })
            .catch(error => {
                dispatch(getCategoryError(error));
            })
    }
}


