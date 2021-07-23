/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavBottom.css';

const NavBottom = () => {
    return (
        <div className="d-flex navBottomContainer">
            <div className="d-flex navItem m-auto">
                <p className="me-5 selected">All Product</p>
                <p className="me-5">All Order</p>
                <p className="me-5">My Page</p>
                <p className="me-5">Promote</p>
            </div>
        </div>
    );
};

export default NavBottom;