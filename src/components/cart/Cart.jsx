import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {
    setCartItems([...cartItems, pizza]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, pizza) => total + pizza.price, 0);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((pizza, index) => (
          <li key={index}>
            {pizza.name} - ${pizza.price.toFixed(2)}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal().toFixed(2)}</p>
    </div>
  );
};

export default Cart;
