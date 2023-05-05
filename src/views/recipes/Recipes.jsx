import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { VscHeart } from 'react-icons/vsc';
import { ToastContainer, toast } from 'react-toastify';
const Recipes = (props) => {
    console.log(props);
    const {
        recipe_ID,

        recipe_Img,
        recipe_name,
        ingredients,
        cooking_method,
        rating,

    } = props.recipes;
    // const handtobookMark = props.handtobookMark;
    const [isFavorite, setIsFavorite] = useState(false);

  const handtobookMark = () => {
    setIsFavorite(true);
    toast('Recipe added to favorites!');
  };

    return (
        <div className='col-sm-4 mx-auto'  >
            

                <div className='card border-1'>
                    <img src={recipe_Img} className="card-img-top " style={{ height: "400px", width: '100%' }} alt="..." />
                    <div className="card-body w-100 h-100">
                        <h5 className="card-title mx-3 mt-4 fs-4 fw-bold">Name:  <span className='fs-3 fw-normal'>{recipe_name}</span></h5>
                        <p className='fs-4 mx-3 fw-bold'>Ingredients:  <span className='fs-5 fw-normal'>{ingredients}</span></p>
                        <p className='fs-4 mx-3 fw-bold'> cooking method:  <span className='fs-5 fw-normal'>{cooking_method}</span></p>
                        <hr/>
                        <div className='d-flex justify-content-between'>
                            <div>
                            {/* <p className='fs-5'>Favorite<VscHeart onClick={() => ( handtobookMark(props.recipes))} /></p> */}
                            <button className='border border-0'  onClick={handtobookMark} disabled={isFavorite} style={{fontSize:'1.5rem'}}>
        {isFavorite ? <VscHeart/> : <VscHeart/>}
      </button>
                            
                            </div>
                            <div className='d-flex'>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={Math.round(rating || 0)} readOnly />
                                <div className='mx-2'>{rating}</div></div>

                        </div>
                    </div>
                </div>
            </div>
       

                
               
           
    );
};

export default Recipes;