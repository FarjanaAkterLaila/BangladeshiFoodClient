import React, { useEffect, useState } from 'react';
import { Button, Card ,Col, Row } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { BiLike } from "react-icons/bi";
import { FaArrowRight } from 'react-icons/fa';
const Cecfcard = ({ job }) => {
  const navigate = useNavigate()
    const {_id} = job;
    console.log(job._id);
    return (
        <div>
           
           
           <div className="col">
    <div className="card">
      <img src={job.chef_picture} className="card-img-top w-100" style={{height:"400px"}}alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{job.chef_name}</h5>
        <p className="card-text">Years of experience: {job.years_of_experience} years</p>
        <p className="card-text">Numbers of recipes: {job.number_of_recipes}</p>
        <hr/>
        <div className='d-flex justify-content-between'>
        <div><Button onClick={()=>navigate(`/Chefspage/${_id}`)}>View Recipes Button <FaArrowRight/></Button></div>
          <div><p className='text-primary'><BiLike style={{fontSize:'1.5rem'}} className='mx-3 text-primary'/>{job.likes} </p></div>
          
        </div>
      </div>
    </div>
  </div>
     
   
        </div>
    );
};

export default Cecfcard;