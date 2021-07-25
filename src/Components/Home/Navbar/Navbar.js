import React, { useContext } from 'react';
import '../Navbar/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPhoneAlt, faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import LoginPopup from '../../LoginPopup/LoginPopup';
import { UserContext } from '../../../App';


const Navbar = () => {
        const [loggedInUser, setLoggedInUser] = useContext(UserContext)


        return (
                <div className="font  nav-bar">
                        <div className="navbar container-custom m-auto navbar-expand-lg navbar-light d-flex">
                                <div className="nav-contents">
                                        <div className="logo-div">
                                                <a href="/" className='logo'>shadaman</a>
                                        </div>
                                </div>


                                <div className="nav-mobile">

                                        <li ><FontAwesomeIcon icon={faShoppingCart} className='navbar-icon' /></li>
                                        <li><FontAwesomeIcon icon={faPhoneAlt} className='navbar-icon' /></li>
                                        <LoginPopup />
                                        <li><FontAwesomeIcon icon={faCaretDown} className='navbar-icon' /></li>
                                        <LoginPopup />
                                </div>

                                <div className='nav-desktop ms-md-auto '>

                                        <div className="nav-items nav-mid me-3 ">
                                                <ul className='nav-mid-ul me-auto'>
                                                        <li><button className=''>Loan</button></li>
                                                        <li><button className=''>Offers</button></li>
                                                        <li><button className=''>Bid</button></li>
                                                </ul>
                                        </div>
                                        <div className="nav-items nav-end justify-content-center ms-4">
                                                <ul className='nav-end-ul'>
                                                        <li><button className='active-post'><b>Post Ads</b></button></li>
                                                        <li><button className=''>Inbox</button></li>
                                                        <li><button className=''>Bangla</button></li>
                                                        <div className="nav-end-icons">
                                                                <li ><FontAwesomeIcon icon={faShoppingCart} className='navbar-icon' /></li>
                                                                <li><FontAwesomeIcon icon={faPhoneAlt} className='navbar-icon' /></li>
                                                                {
                                                                loggedInUser.email?                                                                <div class="dropdown" style={{position:'relative',bottom:'3px'}}>
                                                                <button class="btn btn-light outLined dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <FontAwesomeIcon icon={faUserAlt} className='navbar-icon' />
                                                                </button>
                                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="/user">Go to your profile</a></li>
                                                                        <li><a class="dropdown-item" href="/">Log out</a></li>
                                                                </ul>
                                                        </div>:<LoginPopup/>
                                                                }


                                                                {/* <li><FontAwesomeIcon icon={faUserAlt} onClick={handleOpen} className='navbar-icon' /></li> */}

                                                        </div>
                                                </ul>
                                        </div>
                                </div>
                        </div>

                </div >

        );
};

export default Navbar;
