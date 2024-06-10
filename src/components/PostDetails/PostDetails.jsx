import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPostById, likePost, removeLikePost } from '../../features/posts/postsSlice';
import { useParams } from 'react-router-dom';
import { CommentOutlined, LikeFilled, LikeOutlined, SendOutlined } from '@ant-design/icons';

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

    if (posts.length == 0) {
        return <div>No post available</div>
    }

    const hasLiked = posts.likes.includes(userId);
    const handleLikeClick = () => {
        if (hasLiked) {
            dispatch(removeLikePost(posts._id));
        } else {
            dispatch(likePost(posts._id));
        }
    };

    return (
        <div>
            <h1>Post Details</h1>
            <div key={posts._id}>
                <img src={`https://backend-tuktuk.onrender.com/${posts.imgpost.substring(6)}`} alt="Post image" className="post-image" />
                <div className="post-actions">
                    <button onClick={handleLikeClick}>
                        {hasLiked ? <LikeFilled /> : <LikeOutlined />} {posts.likes.length}
                    </button>
                    <button onClick={() => handleComment(posts._id)}>
                        <CommentOutlined /> {posts.commentsIds.length}
                    </button>
                    <button onClick={() => handleSend(posts._id)}>
                        <SendOutlined />
                    </button>
                </div>
                <h2>{posts.caption}</h2>
                <p><strong>Location:</strong> {posts.location}</p>
                <p><strong>Created At:</strong> {new Date(posts.createdAt).toLocaleString()}</p>
                <p><strong>Updated At:</strong> {new Date(posts.updatedAt).toLocaleString()}</p>
                <p><strong>Likes:</strong> {posts.likes.length}</p>
                {posts.commentsIds.map((comment) => (
                    <div key={comment._id} className="comment">
                        <strong>{comment.userId.userName}:</strong> {comment.bodyText}
                    </div>
                ))}
                {/* <p><strong>Comments:</strong> {posts.commentsIds}</p> */}
            </div>
        </div>
    )
}

export default PostDetails