'use client'
import React from 'react'
import Payment from '../components/Payment'
import dynamic from 'next/dynamic';

function page() {
  const LazySection = dynamic(() => import('../../app/components/Payment'), { ssr: false });

  return (
   <LazySection/>
  )
}

export default page