import "./userNavBar.css";
import { Popover } from "@headlessui/react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { Avatar } from "flowbite-react";
import axios from "axios";

import logo from "../../logo.png";
import { URL } from "../../config";

const UserNavBar = ({ accountData }) => {
  const [openAvatar, setOpenAvatar] = useState(false);

  const navigate = useNavigate();

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      setOpenAvatar(false);
    }
  });

  document.body.addEventListener("click", (e) => {
    if (!e.target.classList.contains("relative")) {
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
    <div className="sticky top-0 left-0">
      <Popover className="shadow-lg bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 xl:px-40">
          <div className="admin-nav-container">
            <div className="w-auto">
              <Link to="/user/dashboard">
                <div className=" rounded-2xl bg-black py-px w-full">
                  <img src={logo} alt="e-Bank" className="w-2/3 p-1 m-2" />
                </div>
              </Link>
            </div>

            <div onClick={(e) => e.stopPropagation()} className="relative">
              <div
                onClick={() => setOpenAvatar(!openAvatar)}
                className="avatar-container text-gray-600 hover:text-gray-800"
              >
                <Avatar
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
                <div className="hidden sm:flex items-center font-bold">
                  <span>Hi, {accountData.name}</span>
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
                        to="/user/dashboard"
                        className="admin-nav-item rounded-none border-b"
                      >
                        Dashboard
                      </NavLink>

                      <NavLink
                        onClick={() => setOpenAvatar(false)}
                        to="/user/createAccount"
                        className="admin-nav-item rounded-none border-b"
                      >
                        Create Account
                      </NavLink>

                      <NavLink
                        onClick={() => setOpenAvatar(false)}
                        to="/user/transactions"
                        className="admin-nav-item rounded-none border-b"
                      >
                        Transactions
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
    </div>
  );
};

export default UserNavBar;
