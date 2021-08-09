import React from 'react';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import NavBottom from './NavBottom/NavBottom';


const Home = () => {
    

    return (
        <div>
            <Navbar/>
            <NavBottom />
            <Hero/>
            {/* <Popular />
            <GoodOffer /> */}
        </div>
    );
};

export default Home;