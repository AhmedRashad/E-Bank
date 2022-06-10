import axios from "axios";
import { URL } from "../../config";

const API_URL = URL + "/accounts";

// Get all accounts
const getAccounts = async () => {
  const response = await axios.get(API_URL, {
    withCredentials: true,
  });
  return response.data;
};

// add new account
const addAccount = async (account) => {
  const response = await axios.post(API_URL, account, {
    withCredentials: true,
  });
  return response.data;
};

// update account
const updateAccount = async (id, account) => {
  const response = await axios.put(API_URL + "/" + id, account, {
    withCredentials: true,
  });
  return response.data;
};

// delete account
const deleteAccount = async (id) => {
  const response = await axios.delete(API_URL + "/" + id, {
    withCredentials: true,
  });
  return response.data;
};

const accountService = {
  getAccounts,
  addAccount,
  updateAccount,
  deleteAccount,
};
export default accountService;
