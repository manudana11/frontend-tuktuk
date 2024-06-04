import React, { useState } from 'react'
const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        userName: '',
        email:'',
        password:'',
        dateOfBirth: '',
        profilePic: '',
    })
    const {name,email,password, userName, dateOfBirth, profilePic} = formData
    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formData',formData)
    }
  return (
    <div className='register-form'>
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" value={name} onChange={onChange} /><br />
            <label htmlFor="userName">Username: </label>
            <input type="text" name="userName" value={userName} onChange={onChange}/><br />
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" value={email} onChange={onChange}/><br />
            <label htmlFor="date">Date of Birth: </label>
            <input type="date" name="date" value={dateOfBirth} onChange={onChange}/><br />
            <label htmlFor="photo">Profile picture: </label>
            <input type="file" name="photo" value={profilePic} onChange={onChange}/><br />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" value={password} onChange={onChange}/> <br />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}
export default Register
