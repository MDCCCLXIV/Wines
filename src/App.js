import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Header from './components/Header'
import Navigation from './components/Navigation'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Home />} />
        </Routes>
         <Newsletter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
