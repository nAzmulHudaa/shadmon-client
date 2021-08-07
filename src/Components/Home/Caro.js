import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import building from '../../images/building1.jpg'
import building1 from '../../images/building3.jpg'
import building2 from '../../images/building2.jpg'

const Caro = () => {
    return (

        <OwlCarousel className='owl-theme' loop margin={10} nav>
            <div class='item'>
                <h4>1</h4>
                <img src={building} className='w-100' alt="" />
            </div>
            <div class='item'>
                <h4>2</h4>
                <img src={building1} className='w-100' alt="" />

            </div>
            <div class='item'>
                <h4>3</h4>
                <img src={building2} className='w-100' alt="" />

            </div>
            <div class='item'>
                <h4>4</h4>
                <img src={building} className='w-100' alt="" />

            </div>
            <div class='item'>
                <h4>5</h4>
            </div>
            <div class='item'>
                <h4>6</h4>
            </div>
            <div class='item'>
                <h4>7</h4>
            </div>
            <div class='item'>
                <h4>8</h4>
            </div>
            <div class='item'>
                <h4>9</h4>
            </div>
            <div class='item'>
                <h4>10</h4>
            </div>
            <div class='item'>
                <h4>11</h4>
            </div>
            <div class='item'>
                <h4>12</h4>
            </div>
        </OwlCarousel>
    );
};

export default Caro;