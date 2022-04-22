import logo from './logo.svg';
import './App.css';
import Employee from './Components/Employee/Employee';
import Products from './Components/Products/Products';

function App() {

  var developerName = "Nikhil";

  function greetUser()
  {
    console.log('welcome to React');
  }
  return (
    <div className="divAPP">
        <h1> Welcome to React Day 2 Session </h1>
        <p>Hello I am a  paragraph </p> 

       <Products shopName="Amazon Shoppe"></Products>

        {greetUser()}
        <h1> {developerName } </h1>
        <table>
          <tr> 
            <td> Name </td>
            <td> Name </td>
            <td> Name </td>
            <td> Name </td>            
          </tr>
          </table>

          <hr/>
          <Employee></Employee>
    </div>

  
  );
}

export default App;
