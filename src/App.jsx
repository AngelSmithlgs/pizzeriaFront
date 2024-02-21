import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Landing from "./landing/Landing";
import Home from "./components/home/Home";
import Login from "./components/header/user/Login";
import Signup from "./components/header/user/Signup";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";
import ProtectedRoute from "./components/header/user/ProtectedRoute";


function App() {
  return (
    <UserAuthContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home'element={
              <ProtectedRoute element={<Home />} />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </UserAuthContextProvider>
  );
}

export default App;
