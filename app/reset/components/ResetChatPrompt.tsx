"use client";
import Button from "@/app/components/Button";
import React from "react";
import bgImage from '@/public/Albert_Einstein.jpg'
import Image from "next/image";

const ResetChatPrompt: React.FC = () => {
  return (
    <div className="bg-[#efeff3] w-full sm:max-w-xs mx-auto rounded-t-2xl flex-grow">
      <div className="bg-[#efeff3] w-full  p-6 ">
        <div className="flex flex-col absolute top-52 right-0 left-0 px-2 items-center">
          {/* Icon Placeholder */}
          <div className="text-center mb-10">
          <div className="w-16 h-16 overflow-hidden rounded-2xl mx-auto">
              <Image
                src={bgImage}
                alt={"Ai character image"}
                className="w-full"
              />
            </div>
            <h2 className="text-2xl font-semibold tracking-tighter leading-tight mt-2 px-4 text-black">
              Are you sure you want to reset your chat with Einstein ?
            </h2>
            <p className="text-gray-500 tracking-tight px-3 mt-2 text-sm">
              Your AI Companion will lose all memories of past interactions,
              giving you a fresh start.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="fixed bottom-0 left-0 right-0 bg-[#f2f2f2] border-t border-gray-200 py-2 px-3 w-full mx-auto pb-[env(safe-area-inset-bottom)] ">
        <div className="pb-5">
          <Link href="/success">
            <button className="flex mx-auto bg-[#007cff] items-center justify-center px-4 py-3 w-full text-white rounded-xl text-lg font-semibold">
              Yes, delete chat memory
            </button>
          </Link>
        </div>
      </div> */}

      <Button name='Yes, delete chat memory' href="/success" />
    </div>
  );
};

export default ResetChatPrompt;
