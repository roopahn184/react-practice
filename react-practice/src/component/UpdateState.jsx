import React from "react";

class UpdateState extends React.Component{
     constructor(){
        super()
        this.state ={
            id:101,
            name:"mery"
        }
     }

    render(){
        setTimeout(() => {
            this.setState({id:102, name:"john"})
         }, 2000);
        return (
          <div>
            <h2>id is:{this.state.id}</h2>
            <h3>name is:{this.state.name}</h3>
          </div>
        )
    }
} export default UpdateState