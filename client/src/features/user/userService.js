import axios from "axios";
import { URL } from "../../config";

const API_URL = URL + "/user";

// get all users
const getAllUsers = async () => {
  const response = await axios.get(API_URL + "/all");
  return response.data;
};

// register new user
const register = async (user) => {
  const response = await axios.post(API_URL + "/register", user);
  return response.data;
};

// login user
const login = async (user) => {
  const response = await axios.post(API_URL + "/login", user);
  return response.data;
};

// get user by id
const getUser = async () => {
  const response = await axios.get(API_URL + "/me");
  return response.data;
};

// logout user
const logout = async () => {
  const response = await axios.get(API_URL + "/logout");
  return response.data;
};

// update user
const updateUser = async (id, status) => {
  const response = await axios.put(API_URL + "/approve/" + id, status);
  return response.data;
};

const userService = {
  getAllUsers,
  register,
  login,
  getUser,
  logout,
  updateUser,
};
export default userService;
