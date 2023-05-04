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
import ErrorPage from "../ErrorPage";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader: ()=>fetch ('https://bd-foodi-place-server-farjanaakterlaila.vercel.app/checfs')
            },
            {
                path: '/Chefspage/:id',
                element:<PrivateRoute><Chefspage/></PrivateRoute>,
                loader: ({params}) =>fetch(`https://bd-foodi-place-server-farjanaakterlaila.vercel.app/checfs/${params.id}`)
              },
           
        ]
       
    },
    {
        path:'/',
        element: <Bloglayout/>,
        errorElement: <ErrorPage />,
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