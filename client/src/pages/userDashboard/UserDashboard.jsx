import "./userDashboard.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { URL } from "../../config";
import UserNavBar from "../../components/userNavBar/UserNavBar";
import CreateAccount from "./../createAccount/CreateAccount";
import UserHome from "./../../components/userHome/UserHome";
import UserTransactions from "./../../components/userTransactions/UserTransactions";
import UserAccount from "./../../components/userAccount/UserAccount";
import Loading from "../../components/loading/Loading";

const UserDashboard = () => {
  const [accountData, setAccountData] = useState({});
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${URL}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setIsLoading(false);
        setAccountData(res.data);
        setAccounts(res.data.accounts);
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Can't Get Data Try Again");
      });
  });

  return (
    <>
      <UserNavBar accountData={accountData} />
      <ToastContainer />
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<UserHome accounts={accounts} />} />
        <Route path="/dashboard" element={<UserHome accounts={accounts} />} />
        <Route path="/dashboard/:id" element={<UserAccount />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/transactions" element={<UserTransactions />} />
      </Routes>
    </>
  );
};

export default UserDashboard;
