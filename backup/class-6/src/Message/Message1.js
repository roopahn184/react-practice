import React, { Component } from 'react'

export className Message1 extends Component {
    constructor(props){
        super(props)
        console.log("first constructor");
      this.state = {msg:"hello"}
    }
    gmHandler(){
        console.log("3rd method");
        this.setState({msg:"good morging"})
    }
    componentDidMount() {
        console.log("third - life cycle method -automataicallly")
    }
  render() {
    console.log("second render method");
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <h2>Message:{this.state.msg}</h2>
        <button onClick={this.gmHandler}>gm</button>
      </div>
    )
  }
}

export default Message1