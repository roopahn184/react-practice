import React from "react";

class Message extends React.Component{
    state ={
        msg:"Hello"
    }
    updateHandler(value){
        this.setState({msg:value})
    }
    render(){
        return <div>
         <h1>react Component</h1>
         <h2>{JSON.stringify(this.state)}</h2>
         <h3>{this.state.Message}</h3>
         <button onClick={this.updateHandler.bind(this,"good morning")}>gm</button>
         <button onClick={this.updateHandler.bind(this,"good afternoon")}>ga</button>
         <button onClick={this.updateHandler.bind(this,"evening")}>ge</button>
         <button onClick={this.updateHandler.bind(this,"good nt")}>gn</button>
        </div>
    }
}
export default Message