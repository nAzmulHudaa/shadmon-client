import React from 'react';
import banner from '../../../images/banner.png'

// all css of this file is in hero.css

const HeroAdd = () => {
    return (
        <div className='add-box'>
            <img src={banner} alt="advertisement banner" className='rounded' />
        </div>
    );
};

export default HeroAdd;