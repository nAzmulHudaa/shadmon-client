import React from 'react';
import Carousel from 'react-grid-carousel'
import building from '../../../images/building1.jpg'
import building2 from '../../../images/building3.jpg';
import './SellerCarousel.css'


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
      <div className="d-flex justify-content-between mb-2 ">
        <h6 className='ms-3'>Connect With Sellers</h6>
        <h6 className='mb-0 me-3'>See all</h6>
      </div>

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

            <button>Connect & See</button>
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
            <button>Connect & See</button>
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
            <button>Connect & See</button>
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
            <button>Connect & See</button>
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
            <button>Connect & See</button>
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
            <button>Connect & See</button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
};

export default SellerCarousel;