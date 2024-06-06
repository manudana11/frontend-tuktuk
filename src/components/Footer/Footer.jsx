import React, { useState } from 'react'
import './Footer.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../features/auth/authSlice'

const Footer = () => {
  const {user} = useSelector((state) => state.auth);
  const {search, setSearch} = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.taget.value);
    if(e.key == 'Enter'){
      navigate('/search/' + search)
    }
  };

  return (
    <div className='footer-container'>
      <nav className='footer-div'>
      <span>
        <Link to='/'></Link>
      </span>
      
      {/* <input type="text" name='search' onKeyUp={handleSearch} /> */}
      {user ? (
        <>
          <span>
            <Link to='/profile'>{user.name}</Link>
          </span>
          <span onClick={() =>{
            dispatch(logout());
          }}
          >
            <Link to='/login'>Logout</Link>
          </span>
        </>
      ) : (
        <>
          <span>
            <Link to='/login'>Login</Link>
          </span>
        </>
      
      )}
    </nav>
    </div>
  )
}

export default Footer


{/* <div className='footer-container'>
        <nav className='footer-div'>
            <div className='links-div'>
            <Link to='/'>Home</Link>
            <Link to='/createPost'>CP</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            </div>
        </nav>
    </div> */}