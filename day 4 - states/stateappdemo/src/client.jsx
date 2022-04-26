import { Component } from "react";

class Client extends Component
{

    constructor(props)
    {
        super(props);
    }

    render(){
        return(<div>
            <h1> { this.props.profile }</h1>
            <h1> {this.props.name} {this.props.lName}</h1>
        </div>)
    }


}

export default Client;