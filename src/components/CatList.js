import { useSelector } from 'react-redux';
import Categories from './Categories';

const CategoriesList = () => {
  const listCategories = useSelector((store) => {
    return store.categories.array;
  });
  const getOne = listCategories[listCategories.length - 1];
  return (
    <div>
      <Categories
        status={
          getOne
        }
      />
    </div>
  );
};

export default CategoriesList;
