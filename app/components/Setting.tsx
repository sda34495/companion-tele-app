"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Settings: React.FC = () => {
  return (
    <div className="bg-[#efeff3] w-full sm:max-w-xs mx-auto flex-grow">
      <div className=" py-6 flex-col w-full sm:max-w-xs mx-auto mb-20   ">
        {/* Profile Details */}
        <div className="px-3">
          <h3 className="text-sm ml-2 text-gray-500 font-medium mb-2 ">
            PROFILE DETAILS
          </h3>
          <div className="overflow-hidden rounded-lg bg-white">
            {/* Name Field */}
            <div className="flex flex-row items-center hover:bg-gray-300 justify-between px-4 py-3">
              <h1 className="font-medium text-gray-900">Name</h1>
              <div className="flex items-center space-x-2 w-2/3">
                <input
                  className="w-full text-gray-500 text-end focus:outline-none bg-transparent placeholder-gray-500"
                  placeholder="Lennard"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-[#787878]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <hr className="border-gray-200 mx-4" />

            {/* Gender Field */}
            <div className="flex flex-row items-center hover:bg-gray-300 justify-between px-4 py-3">
              <h1 className="font-medium text-gray-900">Gender</h1>
              <div className="flex items-center space-x-2 w-2/3">
                <input
                  className="w-full text-gray-500 text-end focus:outline-none bg-transparent placeholder-gray-500"
                  placeholder="Male"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-[#787878]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <hr className="border-gray-200 mx-4" />

            {/* Email Field */}
            <div className="flex flex-row items-center hover:bg-gray-300 justify-between px-4 py-3">
              <h1 className="font-medium text-gray-900">Email</h1>
              <div className="flex items-center space-x-2 w-2/3">
                <input
                  className="w-full text-gray-500 text-end focus:outline-none bg-transparent placeholder-gray-500"
                  placeholder="mail@gmail.com"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-[#787878]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <hr className="border-gray-200 mx-4" />

            {/* Language Field */}
            <div className="flex flex-row items-center hover:bg-gray-300 justify-between px-4 py-3">
              <h1 className="font-medium text-gray-900">Language</h1>
              <div className="flex items-center space-x-2 w-2/3">
                <input
                  className="w-full text-gray-500 text-end focus:outline-none bg-transparent placeholder-gray-500"
                  placeholder="English"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-[#787878]"
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
            <span className=" text-gray-900 font-bold">Notifications</span>
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
            <a href="https://www.cloud-companions.com/legal/imprint" target="_blank"
              rel="noopener noreferrer">

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
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                </svg>
              </button>
                    </a>

            <hr className="border- border-gray-200 mx-4" />

            <a
              href=" https://www.cloud-companions.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
             
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
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </button>
            </a>

            <hr className="border- border-gray-200 mx-4" />

            <a
              href="https://www.cloud-companions.com/legal/terms-of-use"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </button>
            </a>

            <hr className="border- border-gray-200 mx-4" />

            <a
              href="https://t.me/lennardklein"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>

        {/* <hr className="mt-5 border-gray-300" /> */}
      </div>
      {/* <div className="fixed bottom-0 left-0 right-0 bg-[#f2f2f2] border-t border-gray-200 py-2 px-3 w-full mx-auto pb-[env(safe-area-inset-bottom)] ">
        <div className="pb-5">
          <button className="flex mx-auto bg-[#007cff] items-center justify-center px-4 py-3 w-full text-white rounded-xl text-lg font-semibold">
            Become an Affiliate
          </button>
        </div>
      </div> */}

      <Button name="Become an Affiliate" href="" />
    </div>
  );
};

export default Settings;
