'use client';
import Link from 'next/link';
import React from 'react';

const Settings: React.FC = () => {

  
  return (
    <div className="bg-[#efeff3] relative w-full sm:max-w-xs mx-auto flex-grow">
      <div className="py-6 px-4">

        {/* Profile Details */}
        <div>
          <h3 className="text-xs text-gray-500 font-medium mb-2 ">
            PROFILE DETAILS
          </h3>
          <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg bg-white">
            <button className="flex space-x-0 items-center justify-between w-full px-4 py-3 text-sm font-medium text-left text-gray-900">
              Name
              <span className="text-gray-500 ">Lennard</span>
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
            <button className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left text-gray-900">
              Gender
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
            </button>
            <button className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left text-gray-900">
              Email
              <span className="text-gray-500">mail@lennard-klein.com</span>
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
            <button className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left text-gray-900">
              Language
              <span className="text-gray-500">English</span>
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

        {/* Chat Settings */}
        <div className="mt-6">
          <h3 className="text-xs text-gray-500 font-medium mb-2">
            CHAT SETTINGS
          </h3>
          <div className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg bg-white">
            <span className="text-sm text-gray-900">Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
<input type="checkbox" value="" className="sr-only peer"/>
<div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500 hover:peer-checked:bg-green-500"></div>
</label>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Your AI Companion may proactively send messages to spark
            conversations and keep you connected.
          </p>
        </div>

        {/* Help & Legal */}
        <div className="mt-6">
          
          <h3 className="text-xs text-gray-500 font-medium mb-2">
            HELP & LEGAL
          </h3>
          <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg bg-white">
            <button className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left text-gray-900">
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
            <button className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left text-gray-900">
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
            <button className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left text-gray-900">
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
            <button className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left text-gray-900">
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

        {/* Affiliate Button */}
        <div className="mt-6 ">
          <button className="w-full bg-[#007cff] absolute bottom-0 left-0 right-0 text-white py-3 rounded-lg text-sm font-medium">
            Become an Affiliate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
