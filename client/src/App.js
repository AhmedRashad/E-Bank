import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/createAccount/CreateAccount";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createAccount" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
