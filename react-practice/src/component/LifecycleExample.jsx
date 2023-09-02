import React,{Component} from 'react';

class LifecycleExample extends Component {

  constructor(props){
   super(props)
   this.state ={
     count: 0,
   }
 }
 componentDidMount(){
    console.log("component did mount");
 }
 componentDidUpdate(prevProps, prevState){
     console.log("component did updated");
 }
 componentWillUnmount(){
   console.log("component will unmount");
 }
 incrementCount = () =>{
   this.setState(prevState =>({
     count: prevState.count + 1,
   }));
 }
  render(){
    return <>
     <div>
       <h1>My Component</h1>
       <p>count:{this.state.count}</p>
       <button onClick={this.incrementCount}>Increment</button>
     </div>
    </>
  }
} export default LifecycleExample