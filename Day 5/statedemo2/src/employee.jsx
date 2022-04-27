import { Component } from "react";



export class Employee extends Component
{

    constructor(props)
    {
        super(props);
    }

    render(){
        return(<div>
            <h1> Employee Details </h1>

            <table>
                {this.props.eDetails.map( (e,i)=>{
                    return(
                      <tr>
                          <td> {e.empNo}</td>
                          <td> {e.empName}</td>
                          <td> {e.empDesignation}</td>
                          <td> {e.empSalary}</td>                          
                      </tr>)
                })}
              
            </table>
        </div>)
    }
}

export default Employee;