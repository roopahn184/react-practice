import React from "react";
className Message extends React.Component{
    // msg = "hello"
    state = {
        msg:"Hello"
    }
    updateHandler = () =>{
        // this.msg="updatehandler invoking perfectly";
        // this.forceUpdate()
        this.setState({msg:"good morning......."})
    }
   render(){
    console.log("render executing perfectly");
    return <div>
        <h2>Message component</h2>
        <h3>message value:{this.state.msg}</h3>
        <button onClick={this.updateHandler}>submit</button>
    </div>
   }
}
export default Message
