import React from 'react';
import { NavLink } from 'react-router-dom';
import './Active.css'
const Active = ({to, children}) => {
    return (
        <div>
            <NavLink
            to={to}
            className={({ isActive }) => isActive ? "active fs-5" : " nav-link active text-decoration-none px-3 fs-5"}
        >
            {children}
           
        </NavLink>
        </div>
    );
};

export default Active;