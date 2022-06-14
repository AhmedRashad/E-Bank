import "./userDashboard.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

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

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get(`${URL}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data[0].accounts);
        setIsLoading(false);
        setAccountData(res.data[0]);
        setAccounts(res.data[0].accounts);
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Can't Get Data Try Again");
      });
  }, []);

  useEffect(() => {
    if (user.admin) {
      navigate("/admin/dashboard");
    }
  }, [user]);

  return (
    <>
      <UserNavBar accountData={accountData} />
      <ToastContainer />
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<UserHome accounts={accounts} />} />
        <Route path="/dashboard" element={<UserHome accounts={accounts} />} />
        <Route
          path="/dashboard/:id"
          element={<UserAccount accounts={accounts} />}
        />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/transactions" element={<UserTransactions />} />
      </Routes>
    </>
  );
};

export default UserDashboard;
