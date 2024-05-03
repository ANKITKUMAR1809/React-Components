import React from 'react'
import './Navbar.css'
export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>SAK</h1>
            </div>
            <div className="navmenu">
                <a href="">HOME</a>
                <a href="">CATEGORY</a>
                <a href="">BLOGS</a>
                <a href="">ABOUT US</a>
                <a href="">CONTACT US</a>
            </div>
        </div>
    )
}
