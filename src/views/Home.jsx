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
          className="d-block w-100 h-100 mx-auto"
          src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption style={{top: '50% ' , transform: 'translateY(-50%)'} }>
          
          <h3 className='text-primary'>Todays' Special Offer</h3>
          <h1>Doudle Platter</h1>
          <h1>Order now if you want to avail the offer</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 mx-auto"
          src="https://images.pexels.com/photos/2942319/pexels-photo-2942319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption style={{top: '50% ' , transform: 'translateY(-50%)'} }>
          <h3 className='text-primary'>Todays' Special Offer</h3>
          <h1 >25% Discount</h1>
          <h1>Order now if you want to avail the offer</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 mx-auto"
          src="https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption style={{top: '50% ' , transform: 'translateY(-50%)'} }>
          <h3 className='text-primary'>Todays' Special Offer</h3>
          <h1>
           Buy 2 Platter, Get free 1 Full Platter
          </h1>
          <h2>Order now if you want to avail the offer</h2>
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

                    <h1 className='pt-5 text-center text-warning'>Customer Review</h1>
                    
      <div class="row row-cols-1 row-cols-md-3 g-4 mx-3">
        <div class="col">
          <div class="card border-0  text-center h-100">
            <img src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?w=2000" class="w-25 mx-auto mt-3 card-img-top" alt="..."/>
            <div class="card-body">

              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
             
              <h5 class="text-primary">Nazmin</h5>
              <p>
               39/85,Dhaka
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-0 text-center h-100">
            <img src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=" class="w-25 mx-auto mt-3 card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
              
              <h5 class="text-primary">Ali</h5>
              <p>
                CPZ,Chittagong
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-0  text-center h-100">
            <img src="https://static3.bigstockphoto.com/2/9/2/large1500/292115365.jpg" class="w-25 mx-auto mt-3 card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
             
              <h5 class="text-primary">Mile</h5>
              <p>
               Sylte
              </p>
            </div>
          </div>
        </div>

      </div>
      <h1 className='pt-5 text-center text-warning'>Our Place</h1>
      <div class="row row-cols-1 row-cols-md-2 mt-5">
    <div class="col text-center">
    <img class="w-50"src="https://media.istockphoto.com/id/1428594094/photo/empty-coffee-shop-interior-with-wooden-tables-coffee-maker-pastries-and-pendant-lights.jpg?b=1&s=170667a&w=0&k=20&c=TTATB_esYszT-yzqQixyDBJeZQfcXjHwDs6-PhnMDcE=" alt=""/>
  </div>
  <div class="col">
    <h4>Your visit to our restaurant will make us happy.Here is the arrangement of everything for you.And along with all our famous chefs with thir magical cooking.</h4>

  </div>
</div>
        </div>
    );
};

export default Home;