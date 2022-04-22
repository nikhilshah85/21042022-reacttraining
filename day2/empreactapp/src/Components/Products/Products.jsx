import {Component} from 'react'

class Products extends Component
{
    productName ="Iphne 13";

    render(){
            return(<div>
                <h1> Welcome to Products Component </h1>
                <h2> { this.productName }</h2>

            <h1>    {this.props.shopName} </h1>
            </div>)
    }
}

export default Products;