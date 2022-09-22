/* eslint-disable react/jsx-props-no-spreading */
/* props-no-spreading disabled because is quired for react-hook-form */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createBookStore, postBook } from '../thunk';
import './Adding.css';

const Adding = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // dispatch(createBookStore());
    dispatch(postBook(data));
    reset();
  };

  return (
    <div className="add_main_cont">
      <form className="adds_container" onSubmit={handleSubmit(onSubmit)}>
        <hr />
        <h2>ADD NEW BOOK</h2>
        <div className="form_container">
          <input {...register('title')} placeholder="Book title" />
          <input {...register('author')} placeholder="Author" />
          <input {...register('category')} placeholder="Categories" />
          <button type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default Adding;
