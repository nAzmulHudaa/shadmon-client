import React from 'react';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import NavBottom from './NavBottom/NavBottom';
import Sidebar from './Sidebar/Sidebar';
import UserPage from './UserPage/UserPage';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <NavBottom />
            <Hero/>
           
        </div>
    );
};

export default Home;