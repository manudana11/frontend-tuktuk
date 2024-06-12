import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUserByName } from '../../features/auth/authSlice';
import Profile from '../Profile/Profile';


const Search = () => {
    const {name} = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getUserByName(name));
    }, [name])
  return (
    <div><Profile/></div>
  )
}

export default Search