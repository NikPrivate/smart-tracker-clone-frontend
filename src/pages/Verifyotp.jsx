import React from "react";
import { Link } from "react-router-dom";
import Otpinput from "../components/Otpinput";

const Verifyotp = () => {
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
                Verify OTP
              </h1>
            </div>
            <p className="text-sm text-gray-300">
              Please enter the OTP send to{" "}
              <span className="text-orange-300">sample@gmail.com</span>
            </p>
          </div>
          <div className="p-4">
            <div className="mb-5 mt-2">
              <Otpinput />
            </div>
            <Link to="/verify-otp">
              <button className="p-2 py-4 rounded shadow w-full bg-orange-500 mb-3 font-sans font-semibold hover:bg-orange-400 cursor-pointer text-slate-200 text-sm">
                VERIFY
              </button>
            </Link>
            <div className="flex justify-between">
              <p className="text-orange-100 font-semibold text-end text-sm font-sans">
                00:01
              </p>
              <p className="text-gray-200 font-semibold text-end text-sm font-sans">
                Resend OTP
              </p>
            </div>
            <Link to="/forget-password">
              <button className="p-2 py-4 rounded shadow border w-full mt-3 mb-4 font-sans font-semibold hover:bg-gray-800 cursor-pointer text-slate-200 text-sm">
                BACK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifyotp;
