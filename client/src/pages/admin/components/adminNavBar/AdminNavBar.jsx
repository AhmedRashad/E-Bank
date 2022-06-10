import "./adminNavBar.css";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink, Link } from "react-router-dom";

import logo from "../../../../logo.png";

const AdminNavBar = () => {
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

          <div className="-mr-2 -my-2">
            <Popover.Button className="admin-toggle-menu-btn">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-9 w-9" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="admin-menu-container">
          <div className="admin-menu">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="w-30">
                  <Link to="/admin/dashboard">
                    <div className="rounded-2xl bg-black py-px w-full">
                      <img src={logo} alt="e-Bank" className="w-2/2 p-1 m-2" />
                    </div>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="admin-close-menu-btn">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="flex flex-col">
                <NavLink to="/admin/dashboard" className="admin-nav-item">
                  Dashboard
                </NavLink>

                <NavLink to="/admin/users" className="admin-nav-item">
                  Users
                </NavLink>

                <NavLink to="/admin/accounts" className="admin-nav-item">
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
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default AdminNavBar;
