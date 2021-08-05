import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    Menu,
    MenuItem,
    ProSidebar,
    SubMenu,
  
    SidebarContent
} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css'


const Sorting = () => {
    const [sortData,setSortData] = useState([])
    
    
    // useEffect(()=>{
    //     fetch('https://admin.atikshakil.info/api/shorting')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setSortData(data.data)
    //     })
    // },[])
    useEffect(()=>{
        const getSortData = async()=>{
            await axios.get('https://admin.atikshakil.info/api/shorting')
            .then(data=>{
                setSortData(data.data.data)
             
            })
            .catch(err=>{
                console.log(err)
            })
        }
        getSortData()
    },[])
   

    return (
        <div id="sorting">

            {/* collapsed props to change menu size using menucollapse state */}
            <ProSidebar
                breakPoint='md'
            >
                <SidebarContent>
                    <Menu iconShape="square">
                        <SubMenu title="Sorting" className='sub_menu sub_custom' open='true' >
                            <span className=" ">
                              
                                {/* <FontAwesomeIcon icon={faCar} style={{fontSize:'14px'}} className='sub_menu_icon'/> */}
                                
                                {
                                    sortData.map(item=>{
                                        return(
                                            <span className='d-flex'>
                                                 <input type="checkbox" name="urgent" id="urgent" />
                                                 <label htmlFor="urgent"><MenuItem >{item.name}</MenuItem></label> 
                                            </span>
                                            
                                        )
                                    })
                                }
                                {/* <label htmlFor="urgent"><MenuItem >Urgent</MenuItem></label>  */}
                            </span>
                            {/* <span className="d-flex  ">
                                <input type="checkbox" name="cheap" id="cheap" />
                              
                                <label htmlFor="cheap"><MenuItem>Cheap Rate</MenuItem></label>
                            </span>
                            <span className="d-flex ">
                                <input type="checkbox" name="home" id="home" />
                               
                                <label htmlFor="home"><MenuItem>Home Delivery</MenuItem></label>
                            </span> */}
                            <b className ="ms-4 ps-1" style={{cursor:'pointer'}}>See More</b>

                        </SubMenu>
                    </Menu>
                </SidebarContent>

            </ProSidebar>
        </div>
    );
};

export default Sorting;