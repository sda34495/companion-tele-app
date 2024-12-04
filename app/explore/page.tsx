'use client'
import React from 'react'
import Explore from './components/Explore'
import dynamic from 'next/dynamic';

function page() {

  const LazySection = dynamic(() => import('./components/Explore'), { ssr: false });

  return (
<>
 <LazySection/>
</>
  )
}

export default page