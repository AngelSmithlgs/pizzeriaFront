import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Landing from './landing/Landing';
import Home from './components/home/Home';
import Login from './components/header/user/Login';
import Signup from './components/header/user/Signup';
import { UserAuthContextProvider } from './components/context/UserAuthContext';
import ProtectedRoute from './components/header/user/ProtectedRoute';
import UserProfile from './components/header/panelUser/UserProfile';
import EditProfile from './components/header/panelUser/EditProfile';
import About from './components/about/About';
import Header from './components/header/Header';
import { CartProvider } from './components/cart/CartContext';

function App() {
  return (
    <UserAuthContextProvider>
      <CartProvider>
        <Router>
          <Header rol={'usuario'} />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<ProtectedRoute element={<Home />} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/quienes-somos" element={<About />} />
          </Routes>
        </Router>
      </CartProvider>
    </UserAuthContextProvider>
  );
}

export default App;
