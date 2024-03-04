import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import RegisterForm from './components/RegisterPages/RegisterForm';
import LoginForm from './components/RegisterPages/LoginForm';
import Main from './views/Main';
import axios from 'axios';
import ContactUs from './components/AboutusPages/ContactUs';
import AboutUs from './components/AboutusPages/AboutUs';
import MoviesCarousel from './components/Movie/MoviesCarousel';
//import { useDispatch, useSelector } from "react-redux";
// import PageRender from "./customRouter/PageRender";
// import PrivateRouter from "./customRouter/PrivateRouter";
import { refreshToken } from "./redux/actions/authAction";
import AdminDashboard from "./views/adminDashboard";
import { GLOBALTYPES } from "./redux/actions/globalTypes";


function App() {
  const userId = localStorage.getItem("userid");
  const admin = localStorage.getItem("admin");
  console.log(userId);
  console.log(admin);
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

  // const { auth, status, modal, userType } = useSelector((state) => state);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshToken());

  //   const socket = io();
  //   dispatch({type: GLOBALTYPES.SOCKET, payload: socket })
  //   return () => socket.close()
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<RegisterForm />} />
        {/* <Route element={<MoviesCarousel />} path='/home' /> */}
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/home/*' element={<Main />} />
        {
          userId !== null
          ? admin !== null
            ? <Route path='/admin/*' element={<AdminDashboard />} />
            : <Route path='/home/*' element={<Main />} />
          : <Route path='/home/*' element={<Main />} /> 

        }
        

        {/* <Route
            exact
            path="/"
            component={
              userType === "user"
                ? auth.token
                  ? Main
                  : LoginForm
                : auth.token
                ? AdminDashboard
                : LoginForm
            }
          />

          {userType === "user" && (
            <>
              <Route exact path="/register" component={RegisterForm} />
              <div className="wrap_page">
                <PrivateRouter exact path="/:page" component={PageRender} />
                <PrivateRouter exact path="/:page/:id" component={PageRender} />
              </div>
            </>
          )} */}

      </Routes>
    </>
  );
}

export default App;
