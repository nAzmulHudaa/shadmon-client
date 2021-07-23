import React from 'react';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import NavBottom from './NavBottom/NavBottom';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <NavBottom />
            {/* <Sidebar/> */}
            <Hero/>
            
        </div>
    );
};

export default Home;