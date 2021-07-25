/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import './NavBottom.css';

const NavBottom = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    
    return (
       <div>
           {
               loggedInUser.email?<div className="d-flex align-items-center font navBottomContainer">
               <div className="navItem d-flex m-auto ">
                   <p className="me-4">All Product</p>
                   <p className="me-4">All Order</p>
                   <p className="me-4">My Page</p>
                   <p className="me-4">Promote</p>
               </div>
               </div>:null
           }
           
       </div>
    );
};

export default NavBottom;


