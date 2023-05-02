import React, { useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import Cecfcard from './Card/Cecfcard';

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