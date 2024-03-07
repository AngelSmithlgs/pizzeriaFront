// Landing.jsx
import React from 'react';
import Footer from '../components/footer/Footer';
import Body from '../components/body/Body';
import PromoMenu from '../components/menu/PromoMenu';
import { CartProvider } from '../components/cart/CartContext';

function Landing() {
  return (
    <div className='app-container'>
      <CartProvider>
        <Body />
        <PromoMenu />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default Landing;
