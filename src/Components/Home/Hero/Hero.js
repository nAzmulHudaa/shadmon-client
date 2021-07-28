import React from 'react';
import './Hero.css'
import Sidebar from '../Sidebar/Sidebar';
import HeroAdd from './HeroAdd';
import HeroTop from './HeroTop';
import HeroNav from './HeroNav';
import Products from '../Products/Products';
import Promotion from '../Promotion/Promotion';
import AnotherPd from '../Products/AnotherPd';
import Place from '../Place/Place';
import CarouselItem from '../ProductCarousel/CarouselItem';
import Gallery from '../ProductCarousel/Gallery';

const Hero = () => {
    return (
        <div className='font hero-section container-custom m-auto'>
            <div className="d-flex">
                <div className="">
                    <Sidebar />
                </div>
                <div className="hero-container">
                    <div className="hero-content ">
                        <HeroNav />
                        <HeroTop />
                        <Products/>
                        <Promotion/>
                        <AnotherPd/>
                        <Place/>
                        <Gallery/>
                    </div>
                </div>
                <HeroAdd />
            </div>
        </div>

    );
};

export default Hero;