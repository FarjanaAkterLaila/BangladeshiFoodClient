import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { VscHeart } from 'react-icons/vsc';
import { ToastContainer, toast } from 'react-toastify';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Chefspage = () => {


    const JobdetailId = useParams();
    let Jobdetail = {};
    const [job, setjob] = useState([]);
    

    useEffect(() => {
        fetch("https://bd-foodi-place-server-farjanaakterlaila.vercel.app/checfs")
            .then(res => res.json())
            .then(data => setjob(data))
    }, []);
    for (const jobid of job) {
        if (jobid._id == parseInt(JobdetailId.id)) {
            Jobdetail = jobid
        }
    }
    const [bl, setBlog] = useState([])
    const handtobookMark =(id)=>{

        let newCart = [];
       
        const exists = bl.find(pd => pd.id === id.id);

        if(exists){
        bl.length=bl.length-1
           newCart= [...bl, id]
            toast("You Have Already Bookmarked This Blog!");
            setBlog(newCart)
        }
        


            }
    return (
        <div>
            <h1 className='bg-light py-5' style={{ textAlign: 'center' }}>Chef Detail Page</h1>
            <div className='row mt-5'>

                <div className='col-sm-8 mx-auto '>
                    <div className='card border-1'>
                        <img src={Jobdetail.chef_picture} className="card-img-top " style={{ height: "400px", width: '100%' }} alt="..." />
                        <h5 className="card-title mx-3 mt-4 fs-4 fw-bold">Name:  <span className='fs-3 fw-normal'>{Jobdetail.chef_name}</span></h5>
                        <p className='fs-4 mx-3 fw-bold'>Description:  <span className='fs-5 fw-normal'>{Jobdetail.bio}</span></p>
                        <p className='fs-4 mx-3 fw-bold'>Likes:  <span className='fs-5 fw-normal'>{Jobdetail.likes}</span></p>
                        <p className='fs-4 mx-3 fw-bold'>Number of recipes:  <span className='fs-5 fw-normal'>{Jobdetail.number_of_recipes}</span></p>
                        <p className='fs-4 mx-3 fw-bold'>Years of experience:  <span className='fs-5 fw-normal'>{Jobdetail.years_of_experience} years</span></p>
                    </div>


                </div>

                <h1 className=' py-5' style={{ textAlign: 'center' }}>Top Three Recipes</h1>
               
                <div className='col-sm-4 mx-auto '>

<div className='card border-1'>
            <img src={Jobdetail.recipe_Img1} className="card-img-top " style={{ height: "400px", width: '100%' }} alt="..." />
            <div className="card-body w-100 h-100">
                <h5 className="card-title mx-3 mt-4 fs-4 fw-bold">Name:  <span className='fs-3 fw-normal'>{Jobdetail.recipe_name1}</span></h5>
                <p className='fs-4 mx-3 fw-bold'>Ingredients:  <span className='fs-5 fw-normal'>{Jobdetail.ingredients1}</span></p>
                <p className='fs-4 mx-3 fw-bold'> cooking method:  <span className='fs-5 fw-normal'>{Jobdetail.cooking_method1}</span></p>
                <hr />
                <div className='d-flex justify-content-between'>
                    <div><VscHeart onClick={handtobookMark}
                    /></div>
                     <div className='d-flex'>
                                <Rating
                        style={{ maxWidth: 100 }}
                        value={Math.round(Jobdetail.rating1 || 0)} readOnly />
                    <div className='mx-2'>{Jobdetail.rating1}</div></div>

                </div>
            </div>
        </div>
</div>
                
                <div className='col-sm-4 mx-auto '>

                    <div className='card border-1'>
                        <img src={Jobdetail.recipe_Img2} className="card-img-top " style={{ height: "400px", width: '100%' }} alt="..." />
                        <div className="card-body w-100 h-100">
                            <h5 className="card-title mx-3 mt-4 fs-4 fw-bold">Name:  <span className='fs-3 fw-normal'>{Jobdetail.recipe_name2}</span></h5>
                            <p className='fs-4 mx-3 fw-bold'>Ingredients:  <span className='fs-5 fw-normal'>{Jobdetail.ingredients2}</span></p>
                            <p className='fs-4 mx-3 fw-bold'> cooking method:  <span className='fs-5 fw-normal'>{Jobdetail.cooking_method2}</span></p>
                            <hr />
                            <div className='d-flex justify-content-between'>
                            <div><VscHeart onClick={handtobookMark}/></div>
                                <div className='d-flex'>
                                <Rating
                        style={{ maxWidth: 100 }}
                        value={Math.round(Jobdetail.rating2 || 0)} readOnly />
                    <div className='mx-2'>{Jobdetail.rating2}</div></div>

                            </div>
                        </div>
                    </div>


                </div>
                <div className='col-sm-4 mx-auto '>

                    <div className='card border-1'>
                        <img src={Jobdetail.recipe_Img3} className="card-img-top " style={{ height: "400px", width: '100%' }} alt="..." />
                        <div className="card-body w-100 h-100">
                            <h5 className="card-title mx-3 mt-4 fs-4 fw-bold">Name:  <span className='fs-3 fw-normal'>{Jobdetail.recipe_name3}</span></h5>
                            <p className='fs-4 mx-3 fw-bold'>Ingredients:  <span className='fs-5 fw-normal'>{Jobdetail.ingredients3}</span></p>
                            <p className='fs-4 mx-3 fw-bold'> cooking method:  <span className='fs-5 fw-normal'>{Jobdetail.cooking_method3}</span></p>
                            <hr />
                            <div className='d-flex justify-content-between'>
                            <div><VscHeart onClick={handtobookMark}
        /></div>
                                 <div className='d-flex'>
                                <Rating
                        style={{ maxWidth: 100 }}
                        value={Math.round(Jobdetail.rating3 || 0)} readOnly />
                    <div className='mx-2'>{Jobdetail.rating3}</div></div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
            </div>
            );
};

            export default Chefspage;