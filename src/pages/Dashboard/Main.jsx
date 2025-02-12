import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const Main = () => {
  return (
    <div className="bg-blue-900 pb-10">
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-15">
        <div className="pl-10 pt-10 col-span-1 flex">
          <Sidebar />
        </div>
        {/* Big Dashboard */}
        <div className="bg-white col-span-14 rounded-lg mr-5 p-5">
          {/* Trolleys Data */}
          <div className="grid grid-rows-3 grid-cols-5 grid-flow-col gap-3">
            <div className="bg-white rounded-lg p-[80px] drop-shadow-lg col-span-1">
              <h1>Trolley Data</h1>
            </div>
            <div className="bg-white rounded-lg p-[80px] drop-shadow-lg col-span-1">
              <h1>Trolleys Under Maintenance</h1>
            </div>
            <div className="bg-white rounded-lg p-[80px] drop-shadow-lg col-span-2">
              <h1>Most Trolleys by Geozone Tags</h1>
            </div>
            <div className="bg-white rounded-lg p-[80px] drop-shadow-lg col-span-1">
              <h1>Total Geozones</h1>
            </div>
            <div className="bg-white rounded-lg p-[80px] drop-shadow-lg col-span-1">
              <h1>Trolley Cleaning Status</h1>
            </div>
            <div className="bg-white rounded-lg p-[80px] drop-shadow-lg col-span-5 row-span-3">
              <h1>Map View</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-white rounded-lg p-[80px] drop-shadow-lg col-span-1">
              <h1>Nest With Trolleys</h1>
            </div>
            <div className="bg-white rounded-lg p-[80px] drop-shadow-lg col-span-1">
              <h1>Unresolved Alert(S)</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
