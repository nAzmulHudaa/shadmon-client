import React from 'react';
import Navbar from './Navbar/Navbar';
import NavBottom from './NavBottom/NavBottom';
import Sidebar from './Sidebar/Sidebar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <NavBottom />
            <Sidebar/>
            
        </div>
    );
};

export default Home;