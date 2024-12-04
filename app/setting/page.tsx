'use client'
import React from 'react'
import Setting from '../components/Setting'
import dynamic from 'next/dynamic';

function page() {
  const LazySection = dynamic(() => import('../../app/components/Setting'), { ssr: false });

  return (
    <LazySection/>
  )
}

export default page