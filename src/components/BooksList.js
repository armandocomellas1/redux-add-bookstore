import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Adding from './Adding';
import getListItems from '../thunk';

const BookList = () => {
  const dispatch = useDispatch();
  dispatch(getListItems());
  const listBooks = useSelector((store) => {
    return store.books.array;
  });
  console.log('listBooks', listBooks);
  return (
    <div>
      {
        listBooks.map((book) => {
          return (
            <Book
              key={`books-lisk-card-${book.title}`}
              {...book}
            />
          );
        })
      }
      <Adding />
    </div>
  );
};

export default BookList;
