import React, { useEffect, useState } from 'react';
import { Card ,Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Cecfcard = ({ job }) => {
    const {id} = job;
    return (
        <div>
           
           
           <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{job.chef_name}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
     
   
        </div>
    );
};

export default Cecfcard;