import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HeroNav = () => {
    return (
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
    );
};

export default HeroNav;