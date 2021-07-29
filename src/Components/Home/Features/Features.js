import React from 'react';
import './Features.css';
import delivery from '../../../images/delivery.jpg'

const Features = () => {
    return (
        <div className='features rounded pt-4 pb-4' style={{backgroundColor:"#f5f5f5"}} >
            <div className="">
                <div className="first ">

                    <img src={delivery} alt="" className=' ' />
                    <img src={delivery} alt="" className=' ' />
                    <img src={delivery} alt="" className=' ' />
                    <img src={delivery} alt="" className=' ' />

                </div>
                <div className="second">
                    <img src={delivery} alt="" className=' ' />
                    <img src={delivery} alt="" className=' ' />
                    <img src={delivery} alt="" className=' ' />
                    <img src={delivery} alt="" className='' />

                </div>
            </div>
        </div>
    );
};

export default Features;