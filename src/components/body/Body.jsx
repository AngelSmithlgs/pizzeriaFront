import React from 'react';
import './body.css';
import bagIcon from '../../img/shopping.svg';
import motoIcon from '../../img/delivery.svg';

const Body = () => {
  return (
    <div className="home-container">
      <div className="background-image">
        <div className="center-content">
          <div className="delivery-options">
            <div className="delivery-option">
              <img src={motoIcon} alt="Moto Icon" />
              <span>Delivery</span>
            </div>
            <div className="pickup-option">
              <img src={bagIcon} alt="Bag Icon" />
              <span>Retirar</span>
            </div>
          </div>
          <button className="order-button">Pedir</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
