import { createAsyncThunk, nanoid, createSlice } from '@reduxjs/toolkit';
import { keys } from 'lodash';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import loadingStatus from './redux/reduxStats';

const urlBase = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const createApp = `${urlBase}/apps/`;
const craetedID = 'P2ZzPvrObbvTDS8LmoWg';
const ACTION_PREPEND = 'bookstore/books';

const createBookStore = createAsyncThunk(`${ACTION_PREPEND}/CREATEID`, async () => {
  const response = await axios.post(createApp);
  const stringResp = response.data;
  console.log('CreateBookStore', stringResp);
  return stringResp;
});
const postBookPath = `${createApp}${craetedID}/books`;

const getListItems = createAsyncThunk(`${ACTION_PREPEND}/FETCHBOOKS`, async () => {
  const response = await axios.get(postBookPath);
  const stringResp = response.data;
  console.log('GetListItems', stringResp);
  return stringResp;
});

const initialState = {
  array: [],
};

const createBook = (data) => ({
  item_id: uuidv4(),
  ...data,
});

const postBook = createAsyncThunk(`${ACTION_PREPEND}/ADDBOOK`, async (data, thunkAPI) => {
  console.log('dataForm', data);
  console.log('thunkAPI', thunkAPI);
  const book = createBook(data);
  console.log('ID book', book);
  const response = await axios.post(postBookPath, book);
  console.log('postBook', response);

  const stringResp = {
    data: response.data,
    status: response.status,
    statusText: response.statusText,
  };
  if (stringResp.status === 201) {
    thunkAPI.dispatch(getListItems());
  }
  return stringResp;
});

const deleteBook = createAsyncThunk(`${ACTION_PREPEND}/DELETBOOK`, async (itemId, thunkAPI) => {
  const deleteBookPath = `${createApp}${craetedID}/books/${itemId}`;
  console.log('deleteBookPath', itemId);
  const response = await axios.delete(deleteBookPath);
  console.log('postBook', response);

  const stringResp = {
    data: response.data,
    status: response.status,
    statusText: response.statusText,
  };
  if (stringResp.status === 201) {
    thunkAPI.dispatch(getListItems());
  }
  return stringResp;
});

const booksSlice = createSlice({
  name: ACTION_PREPEND,
  initialState: {
    loading: loadingStatus.idle,
    books: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCHBOOKS
      .addCase(getListItems.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(getListItems.fulfilled, (state, action) => {
        state.loading = loadingStatus.succeeded;
        const BooksIds = keys(action.payload);
        state.books = BooksIds.map((itemId) => ({
          itemId,
          ...action.payload[itemId][0],
        }));
      })
      .addCase(getListItems.rejected, (state) => {
        state.loading = loadingStatus.failed;
      })
      // ADDBOOK
      .addCase(postBook.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(postBook.fulfilled, (state) => {
        state.loading = loadingStatus.succeeded;
      })
      .addCase(postBook.rejected, (state) => {
        state.loading = loadingStatus.failed;
      })
      // DELETEBOOK
      .addCase(deleteBook.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.loading = loadingStatus.succeeded;
      })
      .addCase(deleteBook.rejected, (state) => {
        state.loading = loadingStatus.failed;
      });
  },
});

const { actions, reducer } = booksSlice;

export {
  actions,
  createBookStore,
  getListItems,
  postBook,
  deleteBook,
};

export default reducer;
