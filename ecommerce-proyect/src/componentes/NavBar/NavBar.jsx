import {NavLink, Link} from 'react-router-dom'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget.jsx'
import '../NavBar/NavBar.css'

const NavBar = () => {
  return (
    <header>
      {/* LOGO */}
      <Link to="/">
      <img src="../img/logo.png" alt="" />
      </Link>

      {/* LOCATION */}
      <div className="location">
        <img src="../img/location-white.png" alt="" />
        <a className="a-location">
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
          <li><NavLink to="categoria/celulares">Phones 📱</NavLink></li>
          <li><NavLink to="categoria/juegos">Games 🕹️</NavLink></li>
          <li><NavLink to="categoria/muebles">Furniture 🪑</NavLink></li>
          <li><NavLink to="categoria/cuadros">Painting 🖼️</NavLink></li>
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