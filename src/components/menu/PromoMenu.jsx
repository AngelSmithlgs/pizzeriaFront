import React from 'react';
import { useCart } from '../cart/CartContext';

const PromoMenu = () => {
  const { addToCart } = useCart();

  const promoItems = [
    { id: 1, name: 'Promo 1', description: 'Descripción de la promo 1', price: 15.99 },
    { id: 2, name: 'Promo 2', description: 'Descripción de la promo 2', price: 18.99 },
  ];

  const handleAddToCart = (promoItem) => {
    const cartItem = { id: promoItem.id, name: promoItem.name, price: promoItem.price };
    addToCart(cartItem);
  };

  return (
    <div>
      <h2>Promociones</h2>
      <ul>
        {promoItems.map((promoItem) => (
          <li key={promoItem.id}>
            <strong>{promoItem.name}</strong> - {promoItem.description} - ${promoItem.price.toFixed(2)}{' '}
            <button onClick={() => handleAddToCart(promoItem)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromoMenu;
