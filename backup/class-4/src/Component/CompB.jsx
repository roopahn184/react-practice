import React from "react";
import Compc from '../Component/CompC';

class CompB extends React.Component{
    render(){
        return <div>
            <h2>Component B</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <hr/>
            <Compc name={this.props.name}/>
        </div>
    }
}
export default CompB