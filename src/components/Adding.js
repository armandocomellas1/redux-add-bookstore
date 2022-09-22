import './Adding.css';
import { React, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books_duck';
import { CreateBookStore, PostBook, GetListItems } from '../thunk';

const Adding = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const Submit = (data) => {
    // data fetching here
    // dispatch(CreateBookStore());

    // dispatch(CreateBookStore());
    // dispatch(addBook(data));
    // dispatch(PostBook(data));
  };
  // dispatch(GetListItems());

  return (
    <div className="add_main_cont">
      <form className="adds_container" onSubmit={handleSubmit(Submit)}>
        <hr />
        <h2>ADD NEW BOOK</h2>
        <div className="form_container">
          <input {...register('title')} placeholder="Book title" />
          <input {...register('author')} placeholder="Author" />
          <button type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default Adding;
