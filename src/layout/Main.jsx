import React from 'react';
import Header from '../views/shared/Header/Header';
import Footer from '../views/shared/Footer/Footer';

import Bannerpart from '../views/Banner/Bannerpart';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Bannerpart></Bannerpart>
            <Footer></Footer>
        </div>
    );
};

export default Main;