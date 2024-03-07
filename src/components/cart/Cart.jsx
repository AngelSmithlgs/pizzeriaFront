import React from 'react';
import { useCart } from '../cart/CartContext';

const Cart = () => {
  const { cartState, removeFromCart, calculateTotal } = useCart();

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cartState.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartState.items.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal().toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
