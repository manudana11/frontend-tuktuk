import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../features/posts/postsSlice';
import './Post.scss';
import { CommentOutlined, LikeOutlined, SendOutlined } from '@ant-design/icons';

const Post = () => {

    const { posts, status, error } = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPosts())
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
            {posts.map((post) => (
                <div key={post._id} className="post">
                    <div className="post-header">
                        <div className="post-user">
                            <img src={post.profilePic ? `https://backend-tuktuk.onrender.com/${post.userId.profilePic.substring(6)}` : 'URL_DE_IMAGEN_PREDETERMINADA'} alt="User profile" className="post-user-image" />
                            <div className="post-user-name">{post.userId.userName}</div>
                        </div>
                        <div className="post-location">{post.location}</div>
                    </div>
                    <img src={`https://backend-tuktuk.onrender.com/${post.imgpost.substring(6)}`} alt="Post image" className="post-image" />
                    <div className="post-actions">
                        <button onClick={() => handleLike(post._id)}>
                            <LikeOutlined /> {post.likes.length}
                        </button>
                        <button onClick={() => handleComment(post._id)}>
                            <CommentOutlined /> {post.commentsIds.length}
                        </button>
                        <button onClick={() => handleSend(post._id)}>
                            <SendOutlined />
                        </button>
                    </div>
                    <div className="post-caption">Caption: {post.caption}</div>
                    <div className="post-date">{new Date(post.createdAt).toLocaleString()}</div>
                    <div className="post-comments">
                        {post.commentsIds.map((comment) => (
                            <div key={comment._id} className="comment">
                                <strong>{comment.userId.userName}:</strong> {comment.bodyText}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Post