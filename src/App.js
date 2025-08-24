import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CostingPage from './components/CostingPage';
import Cart from './components/Cart';
import './App.css';

// Cart Context
export const CartContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (service) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.platform === service.platform && 
        item.serviceName === service.serviceName
      );
      
      if (existingItem) {
        return prevCart.map(item =>
          item.platform === service.platform && item.serviceName === service.serviceName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...service, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (platform, serviceName) => {
    setCart(prevCart => prevCart.filter(item => 
      !(item.platform === platform && item.serviceName === serviceName)
    ));
  };

  const updateQuantity = (platform, serviceName, quantity) => {
    if (quantity <= 0) {
      removeFromCart(platform, serviceName);
      return;
    }
    
    setCart(prevCart => prevCart.map(item =>
      item.platform === platform && item.serviceName === serviceName
        ? { ...item, quantity }
        : item
    ));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const cartValue = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal
  };

  return (
    <CartContext.Provider value={cartValue}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/costing/:platform" element={<CostingPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
