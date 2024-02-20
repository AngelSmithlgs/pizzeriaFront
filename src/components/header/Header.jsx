import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import pizzalogo from '../../img/pizzalogo.png';

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
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="roboto-bold">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#order">Pedir en línea</Nav.Link>
              <Nav.Link href="#promotions">Promociones</Nav.Link>
              <Nav.Link href="#user">Quienes Somos</Nav.Link>
              <Nav.Link href="#cart">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
