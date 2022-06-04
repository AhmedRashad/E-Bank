import axios from "axios";
import { URL } from "../../config";

const API_URL = URL + "/api/accounts";

// Get all accounts
const getAccounts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// add new account
const addAccount = async (account) => {
  const response = await axios.post(API_URL, account);
  return response.data;
};

const accountService = {
  getAccounts,
  addAccount,
};
export default accountService;
