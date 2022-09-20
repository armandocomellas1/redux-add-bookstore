import './Cat.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories_duck';

const Categories = (props) => {
  const getArrData = Object.values(props);
  const getLast = getArrData[getArrData.length - 1];
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(checkStatus('Under construction'));
  };

  return (
    <div className="main_cat_container">
      <div className="cat_container">
        <button type="button" className="cats_btn" onClick={handleSubmit(submit)}>{getLast}</button>
      </div>
    </div>
  );
};

export default Categories;
