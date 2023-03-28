import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

let App = () => {
    return <React.Fragment>
        <Router>
          <nav>
            <Link>Logo</Link>
            <div>
              <ul>
                <li><Link to="home">Home</Link></li>
              </ul>
            </div>
          </nav>
  
           <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
        </React.Fragment>
}
export default App