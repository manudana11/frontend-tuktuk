import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';
import './Register.scss';
import { Link } from 'react-router-dom';

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
        <form className="form" onSubmit={onSubmit}>
            <p className="title">Register</p>
            <p className="message">Signup now and get full access to our app.</p>
            <div className="flex">
                <label>
                    <input required placeholder="Insert your name" type="text" className="input" name="name" id="name" value={name} onChange={onChange} />
                </label>
                <label>
                    <input required placeholder="Insert your username" type="text" className="input" name="userName" id="userName" value={userName} onChange={onChange} />
                </label>
            </div>
            <label>
                <input required placeholder="Insert your email" type="email" className="input" name="email" id="email" value={email} onChange={onChange} />
            </label>
            <label>
                <input required type="date" className="input" name="dateOfBirth" id="dateOfBirth" value={dateOfBirth} onChange={onChange} />
            </label>
            <label>
                <input required type="file" className="input" name="profilePic" id="profilePic" value={profilePic} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Insert your password" type="password" className="input" name="password" id="password" value={password} onChange={onChange} />
            </label>
            <button className="submit" type="submit">Submit</button>
            <p className="signin">Already have an account? <a href="/login">Signin</a></p>
        </form>
    )
}
export default Register
