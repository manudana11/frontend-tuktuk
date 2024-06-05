import axios from "axios";

const API_URL = "https://backend-tuktuk.onrender.com/users";

const register = async (user) => {
  const res = await axios.post(API_URL, user);
  return res.data;
};

const login = async (user) => {
  const res = await axios.post(API_URL + '/login', user);
  if(res.data){
    localStorage.setItem('user', JSON.stringify(res.data.user));
    localStorage.setItem('token', res.data.token);
  }
  return res.data
}

const authService = {
  register,
  login,
};

export default authService;
