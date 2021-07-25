import React from 'react';
import '../Navbar/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPhoneAlt, faShoppingCart, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import LoginPopup from '../../LoginPopup/LoginPopup';


const Navbar = () => {
        return (
                <div className="font container-fluid nav-bar">
                        <div className="navbar d-flex">
                                <div className="nav-contents">
                                        <div className="logo-div">
                                                <h3 className="logo">shadamon</h3>
                                        </div>
                                </div>
                                <div className="nav-items nav-mid">
                                        <ul className='d-flex'>
                                                <li><button className='active'> <b>All Ads</b> </button></li>
                                                <li><button className=''>Loan</button></li>
                                                <li><button className=''>Offers</button></li>
                                                <li><button className=''>Bid</button></li>
                                                
                                        </ul>
                                </div>
                                <div className="nav-items nav-end">
                                        <ul className='d-flex'>
                                                <li><button className='active-post'><b>Post Ads</b></button></li>
                                                <li><button className=''>Inbox</button></li>
                                                <li><button className=''>Bangla</button></li>
                                                <li ><FontAwesomeIcon icon={faShoppingCart} className='navbar-icon'  /></li>
                                                <li><FontAwesomeIcon icon={faPhoneAlt} className='navbar-icon' /></li>
                                                <LoginPopup />
                                                <li><FontAwesomeIcon icon={faCaretDown} className='navbar-icon' /></li>
                                        </ul>
                                </div>
                        </div>
                </div>
        );
};

export default Navbar;