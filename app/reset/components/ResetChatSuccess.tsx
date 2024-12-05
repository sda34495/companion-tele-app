'use client'
import Link from "next/link";
import React from "react";

const ResetChatSuccess: React.FC = () => {
  return (
      <div className="bg-[#efeff3] w-full relative sm:max-w-xs mx-auto rounded-t-2xl flex-grow">
        
        <div className="bg-[#efeff3] w-full  p-6 ">
          <div className="flex flex-col absolute top-52 right-0 left-0 px-2 items-center">
            {/* Icon Placeholder */}
            <div className="text-center mb-10">
             
              <h2 className="text-2xl font-semibold tracking-tighter leading-tight mt-2 px-4 text-black">
              Chat memory has been reset and you can start a new conversation!
              </h2>
              <p className="text-gray-500 tracking-tight px-3 mt-2 text-sm">
              To clear existing messages in the chat, tap the profile picture, go to “More,” and select “Clear Messages.”
              </p>
            </div>




        
                   
            <button className="w-[335px] mx-auto  bg-[#007cff]  text-white py-3   rounded-lg text-sm font-semibold ">
            Open Chat
            
            </button>

            <Link href='./explore'>
            <button className="w-[335px] mx-auto  mt-2 bg-white  text-black py-3   rounded-lg text-sm font-semibold ">
            Explore more AI Characters
            </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default ResetChatSuccess;
