import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { VscHeart } from 'react-icons/vsc';
import { ToastContainer, toast } from 'react-toastify';
const Chefspage = () => {


    const JobdetailId = useParams();
    let Jobdetail = {};
    const [job, setjob] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

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
    const handleShowDetails = (id) => {
        console.log(id);

    }

    const handleFavoriteClick =(id)=>{
        setIsFavorite(true);
        // Show toast message
        toast('This recipe is now your favorite!');

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
                                <div><VscHeart onClick={handleFavoriteClick}
        disabled={}/></div>
                                <div><p className='text-primary'>{Jobdetail.rating1} </p></div>

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
                            <div><VscHeart onClick={handleFavoriteClick}
        disabled={isFavorite}/>{isFavorite ? 'Favorited!' : ''}</div>
                                <div><p className='text-primary'>{Jobdetail.rating2} </p></div>

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
                            <div><VscHeart onClick={handleFavoriteClick}
        disabled={isFavorite}/>{isFavorite ? 'Favorited!' : ''}</div>
                                <div><p className='text-primary'>{Jobdetail.rating3} </p></div>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Chefspage;