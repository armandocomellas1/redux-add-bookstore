import './Book.css';
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../thunk';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    title,
    author,
    category,
    itemId,
  } = props;

  const submit = () => {
    // const getIDtoDel = event.target.parentElement.parentElement.id;
    // document.getElementById(getIDtoDel).remove();
    dispatch(deleteBook(itemId));
  };

  const setID = `${itemId}`;
  return (
    <div className="bks_main_cont" id={setID}>
      <div className="books_container">
        <div>{title}</div>
        <div>{author}</div>
        <div>{category}</div>
        <button type="button" className="bks_btn" onClick={(event) => submit(event)}>Remove</button>
      </div>
    </div>
  );
};

export default Book;
