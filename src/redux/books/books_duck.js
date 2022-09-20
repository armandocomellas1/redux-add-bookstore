import { createStore } from '@reduxjs/toolkit';

console.log('ducks');
// Variables
const ADD = 'ADD';
const DEL = 'DEL';

// Reducers
const initialData = {
  array: [],
};

const booksReducer = (state = initialData, action) => {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case ADD:
      return state.array.push(action.book);
    default:
      return state;
  }
};

// Store
const store = createStore(booksReducer);

// Actions creators
const add = (props) => {
  console.log('add', props);
  return {
    type: ADD,
    book: props,
  };
};

const del = () => {
  return {
    type: DEL,
  };
};

// Actions
const listenAdd = (props) => {
  store.dispatch(add(props));
};

export { initialData, listenAdd };
