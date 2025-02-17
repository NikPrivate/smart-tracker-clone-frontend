import React from "react";
import { IoLogoSkype } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-900 pl-12 pt-5 pb-5 pr-12 flex justify-between">
      <div className="flex items-center">
        <IoLogoSkype className="text-3xl text-white" />
        <h1 className="font-sans font-bold text-white ml-2 text-2xl">
          SMART TRACKER
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative group w-fit">
          <Link to="/termsncondition">
            <IoIosSettings className="text-2xl text-white cursor-pointer hover:scale-110" />
          </Link>
          <span className="mt-2 absolute bg-gray-800 text-white rounded text-xs px-2 py-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
            Settings
          </span>
        </div>
        <IoIosNotificationsOutline className="text-2xl text-white cursor-pointer" />
        <CgProfile className="text-2xl text-white cursor-pointer" />
        <IoIosArrowDropdownCircle className="text-2xl text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
