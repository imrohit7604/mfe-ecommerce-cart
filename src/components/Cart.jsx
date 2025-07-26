import React from 'react';
import "../Cart.css";

const Cart = ({ items = [] }) => {
  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold mb-2">🛒 Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">No items in cart.</p>
      ) : (
        <ul>
          {items.map((item, i) => (
            <li key={i} className="my-1">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
