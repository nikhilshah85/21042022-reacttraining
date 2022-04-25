import {Component} from 'react';
import './App.css';
import Employee from './Components/employee';
import Manager from './Components/Manager';

class App extends Component {

    developerName = "Nikhil Shah";
    developerOrg = "Cognizant";
    teamSize = 30;

    listOfProjects = [
      'Banking Project',
      'Insurance Project',
      'Aviation Project',
      'Construction Project',
      'Hotel and Tourism Project'
    ]

    employeeList = [
      {empNo:101, empName:'Nikhil',empDesignation:'Sales',empSalary:5000, empIsPermenant:true},
      {empNo:102, empName:'Rahul',empDesignation:'Sales',empSalary:5000, empIsPermenant:true},
      {empNo:103, empName:'Riya',empDesignation:'Sales',empSalary:5000, empIsPermenant:false},
      {empNo:104, empName:'Karan',empDesignation:'Sales',empSalary:5000, empIsPermenant:true},
      {empNo:105, empName:'Subham',empDesignation:'Sales',empSalary:5000, empIsPermenant:true},
      {empNo:106, empName:'Mohit',empDesignation:'Sales',empSalary:5000, empIsPermenant:false},
      {empNo:107, empName:'Suresh',empDesignation:'Sales',empSalary:5000, empIsPermenant:true},
      {empNo:108, empName:'Kriti',empDesignation:'Sales',empSalary:5000, empIsPermenant:true},
      {empNo:109, empName:'Seema',empDesignation:'Sales',empSalary:5000, empIsPermenant:true},
      {empNo:110, empName:'Asmit',empDesignation:'Sales',empSalary:5000, empIsPermenant:false}
    ];

    clientInfo = {
      clientId:501,
      clientName:'XYZ Corp',
      clientEmail:'contact@xyz.com',
      clientEmployeeToConnect:'Mohan',
      clientManagerToConnect:'Shrinivas'
    }

    greetMessage()
    {
      alert('Hello and Welcome to function');
    }


  render(){
    return(
      <div>
        <div className='clientDiv'>
        <h3>  Client ID : {this.clientInfo.clientId} </h3>
        <h3>   Client Name : {this.clientInfo.clientName} </h3>
        <h3>   client Email : {this.clientInfo.clientEmail} </h3>

        <button onClick={this.greetMessage}>Button </button>

        {/* we use map function frm ES to deal with Arrays */}

      <p> List of our projects </p>
        {/* <ul>
          {this.listOfProjects.map((projects)=> <li>  {projects} </li> )} 
        </ul> */}
{/* 
        <ul>
          {
              this.listOfProjects.map((proj)=> <li> {proj}</li> )      
          }
        </ul> */}


        {/* <span>
          {this.listOfProjects.map((p,idx)=> {p} <input type="checkbox" key={idx} value={p} ></input>  )}
        </span> */}

        <h1> End of list </h1>






{/* 
          { <table>
            {
              this.employeeList.map( (emp)=> 
                <tr>
                  
                  <td>{ emp.empNo }</td>
                  <td> {emp.empName }</td>
                  <td> {emp.empDesignation }</td>
                  <td> {emp.empSalary }</td>
                  <td> {emp.empIsPermenant }</td>
                  <td> {emp.empSalary * 0.1 }</td>
                  <td> <button> Add </button></td>
                  <td> <button> Edit  </button></td>
                  <td> <button> Delete </button></td>
                </tr>
               )
            }

          </table> } */}



            <div>
              <hr/>
              {
                  this.employeeList.map( (e)=><div>
                                              <hr/>
                                               <h1> Employee Name : {e.empName}</h1> +
                                               <h2> Working As : {e.empDesignation}</h2> +            
                                               <h2> Working As : {e.empSalary}</h2> +
                                               <h2> Employeement Type : { e.empIsPermenant ? 'Permenant':'Contract'}</h2>
                                               </div>)              
                  


              }
            </div>


    </div>
        
    {/* <Employee eName={this.developerName}
              organization={this.developerOrg}
              teamMembers = {this.teamSize}
              clientEmp={this.clientInfo.clientEmployeeToConnect}
              greeting={this.greetMessage}>
    </Employee>

    <Manager clientManagerName={this.clientInfo.clientManagerToConnect}
            greet={this.greetMessage}>

    </Manager> */}
    </div>)
  }
}

export default App;
