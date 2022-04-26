import {Component} from 'react';


export class Electronics extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(<div>
             <ul>
                     {this.props.elist.map( (e)=> <li> {e.pName}</li>)}
             </ul>
        </div>)
    }
}

export default Electronics;