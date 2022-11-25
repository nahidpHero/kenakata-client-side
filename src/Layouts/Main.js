import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Navabr from '../pages/Shared/Navabr';



const Main = () => {
    return (
        <div>
            <Navabr></Navabr>
            <Outlet></Outlet>
            <Footer></Footer>            
        </div>
    );
};

export default Main;