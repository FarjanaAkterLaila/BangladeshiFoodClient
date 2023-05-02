import React from 'react';
import Header from '../views/shared/Header/Header';
import Footer from '../views/shared/Footer/Footer';
import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import { Outlet } from 'react-router-dom';

const Bloglayout = () => {
    return (
        <div>
            <Header></Header>
           
            <Outlet></Outlet>
            <div style={{bottom:'50%' , transform: 'translateY(100%)'}}><Footer></Footer></div>
            
        </div>
    );
};

export default Bloglayout;