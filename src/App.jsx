import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgetPass from "./pages/ForgetPass";
import Verifyotp from "./pages/Verifyotp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPass />} />
        <Route path="/verify-otp" element={<Verifyotp />} />
      </Routes>
    </Router>
  );
};

export default App;
