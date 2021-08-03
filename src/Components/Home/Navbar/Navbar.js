import React, { useContext, useState } from 'react';
import '../Navbar/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPhoneAlt, faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import LoginPopup from '../../LoginPopup/LoginPopup';
import { UserContext } from '../../../App';


const Navbar = () => {
        const [loggedInUser, setLoggedInUser] = useContext(UserContext)
        const [isNavCollapsed, setIsNavCollapsed] = useState(true);
        const handleUser = () => {
                window.location.assign('/user')
        }
        const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

        return (

                <div className='font nav-bar'>
                        <nav class="navbar container-custom m-auto navbar-expand-lg navbar-light ">
                                <a class="navbar-brand text-info font-weight-bolder" href="/">
                                        <a href="/" className='logo'>shadaman</a>
                                        {/* <img src={} alt="" className='w-100' /> */}
                                </a>
                                <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                                        <span class="navbar-toggler-icon"></span>
                                </button>
                                <ul class="navbar-nav ms-auto nav-mid">
                                        <div className="d-flex">
                                                {/* <button className=''>Loan</button>
                                                <button className=''>Offers</button>
                                                <button className=''>Bid</button> */}
                                                <a href="#" ><h6 className='active'>All Adds</h6></a>
                                                <a href="#"><h6 >Loan</h6></a>
                                                <a href="#"><h6 >Offer</h6></a>
                                                <a href="#"><h6 >Bid</h6></a>
                                        </div>

                                </ul>
                                <div className="navbar ms-auto nav-end ">
                                        <ul className='d-flex'>
                                                <li><button className=''>Bangla</button></li>
                                                <li><button className=''>Inbox</button></li>
                                                <span className='msg_number'>29</span>
                                                <li><button className='active-post'><b>Post Ads</b></button></li>
                                                
                                                <div className="nav-end-icons">
                                                        <li ><FontAwesomeIcon icon={faShoppingCart} className='navbar-icon' /></li>
                                                        <li><FontAwesomeIcon icon={faPhoneAlt} className='navbar-icon' /></li>
                                                        {

                                                                loggedInUser.email ? <li><FontAwesomeIcon icon={faUserAlt} className='navbar-icon' onClick={handleUser} /></li> :
                                                                        <LoginPopup />
                                                        }
                                                </div>
                                        </ul>
                                </div>

                        </nav>
                </div>


        );
};

export default Navbar;
