import React, { useState } from 'react'
import './Footer.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../features/auth/authSlice'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'

const Footer = () => {
  const { user } = useSelector((state) => state.auth)
  const [search, setSearch] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    setSearch(e.target.value)
    if (e.key === 'Enter') {
      navigate('/search/' + search)
    }
  }

  return (
    <div className='footer-container'>
      <nav className='footer-div'>
        <div className='links-div'>
          <span>
            <Link to='/home'><HomeOutlined /></Link>
          </span>
          <span>
            <Link to='/profile'><UserOutlined /></Link>
          </span>
          {user ? (
            <span onClick={() => {
              dispatch(logout())
            }}>
              <Link to='/'>Logout</Link>
            </span>
          ) : (
            <span>
              <Link to='/login'>Login</Link>
            </span>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Footer
