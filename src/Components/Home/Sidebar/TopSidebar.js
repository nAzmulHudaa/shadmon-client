import { faAmbulance, faCar, faMoneyBill, faTshirt, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { Fastfood } from '@material-ui/icons';
import React from 'react';
import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarContent,
    SidebarHeader,
    SubMenu
} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css'
import { FaAppleAlt, FaStar, FaSun, FaFish, FaBaby, FaHome, FaTachometerAlt, FaCar, FaBars } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const TopSidebar = ({ category }) => {

    console.log(category)
    const { name, bn_name, icon, sub_category } = category;
    const sub_category_list = sub_category.map((item, index) => {
        return {
            name: item.name,
            bn_name: item.bn_name,
            icon: item.icon
        };

    })
    console.log(sub_category_list[0])


    return (
        <div>
            <div className="d-flex">
                <i class='far fa-address-book' style={{ marginTop: '14px', fontSize: '13px' }}></i>
                {
                    sub_category_list.length >= 1 ? <SubMenu title={name} className='sub_menu'>
                        <span className="d-flex sub_menu_item">
                            <FontAwesomeIcon icon={faCar} style={{ fontSize: '16px' }} className='sub_menu_icon' />
                            <MenuItem >{sub_category_list[0].name}</MenuItem>
                        </span>
                    </SubMenu> :
                            <MenuItem className='sub_menu'>{name}</MenuItem>
                }     
            </div>
           
        </div>
    );
};

export default TopSidebar;