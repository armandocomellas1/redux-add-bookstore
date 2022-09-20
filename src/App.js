import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import BookList from './components/BooksList';
import CategoriesList from './components/CatList';
import store from './redux/store';

const Navegation = () => (
  <div className="nav_main_cont">
    <div className="nav_container">
      <nav>
        <Link to="/">Bookstore CMS</Link>
        <Link to="/books">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </nav>
      <div className="oval" />
    </div>
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navegation />
        <Routes>
          <Route path="/*" element={<BookList />} />
          <Route path="/categories" element={<CategoriesList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
