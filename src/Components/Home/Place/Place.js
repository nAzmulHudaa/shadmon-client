import React from 'react';
import './Place.css'
import place from '../../../images/place.jpg'

const Place = () => {
    return (
       <div className="placeDiv mt-3 mb-4 rounded">
           <div className="place-overlay rounded-top">
               <p className='text-center'>This Place is For You !!! Can Get Tk 5000</p>
           </div>
           <div className="d-flex m-auto">
               <div className="place-info">
                   <h5>Post & Earn <br /> Make Some Extra Cash</h5>
                   <p>Sell your used or brand new product <br /> easily. Beside  selling detail <a href="#">see here</a> <br />You can get it in Tk 5000 </p>
                   <button className='btn btn-danger mt-3'>Start Selling</button>

               </div>
               <div className="place-img">
                   <img src={place} className='' alt="" />
               </div>
           </div>
       </div>
    );
};

export default Place;