import React from 'react';
import logo from "../../../src/logo.svg";
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            <img src={logo} className="logo" alt="logo" />
            
            <nav>
                <a href="/home">Home</a>
                <a href="/clints">All Clint</a>
                <a href="/company">Company</a>
                <button>Change Clients</button>
            </nav>
            
        </div>
    );
};

export default Header;