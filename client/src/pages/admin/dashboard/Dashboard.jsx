import { Routes, Route } from "react-router-dom";
import "./dashboard.css";
import AdminSidebar from "../components/sidebar/Sidebar";
import DashboardHome from "./../components/dashboardHome/DashboardHome";
import NewAccounts from "./../components/newAccounts/NewAccounts";
import VerifyingUsers from "../components/verifyingUsers/VerifyingUsers";
import UsersList from "./../components/usersList/UsersList";
import SuspendUsers from "./../components/suspendUsers/SuspendUsers";
import AdminNavBar from "./../components/adminNavBar/AdminNavBar";

const Dashboard = () => {
  return (
    <div className="lg:flex justify-between">
      <div className="block lg:hidden sticky top-0 left-0">
        <AdminNavBar />
      </div>
      <div className="hidden lg:flex flex-2 h-screen sticky top-0 left-0">
        <AdminSidebar />
      </div>
      <div className="flex-auto main">
        <div className="w-[80%] m-auto py-10">
          <Routes>
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="verifyingUsers" element={<VerifyingUsers />} />
            <Route path="usersList" element={<UsersList />} />
            <Route path="newAccounts" element={<NewAccounts />} />
            <Route path="suspendUsers" element={<SuspendUsers />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
