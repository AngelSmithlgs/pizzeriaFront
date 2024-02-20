import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './footer.css';
import pizzalogo from '../../img/pizzalogo.png';

const Footer = () => {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='text-center p-4'>
      <MDBRow className='d-flex align-items-center justify-content-center mb-4'>
        <MDBCol size='auto' className='footer-icon'>
            <FaInstagram size='1.5em' className='text-white me-3' />
        </MDBCol>
        <MDBCol size='auto' className='footer-icon'>
            <FaFacebook size='1.5em' className='text-white me-3' />
        </MDBCol>
        </MDBRow>
        <MDBRow className='d-flex justify-content-center'>
          <MDBCol size='auto' className='footer-section'>
            <h5>Contacto</h5>
            <p>Teléfono: +56 2 33392638</p>
            <p>Correo: pizza@pizza.pizza</p>
          </MDBCol>

          <MDBCol size='auto' className='footer-section'>
            <h5>Horarios</h5>
            <p>Lunes a Jueves de 12:30 a 21:00 </p>
               <p> Viernes de 12:30 a 21:30.</p>
          </MDBCol>

          <MDBCol size='auto' className='footer-section'>
            <h5>Ubicación</h5>
            <p>Av. Pedro de Valdivia 335, Providencia.</p>
          </MDBCol>

          <MDBCol size='auto' className='footer-section'>
            <h5>Información Legal</h5>
            <p>Términos y Condiciones de Uso</p>
            <p>Política de Privacidad</p>
          </MDBCol>
        </MDBRow>

        <MDBRow className='d-flex align-items-center justify-content-center mb-4'>
          <MDBCol size='auto'>
            <img src={pizzalogo} alt='Logo' className='footer-logo' />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    © 2024 powered by:&nbsp;
    <a className='text-white' href='https://github.com/angelsmithlgs'>
        tofu
    </a>
</div>
    </MDBFooter>
  );
}

export default Footer;
