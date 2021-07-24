import React from 'react';
import {
    Menu,
    MenuItem,
    ProSidebar,
    SubMenu
} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css'



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

                <Menu iconShape="square">
                    <div className=" d-flex justify-content-around">
                        <i class={icon} style={{ marginTop: '13px', marginRight: '15px' }}></i>
                        {
                            sub_category_list.length>=1 ? <SubMenu title={name}>
                                {
                                    sub_category_list[0] ? <span className='d-flex'>
                                        {/* <FontAwesomeIcon style={{ marginRight: '0', marginLeft: '0', marginTop: '10px' }} icon={faAppleAlt} /> */}
                                        <i class={sub_category_list[0].icon}></i>
                                        <MenuItem>{sub_category_list[0].name}</MenuItem>
                                    </span> : null
                                }
                            </SubMenu>:
                            <div className='d-flex'>
                                <MenuItem>{name}</MenuItem>
                            </div>
                            }
                       
                    </div>
                </Menu>


            </ProSidebar>

        </div>
    );
};

export default TopSidebar;