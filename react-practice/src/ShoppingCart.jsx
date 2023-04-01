import { all } from 'axios';
import React, { Component } from 'react';
import Product from "./Product";

export class ShoppingCart extends Component {
    state ={
        products:[
            {id:1,productName:"iPhone",price:89000,quantity:0},
            {id:2,productName:"samsung",price:45000,quantity:0},
            {id:3,productName:"redmi",price:25000,quantity:0},
            {id:4,productName:"realme",price:15000,quantity:0},
            {id:5,productName:"iPad pro",price:90000,quantity:0},
            {id:6,productName:"Xbox",price:8000,quantity:0}
        ]

       
    }
  render() {
    return (
      <div className='container-fluid'>
        <h4>ShoppingCart</h4>
        <div className="row">
          {this.state.products.map((prod)=>{
               return <Product key={prod.id} product={prod}
               onIncrement={this.handleIncrement}
               onDecrement={this.handleDecrement}
               onDelete={this.handleDelete}>
                <button className='btn btn-success'>Buy Now</button>
               </Product>
          })} 
          </div>
          <div> 
        </div>
        </div>
    )
  }
  handleIncrement=(product)=>{
    console.log("handleincrement",product);
    let allProducts =[...this.state.products];
    let index=allProducts.indexOf(product);
    console.log(allProducts[index]);
    allProducts[index].quantity++;
    this.setState({products:allProducts});

  }
  handleDecrement=(product)=>{
    console.log("handledecrement",product);
    let allProducts=[...this.state.products];
    let index=allProducts.indexOf(product);
    allProducts[index].quantity--;
    this.setState({product:allProducts})

  }
  handleDelete=(product)=>{
    let allProducts=[...this.state.products];
    let index=allProducts.indexOf(product);
    if(window.confirm("are you sure to delete")){

   
    allProducts.splice(index,1);
    this.setState({products:allProducts})
  }
  }
}

export default ShoppingCart