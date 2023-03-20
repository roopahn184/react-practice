import React  from "react";

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password :""
         }
    }
    emailHandler =()=>{
        console.log(Event.target.value);
        this.setState({Email:Event.target.value})
    }
    passwordHandler =()=>{
        this.setState({password:Event.target.value})
    }
    submitHandler=()=>{
        Event.preventDefault();
        console.log(this.state);
    }

    render(){
        return <div>
            <h1>Login Details</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <div>
                <label>Email</label>
                <input type="text" onChange={this.emailHandler}/>
                </div>
                <div>
                <label>Password</label>
                <input type="text" onChange={this.passwordHandler}/>
            </div>
            <div>
                <button>submit</button>
            </div>
            </form>
        </div>
    }
}
export default Login