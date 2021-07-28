import React from 'react';
import Carousel from 'react-grid-carousel'
import tshirt from '../../../images/t-shirt.jpg'
import wallet from '../../../images/wallet.jpg'
import watch from '../../../images/watch.jpg'
import './ProductCarousel.css'


const ElectronicPdCarousel = () => {
    return (
        <div>
            <div className=" electric-product-slider rounded  mb-5">
               
                <Carousel
                    cols={2} rows={1} gap={10} loop
                >
                    <Carousel.Item>
                        <div className="featured">
                            <p className=''>Featured</p>
                        </div>

                        <img src={tshirt} className='  rounded' />
                        <div className="electric-pd-details">
                            <h5 className='overlay-title'>Land T Cresent Bay</h5>
                          
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="featured">
                            <p className=''>Featured</p>
                        </div>
                        <img src={watch} className='  rounded' />
                        <div className="">
                            <h5 className='overlay-title'>Land T Cresent Bay</h5>
                         
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="featured">
                            <p className=''>Featured</p>
                        </div>
                        <img src={wallet} className='rounded ' />
                        <div className="">
                            <h5 className='overlay-title'>Land T Cresent Bay</h5>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="featured">
                            <p className=''>Featured</p>
                        </div>
                        <img src={watch} className=' rounded ' />
                        <div className="">
                            <h5 className=''>Land T Cresent Bay</h5>
                        </div>
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    );
};

export default ElectronicPdCarousel;