import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPostById, likePost, removeLikePost } from '../../features/posts/postsSlice';
import { useParams } from 'react-router-dom';
import { CommentOutlined, LikeFilled, LikeOutlined, SendOutlined } from '@ant-design/icons';

const PostDetails = () => {
    const { _id } = useParams();
    const { post, status, error } = useSelector((state) => state.posts);
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

    if (!post) {
        return <div>No post available.</div>;
    }

    const hasLiked = post.likes.includes(userId);
    const handleLikeClick = () => {
        if (hasLiked) {
            dispatch(removeLikePost(post._id));
        } else {
            dispatch(likePost(post._id));
        }
    };
    
    return (
        <div>
            <h1>Post Details</h1>
            <div key={post._id}>
                <img src={`https://backend-tuktuk.onrender.com/${post.imgpost.substring(6)}`} alt="Post image" className="post-image" />
                <div className="post-actions">
                    <button onClick={handleLikeClick}>
                        {hasLiked ? <LikeFilled /> : <LikeOutlined />} {post.likes.length}
                    </button>
                    <button onClick={() => handleComment(post._id)}>
                        <CommentOutlined /> {post.commentsIds.length}
                    </button>
                    <button onClick={() => handleSend(post._id)}>
                        <SendOutlined />
                    </button>
                </div>
                <h2><strong>Caption:</strong>{post.caption}</h2>
                <p><strong>Location:</strong> {post.location}</p>
                <p><strong>Created At:</strong> {new Date(post.createdAt).toLocaleString()}</p>
                {post.commentsIds.map((comment) => (
                    <div key={comment._id} className="comment">
                        <strong>{comment.userId.userName}:</strong> {comment.bodyText}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostDetails