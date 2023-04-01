import React, { Component } from 'react';

 class Login extends Component {
    constructor(props){
        super(props)
        this.state={email:"abc@gmail.com",password:"123333"};
    }
  render() {
    return (
    <div className="col-9">
        <h4 className='m-1 p-2 border-bottom'>Login</h4>
        <div className='form-group form-row'>
            <label className='col-4'>Email:</label>
            <input type="text" className='form-control' value={this.state.email} onChange={(Event)=>{
                this.setState({email:Event.target.value});
                console.log(this.state.email);
            }} />
        </div>
        <div className='form-group form-row'>
            <label className='col-lg-4'>Password:</label>
            <input type="password" className='form-control' value={this.state.password} onChange={(Event)=>{
               this.setState({password:Event.target.value});
            }}/>
        </div>
        <div className='text-right'>
        {this.state.message}
            <button className='btn btn-primary m-1'onClick={this.onLoginclick}>Login</button>
        </div>
        
    </div>)
  }
  onLoginclick=()=>{
  console.log(this.state);
  if(this.state.email==="admin@gmail.com"&&this.state.password==="admin123"){
     this.setState({message:(<span className='text-success'>successfully Logged-in</span>)})
   }
   else{
    this.setState({message:(<span className='text-danger'>Invalid Login,try again</span>)})
   }
  }
  }


export default Login