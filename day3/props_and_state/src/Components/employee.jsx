import {Component} from 'react'
import Manager from './Manager';
export class Employee extends Component
{
    empName = "Nikhil";

    render(){
        return(<div>

          <h1> Employee Component :  {this.empName} </h1>
          <h1> Client Emplyee : {this.props.clientEmp}</h1>

        <p> Data from parent : { this.props.eName } </p>

        <button onClick={this.props.greeting}>Greet Employee</button>
          <hr/>
        </div>)
    }
}

export default Employee