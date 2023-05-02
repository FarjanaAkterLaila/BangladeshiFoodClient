import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home";

import Header from "../views/shared/Header/Header";
import Main from "../layout/Main";
import Blog from "../views/Blog/Blog";
import Bloglayout from "../layout/Bloglayout";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import Card from "../views/Card/Cecfcard";
import Chefspage from "../views/Chefspage/Chefspage";
const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader: ()=>fetch ('https://bd-foodi-place-server-farjanaakterlaila.vercel.app/checfs')
            },
            {
                path: '/Chefspage/:id',
                element:<Chefspage/>
                
              },
           
        ]
       
    },
    {
        path:'/',
        element: <Bloglayout/>,
        children:[
            
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/reg',
                element:<Register/>
            }
        ]
    }
])
export default router;