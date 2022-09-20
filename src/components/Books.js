import './Books.css';
import styled from 'styled-components';
import Adding from './Adding';
import { initialData } from '../redux/books/books_duck';

const haveData = initialData.array.length;
console.log('haveData', haveData);
const Article = styled.article`
  display: ${haveData >= 1 ? 'flex' : 'none'};
`;
const Books = (listenAdd) => {
  const { title, author } = 'text';
  const getDataStore = listenAdd;
  console.log('getDataStore', getDataStore);
  return (
    <div className="bks_main_cont">
      <Article>
        <div className="books_container">
          <div>{title}</div>
          <div>{author}</div>
          <button type="button" className="bks_btn">Remove</button>
        </div>
      </Article>
      <Adding />
    </div>
  );
};

export default Books;
