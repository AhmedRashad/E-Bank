import "./adminNavBar.css";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink, Link } from "react-router-dom";

import logo from "../../../../logo.png";

const AdminNavBar = () => {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div
          className="
                  flex
                  justify-between
                  items-center
                  border-b-2
                  border-gray-100
                  py-4"
        >
          <div className="w-30 lg:w-0 lg:flex-1">
            <Link to="/admin/dashboard">
              <div className=" rounded-2xl bg-black py-px w-full">
                <img src={logo} alt="e-Bank" className="w-2/2 p-1 m-2" />
              </div>
            </Link>
          </div>

          <div className="-mr-2 -my-2">
            <Popover.Button
              className="
                      bg-white
                          rounded-md
                          p-2
                          inline-flex
                          items-center
                          justify-center
                          text-gray-400
                          hover:text-gray-700
                          hover:bg-gray-100
                          focus:outline-none"
            >
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
        <Popover.Panel
          className="
              absolute
              top-0
              inset-x-0
              p-2
              transition
              transform
              origin-top-right"
        >
          <div
            className="
                    rounded-lg
                    shadow-lg
                    ring-1
                    ring-black
                    ring-opacity-5
                    bg-white
                    divide-y-2
                    divide-gray-50"
          >
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
                  <Popover.Button
                    className="
                      bg-white
                      rounded-md
                      p-2
                      inline-flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:text-gray-500
                      hover:bg-gray-100
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="flex flex-col">
                <NavLink
                  to="/admin/dashboard"
                  className="
                        p-2
                        rounded-lg
                        text-base
                        font-medium
                        text-gray-500
                        hover:text-gray-700"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/admin/verifyingUsers"
                  className="
                        p-2
                        rounded-lg
                        text-base
                        font-medium
                        text-gray-500
                        hover:text-gray-700"
                >
                  Verifying Users
                </NavLink>
                <NavLink
                  to="/admin/usersList"
                  className="
                        p-2
                        rounded-lg
                        text-base
                        font-medium
                        text-gray-500
                        hover:text-gray-700"
                >
                  Users List
                </NavLink>
                <NavLink
                  to="/admin/newAccounts"
                  className="
                        p-2
                        rounded-lg
                        text-base
                        font-medium
                        text-gray-500
                        hover:text-gray-700"
                >
                  New Accounts
                </NavLink>
                <NavLink
                  to="/admin/suspendUsers"
                  className="
                        p-2
                        rounded-lg
                        text-base
                        font-medium
                        text-gray-500
                        hover:text-gray-700"
                >
                  Suspend Users
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/"
                  className="w-full
                        flex
                        items-center
                        justify-center
                        px-4
                        py-2
                        border
                        border-transparent
                        rounded-md
                        shadow-sm
                        text-base
                        font-medium
                        text-white
                        bg-indigo-600
                        hover:bg-indigo-700"
                >
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
