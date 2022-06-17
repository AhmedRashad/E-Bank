import { Link, NavLink } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { BookmarkAltIcon, SupportIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import logo from "../logo.png";
/*
Made by: Mohammed Khaled, T#6.
*/

const MoreMenu = [
  {
    name: "FAQs",
    description: "Frequently Asked Questions",
    href: "/faq",
    icon: SupportIcon,
  },
  {
    name: "Team",
    description: "Meet the team that worked on this project",
    href: "/team",
    icon: BookmarkAltIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <Popover className="fixed top-0 left-0 w-full z-50 bg-primary">
        <div className="flex justify-between items-center p-4 sm:px-10 ">
          <div
            className="flex justify-between items-center w-full py-2
            md:justify-start md:space-x-10"
          >
            <div className="flex justify-start ">
              <a href="/">
                <img className="w-full block" src={logo} alt="EBank" />
              </a>
            </div>

            <div
              className="md:flex justify-between items-center py-2
            md:justify-start md:space-x-10 hidden"
            >
              <a
                href="#About"
                className="text-base font-medium text-PWhite hover:text-Gold"
              >
                About
              </a>

              <a
                href="#Features"
                className="text-base font-medium text-PWhite hover:text-Gold"
              >
                Features
              </a>
              <a
                href="/#App"
                className="text-base font-medium text-PWhite hover:text-Gold"
              >
                App
              </a>
            </div>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-Gold" : "text-PWhite",
                      `group bg-primary rounded-md inline-flex items-center
                        text-base font-medium hover:text-Gold focus:decoration-1
                        focus:decoration-solid focus:decoration-Gold`
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-Gold" : "text-PWhite",
                        "ml-2 h-5 w-5 group-hover:text-Gold"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel
                      className="absolute z-10 left-1/2 transform -translate-x-1/2
                        mt-3 px-2 w-auto sm:px-0 bg-primary"
                    >
                      <div className="flex md:hidden flex-col items-center gap-2 px-5 ">
                        <a
                          href="#About"
                          className="text-base font-medium text-PWhite hover:text-Gold"
                        >
                          About
                        </a>

                        <a
                          href="#Features"
                          className="text-base font-medium text-PWhite hover:text-Gold"
                        >
                          Features
                        </a>
                        <a
                          href="/#App"
                          className="text-base font-medium text-PWhite hover:text-Gold"
                        >
                          App
                        </a>
                      </div>
                      <div
                        className="rounded-lg shadow-lg ring-1 ring-Gold ring-opacity-5
                        overflow-hidden"
                      >
                        <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                          {MoreMenu.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg text-Gold"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-Gold"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-PWhite">
                                  {item.name}
                                </p>
                                <p className="mt-1 whitespace-nowrap hidden md:block text-sm text-PWhite">
                                  {item.description}
                                </p>
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      </div>

                      <div className="flex md:hidden items-center gap-4 flex-col pb-3">
                        <Link
                          to="/signin"
                          className="text-base font-medium p-3 text-PWhite hover:opacity-80"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="ml-1 text-base font-medium p-3 text-primary
                        bg-Gold rounded-xl hover:opacity-80"
                        >
                          Register
                        </Link>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <div className="hidden md:flex items-center gap-4 justify-end md:flex-1">
              <Link
                to="/signin"
                className="text-base font-medium p-3 text-PWhite hover:opacity-80"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="ml-1 text-base font-medium p-3 text-primary
                bg-Gold rounded-xl hover:opacity-80"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
}
