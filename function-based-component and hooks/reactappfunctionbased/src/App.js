
import { useState, useEffect} from 'react';
import Home from './Home'

function App() {

  const [developerName,changeDeveloper] = useState('Nikhil');
  const [appName,changeAppName] = useState('');
    const [clientProfile,changeProfile] = useState({
    clientId:101,
    clientName:'INS',
    clientLocation:'Vizag',
    clientProject:'Submarine Tracker'
  })

  const[myNumber, modifyNumber] = useState(100);

  useEffect( ()=>{
    setTimeout(()=>{
      modifyNumber ( (myNumber)=> myNumber + 1);
    },1000)
  })


  const [technologies,techList] = useState(['.Net','DP',"React"]);


  const changeProjectName= ()=>{
    changeProfile(projectName => {
      return { ...changeProjectName,clientProject :"Indian Submarin Tracker"}
    })

  }

  const changeProjectLocation = () =>{
    changeProfile(pName =>{
      return { ...pName,clientLocation:'Mumbai'}
    });

  }
  return (
    <div>
   <h1> {developerName}</h1>

    {/* <button onClick={ ()=> changeDeveloper("Karan")}>Change Developer Name</button>
    <button onClick={ () => changeAppName('Function Based React APP')}> APP Name</button>
    <p> APP:  { appName }</p>
      <Home devName={ developerName}> </Home> */}
{/* 


      <h1> Client ID : {clientProfile.clientId} is {clientProfile.clientName} located at {clientProfile.clientLocation} has an ongoing project on {clientProfile.clientProject} </h1>
      <button onClick={changeProjectLocation}> Location Change </button>
      <button onClick={changeProjectName}> Update Projec Name </button> */}

      <h1> My Fav Number is : {myNumber}</h1>
    </div>
  );
}

export default App;
