import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import RegisterForm from './components/RegisterPages/RegisterForm';
import LoginForm from './components/RegisterPages/LoginForm';
import Main from './views/Main';
import AboutUs from './components/AboutusPages/AboutUs';
import AdminDashboard from "./views/adminDashboard";
import MovieDetail from './components/MovieDetail/MovieDetail';
import MainForms from './components/RegisterPages/MainForms';

function App() {
  const userId = localStorage.getItem("userid");
  const admin = localStorage.getItem("admin");
  console.log(userId);
  console.log(admin);


  return (
    <>
      <Routes>
        <Route path='/' element={<MainForms />} />
        {/* <Route element={<MoviesCarousel />} path='/home' /> */}

        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/login' element={<MainForms />} />
        <Route path='/home/*' element={<Main />} />
        <Route path='/detail/:movie' element={<MovieDetail />} />
        {/* {
          userId !== null && admin !== null */}
            <Route path='/admin/*' element={<AdminDashboard />} />
            {/* : <Route path='/goto' element={<Navigate to='/home' />} /> */}
        {/* } */}
        <Route path='/detail' element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
