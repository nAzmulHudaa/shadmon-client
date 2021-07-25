import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';

const UserPage = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
   
    return (
        <div>
            <h1>User Profile</h1>
            <h6>{loggedInUser.email}</h6>
        </div>
    );
};

export default UserPage;