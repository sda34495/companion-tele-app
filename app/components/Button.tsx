'use client'

import Link from 'next/link';
import React from 'react'

import { useEffect, useRef } from "react";

export default function Button(props:any) {
  const buttonRef1 = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const addHapticFeedback = (buttonRef: React.RefObject<HTMLButtonElement>) => {
      if (window.Telegram?.WebApp.HapticFeedback && buttonRef.current) {
        buttonRef.current.addEventListener("click", () => {
          window.Telegram?.WebApp.HapticFeedback.impactOccurred("light");
        });
      }
    };

    // Attach haptic feedback to buttons
    addHapticFeedback(buttonRef1);
   
    return () => {
      if (buttonRef1.current) {
        buttonRef1.current.removeEventListener("click", () => {
          window.Telegram?.WebApp.HapticFeedback.impactOccurred("light");
        });
      }
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#f2f2f2] border-t border-gray-200 py-2 px-3 w-full mx-auto pb-[env(safe-area-inset-bottom)] ">
        <div className="pb-5">
          <Link href={props.href}>
            <button className="flex mx-auto bg-[#007cff] items-center justify-center px-4 py-3 w-full text-white rounded-xl text-lg font-semibold"
            ref={buttonRef1}
            >
              {props.name}
            </button>
          </Link>
        </div>
      </div>
  );
}