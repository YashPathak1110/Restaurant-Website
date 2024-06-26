import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homes/Home';
import About from './pages/Homes/About';
import Shop from './pages/Homes/Shop';
import Blog from './pages/Homes/Blog';
import Contact from './pages/Homes/Contact';
import { CartProvider } from './Components/Layouts/CartContext';
import ShoppingCart from './Components/ShoppingCart';


function App() {

  return (
     <Router>
        <CartProvider>  
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path='/about' element={<About/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path="/cart" element={<ShoppingCart />} />   
      </Routes>
      </CartProvider>
     </Router> 
    
  );
}

export default App;
