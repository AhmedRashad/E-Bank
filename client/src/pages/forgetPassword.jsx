import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const handelSubmit = (e) => {
        let success = true;
        e.preventDefault();
        axios.post('http://localhost:5000/user/forget-password', { email })
            .then(() => {})
            .catch(
                () => {
                    success = false;
                    toast("something bad happened, try again later")
                }
        );
        if (success) {
            setTimeout(() => {
                navigate("/");
            },3000)
            toast("cheak your email for reset email, it might up to 15 min");
        }
        
    }
    return (<>
        <ToastContainer/>
        <main className="min-h-screen px-4 bg-[url('images/pattern.jpg')] bg-cover">
            <div className="min-h-screen max-w-prose bg-white mx-auto flex items-center justify-center shadow-xl">
                <form onSubmit={handelSubmit} className="w-4/5 space-y-8 py-4">
                    <p className="text-center text-gray-700">type your email here and you will get email with link to reset your password </p>

                  {/* Email input  */}
                <div className="relative mb-6">
                <input
                    required
                    type="text"
                    id="mail"
                    className="peer block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-transparent"
                    placeholder="Email address"
                    autoComplete="on"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <label
                    htmlFor="mail"
                    className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-blue-600 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 transition-all peer-placeholder-shown:pb-1
                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                    Email address
                </label>
                </div>
                <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                >
                Submit
                </button>

            </form>
        </div>
      </main>
    </>);
}

export default ForgetPassword;