import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
    return(
        <nav className = 'nav-wrapper grey darken-3'>
            <div className="container">
                <a className="brand-logo " href='/'><span className="fa fa-lg fa-shopping-cart"> Shopping List</span></a>
                <ul className="right">
                <li><a href="/"><span className="fa fa-reorder"> List</span></a></li>
                <li><a href='/stores'><span className="fa fa-home"> Stores</span></a></li>
                <li><a href='/dday'><span className="fa fa-pencil"> D-Day</span></a></li>
                </ul>
            </div>
        </nav> 
    )
    
} 

export default Navbar