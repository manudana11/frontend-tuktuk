import React, { useState } from 'react'
import './Login.scss'
import {Link} from 'react-router-dom'
import { login } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const {email, password} = formData
  const onChange = (e) =>{
    setFormData((prevState) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }))
  }
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('formData', formData);
    dispatch(login(formData))
  }

  return (
    <div className="form-box">
    <form className="form" onSubmit={onSubmit}>
        <span className="title">Login</span>
        <span className="subtitle">Welcome back.</span>
        <div className="form-container">
          <input type="email" className="input" placeholder="Email" onChange={onChange}/>
          <input type="password" className="input" placeholder="Password" onChange={onChange}/>
        </div>
        <button>Login</button>
    </form>
    <div className="form-section">
    <fieldset>
      <legend>or</legend>
    </fieldset>
      <p>Create an account <Link to='/register'>Sign up</Link> </p>
    </div>
    </div>
  )
}

export default Login