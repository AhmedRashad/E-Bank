import "./adminNavBar.css";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Avatar } from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";
import axios from "axios";

import logo from "../../../../logo.png";
import { URL } from "../../../../config";

const AdminNavBar = (props) => {
  const { adminAvatar, adminName } = props;
  const [openAvatar, setOpenAvatar] = useState(false);

  const navigate = useNavigate();

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      setOpenAvatar(false);
    }
  });

  const handleLogOut = () => {
    axios
      .get(`${URL}/users/logout`, {
        withCredentials: true,
      })
      .then(() => {
        navigate("/", { replace: true });
        window.location.reload();
      });
  };

  return (
    <Popover className="relative shadow-lg bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="admin-nav-container">
          <div className="w-30 lg:w-0 lg:flex-1">
            <Link to="/admin/dashboard">
              <div className=" rounded-2xl bg-black py-px w-full">
                <img src={logo} alt="e-Bank" className="w-2/2 p-1 m-2" />
              </div>
            </Link>
          </div>

          <div className="relative">
            <div
              onClick={() => setOpenAvatar(!openAvatar)}
              className="avatar-container text-black hover:text-gray-700"
            >
              <Avatar img={adminAvatar} rounded={true} />
              <div className="hidden sm:flex items-center font-bold">
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
    </Popover>
  );
};

export default AdminNavBar;
