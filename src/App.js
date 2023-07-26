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

export const AppContext = createContext();

function App() {
  const [products, setProducts] = useState(Products);
  return (
    <div>
      <AppContext.Provider value={{products ,setProducts}}>
        <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path='/' element={<Home  />} />
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
