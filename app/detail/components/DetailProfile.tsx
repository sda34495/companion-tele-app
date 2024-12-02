'use client'
import Image from "next/image";
import React from "react";
import bgImage from "@/public/Albert_Einstein.jpg";

const Explore: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-[#efeff3] w-full max-w-xs mx-auto flex-grow rounded-t-2xl">
        <div className="bg-white flex flex-row justify-between rounded-t-2xl items-center">
          <div className="px-3  py-2 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-[#007cff]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>

            <button className="text-[#007cff] text-sm self-center font-bold">
              Back
            </button>
          </div>

          <div className="flex flex-col items-center text-center px-3 py-2">
            <h1 className="text-black font-bold tracking-tight">Cloud Chat</h1>
            <p className="-mt-1 text-xs text-[#787878]">mini app</p>
          </div>
          <button className="px-3 py-2">
            <img src="./threedots.svg" />
          </button>
        </div>
        

        <img src="./Albert_Einstein.jpg" alt={""} className="w-full" />
        <div className="bg-[#efeff3] w-full  p-6 ">
          <div className="flex flex-col items-center">
            {/* Icon Placeholder */}
            <div className="text-center mb-10">
              <div className="w-16 h-16 overflow-hidden rounded-2xl mx-auto ">
                <img src="./Albert_Einstein.jpg" alt={""} className="w-full" />
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
          <h3 className="text-xs ml-1 text-gray-500 font-medium mb-1">OCCUPATION</h3>
          <p className="text-sm bg-white rounded-lg px-1 py-2 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-xs ml-1 text-gray-500 font-medium mb-1">ABOUT</h3>
          <p className="text-sm bg-white rounded-lg px-1 py-2 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-sm bg-white rounded-lg px-1 py-2 text-gray-800">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-sm bg-white rounded-lg px-1 py-2 text-gray-800">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
             </div>
          


            <hr className=" border-gray-300 w-full mt-4" />

            {/* Bottom Button */}

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
