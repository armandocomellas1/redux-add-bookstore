import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import Adding from './Adding';
import { getListItems } from '../thunk';
import loadingStatus from '../redux/reduxStats';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books.books);
  const loading = useSelector((store) => store.books.loading);
  useEffect(() => {
    if (loading === loadingStatus.idle) dispatch(getListItems());
  }, [dispatch, loading]);
  // dispatch(getListItems());
  // const listBooks = useSelector((store) => {
  //   return store.books.array;
  // });
  console.log('listBooks', books);
  console.log('loading', loading);

  return (
    <div>
      {
        books.map((book) => {
          return (
            <Book
              key={`books-lisk-card-${book.itemId}`}
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
