import ChildTwo from './childtwo';

function   ChildOne(){
    return(<div>
        <h1> I am Child 1 - First Level </h1>

      

        <ChildTwo></ChildTwo>
    </div>)
}

export default ChildOne;