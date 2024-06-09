import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../../features/posts/postsSlice';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { _id } = useParams();
    const { posts, status, error } = useSelector((state) => state.posts);
    const userId = useSelector((state) => state.auth.user._id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostById(_id))
    }, [])


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
            <h1>Post Details</h1>
                <div key={posts._id}>
                    <img src={`https://backend-tuktuk.onrender.com/${posts.imgpost.substring(6)}`} alt="Post image" className="post-image" />
                    <h2>{posts.caption}</h2>
                    <p><strong>Location:</strong> {posts.location}</p>
                    <p><strong>Created At:</strong> {new Date(posts.createdAt).toLocaleString()}</p>
                    <p><strong>Updated At:</strong> {new Date(posts.updatedAt).toLocaleString()}</p>
                    <p><strong>Likes:</strong> {posts.likes.length}</p>
                    <p><strong>Comments:</strong> {posts.commentsIds.length}</p>
                </div>
        </div>
    )
}

export default PostDetails