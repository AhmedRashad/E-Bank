import "./pagination.css";

/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link, NavLink } from "react-router-dom";

const Pagination = () => {
  return (
    <div>
      <div className="flex-1 flex justify-between sm:hidden">
        <NavLink
          to="#"
          className="relative inline-flex items-center px-4 py-2
          border border-gray-300 text-sm font-medium rounded-md
          text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </NavLink>
        <NavLink
          to="#"
          className="ml-3 relative inline-flex items-center
          px-4 py-2 border border-gray-300 text-sm font-medium rounded-md
          text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </NavLink>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <NavLink
              to="#"
              className="relative inline-flex items-center px-2 py-2
              rounded-l-md border border-gray-300
              bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </NavLink>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <NavLink
              to="#"
              aria-current="page"
              className="z-10 bg-indigo-50 border-indigo-500
              text-indigo-600 relative inline-flex items-center px-4
              py-2 border text-sm font-medium"
            >
              1
            </NavLink>
            <NavLink
              to="#"
              className="bg-white border-gray-300
              text-gray-500 hover:bg-gray-50 relative inline-flex
              items-center px-4 py-2 border text-sm font-medium"
            >
              2
            </NavLink>
            <NavLink
              to="#"
              className="bg-white border-gray-300 text-gray-500
              hover:bg-gray-50 hidden md:inline-flex relative items-center
              px-4 py-2 border text-sm font-medium"
            >
              3
            </NavLink>
            <span
              className="relative inline-flex items-center px-4 py-2 border
            border-gray-300 bg-white text-sm font-medium text-gray-700"
            >
              ...
            </span>
            <NavLink
              to="#"
              className="bg-white border-gray-300 text-gray-500
              hover:bg-gray-50 hidden md:inline-flex relative items-center
              px-4 py-2 border text-sm font-medium"
            >
              8
            </NavLink>
            <NavLink
              to="#"
              className="bg-white border-gray-300 text-gray-500
              hover:bg-gray-50 relative inline-flex items-center px-4
              py-2 border text-sm font-medium"
            >
              9
            </NavLink>
            <NavLink
              to="#"
              className="bg-white border-gray-300 text-gray-500
              hover:bg-gray-50 relative inline-flex items-center px-4 py-2
              border text-sm font-medium"
            >
              10
            </NavLink>
            <NavLink
              to="#"
              className="relative inline-flex items-center px-2
              py-2 rounded-r-md border border-gray-300
              bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
