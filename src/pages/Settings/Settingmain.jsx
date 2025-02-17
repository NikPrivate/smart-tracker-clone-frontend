import React from "react";
import Settingheader from "../../components/Settingheader";
import { Link } from "react-router-dom";

const Settingmain = () => {
  return (
    <div>
      <Settingheader />
      <div className="px-[220px] mt-5">
        <div className="flex items-center gap-10">
          <div className="border px-2 py-1">
            <Link to="/termsncondition">
              <p>Terms and Conditions of Use</p>
            </Link>
          </div>
          <div className="border px-2 py-1">
            <Link to="/privacypolicy">
              <p>Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settingmain;
