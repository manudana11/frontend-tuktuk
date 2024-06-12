import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, likePost, removeLikePost } from '../../features/posts/postsSlice';
import './Post.scss';
import { CommentOutlined, LikeFilled, LikeOutlined, SendOutlined } from '@ant-design/icons';
import { Spinner } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const Post = () => {

    const { posts, status, error } = useSelector((state) => state.posts);
    const userId = useSelector((state) => state.auth.user._id);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])


    if (status === 'loading') {
        return <Spinner color="red.500" justify="center" />;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>
    }

    if (status === 'succeeded' && posts.length === 0) {
        return <div>No posts available.</div>;
    }

    return (
        <div>
            {[...posts].reverse().map((post) => {
                const hasLiked = post.likes.includes(userId);
                const handleLikeClick = () => {
                    if (hasLiked) {
                        dispatch(removeLikePost(post._id));
                    } else {
                        dispatch(likePost(post._id));
                    }
            };
            const handleCommentClick = () => {
                navigate(`/postDetails/${post._id}`);
            };
            return (
                <div key={post._id} className="post">
                    <div className="post-header">
                        <div className="post-user">
                            <img src={post.userId.profilePic ? `https://backend-tuktuk.onrender.com/${post.userId.profilePic.substring(6)}` : 'https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc'} alt="User profile" className="post-user-image" />
                            <Link to='/profileDetails'><div className="post-user-name">{post.userId.userName}</div></Link>
                        </div>
                        <div className="post-location">{post.location}</div>
                    </div>
                    <img src={`https://backend-tuktuk.onrender.com/${post.imgpost.substring(6)}`} alt="Post image" className="post-image" />
                    <div className="post-actions">
                        <button onClick={handleLikeClick}>
                                {hasLiked ? <LikeFilled /> : <LikeOutlined />}
                            </button>
                        <button onClick={handleCommentClick}>
                            <CommentOutlined />
                        </button>
                        <button onClick={() => handleSend(post._id)}>
                            <SendOutlined />
                        </button>
                    </div>
                    <p className='likes'><strong>{post.likes.length} people like your post</strong></p>
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
            )})}
        </div>
    )
}

export default Post