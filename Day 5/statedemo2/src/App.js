import { Component } from 'react';
import AddEmployee from './AddEmployee';
import './App.css';
import Employee from './employee';

export class  App extends Component{


  constructor(props)
  {
    super(props);
    this.state ={    
    employee:[
      {empNo:101, empName:'Nikhil',empDesignation:'Consultant',empSalary:6000},
      {empNo:102, empName:'Priya',empDesignation:'HR',empSalary:16000},
      {empNo:103, empName:'Hardik',empDesignation:'Account',empSalary:26000},
      {empNo:104, empName:'Jitesh',empDesignation:'Consultant',empSalary:3000},    
    ],
   
  }

}

addEmployee(newEmp)
{
  // console.log(newEmp);
  var emp = {
    empNo:newEmp.empNo,
    empName:newEmp.empName,
    empDesignation:newEmp.empDesignation,
    empSalary:newEmp.empSalary
  }
  var empList = this.state.employee;
  empList.push(emp);
    this.setState({employee:empList});
}
  
 
  
  render()
  {
    return(<div>
      <Employee eDetails={this.state.employee}></Employee>

      <hr/>

      <AddEmployee addNewEmp={ (e)=>{
        console.log(e);
        this.state.addEmployee(e)
        
        }  } ></AddEmployee>
    </div>)
  }
  
  

  
}

export default App;
