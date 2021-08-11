import { faBookmark, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import pepsodent from '../../../images/pepsodent.jpg';

const GoodOffer = () => {


    return (
        <div className="d-flex mt-3 mb-3">
            <div className="hero-box ">
                <div className="d-flex mt-2 mb-2 justify-content-lg-between text-secondary">
                    <h6 className='ms-3'>Buy With a good offer</h6>
                    <h6 className="me-4">All Offer</h6>
                </div>

                <div className="popular-img">
                    <img src={pepsodent} alt="" className='rounded-top' />
                </div>
                <div className="hero-content mt-md-2 mb-md-2">
                    <div className="hero-info">
                        <div className="d-flex">
                            <div className='me-md-3'>
                                <img className='author_logo' src="https://cdn.freelogovectors.net/wp-content/uploads/2021/04/xiaomi-logo-freelogovectors.net_.png" alt="" />
                            </div>
                            <div className='pd-details'>
                                <h5 style={{ fontSize: '20px' }} className='m-0'>2 BHK Residential Apartment in Chandivali</h5>
                                <div className="hero-mid d-flex">
                                    <div className="first d-flex">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#6C757D' }} className='mt-md-1 mt-1 me-1 me-md-2' />
                                        <p style={{ color: '#6C757D' }} className='m-0'>Chittagong</p>
                                    </div>
                                    <div className="second d-flex">
                                        <FontAwesomeIcon icon={faBookmark} style={{ color: '#6C757D' }} className='mt-md-1 mt-1 me-1 me-md-2 ms-md-2 ms-0' />
                                        <p style={{ color: '#6C757D' }} className='m-0'>Electronics</p>
                                    </div>
                                </div>
                                <div className="price">
                                    <h5 className='mb-0 mt-2' >$1.75 Cr</h5>
                                </div>
                                <div className="last ">

                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button collapsed text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ backgroundColor: '#ECDFDC' }}>
                                                    <span><p style={{ position: 'relative', right: '15px' }} >Miami Trading,14 people Connected</p></span>
                                                    <span style={{ position: 'relative', left: '50px' }}>Read More</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default GoodOffer;