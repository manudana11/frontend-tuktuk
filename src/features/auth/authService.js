import axios from "axios";

const API_URL = "https://backend-tuktuk.onrender.com/users";

const register = async (user) => {
  const res = await axios.post(API_URL, user);
  return res.data;
};

const authService = {
  register,
};

export default authService;