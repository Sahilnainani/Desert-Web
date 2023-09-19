import React from 'react'
import '../css/style.css'

const Navbar = () => {
    return (
        <div class="navbar">
            <img src={require('../css/images/logo.png')} alt="" class="logo" />
            <nav>
                <ul id="menuList">
                    <li><a href="">HOME</a></li>
                    <li><a href="">REGION</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">CONTACT US</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
