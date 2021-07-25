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
        <div id="">

            {/* collapsed props to change menu size using menucollapse state */}
            <ProSidebar
              >
                <SidebarContent>
                    <Menu iconShape="square">
                        <SubMenu title="Sorting" className='sub_menu sub_custom' open='true' >
                            <span className="d-flex  " >
                                <FontAwesomeIcon icon={faCar} style={{fontSize:'14px'}} className='sub_menu_icon'/>
                                <MenuItem >Urgent</MenuItem>
                            </span>
                            <span className="d-flex  ">
                                <FontAwesomeIcon icon={faMoneyBill}style={{fontSize:'12px'}} className='sub_menu_icon'/>
                                <MenuItem>Cheap Rate</MenuItem>
                            </span>
                            <span className="d-flex ">
                                <FontAwesomeIcon icon={faTshirt}style={{fontSize:'12px'}} className='sub_menu_icon'/>
                                <MenuItem>Online Delivery</MenuItem>
                            </span>

                        </SubMenu>
                    </Menu>
                </SidebarContent>

            </ProSidebar>
        </div>
    );
};

export default Sorting;