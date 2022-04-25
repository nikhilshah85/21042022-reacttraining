import {Component} from 'react'
export class Manager extends Component
{
    empManagerName = "Shrushti";

    render()
    {
        return(<div>
            <h1> Manager Comonent : {this.empManagerName}</h1>
            <h1> Client Manager : {this.props.clientManagerName}</h1>
            <button onClick={this.props.greet}> Greet Managers</button>
        </div>)
    }

}

export default Manager;