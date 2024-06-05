import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {



  return (
    <div className='footer-container'>
        <nav className='footer-div'>
            <div className='links-div'>
            <Link to='/'>Home</Link>
            <Link to='/createPost'>CP</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            </div>
        </nav>
    </div>
  )
}

export default Footer