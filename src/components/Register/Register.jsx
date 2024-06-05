import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';
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
    <div className='register-form'>
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id='name' placeholder='Insert your name' value={name} onChange={onChange} /><br />
            <label htmlFor="userName">Username: </label>
            <input type="text" name="userName" id='userName' placeholder='Insert your username' value={userName} onChange={onChange} /><br />
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id='email' placeholder='Insert your email' value={email} onChange={onChange}/><br />
            <label htmlFor="date">Date of Birth: </label>
            <input type="date" name="date" id='date' value={dateOfBirth} onChange={onChange}/><br />
            <label htmlFor="photo">Profile picture: </label>
            <input type="file" name="photo" id='photo' value={profilePic} onChange={onChange}/><br />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id='password' placeholder='Insert your password' value={password} onChange={onChange}/> <br />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}
export default Register
