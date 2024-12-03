'use client';
import Image from 'next/image';
import React from 'react';
import hearts from '@/public/hearts.svg'
import headerImage from '@/public/headerHeart.svg'

const HeartsPricing: React.FC = () => {
  return (
    <div className="bg-[#efeff3] w-full sm:max-w-xs mx-auto flex-grow rounded-t-2xl py-6 px-4">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-6">
        <div className=" rounded-full w-24 p-3">
          <Image src={headerImage} alt='header image'/>
        </div>
        <p className="text-2xl font-bold mt-2">200</p>
        <p className="text-sm text-gray-500">Current Balance</p>
      </div>

      {/* Pricing Options */}
      <div className="space-y-3">
        {[
          { hearts: 200, price: "5.99$", discount: "save 10%" },
          { hearts: 500, price: "99.99$", discount: "save 20%" },
          { hearts: 1400, price: "5.99$", discount: "save 30%" },
          { hearts: 3500, price: "5.99$", discount: "save 40%" },
          { hearts: 8000, price: "99.99$", discount: "save 50%" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-6 justify-between border border-gray-200 rounded-lg bg-white p-2"
          >
            <div className="flex items-center space-x-4">
              <div className=" rounded-full w-28 ">
                <Image src={hearts} alt='hearts' className=''/>
                
              </div>
              <div>
                <p className="font-medium text-gray-900">{item.hearts} Hearts</p>
                <p className="text-xs text-gray-500">
                  This is a short description for the AI character
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-900 text-xl"> <span className='text-gray-500 text-sm font-normal'>only</span>  {item.price}</p>
              <p className="text-xs text-gray-500">{item.discount}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-500 text-center mt-6">
        By continuing, you agree to our <br />
        <a href="#" className="text-[#007cff] underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-[#007cff] underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default HeartsPricing;
