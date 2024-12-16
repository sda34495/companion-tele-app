"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import hearts from "@/public/hearts.svg";
import Link from "next/link";
import Button from "./Button";
import { useSearchParams } from "next/navigation";

const PaymentDetails: React.FC = () => {
  const searchParams = useSearchParams();

  // Extract parameters
  const hearts = searchParams.get("hearts");
  const price = searchParams.get("price");
  const discount = searchParams.get("discount");
  const image = searchParams.get("image");

  return (
    <div className="bg-[#efeff3] relative w-full sm:max-w-xs mx-auto flex-grow py-6 px-4">
      <div className="bg-white w-full rounded-lg p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-full h-full rounded-lg flex items-center justify-center">
            {image && (
              <Image
                src={image}
                alt="heart image"
                width={140}
                height={100}
                className="rounded-lg"
              />
            )}
          </div>
          <div className="ml-4">
            <h2 className="font-semibold text-xl text-black">{hearts} Hearts</h2>
            <p className="text-sm text-gray-500">
              This is a short description for the AI character
            </p>
            <p className="text-sm font-medium text-gray-500">
              Save {discount} only today!
            </p>
          </div>
        </div>

        <div className="text-sm ml-10 space-y-2 text-gray-500">
          <p>Description Feature 1</p>
          <p>Description Feature 2</p>
          <p>Description Feature 3</p>
          <p>Description Feature 4</p>
        </div>

        <div className="flex justify-between items-center text-black font-medium">
          <span>Total</span>
          <span>{price}</span>
        </div>
      </div>

      <div className="bg-white w-full mb-20 rounded-lg shadow-md mt-4">
        <button className="w-full flex justify-between items-center py-3 px-4 border-b border-gray-200 text-black">
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
        <div className="py-3 px-4 text-black flex justify-between">
          <span>Name</span>
          <span className="font-medium text-gray-600">LENNARD KLEIN</span>
        </div>
      </div>

      <Button name="Explore AI Characters" href="/explore" />
    </div>
  );
};

const PaymentScreen: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PaymentDetails />
  </Suspense>
);

export default PaymentScreen;
