import React from 'react';
import './Product.css';
import product from '../../../images/product.jpg';
import product1 from '../../../images/pd1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCheckCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Products = () => {
    return (
        <div className="placeholderDiv">
            {/* main product div start */}
            <div className="products rounded mt-4">
                <div className="d-flex">
                    <div className="pd-img">
                        <img src={product} alt="" className='rounded' />
                    </div>
                    <div className="product-info">
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
                        <h5 className='mb-5'>$2500</h5>
                        <div className="d-flex justify-content-between">
                            <p>Richard Brandon <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#0F88C5' }} /> </p>
                            <p>Just now</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* main product div end */}
            {/* start */}
            <div className="products rounded mt-4">
                <div className="d-flex">
                    <div className="pd-img">
                        <img src={product1} alt="" className='rounded' />
                    </div>
                    <div className="product-info">
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
                        <h5 className='mb-5'>$2500</h5>
                        <div className="d-flex justify-content-between">
                            <p>Richard Brandon <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#0F88C5' }} /> </p>
                            <p>Just now</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* end */}
            {/* start */}
            <div className="products rounded mt-4">
                <div className="d-flex">
                    <div className="pd-img">
                        <img src={product} alt="" className='rounded' />
                    </div>
                    <div className="product-info">
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
                        <h5 className='mb-5'>$2500</h5>
                        <div className="d-flex justify-content-between">
                            <p>Richard Brandon <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#0F88C5' }} />  </p>
                            <p>Just now</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* end */}
        </div>
    );
};

export default Products;