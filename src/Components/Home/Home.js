import React from 'react';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import NavBottom from './NavBottom/NavBottom';
import UserPage from './UserPage/UserPage';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <NavBottom />
            {/* <Sidebar/> */}
            <Hero/>
            <UserPage/>
        </div>
    );
};

export default Home;