import "./dashboardNavBar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiChevronDown, HiUser } from "react-icons/hi";

const DashboardNavBar = (props) => {
  const { handleSideBar, adminAvatar, adminName } = props;
  const [openAvatar, setOpenAvatar] = useState(false);

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      setOpenAvatar(false);
    }
  });

  return (
    <>
      <div className="bg-Midnight pb-12 pt-4">
        <div className="container flex justify-between items-center">
          <button onClick={handleSideBar} className="toggle-side-bar">
            <HiMenu />
          </button>
          <div className="relative">
            <div
              onClick={() => setOpenAvatar(!openAvatar)}
              className="avatar-container"
            >
              <div className="p-2 rounded-full bg-gray-100 text-gray-500">
                {/* <img src={adminAvatar} alt="adminAvatar" /> */}
                <HiUser />
              </div>
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
                    <NavLink to="/" className="admin-nav-logout-btn">
                      Log out
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container -mt-6">
        <div
          className="bg-gray-50
            shadow-md font-bold p-4"
        >
          ADMIN PANEL
        </div>
      </div>
    </>
  );
};

export default DashboardNavBar;
