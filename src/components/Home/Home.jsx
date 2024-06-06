import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPosts } from '../../features/posts/postsSlice'
import Post from '../Post/Post'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllPosts())
  },[])
  return (
    <div>
        Home
        <Post />
    </div>
    
  )
}

export default Home