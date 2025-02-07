import React, { useState } from "react";
import { IoKeyOutline } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Resetpass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div className="relative h-screen flex justify-center items-center">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/login.jpg')",
        }}
      ></div>

      {/* Overlay to Reduce Opacity */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Login Form (Above the Background) */}
      <div className="relative z-10 w-[460px] bg-opacity-90 p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <h1 className="text-center text-4xl font-bold font-sans text-slate-200">
            SMART TRACKER
          </h1>
        </div>
        <div className="border bg-gray-700 rounded-lg">
          <div className="border-b pt-6 px-4 pb-4 space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-sans font-semibold text-slate-200">
                Reset Password
              </h1>
            </div>
            <p className="text-sm text-gray-300">
              Please Enter Your New Password And Proceed.
            </p>
          </div>
          <div className="p-4">
            <div className="mb-5 relative">
              <IoKeyOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                className="outline w-full py-3 px-4 pl-10 outline-blue-800 rounded bg-slate-200"
              />
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </div>
            </div>
            <div className="mb-5 relative">
              <IoKeyOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type={showPassword2 ? "text" : "password"}
                placeholder="Confirm New Password"
                className="outline w-full py-3 px-4 pl-10 outline-blue-800 rounded bg-slate-200"
              />
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={togglePasswordVisibility2}
              >
                {showPassword2 ? <IoMdEyeOff /> : <IoMdEye />}
              </div>
            </div>
            <Link to="/">
              <button className="p-2 rounded shadow w-full bg-orange-500 mb-5 font-sans font-semibold hover:bg-orange-400 cursor-pointer text-slate-200">
                RESET
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resetpass;
