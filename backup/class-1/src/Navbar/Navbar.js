import React from "react"
function Navbar() {
 return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <a href="#" className="navbar-brand">React Website</a>
    <div className="ml-auto">
        <ul className="navbar-nav">
            <li className="nav-list"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-list"><a href="#" className="nav-link">aboutus</a></li>
            <li className="nav-list"><a href="#" className="nav-link">Services</a></li>
            <li className="nav-list"><a href="#" className="nav-link">login</a></li>
        </ul>
    </div>
 </nav>
}
export default Navbar