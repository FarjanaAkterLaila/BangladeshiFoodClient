import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import { VscHeart } from 'react-icons/vsc';
import { ToastContainer, toast } from 'react-toastify';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Recipes from '../recipes/Recipes';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Chefspage = () => {
    const Jobdetail = useLoaderData();
console.log(Jobdetail)
const {_id, chef_picture, chef_name, years_of_experience,number_of_recipes,likes,bio,recipes} = Jobdetail;
const [bl, setBlog] = useState([false])



    return (
        <div>
            <h1 className='bg-light py-5' style={{ textAlign: 'center' }}>Chef Detail Page</h1>
            <div className='row mt-5'>

                <div className='col-sm-8 mx-auto '>
                    <div className='card border-1'>
                   
                        <LazyLoadImage effect='blur' src={Jobdetail.chef_picture} className="card-img-top " style={{ height: "400px", width: '100%' }} alt="..." />
                      
                        <h5 className="card-title mx-3 mt-4 fs-4 fw-bold">Name:  <span className='fs-3 fw-normal'>{Jobdetail.chef_name}</span></h5>
                        <p className='fs-4 mx-3 fw-bold'>Description:  <span className='fs-5 fw-normal'>{Jobdetail.bio}</span></p>
                        <p className='fs-4 mx-3 fw-bold'>Likes:  <span className='fs-5 fw-normal'>{Jobdetail.likes}</span></p>
                        <p className='fs-4 mx-3 fw-bold'>Number of recipes:  <span className='fs-5 fw-normal'>{Jobdetail.number_of_recipes}</span></p>
                        <p className='fs-4 mx-3 fw-bold'>Years of experience:  <span className='fs-5 fw-normal'>{Jobdetail.years_of_experience} years</span></p>
                    </div>


                </div>

                <h1 className=' py-5' style={{ textAlign: 'center' }}>Top Three Recipes</h1>
               
               
{
    recipes.map((recipes)=>(
        <Recipes key ={recipes.recipe_ID}
        recipes={recipes}
        // handtobookMark={handtobookMark}
        ></Recipes>
    ))
}
              
            </div>
            </div>
            );
};

            export default Chefspage;