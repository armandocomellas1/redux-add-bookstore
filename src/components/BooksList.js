import { useSelector } from 'react-redux';
import Book from './Book';
import Adding from './Adding';

const BookList = () => {
  const listBooks = useSelector((store) => {
    return store.books.array;
  });
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
