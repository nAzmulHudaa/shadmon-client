import { faBookmark, faMapMarkerAlt, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Hero.css'
import hero from '../../../images/hero.jpg'


const Hero = () => {
    return (
        // <div className="font hero-sec">
        //     <div className="d-flex justify-content-center  ">
        //         <Sidebar />
        //         <div className="w-75 row justify-content-center">
        //             <div className="col-md-7 col-sm-6 col-xs-6" style={{ height: '0px' }}>
        //                 <div className="hero-icons d-flex mt-md-1" style={{ cursor: 'pointer' }}>
        //                     <div className="d-flex ps-3 pt-2 pe-5 " style={{ borderRight: '1px solid #6C757D' }}>
        //                         <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#6C757D", fontSize: '20px' }} className='me-md-2 me-2 mt-1' />
        //                         <h5 style={{ color: '#6C757D' }} className="ms-md-1">Location</h5>
        //                     </div>
        //                     <div className="d-flex ms-4 ps-3 pt-2 pe-5 " style={{ borderRight: '1px solid #6C757D' }}>
        //                         <FontAwesomeIcon icon={faBookmark} style={{ color: "#6C757D", fontSize: '20px' }} className='me-md-2 me-2 mt-1' />
        //                         <h5 style={{ color: '#6C757D' }} className="ms-md-1">Category</h5>
        //                     </div>
        //                     <div className="d-flex ms-3 ps-3 pt-2 pe-5 " >
        //                         <h5 style={{ color: '#6C757D' }} className="ms-md-1 me-md-2">Search</h5>
        //                         <FontAwesomeIcon icon={faSearchLocation} style={{ color: "#6C757D", fontSize: '20px' }} className='me-md-2 me-2 mt-1' />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-md-7 col-sm-6 col-xs-12 d-flex " >
        //                 <div className="hero-box">
        //                     <div className="hero-img">
        //                         <img src={hero} alt="hero-section banner" className='w-75 mt-5' />
        //                     </div>
        //                     <div className="hero-description">
        //                         <h5 className="hero-title" style={{color:'#6C757D'}} >2 BHK Residential Apartment in Chandivali</h5>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>

        // </div>
        <div className='font hero-section'>
            <div className="d-flex  justify-content-center">
                <Sidebar />
                <div className="w-75 row justify-content-center">
                    <div className="hero-content">
                        <div className="hero-icons">
                            <div className="col-md-8 justify-content-center m-auto">
                                <div className="hero-icons d-flex mt-md-1" style={{ cursor: 'pointer' }}>
                                    <div className="d-flex ps-md-3 ps-0 pt-2 pe-md-5 pe-0 " style={{ borderRight: '1px solid #6C757D' }}>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#6C757D", fontSize: '20px' }} className='me-md-2 me-2 mt-1' />
                                        <h5 style={{ color: '#6C757D' }} className="ms-md-1">Location</h5>
                                    </div>
                                    <div className="d-flex ps-md-3 ms-md-4 ms-0 ps-0 pt-2 pe-md-5 pe-0 " style={{ borderRight: '1px solid #6C757D' }}>
                                        <FontAwesomeIcon icon={faBookmark} style={{ color: "#6C757D", fontSize: '20px' }} className='me-md-2 me-md-2 mt-1' />
                                        <h5 style={{ color: '#6C757D' }} className="ms-md-1">Category</h5>
                                    </div>
                                    <div className="d-flex ps-md-4 ps-0 pt-2 pe-md-5 pe-0 ms-md-2 ms-0 " >
                                        <h5 style={{ color: '#6C757D' }} className="ms-md-1">Search</h5>
                                        <FontAwesomeIcon icon={faSearchLocation} style={{ color: "#6C757D", fontSize: '20px' }} className='ms-md-3 ms-2 mt-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-box col-md-10 m-auto">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit, illo magnam eligendi, iure numquam earum nobis autem minima esse repudiandae tempore eum nesciunt, nihil ex tempora nostrum quae hic recusandae deleniti natus laudantium porro nulla accusantium. Adipisci earum illum optio vero error ut aliquam, quaerat placeat possimus dolorem sapiente deleniti nihil sint. Fugiat quam at, accusamus labore incidunt, corrupti dolorem optio et temporibus quos odit? Ut consequuntur, error, nostrum delectus quaerat odit tempore aspernatur, nihil vero odio quasi harum! Pariatur optio possimus repudiandae sequi ea officiis provident unde, laborum iusto quas beatae aliquid dicta illum ipsam fuga a voluptas atque ab cupiditate enim dolor quae. Aperiam sed autem delectus magni ipsa veritatis facilis velit porro, illo iure blanditiis ex reiciendis perspiciatis sint maxime ad cumque voluptates voluptatibus! Vitae sapiente cum saepe dolorum modi ullam. Dolor provident suscipit, harum itaque porro commodi nesciunt nobis quo tenetur mollitia debitis possimus ex repellendus ut officia ipsa necessitatibus magnam! Doloribus laudantium harum iusto ratione veritatis optio culpa ut, ea est, necessitatibus maiores laborum minima sed facere at iure! Assumenda expedita voluptates atque rem nostrum quis. Nobis illo consequuntur deleniti veniam eveniet corrupti quis, et veritatis nihil voluptatum, ea officia quaerat vel, eos cumque?</p>
                            <img src={hero} alt="" className='w-50' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );
};

            export default Hero;