import React from 'react';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import NavBottom from './NavBottom/NavBottom';
import Popular from '../Home/Popular/Popular';
import GoodOffer from './GoodOffer/GoodOffer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <NavBottom />
            <Hero/>
            <Popular />
            <GoodOffer />
        </div>
    );
};

export default Home;