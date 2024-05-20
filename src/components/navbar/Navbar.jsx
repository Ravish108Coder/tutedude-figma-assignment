import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='flex navbar-cont'>
        <div className='logo'>LOGO</div>
        <div className='auth-btn-cont'>
            <button id='login-btn'>Login</button>
            <button id='signin-btn'>Signup</button>
        </div>
    </div>
  )
}

export default Navbar