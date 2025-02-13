import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { PieChart } from "@mui/x-charts/PieChart";
import { RxQuestionMarkCircled } from "react-icons/rx";

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
          <div className="grid grid-rows-3 grid-cols-5 grid-flow-col gap-2">
            <div className="bg-white rounded-lg p-4 border border-gray-300 col-span-1 h-auto">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-sans text-gray-700 text-lg">Trolleys</h1>
                </div>
                <div className="flex items-center gap-2">
                  <p className="rounded bg-blue-100 text-blue-700 font-bold font-sans text-xs p-2">
                    7000
                  </p>
                  <div className="border border-gray-300 rounded-full p-2">
                    <RxQuestionMarkCircled className="text-xl" />
                  </div>
                </div>
              </div>
              <div className="w-[200px] h-[200px] ">
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 5000, label: "Online" },
                        { id: 1, value: 2000, label: "Offline" },
                      ],
                      innerRadius: 20,
                      outerRadius: 60,
                    },
                  ]}
                  width={220}
                  height={220}
                />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-300 col-span-1 h-auto">
              <h1 className="font-sans text-gray-700 text-lg">
                Trolleys Under Maintenance
              </h1>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-300 col-span-2 h-auto">
              <h1 className="font-sans text-gray-700 text-lg">
                Most Trolleys by Geozone Tags
              </h1>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-300 col-span-1 h-auto">
              <h1 className="font-sans text-gray-700 text-lg">
                Total Geozones
              </h1>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-300 col-span-1 h-auto">
              <h1 className="font-sans text-gray-700 text-lg">
                Trolley Cleaning Status
              </h1>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-300 col-span-5 row-span-3">
              <h1 className="font-sans font-bold text-lg">Map View</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="bg-white rounded-lg p-4 border border-gray-300 col-span-1 h-auto">
              <h1 className="font-sans font-bold text-lg">
                Nest With Trolleys
              </h1>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-300 col-span-1 h-auto">
              <h1 className="font-sans font-bold text-lg">
                Unresolved Alert(S)
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
