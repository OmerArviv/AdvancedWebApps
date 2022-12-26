import React, { Component, StrictMode } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from './Components/Product';
import './Components/Product.css';
import ShoppingList from './Components/ShoppingList';
import { createRoot } from 'react-dom/client';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='header__image'>
          <img className="header__image" src="./images/siteName.png" alt="Site Main pic" />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<ShoppingList />}></Route>
            <Route path="/product/:product" element={<Product />}>
            </Route>
          </Routes>
        </div>
      </Router>
    );
  }
}


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

//render(<App />, document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

export default ShoppingList;