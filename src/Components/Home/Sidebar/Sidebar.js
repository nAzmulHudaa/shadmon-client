import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css';
import TopSidebar from './TopSidebar';

const Sidebar = () => {
    const [categories,setCategories] = useState([]);
    
    
    useEffect(() => {     
        const getData = async () => {  
          await axios.get('https://admin.atikshakil.info/api/categories')  
          .then(data => {  
            console.log(data.data.data) 
            setCategories(data.data.data); 
          })  
          .catch(err => {  
            console.log(err)  
          });  
        }  
        getData()  
      }, [])
    
    
    return (
        
            <div id="sidebar">
                {
                    categories.map(category => <TopSidebar category={category} key={category.id}></TopSidebar>)
                }
            </div>

    );
};

export default Sidebar;
