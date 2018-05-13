import { combineReducers } from 'redux'

//import reducers
import { authReducer } from '../modules/login/reducers/AuthReducer'
import { categories, categorySearchText } from '../modules/pictures/category/reducers/categoryReducer'
import { pictureReducer } from '../modules/pictures/random/reducers/randomReducer'
import { favorites } from '../modules/pictures/favorites/reducers/favoriteReducer'



//Reducers
const rootReducer = combineReducers({
    authReducer,
    categories,
    categorySearchText,
    pictureReducer,
    favorites
});

export default rootReducer;