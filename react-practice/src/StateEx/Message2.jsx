import React from "react";

class Message2 extends React.Component{
    // msg = "hello"
    state = {
        msg:"Hii"
    }
    gmHandler =()=>{
    //   this.msg ="gm rahul gandhi"
    //   this.forceUpdate()
    this.setState({msg:"had ur breakfast"})
    }
    gnHandler =()=>{
        // this.msg ="gn rahul gandhi"
        // this.forceUpdate()
        this.setState({msg:"had ur lunch"})
    }
    
    render(){
        return <div>
            <h2>message B</h2>
            <h3>{this.state.msg}</h3>
            <button onClick={this.gmHandler}>gm</button>
            <button onClick={this.gnHandler}>gn</button>

        </div>
    }
}
export default Message2 