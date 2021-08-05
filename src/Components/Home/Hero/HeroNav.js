import { faBars, faMapMarkerAlt, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HeroNav = () => {
    return (
        <div className="hero-icons hero-nav">
            <div className=" justify-content-center m-auto">
                <div className="hero-icons d-flex mt-md-1" style={{ cursor: 'pointer' }}>
                    <div className="d-flex  ">
                        <FontAwesomeIcon icon={faBars} className=' me-md-2' style={{ color: 'gray', marginTop: '6px' }} />
                       
                        <b style={{ color: '#6C757D' }} className="ps-md-0 pe-md-5">Category</b>

                    </div>
                    <div className="d-flex ms-md-5 ps-md-5 pe-md-5">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className=' me-md-2' style={{ color: 'gray', marginTop: '6px' }} />
                        <b style={{ color: '#6C757D' }} className="  ">Location</b>

                    </div>
                    <div className="d-flex " >
                        <b style={{ color: '#6C757D' }} className="ms-md-4 ps-md-5 pe-md-0">Search</b>
                        <FontAwesomeIcon icon={faSearchLocation} style={{ color: "#6C757D", fontSize: '15px',marginTop:'6px' }} className='ms-md-1' />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroNav;