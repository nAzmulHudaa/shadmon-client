import { useEffect, useState } from 'react';
import { createContext } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserPage from './Components/Home/UserPage/UserPage';
import Navbar from './Components/Home/Navbar/Navbar';
import LoginBar from './Components/TestBar/LoginBar/LoginBar'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const[user,setUser] = useState([]);
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
        //console.log(data)
        setUser(data);
        setLoggedInUser(data)
    })
},[])

  return (
    // <div className="App">
    //  <Home />
    // </div>
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/user'>
            <Navbar/>
            <UserPage/>
          </Route>
          <Route path="/loginbar">
            <LoginBar />
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    
  );
}

export default App;
