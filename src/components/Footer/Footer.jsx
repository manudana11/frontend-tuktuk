import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {



  return (
    <div className='footer-container'>
        <nav className='footer-div'>
            <div className='links-div'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Logout</Link>
            </div>
        </nav>
    </div>
  )
}

export default Footer