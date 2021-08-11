import React, { useState } from 'react';
import lady from '../../../images/lady.jpg';
import ProfileEdit from './ProfileEdit';
import ProfileMain from './ProfileMain';
import './UserProfile.css';


const UserProfile = () => {
    return (
        <div className="userProfile mt-2">
            <div className="userProfile-header">
                <img src={lady} alt="" className='rounded-top' />
            </div>
            <div className="profile-components">
                <div style={{ backgroundColor: 'white', borderTopLeftRadius: '1rem', borderTopRightRadius: "1rem" }}>
                    <div>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active m-0 " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><h6>Dashboard</h6></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link m-0 " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><h6>Profile</h6></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link m-0" id="photo-tab" data-bs-toggle="tab" data-bs-target="#photo" type="button" role="tab" aria-controls="photo" aria-selected="false"><h6>Photo</h6></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link m-0" id="preference-tab" data-bs-toggle="tab" data-bs-target="#preference" type="button" role="tab" aria-controls="preference" aria-selected="false"><h6>Preference</h6></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link m-0 " id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false"><h6>Settings</h6></button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent" style={{ backgroundColor: "#80808026" }}>
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <ProfileMain />
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <ProfileEdit/>
                            </div>
                            <div class="tab-pane fade" id="photo" role="tabpanel" aria-labelledby="photo-tab">Photo</div>
                            <div class="tab-pane fade" id="preference" role="tabpanel" aria-labelledby="preference-tab">Preference </div>
                            <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                                <ProfileMain />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>

    );
};

export default UserProfile;