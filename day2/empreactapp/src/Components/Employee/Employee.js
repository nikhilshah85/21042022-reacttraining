import {Component} from 'react'
import Products from '../Products/Products';
import './Employee.css'
class Employee extends Component
{
    empNo = 101;
    empName = "Nikhil";
    empDesignation = "Trainer";
    empLocation = "Mumbai";

    greetUser()
    {
        
        var trainingName = "React Development";
        let myName = "Nikhil";
        console.log('Hello and Welcome');
    }
  
    render()
    {
        return(<div>
            <h1> This is my First Compnent - Employee Component - Class based</h1>
            <h3> Developed By : { this.empName + " " + this.empDesignation }</h3>
            <h3> Developer At : {this.empLocation}</h3>
            <button onClick={this.greetUser()}> Greet </button>

            <hr/>
          
        </div>)
    }


}

export default Employee;