import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../features/posts/postsSlice';
import { notification } from 'antd';

const CreatePost = () => {
    const token = useSelector((state) => state.auth.token);

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (e.target.image.files[0]) formData.set('image', e.target.image.files[0]);
        formData.set('caption', e.target.caption.value);
        formData.set('location', e.target.location.value);
        
        dispatch(createPost(formData, token)).then(res => {
            notification.success({message: 'Post created successfully!'})
        })
        .catch((error) => {
            console.error(error)
        })
        console.log('formData', formData)
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <p className="title">Create post</p>
            <p className="message">Your post details down here</p>
                <label>
                    <input required type="file" className="input" name="image" id="image" />
                </label>
                <label>
                    <input required placeholder="Caption" type="text" className="input" name="caption" id="caption" />
                </label>
            <label>
                <input required placeholder="Location" type="text" className="input" name="location" id="location" />
            </label>
            
            <button className="submit" type="submit">Submit</button>
        </form>
    )
}

export default CreatePost