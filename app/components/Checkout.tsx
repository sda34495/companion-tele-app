'use client';
import Image from 'next/image';
import React from 'react';
import hearts from '@/public/hearts.svg'

const PaymentScreen: React.FC = () => {
  return (
    <div className="bg-[#efeff3] relative w-full sm:max-w-xs mx-auto flex-grow  py-6 px-4">
      {/* Card Section */}
      <div className="bg-white w-full rounded-lg shadow-md p-4  space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="w-full h-full rounded-lg flex items-center justify-center">
            {/* Placeholder for Heart Image */}
           
           <Image src={hearts} alt='heart image' className=''/>
          </div>
          <div className="ml-4 ">
            <h2 className="text-base font-semibold text-black">200 Hearts</h2>
            <p className="text-sm text-gray-500">
              This is a short description for the AI character
            </p>
            <p className="text-sm font-medium text-gray-500">Save X% only today!</p>
          </div>
        </div>

        {/* Feature List */}
        <div className="text-sm ml-10 space-y-2 text-gray-500">
          <p>Description Feature 1</p>
          <p>Description Feature 2</p>
          <p>Description Feature 3</p>
          <p>Description Feature 4</p>
        </div>

        {/* border-t border-gray-200 pt-3 */}
        {/* Total Section */}
        <div className="flex justify-between items-center text-black font-medium ">
          <span>Total</span>
          <span>$5.99</span>
        </div>
      </div>

      {/* Payment Details Section */}
      <div className="bg-white w-full rounded-lg shadow-md mt-4 ">
        <button className="w-full flex justify-between items-center py-3 px-4 border-b border-gray-200 text-sm text-black">
          <span>Payment Method</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <div className="py-3 px-4 text-sm text-black flex justify-between">
          <span>Name</span>
          <span className="font-medium text-gray-600">LENNARD KLEIN</span>
        </div>
      </div>

      {/* Explore Button */}
      <button className="w-3/4 mx-auto  bg-[#007cff] absolute bottom-3 right-0 left-0 text-white py-3  rounded-lg text-sm font-semibold ">
        Explore AI Characters
      </button>
    </div>
  );
};

export default PaymentScreen;
