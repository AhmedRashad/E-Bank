import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "../components/loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { URL } from "../config";
import logo from "../logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [active, setActive] = useState(true);

  const [pending, setPending] = useState(false);

  const [rejected, setRejected] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Post Requewt
  const pustRequest = () => {
    axios
      .post(`${URL}/users/login`, form, { withCredentials: true })
      .then((res) => {
        setIsLoading(false);
        if (res.data.admin) {
          navigate("/admin/dashboard", { replace: true });
        } else if (res.data.admin === false && res.data.status === "active") {
          navigate("/user/dashboard", { replace: true });
        } else if (res.data.admin === false && res.data.status === "pending") {
          setActive(false);
          axios.get(`${URL}/users/logout`, {
            withCredentials: true,
          });
          setPending(true);
        } else if (res.data.admin === false && res.data.status === "rejected") {
          setActive(false);
          setRejected(true);
          axios.get(`${URL}/users/logout`, {
            withCredentials: true,
          });
        }
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err.response.data.message);
      });
  };

  // On Submit
  const onSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    pustRequest();
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
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <>
      <ToastContainer />
      {isLoading && <Loading />}

      <main className="min-h-screen px-4 bg-[url('images/pattern.jpg')] bg-cover">
        <div
          className="min-h-screen max-w-prose bg-white mx-auto
          flex items-center justify-center shadow-xl"
        >
          {active ? (
            <form onSubmit={onSubmit} className="w-4/5 space-y-8 py-4">
              {/* LOGO */}

              <div className="w-auto">
                <Link to="/">
                  <div className=" rounded-2xl mb-24 bg-black flex justify-center">
                    <img src={logo} alt="e-Bank" className="p-1 m-2" />
                  </div>
                </Link>
              </div>

              {/* Email input  */}
              <div className="relative mb-6">
                <input
                  required
                  type="text"
                  id="mail"
                  className="peer block w-full px-4 py-2 text-xl font-normal
                  text-gray-700 bg-white bg-clip-padding border border-solid
                  border-gray-300 rounded transition ease-in-out m-0
                  focus:bg-white focus:border-blue-600
                  focus:outline-none placeholder-transparent"
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

              {/* <!-- Password input --> */}
              <div className="relative mb-6">
                <input
                  required
                  type="password"
                  id="password"
                  className="peer block w-full px-4 py-2 text-xl font-normal
                  text-gray-700 bg-white bg-clip-padding border
                  border-solid border-gray-300 rounded transition
                  ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none placeholder-transparent"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
                <label
                  htmlFor="password"
                  className="absolute left-3 -top-2.5 bg-white px-1
                    text-sm text-blue-600 peer-placeholder-shown:text-gray-500
                    peer-placeholder-shown:text-xl peer-placeholder-shown:top-2
                    transition-all peer-placeholder-shown:pb-1
                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Passowrd
                </label>
              </div>

              {/* Check box */}
              <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border
                      border-gray-300 rounded-sm bg-white
                      checked:bg-blue-600 checked:border-blue-600
                      focus:outline-none transition duration-200 mt-1 align-top
                      bg-no-repeat bg-center bg-contain float-left mr-2
                      cursor-pointer checked:after:content-['✓'] relative after:absolute
                      after:top-2/4 after:left-2/4 after:-translate-x-2/4
                      after:-translate-y-2/4 after:text-white"
                    id="rememberbox"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="rememberbox"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forget-password"
                  className="text-blue-600 hover:text-blue-700
                  focus:text-blue-700 active:text-blue-800
                  duration-200 mx-auto sm:mx-0 mt-2 sm:mt-0 transition ease-in-out"
                  aria-disabled
                >
                  Forgot password?
                </Link>
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="inline-block px-7 py-3
                bg-blue-600 text-white font-medium text-sm
                leading-snug uppercase rounded shadow-md
                hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
                focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg transition
                duration-150 ease-in-out w-full"
              >
                Sign in
              </button>

              {/* Divider */}
              <div
                className="flex items-center
                my-4 before:flex-1 before:border-t
                before:border-gray-300 before:mt-0.5
                after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
              >
                <p className="text-center text-slate-500 font-semibold mx-4 mb-0">
                  OR
                </p>
              </div>

              {/* Quick Login */}
              <div className="w-full text-center">
                You don't have account?{" "}
                <Link className="text-blue-500 underline" to="/signup">
                  Sign up
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
};

export default Login;
