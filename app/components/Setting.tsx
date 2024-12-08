"use client";
import Link from "next/link";
import React from "react";

const Settings: React.FC = () => {
  return (
    <div className="bg-[#efeff3] w-full sm:max-w-xs mx-auto flex-grow">
      <div className=" py-6 flex-col w-full sm:max-w-xs mx-auto   ">
        {/* Profile Details */}
        <div className="px-3">
          <h3 className="text-sm ml-2 text-gray-500 font-medium mb-2 ">
            PROFILE DETAILS
          </h3>
          <div className=" overflow-hidden rounded-lg  bg-white">

          <div className="flex flex-row items-start hover:bg-gray-300 justify-between px-4 py-3">
  <h1 className="font-medium text-gray-900">Name</h1>
  <div className="flex items-center space-x-2">
    <span className="text-gray-500">Lennard</span>
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
  </div>
</div>
              <hr className="border- border-gray-200 mx-4" />  

            <div className="flex flex-row items-center hover:bg-gray-300 justify-between px-4 py-3">
            <h1 className="  font-medium text-gray-900">
              Gender
              </h1>
              <div className="flex items-center space-x-2">

              <span className="text-gray-500">Male</span>
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
                  </div>
                  </div>
                  <hr className="border- border-gray-200 mx-4" /> 
              
                  <div className="flex flex-row items-center hover:bg-gray-300 justify-between px-4 py-3">
            <h1 className="  font-medium text-gray-900">
            Email </h1>
            <div className="flex items-center space-x-2">
            <span className="text-gray-500 ">mail@gmail.com</span>
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
                  </div>            
            </div>
            <hr className="border- border-gray-200 mx-4" /> 

            <div className="flex flex-row items-center hover:bg-gray-300 justify-between px-4 py-3">
            <h1 className=" font-medium text-gray-900">
            Language </h1>
            <div className="flex items-center space-x-2">

            <span className="text-gray-500 self-end ">English</span>
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
            </div>
                  </div>
          </div>
        </div>

        <hr className="mt-5 border-gray-300" />

        {/* Chat Settings */}
        <div className="mt-5 px-3">
          <h3 className="text-sm ml-2 text-gray-500 font-medium mb-2">
            CHAT SETTINGS
          </h3>
          <div className="flex hover:bg-gray-300 items-center justify-between px-4 py-3 border border-gray-200 rounded-lg bg-white">
            <span className=" text-gray-900">Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              {/* <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500 hover:peer-checked:bg-green-500"></div> */}
            </label>
          </div>
          <p className="text-sm mx-3 text-gray-500 mt-2">
            Your AI Companion may proactively send messages to spark
            conversations and keep you connected.
          </p>
        </div>

        <hr className="mt-5 border-gray-300" />

        {/* Help & Legal */}
        <div className="mt-6 px-3">
          <h3 className="text-sm ml-2 text-gray-500 font-medium mb-2">
            HELP & LEGAL
          </h3>
          <div className=" overflow-hidden rounded-lg bg-white ">
            <button className="flex hover:bg-gray-300 items-center justify-between w-full px-4 py-3  font-medium text-left text-gray-900">
              Imprint
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
            <hr className="border- border-gray-200 mx-4" /> 
            <button className="flex items-center hover:bg-gray-300 justify-between w-full px-4 py-3  font-medium text-left text-gray-900">
              Privacy Policy
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
            <hr className="border- border-gray-200 mx-4" /> 
            <button className="flex items-center hover:bg-gray-300 justify-between w-full px-4 py-3  font-medium text-left text-gray-900">
              Terms of Use
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
            <hr className="border- border-gray-200 mx-4" /> 
            <button className="flex items-center hover:bg-gray-300 justify-between w-full px-4 py-3  font-medium text-left text-gray-900">
              Contact Support
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
        </div>



        <hr className="mt-5 border-gray-300" />

{/* Help & Legal */}
<div className="mt-6 px-3">
  <h3 className="text-sm ml-2 text-gray-500 font-medium mb-2">
    HELP & LEGAL
  </h3>
  <div className=" overflow-hidden rounded-lg bg-white ">
    <button className="flex hover:bg-gray-300 items-center justify-between w-full px-4 py-3  font-medium text-left text-gray-900">
      Imprint
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
    <hr className="border- border-gray-200 mx-4" /> 
    <button className="flex items-center hover:bg-gray-300 justify-between w-full px-4 py-3  font-medium text-left text-gray-900">
      Privacy Policy
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
    <hr className="border- border-gray-200 mx-4" /> 
    <button className="flex items-center hover:bg-gray-300 justify-between w-full px-4 py-3  font-medium text-left text-gray-900">
      Terms of Use
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
    <hr className="border- border-gray-200 mx-4" /> 
    <button className="flex items-center hover:bg-gray-300 justify-between w-full px-4 py-3  font-medium text-left text-gray-900">
      Contact Support
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
</div>

        {/* <hr className="mt-5 border-gray-300" /> */}

        {/* Help & Legal */}
        {/* <div className="mt-6 px-3">
          <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg bg-white mb-">
            <button className="flex bg-[#007cff] justify-center  w-full px-4 py-3  font-semibold text-center rounded-lg text-white">
            Become an Affiliate
            </button>
          </div>
        </div> */}

        {/* <hr className="mt-5 border-gray-300" /> */}

      </div>
        <div className="fixed bottom-0 left-0 right-0 bg-[#f2f2f2] w-full max-w-sm mx-auto">
        <button className="flex mx-auto bg-[#007cff] items-center justify-center py-3 m-6 w-full text-white rounded-lg text-lg font-semibold">
          Become an Affiliate
        </button>
      </div>
    </div>
  );
};

export default Settings;
