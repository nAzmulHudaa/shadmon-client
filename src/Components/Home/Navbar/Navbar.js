import React from 'react';
import '../Navbar/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPhoneAlt, faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import LoginPopup from '../../LoginPopup/LoginPopup';


const Navbar = () => {


        return (
                <div className="font container-fluid  nav-bar">
                        <div className="navbar container navbar-expand-lg navbar-light d-flex">
                                <div className="nav-contents">
                                        <div className="logo-div">
                                                <h3 className="logo" herf="/">shadamon</h3>
                                        </div>
                                </div>
                                <div className="nav-mobile">
                                        
                                                <li ><FontAwesomeIcon icon={faShoppingCart} className='navbar-icon' /></li>
                                                <li><FontAwesomeIcon icon={faPhoneAlt} className='navbar-icon' /></li>
                                                <li><FontAwesomeIcon icon={faUserAlt} className='navbar-icon' /></li>
                                                <li><FontAwesomeIcon icon={faCaretDown} className='navbar-icon' /></li>
                                                <LoginPopup />
                                </div>

                                <div className='nav-desktop ms-lg-auto' >

                                        <div className="nav-items nav-mid me-3 ">
                                                <ul className='nav-mid-ul'>
                                                        <li><button className='active'> <b>All Ads</b> </button></li>
                                                        <li><button className=''>Loan</button></li>
                                                        <li><button className=''>Offers</button></li>
                                                        <li><button className=''>Bid</button></li>
                                                        <LoginPopup />
                                                </ul>
                                        </div>
                                        <div className="nav-items nav-end ms-4">
                                                <ul className='nav-end-ul'>
                                                        <li><button className='active-post'><b>Post Ads</b></button></li>
                                                        <li><button className=''>Inbox</button></li>
                                                        <li><button className=''>Bangla</button></li>
                                                        <div className="nav-end-icons">
                                                                <li ><FontAwesomeIcon icon={faShoppingCart} className='navbar-icon' /></li>
                                                                <li><FontAwesomeIcon icon={faPhoneAlt} className='navbar-icon' /></li>
                                                                <li><FontAwesomeIcon icon={faUserAlt} className='navbar-icon' /></li>
                                                                <li><FontAwesomeIcon icon={faCaretDown} className='navbar-icon' /></li>
                                                        </div>
                                                </ul>
                                        </div>
                                </div>
                        </div>

                </div >
        );
};

export default Navbar;