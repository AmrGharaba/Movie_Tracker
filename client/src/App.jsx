import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegisterForm from './components/RegisterPages/RegisterForm';
import LoginForm from './components/RegisterPages/LoginForm';
import Main from './views/Main';
import axios from 'axios';

function App() {
  // useEffect(() => {
  //   const categories = 'Action';
  //   // If you want to send all categories, you need to adjust the data being sent.
  //   axios.post('http://localhost:8000/api/categories', { name: 'Thriller' })
  //     .then(response => {
  //       // Handle success
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       // Handle error
  //       console.error('There was an error!', error);
  //     });
  // }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/home/*' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
