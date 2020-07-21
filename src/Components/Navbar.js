import React from 'react'

const Navbar = () => {
    return(
        <nav className = 'nav-wrapper grey darken-3'>
            <div className="container">
                <a className="brand-logo " href='/'>Shopping List</a>
                <ul className="right">
                <li><a href="/">List</a></li>
                <li><a href='/stores'>Stores</a></li>
                <li><a href='/'>D-Day</a></li>
                </ul>
            </div>
        </nav> 
    )
    
} 

export default Navbar