import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createPost } from '../../features/posts/postsSlice';

const CreatePost = () => {
    const [formData, setFormData] = useState({
        image: '',
        caption: '',
        location: '',
    })

    const { image, caption, location } = formData;
    const dispach = useDispatch()

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispach(createPost(formData))
        console.log('formData', formData)
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <p className="title">Create post</p>
            <p className="message">Your post details down here</p>
                <label>
                    <input required type="file" className="input" name="image" id="image" value={image} onChange={onChange} />
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