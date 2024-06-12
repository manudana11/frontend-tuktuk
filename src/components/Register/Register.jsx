import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';
import './Register.scss';
import { Link, useNavigate } from 'react-router-dom';
import { notification } from 'antd';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        email: '',
        password: '',
        dateOfBirth: '',
    });

    const dispach = useDispatch()

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const newFormData = new FormData();
        newFormData.set('name', formData.name);
        newFormData.set('userName', formData.userName);
        newFormData.set('email', formData.email);
        newFormData.set('password', formData.password);
        newFormData.set('dateOfBirth', formData.dateOfBirth);
        if (e.target.profilePic.files[0]) newFormData.set('image', e.target.profilePic.files[0]);
        dispach(register(newFormData))
        .then((res) => {
            notification.success({ message: 'Registration successful!' });
            navigate('/login');
        })
        .catch((error) => {
            console.error(error);
            notification.error({ message: 'Registration failed!' });
        });
        console.log('formData', formData)
    };

  return (
    <form className="form" onSubmit={onSubmit}>
    <p className="title">Register</p>
    <p className="message">Signup now and get full access to our app.</p>
    <div className="flex">
        <label>
            <input required placeholder="Insert your name" type="text" className="input" name="name" id="name" value={formData.name} onChange={onChange} />
        </label>
        <label>
            <input required placeholder="Insert your username" type="text" className="input" name="userName" id="userName" value={formData.userName} onChange={onChange} />
        </label>
    </div>
    <label>
        <input required placeholder="Insert your email" type="email" className="input" name="email" id="email" value={formData.email} onChange={onChange} />
    </label>
    <label>
        <input required type="date" className="input" name="dateOfBirth" id="dateOfBirth" value={formData.dateOfBirth} onChange={onChange} />
    </label>
    <label>
        <input type="file" className="input" name="profilePic" id="profilePic" />
    </label>
    <label>
        <input required placeholder="Insert your password" type="password" className="input" name="password" id="password" value={formData.password} onChange={onChange} />
    </label>
    <button className="submit" type="submit">Submit</button>
    <p className="signin">Already have an account? <a href="/login">Signin</a></p>
</form>
  )
}
export default Register
