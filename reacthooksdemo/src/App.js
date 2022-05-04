import logo from './logo.svg';
import './App.css';
import {useState,createContext,useContext} from 'react';
import ChildOne from './childone';
import UserContext from './appdatacontect';


function App() {

  const [user,changeName] = useState('Nikhil');

  

  
  return (
    <UserContext.Provider value={user}>
    <h1>Hello  { user }</h1>
    <ChildOne></ChildOne>
  </UserContext.Provider>
  );
}

export default App;

