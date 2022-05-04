import { useContext } from 'react';
import UserContext from './appdatacontect'
function   ChildFour(){

    
    const user = useContext(UserContext);

    return(<div>
        <h1> I am Child 4 - Fourth Level </h1>
        
        {user}
    </div>)
}

export default ChildFour;