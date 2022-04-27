import { Component } from "react";



export class AddEmployee extends Component
{

    constructor(props)
    {
        super(props);
    }

    collectEmpData()
    {
        var no = document.getElementById('txt_eNo').value;
        var name = document.getElementById('txt_eName').value;
        var designation = document.getElementById('txt_eDesignation').value;
        var sal = document.getElementById('txt_eSal').value;

            var emp = {
                empNo:no,
                empName:name,
                empDesignation:designation,
                empSalary:sal
              }
            console.log(emp);
        this.props.addNewEmp(emp);
    }
    


    render(){
        return(<div>

                <h1> Add New Employee </h1>
                <input type="number" placeholder="Enter Employee Number" id="txt_eNo"/>
                <input type="text" placeholder="Enter Employee Name" id="txt_eName"/>
                <input type="text" placeholder="Enter Employee Designation" id="txt_eDesignation"/>
                <input type="number" placeholder="Enter Employee Salary" id="txt_eSal"/>

                <button onClick={this.collectEmpData}> Add Employee</button>

        </div>)
    }
}

export default AddEmployee;