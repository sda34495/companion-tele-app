'use client'
import Image from "next/image";
import React from "react";
import bgImage from "@/public/Albert_Einstein.jpg";
import Link from "next/link";

const Detail: React.FC = () => {
  return (
    <div className="bg-[#efeff3] w-full sm:max-w-xs mx-auto flex flex-col min-h-screen">
      {/* Background Image */}
      <Image src={bgImage} alt={"bg-image"} className="w-full h-[250px] object-cover " />

      <div className="bg-[#efeff3] w-full py-6 px-4 flex-grow mb-20">
        <div className="flex flex-col items-center ">
          {/* Icon Placeholder */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 overflow-hidden rounded-2xl mx-auto">
              <Image src={bgImage} alt={"Ai character image"} className="w-full" />
            </div>
            <h2 className="text-2xl font-bold text-black">Albert</h2>
            <p className="text-gray-500 px-6 text-lg">
              This is a short description for the AI character
            </p>
          </div>

          {/* Personality, Occupation, About Sections */}
          <div className="w-full max-w-sm space-y-6">
            {/* Personality Section */}
            <div>
              <h3 className="text-sm ml-2 text-gray-500 font-medium mb-1">
                PERSONALITY
              </h3>
              <p className=" bg-white rounded-lg px-3 py-3 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>

            {/* Occupation Section */}
            <div>
              <h3 className="text-sm ml-2 text-gray-500 font-medium mb-1">OCCUPATION</h3>
              <p className=" bg-white rounded-lg px-3 py-3 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>

            {/* About Section */}
            <div>
              <h3 className="text-sm ml-2 text-gray-500 font-medium mb-1">ABOUT</h3>
              <p className=" bg-white rounded-lg px-3 py-3 text-justify text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </p>
            </div>
          </div>


          {/* Bottom Buttons */}
        </div>
          {/* <hr className="border-gray-300 w-full "/> */}
      </div>

          {/* <div className="divide-y rounded-lg mt-6 px-3 ">
          <Link href="">
            <button className="flex bg-[#007cff] justify-center mb-3  w-full px-4 py-3  font-semibold text-center rounded-lg text-white">
            Chat Now
            </button>
          </Link>


          <Link href="">
            <button className="flex bg-white text-black justify-center  w-full px-4 py-3 mb-5 font-semibold text-center rounded-lg">
            Back to all Characters
            </button>
          </Link>



          
        </div> */}


<div className="fixed bottom-0 left-0 right-0 bg-[#f2f2f2] border-t border-gray-200 py-2 px-3 w-full max-w-sm mx-auto pb-[env(safe-area-inset-bottom)] ">
        <div className="pb-5">      
        <button className="flex mx-auto bg-[#007cff] items-center justify-center px-4 py-3 w-full text-white rounded-xl text-lg font-semibold">
        Chat Now
        </button>
        </div>
      </div>


    </div>
  );
};

export default Detail;
