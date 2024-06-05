import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPosts } from '../../features/posts/postsSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllPosts())
  },[])
  return (
    <div>
        Home
    </div>
    
  )
}

export default Home