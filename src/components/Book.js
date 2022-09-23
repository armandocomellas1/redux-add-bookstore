import './Book.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../thunk';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    title,
    author,
    category,
    itemId,
    value,
  } = props;
  const submit = () => {
    dispatch(deleteBook(itemId));
  };
  const percentGen = () => {
    return Math.floor(Math.random() * 100);
  };

  const setID = `${itemId}`;
  const getRand = percentGen();
  return (
    <div className="bks_main_cont" id={setID}>
      <div className="books_container">
        <div className="category_tl">{category}</div>
        <div className="title_tl">{title}</div>
        <div className="author_tl">{author}</div>
        <div className="container_info">
          <button type="button" className="bks_btn">Comments</button>
          <button type="button" className="bks_btn" onClick={(event) => submit(event)}>Remove</button>
          <button type="button" className="bks_btn">Edit</button>
        </div>
      </div>
      <div className="perc_container">
        <div className="circle_perc" />
        <div className="perc_letter">
          <p className="pername">
            {value}
            %
          </p>
          <p className="completed_Stat">Completed</p>
        </div>
      </div>
      <div className="container_chapter">
        <h4>CURRENT CHAPTER</h4>
        <p>
          Chapter&nbsp;
          {getRand}
        </p>
        <button type="button">
          <span>UPDATE PROGRESS</span>
        </button>
      </div>
    </div>
  );
};

export default Book;
