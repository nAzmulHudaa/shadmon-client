import { faCar, faGasPump, faMoneyBillWaveAlt, faSadTear, faSatellite, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css';
import Sorting from './Sorting';
import TopSidebar from './TopSidebar';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const getData = async () => {
      await axios.get('https://admin.atikshakil.info/api/categories')
        .then(data => {
         // console.log(data.data.data)
          setCategories(data.data.data);
        })
        .catch(err => {
          console.log(err)
        });
    }
    getData()
  }, [])


  return (

   <div className='main-sidebar'>
      <div id="sidebar">
      <Sorting />
      <ProSidebar
      breakPoint = 'md'
      >
        <SidebarContent>
          <Menu iconShape='square'>
            <SubMenu title='All Categories' className='sub_menu' open='true' >
              {
                categories.map(category => <TopSidebar category={category} key={category.id}></TopSidebar>)
              }
            </SubMenu>
            <SubMenu title="Location" className='sub_menu' open='true' >
              <span className="d-flex " >
                <FontAwesomeIcon icon={faCar} style={{ fontSize: '14px' }} className='sub_menu_icon' />
                <MenuItem >Urgent</MenuItem>
              </span>
              <span className="d-flex ">
                <FontAwesomeIcon icon={faMoneyBillWaveAlt} style={{ fontSize: '12px' }} className='sub_menu_icon' />
                <MenuItem>Cheap Rate</MenuItem>
              </span>
              <span className="d-flex ">
                <FontAwesomeIcon icon={faShieldAlt} style={{ fontSize: '12px' }} className='sub_menu_icon' />
                <MenuItem>Online Delivery</MenuItem>
              </span>
              <span className="d-flex ">
                <FontAwesomeIcon icon={faSatellite} style={{ fontSize: '12px' }} className='sub_menu_icon' />
                <MenuItem>Online Delivery</MenuItem>
              </span>
              <span className="d-flex ">
                <FontAwesomeIcon icon={faSadTear} style={{ fontSize: '12px' }} className='sub_menu_icon' />
                <MenuItem>Online Delivery</MenuItem>
              </span>
              <span className="d-flex ">
                <FontAwesomeIcon icon={faGasPump} style={{ fontSize: '12px' }} className='sub_menu_icon' />
                <MenuItem>Online Delivery</MenuItem>
              </span>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter className='sidebar_footer'>
          <div className='footer '>
            <a href='#'>App</a>
            <a href="#">  Add To Home Screen</a>
            <a href="#">  Like us on Facebook</a>
            <a href="#">  Tips & Tricks</a>
            <a href="#">  Help & Support</a>
            <a href="#"> Promote</a>
            <a href="#"> Blog</a>
            <a href="#">  About Us</a>
            <a href="#">  Privacy</a>
            <a href="#">  Terms</a>
          
          </div>
        </SidebarFooter>

      </ProSidebar>
    </div>

   </div>

  );
};

export default Sidebar;
