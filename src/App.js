import { useState } from 'react';
import { createContext } from 'react';
import './App.css';
import Home from './Components/Home/Home';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] =useState({});
  return (
    // <div className="App">
    //  <Home />
    // </div>
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Home/>
    </UserContext.Provider>
    
  );
}

export default App;
