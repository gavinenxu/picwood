import * as types from '../../../../constants/actionTypes'

export const addToFav = picture => ({
    type: types.ADD_TO_FAV,
    picture
})

export const removeFromFav = picture => ({
    type: types.REMOVE_FROM_FAV,
    picture
})