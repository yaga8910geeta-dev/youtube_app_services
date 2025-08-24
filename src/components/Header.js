import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import './Header.css';

const Header = () => {
  const { cart } = useContext(CartContext);
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <h1>Social Growth</h1>
            </Link>
          </div>
          
          <nav className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">My Account</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link cart-link">
                  My Cart
                  {cartItemCount > 0 && (
                    <span className="cart-badge">{cartItemCount}</span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
