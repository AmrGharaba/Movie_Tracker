import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import RegisterForm from './components/RegisterPages/RegisterForm';
import LoginForm from './components/RegisterPages/LoginForm';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <RegisterForm /> } />
        <Route path='/login' element={ <LoginForm /> } />
      </Routes>
    </>
  )
}

export default App;
