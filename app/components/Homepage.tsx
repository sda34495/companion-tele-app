"use client";
import Link from "next/link";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#efeff3] relative  w-full mx-auto sm:max-w-xs  flex-grow">
      <div className="bg-[#efeff3] w-full  ">
        <div className="flex absolute top-36 right-0 left-0 flex-col  items-center">
          {/* Icon Placeholder */}
          <div className="w-14 h-14 bg-[#00b0ff] rounded-2xl mb-4 mt-10"></div>
          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-800 mb-1 tracking-tight">
            Cloud Companions
          </h2>
          {/* Subtitle */}
          <p className="text-sm  text-[#787878] px-4 text-center mb-6">
            With Cloud Companions you can explore and chat with AI Characters
          </p>
          {/* Buttons */}
          <div className="w-full px-3">

          <div className="divide-y px-3 divide-gray-200 border border-gray-200 rounded-lg w-full bg-white">
            <Link href="./setting">
              <button className="flex items-center justify-between w-full  py-3 text-sm font-medium text-left text-gray-900">
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

            <Link href='./payment'>
            <button className="flex items-center justify-between w-full  py-3 text-sm font-medium text-left text-gray-900">
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
              <button className="flex items-center justify-between w-full  py-3 text-sm font-medium text-left text-gray-900">
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
          <hr className=" border-gray-300 w-full mt-4 " />

          {/* Bottom Button */}
        </div>

        <Link href="./explore">
          <button className="w-[335px] mx-auto  bg-[#007cff] absolute bottom-3 right-0 left-0 text-white py-3  rounded-lg text-sm font-semibold ">
            Explore AI Characters
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
