import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import pizzalogo from '../../img/pizzalogo.png';
import UserLog from '../../img/user.svg';
import Cart from '../../img/cart.svg';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="mx-auto">
            <img src={pizzalogo} alt='Logo' style={{ maxWidth: '150px' }} />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="roboto-bold mr-auto" style={{ margin: 'auto' }}>
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#promociones">Promociones</Nav.Link>
              <Nav.Link href="#menu">Menú</Nav.Link>
              <Nav.Link href="#zona-de-reparto">Zona de reparto</Nav.Link>
              <Nav.Link href="#quienes-somos">Quienes Somos</Nav.Link>
            </Nav>
            <Nav className="roboto-bold">
            <Nav.Item>
              <Link to="/home" className="iconlogo">
                <img src={UserLog} alt='Login' style={{ maxWidth: '50px' }} />
              </Link>
            </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#cart" className="iconlogo">
                  <img src={Cart} alt='cart' style={{ maxWidth: '50px' }} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
