import React from "react";
import { PiHandWavingFill } from "react-icons/pi";

const Login = () => {
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
      <div className="relative z-10 w-[450px] bg-opacity-90 p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <h1 className="text-center text-4xl font-bold font-sans text-slate-200">
            SMART TRACKER
          </h1>
        </div>
        <div className="border bg-gray-700 rounded-lg">
          <div className="border-b p-4 space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-sans font-semibold text-slate-200">
                Welcome Back
              </h1>
              <PiHandWavingFill className="text-3xl text-yellow-400" />
            </div>
            <p className="text-xl text-slate-100">Login</p>
          </div>
          <div className="p-4">
            <div className="mb-5">
              <input
                placeholder="Username"
                className="outline w-full py-2 px-4 outline-blue-800 rounded bg-slate-200"
              />
            </div>
            <div className="mb-5">
              <input
                placeholder="Password"
                className="outline w-full py-2 px-4 outline-blue-800 rounded bg-slate-200"
              />
            </div>

            <button className="p-2 rounded shadow w-full bg-orange-500 mb-5 font-sans font-semibold hover:bg-orange-400 cursor-pointer text-slate-200">
              LOGIN
            </button>
            <div className="flex gap-2 items-center">
              <p className="font-sans text-slate-200">Forget Password?</p>
              <p className="text-orange-500 font-sans cursor-pointer hover:underline">
                Reset
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
