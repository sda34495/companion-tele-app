'use client'
import React from 'react'
import ResetChatPrompt from './components/ResetChatPrompt'
import dynamic from 'next/dynamic';

function page() {
  const LazySection = dynamic(() => import('./components/ResetChatPrompt'), { ssr: false });

  return (
   <LazySection/>
  )
}

export default page