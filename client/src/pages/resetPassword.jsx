import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export default function ResetPassword(props) {
  const { id, token } = useParams();
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    if (pass1 === pass2) {
      axios.post(`http://localhost:5000/user/reset-password/${id}/${token}`, { newpassword : pass1})
        .then(() => { toast("your password has been changed") })
        .catch(
          (err) => {
            toast("something bad happened, try again later" + err.message)
          }
        );
    } else {
      toast("your passwords does not matched");
    }
  }
  return (
    <>
      <ToastContainer/>
      <main className="min-h-screen px-4 bg-[url('images/pattern.jpg')] bg-cover">
        <div className="min-h-screen max-w-prose bg-white mx-auto flex items-center justify-center shadow-xl">
          <form onSubmit={handelSubmit} className="w-4/5 space-y-8 py-4">
            {/* LOGO */}
            <div className="logo w-full text-center">E-Bank</div>

            {/* <!-- Password input --> */}
            <div className="relative mb-6">
              <input
                required
                type="password"
                id="password"
                className="peer block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-transparent"
                placeholder="Password"
                value={pass1}
                onChange={(e)=>{setPass1(e.target.value)}}
              />
              <label
                htmlFor="password"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-blue-600 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:pb-1
                  peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Passowrd
              </label>
            </div>

            <div className="relative mb-6">
              <input
                required
                type="password"
                id="password2"
                className="peer block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-transparent"
                placeholder="Password"
                value={pass2}
                onChange={(e)=>{setPass2(e.target.value)}}
              />
              <label
                htmlFor="confirm password"
                className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-blue-600 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:pb-1
                  peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
               Confirm Passowrd
              </label>
            </div>

            {/* <!-- Submit button --> */}
            <button
              type="submit"
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            >
              Reset password
            </button>

          </form>
        </div>
      </main>
    </>
  );
}

