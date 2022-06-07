import "./sidebar.css";
import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiUsers,
  HiUser,
  HiLogout,
  HiUserAdd,
  HiUserRemove,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

import logo from "../../../../logo.png";

const AdminSidebar = () => {
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

            <NavLink
              className="sidbar-item-container"
              to="/admin/verifyingUsers"
            >
              <span>
                <HiUserAdd className="sidbar-icon" />
              </span>
              <span className="sidbar-item">Verifying Users</span>
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

            <NavLink className="sidbar-item-container" to="/admin/suspendUsers">
              <span>
                <HiUserRemove className="sidbar-icon" />
              </span>
              <span className="sidbar-item">Suspend Users</span>
            </NavLink>

            <NavLink className="sidbar-item-container" to="/">
              <span>
                <HiLogout className="sidbar-icon" />
              </span>
              <span className="sidbar-item">Log out</span>
            </NavLink>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default AdminSidebar;
