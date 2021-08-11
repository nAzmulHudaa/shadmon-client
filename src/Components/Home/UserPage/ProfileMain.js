import { faBell, faCheckCircle, faClipboardList, faCog, faCommentDots, faGlobe, faList, faPlus, faPlusCircle, faSignOutAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExpandLessRounded } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import placeholder from '../../../images/placeholder.jpg';
import './UserProfile.css'
import Carousel from 'react-grid-carousel'
import building from '../../../images/building1.jpg'
import building2 from '../../../images/building3.jpg';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';

const ProfileMain = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    // upload image with react hooks and preview image and remove input tagg
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [imageUpload, setImageUpload] = useState('');



    const [profileImg, setProfileImg] = useState(placeholder)


    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    const responsiveLayout = [
        [
            { breakpoint: 1000, cols: 3 },
            { breakpoint: 750, cols: 2, rows: 1, gap: 5 },
            { breakpoint: 499, autoplay: 2000, loop: true }
        ]
    ]
    return (
        <div className="profile-div">
            {/* profile content start */}
            <div style={{position:'relative',top:"15px"}}>
                <div className="profile-contents">
                    <div className="profile-details" style={{ width: '470px', margin: 'auto' }} >
                        <div className="profile-img text-center" >
                            <img src={profileImg} alt="" style={{ borderRadius: '50%', width: "145px", height: '130px', margin: '25px 0', cursor: 'pointer' }} />

                            <FontAwesomeIcon icon={faPlusCircle} style={{ color: 'red', fontSize: "29px", position: 'relative', right: '89px ', top: '70px', cursor: 'pointer' }} />
                        </div>
                        <div className="text-center">
                            <input type="file" name="profile-picture" id="profile-input" accept="image/*" onChange={imageHandler} style={{ marginBottom: '10px', marginLeft: '50px' }} />
                        </div>
                        {/* profile top ddtails start */}
                        <div className='d-flex ' style={{
                            paddingBottom: "15x", paddingTop: '10px', borderBottom: '1px solid #d2cfcfc9 '
                        }}>
                            <div style={{ marginLeft: '13px', paddingRight: '85px' }}>
                                <h6 style={{ fontSize: '26px' }}>Lovely Akter</h6>
                                <p style={{ color: 'gray' }}>52254245512455</p>
                            </div>
                            {/* divider start */}
                            <div style={{ border: '1px solid #d2cfcfc9', height: '28px', position: 'relative', top: '10px' }}></div>
                            {/* divider end */}
                            <div style={{ paddingLeft: '25px' }}>
                                <h6 style={{ fontSize: '24px', color: 'gray' }}>Account Type</h6>
                                <div className="d-flex">
                                    <p style={{ color: 'gray', marginRight: '6px' }}>Free</p>
                                    <h6 className='' style={{ fontSize: '19px', marginRight: '6px' }}>Seller</h6>
                                    <div style={{ border: '1px solid #d2cfcfc9', height: '15px', position: 'relative', top: '6px' }}></div>
                                    <p style={{ marginLeft: '5px', fontWeight: '700', fontSize: '14px', marginTop: '3px' }}>Upgrade</p>
                                </div>
                            </div>
                        </div>
                        {/* profile top details end */}
                        {/* profile verfiy detaails start */}
                        <div className="verify-details" style={{ marginLeft: '12px', paddingTop: '12px', paddingBottom: '12px' }} >
                            <h6 style={{ color: 'gray', marginTop: '4px', marginBottom: '13px' }}>NID/Passport is not verified</h6>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} className='me-2' />
                                    <h6 style={{ fontSize: '14px' }}>Mobile Verified</h6>
                                </div>
                                <div>
                                    <button style={{ border: 'none', padding: '5px 14px ', backgroundColor: '#f94c2d', color: 'white', position: 'relative', bottom: '10px', borderRadius: '4px', right: "12px" }}>
                                    <FontAwesomeIcon icon={faBell} className='me-2' />Verify</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* profile details section end */}

                </div>
            </div>
            {/* profile content end */}
            {/* post and earn section start */}
            <div className='post-earn' style={{marginTop:'35px'}}>
                <h6 className='ms-4 mb-2 text-secondary'>Post & Earn</h6>
                <div className="profile-contents">
                    <div className='' style={{ width: '470px', margin: 'auto', padding:'0 10px' }}>

                        <div style={{ padding: '10px 0px', borderBottom: '1px solid #d2cfcfc9 ' }}>
                            <h6 style={{ fontSize: '25px' }}><span style={{ color: 'gray' }}>Your Earnings : </span> TK 580</h6>
                            <h6 style={{ fontSize: "14px", fontWeight: '700' }}>Valid till : 29.6.2021</h6>
                        </div>
                        <div className='d-flex justify-content-between' style={{ borderBottom: '1px solid #d2cfcfc9 ', padding: '4px 0' }}>
                            <div>
                                <h6 style={{ fontSize: '20px', color: "gray" }}>Get $1500.Post 30 Ad in 1 Month</h6>
                                <h6 style={{ fontSize: '20px', color: "gray" }}>Get $2500.Post 60 Ad in 1 Year</h6>
                            </div>
                            <div>
                                <button className='btn btn-warning' style={{ marginTop: '15px' }}>Post Add </button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between " style={{ paddingBottom: '20px' }} >
                            <h6 style={{ color: 'gray', fontSize: '15px' }}>Bonus Discount Code : xxxxxxx (Valid Till 45 Days)</h6>
                            <p style={{ fontSize: '14px', color: 'gray' }}>See More</p>
                        </div>
                        <h6 style={{ fontSize: '15px' }}>How To Get Discount Bonus</h6>
                        <p style={{ lineHeight: '18px', color: 'gray', fontSize: "18px" }} className='mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, beatae praesentium! Atque nulla vitae , expedita error itaque repudiandae. Ad!</p>
                        <h6 style={{ fontSize: "14px", fontWeight: "700", paddingBottom: '10px', marginTop: "4px" }}>Also read terms & condition & privacy in our website</h6>
                    </div>
                </div>
            </div>
            {/* post and earn section end */}
            {/* account activity section start */}
            <div className='mt-3'>
                <h5 className='ms-4 mb-2 text-secondary'>Account & Activity</h5>
                <div className="profile-contents">
                    <div style={{}}>
                        <div className="">
                            <div className='d-flex'>
                                <div className="box">
                                    <h5>22</h5>
                                    <h6>Lifetime Shop Reaction</h6>
                                </div>
                                <div className="box">
                                    <h5>22</h5>
                                    <h6>Lifetime Shop Reaction</h6>
                                </div>
                                <div className="box">
                                    <h5>22</h5>
                                    <h6>Lifetime Shop Reaction</h6>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className="box">
                                    <h6 style={{ fontSize: '15px' }}>Only Premium Members Access This Opportunity</h6>
                                    <button style={{ padding: '3px 8px', border: "1px solid #7373bc91", borderRadius: "15px", marginTop: '15px', fontSize: "15px" }}>Product Add List</button>
                                </div>
                                <div className="box">
                                    <h5>22</h5>
                                    <h6>Lifetime Shop Reaction</h6>
                                </div>
                                <div className="box">
                                    <h5>22</h5>
                                    <h6>Lifetime Shop Reaction</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* account activity section end */}
            {/* following seller start */}
            <div className='mt-3'>
                <div className='d-flex justify-content-between'>
                    <h5 className="text-secondary" style={{ fontSize: '18px', marginLeft: '18px' }}>Your Following Seller</h5>
                    <h6 className="text-secondary me-4" style={{ fontSize: "18px", fontWeight: "700" }}>View All</h6>
                </div>
                <div className="profile-contents mt-2">
                    <div style={{ padding: '15px 0px ' }}>
                        <Carousel
                            cols={3} rows={1} gap={10} loop responsiveLayout={responsiveLayout}
                        >
                            <Carousel.Item>
                                {/* <Avatar image={building} className="p-mr-2 seller-carousel-img" shape="circle" /> */}
                                <img src={building} alt="Avatar" class="avatar seller-carousel-img" />
                                <div className="seller-details-top">
                                    <h6 className='m-0'>12988</h6>
                                    <p className='mb-0'>People Connected</p>
                                </div>
                                <div className="seller-details">
                                    <h5 className='m-0'>Anik Traders</h5>
                                    <p className="text-secondary mb-0">Electric & Electronics <br />Dhaka</p>
                                </div>


                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <Avatar image={building2} className="p-mr-2 seller-carousel-img" shape="circle" /> */}
                                <img src={building2} alt="Avatar" class="avatar seller-carousel-img" />
                                <div className="seller-details-top">
                                    <h6 className='m-0'>12988</h6>
                                    <p className='mb-0'>People Connected</p>
                                </div>
                                <div className="seller-details">
                                    <h5 className='m-0'>Anik Traders</h5>
                                    <p className="text-secondary mb-0">Electric & Electronics <br />Dhaka</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <Avatar image={building} className="p-mr-2 seller-carousel-img" shape="circle" /> */}
                                <img src={building} alt="Avatar" class="avatar seller-carousel-img" />

                                <div className="seller-details-top">
                                    <h6 className='m-0'>12988</h6>
                                    <p className='mb-0'>People Connected</p>
                                </div>
                                <div className="seller-details">
                                    <h5 className='m-0'>Anik Traders</h5>
                                    <p className="text-secondary mb-0">Electric & Electronics <br />Dhaka</p>
                                </div>

                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <Avatar image={building2} className="p-mr-2 seller-carousel-img" shape="circle" /> */}
                                <img src={building} alt="Avatar" class="avatar seller-carousel-img" />

                                <div className="seller-details-top">
                                    <h6 className='m-0'>12988</h6>
                                    <p className='mb-0'>People Connected</p>
                                </div>
                                <div className="seller-details">
                                    <h5 className='m-0'>Anik Traders</h5>
                                    <p className="text-secondary mb-0">Electric & Electronics <br />Dhaka</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={building} alt="Avatar" class="avatar seller-carousel-img" />
                                <div className="seller-details-top">
                                    <h6 className='m-0'>12988</h6>
                                    <p className='mb-0'>People Connected</p>
                                </div>
                                <div className="seller-details">
                                    <h5 className='m-0'>Anik Traders</h5>
                                    <p className="text-secondary mb-0">Electric & Electronics <br />Dhaka</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={building2} alt="Avatar" class="avatar seller-carousel-img" />

                                <div className="seller-details-top">
                                    <h6 className='m-0'>12988</h6>
                                    <p className='mb-0'>People Connected</p>
                                </div>
                                <div className="seller-details">
                                    <h5 className='m-0'>Anik Traders</h5>
                                    <p className="text-secondary mb-0">Electric & Electronics <br />Dhaka</p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
            {/* following seller end */}
            {/* settings section start */}
            <div className="mt-3 mb-3">
                <h6 className='text-secondary ms-4 mb-2'>Settings</h6>
                <div className="profile-contents" style={{ padding: '10px 0' }}>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item" >
                            <h2 className="accordion-header" id="flush-headingOne" style={{ border: 'none' }}>
                                <button className="accordion-button collapsed text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <FontAwesomeIcon icon={faBell} className='me-2' />
                                    Transaction & All Notification
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <FontAwesomeIcon icon={faCog} className='me-2' />
                                    Account Settings
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <FontAwesomeIcon icon={faList} className='me-2' />
                                    ShortList
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <FontAwesomeIcon icon={faUserEdit} className='me-2' />
                                    My Orders
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <FontAwesomeIcon icon={faGlobe} className='me-2' />
                                    Language
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <FontAwesomeIcon icon={faCommentDots} className='me-2' />
                                    My Help
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <FontAwesomeIcon icon={faSignOutAlt} className='me-2' />
                                    Logout
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <FontAwesomeIcon icon={faClipboardList} className='me-2' />
                                    Block List
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>

                    </div>
                    {/*  */}
                </div>
            </div>
            {/* settings section end */}

        </div>


    )
};
export default ProfileMain;