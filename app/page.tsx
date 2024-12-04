'use client'
import Homepage from "./components/Homepage";
import LoadingScreen from "./components/LoadingScreen";
import ResetChat from "./reset/components/ResetChatPrompt";
import ResetChatSuccess from "./reset/components/ResetChatSuccess";
import Setting from "./components/Setting";
import dynamic from "next/dynamic";



const LazySection = dynamic(() => import('@/app/components/Homepage'), { ssr: false });



export default function Home() {
  return (
    
    <>
    {/* <Homepage/> */}
    <LazySection/>
    {/* <Setting/> */}
    {/* <ResetChat/> */}
    {/* <LoadingScreen/> */}
{/* <ResetChatSuccess/> */}
  
    </>

  )
}
