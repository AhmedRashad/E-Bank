import "./sidebar.css";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiUsers, HiUser, HiLogout } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../../../logo.png";
import RemoveCookie from "./../../../../cookie/RemoveCookie";

const AdminSidebar = () => {
  const navigate = useNavigate();
  return (
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
              onClick={() => {
                RemoveCookie("token");
                navigate("/", { replace: true });
              }}
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
  );
};

export default AdminSidebar;
