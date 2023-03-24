
import './App.css';
import React from "react";
import Home from './components/Home';
import { Route, Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          
          Home Page
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
       
     
      </Routes>
    </>
  );
};

export default App;
