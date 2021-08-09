import React from 'react';
import lady from '../../../images/lady.jpg';
import Modal from './Modal';
import './UserProfile.css'
const UserProfile = () => {
    return (
       <div className="userProfile mt-2">
           <div className="userProfile-header">
                <img src={lady} alt="" className='rounded-top' />
                <Modal/>
           </div>
       </div>
    );
};

export default UserProfile;