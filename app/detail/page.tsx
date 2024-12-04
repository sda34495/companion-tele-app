'use client'
import React from 'react'
import DetailProfile from './components/DetailProfile'
import dynamic from 'next/dynamic';

function page() {
  const LazySection = dynamic(() => import('./components/DetailProfile'), { ssr: false });

  return (
   <>
   <LazySection/>
   </>
  )
}

export default page