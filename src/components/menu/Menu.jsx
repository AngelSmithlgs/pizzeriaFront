import React from 'react'
import './menu.css'
import { useCart } from '../context/CartContext';

const Menu = () => {
  const { addToCart } = useCart();

  const menuItems = [
    { id: 1, name: 'Pizza Margarita', price: 10.00 },
    { id: 2, name: 'Pizza Pepperoni', price: 12.00 },
    { id: 3, name: 'Promo 1', description: 'Descripción de la promo 1', price: 20.00 },
    { id: 4, name: 'Promo 2', description: 'Descripción de la promo 2', price: 20.00 },
  
  ];

  const handleAddToCart = (menuItem) => {
    addToCart(menuItem);
  };

  return (
    <div>
      <h2>Menú</h2>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name} {menuItem.description && `- ${menuItem.description}`} - ${menuItem.price.toFixed(2)}{' '}
            <button onClick={() => handleAddToCart(menuItem)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
