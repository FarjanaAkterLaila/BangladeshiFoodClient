import React from 'react';
import Header from '../views/shared/Header/Header';
import Footer from '../views/shared/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
           
           <Outlet></Outlet>
           <ToastContainer></ToastContainer> 
            <Footer></Footer>
        </div>
    );
};

export default Main;