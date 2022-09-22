import './Book.css';
import React from 'react';
import styled from 'styled-components';

const Book = (props) => {
  const submit = (event) => {
    const getIDtoDel = event.target.parentElement.parentElement.id;
    document.getElementById(getIDtoDel).remove();
    // dispatch(delBook(event));
  };
  const { title, author } = props;
  const setID = `${title}`;
  return (
    <div className="bks_main_cont" id={setID}>
      <div className="books_container">
        <div>{title}</div>
        <div>{author}</div>
        <button type="button" className="bks_btn" onClick={(event) => submit(event)}>Remove</button>
      </div>
    </div>
  );
};

export default Book;
