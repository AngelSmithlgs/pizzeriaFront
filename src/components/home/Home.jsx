import { Carousel } from 'react-bootstrap';
import './home.css';

import PizzaPromo from '../../img/promopizza2.webp';
import PizzaPromo2 from '../../img/promopizza4.jpg';
import PizzaPromo3 from '../../img/promopizza3.webp';

function Home() {
  return (
    <div className="carousel-container">
      <Carousel fade={true} interval={5000}>
        <Carousel.Item>
          <div className="carousel-img-container">
            <div className="image-wrapper">
              <img
                className="d-block w-100 h-100 carousel-img"
                src={PizzaPromo}
                alt="Pizza Promo"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img-container">
            <div className="image-wrapper">
              <img
                className="d-block w-100 h-100 carousel-img"
                src={PizzaPromo2}
                alt="Second slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img-container">
            <div className="image-wrapper">
              <img
                className="d-block w-100 h-100 carousel-img"
                src={PizzaPromo3}
                alt="Third slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
