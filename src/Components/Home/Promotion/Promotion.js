import React from 'react';
import './Promotion.css'
import river from '../../../images/river.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLock } from '@fortawesome/free-solid-svg-icons';

const Promotion = () => {
    return (
        <div className="promotion">
            <div className="promotion-text d-flex rounded-top">
                <FontAwesomeIcon icon={faLock} className='promotion-icon' />
                <p className='mt-2'>Prmomote Your Post In This Way For More Reaction</p>
            </div>
            <div className="prmotion-img">
                <img src={river} alt="" className='w-100' />
            </div>
            <div className="promotion-overlay-text d-flex">
                <div className="promotion-divider "></div>
                <div>
                    <h5>Samsung HD Television With Wifi & Bluetooth</h5>
                    <h5>Price:25000</h5>
                </div>
            </div>
            <div className="d-flex promotion-info">
                <FontAwesomeIcon icon={faBolt} className='mt-2 ms-2 me-3' style={{fontSize:'35px',color:'#82bd39fa'}} />
                <div>                
                    <h5>Get More Reaction, more Customers, more Orders</h5>
                    <p style={{fontSize:'14px',color:'#6C757D'}}>You can reach upto 1564 people daily by boosting your post for BDT 500 </p>
                </div>

            </div>
            <button className='promote-btn btn btn-primary form-control'>Promote</button>

        </div>

    );
};

export default Promotion;