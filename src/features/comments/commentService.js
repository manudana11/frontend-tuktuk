import axios from 'axios';

const API_URL = 'https://backend-tuktuk.onrender.com/comments';

const createComment = async (comments, _id) => {
    const token = localStorage.getItem('token');
    const res = await axios.post(API_URL + '/id/' + _id, comments, {
        headers: {
            Authorization:token
        }
    });
    return res.data
};

const commentsService = {
    createComment,
};

export default commentsService;