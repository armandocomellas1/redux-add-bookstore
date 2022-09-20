import './Adding.css';
import { useDispatch, useSelector } from 'react-redux';
import { listenAdd } from '../redux/books/books_duck';

const updatingData = (event) => {
  event.preventDefault();
  console.log(event);
  const getInputData = event.target.children[2].children[0].value;
  const getAuthorData = event.target.children[2].children[1].value;
  console.log('getInputData', getInputData);
  console.log('getAuthorData', getAuthorData);

  const objBook = {
    title: getInputData,
    author: getAuthorData,
  };
  console.log('objBook', objBook);
  listenAdd(objBook);
};

const Adding = () => {
  return (
    <div className="add_main_cont">
      <form className="adds_container" onSubmit={updatingData}>
        <hr />
        <h2>ADD NEW BOOK</h2>
        <div className="form_container">
          <input type="text" placeholder="Book title" />
          <select name="cars" id="cars" form="carform">
            <option value="author">Author</option>
          </select>
          <button type="submit" value="Submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default Adding;
