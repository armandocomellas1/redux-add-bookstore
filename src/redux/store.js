// import {
//   configureStore,
//   combineReducers,
//   commpose,
//   applyMiddleware,
//   compose,
// } from 'redux';
// import thunk from 'redux-thunk';

// import booksReducer from './books/books_duck';

// const rootReducer = combineReducers({
//   booksReducer,
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default function generateStore() {
//   const store = configureStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
//   return store;
// }
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books_duck';

const reducer = {
  books: booksReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
