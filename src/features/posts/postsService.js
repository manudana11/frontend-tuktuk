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

const getPostById = async (_id) => {
  const token = localStorage.getItem('token');
  const res = await axios.get(API_URL + '/id/' + _id, {
    headers: {
      Authorization: token
    }
  });
  return res.data
};

const deletePost = async (post, _id) => {
  const token = localStorage.getItem('token');
  const res = await axios.delete(API_URL + '/id/' + _id, post, {
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
  getPostById,
  deletePost,
};

export default postsService;