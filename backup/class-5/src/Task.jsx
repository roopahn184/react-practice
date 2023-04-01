
import React,{Component} from "react";

class Task extends  Component{
    state = {
        name:"Iphone12s",Qty:1,price:45000
    }
    incrHandler = ()=>{
        this.setState({Qty:this.state.Qty + 1})
    }
    decrHandler = ()=>{
        this.setState({Qty:this.state.Qty - 1})
    }
    render(){
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="table">
                        <thead className="bg-success text-white">
                            <tr>
                                <th>Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td>{this.state.name}</td>
                              <td><i onClick={this.decrHandler} className="fa fa-minus-circle"></i>{this.state.Qty} <i onClick={this.incrHandler} className="fa fa-plus-circle"></i> </td> 
                              <td>{this.state.price}</td> 
                              <td>{this.state.Qty * this.state.price}</td>
                            </tr>
                        </tbody>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Task