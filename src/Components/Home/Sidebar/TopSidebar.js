import React from 'react';
import { useState } from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarContent,
    SubMenu
} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirFreshener, faAppleAlt, faLaptopMedical, faMapPin, faStar } from '@fortawesome/free-solid-svg-icons';




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
                breakPoint="md"
            >
                <SidebarContent>
                    <Menu iconShape="square">
                        
                        <SubMenu title={name} icon={<FontAwesomeIcon icon={faLaptopMedical} />}>
                         {
                             sub_category_list[0]?   <span className='d-flex'>
                             <FontAwesomeIcon style={{  marginRight:'10px',marginLeft:'25px',marginTop:'10px' }} icon={faAppleAlt} />
                             <MenuItem>{sub_category_list[0].name}</MenuItem>
                         </span>:null
                         }
                        </SubMenu>
                       
                    </Menu>
                </SidebarContent>

            </ProSidebar>
        </div>
    );
};

export default TopSidebar;