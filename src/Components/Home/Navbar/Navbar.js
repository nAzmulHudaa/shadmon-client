import React, { useContext, useState } from 'react';
import '../Navbar/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPhoneAlt, faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import LoginPopup from '../../LoginPopup/LoginPopup';
import { UserContext } from '../../../App';


const Navbar = () => {
        const [loggedInUser, setLoggedInUser] = useContext(UserContext)
        const [isNavCollapsed, setIsNavCollapsed] = useState(true);

        const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

        return (

                <div className='font nav-bar'>
                        <nav class="navbar container-custom m-auto navbar-expand-lg navbar-light ">
                                <a class="navbar-brand text-info font-weight-bolder" href="/">
                                        <a href="/" className='logo'>Shadman</a>
                                        {/* <img src={} alt="" className='w-100' /> */}
                                </a>
                                <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                                        <span class="navbar-toggler-icon"></span>
                                </button>
                                <ul class="navbar-nav ms-auto nav-mid">
                                        <div className="nav-mid-btn">
                                                <button className=''>Loan</button>
                                                <button className=''>Offers</button>
                                                <button className=''>Bid</button>
                                        </div>

                                </ul>
                                <div className="navbar ms-auto nav-end ">
                                        <ul className='d-flex'>
                                                <li><button className='active-post'><b>Post Ads</b></button></li>
                                                <li><button className=''>Inbox</button></li>
                                                <li><button className=''>Bangla</button></li>
                                                <div className="nav-end-icons">
                                                        <li ><FontAwesomeIcon icon={faShoppingCart} className='navbar-icon' /></li>
                                                        <li><FontAwesomeIcon icon={faPhoneAlt} className='navbar-icon' /></li>
                                                        {
                                                                loggedInUser.email ? <div class="dropdown" style={{ position: 'relative', bottom: '3px' }}>
                                                                        <button class="btn ms-2 btn-light outLined dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <FontAwesomeIcon icon={faUserAlt} className='navbar-icon' />
                                                                        </button>
                                                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                                <li><a class="dropdown-item mt-1 mb-2" href="/user"> profile</a></li>
                                                                                <li><a class="dropdown-item mt-2" href="/">Log out</a></li>
                                                                        </ul>
                                                                </div> : <LoginPopup />
                                                        }
                                                </div>
                                        </ul>
                                </div>

                        </nav>
                </div>

                // test
                // <div className="font  nav-bar">
                //         <div className="navbar container-custom m-auto navbar-expand-lg navbar-light d-flex">
                //                 <div className="nav-contents">
                //                         <div className="logo-div">
                //                                 <a href="/" className='logo'>shadaman</a>
                //                         </div>
                //                 </div>


                //                 <div className="nav-mobile">

                //                         <li ><FontAwesomeIcon icon={faShoppingCart} className='navbar-icon' /></li>
                //                         <li><FontAwesomeIcon icon={faPhoneAlt} className='navbar-icon' /></li>
                //                         <LoginPopup />
                //                         <li><FontAwesomeIcon icon={faCaretDown} className='navbar-icon' /></li>
                //                         <LoginPopup />
                //                 </div>

                //                 <div className='nav-desktop ms-md-auto '>

                //                         <div className="nav-items nav-mid me-3 ">
                //                                 <ul className='nav-mid-ul me-auto'>
                //                                         <li><button className=''>Loan</button></li>
                //                                         <li><button className=''>Offers</button></li>
                //                                         <li><button className=''>Bid</button></li>
                //                                 </ul>
                //                         </div>
                //                         <div className="nav-items nav-end justify-content-center ms-4">
                //                                 <ul className='nav-end-ul'>
                //                                         <li><button className='active-post'><b>Post Ads</b></button></li>
                //                                         <li><button className=''>Inbox</button></li>
                //                                         <li><button className=''>Bangla</button></li>
                //                                         <div className="nav-end-icons">
                //                                                 <li ><FontAwesomeIcon icon={faShoppingCart} className='navbar-icon' /></li>
                //                                                 <li><FontAwesomeIcon icon={faPhoneAlt} className='navbar-icon' /></li>
                //                                                 {
                //                                                 loggedInUser.email?                                                                <div class="dropdown" style={{position:'relative',bottom:'3px'}}>
                //                                                 <button class="btn ms-2 btn-light outLined dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                //                                                         <FontAwesomeIcon icon={faUserAlt} className='navbar-icon' />
                //                                                 </button>
                //                                                 <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                //                                                         <li><a class="dropdown-item mt-1 mb-2" href="/user"> profile</a></li>
                //                                                         <li><a class="dropdown-item mt-2" href="/">Log out</a></li>
                //                                                 </ul>
                //                                         </div>:<LoginPopup/>
                //                                                 }




                //                                         </div>
                //                                 </ul>
                //                         </div>
                //                 </div>
                //         </div>

                // </div > */}



                // test__________

        );
};

export default Navbar;
