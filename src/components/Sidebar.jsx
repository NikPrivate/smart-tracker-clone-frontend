import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { PiTrolleySuitcaseFill } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { BsDeviceSsd } from "react-icons/bs";
import { FaBatteryThreeQuarters } from "react-icons/fa6";
import { LiaUserClockSolid } from "react-icons/lia";
import { HiMiniBellAlert } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="relative z-50">
      <div className="space-y-9 mb-10">
        <div className="flex items-center group hover:border rounded-full duration-100 p-1 w-fit hover:bg-black hover:text-white px-3">
          <RiDashboardFill className="text-2xl hover:text-white cursor-pointer text-white" />
          <p className="opacity-0 group-hover:opacity-100 text-sm ml-2 pr-1 cursor-pointer">
            Dashboard
          </p>
        </div>
        <div className="flex items-center group hover:border rounded-full duration-100 p-1 w-fit hover:bg-black hover:text-white px-3">
          <PiTrolleySuitcaseFill className="text-2xl hover:text-white cursor-pointer text-white" />
          <p className="opacity-0 group-hover:opacity-100 text-sm ml-2 pr-1 cursor-pointer">
            Trolley
          </p>
        </div>
        <div className="flex items-center group hover:border rounded-full duration-100 p-1 w-fit hover:bg-black hover:text-white px-3">
          <MdOutlineLocationOn className="text-2xl hover:text-white cursor-pointer text-white" />
          <p className="opacity-0 group-hover:opacity-100 text-sm ml-2 pr-1 cursor-pointer">
            Geozones
          </p>
        </div>
        <div className="flex items-center group hover:border rounded-full duration-100 p-1 w-fit hover:bg-black hover:text-white px-3">
          <BiBuildings className="text-2xl hover:text-white cursor-pointer text-white" />
          <p className="opacity-0 group-hover:opacity-100 text-sm ml-2 pr-1 cursor-pointer">
            Nest
          </p>
        </div>
        <div className="flex items-center group hover:border rounded-full duration-100 p-1 w-fit hover:bg-black hover:text-white px-3">
          <BsDeviceSsd className="text-2xl hover:text-white cursor-pointer text-white" />
          <p className="opacity-0 group-hover:opacity-100 text-sm ml-2 pr-1 cursor-pointer">
            Tracker
          </p>
        </div>
        <div className="flex items-center group hover:border rounded-full duration-100 p-1 w-fit hover:bg-black hover:text-white px-3">
          <FaBatteryThreeQuarters className="text-2xl hover:text-white cursor-pointer text-white" />
          <p className="opacity-0 group-hover:opacity-100 text-sm ml-2 pr-1 v">
            Battery
          </p>
        </div>
        <div className="flex items-center group hover:border rounded-full duration-100 p-1 w-fit hover:bg-black hover:text-white px-3">
          <LiaUserClockSolid className="text-2xl hover:text-white cursor-pointer text-white" />
          <p className="opacity-0 group-hover:opacity-100 text-sm ml-2 pr-1 cursor-pointer">
            Duty Roster
          </p>
        </div>
        <div className="flex items-center group hover:border rounded-full duration-100 p-1 w-fit hover:bg-black hover:text-white px-3">
          <HiMiniBellAlert className="text-2xl hover:text-white cursor-pointer text-white" />
          <p className="opacity-0 group-hover:opacity-100 text-sm ml-2 pr-1 cursor-pointer">
            Alerts
          </p>
        </div>
        <div className="flex items-center group hover:border rounded-full duration-100 p-1 w-fit hover:bg-black hover:text-white px-3">
          <FaUsers className="text-2xl hover:text-white cursor-pointer text-white" />
          <p className="opacity-0 group-hover:opacity-100 text-sm ml-2 pr-1 cursor-pointer">
            User & Roles
          </p>
        </div>
        <div className="flex items-center group hover:border rounded-full duration-100 p-1 w-fit hover:bg-black hover:text-white px-3">
          <FaGears className="text-2xl hover:text-white cursor-pointer text-white" />
          <p className="opacity-0 group-hover:opacity-100 text-sm ml-2 pr-1 cursor-pointer">
            Configuration
          </p>
        </div>
        <div className="flex items-center group hover:border rounded-full duration-100 p-1 w-fit hover:bg-black hover:text-white px-3">
          <BiSolidReport className="text-2xl hover:text-white cursor-pointer text-white" />
          <p className="opacity-0 group-hover:opacity-100 text-sm ml-2 pr-1 cursor-pointer">
            Reports
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
