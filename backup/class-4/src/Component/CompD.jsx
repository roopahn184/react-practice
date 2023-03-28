import React from "react";

className CompD extends React.Component{
    render(){
        return <div>
            <h2>Component D</h2> 
            <pre>{JSON.stringify(this.props)}</pre>       
        </div>
    }
}
export default CompD