import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Body from '../components/body/Body';

function Landing() {
  return (
    <div className='app-container'>
      <Header rol={'usuario'} />
      <Body />
      <Footer />
    </div>
  );
}

export default Landing;
