import React from 'react';
import Header from '../views/shared/Header/Header';
import Footer from '../views/shared/Footer/Footer';

import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
           
           <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;