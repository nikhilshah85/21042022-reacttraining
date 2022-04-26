import logo from './logo.svg';
import './App.css';
import { Component} from 'react'
import Client from './client';
import Colddrinks from './colddrinks';
import Electronics from './electronics';
import Fastfood from './fastfood';


class App extends Component
{
    constructor(props)
  {

    //app.js is not the right place to declare state, we do it in a different file
    super(props);
    this.state = {
      firstName:'Nikhil',
      lastName:'Shah',
      designation:'Consultant',
      techList:['.Net','React','Angular','Azure', 'WebAPI','MVC','MSBI'],
      contactInfo:{email:'nikhil2gmail.com',phone:89565656,coff:5698745},
      productList:[
        {pId:101, pName:'Pepsi',pCategory:'Cold-Drink',pPrice:50},
        {pId:102, pName:'Frooti',pCategory:'Cold-Drink',pPrice:50},
        {pId:103, pName:'IPhone',pCategory:'Electronics',pPrice:50},
        {pId:104, pName:'Dell',pCategory:'Electronics',pPrice:50},
        {pId:105, pName:'Fossil',pCategory:'Electronics',pPrice:50},
        {pId:106, pName:'Coke',pCategory:'Cold-Drink',pPrice:50},
        {pId:107, pName:'Maggie',pCategory:'Fast-Food',pPrice:50},
        {pId:108, pName:'Sandwitch',pCategory:'Fast-Food',pPrice:50},
        {pId:109, pName:'Cold Coffee Latte',pCategory:'Cold-Drink',pPrice:50},
        {pId:110, pName:'Fanta',pCategory:'Cold-Drink',pPrice:50}
      ],
      electronicList:[],
      colddrinkList:[],
      fastFoodList:[]
    }   

    this.changeName = this.changeName.bind(this);
    this.addNewTech = this.addNewTech.bind(this);
    this.collectCategories = this.collectCategories.bind(this);

    //this will seperate all the data
  }

  collectCategories()
  {
    var colddrink = [];
    var electronics = [];
    var fastfood = [];
    for(var i=0;i< this.state.productList.length;i++)
    {
     
      
      if(this.state.productList[i].pCategory == 'Cold-Drink')
      {          
        colddrink.push(this.state.productList[i]);
      }
      if(this.state.productList[i].pCategory == 'Fast-Food')
      {          
        fastfood.push(this.state.productList[i]);
      }
      if(this.state.productList[i].pCategory == 'Electronics')
      {          
        electronics.push(this.state.productList[i]);
      }

      this.setState({electronicList:electronics});
      this.setState({colddrinkList:colddrink});
      this.setState({fastFoodList:fastfood});
    }
  }

  changeName()
  {
    // this.state.firstName = "Nikita";
    this.setState({firstName:'Nikita Sharam'});
  }

  addNewTech()
  {
    let currentList = this.state.techList;

    var t = document.getElementById('txtNewTech').value;
    currentList.push(t);
    this.setState({techList:currentList});

  }

  render(){
    return(<div>
      {/* <button onClick={this.changeName}>Change Name</button>
      <h1> { this.state.firstName } { this.state.lastName }</h1>
           <ul>
        {this.state.techList.map( (t)=> <li> {t}</li>)}
      </ul>
      <input type="text" placeholder='Enter Name of new technology' id="txtNewTech"/>
      <button onClick={this.addNewTech }> Add new tech</button>

      <hr/>
      <Client profile={this.state.designation} name={this.state.firstName} lName={this.state.lastName}></Client> */}

        <button onClick={this.collectCategories}> Distribute data </button>
        <Colddrinks clist={this.state.colddrinkList}></Colddrinks> <hr/>
        <Electronics elist={this.state.electronicList}></Electronics> <hr/>
        <Fastfood flist={this.state.fastFoodList}></Fastfood> <hr/>




             {/* <ul>
                     {this.state.productList.map( (c)=> <li> {c.pId}</li>)}
             </ul> */}


    </div>)
  }

}

export default App;
