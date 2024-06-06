import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../features/posts/postsSlice';

const CreatePost = () => {
    const token = useSelector((state) => state.auth.token);
    const [formData, setFormData] = useState({
        imgPost: [],
        caption: '',
        location: '',
        Authorization: token
    })

    const { imgPost, caption, location } = formData;
    const dispatch = useDispatch();

    const onChange = (e) => {
        if (e.target.name === 'imgPost') {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
        formDataObj.append('imgPost', imgPost);
        formDataObj.append('caption', caption);
        formDataObj.append('location', location);
        dispatch(createPost(formData, token))
        console.log('formData', formData)
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <p className="title">Create post</p>
            <p className="message">Your post details down here</p>
                <label>
                    <input required type="file" className="input" name="imgPost" id="imgPost" value={imgPost} onChange={onChange} />
                </label>
                <label>
                    <input required placeholder="Caption" type="text" className="input" name="caption" id="caption" value={caption} onChange={onChange} />
                </label>
            <label>
                <input required placeholder="Location" type="text" className="input" name="location" id="location" value={location} onChange={onChange} />
            </label>
            
            <button className="submit" type="submit">Submit</button>
        </form>
    )
}

export default CreatePost