import React, { Component } from 'react';
import Navbar from './userApp/Navbar';
import UserApp from './userApp/UserApp';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
 class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router>
            <Navbar/>
            <Routes>
                <Route Path="/user" element={<UserApp/>} />
            </Routes>
        </Router>
        </BrowserRouter>
    )
  }
}

export default App