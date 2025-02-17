import React from "react";
import { CgProfile } from "react-icons/cg";
import {
  IoIosArrowDropdownCircle,
  IoIosNotificationsOutline,
} from "react-icons/io";
import { Link } from "react-router-dom";

const Settingheader = () => {
  return (
    <div className="bg-blue-900 p-5">
      <div className="flex justify-between mx-[200px]">
        <div>
          <h1 className="text-xl font-bold font-sans text-gray-100">
            SMART TRACKER
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/dashboard">
            <p className="font-sans text-gray-100 font-bold text-lg hover:scale-110 duration-300">
              Dashboard
            </p>
          </Link>
          <IoIosNotificationsOutline className="text-2xl text-gray-100 cursor-pointer" />
          <CgProfile className="text-2xl text-gray-100 cursor-pointer" />
          <IoIosArrowDropdownCircle className="text-2xl text-gray-100 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Settingheader;
