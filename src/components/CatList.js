import { useSelector } from 'react-redux';
import Categories from './Categories';

const CategoriesList = () => {
  const listCategories = useSelector((store) => {
    return store.categories.array;
  });
  return (
    <div>
      <Categories
        {
          ...listCategories
        }
      />
    </div>
  );
};

export default CategoriesList;
