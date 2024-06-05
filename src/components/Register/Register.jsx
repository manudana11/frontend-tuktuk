import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';
import './Register.scss';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        email: '',
        password: '',
        dateOfBirth: '',
        profilePic: '',
    })
    const { name, email, password, userName, dateOfBirth, profilePic } = formData;
    const dispach = useDispatch()
    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispach(register(formData))
        console.log('formData', formData)
    }
  return (
    <div className='form-box'>
        <form onSubmit={onSubmit} className='form'>
            <span className="title">Sign up</span>
            <span className="subtitle">Create a free account with your email.</span>
            <div className='form-container'>
                <input type="text" name="name" id='name' className='input' placeholder='Insert your name' value={name} onChange={onChange} /><br />
                <input type="text" name="userName" id='userName' className='input' placeholder='Insert your username' value={userName} onChange={onChange} /><br />
                <input type="email" name="email" id='email' className='input' placeholder='Insert your email' value={email} onChange={onChange}/><br />
                <input type="date" name="dateOfBirth" id="dateOfBirth" className="input" value={dateOfBirth} onChange={onChange} /><br />
                <label htmlFor="photo">Profile picture: </label>
                <input type="file" name="profilePic" id='profilePic' className='input' value={profilePic} onChange={onChange}/><br />
                <input type="password" name="password" id='password' className='input' placeholder='Insert your password' value={password} onChange={onChange}/> <br />
            </div>
            <button type="submit">Register</button>
        </form>
        <div className="form-section">
            <p>Have an account? <a href="">Log in</a> </p>
        </div>
    </div>
  )
}
export default Register
