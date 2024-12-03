'use client'
import Image from "next/image";
import React from "react";
import bgImage from "@/public/Albert_Einstein.jpg";

const Detail: React.FC = () => {
  return (
      <div className="bg-[#efeff3] w-full sm:max-w-xs mx-auto flex-grow">
        
        

        <Image src={bgImage} alt={"bg-image"} className="w-full" />
        <div className="bg-[#efeff3] w-full  py-6 px-4 ">
          <div className="flex flex-col items-center">
            {/* Icon Placeholder */}
            <div className="text-center mb-10">
              <div className="w-16 h-16 overflow-hidden rounded-2xl mx-auto ">
                <Image src={bgImage} alt={"Ai character image"} className="w-full" />
              </div>
              <h2 className="text-lg font-bold text-black">Albert</h2>
              <p className="text-gray-500 px-6 text-sm">
                This is a short description for the AI character
              </p>
            </div>

            <div className="w-full max-w-sm space-y-6">
        {/* Personality Section */}
        <div>
          <h3 className="text-xs ml-1 text-gray-500 font-medium mb-1">
            PERSONALITY
          </h3>
          <p className="text-sm bg-white rounded-lg px-1 py-2 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        {/* Occupation Section */}
        <div>
          <h3 className="text-xs ml-1 text-gray-500 font-medium mb-1">OCCUPATION</h3>
          <p className="text-sm bg-white rounded-lg px-1 py-2 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-xs ml-1 text-gray-500 font-medium mb-1">ABOUT</h3>
          <p className="text-sm bg-white rounded-lg px-1 py-2 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-sm bg-white rounded-lg px-1 py-2 text-gray-800">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-sm bg-white rounded-lg px-1 py-2 text-gray-800">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
             </div>
          


            <hr className=" border-gray-300 w-full mt-4" />

            {/* Bottom Button */}

            <button className="w-full bg-[#007cff] text-white py-2 rounded-lg text-sm font-semibold mt-6">
            Chat now
            </button>

            <button className="w-full bg-white text-black py-2 rounded-lg text-sm font-semibold mt-2">
              <a href="./explore">Back to all Characters</a>
            
            </button>



          </div>
        </div>
      </div>
  );
};

export default Detail;
