'use client'
import React from "react";
import bgImage from "@/public/Albert_Einstein.jpg";

const Explore: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white w-full max-w-xs rounded-2xl overflow-hidden">
        {/* Sticky Image Section */}
        <div className="relative h-[70vh]">
          <img
            src="./Albert_Einstein.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Scrollable Content */}
        <div
          className="bg-[#efeff3] p-6 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 70vh)" }}
        >
          <div className="flex flex-col items-center">
            <div className="text-center mb-10">
              <div className="w-16 h-16 overflow-hidden rounded-2xl mx-auto">
                <img src="./Albert_Einstein.jpg" alt="" className="w-full" />
              </div>
              <h2 className="text-lg font-bold text-black">Albert</h2>
              <p className="text-gray-500 tracking-tight px-6 text-xs">
                This is a short description for the AI character
              </p>
            </div>

            <div className="w-full max-w-sm space-y-6">
              {/* Personality Section */}
              <div>
                <h3 className="text-xs ml-1 text-gray-500 font-medium mb-1">
                  PERSONALITY
                </h3>
                <p className="text-sm bg-white rounded-lg px-1 py-2 text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>

              {/* Occupation Section */}
              <div>
                <h3 className="text-xs ml-1 text-gray-500 font-medium mb-1">
                  OCCUPATION
                </h3>
                <p className="text-sm bg-white rounded-lg px-1 py-2 text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>

              {/* About Section */}
              <div>
                <h3 className="text-xs ml-1 text-gray-500 font-medium mb-1">
                  ABOUT
                </h3>
                <p className="text-sm bg-white rounded-lg px-1 py-2 text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-sm bg-white rounded-lg px-1 py-2 text-gray-800">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            <hr className="border-gray-300 w-full mt-4" />

            {/* Bottom Buttons */}
            <button className="w-full bg-[#007cff] text-white py-2 rounded-lg text-sm font-semibold mt-6">
              Chat now
            </button>
            <button className="w-full bg-white text-black py-2 rounded-lg text-sm font-semibold mt-2">
              Back to all Characters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
