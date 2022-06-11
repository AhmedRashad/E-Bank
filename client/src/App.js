import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Signin from "./pages/Login";
import Signup from "./pages/Register";
import CreateAccount from "./pages/createAccount/CreateAccount";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NotFound from "./pages/notFound/NotFound";
import ForgetPassword from "./pages/forgetPassword";
import ResetPassword from "./pages/resetPassword";
import { updateUser } from "./features/user/userSlice";
const App = () => {
  const dispatch = useDispatch();
  const id = "62a3e63efaa1b63e8285726e";
  const status = {
    status: "active",
  };
  useEffect(() => {
    dispatch(updateUser(id, status));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
          <Route path="/admin/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
