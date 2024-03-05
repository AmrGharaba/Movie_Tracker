import React, { useEffect, useState } from 'react';
import Sidebar from "../components/Admin/sidebar/Sidebar";
import { Route, Routes } from 'react-router-dom';
import MovieList from '../components/Admin/MoviesList/MovieList';
import UserList from '../components/Admin/UsersList/UserList';
import CreateMovie from '../components/Admin/MoviesForm/CreateMovie';
import UpdateMovie from '../components/Admin/MoviesForm/UpdateMovie';
import BarChart from '../components/Admin/Charts/BarChart';
import PolarAreaChart from '../components/Admin/Charts/PolarAreaChart';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const AdminDashboard = () => {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  const admin = localStorage.getItem("admin");
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate(-1)
    }
  },[])

  return admin && (
    <div className='container'>
      <div className='row'>
        <div className='.col-lg-4'>
          <Sidebar />
        </div>
        <div className=".col-lg-6" style={{ marginLeft: "100px" }}>
          <Routes>
            <Route path='/movies' element={<MovieList />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/createMovie' element={<CreateMovie />} />
            <Route path='/chart/1' element={<BarChart />} />
            <Route path='/chart/2' element={<PolarAreaChart />} />
            <Route path='/movie/:id/edit' element={<UpdateMovie />} />
          </Routes>
        </div>
      </div>
    </div>

  );
}

export default AdminDashboard;
