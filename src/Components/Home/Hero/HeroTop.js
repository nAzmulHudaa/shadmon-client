import { faBookmark, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import hero from '../../../images/hero.jpg'

const HeroTop = () => {
    const [readMore, setReadMore] = useState(false);
    const info = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vero sed quidem aut dolor voluptates eaque pariatur, distinctio similique sunt, quis suscipit consectetur quia, temporibus accusamus exercitationem enim minima impedit!'

    return (
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
                                <h5 style={{ fontSize: '20px' }} className='m-0'>2 BHK Residential Apartment in Chandivali</h5>
                                <div className="hero-mid d-flex">
                                    <div className="first d-flex">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#6C757D' }} className='mt-md-1 mt-1 me-1 me-md-2' />
                                        <p style={{ color: '#6C757D',margin:'0px'}}>Chittagong</p>
                                    </div>
                                    <div className="second d-flex">
                                        <FontAwesomeIcon icon={faBookmark} style={{ color: '#6C757D' }} className='mt-md-1 mt-1 me-1 me-md-2 ms-md-2 ms-0' />
                                        <p style={{ color: '#6C757D', margin:'0px' }}>Residential</p>
                                    </div>
                                </div>
                                <div className="price ms-1 mt-md-1">
                                    <h5 className='m-0' >$2,500 Cr</h5>
                                </div>
                                <div className="last d-flex justify-content-between ms-1">
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
        </div>);
};

export default HeroTop;