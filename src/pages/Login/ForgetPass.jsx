import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const ForgetPass = () => {
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
              <h1 className="text-2xl font-sans font-semibold text-slate-200">
                Forget Password
              </h1>
            </div>
            <p className="text-sm text-gray-300">
              Please enter your registered email id to receive the
            </p>
            <p className="text-sm text-gray-300 mb-4">
              OTP to reset your password.
            </p>
          </div>
          <div className="p-4">
            <div className="mb-5 relative mt-2">
              <MdOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                placeholder="Email Id"
                className="outline w-full py-2 px-4 pl-10 outline-blue-800 rounded bg-slate-200"
              />
            </div>
            <Link to="/verify-otp">
              <button className="p-2 py-4 rounded shadow w-full bg-orange-500 mb-2 font-sans font-semibold hover:bg-orange-400 cursor-pointer text-slate-200 text-sm">
                SEND OTP
              </button>
            </Link>

            <p className="text-white text-center">Or</p>
            <Link to="/">
              <button className="p-2 py-4 rounded shadow border w-full mt-2 mb-4 font-sans font-semibold hover:bg-gray-800 cursor-pointer text-slate-200 text-sm">
                BACK TO LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
