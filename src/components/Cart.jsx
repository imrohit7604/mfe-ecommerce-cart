import React from 'react';
import "../Cart.css";

const Cart = ({ items = [] }) => {
  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Cart</h2>
      {items.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <ul className="cart-items-list">
          {items.map((item, i) => (
            <li key={i} className="cart-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

