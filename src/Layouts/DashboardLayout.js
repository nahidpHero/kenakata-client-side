import React from 'react';
import { Outlet } from 'react-router-dom';
import Navabr from '../pages/Shared/Navabr';

const DashboardLayout = () => {
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
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>          
        </div>
    );
};

export default DashboardLayout;