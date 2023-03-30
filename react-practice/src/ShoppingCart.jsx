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
        <div>
          {this.state.products.map((prod)=>{
               return <Product key={prod.id} product={prod}/>
          })}  
        </div>
        </div>
    )
  }
}

export default ShoppingCart