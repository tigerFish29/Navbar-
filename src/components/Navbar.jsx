import { useState } from "react";
import React from "react";

const Navbar = () => {

    const [navLinkOpen, navLinkToggle] = useState(false)

    const handleToggle = () => {
        navLinkToggle(!navLinkOpen)
    }

    const renderClass = () => {
        let classes = "nav-link";
        if (!navLinkOpen) {
            classes += "hide";
        }
        return classes;
    }
    return (
        <nav>
            <a href="" className="logo">Brand-Logo</a>
            <button onClick={handleToggle} className="hamburger">
                <i className="fas fa-bars fa-lg"></i>
            </button>
            <div className={renderClass()}>
               
               <a href="" className="link">Home</a>
               <a href="" className="link">Blog</a>
               <a href="" className="link">About Us</a>
               <a href="" className="link">Contact Us</a>
            
            </div>
        </nav>
    )
}

export default Navbar;