import React from "react";
import CompB from './CompB';

className CompA extends React.Component{
    ename="Roopa"
    render(){
        return <div>
            <h2>Component A</h2>
            <hr/>
            <CompB name={this.ename}/>
        </div>
    }
}
export default CompA