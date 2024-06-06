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

const postsService = {
    getAllPosts,
    createPost,
};

export default postsService;