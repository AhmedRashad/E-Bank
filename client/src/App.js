import { useState, useEffect } from "react";
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
import Team from "./pages/Team";
import FAQ from "./pages/FAQ";
import { URL } from "./config";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    axios
      .get(`${URL}/users/me`, { withCredentials: true })
      .then((res) => {
        if (res.data[0].admin) {
          setAdmin(true);
        } else if (res.data[0].admin === false) {
          setUser(true);
        }
      })
      .catch((err) => {
        if (err.response.statusText == "Unauthorized") {
          navigate("/", { replace: true });
        }
      });
  }, [user, admin]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="/admin/*" element={<>{admin && <Dashboard />}</>} />
        <Route path="/user/*" element={<>{user && <UserDashboard />}</>} />
        <Route path="/user/home" element={<>{user && <UserDashboard />}</>} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
