import ChildThree from './childthree';

function   ChildTwo(){
    return(<div>
        <h1> I am Child 2 - Second Level </h1>
        
        

        <ChildThree></ChildThree>
    </div>)
}

export default ChildTwo;