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

                breakPoint="md"
                


            >
                <SidebarHeader>

                    <div className="closemenu" >
                        {/* changing menu collapse icon on click */}
                        {/* {menuCollapse ? (
                        <FiArrowRightCircle />
                    ) : (
                        <FiArrowLeftCircle />
                    )} */}

                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <SubMenu title="Sorting" open='true'  >
                            <span className="d-flex" >
                                <FontAwesomeIcon icon={faCar} style={{fontSize:'16px'}} className='mt-2'/>
                                <MenuItem >Urgent</MenuItem>
                            </span>
                            <span className="d-flex">
                                <FontAwesomeIcon icon={faMoneyBill}style={{fontSize:'16px'}} className='mt-2'/>
                                <MenuItem>Cheap Rate</MenuItem>
                            </span>
                            <span className="d-flex">
                                <FontAwesomeIcon icon={faTshirt}style={{fontSize:'16px'}} className='mt-2'/>
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