import { faArrowDown, faBookmark, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import product from '../../../images/product.jpg';


const AnotherPd = () => {
    return (
        <div className="products rounded mt-4 mb-5">
            <div className="d-flex">
                <div className="pd-img">
                    <img src={product} alt="" className='rounded' />
                </div>
                <div className="another-product-info">
                    <h6 className='product-title'>
                        Oxygen Tipei NTU Gonggeuen Tipei NTU Oxygen
                    </h6>
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
                    <div className="d-flex justify-content-between">
                        <h5 className=''>$2500</h5>
                        <p>Just now</p>
                    </div>
                    <div className="d-flex justify-content-evenly pd-last mb-2">
                        <h5 className='pd-last-1'>Member</h5>
                        <h5
                            className='pd-last-2'
                        >Verified</h5>
                        <div className='d-flex pd-last-3'>
                            <FontAwesomeIcon icon={faArrowDown} className='me-1' style={{ marginTop: '2px' }} />
                            <h5>Details</h5>
                        </div>

                    </div>

                </div>
            </div>
        </div>);
};

export default AnotherPd;