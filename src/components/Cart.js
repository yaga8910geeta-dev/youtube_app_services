import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext);

  const handleQuantityChange = (platform, serviceName, newQuantity) => {
    updateQuantity(platform, serviceName, newQuantity);
  };

  const handleRemoveItem = (platform, serviceName) => {
    removeFromCart(platform, serviceName);
  };

  if (cart.length === 0) {
    return (
      <div className="main-content">
        <div className="container">
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Add some services to get started!</p>
            <Link to="/" className="btn btn-primary">
              Browse Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="container">
        <div className="cart-header">
          <h1>My Cart</h1>
          <p>Review your selected services</p>
        </div>

        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-info">
                <h4>{item.serviceName}</h4>
                <p>Platform: {item.platform}</p>
                <p>Quantity: {item.quantity.toLocaleString()}</p>
                <p>Delivery: {item.delivery}</p>
                <p className="item-price">${item.price}</p>
              </div>
              
              <div className="cart-item-actions">
                <div className="cart-quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item.platform, item.serviceName, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item.platform, item.serviceName, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveItem(item.platform, item.serviceName)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-total">
          <h3>Total</h3>
          <div className="total-amount">${getCartTotal().toFixed(2)}</div>
          <button className="btn btn-success checkout-btn">
            Proceed to Checkout
          </button>
        </div>

        <div className="cart-actions">
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
