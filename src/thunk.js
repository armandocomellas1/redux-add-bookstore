import { createAsyncThunk, nanoid, createSlice } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import axios from 'axios';

const urlBase = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const createApp = `${urlBase}/apps/`;
const craetedID = 'P2ZzPvrObbvTDS8LmoWg';

// const createBookStore = createAsyncThunk('gets/fetchGets', async () => {
//   const response = await axios.post(createApp);
//   const stringResp = response.data;
//   console.log('CreateBookStore', stringResp);
//   return stringResp;
// });

const initialState = {
  array: [],
};
const postBookPath = `${createApp}${craetedID}/books`;

const postBook = createAsyncThunk('posts/fetchPosts', async () => {
  console.log('initialState', initialState);
  const response = await axios.post(postBookPath, initialState);
  const stringResp = response.data;
  console.log('postBook', stringResp);
  return stringResp;
});

const getListItems = createAsyncThunk('gets/fetchGets', async () => {
  const response = await axios.get(postBookPath);
  const stringResp = response.data;
  console.log('GetListItems', stringResp);
  return stringResp;
});

const postBooks = createSlice({
  name: 'array',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.array.push(action.payload);
      },
      prepare(Title, Author, Category) {
        return {
          payload: {
            title: Title,
            author: Author,
            category: Category,
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.array.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction] += 1;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getListItems.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getListItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Adding date and reactions
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min += 1 }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });

        // Add any fetched posts to the array
        state.array = state.array.concat(loadedPosts);
      })
      .addCase(getListItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(postBook.fulfilled, (state, action) => {
        // Fix for API post IDs:
        // Creating sortedPosts & assigning the id
        // would be not be needed if the fake API
        // returned accurate new post IDs
        console.log('fulfilled', state);
        const sortedPosts = state.array.sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        });
        action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
        // End fix for fake API post IDs

        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          hooray: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        };
        state.array.push(action.payload);
      });
  },
});

export const CreateBookStore = (state) => {
  console.log('CreateBookStore', state);
  return state.array;
};
export const PostBook = (state) => state.array.status;
export const GetListItems = (state) => state.array.error;

export const { postAdded, reactionAdded } = postBooks.actions;

export default postBooks.reducer;
