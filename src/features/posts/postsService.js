import axios from "axios";

const API_URL = "https://backend-tuktuk.onrender.com/posts";

const getAllPosts = async (token) => {
  const res = await axios.get(API_URL + '/allPosts', {
    headers: {
      Authorization: token
    }
  });
  return res.data;
};

const createPost = async (post, token) => {
  const res = await axios.post(API_URL + '/', post, {
    headers: {
      Authorization: token
    }
  });
  return res.data
};

const likePost = async (_id) => {
  const token = localStorage.getItem('token')
  const res = await axios.put(API_URL + '/likes/' + _id, {}, {
    headers: {
      Authorization: token
    }
  });
  return res.data
};

const removeLikePost = async (_id) => {
  const token = localStorage.getItem('token')
  const res = await axios.put(API_URL + '/dislikes/' + _id, {}, {
    headers: {
      Authorization: token
    }
  });
  return res.data
};

const postsService = {
  getAllPosts,
  createPost,
  likePost,
  removeLikePost,
};

export default postsService;