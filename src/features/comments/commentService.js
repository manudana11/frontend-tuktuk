import axios from 'axios';

const API_URL = 'https://backend-tuktuk.onrender.com/comments';

const createComment = async (commentData) => {
    const { postId, bodyText, userId } = commentData;
    const token = localStorage.getItem('token');
    const res = await axios.post(`${API_URL}/id/${postId}`, {bodyText, userId}, {
        headers: {
            Authorization:token
        }
    });
    return res.data
};

const addCommentResponse = async (responseData) => {
    const { bodyText, userId } = responseData;
    const token = localStorage.getItem('token');
    const res = await axios.put(API_URL + '/response' + _id, {bodyText, userId}, {}, {
        headers: {
            Authorization: token
        }
    });
    return res.data
}

const commentsService = {
    createComment,
    addCommentResponse,
};

export default commentsService;