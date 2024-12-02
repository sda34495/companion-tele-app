'use client'
import React from "react";

const Explore: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-[#efeff3] w-full sm:max-w-xs mx-auto rounded-t-2xl flex-grow">
        <div className=" bg-white flex flex-row justify-between rounded-t-2xl items-center">
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
        <div className="bg-[#efeff3] w-full  p-6 ">
          <div className="flex flex-col items-center">
            {/* Icon Placeholder */}
            <div className="text-center mb-10">
             
              <h2 className="text-xl font-semibold tracking-tighter leading-tight mt-2 px-4 text-black">
              Are you sure you want to reset your chat with Einstein ?
              </h2>
              <p className="text-gray-500 tracking-tight px-3 mt-2 text-xs">
              Your AI Companion will lose all memories of past interactions, giving you a fresh start.
              </p>
            </div>


            <button className="w-full bg-[#007cff] text-white py-2 rounded-lg text-sm font-semibold mt-6">
            Yes, delete chat memory
            </button>

            <button className="w-full bg-white text-black py-2 rounded-lg text-sm font-semibold mt-2">
           No, go back
            </button>


        
                   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
