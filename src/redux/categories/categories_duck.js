console.log('Categories');
// Variables
const CHECK = 'BOOKSTORE/CATEGORIES/CHECK';

// Reducers
const initialData = {
  array: [],
};

const checkAdd = (prevState, action) => {
  const newState = {
    ...prevState,
    array: [...prevState.array, action.categories],
  };
  return newState;
};

const categoriesReducer = (state = initialData, action) => {
  console.log('triggerAdd', action);
  switch (action.type) {
    case CHECK:
      return checkAdd(state, action);
    default:
      return state;
  }
};

// Actions creators
export const checkStatus = (props) => {
  return {
    type: CHECK,
    categories: props,
  };
};

// Actions
// export const triggerAdd = (props) => {
//   store.dispatch(add(props));
// };

export default categoriesReducer;
