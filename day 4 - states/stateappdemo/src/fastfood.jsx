import {Component} from 'react';


export class Fastfood extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(<div>
             <ul>
                     {this.props.flist.map( (f)=> <li> {f.pName}</li>)}
             </ul>
        </div>)
    }
}

export default Fastfood;