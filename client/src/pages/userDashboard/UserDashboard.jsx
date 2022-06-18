import "./userDashboard.css";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import NotFound from "./../notFound/NotFound";

const UserDashboard = () => {
  const [accountData, setAccountData] = useState({});
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${URL}/users/me`, { withCredentials: true }).then((res) => {
      if (res.data[0].admin) {
        navigate("/admin/dashboard", { replace: true });
      }
    });
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setIsLoading(false);
        setAccountData(res.data[0]);
        setAccounts(res.data[0].accounts);
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Can't Get Data Try Again");
      });
  }, [accountData, accounts]);

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default UserDashboard;
