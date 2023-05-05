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
            <Footer></Footer>
            
        </div>
    );
};

export default Bloglayout;