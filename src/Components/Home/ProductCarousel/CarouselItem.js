import React from 'react';
import ProductCarousel from './ProductCarousel';
import building from '../../../images/building1.jpg'
import building2 from '../../../images/building3.jpg'
import building3 from '../../../images/building4.jpg'
import './ProductCarousel.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';


const CarouselItem = () => {
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

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

