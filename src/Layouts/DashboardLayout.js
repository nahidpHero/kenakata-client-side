import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import Navabr from '../pages/Shared/Navabr';
import { AuthContext } from '../provaider/AuthProvaider';

const DashboardLayout = () => {
  const {user}=useContext(AuthContext)

    return (
        <div>
            <Navabr></Navabr>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="p-4 menu w-80 bg-base-100 text-base-content"> 
      <li><Link to='/dashbord'>My Products</Link></li>
      {
       
        <li><Link to='/dashbord/allusers'>All Users</Link></li>
      
      }
    </ul>
  
  </div>
</div>          
        </div>
    );
};

export default DashboardLayout;