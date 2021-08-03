import { faCar, faMoneyBill, faTshirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
    Menu,
    MenuItem,
    ProSidebar,
    SubMenu,
    SidebarHeader,
    SidebarContent
} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css'


const Sorting = () => {

    return (
        <div id="sorting">

            {/* collapsed props to change menu size using menucollapse state */}
            <ProSidebar
                breakPoint='md'
            >
                <SidebarContent>
                    <Menu iconShape="square">
                        <SubMenu title="Sorting" className='sub_menu sub_custom' open='true' >
                            <span className="d-flex ">
                                <input type="checkbox" name="urgent" id="urgent" />
                                {/* <FontAwesomeIcon icon={faCar} style={{fontSize:'14px'}} className='sub_menu_icon'/> */}
                                <label htmlFor="urgent"><MenuItem >Urgent</MenuItem></label> 
                            </span>
                            <span className="d-flex  ">
                                <input type="checkbox" name="cheap" id="cheap" />
                                {/* <FontAwesomeIcon icon={faMoneyBill}style={{fontSize:'12px'}} className='sub_menu_icon'/> */}
                                <label htmlFor="cheap"><MenuItem>Cheap Rate</MenuItem></label>
                            </span>
                            <span className="d-flex ">
                                <input type="checkbox" name="home" id="home" />
                                {/* <FontAwesomeIcon icon={faTshirt} style={{ fontSize: '12px' }} className='sub_menu_icon' /> */}
                                <label htmlFor="home"><MenuItem>Home Delivery</MenuItem></label>
                            </span>
                            <b className ="ms-4 ps-1" style={{cursor:'pointer'}}>See More</b>

                        </SubMenu>
                    </Menu>
                </SidebarContent>

            </ProSidebar>
        </div>
    );
};

export default Sorting;