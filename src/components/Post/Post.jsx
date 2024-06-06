import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../features/posts/postsSlice'

const Post = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllPosts())
    },[])

    const { posts, status, error } = useSelector((state) => state.posts)
    
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>
    }

    if (status === 'succeeded' && posts.length === 0) {
        return <div>No posts available.</div>;
    }

  return (
    <div>
        {posts.map((post) => {
            return (
                <div key={post._id} className="post">
                    <img src={'https://backend-tuktuk.onrender.com/' + post.imgpost.substring(6)} alt="Post image" className="post-image" />
                    <div className="post-caption">{post.caption}</div>
                    <div className="post-location">{post.location}</div>
                    <div className="post-date">{new Date(post.createdAt).toLocaleString()}</div>
                </div>
            )
        })}
    </div>
  )
}

export default Post