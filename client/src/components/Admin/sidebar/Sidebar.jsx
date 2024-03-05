import { Link } from 'react-router-dom'
import "./Sidebar.css";
import React, { useState } from "react";
import axios from 'axios';


const Sidebar = () => {
    //const dispatch = useDispatch();
    const [adminMenu, setAdminMenu] = useState(1);

    const LogoutHandle = () => {
      axios.get('http://localhost:8000/api/users/logout')
          .then(res => {
              localStorage.removeItem('jwt');
              localStorage.removeItem("userid");
              localStorage.removeItem('loggeduser');
              localStorage.removeItem("admin");
          })
          .catch(err => console.log(err))
  }


  return (
    <>

      <div className="sidebar_responsive" id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <h1>Movie Tracker</h1>
          </div>
          <i className="fa fa-times" id="sidebarIcon" aria-hidden="true"></i>
        </div>

        <div className="sidebar__menu">
          <h2>ADMIN CONTROL</h2>
          <div
            className={`sidebar__link ${adminMenu === 1 && "active_menu_link"}`}
            onClick={() => setAdminMenu(1)}
          >
            <i className="fa fa-th"></i>
            <Link to="/home">Home</Link>
          </div>
          <div
            className={`sidebar__link ${adminMenu === 2 && "active_menu_link"}`}
            onClick={() => setAdminMenu(1)}
          >
            <i className="fa fa-th"></i>
            <Link to="/admin/movies">Movies Management</Link>
          </div>
          <div
            className={`sidebar__link ${adminMenu === 3 && "active_menu_link"}`}
            onClick={() => setAdminMenu(2)}
          >
            <i className="fa fa-lock" aria-hidden="true"></i>
            <Link to="/admin/createMovie">Add Movie</Link>
          </div>
          <div
            className={`sidebar__link ${adminMenu === 4 && "active_menu_link"}`}
            onClick={() => setAdminMenu(3)}
          >
            <i className="fa fa-ban"></i>
            <Link to="/admin/users">Users Management</Link>
          </div>
          <div className="sidebar__logout">
            <i className="fa fa-power-off"></i>
            <Link to="/" onClick={LogoutHandle}>
              Log out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
