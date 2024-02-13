import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Menu from './components/Menu';

const App = () => {
  return (
    <div>
     <Header/>
     <Home/>
     <Menu />
     <Footer />
    </div>
  );
};

export default App;
