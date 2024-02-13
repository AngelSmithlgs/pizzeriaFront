import React from "react";
import { Carousel } from 'react-bootstrap';
import '../styles/home.css';

import PizzaPromo from '../resources/promopizza2.webp';
import PizzaPromo2 from '../resources/promopizza4.jpg';
import PizzaPromo3 from '../resources/promopizza3.webp';

function Home() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={PizzaPromo}
            alt="Pizza Promo"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={PizzaPromo2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={PizzaPromo3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
