import React from 'react';
import { VscHeart } from 'react-icons/vsc';

const Recipes = (props) => {
    const {
        id,
        chef_picture,
        chef_name,
        recipe_Img1,
        recipe_name1,
        ingredients1,
        cooking_method1,
        rating1,
        recipe_Img2,
        recipe_name2,
        ingredients2,
        cooking_method2,
        rating2,
        recipe_Img3,
        recipe_name3,
        ingredients3,
        cooking_method3,
        rating3,
    } = props.product;
    const handleAddToCart = props.handleAddToCart;
    const handleAddToBlog = props.handleAddToBlog;
    const handtobookMark = props.handtobookMark;
    return (
        <div>
             <div className='col-sm-4 mx-auto '>

<div className='card border-1'>
            <img src={recipe_Img1} className="card-img-top " style={{ height: "400px", width: '100%' }} alt="..." />
            <div className="card-body w-100 h-100">
                <h5 className="card-title mx-3 mt-4 fs-4 fw-bold">Name:  <span className='fs-3 fw-normal'>{recipe_name1}</span></h5>
                <p className='fs-4 mx-3 fw-bold'>Ingredients:  <span className='fs-5 fw-normal'>{ingredients1}</span></p>
                <p className='fs-4 mx-3 fw-bold'> cooking method:  <span className='fs-5 fw-normal'>{cooking_method1}</span></p>
                <hr />
                <div className='d-flex justify-content-between'>
                    <div><VscHeart onClick={handtobookMark}
                    /></div>
                    <div><p className='text-primary'>{rating1} </p></div>

                </div>
            </div>
        </div>
</div>
                
                {/* <div className='col-sm-4 mx-auto '>

                    <div className='card border-1'>
                        <img src={Jobdetail.recipe_Img2} className="card-img-top " style={{ height: "400px", width: '100%' }} alt="..." />
                        <div className="card-body w-100 h-100">
                            <h5 className="card-title mx-3 mt-4 fs-4 fw-bold">Name:  <span className='fs-3 fw-normal'>{Jobdetail.recipe_name2}</span></h5>
                            <p className='fs-4 mx-3 fw-bold'>Ingredients:  <span className='fs-5 fw-normal'>{Jobdetail.ingredients2}</span></p>
                            <p className='fs-4 mx-3 fw-bold'> cooking method:  <span className='fs-5 fw-normal'>{Jobdetail.cooking_method2}</span></p>
                            <hr />
                            <div className='d-flex justify-content-between'>
                            <div><VscHeart onClick={handtobookMark}/></div>
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
                            <div><VscHeart onClick={handtobookMark}
        /></div>
                                <div><p className='text-primary'>{Jobdetail.rating3} </p></div>

                            </div>
                        </div>
                    </div>


                </div> */}
</div>
           
    );
};

export default Recipes;