import { useState } from 'react';
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


export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] =useState(false);
  return (
    // <div className="App">
    //  <Home />
    // </div>
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/user'>
            <UserPage/>
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
