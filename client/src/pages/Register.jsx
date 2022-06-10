import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../features/user/userSlice";
import Loading from "../components/loading/Loading";

export default function Signup() {
  const { user, isError, isSuccess, isLoading } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
    } else {
      dispatch(register({ name, email, phone, password }));
      console.log({ name, email, phone, password });
    }
  };

  useEffect(() => {
    if (user.admin) {
      navigate("/admin/dashboard");
    }
    if (user.admin === false) {
      console.log(user.admin);
      navigate("/dashboard");
    }
  }, [isLoading, user, navigate]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <main className="min-h-screen px-4 bg-[url('images/pattern.jpg')] bg-cover">
        <div className="min-h-screen max-w-prose bg-white mx-auto flex items-center justify-center shadow-xl">
          <form className="w-4/5 space-y-8 py-4" onSubmit={onSubmit}>
            {/* LOGO */}
            <div className="logo w-full text-center">E-Bank</div>

            {/* Quick Login */}
            <a
              className="px-7 py-3 text-gray-700 border-[1px] border-gray-700 font-medium text-xs md:text-base leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 "
              href="#!"
            >
              <FcGoogle className="w-3.5 h-3.5 mr-2" /> Continue with Google
            </a>

            {/* Divider */}
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center text-slate-500 font-semibold mx-4 mb-0">
                OR
              </p>
            </div>

            {/* Fullname input  */}
            <div className="relative">
              <input
                required
                id="name"
                type="text"
                className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer placeholder-transparent"
                placeholder="Full Name"
                autoComplete="on"
                name="name"
                value={name}
                onChange={onChange}
              />
              <label
                htmlFor="fullname"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-blue-600 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:pb-1
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
                className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer placeholder-transparent"
                placeholder="Email address"
                autoComplete="on"
                name="email"
                value={email}
                onChange={onChange}
              />
              <label
                htmlFor="mail"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-blue-600 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:pb-1
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
                className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer placeholder-transparent"
                placeholder="Email address"
                autoComplete="on"
                name="phone"
                value={phone}
                onChange={onChange}
              />
              <label
                htmlFor="phone"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-blue-600 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:pb-1
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
                className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer placeholder-transparent"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
              />
              <label
                htmlFor="password"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-blue-600 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:pb-1
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
                className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer placeholder-transparent"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChange}
              />
              <label
                htmlFor="confirmPassword"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-blue-600 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:pb-1
                  peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Confirm Password
              </label>
            </div>

            {/* Check box */}
            <div className="flex form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer checked:after:content-['✓'] relative after:absolute after:top-2/4 after:left-2/4 after:-translate-x-2/4 after:-translate-y-2/4 after:text-white"
                id="rememberbox"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="rememberbox"
              >
                Agree the{" "}
                <Link className="text-blue-500 underline" to={"/signin"}>
                  terms
                </Link>{" "}
                and{" "}
                <Link className="text-blue-500 underline" to={"/signin"}>
                  conditions
                </Link>
                .
              </label>
            </div>

            {/* <!-- Submit button --> */}
            <button
              type="submit"
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            >
              Sign up
            </button>

            {/* Divider */}
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center text-slate-500 font-semibold mx-4 mb-0">
                OR
              </p>
            </div>
            {/* Login Link */}
            <div className="w-full text-center">
              Already have account?{" "}
              <Link className="text-blue-500 underline" to={"/signin"}>
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
