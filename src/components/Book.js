import './Book.css';
import React from 'react';
import styled from 'styled-components';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="bks_main_cont">
      <div className="books_container">
        <div>{title}</div>
        <div>{author}</div>
        <button type="button" className="bks_btn">Remove</button>
      </div>
    </div>
  );
};

export default Book;
