import * as types from '../../../../constants/actionTypes'

const initialState = [];

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_SUCCESS:
      return action.categories;
    case types.GET_CATEGORY_ERROR:
      return initialState;
    default:
      return state;
  }
};

export const categorySearchText = (state = "", action) => {
    switch (action.type) {
      case types.SET_CATEGORY_SEARCH_TEXT:
        return action.searchText;
      default:
        return state;
    }
};