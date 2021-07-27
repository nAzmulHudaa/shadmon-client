import React from 'react';
import ProductCarousel from './ProductCarousel';
import building from '../../../images/building1.jpg'
import building1 from '../../../images/building2.jpg'
import building2 from '../../../images/building3.jpg'
import building3 from '../../../images/building4.jpg'
import './ProductCarousel.css'


const CarouselItem = () => {
    return (

        <div className="premium-pd rounded mb-5">
            <h6 style={{ color: 'gray' }}>Premium Products</h6>
            <div style={{ marginLeft: 'auto', marginRight: 'auto' }} className='premium-carousel' >
                <ProductCarousel
                    show={true}
                    
                >
                    <div className='carousel-div'>
                        <div style={{ padding: '5px' }} className='carousel-img '>
                            <img src={building} alt="placeholder" className=' carousel-img  ' />
                        </div>
                        <div className="overlay-card">
                            <h5>Land T Cresent Bay</h5>
                            <p>Property:Dhaka</p>
                            <h5>$3.5 - 4.91 Cr</h5>
                        </div>

                    </div>
                    <div className='carousel-div'>
                        <div style={{ padding: '5px' }}>
                            <img src={building2} alt="placeholder" className=' carousel-img' />
                        </div>
                    </div>
                    <div className='carousel-div'>
                        <div style={{ padding: '5px' }}>
                            <img src={building2} alt="placeholder" className=' carousel-img ' />
                        </div>
                    </div>
                    <div className='carousel-div'>
                        <div style={{ padding: '5px' }}>
                            <img src={building3} alt="placeholder" className=' carousel-img' />
                        </div>
                    </div>
                    <div className='carousel-div'>
                        <div style={{ padding: '5px' }}>
                            <img src={building} alt="placeholder" className=' carousel-img' />
                        </div>
                    </div>
                    <div className='carousel-div'>
                        <div style={{ padding: '5px' }}>
                            <img src={building2} alt="placeholder" className='carousel-img ' />
                        </div>
                    </div >
                    <div className='carousel-div'>
                        <div style={{ padding: '5px' }}>
                            <img src={building2} alt="placeholder" className='carousel-img ' />
                        </div>
                    </div>
                    <div className='carousel-div'>
                        <div style={{ padding: '5px' }}>
                            <img src={building3} alt="placeholder" className=' carousel-img ' />
                        </div>
                    </div>
                </ProductCarousel>
            </div>
        </div>
    );
};

export default CarouselItem;