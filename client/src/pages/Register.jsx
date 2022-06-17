import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import Loading from "../components/loading/Loading";
import { URL } from "../config";
import logo from "../logo.png";

export default function Signup() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [active, setActive] = useState(true);

  const [pending, setPending] = useState(false);

  const [rejected, setRejected] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, phone, password, confirmPassword } = form;

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // On Submit
  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      toast("Password does not match");
      setIsLoading(false);
    } else {
      axios
        .post(`${URL}/users/register`, form, { withCredentials: true })
        .then((res) => {
          setIsLoading(false);
          if (res.data.admin) {
            navigate("/admin/dashboard", { replace: true });
          } else if (res.data.admin === false && res.data.status === "active") {
            navigate("/user/dashboard", { replace: true });
          } else if (
            res.data.admin === false &&
            res.data.status === "pending"
          ) {
            setActive(false);
            setPending(true);
          } else if (
            res.data.admin === false &&
            res.data.status === "rejected"
          ) {
            setActive(false);
            setRejected(true);
          } else {
            setActive(true);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error(err.response.data.message);
        });
    }
  };

  // Go To Home
  const handleGoHome = () => {
    axios
      .get(`${URL}/users/logout`, {
        withCredentials: true,
      })
      .then(() => {
        window.location.reload();
      })
      .catch(() => toast.error("Try again"));
  };

  return (
    <>
      <ToastContainer />
      {isLoading && <Loading />}

      <main className="min-h-screen px-4 bg-[url('images/pattern.jpg')] bg-cover">
        <div
          className="min-h-screen max-w-prose
          bg-white mx-auto flex items-center justify-center shadow-xl"
        >
          {active ? (
            <form className="w-4/5 space-y-8 py-4" onSubmit={onSubmit}>
              {/* LOGO */}
              <div className="w-auto">
                <Link to="/">
                  <div className=" rounded-2xl mb-12 bg-black flex justify-center">
                    <img src={logo} alt="e-Bank" className="p-1 m-2" />
                  </div>
                </Link>
              </div>

              {/* Fullname input  */}
              <div className="relative">
                <input
                  required
                  id="name"
                  type="text"
                  className="block w-full px-4 py-2 text-xl font-normal
                  text-gray-700 bg-white bg-clip-padding border
                  border-solid border-gray-300 rounded transition
                  ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none peer placeholder-transparent"
                  placeholder="Full Name"
                  autoComplete="on"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
                <label
                  htmlFor="fullname"
                  className="absolute left-3 -top-2.5 bg-white px-1
                    text-sm text-blue-600 peer-placeholder-shown:text-gray-500
                    peer-placeholder-shown:text-xl peer-placeholder-shown:top-2
                    transition-all peer-placeholder-shown:pb-1
                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Full Name
                </label>
              </div>

              {/* Email input  */}
              <div className="relative">
                <input
                  required
                  id="mail"
                  type="text"
                  className="block w-full px-4 py-2 text-xl font-normal
                    text-gray-700 bg-white bg-clip-padding
                    border border-solid border-gray-300 rounded
                    transition ease-in-out m-0 focus:text-gray-700
                    focus:bg-white focus:border-blue-600
                    focus:outline-none peer placeholder-transparent"
                  placeholder="Email address"
                  autoComplete="on"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
                <label
                  htmlFor="mail"
                  className="absolute left-3 -top-2.5 bg-white px-1
                    text-sm text-blue-600 peer-placeholder-shown:text-gray-500
                    peer-placeholder-shown:text-xl peer-placeholder-shown:top-2
                    transition-all peer-placeholder-shown:pb-1
                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Email address
                </label>
              </div>
              {/* Phone input  */}
              <div className="relative">
                <input
                  required
                  id="phone"
                  type="text"
                  className="block w-full px-4 py-2 text-xl font-normal
                  text-gray-700 bg-white bg-clip-padding border border-solid
                  border-gray-300 rounded transition ease-in-out m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600
                  focus:outline-none peer placeholder-transparent"
                  placeholder="Email address"
                  autoComplete="on"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                />
                <label
                  htmlFor="phone"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm
                    text-blue-600 peer-placeholder-shown:text-gray-500
                    peer-placeholder-shown:text-xl peer-placeholder-shown:top-2
                    transition-all peer-placeholder-shown:pb-1
                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Phone Number
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="relative">
                <input
                  required
                  id="password"
                  type="password"
                  className="block w-full px-4 py-2 text-xl font-normal text-gray-700
                    bg-white bg-clip-padding border border-solid border-gray-300
                    rounded transition ease-in-out m-0 focus:text-gray-700
                    focus:bg-white focus:border-blue-600 focus:outline-none
                    peer placeholder-transparent"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm
                    text-blue-600 peer-placeholder-shown:text-gray-500
                    peer-placeholder-shown:text-xl peer-placeholder-shown:top-2
                    transition-all peer-placeholder-shown:pb-1
                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  password
                </label>
              </div>
              {/* <!-- Confirm Password input --> */}
              <div className="relative">
                <input
                  required
                  id="confirmPassword"
                  type="password"
                  className="block w-full px-4 py-2 text-xl font-normal
                    text-gray-700 bg-white bg-clip-padding border border-solid
                    border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600
                    focus:outline-none peer placeholder-transparent"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onChange}
                />
                <label
                  htmlFor="confirmPassword"
                  className="absolute left-3 -top-2.5 bg-white px-1 text-sm
                    text-blue-600 peer-placeholder-shown:text-gray-500
                    peer-placeholder-shown:text-xl peer-placeholder-shown:top-2
                    transition-all peer-placeholder-shown:pb-1
                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Confirm Password
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium
                  text-sm leading-snug uppercase rounded shadow-md
                  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
                  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800
                  active:shadow-lg transition duration-150 ease-in-out w-full"
              >
                Sign up
              </button>

              {/* Divider */}
              <div
                className="flex items-center my-4 before:flex-1
                before:border-t before:border-gray-300 before:mt-0.5
                after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
              >
                <p className="text-center text-slate-500 font-semibold mx-4 mb-0">
                  OR
                </p>
              </div>
              {/* Login Link */}
              <div className="w-full text-center">
                Already have account?{" "}
                <Link to="/signin" className="text-blue-500 underline">
                  Sign in
                </Link>
              </div>
            </form>
          ) : pending ? (
            <div className="flex flex-col gap-10">
              <p className="text-2xl text-yellow-600 font-bold">
                Your Account Is Under Review
              </p>
              <button onClick={handleGoHome} className="create-account-btn">
                Go Back
              </button>
            </div>
          ) : (
            rejected && (
              <div className="flex flex-col gap-10">
                <p className="text-2xl text-red-600">Your Account Rejected</p>
                <button onClick={handleGoHome} className="create-account-btn">
                  Go Back
                </button>
              </div>
            )
          )}
        </div>
      </main>
    </>
  );
}
