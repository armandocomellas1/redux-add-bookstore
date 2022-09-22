import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../thunk';
import categoriesReducer from '../thunkUser';

const reducer = {
  books: booksReducer,
  categories: categoriesReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
