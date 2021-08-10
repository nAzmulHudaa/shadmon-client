import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import HeroAdd from '../Hero/HeroAdd';
import Sidebar from '../Sidebar/Sidebar';
import UserProfile from './UserProfile';

const UserPage = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
   
    return (
        <div className='font container-custom m-auto hero-section user-section'>
            <div className="d-flex">
                <Sidebar/>
                  <div className="hero-container">
                      <div className="hero-content">
                        <UserProfile/>
                      </div>
                  </div>
                <HeroAdd/>
            </div>
        </div>
    );
};

export default UserPage;