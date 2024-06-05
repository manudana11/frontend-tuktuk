import axios from "axios";

const API_URL = "https://backend-tuktuk.onrender.com/posts";

const getAllPosts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

const createPost = async () => {
  const res = await axios.post(API_URL + '/', post);
  return res.data
};

const postsService = {
    getAllPosts,
    createPost,
};

export default postsService;