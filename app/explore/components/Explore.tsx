import React from "react";

const Explore: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white w-full sm:max-w-xs mx-auto flex-grow  rounded-2xl">
        <div className="flex flex-row justify-between items-center">
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
              <div className="w-16 h-16 bg-[#00b0ff] rounded-2xl mx-auto "></div>
              <h2 className="text-2xl font-bold mt-2 text-black">
                Explore Characters
              </h2>
              <p className="text-gray-500 tracking-tight px-4 text-sm">
                With Cloud Companions you can explore and chat with AI
                Characters
              </p>
            </div>
            <div className="grid grid-cols-2 sm:px-0 px-3 gap-4">
              {/* Example Card */}
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className=" relative bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <a href="./detail">
                  <img
                   
                    src="./Albert_Einstein.jpg" // Replace with actual image
                    alt="Character"
                    className="w-full rounded-lg h-40 "
                  />
                  <div className="">
                    <div className="absolute px-3 top-28">
                      <h3 className="text-lg font-bold">Albert</h3>
                      <p className="text-sm text-white">85 Years</p>
                    </div>
                    <p className="text-[10px] px-2 tracking-tighter text-gray-600 ">
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
    </div>
  );
};

export default Explore;
