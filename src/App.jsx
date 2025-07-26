import React, { useState } from 'react';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState(['Shoes', 'Watch']);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart MFE (Standalone)</h1>
      <Cart items={cartItems} />
    </div>
  );
};

export default App;
