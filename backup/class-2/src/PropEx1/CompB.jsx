import React from "react";

className CompB extends React.Component{
    render(props){
        return <div>
            <hr/>
            <h3>component B</h3>
            <pre>{JSON.stringify(this.props)}</pre>
        </div>
    }
}
export default CompB