import {Component} from 'react';


export class Colddrinks extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(<div>
             <ul>
                     {this.props.clist.map( (c)=> <li> {c.pName}</li>)}
             </ul>
        </div>)
    }
}

export default Colddrinks;