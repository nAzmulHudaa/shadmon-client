import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Carousel from 'react-grid-carousel'
import tshirt from '../../../images/t-shirt.jpg'
import wallet from '../../../images/wallet.jpg'
import watch from '../../../images/watch.jpg'
import './ProductCarousel.css'


const ElectronicPdCarousel = () => {
    return (
        <div >
            <div className=" electric-product-slider pt-4 pb-4 rounded text-secondary mb-4" style={{backgroundColor:'#F5F5F5'}}>
                <div className="d-flex justify-content-lg-between">
                    <div>
                        <h5 className='text-dark ms-3'>Electric & Electronics</h5>
                    </div>
                    <div>
                        <p className='m-0'>All Categories</p>
                    </div>
                    <div className='me-3'>
                        <p className='m-0'>
                            This Cateogory
                        </p>
                    </div>
                </div>
                <Carousel
                    cols={3} rows={1} gap={10} loop
                >
                    <Carousel.Item>
                       

                        <img src={tshirt} className=' w-100  rounded' />
                        <div className=''style={{borderBottom:'2px solid gray'}}>
                            <h5 className='m-0 p-0' style={{fontSize:'15px'}}>Land T Cresent Bay</h5>
                            <div className="d-flex mb-2 justify-content-lg-between">
                                <div>
                                    <h5 className='m-0 p-0'>$256</h5>
                                </div>
                                <div className='d-flex mt-1'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '14px' }} className='mt-1 me-1' />
                                    <h6>Dhaka</h6>
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                       
                        <img src={wallet} className='w-100  rounded' />
                        <div className="" style={{borderBottom:'2px solid gray'}}>
                            <h5 className='m-0 p-0' style={{fontSize:'15px'}}>Land T Cresent Bay</h5>
                            <div className="d-flex mb-2 justify-content-lg-between">
                                <div>
                                    <h5 className='m-0 p-0'>$256</h5>
                                </div>
                                <div className='d-flex mt-1'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '14px' }} className='mt-1 me-1' />
                                    <h6>Dhaka</h6>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                       
                        <img src={wallet} className='rounded w-100 ' />
                        <div className="" style={{borderBottom:'2px solid gray'}}>
                            <h5 className='m-0 p-0' style={{fontSize:'15px'}}>Land T Cresent Bay</h5>
                            <div className="d-flex mb-2 justify-content-lg-between">
                                <div>
                                    <h5 className='m-0 p-0'>$256</h5>
                                </div>
                                <div className='d-flex mt-1'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '14px' }} className='mt-1 me-1' />
                                    <h6>Dhaka</h6>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <img src={tshirt} className=' rounded w-100' />
                        <div className="" style={{borderBottom:'2px solid gray'}}>
                            <h5 className='m-0 p-0' style={{fontSize:'15px'}}>Land T Cresent Bay</h5>
                            <div className="d-flex mb-2 justify-content-lg-between">
                                <div>
                                    <h5 className='m-0 p-0'>$256</h5>
                                </div>
                                <div className='d-flex mt-1'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '14px' }} className='mt-1 me-1' />
                                    <h6>Dhaka</h6>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <img src={tshirt} className=' rounded w-100' />
                        <div className="" style={{borderBottom:'2px solid gray'}}>
                            <h5 className='m-0 p-0' style={{fontSize:'15px'}}>Land T Cresent Bay</h5>
                            <div className="d-flex mb-2 justify-content-lg-between">
                                <div>
                                    <h5 className='m-0 p-0'>$256</h5>
                                </div>
                                <div className='d-flex mt-1'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '14px' }} className='mt-1 me-1' />
                                    <h6>Dhaka</h6>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img src={tshirt} className=' rounded w-100' />
                        <div className="" style={{borderBottom:'2px solid gray'}}>
                            <h5 className='m-0 p-0' style={{fontSize:'15px'}}>Land T Cresent Bay</h5>
                            <div className="d-flex mb-2 justify-content-lg-git between">
                                <div>
                                    <h5 className='m-0 p-0'>$256</h5>
                                </div>
                                <div className='d-flex mt-1'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '14px' }} className='mt-1 me-1' />
                                    <h6>Dhaka</h6>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>


                </Carousel>
            </div>
        </div>
    );
};

export default ElectronicPdCarousel;