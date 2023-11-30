import React from 'react'
import CartWidget from '../CartWidget/CartWidget.jsx'
import '../NavBar/NavBar.css'

const NavBar = () => {
  return (
    <header>

      {/* LOGO */}
      <img src="./img/logo.png" alt="" />

      {/* LOCATION */}
      <div className="location">
        <img src="./img/location-white.png" alt="" />
        <a className="">
          <span>Send To</span>
          <span>Argentina</span>
        </a>
      </div>

      {/* SEARCH BAR */}
      <div className="search-container">
        <input type="text" placeholder="Search products ..." />
      </div>


      {/* LIST */}
      <div className="nav-list">
        <ul>
          <li><a href="">LINK1</a></li>
          <li><a href="">LINK2</a></li>
          <li><a href="">LINK3</a></li>
          <li><a href="">LINK4</a></li>
        </ul>
      </div>

      {/* LOGIN / REGISTER */}
      <div className="account-div">
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
      </div>

      <CartWidget />
    </header>
  )
}

export default NavBar