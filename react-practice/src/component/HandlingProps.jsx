import React from "react";

// function HandlingProps(props){
  
//     return(
//         <div>
//         <h2>{props.name}</h2>
//         <h4>{props.rollNumber}</h4>
//         </div>
//     )
// } export default HandlingProps

class HandlingProps extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
           <div>
            <h2>{this.props.name}</h2>
            <h4>{this.props.rollNumber}</h4>
           </div>
        )
    }

}export default HandlingProps