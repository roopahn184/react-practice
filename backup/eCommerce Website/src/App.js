import React, { Component } from 'react'
import Navbar from './Navbar';
import Login from './Login';
import ShoppingCart from './ShoppingCart';
import Customers from './Customers';
import { Link, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NoMatchpage from './NoMatchpage';

 class App extends Component {
  render() {
    return (
      <div>
      <Router>
         <Navbar/>
        <Routes>
       
          <Route exact path='/' element={<Login />}/>
          <Route  path='/Customers' element={<Customers />}/>
          <Route  path='/Cart' element={<ShoppingCart />}/>
          <Route path='*' element={<NoMatchpage />} />
        </Routes>
    
      </Router>
      </div>

      
    )
  }
}

export default App