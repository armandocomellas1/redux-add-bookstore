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
