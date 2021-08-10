import React, { useState } from 'react';
import lady from '../../../images/lady.jpg';
import ProfileMain from './ProfileMain';
import './UserProfile.css';


const UserProfile = () => {
    return (
        <div className="userProfile mt-2">
            <div className="userProfile-header">
                <img src={lady} alt="" className='rounded-top' />
            </div>
            <div className="profile-components">
               <ProfileMain/>
               
            </div>

           
        </div>

    );
};

export default UserProfile;