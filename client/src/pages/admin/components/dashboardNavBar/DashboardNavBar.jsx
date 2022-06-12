import "./dashboardNavBar.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiChevronDown } from "react-icons/hi";
import { Avatar } from "flowbite-react";
import axios from "axios";

import { URL } from "../../../../config";

const DashboardNavBar = (props) => {
  const { handleSideBar, adminAvatar, adminName } = props;
  const [openAvatar, setOpenAvatar] = useState(false);

  const navigate = useNavigate();

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      setOpenAvatar(false);
    }
  });

  const handleLogOut = () => {
    axios.get(`${URL}/users/logout`, {
      withCredentials: true,
    });
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="bg-Midnight pb-4 pt-4">
        <div className="container flex justify-between items-center">
          <button onClick={handleSideBar} className="toggle-side-bar">
            <HiMenu />
          </button>
          <div className="relative">
            <div
              onClick={() => setOpenAvatar(!openAvatar)}
              className="avatar-container"
            >
              <Avatar img={adminAvatar} rounded={true} />
              <div className="flex items-center">
                <span>Hi, {adminName}</span>
                <HiChevronDown />
              </div>
            </div>
            {openAvatar && (
              <div
                className="absolute text-xs top-11
                  rounded-md right-[-17px] bg-gray-50"
              >
                <div className="pt-2 px-2 w-48 space-y-3">
                  <div className="flex flex-col">
                    <NavLink
                      onClick={() => setOpenAvatar(false)}
                      to="/admin/dashboard"
                      className="admin-nav-item rounded-none border-b"
                    >
                      Dashboard
                    </NavLink>

                    <NavLink
                      onClick={() => setOpenAvatar(false)}
                      to="/admin/users"
                      className="admin-nav-item rounded-none border-b"
                    >
                      Users
                    </NavLink>

                    <NavLink
                      onClick={() => setOpenAvatar(false)}
                      to="/admin/accounts"
                      className="admin-nav-item rounded-none border-b"
                    >
                      Accounts
                    </NavLink>
                  </div>

                  <div>
                    <button
                      onClick={handleLogOut}
                      className="admin-nav-logout-btn"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavBar;
