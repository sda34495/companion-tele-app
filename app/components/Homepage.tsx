"use client";
import Link from "next/link";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#efeff3] relative w-full mx-auto sm:max-w-xs flex flex-col h-screen">
      <div className=" pb-20 flex-grow">
        <div className="flex mt-14 flex-col items-center">
          {/* Icon Placeholder */}
          <div className="w-14 h-14 bg-[#00b0ff] rounded-2xl mb-4 mt-10"></div>
          {/* Title */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-1 tracking-tight">
            Cloud Companions
          </h2>
          {/* Subtitle */}
          <p className="text-[#787878]  px-4 text-center mb-6">
            With Cloud Companions you can explore and chat with AI Characters
          </p>
          {/* Buttons */}
          <div className="w-full px-3">
            <div className="divide-y px-3 divide-gray-200 border border-gray-200 rounded-lg w-full bg-white">
              <Link href="./setting">
                <button className="flex items-center justify-between w-full py-3  font-medium text-left text-gray-900">
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
                <hr />
              </Link>
              <Link href="./payment">
                <button className="flex items-center justify-between w-full py-3  font-medium text-left text-gray-900">
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
              </Link>
              <hr />
              <Link href="./reset">
                <button className="flex items-center justify-between w-full py-3  font-medium text-left text-gray-900">
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
              </Link>
            </div>
          </div>
        </div>
      </div>
          <hr className="border-gray-300 w-full mt-4 mb-5" />
      {/* Button at the bottom */}
      <div className=" w-full px-3">
        <Link href="/explore">
          <button className="flex bg-[#007cff] justify-center w-full px-4 py-3 mb-5 font-semibold text-center rounded-lg text-white">
            Explore AI Characters
          </button>
        </Link>
      </div>
      
    </div>
  );
};

export default HomePage;
