import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import ProductService from './ProductService';
import './Test.css'

const CarouselDemo = () => {
    const [products, setProducts] = useState([]);
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

    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data.slice(0, 9)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    //console.log(products[0].image)
    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-5">
                        <img src={`${product.image}`} alt={product.name} className="" />
                    </div>
                    <div className="overlay-img-seller text-center">
                        <div className="overlay-img-seller-content">
                            <h6>12998</h6>
                            <h5>People Connected</h5>
                        </div>
                    </div>
                    <div className=''>
                        {/* <h4 className="p-mb-1">{product.name}</h4>
                        <h6 className="p-mt-0 p-mb-3">${product.price}</h6>
                        <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span> */}
                        <h6 className='p-mb-1 mt-4'>Anik Traders</h6>
                        <p className='m-0 p-0' style={{color:'gray'}}>Electric & Electronics</p>
                        <p className='m-0 p-0'  style={{color:'gray'}}>Dhaka</p>
                        <button className='connect-btn'>Connect & See</button>


                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="carousel-demo">

            <div className="card mt-4 mb-4">
                <div className="d-flex justify-content-between">
                    <h6 className='ms-3' style={{}}>Connect With Best Sellers</h6>
                    <h6 className='me-3'>See All</h6>

                </div>
                <Carousel value={products} numVisible={2} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate} />

            </div>


        </div>
    );
}

export default CarouselDemo;