import React from "react";
import Settingheader from "../../components/Settingheader";
import { Link } from "react-router-dom";

const Navsettings = () => {
  return (
    <div>
      <Settingheader />
      <div className="px-[220px] mt-5">
        <div className="flex items-center gap-7">
          <div className="border rounded hover:bg-gray-500 hover:text-gray-50 px-2 py-1">
            <Link to="/termsncondition">
              <p className="font-sans">Terms and Conditions of Use</p>
            </Link>
          </div>
          <div className="border rounded hover:bg-gray-500 hover:text-gray-50 px-2 py-1">
            <Link to="/privacy">
              <p className="font-sans">Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navsettings;
