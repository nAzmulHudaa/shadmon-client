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
    const [sortData, setSortData] = useState([]);
    const [visible, setVisible] = useState(1);

    const loadMore = () => {
        setVisible((prevValue) => prevValue + 1);
    }
    
    
    const decrease = () => {
        setVisible((prevValue) => prevValue - 2);
       
    }
   

    // here we will fetch data asynchronusly from the api

    useEffect(() => {
        const getSortData = async () => {
            await axios.get('https://admin.atikshakil.info/api/shorting')
                .then(data => {
                    setSortData(data.data.data)

                })
                .catch(err => {
                    console.log(err)
                })
        }
        getSortData()
    }, [])
  
    return (
        <div id="sorting">

            {/* collapsed props to change menu size using menucollapse state */}
            <ProSidebar
                breakPoint='md'
            >
                <SidebarContent>
                    <Menu iconShape="square">
                        <SubMenu title="Sorting" className='sub_menu sub_custom' open='true' >
                            <span className="">
                                {
                                    sortData.slice(0, visible).map(item => {
                                        return (
                                            <span className='d-flex'>
                                                <input type="checkbox" name={item.name} id ={item.name} />
                                                <label htmlFor={item.name}><MenuItem >{item.name}</MenuItem></label>
                                            </span>

                                        )
                                    })
                                }
                            </span>

                            {/* <p onClick={() => setShowMore(!showMore)} className='m-0'> */}
                               {
                                     sortData.length>visible ? 
                                        <div>
                                            <b className="ms-4 ps-1" style={{ cursor: 'pointer' }} onClick={loadMore} >Show More</b>
                                        </div>
                                        :
                                        <div>
                                            <b className="ms-4 ps-1" style={{ cursor: 'pointer' }} onClick={decrease} >See Less</b>
                                        </div>
                                }
                            {/* </p>  */}
                            



                        </SubMenu>
                    </Menu>
                </SidebarContent>

            </ProSidebar>
        </div >
    );
};

export default Sorting;