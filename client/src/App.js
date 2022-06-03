import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Signin from "./pages/Login";
import Signup from "./pages/Register";
import Home from "./pages/home/Home";
import CreateAccount from "./pages/createAccount/CreateAccount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
