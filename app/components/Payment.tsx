'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import mainHeart from '@/public/mainHeart.jpg';

const HeartsPricing: React.FC = () => {
  const items = [
    { hearts: 200, price: '5.99$', discount: 'save 10%', image: '/Heart1.jpg' },
    { hearts: 500, price: '99.99$', discount: 'save 20%', image: '/Heart2.jpg' },
    { hearts: 1400, price: '5.99$', discount: 'save 30%', image: '/Heart3.jpg' },
    { hearts: 3500, price: '5.99$', discount: 'save 40%', image: '/Heart4.jpg' },
  ];

  return (
    <div className="bg-[#efeff3] relative w-full sm:max-w-xs mx-auto flex-grow py-6 px-4">
      <div className="flex flex-col items-center mb-6">
        <div className="rounded-full w-24 p-3 mt-6">
          <Image src={mainHeart} alt="header image" priority />
        </div>
        <p className="text-3xl font-bold ">200</p>
        <p className="text-gray-500">Current Balance</p>
      </div>

      <div className="space-y-3 mb-8">
        {items.map((item, index) => (
          <Link
            href={{
              pathname: '/checkout',
              query: {
                hearts: item.hearts,
                price: item.price,
                discount: item.discount,
                image: item.image, // Pass the image path as a string
              },
            }}
            key={index}
            className="flex items-center space-x-6 justify-between border border-gray-200 rounded-lg bg-white p-2"
          >
            <div className="flex items-center space-x-4">
              <div className="rounded-full w-28">
                <Image src={item.image} alt="hearts" className="rounded-lg" priority width={100} height={100} />
              </div>
              <div>
                <p className="font-medium text-lg text-gray-900">{item.hearts} Hearts</p>
                <p className="text-sm text-gray-500">
                  This is a short description for the AI character
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-900 text-xl">
                <span className="text-gray-500 text-sm font-normal">only</span> {item.price}
              </p>
              <p className="text-xs text-gray-500">{item.discount}</p>
            </div>
          </Link>
        ))}
      </div>
      <p className="text-xs absolute bottom-3 left-0 right-0 text-gray-500 text-center mt-6">
        By continuing, you agree to our <br />
        <a href="#" className="text-[#007cff] underline">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="text-[#007cff] underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default HeartsPricing;
