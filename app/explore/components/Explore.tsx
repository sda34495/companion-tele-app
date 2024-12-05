import Image from "next/image";
import React from "react";
import EinstineImage from '@/public/Albert_Einstein.jpg'

const Explore: React.FC = () => {
  return (
      <div className="bg-[#efeff3] w-full sm:max-w-xs mx-auto flex-grow  ">
        <div className="flex flex-row justify-between items-center">
          

  
         
        </div>
        <div className="bg-[#efeff3] w-full  py-6 px-3 ">
          <div className="flex flex-col items-center">
            {/* Icon Placeholder */}
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-[#00b0ff] rounded-2xl mx-auto "></div>
              <h2 className="text-3xl font-bold mt-2 text-teal-500">
                Explore Characters with us 
              </h2>
              <p className="text-gray-500  px-4 tracking-tighter">
                With Cloud Companions you can explore and chat with AI
                Characters
              </p>
            </div>
            <div className="grid grid-cols-2  gap-4">
              {/* Example Card */}
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className=" relative bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <a href="./detail">
                  <Image
                   
                    src={EinstineImage}
                    alt="Character"
                    className="w-full rounded-lg h-40 object-cover "
                    priority
                  />
                  <div className="">
                    <div className="absolute px-3 top-28">
                      <h3 className="text-lg font-semibold text-white">Albert</h3>
                      <p className="text-sm text-white ">85 Years</p>
                    </div>
                    <p className="text-xs px-2 py-1 text-gray-600 ">
                      This is a short description for the AI character.
                    </p>
                  </div>
                    </a>
                </div>
              ))}
            </div>


            <hr className=" border-gray-300 w-full mt-4" />
            {/* Bottom Button */}
          </div>
        </div>
      </div>
  );
};

export default Explore;
