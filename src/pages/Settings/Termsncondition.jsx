import React from "react";
import Navsettings from "./Navsettings";

const Termsncondition = () => {
  return (
    <div>
      <Navsettings />
      <div className="px-[220px] mt-10">
        <h1 className="font-sans text-4xl font-bold text-gray-600">
          Smart Tracker Terms of Use
        </h1>
        <div className="mt-8 space-y-5">
          <p className="hover:text-orange-400 hover:underline cursor-pointer w-fit">
            1. Introduction
          </p>
          <p className="hover:text-orange-400 hover:underline cursor-pointer w-fit">
            2. The Smart Tracker Service Provided by Us
          </p>
          <p className="hover:text-orange-400 hover:underline cursor-pointer w-fit">
            3. Your Use of the Smart Tracker Service
          </p>
          <p className="hover:text-orange-400 hover:underline cursor-pointer w-fit">
            4. Content and Intellectual Property Rights
          </p>
          <p className="hover:text-orange-400 hover:underline cursor-pointer w-fit">
            5. Customer Support, Information, Questions and Complaints
          </p>
          <p className="hover:text-orange-400 hover:underline cursor-pointer w-fit">
            6. Problems and Disputes
          </p>
          <p className="hover:text-orange-400 hover:underline cursor-pointer w-fit">
            7. About these Terms
          </p>
        </div>
      </div>
    </div>
  );
};

export default Termsncondition;
