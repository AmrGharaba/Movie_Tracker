import React from 'react';
import Sidebar from "../components/Admin/sidebar/Sidebar";
import { Route, Routes } from 'react-router-dom';
import MovieList from '../components/Admin/MoviesList/MovieList';
import UserList from '../components/Admin/UsersList/UserList';
import CreateMovie from '../components/Admin/MoviesForm/CreateMovie';
import UpdateMovie from '../components/Admin/MoviesForm/UpdateMovie';


const AdminDashboard = () => {

  return (
    <div className='container'>
      <div className='row'>
        <div className='.col-lg-4'> 
          <Sidebar />
        </div>
        <div className=".col-lg-6" style={{ marginLeft: "100px" }}>
          <Routes>
          <Route path='/movies' element={ <MovieList /> } />
          <Route path='/users' element={ <UserList /> } />
          <Route path='/createMovie' element={ <CreateMovie /> } />
          <Route path='/movie/:id/edit' element={ <UpdateMovie /> } />
        </Routes>
        </div>
      </div>
    </div>
    
  );
}

export default AdminDashboard;
