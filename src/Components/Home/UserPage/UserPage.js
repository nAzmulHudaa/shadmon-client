import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';

const UserPage = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState([]);
    // useEffect(()=>{
    //     fetch('http://admin.atikshakil.info/api/user-profile',{
    //        method:'GET',
    //        headers:{
    //         "Content-type":"application/json",
    //         authorization: `Bearer ${sessionStorage.getItem('token')}`
    //     }

    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setUser(data);
    //     })
    // },[])
    useEffect(()=>{
        fetch('http://admin.atikshakil.info/api/user-profile',{
            method:'GET',
            headers:{
                "Content-type":"application/json",
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUser(data);
        })
    },[])
    console.log(user)

    return (
        <div>
            <h1>User Profile</h1>
            <p>{user.name}</p>
        </div>
    );
};

export default UserPage;