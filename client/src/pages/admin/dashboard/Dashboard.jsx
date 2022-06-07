import "./dashboard.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import AdminSidebar from "../components/sidebar/Sidebar";
import DashboardHome from "./../components/dashboardHome/DashboardHome";
import NewAccounts from "./../components/newAccounts/NewAccounts";
import VerifyingUsers from "../components/verifyingUsers/VerifyingUsers";
import UsersList from "./../components/usersList/UsersList";
import SuspendUsers from "./../components/suspendUsers/SuspendUsers";
import AdminNavBar from "./../components/adminNavBar/AdminNavBar";
import DashboardNavBar from "../components/dashboardNavBar/DashboardNavBar";

const Dashboard = () => {
  const [openSideBar, setOpenSideBar] = useState(true);

  const handleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };
  return (
    <div className="lg:flex justify-between">
      <div className="block lg:hidden sticky top-0 left-0">
        <AdminNavBar />
      </div>
      {openSideBar && (
        <div className="hidden lg:flex flex-2 h-screen sticky top-0 left-0">
          <AdminSidebar />
        </div>
      )}
      <div className="flex-auto main">
        <div className="hidden lg:block sticky top-0 left-0">
          <DashboardNavBar
            adminAvatar="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            adminName="Team#6"
            handleSideBar={handleSideBar}
          />
        </div>
        <div className="py-4">
          <Routes>
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="verifyingUsers" element={<VerifyingUsers />} />
            <Route path="users" element={<UsersList />} />
            <Route path="accounts" element={<NewAccounts />} />
            <Route path="suspendUsers" element={<SuspendUsers />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
