import { faBookmark, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hero from '../../../images/hero.jpg';
import './Popular.css'

const Popular = () => {

    return (
        <div className="d-flex popular-pd ">
            <div className="hero-box">
                <div className='d-flex justify-content-between text-secondary mb-2 mt-2'>
                    <p className='ms-md-3'>Buy & Bid a Product at unbelievable price</p>
                    <button className='popular-bid'>Bid Now</button>
                </div>
                <div className="overlay-text-popular">
                    <h2>Most Popular Choice!</h2>
                </div>
                <div className="popular-img">
                    <img src={hero} alt="apartment" className=' rounded-top' />
                </div>
                <div className="hero-content mt-md-2 mb-md-3">
                    <div className="hero-info">
                        <div className="d-flex">
                            <div className='me-md-2'>
                                <img className='author_logo' src="https://cdn.freelogovectors.net/wp-content/uploads/2021/04/xiaomi-logo-freelogovectors.net_.png" alt="" />
                            </div>
                            <div className='pd-details'>
                                <h5 style={{ fontSize: '20px',margin:'0px' }}>2 BHK Residential Apartment in Chandivali</h5>
                                <div className="hero-mid d-flex">
                                    <div className="first d-flex">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#6C757D' }} className='mt-md-1 mt-1 me-1 me-md-2' />
                                        <p style={{ color: '#6C757D', marginBottom: '0px' }}>Chittagong</p>
                                    </div>
                                    <div className="second d-flex">
                                        <FontAwesomeIcon icon={faBookmark} style={{ color: '#6C757D' }} className='mt-md-1 mt-1 me-1 me-md-2 ms-md-2 ms-0' />
                                        <p style={{ color: '#6C757D', marginBottom: '0px' }}>Electronics</p>
                                    </div>
                                </div>

                                <div className="last d-flex justify-content-between pb-2" style={{ borderBottom: "1px solid gray" }}>
                                    <p style={{ marginBottom: "0px", color: '#6C757D' }}>Miami Trading, 14 people connected</p>

                                </div>

                                <div className="price-container pb-2" style={{ borderBottom: '1px solid gray' }}>
                                    <div className="d-flex ">
                                        <h3>Current Price </h3>
                                        <h3 className="priceTag">$154</h3>
                                    </div>
                                    <div className="d-flex">
                                        <h5>Bid starting price </h5>
                                        <h5 className="priceTag2 ">$5</h5>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h3>Your Price </h3>
                                        <div className="priceTag3">
                                            <input type="text" className='bid-input' defaultValue='$425' />
                                            {/* <button className="btn btn-outline-primary">$425</button> */}
                                            <button className="btn btn-primary ms-3">BID NOW</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="timer-container">
                                    <em>Want to bid? Hurry up!</em>
                                    <div className="d-flex">
                                        <div className="d-flex">
                                            <div>
                                                <h3 className="text-danger">00</h3>
                                                <em>Days</em>
                                            </div>
                                            <div className="ms-4">
                                                <h3 className="text-danger">07</h3>
                                                <em>Hours</em>
                                            </div>
                                            <div className="ms-5">
                                                <h3 className="text-danger">56</h3>
                                                <em>Days</em>
                                            </div>
                                        </div>
                                        <div className='popular-btn'>
                                            <button className="btn btn-primary">See More</button>
                                        </div>

                                    </div>
                                    <em>Ends Feb 8, 2021 at 07 54 PM</em>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default Popular;