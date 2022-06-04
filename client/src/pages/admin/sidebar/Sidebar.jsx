import "./sidebar.css";
import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiTable,
  HiClipboardList,
  HiUsers,
  HiUser,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

import logo from "../../../logo2.png";

const AdminSidebar = () => {
  return (
    <div className="h-full">
      <Sidebar
        aria-label="Sidebar with logo branding example"
        className="!bg-gray-50 dark:!bg-gray-900"
      >
        <NavLink to="/admin/dashboard">
          <img src={logo} alt="e-Bank" className="w-1/2 p-1 m-2" />
        </NavLink>

        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <NavLink className="item-container" to="/admin/dashboard">
              <span>
                <HiChartPie className="icon" />
              </span>
              <span className="item">Dashboard</span>
            </NavLink>

            <NavLink className="item-container" to="/admin/verfyingUsers">
              <span>
                <HiChartPie className="icon" />
              </span>
              <span className="item">Verfying Users</span>
            </NavLink>

            <NavLink className="item-container" to="/admin/usersLists">
              <span>
                <HiChartPie className="icon" />
              </span>
              <span className="item">Users List</span>
            </NavLink>

            <NavLink className="item-container" to="/admin/newAccounts">
              <span>
                <HiChartPie className="icon" />
              </span>
              <span className="item">New Accounts</span>
            </NavLink>

            <NavLink className="item-container" to="/admin/suspendUsers">
              <span>
                <HiChartPie className="icon" />
              </span>
              <span className="item">Suspend Users</span>
            </NavLink>

            <NavLink className="item-container" to="/">
              <span>
                <HiTable className="icon" />
              </span>
              <span className="item">Log out</span>
            </NavLink>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default AdminSidebar;
