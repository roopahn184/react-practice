import React from "react";
import CompD from './CompD'

class CompC extends React.Component{
    render(){
        return <div>
            <h2>Component C</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <hr/>
            <CompD name={this.props.name}/>
        </div>
    }
}
export default CompC