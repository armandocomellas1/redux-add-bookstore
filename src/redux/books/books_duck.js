// Variables
const ADD = 'BOOKSTORE/BOOKS/ADD';
const DEL = 'BOOKSTORE/BOOKS/DEL';

// Reducers
const initialData = {
  array: [
    { title: 'Armando', author: 'mio' },
    { title: 'Carlos', author: 'Vivas' },
  ],
};

const actionAdd = (prevState, action) => {
  const newState = {
    ...prevState,
    array: [...prevState.array, action.book],
  };
  return newState;
};

const booksReducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD:
      return actionAdd(state, action);
    default:
      return state;
  }
};

// Actions creators
export const addBook = (props) => {
  return {
    type: ADD,
    book: props,
  };
};

export const delBook = () => {
  return {
    type: DEL,
  };
};

// Actions
// export const triggerAdd = (props) => {
//   store.dispatch(add(props));
// };

export default booksReducer;
