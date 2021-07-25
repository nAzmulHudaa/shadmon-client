import { faAmbulance, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
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
            <ProSidebar
                breakPoint='md'
            >

                <SidebarContent>
                    <Menu iconShape="square">

                        <div className="d-flex">
                            <i class={icon} style={{ marginTop: '12px', marginRight: '10px' ,fontSize:'16px'}} ></i>
                            {
                                sub_category_list.length >= 1 ? <div>
                                    <SubMenu title={name} icon={<FaSun/>} >
                                        {
                                             <span className='d-flex'>
                                                {/* <FontAwesomeIcon style={{ marginRight: '0', marginLeft: '0', marginTop: '10px' }} icon={faAmbulance} /> */}
                                                <i class={sub_category_list[0].icon}></i>
                                                <MenuItem>{sub_category_list[0].name}mmmmm</MenuItem>
                                                {/* <MenuItem>Food Itemmmmmm</MenuItem> */}
                                            </span>
                                            
                                        }
                                    </SubMenu>
                                </div> :
                                    <div className='d-flex'>
                                        <MenuItem>{name}</MenuItem>
                                    </div>
                            }

                        </div>
                    </Menu>

                </SidebarContent>

            </ProSidebar>

        </div>
        // <div>
        //     <ProSidebar
        //     breakPoint='md'
        //     >
        //         <SidebarContent>
        //             <Menu iconShape="square">

        //             </Menu>
        //         </SidebarContent>

        //     </ProSidebar>
        // </div>
    );
};

export default TopSidebar;