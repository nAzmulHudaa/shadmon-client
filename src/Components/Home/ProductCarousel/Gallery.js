import React from 'react'
import Carousel from 'react-grid-carousel'
import building from '../../../images/building1.jpg'
import building2 from '../../../images/building3.jpg'
import building3 from '../../../images/building4.jpg'

const Gallery = () => {
  const responsiveLayout = [
    [
      { breakpoint: 1000, cols: 3 },
      { breakpoint: 750, cols: 2, rows: 1, gap: 5 },
      { breakpoint: 499, autoplay: 2000, loop: true }
    ]
  ]
  return (
   <div className = "test-slider">
      <div className="product-slider premium-pd rounded  mb-3">
      <h6 className='ms-3' style={{ color: 'gray' }}>Premium Products</h6>
      <Carousel
        cols={2} rows={1} gap={10} loop responsiveLayout ={responsiveLayout}
      >
        <Carousel.Item>


          <img src={building} className=' w-100 rounded' />
          <div className="overlay-card">
            <h5 className='overlay-title'>Land T Cresent Bay</h5>
            <p>Property:Dhaka</p>
            <h5>$3.5 - 4.91 Cr</h5>
            <p style={{ textAlign: "right", paddingTop: '15px' }}>See More</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        
          <img src={building2} className=' w-100 rounded' />
          <div className="overlay-card">
            <h5 className='overlay-title'>Land T Cresent Bay</h5>
            <p>Property:Dhaka</p>
            <h5>$3.5 - 4.91 Cr</h5>
            <p style={{ textAlign: "right", paddingTop: '15px' }}>See More</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
      
          <img src={building3} className='rounded w-100' />
          <div className="overlay-card">
            <h5 >Land T Cresent Bay</h5>
            <p>Property:Dhaka</p>
            <h5>$3.5 - 4.91 Cr</h5>
            <p style={{ textAlign: "right", paddingTop: '15px' }}>See More</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={building} className=' rounded w-100' />
          <div className="overlay-card">
            <h5 className=''>Land T Cresent Bay</h5>
            <p>Property:Dhaka</p>
            <h5>$3.5 - 4.91 Cr</h5>
            <p style={{ textAlign: "right", paddingTop: '15px' }}>See More</p>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
   </div>
  )
}
export default Gallery;