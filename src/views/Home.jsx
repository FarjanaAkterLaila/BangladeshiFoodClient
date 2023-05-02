import React, { useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import Cecfcard from './Card/Cecfcard';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    const [bl, setBlog] = useState([])
    const categorycards = useLoaderData();
    const handleShowDetails = (id)=>{
        const newBlog = [...bl, id];
        setBlog(newBlog);
    }
    console.log({categorycards}.chef_name);
    return (
        <div>
             <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75 mx-auto"
          src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption style={{top: '60% ' , transform: 'translateY(-50%)'} }>
          
          <h3 className='text-primary'>Todays' Special Offer</h3>
          <h1>Doudle Platter</h1>
          <h1>Order now if you want to avail the offer</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75 mx-auto"
          src="https://images.pexels.com/photos/2942319/pexels-photo-2942319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption style={{top: '60% ' , transform: 'translateY(-50%)'} }>
          <h3 className='text-primary'>Todays' Special Offer</h3>
          <h1 >25% Discount</h1>
          <h1>Order now if you want to avail the offer</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75 mx-auto"
          src="https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption style={{top: '60% ' , transform: 'translateY(-50%)'} }>
          <h3 className='text-primary'>Todays' Special Offer</h3>
          <h1>
           Buy 2 Platter, Get free 1 Full Platter
          </h1>
          <h1>Order now if you want to avail the offer</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            <h1 className='pt-5 text-center text-warning'>Top Chef</h1>
           
            <div className="row row-cols-1 row-cols-md-2 g-4 mx-3">
                        {
                            categorycards.map(job => (<Cecfcard
                                key={job.id}
                                job={job} 
                                handleShowDetails={handleShowDetails}/>)
                            )

                            // <p className='col-md-1 col-lg-6' key={job.id}>{job.job_title}</p>
                        }
                         
                    </div>
        </div>
    );
};

export default Home;