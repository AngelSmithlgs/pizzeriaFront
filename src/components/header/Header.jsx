import React, { useState } from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
import pizzalogo from '../../img/pizzalogo.png';
import UserLog from '../../img/user.svg';
import UserLogGreen from '../../img/user-green.svg';
import CartIcon from '../../img/cart.svg';
import { useUserAuth } from '../context/UserAuthContext';
import Cart from '../cart/Cart';

const Header = () => {
  const { user } = useUserAuth();
  const [showCartPanel, setShowCartPanel] = useState(false);

  const handleCartClick = () => {
    setShowCartPanel(!showCartPanel);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/" className="mx-auto">
            <img src={pizzalogo} alt='Logo' style={{ maxWidth: '150px' }} />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="roboto-bold mr-auto" style={{ margin: 'auto' }}>
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="#promociones">Promociones</Nav.Link>
              <Nav.Link as={Link} to="#menu">Menú</Nav.Link>
              <Nav.Link as={Link} to="#zona-de-reparto">Zona de reparto</Nav.Link>
              <Nav.Link as={Link} to="/quienes-somos">Quienes Somos</Nav.Link>
            </Nav>
            <Nav className="roboto-bold">
              <Nav.Item>
                <Link to={user ? "/user-profile" : "/home"} className="iconlogo">
                  <img src={user ? UserLogGreen : UserLog} alt='Login' style={{ maxWidth: '50px' }} />
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#cart" className="iconlogo" onClick={handleCartClick}>
                  <img src={CartIcon} alt='cart' style={{ maxWidth: '50px' }} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showCartPanel && (
        <div className="cart-panel">
          <Cart />
          <button onClick={() => setShowCartPanel(false)}>cerrar</button>
        </div>
      )}
    </div>
  );
}

export default Header;
