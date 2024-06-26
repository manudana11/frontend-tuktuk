import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPosts } from '../../features/posts/postsSlice'
import Post from '../Post/Post'
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllPosts())
  },[])
  return (
    <div className='header-container'>
        <Post />
    </div>
    
  )
}

export default Home