import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers'

//middleware
const logger = createLogger();

// load favorites from localstorage
let favorites = localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites"))
  : [];


const store = createStore(rootReducer, {favorites}, compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// save favorites to localstorage
store.subscribe(() => {
    const newFavorites = store.getState().favorites;
    if (newFavorites.length !== favorites.length) {
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      favorites = newFavorites;
    }
  });

export default store