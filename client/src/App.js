import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";

import HomePage from "./pages/HomePage";
import Signin from "./pages/Login";
import Signup from "./pages/Register";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NotFound from "./pages/notFound/NotFound";
import ForgetPassword from "./pages/forgetPassword";
import ResetPassword from "./pages/resetPassword";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import { URL } from "./config";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL}/users/me`, { withCredentials: true })
      .then((res) => {
        console.log(res.data[0]);
        if (res.data[0].admin) {
          navigate("/admin/dashboard", { replace: true });
          window.history.replaceState(null, null, "/admin/dashboard");
        } else if (res.data[0].admin === false) {
          navigate("/user/dashboard", { replace: true });
          window.history.replaceState(null, null, "/user/dashboard");
        }
      })
      .catch(() => {
        navigate("/", { replace: true });
        window.history.replaceState(null, null, "/");
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="/admin/*" element={<Dashboard />} />
        <Route path="/user/*" element={<UserDashboard />} />
        <Route path="/user/home" element={<UserDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
