import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

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
    <BrowserRouter>
      <Navegation />
      <Routes>
        <Route path="/*" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
