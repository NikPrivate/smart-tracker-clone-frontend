import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import ForgetPass from "./pages/Login/ForgetPass";
import Verifyotp from "./pages/Login/Verifyotp";
import Resetpass from "./pages/Login/Resetpass";
import Main from "./pages/Dashboard/Main";
import Settingmain from "./pages/Settings/Settingmain";
import Termsncondition from "./pages/Settings/Termsncondition";
import Privacypolicy from "./pages/Settings/Privacypolicy";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPass />} />
        <Route path="/verify-otp" element={<Verifyotp />} />
        <Route path="/reset-password" element={<Resetpass />} />
        <Route path="/dashboard" element={<Main />} />
        <Route path="/settings" element={<Settingmain />} />
        <Route path="/termsncondition" element={<Termsncondition />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
