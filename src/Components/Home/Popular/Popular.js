import { faBookmark, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import hero from '../../../images/hero.jpg';

const Popular = () => {
    const [readMore, setReadMore] = useState(false);
    const info = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vero sed quidem aut dolor voluptates eaque pariatur, distinctio similique sunt, quis suscipit consectetur quia, temporibus accusamus exercitationem enim minima impedit!'

    return (
        <div className="d-flex ms-5">
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
                                <h5 style={{ fontSize: '20px' }}>2 BHK Residential Apartment in Chandivali</h5>
                                <div className="hero-mid d-flex">
                                    <div className="first d-flex">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#6C757D' }} className='mt-md-1 mt-1 me-1 me-md-2' />
                                        <p style={{ color: '#6C757D' }}>Chittagong</p>
                                    </div>
                                    <div className="second d-flex">
                                        <FontAwesomeIcon icon={faBookmark} style={{ color: '#6C757D' }} className='mt-md-1 mt-1 me-1 me-md-2 ms-md-2 ms-0' />
                                        <p style={{ color: '#6C757D' }}>Electronics</p>
                                    </div>
                                </div>
                                {/* <div className="price">
                                    <h5 >$2,500 Cr</h5>
                                </div> */}
                                <div className="last d-flex justify-content-between">
                                    <p style={{ marginBottom: "0px", color: '#6C757D' }}>Miami Trading, 14 people connected</p>
                                    
                                </div>

                                <div className="price-container">
                                    <div className="d-flex">
                                    <h3>Current Price </h3>
                                    <h3 className="priceTag">$154</h3>
                                    </div>
                                    <div className="d-flex">
                                    <h5>Bid starting price </h5>
                                    <h5 className="priceTag2">$5</h5>
                                    </div>
                                    <div className="d-flex">
                                    <h3>Your Price </h3>
                                    <div className="priceTag3">
                                    <button className="btn btn-outline-primary">$425</button>
                                    <button className="btn btn-primary ms-3">BID NOW</button>
                                    </div>
                                    </div>
                                </div>
                                <div className="timer-container">
                                    <em>Want to bid? Hurry up!</em>
                                    <div className="d-flex">
                                    <div className="d-flex">
                                        <div>
                                        <h3 className="text-danger">00</h3>
                                        <em>Days</em>
                                        </div>
                                        <div className="ms-4">
                                        <h3 className="text-danger">07</h3>
                                        <em>Hours</em>
                                        </div>
                                        <div className="ms-5">
                                        <h3 className="text-danger">56</h3>
                                        <em>Days</em>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary m-auto">See More</button>
                                    </div>
                                    <em>Ends Feb 8, 2021 at 07 54 PM</em>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default Popular;