import React, { useEffect } from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import RegisterForm from './components/RegisterPages/RegisterForm';
import LoginForm from './components/RegisterPages/LoginForm';
import Main from './views/Main';
import axios from 'axios';
import ContactUs from './components/AboutusPages/ContactUs';
import AboutUs from './components/AboutusPages/AboutUs';
import MoviesCarousel from './components/Movie/MoviesCarousel';
import MovieDetail from './components/MovieDetail/MovieDetail';

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
        {/* <Route element={<MoviesCarousel />} path='/home' /> */}
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/home/*' element={<Main />} />
        <Route path='/detail/:movie' element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
