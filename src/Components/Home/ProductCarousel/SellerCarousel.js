import React from 'react';
import Carousel from 'react-grid-carousel'
import building from '../../../images/building1.jpg'
import building2 from '../../../images/building3.jpg';
import './SellerCarousel.css'
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';


const SellerCarousel = () => {
    const responsiveLayout = [
        [
          { breakpoint: 1000, cols: 3 },
          { breakpoint: 750, cols: 2, rows: 1, gap: 5 },
          { breakpoint: 499, autoplay: 2000, loop: true }
        ]
      ]
      return (
        <div className=" seller-carousel rounded  mb-3">
            <div className="d-flex justify-content-between ">
                <h6 className='ms-3'>Connect With Sellers</h6>
                <p className='mb-0 me-3'>See all</p>
            </div>
       
          <Carousel
            cols={3} rows={1} gap={10} loop responsiveLayout ={responsiveLayout}
          >
            <Carousel.Item>
            <Avatar image={building} className="p-mr-2 seller-carousel-img" shape="circle" />

             
            
            </Carousel.Item>
            <Carousel.Item>
            <Avatar image={building2} className="p-mr-2 seller-carousel-img" shape="circle" />
            


            </Carousel.Item>
            <Carousel.Item>
           
            <Avatar image={building} className="p-mr-2 seller-carousel-img" shape="circle" />
            
            </Carousel.Item>
            <Carousel.Item>
            
            <Avatar image={building2} className="p-mr-2 seller-carousel-img" shape="circle" />
             
            </Carousel.Item>
            <Carousel.Item>
            
            <Avatar image={building} className="p-mr-2 seller-carousel-img" shape="circle" />
          </Carousel.Item>
          <Carousel.Item>
            
          <Avatar image={building2} className="p-mr-2 seller-carousel-img" shape="circle" />
           
          </Carousel.Item>
    
          </Carousel>
        </div>
)};

export default SellerCarousel;