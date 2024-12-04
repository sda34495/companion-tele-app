'use client'
import React from 'react'
import ResetChatSuccess from '../reset/components/ResetChatSuccess'
import dynamic from 'next/dynamic';

function page() {
  const LazySection = dynamic(() => import('../reset/components/ResetChatSuccess'), { ssr: false });

  return (
    <LazySection/>
  )
}

export default page