'use client'
import Link from "next/link";
import React from "react";

const ResetChatPrompt: React.FC = () => {
  return (
      <div className="bg-[#efeff3] w-full relative sm:max-w-xs mx-auto rounded-t-2xl flex-grow">
        
        <div className="bg-[#efeff3] w-full  p-6 ">
          <div className="flex flex-col absolute top-52 right-0 left-0 px-2 items-center">
            {/* Icon Placeholder */}
            <div className="text-center mb-10">
             
              <h2 className="text-2xl font-semibold tracking-tighter leading-tight mt-2 px-4 text-black">
              Are you sure you want to reset your chat with Einstein ?
              </h2>
              <p className="text-gray-500 tracking-tight px-3 mt-2 text-sm">
              Your AI Companion will lose all memories of past interactions, giving you a fresh start.
              </p>
            </div>




        
                   
          </div>
          <Link href='./success'>
            <button className="w-3/4 mx-auto bg-[#007cff] absolute bottom-20 right-0 left-0 text-white py-4 rounded-lg text-sm font-semibold ">
            Yes, delete chat memory
            </button>
          </Link>

            <Link href='/'>
            <button className="w-3/4 mx-auto absolute bottom-5 right-0 left-0 bg-white text-black py-4 rounded-lg text-sm font-semibold ">
           No, go back
            </button>
            </Link>
        </div>
      </div>
  );
};

export default ResetChatPrompt;
