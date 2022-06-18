import "./sidebar.css";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiUsers, HiUser, HiLogout } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import logo from "../../../../logo.png";
import { URL } from "../../../../config";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    axios
      .get(`${URL}/users/logout`, {
        withCredentials: true,
      })
      .then(() => {
        navigate("/", { replace: true });
        window.location.reload();
      })
      .catch(() => toast.error("Try again"));
  };

  return (
    <>
      <ToastContainer />
      <div className="h-full">
        <Sidebar
          aria-label="Sidebar with logo branding example"
          className="!bg-gray-50 shadow-lg dark:!bg-gray-900"
        >
          <NavLink to="/admin/dashboard">
            <div className="sidbar-logo">
              <img src={logo} alt="e-Bank" className="w-1/2 p-1 m-2" />
            </div>
          </NavLink>

          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <NavLink className="sidbar-item-container" to="/admin/dashboard">
                <span>
                  <HiChartPie className="sidbar-icon" />
                </span>
                <span className="sidbar-item">Dashboard</span>
              </NavLink>

              <NavLink className="sidbar-item-container" to="/admin/users">
                <span>
                  <HiUsers className="sidbar-icon" />
                </span>
                <span className="sidbar-item">Users</span>
              </NavLink>

              <NavLink className="sidbar-item-container" to="/admin/accounts">
                <span>
                  <HiUser className="sidbar-icon" />
                </span>
                <span className="sidbar-item">Accounts</span>
              </NavLink>

              <button
                onClick={handleLogOut}
                className="sidbar-item-container w-full"
              >
                <span>
                  <HiLogout className="sidbar-icon" />
                </span>
                <span className="sidbar-item text-left">Log out</span>
              </button>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
};

export default AdminSidebar;
