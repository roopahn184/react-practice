
import React, { Component } from 'react';
import Product from "./Product";

class ShoppingCart extends Component {
    
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
      <div>
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod)=>{
               return <Product 
               key={prod.id} 
               product={prod}
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
      );
  }
  componentDidMount = async () => {
    //send request to server
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });

    //the following code executes after receiving response from server
    //converting the response body into a JS object array
    var prods = await response.json();

    //the following code executes after converting response body into JS object array
    console.log(prods);

    //updating products into component's state
    this.setState({ products: prods });

    //console.log("componentDidMount - ShoppingCart");
  };

  componentDidUpdate(prevProps, prevState) {
    /*console.log(
      "componentDidUpdate - ShoppingCart",
      prevProps,
      prevState,
      this.props,
      this.state
    );*/
    // if (prevProps.x != this.props.x) {
    //   //make http call
    // }
  }

  //Executes when the current instance of current component is being deleted from memory
  componentWillUnmount() {
    //console.log("componentWillUnmount - ShoppingCart");
  }

  componentDidCatch(error, info) {
    //console.log("componentDidCatch - ShoppingCart");
    //console.log(error, info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  //executes when the user clicks on + button.
  handleIncrement = (product, maxValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  //executes when the user clicks on - button.
  handleDecrement = (product, minValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  //executes when the user clicks on Delete (X) button in the Product component.
  handleDelete = (product) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete?")) {
      //delete product based on index
      allProducts.splice(index, 1);

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };
}

export default ShoppingCart