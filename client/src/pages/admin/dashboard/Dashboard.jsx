import "./dashboard.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import AdminSidebar from "../components/sidebar/Sidebar";
import DashboardHome from "./../components/dashboardHome/DashboardHome";
import UsersList from "./../components/usersList/UsersList";
import AdminNavBar from "./../components/adminNavBar/AdminNavBar";
import DashboardNavBar from "../components/dashboardNavBar/DashboardNavBar";
import UserData from "./../components/usersList/userData/UserData";
import AccountsList from "./../components/accountsList/AccountsList";
import AccountData from "./../components/accountsList/accountData/AccountData";
import UserAccounts from "../components/usersList/userAccounts/UserAccounts";

import TransferMoney from "../../../components/userAccount/transferMoney/TransferMoney";

const Dashboard = () => {
  const [openSideBar, setOpenSideBar] = useState(true);

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user.admin === false) {
      navigate("/user/dashboard");
    }
  }, [user]);

  const handleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <>
      {user.admin && (
        <div className="lg:flex justify-between">
          <div className="block z-10 lg:hidden sticky top-0 left-0">
            <AdminNavBar />
          </div>
          {openSideBar && (
            <div className="hidden lg:flex flex-2 h-screen sticky top-0 left-0">
              <AdminSidebar />
            </div>
          )}
          <div className="flex-auto main">
            <div className="hidden z-10 lg:block sticky top-0 left-0">
              <DashboardNavBar
                adminAvatar="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                adminName="Team#6"
                handleSideBar={handleSideBar}
              />
            </div>
            <TransferMoney />
            <div className="py-4">
              <Routes>
                <Route path="dashboard" element={<DashboardHome />} />
                <Route path="users" element={<UsersList />} />
                <Route path="users/:id" element={<UserData />} />
                <Route path="accounts" element={<AccountsList />} />
                <Route path="accounts/:id" element={<AccountData />} />
                <Route path="users/:id/:id" element={<UserAccounts />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
