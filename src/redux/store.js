import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books_duck';
import categoriesReducer from './categories/categories_duck';

const reducer = {
  books: booksReducer,
  categories: categoriesReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
