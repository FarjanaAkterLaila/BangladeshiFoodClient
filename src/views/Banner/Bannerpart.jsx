import React from 'react';
import { Carousel } from 'react-bootstrap';

const Bannerpart = () => {
    return (
        <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75 mx-auto"
          src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption style={{top: '70% ' , transform: 'translateY(-50%)'} }>
          
          <h3 className='text-primary'>Todays' Special Offer</h3>
          <h1>Doudle Platter</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75 mx-auto"
          src="https://images.pexels.com/photos/2942319/pexels-photo-2942319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption style={{top: '70% ' , transform: 'translateY(-50%)'} }>
          <h3 className='text-primary'>Todays' Special Offer</h3>
          <h1 >25% Discount</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75 mx-auto"
          src="https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption style={{top: '70% ' , transform: 'translateY(-50%)'} }>
          <h3 className='text-primary'>Todays' Special Offer</h3>
          <h1>
           Buy 2 Platter, Get free 1 Full Platter
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    );
};

export default Bannerpart;