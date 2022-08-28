import React from 'react'
import './navbar.css'

const Navbar = ({ currentAccount }) => {
  return (
    <div className="navbar-container">
            <p>wallet address: {currentAccount}</p>
    </div>
  )
}

export default Navbar