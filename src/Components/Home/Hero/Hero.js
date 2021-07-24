import { faBookmark, faMapMarkerAlt, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Hero.css'
import hero from '../../../images/hero.jpg'
import Sidebar from '../Sidebar/Sidebar';


const Hero = () => {
    const [readMore, setReadMore] = useState(false);
    const info = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci deleniti quibusdam possimus, voluptatum minima commodi dolore excepturi, veniam et facere culpa natus impedit placeat sed sit. Libero debitis nesciunt quasi.'
    return (
        <div className='font hero-section'>
            <div className="d-flex  justify-content-center">
                <Sidebar/>
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
                        <div className="col-md-7  m-auto">
                            <div className="hero-box">
                                <div className="overlay-text">
                                    <h2>Most Popular Choice!</h2>
                                </div>
                                <div className="hero-img">
                                    <img src={hero} alt="apartment" className='w-100 rounded-top' />
                                </div>
                                <div className="hero-content mt-md-2 mb-md-2">
                                    <h5 style={{ fontSize: '23px' }}>2 BHK Residential Apartment in Chandivali</h5>
                                    <div className="hero-mid d-flex">
                                        <div className="first d-flex">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#6C757D' }} className='mt-md-1 mt-1 me-1 me-md-2' />
                                            <h6>Chittagong</h6>
                                        </div>
                                        <div className="second d-flex">
                                            <FontAwesomeIcon icon={faBookmark} style={{ color: '#6C757D' }} className='mt-md-1 mt-1 me-1 me-md-2 ms-md-2 ms-0' />
                                            <h6>Residential</h6>
                                        </div>
                                    </div>
                                    <div className="price d-flex">
                                        <h2>$2,500 Cr</h2>
                                    </div>
                                    <div className="last">
                                        <p>Miami Trading, 14 people connected</p>
                                        <p>{readMore ? info : `${info.substring(0,0)}`}
                                            <button  className='btn btn-outline-secondary details' onClick={() => setReadMore(!readMore)}>
                                                {readMore ? 'Show less' : 'Read More'}
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;