import './Adding.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books_duck';

const updatingData = (event) => {
  event.preventDefault();
  console.log(event);
  const getInputData = event.target.children[2].children[0].value;
  const getAuthorData = event.target.children[2].children[1].value;

  const objBook = {
    title: getInputData,
    author: getAuthorData,
  };
};

const Adding = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = (data) => {
    dispatch(addBook(data));
  };
  return (
    <div className="add_main_cont">
      <form className="adds_container" onSubmit={handleSubmit(submit)}>
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
