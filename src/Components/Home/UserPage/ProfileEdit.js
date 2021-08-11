import React, { useState } from 'react';



const ProfileEdit = () => {
    const [value1, setValue1] = useState('');

    return (
        <div className='profile-edit'>
            <div className="profile-contents">
                <h6 className='text-secondary'>BASIC INFORMATION</h6>
                <div className="basic-inputs">
                    <input type="text" placeholder="Profile Created By" />
                </div>

              
            </div>
            
        </div>
    );
};

export default ProfileEdit;