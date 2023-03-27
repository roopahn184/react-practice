import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

let App = () => {
    return <div>
        <Router>

            
            <Routes>

                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    </div>
}
export default App