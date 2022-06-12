import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import HomePage from "./pages/HomePage";
import Signin from "./pages/Login";
import Signup from "./pages/Register";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NotFound from "./pages/notFound/NotFound";
import ForgetPassword from "./pages/forgetPassword";
import ResetPassword from "./pages/resetPassword";
import { getUser } from "./features/user/userSlice";
import UserDashboard from "./pages/userDashboard/UserDashboard";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
          <Route path="/admin/*" element={<Dashboard />} />
          <Route path="/user/*" element={<UserDashboard />} />
          <Route path="/user/home" element={<UserDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
