import React from "react";
import Navsettings from "./Navsettings";

const Privacypol = () => {
  return (
    <div>
      <Navsettings />
      <div className="px-[220px] mt-10">
        <h1 className="font-sans text-4xl font-bold text-gray-600">
          Smart Tracker Privacy Policy
        </h1>
        <div className="mt-8 space-y-5">
          <p className="hover:text-orange-400 hover:underline cursor-pointer w-fit">
            1. Data collection
          </p>
          <p className="hover:text-orange-400 hover:underline cursor-pointer w-fit">
            2. Usage of personal information
          </p>
          <p className="hover:text-orange-400 hover:underline cursor-pointer w-fit">
            3. Third-party data sharing
          </p>
          <p className="hover:text-orange-400 hover:underline cursor-pointer w-fit">
            4. Security measures
          </p>
          <p className="hover:text-orange-400 hover:underline cursor-pointer w-fit">
            5. User rights
          </p>
          <p className="hover:text-orange-400 hover:underline cursor-pointer w-fit">
            6. Contact information
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacypol;
