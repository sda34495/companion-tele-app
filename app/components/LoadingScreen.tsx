'use client'
import React from "react";

const CloudChat: React.FC = () => {
  return (
    <div className="bg-[#efeff3] relative  w-full mx-auto rounded-t-2xl sm:max-w-xs  flex-grow">

        <div className="bg-[#efeff3] w-full  p-6 ">
          <div className="flex flex-col absolute top-36 right-0 left-0 px-2 items-center">
            {/* Icon Placeholder */}
            <div className="w-14 h-14 bg-[#00b306] rounded-2xl mb-4 mt-10"></div>
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-1 tracking-tight">
              Loading Screen
            </h2>
            {/* Subtitle */}
            <p className="text-sm text-[#787878] tracking-tight px-4 text-center mb-6">
              With Cloud Companions you can explore and chat with AI Characters
            </p>
            {/* Buttons */}
            <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg w-full bg-white">
              <button className="flex items-center justify-between w-full px-4 py-1.5 text-left text-black text-sm font-medium">
                Personal Settings
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-[#787878]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-between w-full px-4 py-1.5 text-left text-black text-sm font-medium">
                Purchase Hearts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-[#787878]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-between w-full px-4 py-1.5 text-left text-black text-sm font-medium">
                Reset Chat
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-[#787878]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
            <hr className=" border-gray-300 w-full mt-4" />

            {/* Bottom Button */}
          </div>
            <button className="w-full bg-[#007cff] text-white py-3 absolute bottom-0 right-0 left-0 rounded-lg text-sm font-semibold mt-6">
              Explore AI Characters
            </button>
        </div>
      </div>
  );
};

export default CloudChat;
