import { faBookmark, faMapMarkerAlt, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Hero.css'
import hero from '../../../images/hero.jpg'
import Sidebar from '../Sidebar/Sidebar';
import HeroAdd from './HeroAdd';




const Hero = () => {
    const [readMore, setReadMore] = useState(false);
    const info = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vero sed quidem aut dolor voluptates eaque pariatur, distinctio similique sunt, quis suscipit consectetur quia, temporibus accusamus exercitationem enim minima impedit!'
    return (
        <div className='font hero-section container-custom m-auto'>
            <div className="d-flex">
                <div className="">
                    <Sidebar />
                </div>
                <div className="hero-container">
                    <div className="hero-content ">
                        <div className="hero-icons">
                            <div className=" justify-content-center m-auto">
                                <div className="hero-icons d-flex mt-md-1" style={{ cursor: 'pointer' }}>
                                    <div className="d-flex " >

                                        <b style={{ color: '#6C757D' }} className="pe-md-4">All Adds</b>
                                        <div className="divider"></div>
                                    </div>
                                    <div className="d-flex  ">
                                        {/* <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#6C757D", fontSize: '20px' }} className='ms-md-3' /> */}
                                        <b style={{ color: '#6C757D' }} className="ps-md-4 pe-md-4">Location</b>
                                        <div className="divider"></div>
                                    </div>
                                    <div className="d-flex  ">
                                        {/* <FontAwesomeIcon icon={faBookmark} style={{ color: "#6C757D", fontSize: '20px' }} className='ms-md-4' /> */}
                                        <b style={{ color: '#6C757D' }} className="ps-md-5 pe-md-5">Category</b>
                                        <div className="divider"></div>
                                    </div>
                                    <div className="d-flex " >
                                        <b style={{ color: '#6C757D' }} className="ps-md-5 pe-md-0">Search</b>
                                        <FontAwesomeIcon icon={faSearchLocation} style={{ color: "#6C757D", fontSize: '20px' }} className='mt-1 ms-md-2' />

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div className="hero-box">
                                <div className="overlay-text">
                                    <h2>Most Popular Choice!</h2>
                                </div>
                                <div className="hero-img">
                                    <img src={hero} alt="apartment" className=' rounded-top' />
                                </div>
                                <div className="hero-content mt-md-2 mb-md-2">
                                    <div className="hero-info">
                                        <div className="d-flex">
                                            <div className='me-md-2'>
                                                <img className='author_logo' src="https://cdn.freelogovectors.net/wp-content/uploads/2021/04/xiaomi-logo-freelogovectors.net_.png" alt="" />
                                            </div>
                                            <div className='pd-details'>
                                                <h5 style={{ fontSize: '23px' }}>2 BHK Residential Apartment in Chandivali</h5>
                                                <div className="hero-mid d-flex">
                                                    <div className="first d-flex">
                                                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#6C757D' }} className='mt-md-1 mt-1 me-1 me-md-2' />
                                                        <p style={{ color: '#6C757D' }}>Chittagong</p>
                                                    </div>
                                                    <div className="second d-flex">
                                                        <FontAwesomeIcon icon={faBookmark} style={{ color: '#6C757D' }} className='mt-md-1 mt-1 me-1 me-md-2 ms-md-2 ms-0' />
                                                        <p style={{ color: '#6C757D' }}>Residential</p>
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <h5 >$2,500 Cr</h5>
                                                </div>
                                                <div className="last d-flex justify-content-between">
                                                    <p style={{ marginBottom: "0px", color: '#6C757D' }}>Miami Trading, 14 people connected</p>
                                                    <p style={{ marginBottom: "0px" }}>{readMore ? info : `${info.substring(0, 0)}`}

                                                        <p className='details' onClick={() => setReadMore(!readMore)}>
                                                            {readMore ? 'Show less' : `Read More`}
                                                        </p>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HeroAdd />
            </div>
        </div>

    );
};

export default Hero;