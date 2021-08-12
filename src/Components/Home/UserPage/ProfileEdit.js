import React, { useState } from 'react';



const ProfileEdit = () => {


    return (
        <div className='profile-edit'>
            <div className="profile-edit-contents">
                <h6 className='text-secondary'>BASIC INFORMATION</h6>
                <div className="basic-inputs">
                    <div className='d-flex'>
                        <div className='form '>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Profile Created By</label>
                        </div>
                        <div className='form '>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Location</label>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='form '>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Name</label>
                        </div>
                        <div className='form '>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Email</label>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='form '>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Mobile Verified</label>
                        </div>
                        <div className='form '>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Add Mobile Number</label>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='form '>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Date Of Birth</label>
                        </div>
                        <div className='form '>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Gender</label>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='form '>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Education</label>
                        </div>
                        <div className='form '>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Current Job</label>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='form '>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Job Experience</label>
                        </div>
                        <div className='form '>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Job Experience</label>
                        </div>
                    </div>
                    <div className='form-full'>
                        <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                        <label htmlFor="profile" className="form_label">Full Address</label>
                    </div>
                    <h6 className='text-secondary mt-5'>Seller INFORMATION</h6>
                    <div className='d-flex'>
                        <div className='form '>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Shop Name</label>
                        </div>
                        <div className='form '>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Communicate By</label>
                        </div>
                    </div>
                    <div className='form-full-seller d-flex'>
                        <div>
                            <input type="text" id="profile" className="form_input" autoComplete="off" autoCorrect />
                            <label htmlFor="profile" className="form_label">Full Address</label>
                        </div>
                        <div style={{position:'relative',left:'343px'}}>
                            <button className="seller-btn">Change</button>
                        </div>
                        <div style={{position:'relative',left:'345px'}}>
                            <button className="seller-btn1">Save</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileEdit;