import './App.css';
import React from 'react';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Header from './components/Header'
import Navigation from './components/Navigation'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { useState ,createContext} from 'react';
import Products from '../src/data/products.json'
import ShopProducts from '../src/data/StoreProducts.json'
import Shop from './pages/Shop';

export const AppContext = createContext();

function App() {
  const [products, setProducts] = useState(Products);
  const [shopProducts, setShopProducts] = useState(ShopProducts);
  return (
    <div>
      <AppContext.Provider value={{products ,setProducts,shopProducts,setShopProducts}}>
        <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/products' element={<Shop  />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Home />} />
        </Routes>
         <Newsletter />
        <Footer />
      </Router>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
