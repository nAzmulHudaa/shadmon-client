/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavBottom.css';

const NavBottom = () => {
    return (
        <div className="d-flex align-items-center font navBottomContainer">
            <div className="navItem d-flex m-auto ">
                <p className="me-4">All Product</p>
                <p className="me-4">All Order</p>
                <p className="me-4">My Page</p>
                <p className="me-4">Promote</p>
            </div>
        </div>
    );
};

export default NavBottom;