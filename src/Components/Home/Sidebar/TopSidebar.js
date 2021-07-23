import React from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarContent,
    SubMenu
} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { FaFish, FaBaby, FaCar, FaTeamspeak, FaAddressBook } from 'react-icons/fa';
import { FiHome } from "react-icons/fi";
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faStar } from '@fortawesome/free-solid-svg-icons';




const TopSidebar = ({ category }) => {
    console.log(category)
    const { name, sub_category } = category;



    return (
        <div>
            <ProSidebar
                breakPoint="md"
            >

                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem active={false} icon={<FiHome />}>
                            Home
                        </MenuItem>
                        <SubMenu title={name} icon={<FontAwesomeIcon icon={faStar} />}>
                            <span className='d-flex'>
                                <FontAwesomeIcon style={{  marginRight:'10px',marginLeft:'25px',marginTop:'10px' }} icon={faAppleAlt} />
                                <MenuItem>{sub_category[0].bn_name}</MenuItem>
                            </span>
                            <span className='d-flex'>
                                <FontAwesomeIcon style={{  marginRight:'10px',marginLeft:'25px',marginTop:'10px' }} icon={faAppleAlt} />
                                <MenuItem>{sub_category[0].name}</MenuItem>
                            </span>
                            <span className='d-flex'>
                                <FontAwesomeIcon style={{  marginRight:'10px',marginLeft:'25px',marginTop:'10px' }} icon={faAppleAlt} />
                                <MenuItem>{sub_category[0].name}</MenuItem>
                            </span>
                        </SubMenu>
                        <SubMenu title="Meats & Fish" icon={<FaFish />}>
                            <MenuItem>Fresh Fish</MenuItem>
                            <MenuItem>Meat</MenuItem>
                        </SubMenu>
                        <SubMenu title="Meats & Fish" icon={<FaBaby />}>
                            <MenuItem>Fresh Fish</MenuItem>
                            <MenuItem>Meat</MenuItem>
                        </SubMenu>
                        <SubMenu title="Meats & Fish" icon={<FaTeamspeak />}>
                            <MenuItem>Fresh Fish</MenuItem>
                            <MenuItem>Meat</MenuItem>
                        </SubMenu>
                        <SubMenu title="Meats & Fish" icon={<FaAddressBook />}>
                            <MenuItem>Fresh Fish</MenuItem>
                            <MenuItem>Meat</MenuItem>
                        </SubMenu>
                        <SubMenu title="Meats & Fish" icon={<FaFish />}>
                            <MenuItem>Fresh Fish</MenuItem>
                            <MenuItem>Meat</MenuItem>
                        </SubMenu>


                        <MenuItem icon={<FaCar />}>Vehicle Essentials</MenuItem>
                    </Menu>
                </SidebarContent>

            </ProSidebar>
        </div>
    );
};

export default TopSidebar;