import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ShieldCheckIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import logo from "../logo.png";
/*
Made by: Mohammed Khaled, T#6.
*/

const MoreMenu = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
<<<<<<< Updated upstream
    <>
      <Popover className="sticky top-0 z-50 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img className="h-8 w-auto sm:h-10" src={logo} alt="EBank" />
              </a>
            </div>
=======
    <Popover className="fixed top-0 left-0 w-full z-50 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src={logo} alt="EBank" />
            </a>
          </div>
>>>>>>> Stashed changes

            <a
              href="#"
              className="text-base font-medium text-PWhite hover:text-Gold"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-base font-medium text-PWhite hover:text-Gold"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-base font-medium text-PWhite hover:text-Gold"
            >
              Docs
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-Gold" : "text-PWhite",
                      "group bg-primary rounded-md inline-flex items-center text-base font-medium hover:text-Gold focus:decoration-1 focus:decoration-solid focus:decoration-Gold"
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

<<<<<<< Updated upstream
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-Gold ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-primary px-5 py-6 sm:gap-8 sm:p-8">
                          {MoreMenu.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg text-Gold"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-PWhite">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-PWhite">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <div className="flex items-center gap-4 justify-end md:flex-1">
              <Link
                to="/signin"
                className="text-base font-medium py-1 px-3 text-primary
                bg-Gold rounded-xl hover:opacity-80"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-base font-medium py-1 px-3 text-primary
                bg-Gold rounded-xl hover:opacity-80"
              >
                Register
              </Link>
            </div>
=======
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-Gold ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-primary px-5 py-6 sm:gap-8 sm:p-8">
                        {MoreMenu.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
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
                              <p className="mt-1 text-sm text-PWhite">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <div className="flex items-center justify-end md:flex-1">
            <Link
              to="/signin"
              className="text-base font-medium p-3 text-PWhite hover:opacity-80"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="ml-1 text-base font-medium p-3 text-primary bg-Gold rounded-xl hover:opacity-80"
            >
              Register
            </Link>
>>>>>>> Stashed changes
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
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-primary divide-y-2 divide-PWhite"></div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
