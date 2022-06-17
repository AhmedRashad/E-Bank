import logo from "../logo.png";
import { Link, NavLink } from "react-router-dom";
/*
Made by: Mohammed Khaled, T#6.
*/

export default function Footer() {
  return (
    <footer className="p-4 bg-primary shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="flex items-center mb-4 sm:mb-0">
          <img src={logo} className="mr-3 h-8" alt="eBank Logo" />
        </span>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-PWhite sm:mb-0">
          <Link to="/">
            <li>
              <p className="mr-4 hover:underline md:mr-6 ">About us</p>
            </li>
          </Link>

          <Link to="/faq">
            <li>
              <p className="mr-4 hover:underline md:mr-6 ">FAQ</p>
            </li>
          </Link>

          <Link to="/team">
            <li>
              <p className="mr-4 hover:underline md:mr-6 ">Meet our team</p>
            </li>
          </Link>

          <Link to="/signup">
            <li>
              <p className="hover:underline ">Join us</p>
            </li>
          </Link>
        </ul>
      </div>
      <hr className="my-6 border-Gold sm:mx-auto lg:my-8" />
      <span className="block text-sm text-PWhite sm:text-center">
        © 2022 eBank™. All Rights Reserved.
      </span>
    </footer>
  );
}
