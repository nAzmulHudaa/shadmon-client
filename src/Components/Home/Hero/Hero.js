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
import Gallery from '../ProductCarousel/Gallery';
import ElectronicPdCarousel from '../ProductCarousel/ElectronicPdCarousel';
import Features from '../Features/Features';
import GoodOffer from '../GoodOffer/GoodOffer';
import Popular from '../Popular/Popular';
import SellerCarousel from '../ProductCarousel/SellerCarousel';
import Caro from '../Caro'

const Hero = () => {
    return (
        <div className='font hero-section container-custom m-auto'>
            <div className="d-flex">
                <Sidebar />
                <div className='hero-container'>
                    <div className="hero-content ">
                        <HeroNav />
                        <HeroTop />
                        <Products />
                        <Promotion />
                        <AnotherPd />
                        <Place />
                        <Gallery />
                        <ElectronicPdCarousel />
                        <Features />
                        <SellerCarousel />
                        <Popular />
                        <GoodOffer />
                    </div>
                </div>
                <HeroAdd />
            </div>
        </div>

    );
};

export default Hero;
