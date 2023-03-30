import React, { Component } from 'react'
import {Link} from 'react-router-dom';
 class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
       <Link className='navbar-brand' to='#'>User App - All</Link>
       <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li className='nav-list'><Link className='nav-link' to='index'>Home</Link></li>
            <li className='nav-list'><Link className='nav-link' to='User'>User</Link></li>
        </ul>
       </div>
      </nav>)
    
  }
}

export default Navbar